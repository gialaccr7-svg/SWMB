import type { SeatRouteCount } from './seat-routes';

export const seatRouteTripTips: Record<string, Record<SeatRouteCount, string>> = {
  'vung-tau': {
    4: 'Nếu đi Bãi Sau trong ngày, tính cả túi đồ biển, vali và xe đẩy gấp khi hỏi xe. Gửi địa chỉ bãi biển hoặc khách sạn và giờ đón về dự kiến.',
    7: 'Nếu ghé Bãi Trước và Bãi Sau, cho biết nhóm mang theo xe đẩy hay đồ biển và có cần lấy đồ trên xe giữa hai điểm hay không.',
    16: 'Nếu lịch có cả bãi biển và nhà hàng, hẹn vị trí đón lại đoàn ở từng nơi và báo tài xế giờ kết thúc hoạt động để xác nhận thời gian chờ.',
    29: 'Nếu đoàn ăn trưa sau khi tắm biển, hỏi nhà hàng vị trí xe có thể dừng đón và nơi xe đỗ trong lúc chờ. Thống kê cả đồ dùng chung cho hoạt động trên bãi biển.',
    45: 'Nếu chương trình có nhiều điểm ven biển, chốt vị trí tập kết gần chỗ xe lớn có thể dừng và quay đầu. Thống nhất giờ gom đoàn, nơi đỗ chờ và lượng hành lý trước khi đặt.',
  },
  'nha-trang': {
    4: 'Với chuyến đường dài, báo số người, vali và xe đẩy gấp để kiểm tra khoang đồ trước. Gửi địa chỉ trả ở Nha Trang và ghi riêng nếu cần ghé Cam Ranh.',
    7: 'Nếu đi với trẻ nhỏ, gửi số người, số vali và kích thước xe đẩy khi gấp. Ghi rõ giờ nhận phòng và những chặng nghỉ muốn bố trí trên đường.',
    16: 'Gom số vali của cả đoàn trước khi chọn xe. Nếu có chuyến tham quan trên vịnh, gửi điểm tập kết ở TP.HCM, bến trả khách trên đất liền và giờ hẹn đón lại.',
    29: 'Hỏi khách sạn xem xe có thể dừng ở sảnh hay cần trả đoàn ở vị trí khác. Gửi số kiện của đoàn và tách giờ xe chạy, giờ chờ nếu cần đưa đón giữa khách sạn và bến.',
    45: 'Chốt điểm tập kết có chỗ cho xe lớn dừng và xếp hành lý. Kiểm tra chỗ trả đoàn và bãi đỗ ở khách sạn hoặc bến tàu; gửi giờ phục vụ theo từng ngày nếu ở qua đêm.',
  },
  'can-tho': {
    4: 'Nếu ghé chợ nổi Cái Răng, báo số khách, vali và xe đẩy gấp; gửi tên bến và giờ lên thuyền. Hẹn trước nơi xe đón lại trên bờ.',
    7: 'Nếu đi cùng trẻ nhỏ, thống kê số người, số vali và xe đẩy. Khi có lịch đi thuyền và ghé bến Ninh Kiều, cho biết muốn mang theo hay để lại hành lý để hỏi phương án phù hợp.',
    16: 'Chốt điểm tập kết ở TP.HCM và thống kê túi, vali của cả nhóm. Nếu ghé chợ nổi, gửi tên bến và giờ đoàn lên bờ để hẹn vị trí xe đón lại.',
    29: 'Nếu đoàn đến khách sạn hoặc điểm họp, hỏi trước vị trí dừng để dỡ hành lý. Khi có chặng đi thuyền, xác nhận bãi đỗ và thời gian xe chờ đoàn trở lại.',
    45: 'Nếu đoàn xuống ở bến Ninh Kiều hoặc tại bến đi chợ nổi, xác nhận nơi xe lớn có thể dừng và gom đoàn. Cử người kiểm hành lý và chốt giờ xe đón sau chặng đường thủy.',
  },
};

export const seatRouteUpdatedAt = '2026-11-27';

