import { formatPrice, priceFor, type PriceRoute } from '@/lib/pricing';
import { seatRouteCounts, seatRoutePath, type SeatRouteCount } from '@/lib/content/seat-routes';
import { site } from '@/lib/site';

export function RoutePriceSummary({
  row,
  destination,
  seats,
}: {
  row: PriceRoute;
  destination: { slug: string; name: string };
  seats?: SeatRouteCount;
}) {
  const value = seats === undefined ? null : priceFor(row, seats);
  return (
    <div className="route-price-summary" data-route-price={row.id}>
      <p>
        <strong>
          Giá tham khảo từ TP.HCM đến {destination.name} · {row.duration}
          {row.km != null && ` · định mức ${row.km} km`}
        </strong>
      </p>
      {seats === undefined ? (
        <ul>
          {seatRouteCounts.map((count) => (
            <li key={count}>
              <a href={seatRoutePath(count, destination.slug)}>
                Xe {count} chỗ: {formatPrice(priceFor(row, count))}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          <strong>
            Xe {seats} chỗ: {formatPrice(value)}
            {value !== null && '/chuyến'}
          </strong>
        </p>
      )}
      <p>
        {row.destination !== destination.name && <>Dòng bảng giá: {row.destination}. </>}
        Giá theo chuyến. Hỏi lại giá nếu lịch khác bảng và xác nhận VAT, phí cầu đường, bãi đỗ,
        giờ chờ và phụ phí nếu có.
      </p>
      <a className="button" href={site.zalo} target="_blank" rel="noopener noreferrer">
        Hỏi giá {seats === undefined ? 'xe' : `xe ${seats} chỗ`} đi {destination.name} qua Zalo
      </a>
    </div>
  );
}
