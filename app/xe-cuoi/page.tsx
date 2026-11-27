import { ZaloRentalNotice } from '@/components/zalo-rental-notice';
import { ResponsiveImage } from '@/components/responsive-image';
import { PageBanner } from '@/components/page-banner';
import { VehicleCard } from '@/components/vehicle-card';
import { findVehicles } from '@/lib/services/vehicle-service';
import { site } from '@/lib/site';
import { seo } from '@/lib/seo';
export const metadata = seo(
  'Thuê xe cưới Mercedes-Benz & xe hoa',
  'Xe cưới Mercedes-Benz và xe đưa đón gia đình hai bên. Tư vấn dòng xe, lịch đón dâu và trang trí theo nhu cầu.',
  '/xe-cuoi',
  { image: '/images/xecuoi.jpg' },
);
export default function Wedding() {
  return (
    <main id="main">
      <PageBanner
        title="Thuê xe cưới Mercedes-Benz & xe hoa"
        description="Tư vấn xe đón dâu và xe đưa đón khách cưới tại TP.HCM theo giờ làm lễ, địa chỉ hai nhà và lịch đến nhà hàng."
      />
      <section className="container wedding-section">
        <ZaloRentalNotice />
        <div className="wedding-image">
          <ResponsiveImage
            sizes="(max-width: 760px) calc(100vw - 36px), 50vw"
            src="/images/xecuoi.jpg"
            alt="Xe cưới Mercedes-Benz sang trọng cho lễ cưới"
            width="1200"
            height="800"
            fetchPriority="high"
          />
        </div>
        <div className="wedding-copy">
          <h2>Xếp lượt xe theo giờ làm lễ</h2>
          <p>
            Chốt giờ xe hoa cần có mặt để lắp hoa và đón dâu. Nếu khách đi bằng xe riêng, ghi giờ
            xuất phát, số khách và điểm hẹn của xe chở khách để hai lượt đến đúng nơi.
          </p>
          <a
            className="button"
            style={{ marginTop: 25 }}
            href={site.zalo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tư vấn xe cưới qua Zalo
          </a>
        </div>
      </section>
      <section className="section container">
        <h2 style={{ marginBottom: 25 }}>Dòng xe tham khảo cho lễ cưới</h2>
        <div className="vehicle-grid">
          {findVehicles({ wedding: true }).map((v) => (
            <VehicleCard key={v.slug} vehicle={v} />
          ))}
        </div>
        <article className="article-layout">
          <h2>Chuẩn bị trước khi đặt xe cưới</h2>
          <ul>
            <li>Ngày cưới, giờ đón dâu và thời gian cần xe có mặt.</li>
            <li>Địa chỉ nhà trai, nhà gái, nơi làm lễ và nhà hàng.</li>
            <li>Số người trên xe cưới và số khách cần xe đưa đón riêng.</li>
            <li>Màu xe mong muốn, kiểu hoa và việc bên nào chuẩn bị trang trí.</li>
          </ul>
          <h2>Thống nhất chi phí và thời gian</h2>
          <p>
            Cần xác nhận số giờ sử dụng, thời gian chờ, chi phí hoa và điều kiện phát sinh ngoài
            lịch trình. Dòng xe cụ thể được chốt sau khi kiểm tra tình trạng sẵn có vào ngày bạn
            chọn.
          </p>
          <a className="text-link" href="/kinh-nghiem/chuan-bi-thue-xe-cuoi">
            Đọc hướng dẫn chuẩn bị thuê xe cưới
          </a>
          <p>
            Nếu đang chọn dòng xe hoa, xem{' '}
            <a className="text-link" href="/kinh-nghiem/thue-xe-cuoi-mercedes-hay-camry">
              cách so Mercedes-Benz và Camry theo lịch đón dâu
            </a>.
          </p>
        </article>
      </section>
    </main>
  );
}
