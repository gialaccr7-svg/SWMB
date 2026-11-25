import type { SeatRouteImage } from '@/lib/content/seat-routes';

const licenseLinks: Readonly<Record<string, string>> = {
  'CC BY 2.0': 'https://creativecommons.org/licenses/by/2.0/',
  'CC BY 4.0': 'https://creativecommons.org/licenses/by/4.0/',
  'CC BY-SA 2.0': 'https://creativecommons.org/licenses/by-sa/2.0/',
  'CC BY-SA 3.0': 'https://creativecommons.org/licenses/by-sa/3.0/',
  'CC BY-SA 4.0': 'https://creativecommons.org/licenses/by-sa/4.0/',
};

export function ImageCredits({ images }: { images: readonly SeatRouteImage[] }) {
  const credits = images.filter(({ license }) => licenseLinks[license]);
  if (!credits.length) return null;

  return (
    <details className="image-credits">
      <summary>Thông tin ảnh</summary>
      <ul>
        {credits.map(({ src, alt, source, credit, license }) => (
          <li key={src}>
            <a href={source}>{alt}</a> · {credit} · <a href={licenseLinks[license]}>{license}</a>
          </li>
        ))}
      </ul>
      <p>Ảnh được tối ưu để hiển thị trên website.</p>
    </details>
  );
}
