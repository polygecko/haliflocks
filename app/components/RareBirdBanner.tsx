import { getRareBirds } from '@/lib/rareBirds';
import RareBirdBannerClient from './RareBirdBannerClient';

// Server component: fetches notable sightings (cached hourly) and hands the
// trimmed list to the client banner, which handles display and dismissal.
export default async function RareBirdBanner() {
  const birds = await getRareBirds();
  if (!birds.length) return null;
  return <RareBirdBannerClient birds={birds} />;
}