export const seatRouteDecisions: Record<string, Record<SeatRouteCount, {
  question: string;
  answer: string;
  article: { slug: string; label: string };
}>> = {
  'vung-tau': {
    4: {
      question: 'Gia đình có xe đẩy nên hỏi xe 4 hay 7 chỗ?',
      answer: 'Với lịch đi Bãi Sau, gửi số khách, kích thước xe đẩy sau khi gập và vali lớn. Nếu cần ghế trẻ em hoặc xe 4 chỗ không đủ chỗ cho cả khách và đồ, hỏi xe 7 chỗ theo cùng lịch.',
      article: { slug: 'chon-xe-4-hay-7-cho-di-vung-tau', label: 'Cách so xe 4 và 7 chỗ khi đi Vũng Tàu với trẻ nhỏ' },
    },
    7: {
      question: 'Đổi khách sạn từ Vũng Tàu sang Hồ Tràm thì hỏi giá thế nào?',
      answer: 'Gửi ghim mới và thứ tự các điểm ghé để tư vấn chuyển sang dòng giá phù hợp. Nếu phòng ở Hồ Tràm nhưng nhóm vẫn ghé Vũng Tàu, ghi rõ giờ cần xe ở cả hai nơi.',
      article: { slug: 'chon-xe-4-hay-7-cho-di-vung-tau', label: 'Cách kiểm cốp và ghế khi chọn xe đi Vũng Tàu' },
    },
    16: {
      question: 'Đoàn ăn tối ở Long Hải rồi về khách sạn thì hẹn xe ra sao?',
      answer: 'Chốt cổng nhà hàng, giờ dự kiến ăn xong và điểm trả cuối. Nếu xe cần quay lại đón sau khi đã rời điểm trả, ghi rõ lượt đó vào lịch để xác nhận giá.',
      article: { slug: 'chon-diem-tap-ket-khi-thue-xe-16-cho', label: 'Cách chọn điểm tập kết cho xe 16 chỗ' },
    },
    29: {
      question: 'Đoàn đi biển có thêm thùng đồ hoạt động ngoài trời thì cần báo gì?',
      answer: 'Gửi số kiện chung, kích thước thùng lớn, ai dỡ đồ và địa chỉ hẹn. Nếu bãi biển và nhà hàng là hai điểm riêng, xác nhận xe có cần chở lại thùng đồ sau hoạt động.',
      article: { slug: 'thue-xe-29-hay-45-cho-cho-doan-cong-ty', label: 'Cách so xe 29 và 45 chỗ cho đoàn công ty' },
    },
    45: {
      question: 'Đoàn khoảng 50 người đi Vũng Tàu nên đặt xe thế nào?',
      answer: 'Gửi tổng số khách thực đi, hành lý, số người ở mỗi điểm đón và giờ cả đoàn cần tới. Nhà xe cần xác nhận phương án nhiều xe, số ghế từng xe và nơi các xe có thể cùng trả khách.',
      article: { slug: 'thue-xe-29-hay-45-cho-cho-doan-cong-ty', label: 'Cách lập lịch từng lượt cho đoàn đông' },
    },
  },
  'can-tho': {
    4: {
      question: 'Có thể trả phòng rồi đi chợ nổi với vali trên xe không?',
      answer: 'Báo giờ trả phòng, số vali và ghim bến. Hỏi xe có thể chờ ở đâu, có cần nhận đồ ngay khi rời bến và cốp có đủ chỗ khi cả nhóm lên xe về TP.HCM.',
      article: { slug: 'di-cho-noi-cai-rang-tu-tp-hcm', label: 'Cách hẹn điểm đón lại sau chuyến thuyền Cái Răng' },
    },
    7: {
      question: 'Nếu bến đi và bến về khác nhau thì gửi gì cho tài xế?',
      answer: 'Lấy hai ghim từ bên thuyền, ghi nơi xuống xe lúc đi và nơi lên xe lúc về. Nếu gia đình có trẻ nhỏ hoặc mang xe đẩy, báo cần lấy món nào trước khi xuống bến.',
      article: { slug: 'di-can-tho-2-ngay-1-dem-tu-tphcm-bang-xe-rieng', label: 'Cách bố trí hành lý và giờ xe trong lịch Cần Thơ qua đêm' },
    },
    16: {
      question: 'Đoàn chia hai thuyền thì nên hẹn xe đón lúc nào?',
      answer: 'Hỏi giờ dự kiến của cả hai thuyền, chọn một nơi tập trung trên bờ và cử người điểm danh. Báo nhà xe khung giờ cần chờ nếu hai nhóm lên bờ lệch nhau.',
      article: { slug: 'di-can-tho-theo-doan-checklist-dat-xe-diem-don-ben-thuyen', label: 'Cách phân công người đón khách ở bến thuyền Cần Thơ' },
    },
    29: {
      question: 'Xe 29 chỗ đưa đoàn tới điểm họp rồi đi thuyền cần chốt những lượt nào?',
      answer: 'Ghi riêng giờ trả đoàn ở nơi họp, giờ chuyển tới bến và giờ đón lại trên bờ. Nếu có thiết bị sự kiện, chốt ai nhận và nơi dỡ để phần hành lý không làm chậm giờ thuyền.',
      article: { slug: 'di-can-tho-theo-doan-checklist-dat-xe-diem-don-ben-thuyen', label: 'Checklist dành cho trưởng đoàn đi Cần Thơ' },
    },
    45: {
      question: 'Nếu xe lớn khó vào bến thì hẹn cả đoàn ở đâu?',
      answer: 'Gửi ghim bến cho nhà xe trước, rồi thống nhất điểm xe lớn được dừng và đường đi bộ tới bến. Cử một người đi đầu và một người kiểm khách cuối nhóm khi đổi phương tiện.',
      article: { slug: 'di-can-tho-theo-doan-checklist-dat-xe-diem-don-ben-thuyen', label: 'Cách bàn giao đoàn giữa xe và thuyền' },
    },
  },
  'nha-trang': {
    4: {
      question: 'Ghé Cam Ranh trước khi về khách sạn Nha Trang thì tra dòng nào?',
      answer: 'Nha Trang và Cam Ranh là hai dòng riêng. Gửi ghim cả hai, thứ tự ghé và thời gian dừng. Với chuyến dài, báo kích thước vali và đồ muốn lấy giữa đường.',
      article: { slug: 'di-nha-trang-3-ngay-2-dem-tu-tphcm-bang-xe-rieng', label: 'Cách chia lịch xe đi Nha Trang trong ba ngày' },
    },
    7: {
      question: 'Đi Nha Trang cùng trẻ nhỏ cần kiểm ghế và vali thế nào?',
      answer: 'Gửi số khách, số ghế hoặc thiết bị dành cho trẻ cần bố trí và kích thước xe đẩy. Hỏi chỗ để đồ thường dùng trên đường khi các ghế cần thiết đã mở.',
      article: { slug: 'di-nha-trang-nen-chon-xe-7-hay-16-cho', label: 'So xe 7 và 16 chỗ cho hành trình Nha Trang' },
    },
    16: {
      question: 'Đi vịnh ngày giữa thì nên giữ xe hay đặt riêng lượt ra bến?',
      answer: 'Ghi giờ đi và về, hai ghim bến trên bờ và các lượt khác trong ngày. Nếu chỉ cần đưa đón ở bến, hỏi giá riêng hai lượt rồi so với giữ xe theo lịch cả ngày.',
      article: { slug: 'thue-xe-nhieu-ngay-giu-xe-hay-hen-don-ve', label: 'Cách so giữ xe và hẹn đón cho chuyến nhiều ngày' },
    },
    29: {
      question: 'Đoàn mang thiết bị đi Nha Trang nên kiểm gì ở khách sạn?',
      answer: 'Hỏi vị trí xe có thể dừng dỡ đồ, lối chuyển thùng và giờ khách sạn nhận thiết bị. Nếu đoàn có chặng ra bến, tách giờ xe chạy và giờ cần chờ vào lịch.',
      article: { slug: 'thue-xe-29-hay-45-cho-cho-doan-cong-ty', label: 'Cách lập lịch cho đoàn có thiết bị chung' },
    },
    45: {
      question: 'Xe 45 chỗ đi Nha Trang nhiều ngày cần báo gì về bãi đỗ?',
      answer: 'Gửi vị trí trả khách và nơi xe lớn có thể đỗ ở từng chặng, gồm cả điểm qua đêm. Nếu xe không dừng được ở sảnh, thống nhất chỗ xuống khách, lối chuyển hành lý và điểm đón lại.',
      article: { slug: 'di-nha-trang-3-ngay-2-dem-tu-tphcm-bang-xe-rieng', label: 'Mẫu lịch xe theo từng ngày ở Nha Trang' },
    },
  },
};
