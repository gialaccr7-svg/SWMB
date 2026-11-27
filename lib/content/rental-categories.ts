import type { SeatCount } from '../catalog';

type RentalCategoryGuide = {
  description: string;
  planning: string;
  checklist: string[];
  alternative: SeatCount;
  decision: string;
  article: { slug: string; label: string };
};

export const rentalCategoryUpdatedAt = '2026-11-27';

/** Editorial guidance, without promises about a particular vehicle's capacity or availability. */
export const rentalCategoryGuides: Record<SeatCount, RentalCategoryGuide> = {
  4: {
    description:
      'Tham khảo Toyota Camry và Mercedes-Benz E-Class cho thuê xe 4 chỗ: công tác, đón sân bay, xe cưới. Xác nhận hành lý và báo giá theo lịch trình.',
    planning:
      'Với chuyến công tác, ghi giờ hẹn và thời gian chờ ở từng điểm. Với xe cưới, trao đổi riêng màu xe, thời gian trang trí và lộ trình đón dâu. Dòng xe và trang bị được xác nhận trước khi đặt.',
    checklist: [
      'Số người thực đi và nhu cầu ghế ngồi của từng khách.',
      'Số vali, kích thước kiện lớn và đồ lễ nếu thuê xe cưới.',
      'Lịch đón trả, thời gian chờ và yêu cầu về dòng sedan.',
    ],
    alternative: 7,
    decision: 'Khi đón ít người ở Tân Sơn Nhất hoặc đi công tác trong ngày, hỏi xe 4 chỗ nếu đủ ghế và cốp cho hành lý thực tế. Với xe đẩy gấp hoặc nhiều vali cứng đi Vũng Tàu, gửi kích thước kiện lớn và hỏi cả phương án 7 chỗ trên cùng một lịch.',
    article: { slug: 'chon-xe-4-hay-7-cho-di-vung-tau', label: 'So xe 4 và 7 chỗ khi đi cùng trẻ nhỏ' },
  },
  7: {
    description:
      'So sánh Toyota Innova và Fortuner khi thuê xe 7 chỗ cho gia đình, du lịch và đi tỉnh. Tư vấn số khách, hành lý, điểm đón và báo giá theo chuyến.',
    planning:
      'Lập danh sách điểm đón và các điểm nghỉ nếu đi cùng gia đình. Khi có trẻ nhỏ, người lớn tuổi hoặc xe đẩy, trao đổi nhu cầu trước để kiểm tra cách bố trí trên xe được giao.',
    checklist: [
      'Số người lớn, trẻ em và nhu cầu hỗ trợ trong chuyến đi.',
      'Số vali, xe đẩy hoặc đồ dùng cồng kềnh cần mang.',
      'Điều kiện đường vào điểm đón, nơi lưu trú và điểm đến.',
    ],
    alternative: 16,
    decision: 'Với gia đình đi Vũng Tàu hoặc Cần Thơ, kiểm tra chỗ để vali khi các ghế cần dùng đều mở. Nếu phải gập ghế đang cần hoặc có thêm đồ chung, hỏi xe 16 chỗ với cùng danh sách người và đồ.',
    article: { slug: 'chon-xe-7-hay-16-cho-khi-nhieu-hanh-ly', label: 'So xe 7 và 16 chỗ cho nhóm nhiều vali' },
  },
  16: {
    description:
      'Tham khảo Ford Transit khi thuê xe 16 chỗ cho đoàn nhỏ, công tác và đưa đón tập thể. Chuẩn bị điểm tập kết, số vali và lịch trình để nhận báo giá.',
    planning:
      'Chọn một người phụ trách liên hệ cho cả đoàn. Sắp xếp thứ tự các điểm đón, thời gian tập kết và các lượt đưa đón để kiểm tra tổng thời gian sử dụng xe.',
    checklist: [
      'Số khách của từng lượt đón trả và người liên hệ của đoàn.',
      'Tổng số kiện hành lý, đặc biệt với chuyến đón sân bay.',
      'Vị trí tập kết, thời gian lên xuống xe và nơi đỗ tại điểm đến.',
    ],
    alternative: 29,
    decision: 'Với nhóm công ty có giờ họp cố định, chốt nơi xe được dừng để điểm danh và xếp đồ trước khi hẹn giờ cả đoàn. Nếu cần nhiều điểm đón, ghi số khách và số kiện lên ở từng điểm để xác nhận thứ tự đón.',
    article: { slug: 'chon-diem-tap-ket-khi-thue-xe-16-cho', label: 'Cách chọn điểm tập kết cho nhóm đi xe 16 chỗ' },
  },
  29: {
    description:
      'Tham khảo Samco khi thuê xe 29 chỗ cho đoàn công ty, du lịch và sự kiện. Xác nhận nơi tập kết, hành lý, các lượt đón trả và chi phí theo lịch trình.',
    planning:
      'Lịch sự kiện nên có giờ khai mạc, kết thúc và các lượt di chuyển của đoàn. Thống nhất vị trí tập kết và nơi xe chờ; nếu có nhiều nhóm khách, ghi rõ số người của từng lượt.',
    checklist: [
      'Danh sách nhóm khách và khung giờ của từng lượt di chuyển.',
      'Hành lý cá nhân, thiết bị sự kiện và kích thước đồ lớn.',
      'Khả năng tiếp cận nơi tập kết và vị trí đỗ tại sự kiện.',
    ],
    alternative: 45,
    decision: 'Nếu đoàn đi hội nghị kèm thùng thiết bị, kiểm riêng khoang đồ và cổng nhận thiết bị. Với chuyến Cần Thơ có thuyền, ghi giờ đưa khách xuống bến và giờ xe quay lại đón để tính phần chờ.',
    article: { slug: 'thue-xe-29-hay-45-cho-cho-doan-cong-ty', label: 'So xe 29 và 45 chỗ cho đoàn công ty' },
  },
  45: {
    description:
      'Tham khảo Hyundai Universe khi thuê xe 45 chỗ cho tour và đoàn lớn. Kiểm tra đường vào, bãi đỗ, hành lý và lịch từng ngày trước khi chốt báo giá.',
    planning:
      'Với chuyến nhiều ngày, gửi lịch trình từng ngày và nơi lưu trú. Kiểm tra đường vào khách sạn, điểm tham quan và bãi đỗ; thống nhất chi phí liên quan đến tài xế và các chặng ngoài kế hoạch.',
    checklist: [
      'Số khách toàn đoàn và phương án tập kết tại điểm khởi hành.',
      'Tổng số vali, đồ chung và yêu cầu xếp hành lý.',
      'Đường vào, vị trí đỗ ở từng điểm và lịch sử dụng xe theo ngày.',
    ],
    alternative: 29,
    decision: 'Với đoàn đi Nha Trang, xác nhận chỗ xe dừng dỡ hành lý, nơi đỗ và các lượt xe cần chạy từng ngày. Nếu đoàn khoảng 50 người, gửi tổng khách và đồ để điều xe tính phương án nhiều xe phù hợp.',
    article: { slug: 'di-nha-trang-3-ngay-2-dem-tu-tphcm-bang-xe-rieng', label: 'Cách lập lịch xe đi Nha Trang nhiều ngày' },
  },
};
