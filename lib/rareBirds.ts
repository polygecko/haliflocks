// This module reads EBIRD_API_KEY (a server-only env var, no NEXT_PUBLIC_
// prefix) and is imported only by the RareBirdBanner server component, so the
// key never reaches the client bundle.

// Centre of the search: downtown Halifax. eBird returns "notable" (locally rare
// or unusual) sightings within `dist` km, which is the same data that powers
// eBird's Rare Bird Alert emails.
const HALIFAX_LAT = 44.65;
const HALIFAX_LNG = -63.57;
const RADIUS_KM = 50;
const LOOKBACK_DAYS = 14;

// eBird county region for "view all" links (Halifax, Nova Scotia).
export const EBIRD_REGION = 'CA-NS-HL';

/** Raw shape of an observation from the eBird API 2.0 notable endpoint. */
interface EBirdObservation {
  speciesCode: string;
  comName: string;
  sciName: string;
  locName: string;
  obsDt: string; // "YYYY-MM-DD HH:mm" or "YYYY-MM-DD"
  howMany?: number;
  subId: string; // checklist id, e.g. "S355574665"
  obsReviewed: boolean;
  obsValid: boolean;
}

/** A trimmed, serializable sighting for the UI. */
export interface RareBird {
  speciesCode: string;
  comName: string;
  sciName: string;
  locName: string;
  obsDt: string;
  howMany: number | null;
  /** Link to the eBird checklist this sighting came from. */
  checklistUrl: string;
  /** True once a regional reviewer has confirmed the record. */
  confirmed: boolean;
}

/**
 * Fetch recent notable bird sightings near Halifax, newest first and
 * de-duplicated to one entry per species. Cached for an hour so eBird is
 * queried at most once per hour regardless of site traffic. Returns an empty
 * array on any failure (missing key, network error, bad response) so the
 * banner simply hides rather than breaking the page.
 */
export async function getRareBirds(): Promise<RareBird[]> {
  const key = process.env.EBIRD_API_KEY;
  if (!key) return [];

  const url =
    `https://api.ebird.org/v2/data/obs/geo/recent/notable` +
    `?lat=${HALIFAX_LAT}&lng=${HALIFAX_LNG}&dist=${RADIUS_KM}` +
    `&back=${LOOKBACK_DAYS}&detail=full`;

  let observations: EBirdObservation[];
  try {
    const res = await fetch(url, {
      headers: { 'X-eBirdApiToken': key },
      // Previous-model caching (cacheComponents is off): revalidate hourly.
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    observations = await res.json();
  } catch {
    return [];
  }

  if (!Array.isArray(observations)) return [];

  // Newest first, then keep only the most recent sighting per species so the
  // banner highlights distinct rarities rather than repeats of one bird.
  const sorted = [...observations].sort((a, b) =>
    b.obsDt.localeCompare(a.obsDt)
  );

  const seen = new Set<string>();
  const birds: RareBird[] = [];
  for (const o of sorted) {
    if (seen.has(o.speciesCode)) continue;
    seen.add(o.speciesCode);
    birds.push({
      speciesCode: o.speciesCode,
      comName: o.comName,
      sciName: o.sciName,
      locName: o.locName,
      obsDt: o.obsDt,
      howMany: typeof o.howMany === 'number' ? o.howMany : null,
      checklistUrl: `https://ebird.org/checklist/${o.subId}`,
      confirmed: o.obsValid && o.obsReviewed,
    });
  }

  return birds;
}
