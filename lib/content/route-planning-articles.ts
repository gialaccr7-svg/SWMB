import type { Article } from './articles.ts';

export const routePlanningArticles: Article[] = [
  {
    slug: 'thue-xe-nhieu-ngay-giu-xe-hay-hen-don-ve',
    title: 'Thuê xe đi tỉnh nhiều ngày nên giữ xe hay hẹn đón về?',
    description: 'So sánh giữ xe tại điểm đến và đặt hai lượt đưa đón từ TP.HCM theo lịch ngày giữa, bãi đỗ, giờ chờ và tổng báo giá.',
    topics: ['dat-xe', 'chi-phi', 'doan'],
    category: 'Thuê xe nhiều ngày',
    date: '2026-11-27',
    image: '/images/ford-transit-1.jpg',
    imageAlt: 'Ngoại thất một mẫu Ford Transit dùng để minh họa xe đưa đón nhóm',
    showFirstSectionBeforeImage: true,
    sections: [
      {
        heading: 'Quyết định bằng lịch sử dụng xe trong những ngày ở lại',
        paragraphs: [
          'Giữ xe tại điểm đến khi đoàn cần di chuyển giữa nhiều nơi trong ngày lưu trú hoặc cần xe đón lại theo một lịch đã thống nhất. Hẹn hai lượt đưa đón nếu cả nhóm ở cùng một nơi và đã có phương án đi lại tại chỗ.',
          'Ghi lịch từng lượt trước khi so giá. Nếu hoạt động đổi giờ, hỏi khoảng thời gian xe có thể phục vụ và cách xử lý khoản chờ hoặc chặng phát sinh.',
        ],
      },
      {
        heading: 'So hai phương án trên cùng lịch ba ngày',
        blocks: [
          {
            type: 'table',
            caption: 'Lịch minh họa từ TP.HCM để hỏi phạm vi phục vụ',
            columns: ['Ngày', 'Giữ xe tại điểm đến', 'Hẹn hai lượt xe'],
            rows: [
              ['Ngày đến', 'Ghi các điểm đón, điểm dừng và giờ trả khách tại khách sạn.', 'Giữ nguyên các mốc để báo giá lượt đi.'],
              ['Ngày lưu trú', 'Liệt kê từng chặng, giờ đón lại và nơi xe chờ.', 'Ghi cách đi từng chặng tại chỗ và ai phụ trách đặt nếu cần.'],
              ['Ngày về', 'Xác nhận nơi lấy hành lý, các điểm ghé và địa chỉ trả tại TP.HCM.', 'Chốt giờ và cổng xe quay lại, các điểm ghé và nơi trả cuối.'],
            ],
          },
        ],
      },
      {
        heading: 'Ví dụ đoàn có một buổi đi ngoài khu lưu trú',
        paragraphs: [
          'Một nhóm ở hai đêm tại cùng khách sạn. Ngày giữa, nhóm muốn tới địa điểm họp rồi về khách sạn trước giờ ăn tối. Hãy hỏi giá giữ xe theo ba ngày và giá hai lượt đường dài cộng phương án đi họp tại chỗ. Với cả hai báo giá, ghi đúng giờ về ngày cuối và cùng một điểm dừng trên đường.',
          'Nếu khách sạn bố trí được xe địa phương đúng giờ và đủ chỗ cho cả nhóm, hai lượt đường dài có thể phù hợp. Nếu phải chia đoàn hoặc lịch giữa ngày còn thay đổi, hỏi khả năng phục vụ theo khung giờ của phương án giữ xe.',
        ],
      },
      {
        heading: 'Những khoản có thể làm chênh tổng giá',
        blocks: [
          {
            type: 'list',
            items: [
              'Giữ xe: hỏi giờ sử dụng mỗi ngày, chỗ đỗ qua đêm và khoản liên quan đến tài xế.',
              'Hẹn đón về: hỏi điều kiện đổi giờ và số điểm trả. Tính riêng chi phí đi lại tại điểm đến.',
              'Với cả hai: kiểm VAT, phí đường, bãi đỗ và mốc tính phụ phí khi đổi lịch.',
            ],
          },
          {
            type: 'paragraph',
            content: [
              { text: 'Đối chiếu thời lượng và định mức của từng dòng trong ' },
              { text: 'bảng giá từ TP.HCM', href: '/bang-gia' },
              { text: '. Nếu dòng ghi 1 ngày, hỏi giá theo lịch nhiều ngày thực tế. Xem thêm ' },
              { text: 'cách kiểm các khoản trong báo giá thuê xe', href: '/kinh-nghiem/thue-xe-co-tai-xe-can-kiem-tra-nhung-khoan-phi-nao' },
              { text: ' để đối chiếu hai báo giá bằng cùng tiêu chí.' },
            ],
          },
          {
            type: 'paragraph',
            content: [
              { text: 'Nếu đã chọn nghỉ ở Vũng Tàu, xem ' },
              { text: 'cách bố trí lượt xe ở Vũng Tàu và các điểm ghé gần', href: '/kinh-nghiem/di-vung-tau-xe-o-lai-hay-dua-don-hai-luot' },
              { text: '. Nếu cần hỏi lịch phục vụ, xem ' },
              { text: 'dịch vụ xe có tài xế', href: '/dich-vu' },
              { text: '.' },
            ],
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Có thể chốt hai lượt rồi phát sinh thêm chuyến trong ngày ở điểm đến không?',
        answer: 'Hỏi trước khả năng bố trí xe tại chỗ, thời gian đặt và cách tính riêng lượt phát sinh. Nếu chặng đó ảnh hưởng giờ họp, chuyến tàu hoặc giờ trả phòng, nên xác nhận trước khi đặt.',
      },
    ],
  },
  {
    slug: 'chon-xe-di-mui-ne-theo-vali-diem-tra',
    title: 'Đi Mũi Né từ TP.HCM nên chọn xe theo vali và điểm trả thế nào?',
    description: 'Cách chọn xe đi Mũi Né, Phan Thiết hoặc Hòn Rơm theo ghế cần dùng, vali và cổng resort. Đối chiếu đúng dòng giá trước khi thuê.',
    topics: ['mui-ne', 'chon-xe', 'gia-dinh'],
    category: 'Lịch trình Mũi Né',
    date: '2026-11-27',
    image: '/images/kia-carnival-1.jpg',
    imageAlt: 'Kia Carnival màu trắng minh họa một mẫu xe gia đình',
    showFirstSectionBeforeImage: true,
    sections: [
      {
        heading: 'Xin ghim đúng cổng resort trước khi tra giá',
        paragraphs: [
          'Gửi tên resort và ghim cổng cho xe vào. Bảng giá từ TP.HCM có các dòng riêng Phan Thiết, Mũi Né và Hòn Rơm. Khi địa chỉ đặt phòng và tên khu vực bạn thường gọi khác nhau, dùng ghim để tư vấn đối chiếu đúng dòng.',
          'Đếm số ghế cần dùng và đo vali hoặc xe đẩy lớn trước khi chọn xe. Nếu đi cùng nhóm và có thùng đồ chung, hỏi cả chỗ dỡ hành lý tại resort.',
        ],
      },
      {
        heading: 'Chọn xe và cách trả đồ ở resort',
        blocks: [
          {
            type: 'table',
            caption: 'Ba tình huống cần xác nhận trước khi hỏi xe',
            columns: ['Tình huống', 'Phương án để hỏi', 'Điểm cần kiểm tra'],
            rows: [
              ['Ít khách, hành lý gọn', 'So xe 4 chỗ trên lịch đi thực tế.', 'Miệng cốp và số ghế sau còn dùng được.'],
              ['Có xe đẩy hoặc vali cứng', 'Hỏi xe 7 chỗ với kích thước kiện lớn.', 'Sức chứa khi các hàng ghế cần thiết vẫn mở.'],
              ['Nhóm có nhiều thùng đồ', 'Hỏi xe 16 chỗ và gửi số kiện chung.', 'Nơi xe dừng, lối chuyển đồ và giờ dỡ tại resort.'],
            ],
          },
        ],
      },
      {
        heading: 'Ví dụ khi gia đình đổi từ Mũi Né sang Hòn Rơm',
        paragraphs: [
          'Một gia đình định đến resort ở Mũi Né rồi đổi phòng sang Hòn Rơm. Giữ nguyên danh sách khách và kích thước vali, gửi lại ghim mới cho nhà xe. Nếu đoàn muốn ghé ăn trưa trước khi nhận phòng, thêm ghim nhà hàng và giờ dự kiến vào lịch.',
          'Nếu đến trước giờ nhận phòng, hỏi resort có nhận giữ hành lý và xe có thể dừng ở cổng nào. Chốt chỗ gặp vào ngày về, nhất là khi đoàn dự định trả phòng rồi đi ăn trước giờ xe đón.',
        ],
      },
      {
        heading: 'Đối chiếu gói xe theo giờ đi và giờ về',
        blocks: [
          {
            type: 'paragraph',
            content: [
              { text: 'Tra ' },
              { text: 'dòng Mũi Né trong bảng giá thuê xe', href: '/bang-gia?q=M%C5%A9i%20N%C3%A9' },
              { text: ' rồi kiểm thời lượng và định mức. Chuyến qua đêm cần gửi lịch riêng. Nếu đang cân nhắc xe ở lại, xem cách ' },
              { text: 'so chi phí giữ xe và hẹn đón về', href: '/kinh-nghiem/thue-xe-nhieu-ngay-giu-xe-hay-hen-don-ve' },
              { text: '.' },
            ],
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Resort ghi địa chỉ Phan Thiết thì dùng dòng Phan Thiết hay Mũi Né?',
        answer: 'Gửi tên và ghim cổng resort. Tư vấn sẽ đối chiếu với điểm đến thực tế trong bảng và kiểm thêm các điểm ghé trước khi xác nhận mức giá.',
      },
    ],
  },
  {
    slug: 'lich-di-tay-ninh-trong-ngay-bang-xe-rieng',
    title: 'Thuê xe đi Tây Ninh trong ngày: xếp lịch núi Bà Đen và Tòa Thánh',
    description: 'Cách xếp lịch đi núi Bà Đen và Tòa Thánh Cao Đài từ TP.HCM, chốt cổng xuống khách, giờ xe đón lại và bảng giá theo tuyến.',
    topics: ['tay-ninh', 'dat-xe', 'doan'],
    category: 'Lịch trình Tây Ninh',
    date: '2026-11-27',
    image: '/images/ford-transit-1.jpg',
    imageAlt: 'Ford Transit minh họa xe đưa đón một nhóm đi Tây Ninh',
    showFirstSectionBeforeImage: true,
    sections: [
      {
        heading: 'Xếp điểm có giờ hẹn cố định trước',
        paragraphs: [
          'Nếu cả nhóm ưu tiên núi Bà Đen và lịch tham quan Tòa Thánh linh hoạt, có thể đi núi trước rồi ghé Tòa Thánh. Nếu đã có giờ hẹn tại Tòa Thánh, lấy mốc đó để xếp phần còn lại và chừa thời gian gom đoàn giữa hai điểm.',
          'Núi Bà Đen có các lựa chọn tham quan theo tuyến, trong đó có cáp treo. Kiểm lịch đón khách, vé và vị trí cổng với đơn vị vận hành trước khi chốt giờ xe. Với Tòa Thánh, hỏi giờ và quy định tham quan cho ngày bạn đi.',
        ],
      },
      {
        heading: 'Lịch minh họa cho chuyến đi về trong ngày',
        blocks: [
          {
            type: 'table',
            caption: 'Các mốc để trao đổi với trưởng đoàn và nhà xe',
            columns: ['Chặng', 'Việc đoàn cần chốt'],
            rows: [
              ['Đón khách tại TP.HCM', 'Thống nhất điểm tập trung, giờ xuất phát và số người lên ở mỗi điểm.'],
              ['Núi Bà Đen', 'Hẹn cổng xuống khách, giờ cả đoàn quay lại và người báo khi đoàn đã tập trung.'],
              ['Ăn trưa và Tòa Thánh', 'Gửi ghim nhà hàng, cổng tham quan và thời gian dành cho từng nơi.'],
              ['Về TP.HCM', 'Chốt nơi gom đoàn, giờ khởi hành và điểm trả cuối cùng.'],
            ],
          },
        ],
      },
      {
        heading: 'Ví dụ khi mất thêm thời gian ở núi Bà Đen',
        paragraphs: [
          'Nếu đoàn xuống núi muộn, người phụ trách báo giờ mới cho tài xế rồi đối chiếu với giờ hẹn ở Tòa Thánh. Khi lịch có nguy cơ trễ, hỏi lại thứ tự ghé hoặc điều chỉnh thời gian dừng. Thống nhất giờ cập nhật với cả đoàn trước khi mọi người tách nhóm.',
          'Với xe lớn, hỏi điểm trả và điểm đón lại ở từng nơi. Nếu xe cần rời cổng sau khi trả khách, lưu cả ghim chỗ đoàn quay lại và số người phụ trách điểm danh.',
        ],
      },
      {
        heading: 'Tra giá đúng điểm đến và hỏi giá cho cả lịch',
        blocks: [
          {
            type: 'paragraph',
            content: [
              { text: 'Bảng giá có dòng riêng cho ' },
              { text: 'Khu du lịch Núi Bà Đen', href: '/bang-gia?q=N%C3%BAi%20B%C3%A0%20%C4%90en' },
              { text: '. Khi ghép thêm Tòa Thánh hoặc nhà hàng, gửi thứ tự các điểm, giờ chờ và thời gian về để xác nhận giá cho toàn chuyến. Kiểm riêng vé, ăn uống và bãi đỗ theo báo giá.' },
            ],
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Giá xe tới núi Bà Đen đã gồm chặng qua Tòa Thánh chưa?',
        answer: 'Gửi hai điểm và giờ dừng để nhà xe xác nhận phạm vi báo giá. Khi có thêm cáp treo hoặc dịch vụ tham quan, kiểm riêng với bên cung cấp.',
      },
    ],
  },
];
