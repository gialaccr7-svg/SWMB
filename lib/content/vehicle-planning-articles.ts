import type { Article } from './articles.ts';

export const vehiclePlanningArticles: Article[] = [
  {
    slug: 'chon-xe-4-hay-7-cho-di-vung-tau',
    title: 'Gia đình đi Vũng Tàu nên chọn xe 4 hay 7 chỗ?',
    description:
      'So xe 4 và 7 chỗ đi Vũng Tàu từ TP.HCM theo số ghế cần dùng, vali, xe đẩy và vị trí đón trả.',
    topics: ['vung-tau', 'chon-xe', 'gia-dinh'],
    category: 'Lịch trình Vũng Tàu',
    date: '2026-11-27',
    image: '/images/kia-carnival-1.jpg',
    imageAlt: 'Kia Carnival màu trắng minh họa một mẫu xe gia đình',
    imageCaption: 'Ảnh minh họa mẫu xe. Khoang đồ cần được xác nhận theo xe dự kiến.',
    showFirstSectionBeforeImage: true,
    sections: [
      {
        heading: 'Chọn theo số ghế cần dùng và món đồ lớn nhất',
        paragraphs: [
          'Xe 4 chỗ là phương án đáng xem khi gia đình ít người, mang gọn và nhà xe xác nhận đủ chỗ cho cả người lẫn đồ. Nên hỏi thêm xe 7 chỗ nếu có xe đẩy, vali lớn hoặc cần lắp ghế trẻ em khiến hàng ghế sau khó bố trí.',
          'Hãy đếm từng người đi, kể cả trẻ em. Sau đó đo xe đẩy lúc gập, kể cả bánh xe và tay cầm, rồi kiểm khoang hành lý với các hàng ghế vẫn cần dùng.',
        ],
      },
      {
        heading: 'So xe 4 và 7 chỗ cho cùng một chuyến',
        blocks: [
          {
            type: 'table',
            caption: 'Những điều cần hỏi trước khi chọn cỡ xe đi Vũng Tàu',
            columns: ['Tiêu chí', 'Xe 4 chỗ', 'Xe 7 chỗ'],
            rows: [
              [
                'Ghế cần dùng',
                'Hỏi cách bố trí hàng ghế sau nếu gia đình mang ghế trẻ em.',
                'Xác nhận hàng ghế nào cần mở suốt chuyến.',
              ],
              [
                'Vali và xe đẩy',
                'Gửi kích thước xe đẩy đã gập và vali lớn để kiểm miệng cốp.',
                'Hỏi khoang đồ còn lại khi các ghế cần thiết đã mở.',
              ],
              [
                'Điểm đón và trả',
                'Gửi ghim tại TP.HCM và tên cổng khách sạn.',
                'Gửi thêm vị trí có thể dừng chất đồ nếu đường đón hẹp hoặc cổng khó tiếp cận.',
              ],
            ],
          },
        ],
      },
      {
        heading: 'Ví dụ gia đình mang vali cứng và xe đẩy',
        paragraphs: [
          'Hai người lớn và một bé đi cuối tuần, mang một vali cứng và một xe đẩy. Gia đình có thể hỏi xe 4 chỗ trước bằng số đo hai món đồ và thông tin ghế của bé. Nếu miệng cốp hẹp hoặc phải chiếm chỗ ngồi để xếp đồ, hãy hỏi xe 7 chỗ với đúng danh sách hành lý ấy.',
          'Hãy xác nhận luôn đồ mang về nếu dự kiến có thêm quà hoặc hành lý. Dùng cùng điểm đón, điểm trả và lịch về để so hai báo giá.',
        ],
      },
      {
        heading: 'Cách kiểm khoang hành lý trước khi chọn xe',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Đếm các ghế cần dùng, kể cả ghế của trẻ.',
              'Đo dài, rộng và cao của xe đẩy khi gập, rồi đo vali lớn nhất.',
              'Nhờ nhà xe kiểm miệng cốp và chỗ đặt các món đồ khi những ghế đó vẫn mở.',
            ],
          },
        ],
      },
      {
        heading: 'Xem giá theo đúng cỡ xe và điểm trả',
        blocks: [
          {
            type: 'paragraph',
            content: [
              { text: 'Có thể đối chiếu ' },
              { text: 'xe 4 chỗ đi Vũng Tàu', href: '/thue-xe/4-cho/di-vung-tau' },
              { text: ' và ' },
              { text: 'xe 7 chỗ đi Vũng Tàu', href: '/thue-xe/7-cho/di-vung-tau' },
              {
                text: '. Bảng giá có dòng riêng cho TP Vũng Tàu, Long Hải và Hồ Tràm. Với chuyến qua đêm hoặc lịch có nhiều điểm ghé, nhắn Zalo kèm lịch đi và kích thước xe đẩy để hỏi giá theo chuyến.',
              },
            ],
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Xe 7 chỗ mở hàng ghế cuối còn đủ chỗ cho xe đẩy không?',
        answer:
          'Tùy mẫu xe và kích thước khi gập. Gửi số đo xe đẩy, số vali và số ghế cần dùng để nhà xe kiểm tra cùng lúc.',
      },
    ],
  },
  {
    slug: 'chon-xe-7-hay-16-cho-khi-nhieu-hanh-ly',
    title: 'Nhóm mang nhiều vali đi tỉnh nên thuê xe 7 hay 16 chỗ?',
    description:
      'Cách so xe 7 và 16 chỗ theo ghế cần dùng, số vali, đồ dùng chung và chỗ chất đồ tại điểm đón ở TP.HCM.',
    topics: ['chon-xe', 'doan'],
    category: 'Chọn xe du lịch',
    date: '2026-11-27',
    image: '/images/kia-carnival-1.jpg',
    imageAlt: 'Kia Carnival nhìn từ bên ngoài dùng để minh họa mẫu xe',
    imageCaption: 'Ảnh minh họa mẫu xe. Cách bố trí ghế và khoang đồ tùy xe dự kiến.',
    showFirstSectionBeforeImage: true,
    sections: [
      {
        heading: 'Kiểm số người và kiện lớn trước khi hỏi giá',
        paragraphs: [
          'Hỏi xe 7 chỗ khi cả nhóm có ít kiện lớn và nhà xe xác nhận xếp được đồ với số ghế cần dùng. So thêm xe 16 chỗ nếu nhóm có nhiều vali cứng, thùng đồ chung hoặc mang thêm thiết bị chiếm chỗ.',
          'Người đặt xe nên gom danh sách hành lý thành ba dòng: vali lớn, túi nhỏ và đồ chung. Ghi kích thước những món khó xếp như thùng mẫu, chân máy hoặc túi dài. Khoang đồ phụ thuộc mẫu xe và cách bố trí ghế.',
        ],
      },
      {
        heading: 'Đối chiếu hai cỡ xe theo điều kiện thực tế',
        blocks: [
          {
            type: 'table',
            caption: 'Bảng kiểm hành lý cho xe 7 và 16 chỗ',
            columns: ['Điều cần xác nhận', 'Xe 7 chỗ', 'Xe 16 chỗ'],
            rows: [
              [
                'Ghế và hành lý',
                'Hỏi còn bao nhiêu chỗ để đồ khi mở đủ ghế.',
                'Hỏi vị trí xếp vali và thùng cứng theo mẫu xe dự kiến.',
              ],
              [
                'Lối lên xuống',
                'Xác nhận đồ dài có chỗ xếp riêng.',
                'Xác nhận vị trí chất đồ để giữ lối lên xuống thông thoáng.',
              ],
              [
                'Điểm tập trung',
                'Gửi ghim, số điểm đón và số kiện lên tại mỗi điểm.',
                'Gửi thêm vị trí dừng chất đồ, nhất là khi đoàn hẹn ở hẻm hoặc sảnh đông xe.',
              ],
              [
                'Đồ tăng lúc về',
                'Báo trước kích thước đồ dự kiến tăng thêm.',
                'Kiểm lại sức chứa nếu lượt về có cả khách và thêm thiết bị.',
              ],
            ],
          },
        ],
      },
      {
        heading: 'Hai tình huống minh họa',
        blocks: [
          {
            type: 'list',
            items: [
              'Một nhóm nhỏ hẹn chung một điểm, mang túi mềm và một vali lớn. Hỏi xe 7 chỗ trước và gửi kích thước vali để nhà xe xác nhận khoang đồ với đúng số ghế cần dùng.',
              'Một nhóm đi công việc mang vali riêng và hai thùng thiết bị. Hỏi thêm xe 16 chỗ và gửi kích thước thùng, vị trí chất đồ cùng số kiện lên ở từng điểm đón. Nếu kiện dài hoặc cồng kềnh, trao đổi cách bố trí trước khi đặt.',
            ],
          },
        ],
      },
      {
        heading: 'Gửi cùng một danh sách hành lý khi so giá',
        blocks: [
          {
            type: 'paragraph',
            content: [
              { text: 'Xem ' },
              { text: 'xe 7 chỗ có tài xế', href: '/thue-xe/7-cho' },
              { text: ' và ' },
              { text: 'xe 16 chỗ có tài xế', href: '/thue-xe/16-cho' },
              {
                text: '. Khi nhắn Zalo, gửi số người, số vali, kích thước kiện lớn và điểm đón. Nếu cả nhóm lên xe ở nhiều chỗ, xem thêm ',
              },
              {
                text: 'cách chọn điểm tập kết cho xe 16 chỗ',
                href: '/kinh-nghiem/chon-diem-tap-ket-khi-thue-xe-16-cho',
              },
              { text: '.' },
            ],
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Có cần đo từng vali trước khi hỏi xe không?',
        answer:
          'Có thể gửi số lượng theo nhóm cỡ. Hãy đo chiều dài, rộng và cao của các kiện lớn hoặc có hình dáng khó xếp, tính cả bánh xe và tay cầm.',
      },
    ],
  },
  {
    slug: 'chon-diem-tap-ket-khi-thue-xe-16-cho',
    title: 'Chọn điểm tập kết khi thuê xe 16 chỗ cho nhóm công ty',
    description:
      'Cách chọn một điểm tập trung hoặc chia điểm đón cho nhóm đi xe 16 chỗ từ TP.HCM, kèm lịch tập trung và người chốt khách.',
    topics: ['doan', 'dat-xe', 'chon-xe'],
    category: 'Thuê xe cho đoàn',
    date: '2026-11-27',
    image: '/images/ford-transit-1.jpg',
    imageAlt: 'Ford Transit minh họa mẫu xe dùng để đưa đón đoàn',
    showFirstSectionBeforeImage: true,
    sections: [
      {
        heading: 'Chọn một điểm đón nếu cả nhóm đến được đúng giờ',
        paragraphs: [
          'Hẹn một điểm tập trung nếu đồng nghiệp có thể tự đến và xe 16 chỗ có vị trí dừng phù hợp để đón người, xếp đồ. Chia điểm đón khi các nhóm ở xa nhau và việc đón thêm vừa với lịch, đặc biệt nếu đoàn có giờ họp hoặc giờ nhận phòng cố định.',
          'Nếu văn phòng nằm trong hẻm hoặc cổng chỉ có chỗ dừng ngắn, gửi ghim và ảnh lối vào cho nhà xe. Nhờ xác nhận điểm dừng xe trước khi gửi địa chỉ tập trung cho cả đoàn.',
        ],
      },
      {
        heading: 'Chốt ghim, giờ có mặt và người phụ trách',
        blocks: [
          {
            type: 'table',
            caption: 'Chia việc trước giờ xe đón',
            columns: ['Việc cần chốt', 'Cách thực hiện'],
            rows: [
              ['Ghim điểm đón', 'Ghi rõ tên cổng, chiều đường và vị trí mọi người đứng chờ.'],
              [
                'Giờ có mặt',
                'Tách giờ tập trung và giờ xe lăn bánh. Chừa thời gian điểm danh và xếp đồ.',
              ],
              [
                'Người chốt khách',
                'Cử một đầu mối tại mỗi điểm, giữ danh sách người lên xe và số liên hệ điều xe.',
              ],
              [
                'Đồ dùng chung',
                'Ghi ai mang thùng đồ, kiện lên ở đâu và có cần đến sớm để chất đồ không.',
              ],
            ],
          },
        ],
      },
      {
        heading: 'Ví dụ khi công ty đổi giờ họp sớm hơn',
        paragraphs: [
          'Đoàn dự kiến đón tại văn phòng rồi ghé thêm một điểm để lấy thiết bị. Khi giờ họp tại điểm đến được dời sớm, người phụ trách có thể chuyển thiết bị tới văn phòng trước và hỏi phương án xuất phát từ một điểm. Nếu vẫn cần điểm thứ hai, nhờ nhà xe xác nhận lại thứ tự đón và giờ xuất phát.',
          'Sau khi chốt, gửi cả nhóm một lịch duy nhất có ghim đã xác nhận, giờ có mặt và số của người phụ trách. Nếu điểm trả có nhiều cổng, hỏi trước cổng nào tiện cho đoàn xuống xe và chuyển đồ.',
        ],
      },
      {
        heading: 'Thứ tự tập trung tại điểm đón',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Khách tập trung ở nơi đã hẹn. Người phụ trách kiểm đủ người trước khi dẫn ra xe.',
              'Người mang thiết bị gặp người phụ trách ở chỗ chất đồ đã xác nhận với tài xế.',
              'Tài xế nhận thông báo đủ người và đồ trước khi xe chuyển sang điểm đón tiếp theo.',
            ],
          },
        ],
      },
      {
        heading: 'Thông tin nhà xe cần để xác nhận điểm đón',
        blocks: [
          {
            type: 'paragraph',
            content: [
              { text: 'Khi hỏi ' },
              { text: 'thuê xe 16 chỗ có tài xế', href: '/thue-xe/16-cho' },
              {
                text: ', gửi qua Zalo ngày đi, ghim từng điểm đón, số người lên ở mỗi điểm và giờ đoàn cần tới nơi. Ghi thêm số thùng hoặc vali nếu cần thời gian chất đồ.',
              },
            ],
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Có nên hẹn xe ngay ở sảnh văn phòng không?',
        answer:
          'Hẹn tại sảnh khi tòa nhà và nhà xe xác nhận xe dừng được ở đó. Nếu vị trí dừng hạn chế, chốt một điểm đón gần đó có chỗ để cả đoàn tập trung và chất đồ.',
      },
    ],
  },
];
