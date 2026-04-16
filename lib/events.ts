import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export type EventType = 'scheduled' | 'personalized';

export interface CMSEvent {
  slug: string;
  title: string;
  date: string;       // ISO string
  location: string;
  meta: string;       // formatted "Date · Location" label
  image?: string;
  type: EventType;
  bodyHtml: string;
}

const eventsDir = path.join(process.cwd(), 'content', 'events');

export function formatEventMeta(date: string, location: string): string {
  const d = new Date(date);
  const formatted = isNaN(d.getTime())
    ? date
    : d.toLocaleDateString('en-CA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
  return location ? `${formatted} · ${location}` : formatted;
}

export async function getEvents(): Promise<CMSEvent[]> {
  if (!fs.existsSync(eventsDir)) return [];

  const files = fs
    .readdirSync(eventsDir)
    .filter((f) => f.endsWith('.md'));

  const events = await Promise.all(
    files.map(async (filename) => {
      const raw = fs.readFileSync(path.join(eventsDir, filename), 'utf-8');
      const { data, content } = matter(raw);

      const bodyHtml = await marked(content);

      const rawDate = data.date;
      const date =
        rawDate instanceof Date
          ? rawDate.toISOString()
          : String(rawDate ?? '');

      const location = String(data.location ?? '');
      const meta = formatEventMeta(date, location);

      return {
        slug: filename.replace(/\.md$/, ''),
        title: String(data.title ?? ''),
        date,
        location,
        meta,
        image: data.image ? String(data.image) : undefined,
        type: (data.type as EventType) ?? 'scheduled',
        bodyHtml,
      } satisfies CMSEvent;
    })
  );

  return events.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}
