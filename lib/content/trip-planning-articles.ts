import type { Article } from './articles';

export const tripPlanningArticles: Article[] = [
  {
    slug: 'di-vung-tau-xe-o-lai-hay-dua-don-hai-luot',
    topics: ['vung-tau', 'lich-trinh', 'chi-phi'],
    seoTitle: 'Xe đi Vũng Tàu: ở lại hay đón hai lượt?',
    title: 'Thuê xe đi Vũng Tàu: chọn xe ở lại hay đưa đón hai lượt?',
    description:
      'So sánh xe ở lại và đưa đón hai lượt khi đi Vũng Tàu theo nhu cầu di chuyển và chi phí từng phương án.',
    category: 'Lịch trình Vũng Tàu',
    date: '2026-11-13',
    updatedAt: '2026-11-25',
    image: '/images/vung-tau-thanh-pho-ve-chieu.jpg',
    imageAlt: 'Toàn cảnh đô thị Vũng Tàu nhìn từ trên đồi qua những tán cây',
    sections: [
      {
        heading: 'Chọn theo các chặng cần xe trong thời gian lưu trú',
        paragraphs: [
          'Nếu đã chốt ngủ lại Vũng Tàu và cần xe đi ăn, tham quan hoặc đón thêm khách, hãy hỏi báo giá xe ở lại theo từng khung giờ. Nếu đoàn tự đi lại tại chỗ, hãy hỏi hai lượt đưa đến và đón về, kèm giờ và ghim cho từng lượt.',
          'Xe ở lại phục vụ theo lịch đã thống nhất không có nghĩa xe sẵn sàng chạy bất kỳ giờ nào. Với đưa đón hai lượt, cũng không mặc định cùng một chiếc xe hoặc cùng tài xế thực hiện cả lượt đi và về. Những yêu cầu này cần được xác nhận trong nội dung đặt xe.',
        ],
      },
      {
        heading: 'Bảng so sánh hai cách bố trí xe',
        blocks: [
          {
            type: 'table',
            caption: 'Đối chiếu phạm vi xe ở lại và đưa đón hai lượt',
            columns: ['Nhu cầu', 'Xe ở lại theo lịch', 'Đưa đón hai lượt'],
            rows: [
              [
                'Đi ăn, tham quan nhiều điểm',
                'Liệt kê từng chặng và giờ phục vụ trong báo giá.',
                'Tự sắp xếp phương tiện giữa hai lượt hoặc hỏi báo giá bổ sung.',
              ],
              [
                'Đồ mang theo khi ra ngoài',
                'Hỏi khả năng để đồ trên xe và thời điểm lấy; tự giữ vật có giá trị.',
                'Mang đồ cần dùng xuống khi kết thúc lượt đưa.',
              ],
              [
                'Lịch buổi tối',
                'Ghi giờ bắt đầu, kết thúc; xác nhận giới hạn phục vụ.',
                'Hỏi phương tiện khác hoặc đặt thêm lượt riêng.',
              ],
              [
                'Thay đổi giờ về',
                'Liên hệ đầu mối điều xe để xác nhận phương án và chênh lệch nếu có.',
                'Báo lại giờ đón, địa chỉ và khả năng bố trí lượt về.',
              ],
              [
                'Nơi đỗ, ăn nghỉ tài xế',
                'Làm rõ trách nhiệm sắp xếp và chi phí.',
                'Hỏi phạm vi từng lượt; không tự suy ra chi phí từ phương án xe ở lại.',
              ],
            ],
          },
        ],
      },
      {
        heading: 'So tổng chi phí trên cùng một danh sách chặng',
        paragraphs: [
          'Đưa đón hai lượt gồm TP.HCM → nơi lưu trú và nơi lưu trú → TP.HCM theo hai giờ đã hẹn. Phương án xe ở lại có thêm các chặng giữa chuyến theo lịch đã xác nhận.',
          'Khi so tổng tiền, cộng chi phí đi lại tại chỗ vào phương án hai lượt. Với cả hai báo giá, hỏi rõ giờ phục vụ, nơi đỗ, khoản ăn nghỉ tài xế nếu có và điều kiện đổi giờ. Yêu cầu báo riêng cho gói qua đêm.',
        ],
        blocks: [
          {
            type: 'paragraph',
            content: [
              { text: 'Tra nhóm xe tại ' },
              { text: 'bảng giá thuê xe', href: '/bang-gia' },
              { text: ' rồi dùng ' },
              {
                text: 'bảng kiểm các khoản phí',
                href: '/kinh-nghiem/thue-xe-co-tai-xe-can-kiem-tra-nhung-khoan-phi-nao',
              },
              { text: ' để hỏi cùng một phạm vi cho cả hai báo giá.' },
            ],
          },
        ],
      },
      {
        heading: 'Hai tình huống minh họa để chọn phương án',
        blocks: [
          {
            type: 'list',
            items: [
              'Gia đình nghỉ tại chỗ và tự sắp xếp xe đi ăn có thể hỏi phương án đưa đến rồi đón về. Ghi riêng phần đi lại tại chỗ khi so tổng tiền.',
              'Đoàn ghé bãi biển, nhà hàng, khách sạn rồi đi ăn tối có thể hỏi phương án xe ở lại. Ghi giờ bắt đầu và kết thúc của từng chặng cần xe.',
            ],
          },
          {
            type: 'paragraph',
            content: [
              { text: 'Nhóm nhỏ có thể tham khảo ' },
              { text: 'xe 7 chỗ đi Vũng Tàu', href: '/thue-xe/7-cho/di-vung-tau' },
              { text: '. Đoàn đông hơn có thể tham khảo ' },
              { text: 'xe 16 chỗ đi Vũng Tàu', href: '/thue-xe/16-cho/di-vung-tau' },
              { text: '. Gửi số người và hành lý để nhà xe kiểm tra phương án.' },
            ],
          },
        ],
      },
      {
        heading: 'Hỏi giá cho hai phương án',
        blocks: [
          {
            type: 'paragraph',
            content: [
              { text: 'Gửi cả hai phương án qua Zalo ' },
              { text: '0899 473 333', href: 'https://zalo.me/0899473333' },
              { text: '. Nếu chưa chốt số ngày, xem thêm ' },
              {
                text: 'đi Vũng Tàu trong ngày hay 2 ngày 1 đêm',
                href: '/kinh-nghiem/di-vung-tau-trong-ngay-hay-2-ngay-1-dem',
              },
              { text: '.' },
            ],
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Xe ở lại có bao gồm đưa đón buổi tối không?',
        answer:
          'Chỉ khi các chặng và khung giờ buổi tối được đưa vào phạm vi đã xác nhận. Ghi giờ kết thúc và hỏi cách xử lý nếu lịch kéo dài.',
      },
      {
        question: 'Đưa đón hai lượt có được giữ hành lý trên xe không?',
        answer:
          'Không nên mặc định. Chuẩn bị mang hành lý xuống khi kết thúc lượt đưa và xác nhận riêng nếu cần dịch vụ giữ đồ.',
      },
    ],
  },
  {
    slug: 'di-can-tho-2-ngay-1-dem-tu-tphcm-bang-xe-rieng',
    topics: ['can-tho', 'lich-trinh'],
    seoTitle: 'Cần Thơ 2 ngày 1 đêm bằng xe riêng',
    title: 'Đi Cần Thơ 2 ngày 1 đêm từ TP.HCM bằng xe riêng: gợi ý lịch trình',
    description:
      'Khung lịch đi Cần Thơ 2 ngày 1 đêm bằng xe riêng từ TP.HCM: bố trí chợ nổi, khách sạn, hành lý và các chặng cần xe phục vụ.',
    category: 'Lịch trình Cần Thơ',
    date: '2026-11-13',
    updatedAt: '2026-11-25',
    showFirstSectionBeforeImage: true,
    image: '/images/kia-carnival-2.jpg',
    imageAlt: 'Xe Kia Carnival minh họa cho chuyến gia đình đi Cần Thơ bằng xe riêng',
    sections: [
      {
        heading: 'Chia chuyến thành một ngày đến và một buổi sáng trải nghiệm',
        paragraphs: [
          'Nếu muốn đi chợ nổi vào sáng sớm, có thể đến Cần Thơ và nhận phòng từ ngày đầu. Trước khi đặt xe, hãy chốt sáng ngày hai cần xe đưa ra bến và quay lại khách sạn hay chỉ cần đón lúc trả phòng để về TP.HCM.',
        ],
      },
      {
        heading: 'Ngày 1: đón ở TP.HCM, đến Cần Thơ và nhận phòng',
        blocks: [
          {
            type: 'table',
            caption: 'Khung ngày đầu của chuyến Cần Thơ 2 ngày 1 đêm',
            columns: ['Thời điểm', 'Gợi ý hoạt động', 'Phần cần đưa vào lịch xe'],
            rows: [
              [
                'Buổi sáng',
                'Tập trung ở TP.HCM, khởi hành và nghỉ theo nhu cầu của đoàn.',
                'Địa chỉ đón, giờ có mặt, số điểm đón, nhu cầu nghỉ giữa đường.',
              ],
              [
                'Buổi trưa',
                'Dùng bữa tại địa chỉ đã chọn, sau đó đến nơi lưu trú.',
                'Địa chỉ nhà hàng, khách sạn và phương án chờ trước giờ nhận phòng.',
              ],
              [
                'Buổi chiều',
                'Nghỉ hoặc chọn một điểm tham quan phù hợp.',
                'Xe có cần đưa đón hay đoàn tự đi; thời gian kết thúc dự kiến.',
              ],
              [
                'Buổi tối',
                'Dùng bữa, nghỉ ngơi để chuẩn bị lịch sáng hôm sau.',
                'Ghi riêng lượt đi ăn và lượt đón về nếu cần xe phục vụ.',
              ],
            ],
          },
          {
            type: 'paragraph',
            content:
              'Không nên xếp nhiều điểm chỉ để lấp kín ngày đầu. Với trẻ nhỏ, người lớn tuổi hoặc đoàn có nhiều vali, dành thời gian nhận phòng và nghỉ sẽ giúp lịch ít phải thay đổi. Hỏi nơi lưu trú giờ nhận phòng và chỗ gửi hành lý nếu đến sớm.',
          },
        ],
      },
      {
        heading: 'Ngày 2: hẹn thuyền, trả phòng và trở về',
        blocks: [
          {
            type: 'table',
            caption: 'Khung minh họa cho ngày thứ hai',
            columns: ['Thời điểm', 'Việc cần chốt với nhà xe'],
            rows: [
              ['Buổi sáng', 'Nếu cần xe ra bến, báo giờ đón ở khách sạn và xe có cần chờ hoặc đón lại sau chuyến thuyền.'],
              ['Trước khi trả phòng', 'Chốt nơi để vali trong lúc đi thuyền và giờ đón sau khi trả phòng.'],
              ['Buổi trưa hoặc chiều', 'Ghi điểm ăn hoặc điểm ghé nếu có, giờ khởi hành về và các điểm trả tại TP.HCM.'],
            ],
          },
          {
            type: 'paragraph',
            content: [
              { text: 'Xem chi tiết phối hợp giờ xe và giờ thuyền trong bài ' },
              {
                text: 'đi chợ nổi Cái Răng từ TP.HCM',
                href: '/kinh-nghiem/di-cho-noi-cai-rang-tu-tp-hcm',
              },
              {
                text: '. Nếu thời tiết hoặc lịch thuyền thay đổi, liên hệ các bên để chốt lại phương án; không mặc định việc đổi lịch đã nằm trong giá xe.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Chọn xe theo người và hành lý qua đêm',
        blocks: [
          {
            type: 'paragraph',
            content: [
              { text: 'Nhóm gia đình có thể bắt đầu từ ' },
              { text: 'xe 7 chỗ đi Cần Thơ', href: '/thue-xe/7-cho/di-can-tho' },
              { text: '. Nếu hỏi ' },
              { text: 'Kia Carnival', href: '/doi-xe/kia-carnival' },
              {
                text: ', xác nhận đúng cấu hình và giá dòng xe. Đoàn nhiều khách hoặc vali nên đối chiếu thêm ',
              },
              { text: 'xe 16 chỗ đi Cần Thơ', href: '/thue-xe/16-cho/di-can-tho' },
              { text: '; không lấy số ghế làm cam kết sức chứa hành lý.' },
            ],
          },
        ],
        paragraphs: [
          'Thống kê vali theo kích thước, xe đẩy khi gấp và các kiện dùng chung. Ví dụ minh họa: năm khách có nhiều vali cần xác nhận cách xếp khi vẫn đủ ghế, thay vì mặc định xe 7 chỗ luôn chở vừa. Đồ cần dùng khi đi thuyền nên để trong túi nhỏ; làm rõ nơi để phần hành lý còn lại với khách sạn hoặc đơn vị xe.',
        ],
      },
      {
        heading: 'Tách tiền xe khỏi các dịch vụ trong chuyến',
        paragraphs: [
          'Lập ngân sách theo các nhóm: xe theo toàn bộ lịch hai ngày, khách sạn, bữa ăn, thuyền và hoạt động tham quan. Báo giá xe không tự bao gồm các dịch vụ còn lại. Riêng phần xe, hỏi nhiên liệu, cầu đường, bãi đỗ, khung giờ phục vụ, thuế và ăn nghỉ tài xế được tính thế nào.',
          'So sánh hai phương án xe ở lại phục vụ và đưa đi rồi đón về nếu đoàn tự sắp xếp được việc đi lại tại Cần Thơ. Ghi toàn bộ chặng cần dùng xe vào yêu cầu báo giá, bao gồm lượt từ khách sạn ra bến sáng hôm sau.',
        ],
        blocks: [
          {
            type: 'paragraph',
            content: [
              { text: 'Có thể đối chiếu nhóm xe trên ' },
              { text: 'bảng giá thuê xe', href: '/bang-gia' },
              {
                text: ', nhưng chuyến 2 ngày 1 đêm cần báo riêng, không nhân đôi mức một ngày. Gửi ngày đi, nơi lưu trú và lịch trên qua ',
              },
              { text: 'Zalo 0899 473 333', href: 'https://zalo.me/0899473333' },
              { text: ' để hỏi phương án phù hợp.' },
            ],
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Đi 2 ngày 1 đêm có bắt buộc thuê xe ở lại không?',
        answer:
          'Không mặc định. Có thể hỏi cả phương án đưa đi và đón về; khi đó cần tự bố trí hoặc báo giá riêng cho các lượt đi lại tại Cần Thơ.',
      },
      {
        question: 'Có cần chốt bến thuyền trước khi hẹn xe sáng ngày hai?',
        answer:
          'Nên xác nhận giờ và ghim bến với đơn vị thuyền trước, sau đó hẹn xe theo địa chỉ khách sạn và phần thời gian cần để đi bộ, tập trung tại bến.',
      },
    ],
  },
  {
    slug: 'di-can-tho-theo-doan-checklist-dat-xe-diem-don-ben-thuyen',
    topics: ['can-tho', 'doan', 'dat-xe'],
    seoTitle: 'Đi Cần Thơ theo đoàn: checklist đặt xe',
    title: 'Đi Cần Thơ theo đoàn: checklist đặt xe, chia điểm đón và hẹn bến thuyền',
    description:
      'Checklist tổ chức đoàn đi Cần Thơ: tổng hợp khách và hành lý, chia điểm đón, chốt đầu mối, hẹn bến thuyền và kiểm tra trước lượt về.',
    category: 'Tổ chức chuyến đi',
    date: '2026-11-13',
    updatedAt: '2026-11-25',
    showFirstSectionBeforeImage: true,
    image: '/images/ford-transit-1.jpg',
    imageAlt: 'Xe Ford Transit trong bộ ảnh do Hành Trình Phương Nam cung cấp',
    imageCaption:
      'Ảnh xe do Hành Trình Phương Nam cung cấp; xe phục vụ được xác nhận theo ngày đi.',
    sections: [
      {
        heading: 'Một bảng thông tin chung, một người chốt lịch với nhà xe',
        paragraphs: [
          'Cử một trưởng đoàn chốt lịch với nhà xe và một người phụ trách ở mỗi điểm đón. Mỗi người phụ trách báo số khách, số kiện và thay đổi tại điểm của mình để trưởng đoàn cập nhật vào cùng một bảng.',
        ],
      },
      {
        heading: 'Bảng tổng hợp trước khi chọn xe',
        blocks: [
          {
            type: 'table',
            caption: 'Mẫu thông tin điều phối đoàn đi Cần Thơ',
            columns: ['Mục', 'Nội dung cần điền', 'Người xác nhận'],
            rows: [
              [
                'Quy mô đoàn',
                'Người lớn, trẻ em, khách chỉ đi một lượt và nhu cầu hỗ trợ.',
                'Trưởng đoàn hoặc đại diện từng nhóm.',
              ],
              [
                'Hành lý',
                'Số vali theo cỡ, xe đẩy và kiện đồ chung; nêu kiện lớn nhất.',
                'Đại diện nhóm tổng hợp, nhà xe kiểm tra phương án.',
              ],
              [
                'Điểm đón',
                'Địa chỉ, ghim, giờ có mặt, số khách và số điện thoại đầu mối.',
                'Người phụ trách tại từng điểm.',
              ],
              [
                'Điểm đến',
                'Khách sạn, nhà hàng, bến thuyền và các điểm ghé theo thứ tự.',
                'Người đặt các dịch vụ tại Cần Thơ.',
              ],
              [
                'Lượt về',
                'Giờ tập trung, địa chỉ đón lại và các điểm trả khách.',
                'Đầu mối đoàn xác nhận với nhà xe.',
              ],
            ],
          },
          {
            type: 'paragraph',
            content: [
              { text: 'Gửi bảng số khách và hành lý để nhà xe kiểm tra chiếc xe dự kiến. Có thể đối chiếu ' },
              { text: 'xe 16 chỗ đi Cần Thơ', href: '/thue-xe/16-cho/di-can-tho' },
              { text: ' và ' },
              { text: 'xe 29 chỗ đi Cần Thơ', href: '/thue-xe/29-cho/di-can-tho' },
              { text: ' theo số khách ở lượt đông nhất, số kiện và khả năng dừng xe tại từng điểm đón.' },
            ],
          },
        ],
      },
      {
        heading: 'Chia điểm đón ở TP.HCM theo khả năng tập kết',
        blocks: [
          {
            type: 'table',
            caption: 'Ví dụ minh họa khi một khách đổi điểm đón',
            columns: ['Điểm đón', 'Số khách trước và sau khi đổi'],
            rows: [['Điểm A', '12 → 11 khách'], ['Điểm B', '8 → 9 khách'], ['Cả đoàn', '20 khách ở cả hai phương án']],
          },
          {
            type: 'paragraph',
            content: 'Khi một người chuyển từ điểm A sang điểm B, trưởng đoàn cập nhật cả hai dòng rồi gửi lại số khách cho từng đại diện. Với mỗi điểm, ghi thêm ghim, giờ có mặt, số kiện và tên người phụ trách. Hỏi trước nhà xe có thể dừng tại ghim đó không.',
          },
        ],
      },
      {
        heading: 'Chia người kiểm khách ở bến thuyền',
        blocks: [
          {
            type: 'list',
            items: [
              'Hỏi bên thuyền cách chia nhóm và cử một người kiểm khách cho mỗi nhóm.',
              'Khi cập bến, các nhóm báo số khách cho trưởng đoàn. Báo riêng người tự đi về hoặc kết thúc chuyến tại Cần Thơ.',
              'Trưởng đoàn đối chiếu số người cần lên xe và báo tài xế nếu giờ đón thay đổi.',
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                text: 'Khi cần chốt ghim bến, điểm xe dừng và giờ đón lại, xem ',
              },
              {
                text: 'hướng dẫn đi chợ nổi Cái Răng',
                href: '/kinh-nghiem/di-cho-noi-cai-rang-tu-tp-hcm',
              },
              { text: '. Nếu ngủ lại, dùng ' },
              {
                text: 'khung lịch Cần Thơ 2 ngày 1 đêm',
                href: '/kinh-nghiem/di-can-tho-2-ngay-1-dem-tu-tphcm-bang-xe-rieng',
              },
              { text: ' để phân bổ các lượt xe.' },
            ],
          },
        ],
      },
      {
        heading: 'Kiểm tra lần cuối trước ngày đi và trước lượt về',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Chốt bản lịch có ngày cập nhật: xe, số khách, điểm đón trả, giờ phục vụ và thông tin đầu mối hai bên.',
              'Đối chiếu tổng giá, khoản đã gồm/chưa gồm, phần đã thanh toán và điều kiện khi đổi lịch. Thêm điểm đón hoặc về muộn cần xác nhận lại.',
              'Gửi lịch cho các đại diện nhóm; nhắc giờ có mặt và ghim tập kết, tách khỏi giờ xe dự kiến khởi hành.',
              'Trước lượt về, kiểm đếm khách, vali và đồ chung; kiểm tra người ở lại có lấy đủ hành lý của mình chưa.',
              'Thông báo thay đổi cho một đầu mối điều xe để mọi người dùng cùng phiên bản, tránh nhiều người gửi các chỉ dẫn khác nhau.',
            ],
          },
          {
            type: 'paragraph',
            content: [
              { text: 'Đối chiếu nhóm giá trên ' },
              { text: 'bảng giá thuê xe', href: '/bang-gia' },
              { text: ', rồi gửi số khách, hành lý và danh sách điểm đón qua ' },
              { text: 'Zalo 0899 473 333', href: 'https://zalo.me/0899473333' },
              {
                text: ' để nhận tư vấn theo lịch đoàn. Bảng điều phối không thay thế báo giá và xác nhận đặt xe.',
              },
            ],
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Đi nhiều điểm đón có giữ nguyên giá không?',
        answer:
          'Cần báo tất cả địa chỉ và thứ tự dự kiến trước khi chốt. Chi phí và thời gian có thể thay đổi theo lịch cụ thể; không có mức miễn phí chung được công bố cho mọi chuyến.',
      },
      {
        question: 'Có nên để mỗi nhóm tự liên hệ tài xế đổi lịch?',
        answer:
          'Nên thống nhất thay đổi qua đầu mối chung của đoàn để tránh chỉ dẫn mâu thuẫn. Đại diện mỗi điểm vẫn có thể liên hệ khi cần xác định chỗ đứng đợi.',
      },
    ],
  },
];
