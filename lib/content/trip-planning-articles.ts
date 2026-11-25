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
    image: '/images/seo-can-tho-7-1.jpg',
    imageAlt: 'Cầu Cần Thơ bắc qua sông Hậu',
    imageCaption: 'Ảnh Vyacheslav Argenberg / Wikimedia Commons, CC BY 4.0. Ảnh điểm đến minh họa.',
    sections: [
      {
        heading: 'Chia chuyến thành một ngày đến và một buổi sáng trải nghiệm',
        paragraphs: [
          'Với chuyến Cần Thơ 2 ngày 1 đêm, bạn có thể đến nơi ngày đầu, nhận phòng và dành buổi sáng ngày hai cho chuyến thuyền nếu đó là hoạt động chính. Cách bố trí này tách chặng từ TP.HCM khỏi giờ hẹn lên thuyền. Gia đình vẫn cần tính thời gian tập trung, ăn uống, nghỉ và di chuyển giữa khách sạn với bến.',
          'Khung bên dưới là gợi ý để trao đổi với đơn vị xe, không phải tour đang bán hoặc cam kết giờ đến. Hãy chốt khách sạn, đơn vị thuyền và điểm tham quan theo ngày thực tế trước khi xác nhận toàn bộ lịch xe.',
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
            type: 'list',
            ordered: true,
            items: [
              'Xác nhận giờ có mặt và ghim bến với đơn vị thuyền trước; dùng mốc đó để hẹn giờ xe tại khách sạn.',
              'Hỏi điểm xuống xe, quãng đi bộ tới bến và bến trả khách sau chuyến thuyền. Gửi cả hai ghim nếu khác nhau.',
              'Sau chuyến thuyền, bố trí ăn sáng hoặc trở về khách sạn theo nhu cầu. Ghi rõ xe có chờ và đón lại hay không.',
              'Đối chiếu giờ trả phòng, thu đủ hành lý và chọn nơi dùng bữa trước khi về nếu có.',
              'Chốt giờ khởi hành về, các điểm trả ở TP.HCM và đầu mối báo thay đổi cho tài xế.',
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
      {
        heading: 'Nguồn ảnh',
        blocks: [
          {
            type: 'paragraph',
            content: [
              {
                text: 'Cầu Cần Thơ — Vyacheslav Argenberg',
                href: 'https://commons.wikimedia.org/wiki/File:Can_Tho,_Vietnam,_Bridge.jpg',
              },
              { text: ', ' },
              { text: 'CC BY 4.0', href: 'https://creativecommons.org/licenses/by/4.0/' },
              { text: '. Ảnh được tối ưu để hiển thị trên website.' },
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
    image: '/images/ford-transit-1.jpg',
    imageAlt: 'Xe Ford Transit trong bộ ảnh do Hành Trình Phương Nam cung cấp',
    imageCaption:
      'Ảnh xe do Hành Trình Phương Nam cung cấp; xe phục vụ được xác nhận theo ngày đi.',
    sections: [
      {
        heading: 'Một bảng thông tin chung, một người chốt lịch với nhà xe',
        paragraphs: [
          'Khi cả đoàn cùng đặt xe đi Cần Thơ, khó khăn thường nằm ở việc mỗi người gửi một địa chỉ, thay đổi giờ riêng hoặc mang thêm đồ sát ngày. Người tổ chức nên dùng một bảng tổng hợp và chỉ định một đầu mối trao đổi với nhà xe. Người này giữ phiên bản lịch mới nhất, còn các nhóm khách nhận thông tin từ cùng một nguồn.',
          'Không cần thu thập giấy tờ cá nhân cho bảng điều phối thông thường. Chỉ lưu thông tin cần thiết như số khách, nhóm đón, số hành lý và người liên hệ; chia sẻ danh sách với người thực sự cần xử lý chuyến.',
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
              { text: 'Với nhóm đang cân nhắc ' },
              { text: 'Ford Transit', href: '/doi-xe/ford-transit' },
              { text: ', gửi cả bảng hành lý để kiểm tra sức chứa. Xem ' },
              { text: 'xe 16 chỗ đi Cần Thơ', href: '/thue-xe/16-cho/di-can-tho' },
              { text: ' hoặc hỏi xe lớn hơn nếu số khách và đồ không phù hợp chiếc xe dự kiến.' },
            ],
          },
        ],
      },
      {
        heading: 'Chia điểm đón ở TP.HCM theo khả năng tập kết',
        paragraphs: [
          'Trước hết, hỏi đoàn có thể tập trung tại một điểm thuận tiện hay không. Nếu bắt buộc đón nhiều nơi, gửi tất cả ghim để nhà xe kiểm tra thứ tự và thời gian. Không tự hẹn các điểm cùng một giờ hoặc giả định xe lớn có thể vào mọi hẻm. Người phụ trách mỗi điểm cần biết chính xác nơi đứng đợi và cách liên hệ khi khách chưa đủ.',
          'Ví dụ minh họa: đoàn có hai nhóm ở hai địa chỉ, mỗi nhóm cử một đại diện báo “đã đủ người và hành lý” cho đầu mối chung. Nếu có người đổi điểm đón, cập nhật cả số khách ở điểm cũ lẫn điểm mới để tránh đếm trùng. Thống nhất cách xử lý khi có khách đến muộn trước ngày khởi hành.',
        ],
      },
      {
        heading: 'Hẹn bến thuyền bằng hai ghim và một giờ tập trung',
        blocks: [
          {
            type: 'list',
            items: [
              'Xin ghim bến lên thuyền và bến trả khách; kiểm tra chúng có cùng địa điểm không.',
              'Hỏi đơn vị thuyền giờ cả đoàn phải có mặt, cách chia nhóm nếu không đi chung một thuyền và người liên hệ tại bến.',
              'Gửi nhà xe vị trí xuống khách và điểm đón lại; chốt nơi xe chờ thay vì mặc định đỗ ngay cổng bến.',
              'Cử một người tập hợp đoàn trước lượt lên thuyền và sau khi trở lại. Báo tài xế khi lịch cập bến dự kiến thay đổi.',
              'Đối chiếu số khách trước khi xe rời điểm đón lại; xác nhận người nào tự di chuyển hoặc kết thúc chuyến tại Cần Thơ.',
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                text: 'Các bước này tập trung vào điều phối đoàn. Phần chọn lịch và phối hợp xe/thuyền được giải thích thêm tại ',
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
