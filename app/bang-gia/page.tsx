import { PageBanner } from '@/components/page-banner';
import { ResponsiveImage } from '@/components/responsive-image';
import { PriceLookup } from '@/components/price-lookup';
import { PriceNotes } from '@/components/price-notes';
import { StructuredData } from '@/components/structured-data';
import { seo, breadcrumbSchema } from '@/lib/seo';
import { destinations, destinationPath } from '@/lib/content/destinations';
import { seatRouteCounts, seatRouteDestinations, seatRoutePath } from '@/lib/content/seat-routes';
import { priceSeats, routePrices } from '@/lib/pricing';
import { articlePath } from '@/lib/paths';

const title = 'Bảng giá thuê xe từ TP.HCM đi các tuyến';
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = await searchParams;
  const metadata = seo(
    title,
    'Tra giá thuê xe 4, 7, 16, 29, 45 chỗ xuất phát từ TP.HCM. Tìm theo điểm đến, khu vực và số chỗ với bảng giá từng tuyến.',
    '/bang-gia',
    { image: '/images/need.jpg' },
  );
  return Object.keys(query).some((key) => ['q', 'region', 'seats'].includes(key))
    ? { ...metadata, robots: { index: false, follow: true } }
    : metadata;
}
export default async function Prices({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = await searchParams;
  const q = typeof query.q === 'string' ? query.q.slice(0, 160) : '';
  const region =
    typeof query.region === 'string' && routePrices.some((row) => row.region === query.region)
      ? query.region
      : '';
  const seats = priceSeats.some((n) => String(n) === query.seats) ? String(query.seats) : '';
  return (
    <main id="main">
      <PageBanner
        title={title}
        description="Chọn điểm đến, xem giá theo số chỗ và lên lịch trình cùng Hành Trình Phương Nam."
      />
      <StructuredData
        data={breadcrumbSchema([
          { name: 'Trang chủ', path: '/' },
          { name: 'Bảng giá', path: '/bang-gia' },
        ])}
      />
      <section className="section container">
        <div className="pricing-banner-media">
          <ResponsiveImage
            sizes="(max-width: 760px) calc(100vw - 36px), 1200px"
            src="/images/need.jpg"
            alt="Bảng giá thuê xe du lịch 4–45 chỗ khởi hành từ TP.HCM - Hành Trình Phương Nam"
            width="1276"
            height="956"
            fetchPriority="high"
          />
        </div>
        <section className="article-layout">
          <h2>Chọn xe theo số chỗ và điểm đến</h2>
          {seatRouteDestinations.map((destination) => (
            <div key={destination.slug}>
              <h3>TP.HCM đi {destination.name}</h3>
              <ul className="seat-route-links">
                {seatRouteCounts.map((count) => (
                  <li key={count}>
                    <a href={seatRoutePath(count, destination.slug)}>
                      Thuê xe {count} chỗ đi {destination.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <PriceLookup initialQuery={q} initialRegion={region} initialSeats={seats} />
        <PriceNotes />
        <section className="article-layout">
          <h2>Tra giá khi một khu vực có nhiều điểm trả</h2>
          <ul>
            <li>
              <a href="/bang-gia?q=N%C3%BAi%20B%C3%A0%20%C4%90en">Núi Bà Đen</a> · Xem{' '}
              <a href={articlePath('lich-di-tay-ninh-trong-ngay-bang-xe-rieng')}>
                cách xếp lịch ghé núi và Tòa Thánh trong ngày
              </a>.
            </li>
            <li>
              <a href="/bang-gia?q=M%C5%A9i%20N%C3%A9">Mũi Né</a> · Xem{' '}
              <a href={articlePath('chon-xe-di-mui-ne-theo-vali-diem-tra')}>
                cách xác nhận điểm trả và chọn xe cho resort
              </a>.
            </li>
            <li>
              <a href="/bang-gia?q=%C4%90%C3%A0%20L%E1%BA%A1t">Đà Lạt</a> · Nếu ghé Đức Trọng
              hoặc cần xe ở lại nhiều ngày, gửi cả hai ghim và lịch xe từng ngày.
            </li>
          </ul>
        </section>
        <h2 className="route-heading">Lên lịch trình cho điểm đến</h2>
        <div className="route-guides">
          {destinations.map((item) => (
            <a key={item.slug} href={destinationPath(item.slug)}>
              <h3>TP.HCM → {item.name}</h3>
              <p>{item.description}</p>
              <span className="text-link">Xem giá & gợi ý hành trình →</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
