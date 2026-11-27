import type { Article, ArticleBlock, InlineContent } from './articles';
import { contact } from '../contact.ts';

const paragraph = (content: InlineContent): ArticleBlock => ({ type: 'paragraph', content });
const checklist = (items: InlineContent[]): ArticleBlock => ({ type: 'list', items });
const table = (caption: string, columns: string[], rows: InlineContent[][]): ArticleBlock => ({
  type: 'table',
  caption,
  columns,
  rows,
});

export const travelGuides: Article[] = [
  {
    slug: 'di-nha-trang-3-ngay-2-dem-tu-tphcm-bang-xe-rieng',
    title: 'Đi Nha Trang 3 ngày 2 đêm từ TP.HCM bằng xe riêng: cách lên lịch',
    seoTitle: 'Nha Trang 3 ngày 2 đêm bằng xe riêng',
    topics: ['nha-trang', 'lich-trinh', 'gia-dinh'],
    description:
      'Gợi ý lịch đi Nha Trang 3 ngày 2 đêm từ TP.HCM bằng xe riêng: chia ngày di chuyển, chọn điểm tham quan và chốt phạm vi dùng xe.',
    category: 'Lịch trình Nha Trang',
    date: '2026-11-17',
    updatedAt: '2026-11-27',
    showFirstSectionBeforeImage: true,
    image: '/images/seo-nha-trang-7-2.jpg',
    imageAlt: 'Hàng dừa và ô che nắng bên bãi biển Nha Trang',
    sections: [
      {
        heading: 'Dành ngày giữa cho hoạt động chính',
        blocks: [
          paragraph(
            'Dành ngày đầu để đi từ TP.HCM đến khách sạn, ngày giữa để tham quan và ngày cuối để về. Nếu đi đảo vào ngày giữa, chốt với bên tàu cả bến lên và bến về rồi hẹn xe đưa đón trên bờ theo hai ghim đó.',
          ),
          paragraph(
            'Trước khi đặt phòng, hãy đối chiếu giờ nhận phòng với giờ đến dự kiến. Nếu đến sớm, hỏi nơi gửi đồ và phương án nghỉ trong lúc chờ; nếu về muộn ngày cuối, hỏi cách gửi hành lý sau khi trả phòng. Không nên tự mặc định tài xế phục vụ xuyên đêm hoặc mọi lượt đi trong thành phố đều nằm trong báo giá.',
          ),
          paragraph([
            { text: 'Theo ' },
            {
              text: 'giới thiệu Nha Trang của Cục Du lịch Quốc gia Việt Nam',
              href: 'https://vietnam.travel/place-to-go/south-central-coast-central-highlands/nha-trang/',
            },
            {
              text: ', biển và các chuyến tham quan đảo là những trải nghiệm nổi bật. Khi chọn hoạt động trên đảo, cần đặt riêng phương tiện đường thủy và hẹn lại điểm xe đón trên bờ.',
            },
          ]),
        ],
      },
      {
        heading: 'Lịch trình 3 ngày 2 đêm để tham khảo',
        blocks: [
          table(
            'Lịch minh họa cho chuyến Nha Trang 3 ngày 2 đêm',
            ['Ngày', 'Gợi ý sắp xếp', 'Điều cần chốt với nhà xe'],
            [
              [
                'Ngày 1',
                'Đón tại TP.HCM, nghỉ dọc đường, đến khách sạn; buổi tối ăn gần nơi ở nếu đoàn còn mệt.',
                'Thứ tự điểm đón, điểm ăn nghỉ, giờ đến dự kiến và có cần xe buổi tối không.',
              ],
              [
                'Ngày 2',
                'Chọn một chương trình chính: tham quan trên bờ hoặc dành phần lớn ngày cho chuyến biển đảo.',
                'Nếu đi đảo, đặt tàu riêng. Hẹn xe trả tại bến đi và đón tại bến về theo giờ bên tàu xác nhận.',
              ],
              [
                'Ngày 3',
                'Ăn sáng, trả phòng, lấy đủ hành lý và về TP.HCM; chỉ thêm điểm ghé khi lịch đường bộ cho phép.',
                'Giờ rời khách sạn, các điểm trả ở TP.HCM và thời điểm kết thúc dự kiến.',
              ],
            ],
          ),
          paragraph(
            'Ví dụ, nếu tàu về bến khác với bến đi, gửi hai ghim riêng cho nhà xe. Hỏi bên tàu thời gian lên bờ dự kiến và thống nhất ai báo tài xế nếu giờ hoặc bến thay đổi.',
          ),
        ],
      },
      {
        heading: 'Chọn xe sau khi chốt số khách và hành lý',
        blocks: [
          paragraph([
            { text: 'Khi đã có lịch, xem cách ' },
            {
              text: 'chọn xe 7 hay 16 chỗ đi Nha Trang',
              href: '/kinh-nghiem/di-nha-trang-nen-chon-xe-7-hay-16-cho',
            },
            { text: ' theo số khách, vali và điểm đón.' },
          ]),
        ],
      },
      {
        heading: 'Tách rõ giá xe, lưu trú và hoạt động tham quan',
        blocks: [
          checklist([
            'Báo đủ ba ngày sử dụng, điểm xuất phát, khách sạn và các lượt xe tại Nha Trang.',
            'Hỏi báo giá gồm những khoản nào: cầu đường, bãi đỗ, thời gian chờ và chi phí liên quan đến tài xế.',
            'Xác nhận ăn nghỉ của tài xế khi xe ở lại; ghi điều kiện điều chỉnh nếu đổi khách sạn hoặc thêm điểm.',
            'Tách phòng nghỉ, ăn uống, vé tham quan và thuyền khỏi giá xe nếu các khoản đó không được báo gồm.',
          ]),
          paragraph([
            { text: 'Xem ' },
            { text: 'trang tuyến Nha Trang', href: '/tuyen-xe/nha-trang' },
            {
              text: ' để tra thời lượng và định mức của dòng giá hiện hành. Chuyến 3 ngày 2 đêm cần báo giá riêng theo lịch sử dụng xe.',
            },
          ]),
        ],
      },
      {
        heading: 'Gửi lịch đi Nha Trang để hỏi giá',
        blocks: [
          paragraph([
            { text: 'Nếu cả đoàn còn phân vân về xe ngày giữa, xem ' },
            { text: 'cách so xe ở lại với hẹn đón về', href: '/kinh-nghiem/thue-xe-nhieu-ngay-giu-xe-hay-hen-don-ve' },
            { text: '. Với lịch đi đảo, tách giờ và ghim bến của các lượt xe trên bờ khỏi lịch tàu.' },
          ]),
          paragraph([
            { text: 'Gửi ngày đi, ngày về, địa chỉ khách sạn và các lượt cần xe ở Nha Trang qua ' },
            { text: 'Zalo', href: contact.zalo },
            { text: '. Nếu đi đảo, gửi thêm bến đi và bến về khi đã có.' },
          ]),
        ],
      },
    ],
    faq: [
      {
        question: 'Đi 3 ngày 2 đêm có bắt buộc xe ở lại cùng đoàn không?',
        answer:
          'Không nên mặc định. Gửi lịch dùng xe từng ngày để hỏi phương án ở lại hoặc các lượt đưa đón riêng; so sánh theo cùng phạm vi phục vụ và chi phí tổng.',
      },
      {
        question: 'Có thể ghép tham quan đảo vào ngày về không?',
        answer:
          'Chỉ nên chốt sau khi đối chiếu giờ tàu/thuyền, thời gian lên bờ, lấy đồ và hành trình về. Nếu khó có khoảng dự phòng, chuyển hoạt động biển đảo sang ngày giữa.',
      },
    ],
  },
  {
    slug: 'di-nha-trang-nen-chon-xe-7-hay-16-cho',
    title: 'Đi Nha Trang nên chọn xe 7 hay 16 chỗ?',
    seoTitle: 'Đi Nha Trang: chọn xe 7 hay 16 chỗ?',
    topics: ['nha-trang', 'chon-xe', 'gia-dinh'],
    description:
      'So sánh xe 7 và 16 chỗ đi Nha Trang theo số khách, vali, điểm đón và lịch sử dụng. Checklist thông tin cần xác nhận trước khi đặt xe.',
    category: 'Chọn xe đi Nha Trang',
    date: '2026-11-17',
    updatedAt: '2026-11-27',
    showFirstSectionBeforeImage: true,
    image: '/images/van.jpg',
    imageAlt: 'Thân xe Ford Transit minh họa nhóm xe 16 chỗ',
    imageCaption: 'Xe 16 chỗ minh họa. Hỏi ảnh bố trí ghế và khoang hành lý trên xe dự kiến.',
    sections: [
      {
        heading: 'Bắt đầu bằng danh sách khách và hành lý',
        blocks: [
          paragraph(
            'Chọn xe 7 chỗ khi nhà xe xác nhận đủ ghế cho cả đoàn và xếp vừa hành lý trên chiếc xe dự kiến. Nếu thiếu ghế hoặc có vali lớn, xe đẩy hay thùng đồ chưa có chỗ, hỏi thêm phương án 16 chỗ với cùng danh sách khách và đồ.',
          ),
          paragraph(
            'Tính cả trẻ em khi đếm khách. Với kiện khó xếp, gửi kích thước và ảnh lúc đã gấp để nhà xe kiểm tra cùng cấu hình ghế sẽ dùng.',
          ),
        ],
      },
      {
        heading: 'Bảng so sánh để hỏi đúng nhu cầu',
        blocks: [
          table(
            'So sánh nhu cầu thuê xe, không thay thế thông số chiếc xe thực tế',
            ['Tiêu chí', 'Nhóm xe 7 chỗ', 'Nhóm xe 16 chỗ'],
            [
              [
                'Khách đi',
                'Gia đình hoặc nhóm nhỏ; hỏi số ghế khách sử dụng được.',
                'Đoàn nhỏ nhiều thành viên; chốt danh sách và người phụ trách.',
              ],
              [
                'Hành lý',
                'Khi dùng nhiều hàng ghế, cần kiểm tra lại chỗ để vali.',
                'Kiểm tra khoang đồ riêng; thêm ghế không đồng nghĩa chứa đủ mọi vali.',
              ],
              [
                'Điểm đón',
                'Gửi địa chỉ và điều kiện đường vào, nhất là nhà trong hẻm.',
                'Ưu tiên điểm tập kết đủ chỗ dừng, thống nhất lượt gom khách.',
              ],
              [
                'Lịch tại Nha Trang',
                'Chốt các lượt đưa đón gia đình, khách sạn và điểm ăn uống.',
                'Chốt giờ tập trung, nơi đỗ và thời gian lên xuống của cả đoàn.',
              ],
              [
                'Báo giá',
                'So sánh cùng số ngày, điểm đến và phạm vi chờ.',
                'Cũng cần cùng điều kiện; không chỉ chia tổng tiền cho số ghế ghi trên tên xe.',
              ],
            ],
          ),
          paragraph(
            'Nếu đang phân vân, gửi cùng một lịch cho hai phương án và đề nghị báo cả giá lẫn điều kiện phục vụ. Cách này giúp thấy rõ chênh lệch chi phí thực tế mà không phải đoán sức chứa hay tự suy ra mức giá từ một tuyến khác.',
          ),
        ],
      },
      {
        heading: 'Ba tình huống minh họa khi chọn xe',
        blocks: [
          paragraph('Với hành trình dài, thống nhất trước món nào cần lấy trong lúc nghỉ. Nếu đoàn mang cả đồ tắm biển, xe đẩy và vali, hỏi cách xếp riêng túi dùng giữa đường mà vẫn giữ đủ ghế.'),
          checklist([
            'Gia đình mang xe đẩy và vali cứng: hỏi xe 7 chỗ có chỗ xếp cả hai khi đang dùng đủ ghế cần thiết. Nếu phải gập một ghế đang cần dùng, hỏi phương án 16 chỗ.',
            'Hai gia đình đi cùng: báo tổng số người lớn và trẻ em, không chỉ số hộ; hỏi cả phương án 7 và 16 chỗ nếu số khách/hành lý chưa chốt.',
            'Nhóm bạn đi nhiều đêm: chốt số kiện lớn của từng người, giờ tập kết và điểm trả; nếu cần xe lớn hơn, hỏi trước khi đặt cọc.',
          ]),
          paragraph(
            'Đây là ví dụ lập kế hoạch, không phải mô tả chuyến đã thực hiện. Với chặng đường dài, nên trao đổi nhu cầu dừng nghỉ, hỗ trợ lên xuống và những đồ cần lấy giữa đường để bố trí thuận tiện. Không dùng lối đi hoặc khu vực cần thoát ra vào làm chỗ chứa đồ.',
          ),
        ],
      },
      {
        heading: 'Đối chiếu xe và lịch trình trước khi đặt',
        blocks: [
          paragraph([
            { text: 'Xem phương án ' },
            { text: 'thuê xe 7 chỗ đi Nha Trang', href: '/thue-xe/7-cho/di-nha-trang' },
            { text: ' và ' },
            { text: 'thuê xe 16 chỗ đi Nha Trang', href: '/thue-xe/16-cho/di-nha-trang' },
            {
              text: '. Các trang này giúp chuẩn bị câu hỏi, còn chiếc xe sẵn có và trang bị phải được xác nhận theo ngày đi.',
            },
          ]),
          checklist([
            'Mẫu xe dự kiến, ảnh xe nếu cần và số ghế có thể bố trí cho toàn đoàn.',
            'Tổng hành lý, đồ cồng kềnh và những món cần lấy ở điểm nghỉ.',
            'Điểm đón/trả, giờ khởi hành, số đêm lưu trú và các lượt dùng xe tại điểm đến.',
            'Giá tổng, phạm vi chờ, khoản phát sinh và cách xử lý khi số khách thay đổi.',
          ]),
          paragraph([
            { text: 'Gửi số khách, số vali, kiện lớn nhất và ghim đón qua ' },
            { text: 'Zalo', href: contact.zalo },
            { text: ' để kiểm tra hai cỡ xe theo cùng lịch.' },
          ]),
          paragraph([
            { text: 'Nếu chưa có lịch từng ngày, tham khảo ' },
            {
              text: 'khung Nha Trang 3 ngày 2 đêm bằng xe riêng',
              href: '/kinh-nghiem/di-nha-trang-3-ngay-2-dem-tu-tphcm-bang-xe-rieng',
            },
            {
              text: ' rồi điều chỉnh theo đoàn của bạn. Chỉ đặt cọc sau khi hai bên cùng hiểu một phạm vi chuyến.',
            },
          ]),
        ],
      },
    ],
    faq: [
      {
        question: 'Ít người nhưng nhiều vali có nên chọn xe 16 chỗ không?',
        answer:
          'Có thể cân nhắc, nhưng cần kiểm tra số kiện và kích thước khoang chứa thực tế. Hãy gửi ảnh/kích thước hành lý để so sánh các phương án thay vì suy ra từ số chỗ.',
      },
      {
        question: 'Có thể đổi từ xe 7 lên 16 chỗ sát ngày đi không?',
        answer:
          'Phải hỏi lại tình trạng xe, giá và điều kiện thay đổi. Nếu số khách chưa chắc chắn, nên thống nhất thời hạn chốt và cách xử lý ngay khi đặt.',
      },
    ],
  },
  {
    slug: 'thue-xe-di-vung-tau-long-hai-ho-tram-khac-gi-khi-hoi-gia',
    title: 'Thuê xe đi Vũng Tàu, Long Hải hay Hồ Tràm: khác gì khi hỏi giá?',
    seoTitle: 'Vũng Tàu, Long Hải, Hồ Tràm: hỏi giá xe',
    topics: ['vung-tau', 'ho-tram', 'chi-phi'],
    description:
      'Phân biệt điểm trả Vũng Tàu, Long Hải và Hồ Tràm khi hỏi giá xe. Chuẩn bị địa chỉ lưu trú, điểm ghé và thời lượng để đối chiếu đúng báo giá.',
    category: 'Tuyến biển và báo giá',
    date: '2026-11-17',
    updatedAt: '2026-11-27',
    image: '/images/mpv.jpg',
    imageAlt: 'Ảnh minh họa xe Toyota Innova cho nhu cầu thuê xe đi biển',
    imageCaption: 'Ảnh minh họa dòng xe đi biển.',
    sections: [
      {
        heading: 'Tên điểm đến ảnh hưởng trực tiếp đến phạm vi báo giá',
        blocks: [
          paragraph('Khi đổi từ khách sạn ở Vũng Tàu sang resort ở Hồ Tràm, gửi ghim mới kể cả khi giữ nguyên ngày giờ và loại xe. Nếu vẫn ăn trưa ở Long Hải, nói rõ nơi nào là điểm ghé và nơi nào là điểm trả cuối.'),
          paragraph(
            'Khi hỏi xe đi Vũng Tàu, Long Hải hoặc Hồ Tràm, hãy gửi tên nơi trả khách và ghim đúng cổng. Liệt kê riêng các điểm chỉ ghé để nhà xe tra theo đúng địa chỉ và lịch của đoàn.',
          ),
          paragraph(
            'Bảng giá có ba dòng một ngày riêng cho Thành Phố Vũng Tàu, Long Hải Dinh Cô và Hồ Tràm. Dùng địa chỉ trong xác nhận đặt phòng để tra đúng dòng, sau đó gửi giờ đi, giờ về và các điểm ghé để nhà xe xác nhận giá theo lịch.',
          ),
        ],
      },
      {
        heading: 'Thông tin cần gửi cho từng phương án',
        blocks: [
          table(
            'Dòng bảng giá và thông tin cần gửi theo điểm trả',
            ['Dòng bảng giá', 'Thông tin chính', 'Điểm dễ bỏ sót'],
            [
              [
                'Thành Phố Vũng Tàu',
                'Tên khách sạn/địa chỉ, điểm ăn và các bãi biển muốn ghé.',
                'Lượt di chuyển giữa khách sạn, nhà hàng và điểm tham quan.',
              ],
              [
                'Long Hải Dinh Cô',
                'Cơ sở lưu trú, giờ đến và có ghé điểm khác trước/sau không.',
                'Nhầm tên khu vực với một cơ sở lưu trú khác; thiếu ghim điểm trả.',
              ],
              [
                'Hồ Tràm',
                'Tên resort, cổng đón trả, ngày nhận/trả phòng và giờ xe cần có mặt.',
                'Chỉ báo tên tuyến chung, chưa ghi nhu cầu ra ngoài resort.',
              ],
              [
                'Lịch ghép nhiều điểm',
                'Toàn bộ thứ tự điểm ghé, thời gian dừng và nơi kết thúc.',
                'So sánh giá chuyến ghép với giá chỉ đưa đến một nơi.',
              ],
            ],
          ),
          paragraph(
            'Với xe đoàn lớn, hỏi cơ sở lưu trú hoặc nhà hàng về vị trí xe dừng và bãi đỗ. Nếu cần tập kết ngoài cổng rồi đi bộ vào, nên biết trước để báo cho đoàn, đặc biệt khi mang nhiều hành lý hoặc có người cần hỗ trợ lên xuống.',
          ),
        ],
      },
      {
        heading: 'Một chiều, trong ngày và qua đêm là các phạm vi khác nhau',
        blocks: [
          paragraph(
            'Chuyến một chiều kết thúc khi trả khách theo thỏa thuận. Chuyến đi về trong ngày cần thêm giờ đón lại và các lượt dùng xe giữa chuyến. Với lịch hai ngày một đêm, ghi rõ xe có ở lại và đoàn có dùng xe buổi tối hoặc sáng hôm sau không. Hỏi giá theo phạm vi phục vụ đã thống nhất.',
          ),
          paragraph(
            'Ví dụ minh họa, đoàn nghỉ tại resort Hồ Tràm và ghé Dinh Cô trên đường về nên ghi resort là điểm lưu trú và Dinh Cô là điểm dừng. Gửi hai ghim, thời gian dừng và giờ về để nhà xe báo giá cho lịch ghép điểm.',
          ),
        ],
      },
      {
        heading: 'Cách đối chiếu bảng giá và khoản chưa gồm',
        blocks: [
          paragraph([
            { text: 'Mở ' },
            { text: 'bảng giá thuê xe', href: '/bang-gia' },
            { text: ' và tìm đúng điểm đến. ' },
            { text: 'Trang tuyến Vũng Tàu', href: '/tuyen-xe/vung-tau' },
            {
              text: ' cũng tập hợp các dòng trong khu vực để tham khảo. Đối chiếu cả số chỗ và thời lượng, không chỉ con số tiền.',
            },
          ]),
          checklist([
            'Hai báo giá có cùng ngày đi, số khách, số điểm đón và điểm trả không?',
            'Đã gồm cầu đường, bãi đỗ, thời gian chờ và các lượt tại điểm đến chưa?',
            'Chuyến qua đêm bố trí ăn nghỉ tài xế như thế nào?',
            'Nếu thêm một điểm hoặc lùi giờ về, cách tính điều chỉnh và xác nhận ra sao?',
          ]),
          paragraph([
            { text: 'Nếu đã chọn resort, xem ' },
            {
              text: 'cách chốt lịch Hồ Tràm 2 ngày 1 đêm',
              href: '/kinh-nghiem/di-ho-tram-2-ngay-1-dem-bang-xe-rieng',
            },
            { text: '. Để kiểm tra báo giá đầy đủ, đọc thêm ' },
            {
              text: 'các khoản phí cần hỏi khi thuê xe có tài xế',
              href: '/kinh-nghiem/thue-xe-co-tai-xe-can-kiem-tra-nhung-khoan-phi-nao',
            },
            { text: '.' },
          ]),
        ],
      },
    ],
    faq: [
      {
        question: 'Giá đi Vũng Tàu có áp dụng cho resort Hồ Tràm không?',
        answer:
          'Không tự động áp dụng. Gửi tên resort và ghim vị trí để nhận báo giá theo đúng điểm trả, thời lượng và phạm vi dùng xe.',
      },
      {
        question: 'Muốn ghé Long Hải trên đường về từ Hồ Tràm cần báo trước không?',
        answer:
          'Nên ghi ngay trong lịch hỏi xe, gồm địa chỉ, thời gian dừng và giờ về dự kiến. Nhà xe cần kiểm tra lộ trình và xác nhận khoản điều chỉnh nếu có.',
      },
    ],
  },
  {
    slug: 'thue-xe-29-hay-45-cho-cho-doan-cong-ty',
    title: 'Thuê xe 29 hay 45 chỗ cho đoàn công ty?',
    seoTitle: 'Đoàn công ty: chọn xe 29 hay 45 chỗ?',
    topics: ['chon-xe', 'doan', 'dat-xe'],
    description:
      'Chọn xe 29 hay 45 chỗ cho đoàn công ty theo số khách, hành lý, thiết bị và bãi đỗ. Có checklist lịch đưa đón và cách so sánh báo giá.',
    category: 'Xe đoàn và sự kiện',
    date: '2026-11-17',
    updatedAt: '2026-11-27',
    showFirstSectionBeforeImage: true,
    image: '/images/bus.jpg',
    imageAlt: 'Ảnh minh họa xe khách du lịch cho chương trình đưa đón đoàn công ty',
    imageCaption: 'Ảnh minh họa xe đoàn; mẫu xe phục vụ cần xác nhận khi đặt.',
    sections: [
      {
        heading: 'Kiểm số khách, khoang đồ và đường vào trước khi chọn xe',
        blocks: [
          paragraph(
            'Chọn xe 29 chỗ nếu nhà xe xác nhận đủ ghế cho lượt đông nhất, đủ khoang hành lý và vào được các điểm đón trả. Nếu thiếu ghế hoặc khoang đồ, hãy so phương án xe 45 chỗ với phương án chia lượt hoặc chở riêng thiết bị.',
          ),
          paragraph(
            'Với thùng quà, thiết bị âm thanh hoặc đồ sự kiện, gửi kích thước kiện lớn nhất và hỏi cách đưa kiện qua cửa khoang. Gửi thêm ghim cổng và bãi xe để nhà xe kiểm tra chỗ dừng, quay đầu và đỗ của từng phương án.',
          ),
        ],
      },
      {
        heading: 'Bảng đối chiếu xe 29 và 45 chỗ',
        blocks: [
          table(
            'Các câu hỏi cần dùng để chọn xe cho chương trình công ty',
            ['Tiêu chí', 'Nhóm 29 chỗ', 'Nhóm 45 chỗ'],
            [
              [
                'Quy mô',
                'Cân nhắc cho đoàn vừa khi khách và đồ phù hợp xe được bố trí.',
                'Cân nhắc cho đoàn lớn hoặc nhu cầu bố trí khác; xác nhận sức chứa thực tế.',
              ],
              [
                'Đường vào',
                'Kiểm tra cổng, chỗ dừng và đường tới khách sạn/nhà hàng.',
                'Cần làm rõ đường tiếp cận, vị trí quay đầu và bãi đỗ cho xe lớn.',
              ],
              [
                'Hành lý',
                'Thống kê vali và đồ chương trình; hỏi khoang chứa.',
                'Cũng phải kiểm tra kích thước kiện và phương án xếp, không chỉ tổng số túi.',
              ],
              [
                'Nhiều lượt',
                'Có thể phù hợp chia lượt nếu giờ giấc cho phép.',
                'Cân nhắc gom đoàn, nhưng vẫn phải tính thời gian tập kết và di chuyển.',
              ],
              [
                'So giá',
                'Dùng cùng tuyến, thời gian chờ và lượt đưa đón để hỏi.',
                'Đối chiếu tổng chi phí cùng phạm vi, gồm điều kiện thay đổi số khách.',
              ],
            ],
          ),
          paragraph(
            'Nếu cả hai phương án đều đáp ứng, đánh giá thêm việc tập trung đoàn, chỗ đỗ và nhu cầu di chuyển tại điểm đến. Phương án ít tiền hơn ở một lượt chưa chắc phù hợp cả ngày nếu phải chạy thêm nhiều lượt hoặc mất nhiều thời gian chờ. Các điều kiện đó cần được ghi trong báo giá.',
          ),
        ],
      },
      {
        heading: 'Lập lịch sự kiện theo từng lượt đón trả',
        blocks: [
          paragraph('Khi đoàn có thùng thiết bị, phân công người nhận đồ ở điểm đến và hỏi ban tổ chức xe có thể dừng ở cổng nào. Nếu số khách thay đổi sát ngày hoặc đông hơn số ghế đã xác nhận, báo lại trước khi chia danh sách theo xe.'),
          checklist([
            'Ghi giờ đoàn phải có mặt tại sự kiện, thời gian lên xuống xe và khoảng dự phòng tập trung.',
            'Mỗi lượt có điểm đón, giờ đón, số khách, người phụ trách và nơi trả cụ thể.',
            'Nếu khách đến bằng nhiều chuyến bay hoặc nghỉ ở nhiều khách sạn, tách thành từng nhóm.',
            'Hỏi nơi xe được chờ, phí bãi đỗ và ai liên hệ khi chương trình kéo dài.',
            'Chốt lượt kết thúc, các điểm trả cuối ngày và cách thông báo khi lịch thay đổi.',
          ]),
          paragraph(
            'Ví dụ minh họa: buổi sáng đoàn đi chung đến hội nghị, buổi chiều một nhóm về khách sạn còn nhóm khác đi ăn tối. Đây là hai nhu cầu trả khách khác nhau; người đặt nên gửi cả lịch chiều ngay từ đầu. Nếu sự kiện kết thúc không cố định, trao đổi khung chờ và cách xác nhận phát sinh trước khi chốt xe.',
          ),
        ],
      },
      {
        heading: 'Thông tin để chốt xe và hồ sơ thanh toán',
        blocks: [
          paragraph([
            { text: 'Đối chiếu ' },
            { text: 'nhóm xe 29 chỗ', href: '/thue-xe/29-cho' },
            { text: ' và ' },
            { text: 'nhóm xe 45 chỗ', href: '/thue-xe/45-cho' },
            { text: '; có thể xem thêm ' },
            { text: 'Samco 29 chỗ', href: '/doi-xe/samco-29-cho' },
            { text: ' và ' },
            { text: 'Hyundai Universe', href: '/doi-xe/hyundai-universe' },
            {
              text: ' trong danh mục. Không mặc định mẫu minh họa là xe chắc chắn có vào ngày tổ chức.',
            },
          ]),
          paragraph(
            'Khi làm việc qua công ty, hãy gửi thông tin đơn vị nhận hóa đơn, đầu mối duyệt lịch và yêu cầu hồ sơ thanh toán để hỏi khả năng đáp ứng. Đối chiếu giá đã gồm/chưa gồm thuế và các khoản phục vụ.',
          ),
          paragraph([
            { text: 'Khi hỏi qua ' },
            { text: 'Zalo', href: contact.zalo },
            { text: ', gửi số khách theo từng lượt, số vali, kích thước kiện lớn nhất và ghim đón trả để nhà xe so sánh hai cỡ xe.' },
          ]),
          paragraph([
            { text: 'Trước khi chuyển tiền, xem ' },
            {
              text: 'những điều cần xác nhận khi đặt cọc',
              href: '/kinh-nghiem/dat-coc-thue-xe-can-xac-nhan-gi',
            },
            {
              text: '. Nếu số người chưa chốt, đề nghị ghi rõ hạn cập nhật và điều kiện đổi nhóm xe.',
            },
          ]),
        ],
      },
    ],
    faq: [
      {
        question: 'Đoàn chưa chốt số người có nên đặt xe ngay không?',
        answer:
          'Có thể hỏi và giữ phương án theo thỏa thuận, nhưng phải thống nhất hạn chốt số khách, điều kiện đặt cọc và khả năng đổi xe. Không coi việc hỏi xe là đã bảo đảm có xe.',
      },
      {
        question: 'Thiết bị sự kiện có được tính như hành lý cá nhân không?',
        answer:
          'Cần báo riêng số kiện, kích thước và yêu cầu vận chuyển. Nhà xe phải xác nhận có thể bố trí hay cần phương án khác; không mặc định khoang hành lý nhận mọi loại thiết bị.',
      },
    ],
  },
  {
    slug: 'thue-xe-don-san-bay-tan-son-nhat-cho-doan',
    title: 'Thuê xe đón sân bay Tân Sơn Nhất cho đoàn: thông tin cần gửi',
    seoTitle: 'Đón đoàn tại Tân Sơn Nhất: cách đặt xe',
    topics: ['san-bay', 'doan', 'dat-xe'],
    description:
      'Checklist đặt xe đón đoàn ở Tân Sơn Nhất: mã chuyến bay, nhà ga, hành lý, điểm gặp và cách thống nhất thời gian chờ khi chuyến bay thay đổi.',
    category: 'Đưa đón sân bay',
    date: '2026-11-17',
    updatedAt: '2026-11-27',
    showFirstSectionBeforeImage: true,
    image: '/images/ford-transit-2.jpg',
    imageAlt: 'Xe Ford Transit minh họa cho phương án đón đoàn sân bay',
    sections: [
      {
        heading: 'Gửi mã chuyến bay và xác nhận đúng nhà ga',
        blocks: [
          paragraph(
            'Đặt xe đón đoàn tại Tân Sơn Nhất, hãy gửi mã chuyến bay, ngày đến, nhà ga, số khách, số kiện và số điện thoại của trưởng đoàn. Hẹn giờ gặp dựa trên lúc đoàn dự kiến đã nhận đủ hành lý và có thể ra xe.',
          ),
          paragraph([
            { text: 'Kiểm tra nhà ga trên thông báo mới nhất của hãng. Nếu cần tìm điểm gặp tại nhà ga, hỏi ' },
            {
              text: 'quầy thông tin trợ giúp của sân bay',
              href: 'https://acv.vn/vi/sgn/thong-tin-dich-vu-sgn/quay-thong-tin-tro-giup',
            },
            { text: ' rồi xác nhận với nhà xe vị trí phù hợp để đón đoàn.' },
          ]),
        ],
      },
      {
        heading: 'Checklist thông tin cho một lượt đón',
        blocks: [
          table(
            'Thông tin nên gửi trong một tin nhắn chung',
            ['Nhóm thông tin', 'Nội dung cần ghi', 'Mục đích'],
            [
              [
                'Chuyến bay',
                'Mã chuyến, ngày, giờ đến và nhà ga đã kiểm tra.',
                'Hẹn đúng lượt và đúng nơi đón.',
              ],
              [
                'Khách',
                'Tổng số người lớn, trẻ em và nhóm đi cùng.',
                'Tư vấn số ghế và cách tập trung đoàn.',
              ],
              [
                'Hành lý',
                'Vali ký gửi, túi xách, xe đẩy, kiện lớn kèm kích thước.',
                'Kiểm tra khoang đồ trên xe thực tế.',
              ],
              [
                'Liên hệ',
                'Một người chính, số điện thoại dùng được sau khi hạ cánh và người dự phòng.',
                'Tránh tài xế phải liên hệ nhiều nhóm cùng lúc.',
              ],
              [
                'Điểm trả',
                'Tên khách sạn/địa chỉ, các điểm trả và thứ tự mong muốn.',
                'Lập đúng hành trình và báo giá đủ các lượt.',
              ],
            ],
          ),
          paragraph(
            'Nếu đoàn đến bằng nhiều chuyến, lập bảng riêng cho từng chuyến và số khách của chuyến đó. Không gom thành một giờ đón chung khi thời gian đến khác nhau mà chưa tính phương án chờ hoặc chia lượt. Với đoàn có thiết bị, báo kiện lớn tách khỏi số vali thông thường.',
          ),
        ],
      },
      {
        heading: 'Hẹn điểm gặp và xử lý khi chuyến bay đổi giờ',
        blocks: [
          paragraph(
            'Thống nhất ai chủ động gọi, khi nào gọi và vị trí gặp theo hướng dẫn hiện hành tại nhà ga. Đừng mặc định xe có thể chờ lâu ở làn đón hoặc vào mọi khu vực. Trưởng đoàn nên gom khách, kiểm đủ đồ rồi báo tình trạng sẵn sàng; nếu có người còn chờ hành lý, cập nhật để hai bên phối hợp.',
          ),
          checklist([
            'Hỏi thời gian chờ trong báo giá bắt đầu tính từ mốc nào và đã gồm bao lâu.',
            'Hỏi cách xử lý khi chuyến bay trễ, đổi nhà ga hoặc khách ra muộn.',
            'Xác nhận khoản đỗ/chờ và điều kiện điều chỉnh nếu phải chia thêm lượt.',
            'Lưu số liên hệ và gửi thay đổi cho đúng đầu mối, không tự hiểu nhà xe luôn theo dõi mọi cập nhật.',
          ]),
          paragraph(
            'Nếu chuyến bay đổi giờ hoặc đổi ga, trưởng đoàn báo mã chuyến và thông tin mới cho đầu mối nhà xe. Hỏi lại giờ xe có thể đến, điểm gặp và mốc tính thời gian chờ trước khi thông báo cho cả đoàn.',
          ),
        ],
      },
      {
        heading: 'Chọn xe và kiểm tra báo giá đón sân bay',
        blocks: [
          paragraph('Ví dụ, hai nhóm khách đến cách nhau một khoảng thời gian và mang nhiều vali cứng. Ghi số người và kiện theo từng chuyến bay, rồi hỏi phương án chờ đón chung và hai lượt đón. So luôn giờ đoàn cần đến khách sạn và mức phí chờ nếu nhóm sau ra muộn.'),
          paragraph([
            { text: 'Nếu khó hình dung sức chứa, dùng ' },
            { text: 'bảng so xe 7 và 16 chỗ cho nhóm nhiều vali', href: '/kinh-nghiem/chon-xe-7-hay-16-cho-khi-nhieu-hanh-ly' },
            { text: ' để chuẩn bị kích thước kiện lớn trước khi hỏi.' },
          ]),
          paragraph([
            { text: 'Tham khảo ' },
            { text: 'xe 7 chỗ', href: '/thue-xe/7-cho' },
            { text: ' cho nhóm nhỏ hoặc ' },
            { text: 'xe 16 chỗ', href: '/thue-xe/16-cho' },
            {
              text: ' cho đoàn; cần xác nhận theo số người và hành lý thực tế. Bạn cũng có thể xem phạm vi dịch vụ tại ',
            },
            { text: 'trang dịch vụ thuê xe', href: '/dich-vu' },
            { text: '.' },
          ]),
          paragraph(
            'Trước khi xác nhận, đối chiếu báo giá có đủ số điểm trả, phí đỗ/chờ và nhu cầu hỗ trợ đã trao đổi. Chỉ chọn phương án sau khi nhà xe xác nhận chiếc xe phù hợp; tên nhóm xe không bảo đảm đủ khoang chứa cho mọi đoàn có cùng số khách.',
          ),
          paragraph([
            { text: 'Nếu cần hỏi xe qua ' },
            { text: 'Zalo', href: contact.zalo },
            { text: ', gửi thêm địa chỉ trả khách và kích thước kiện lớn. Với đoàn đến bằng nhiều chuyến, ghi số khách và số kiện theo từng chuyến.' },
          ]),
        ],
      },
    ],
    faq: [
      {
        question: 'Cứ gửi giờ hạ cánh là đủ để hẹn xe chưa?',
        answer:
          'Chưa đủ. Cần mã chuyến, ngày đến, nhà ga, hành lý và đầu mối liên hệ; đồng thời thống nhất khoảng thời gian ra ngoài và điểm gặp.',
      },
      {
        question: 'Chuyến bay trễ có được miễn tiền chờ không?',
        answer:
          'Điều này phụ thuộc báo giá và điều kiện hai bên đã xác nhận. Hãy hỏi mốc tính chờ, phần đã gồm và cách điều chỉnh trước khi đặt xe.',
      },
    ],
  },
  {
    slug: 'thue-xe-cuoi-mercedes-hay-camry',
    title: 'Thuê xe cưới Mercedes hay Camry: chọn theo lịch đón dâu',
    seoTitle: 'Xe cưới Mercedes hay Camry: cách chọn',
    topics: ['xe-cuoi', 'chon-xe'],
    description:
      'So sánh nhu cầu thuê xe cưới Mercedes và Camry theo lịch đón dâu, đồ lễ, trang trí và điểm dừng. Checklist xác nhận xe trước ngày cưới.',
    category: 'Chọn xe cưới',
    date: '2026-11-17',
    updatedAt: '2026-11-27',
    showFirstSectionBeforeImage: true,
    image: '/images/mercedes.jpg',
    imageAlt: 'Ảnh minh họa dòng Mercedes-Benz trong danh mục xe tham khảo',
    imageCaption: 'Ảnh minh họa dòng xe; đời xe, màu xe và trang bị cần được xác nhận khi đặt.',
    sections: [
      {
        heading: 'Chọn dòng xe sau khi chốt vai trò trong đoàn cưới',
        blocks: [
          paragraph(
            'Nếu màu xe hoặc diện mạo là yêu cầu của lễ đón dâu, xin ảnh chiếc Mercedes E-Class và Camry dự kiến trước khi chọn. Nếu ưu tiên việc lên xuống với váy cưới hoặc cần mang đồ lễ, chọn sau khi đã kiểm tra cửa, ghế và khoang hành lý của từng xe.',
          ),
          paragraph(
            'Xe hoa chở cô dâu chú rể và xe đưa đón người thân là hai nhu cầu nên tách riêng. Không để lịch của xe hoa phải kiêm nhiều lượt gom khách nếu làm ảnh hưởng giờ làm lễ. Khi hỏi xe, gửi số người ở từng chặng thay vì chỉ ghi “thuê xe cưới một ngày”.',
          ),
        ],
      },
      {
        heading: 'So sánh bằng những điều có thể kiểm tra',
        blocks: [
          table(
            'Bảng câu hỏi dùng khi so sánh hai phương án xe cưới',
            ['Tiêu chí', 'Mercedes-Benz E-Class', 'Toyota Camry'],
            [
              [
                'Hình thức',
                'Yêu cầu ảnh xe dự kiến; xác nhận đời, màu và kiểu nội thất.',
                'Cũng cần ảnh xe dự kiến; không dựa riêng vào ảnh minh họa.',
              ],
              [
                'Chỗ ngồi và đồ',
                'Kiểm tra lên xuống khi mặc trang phục cưới và vị trí đồ lễ.',
                'Kiểm tra cùng nhu cầu để so sánh công bằng.',
              ],
              [
                'Trang trí',
                'Hỏi vật liệu, vị trí gắn và ai thực hiện/tháo trang trí.',
                'Xác nhận cách gắn phù hợp với chiếc xe được phục vụ.',
              ],
              [
                'Phạm vi thuê',
                'Ghi số giờ, tuyến đón dâu, điểm chụp ảnh và nơi kết thúc.',
                'Dùng cùng lịch, thời gian chờ và các điểm dừng để hỏi giá.',
              ],
              [
                'Xác nhận',
                'Hỏi điều kiện thay xe nếu xe dự kiến không thể phục vụ.',
                'Cũng thống nhất phương án thay thế và cách thông báo.',
              ],
            ],
          ),
          paragraph(
            'Ví dụ, nếu một xe có màu bạn muốn nhưng đồ lễ không xếp vừa, hãy hỏi có thể chuyển đồ sang xe người thân hay cần đổi xe hoa. Trước khi đặt cọc, ghi rõ màu xe và phương án thay xe nếu đó là yêu cầu của buổi lễ.',
          ),
        ],
      },
      {
        heading: 'Dùng cùng một lịch để hỏi giá hai xe',
        blocks: [
          paragraph('Gửi cùng giờ cần xe có mặt để lắp hoa, ghim nhà trai, nhà gái và nhà hàng khi hỏi hai dòng xe. Nếu một phương án phải đổi chỗ lắp hoa hoặc đổi điểm đỗ, hỏi phần thời gian và chi phí tăng trước khi chọn.'),
          paragraph(
            'Gửi cùng giờ lắp hoa, ghim đón dâu, các điểm dừng và giờ kết thúc cho cả hai phương án. Nếu hẻm hẹp, hỏi chỗ dừng cụ thể của từng xe để gia đình biết phải đi bộ bao xa khi mặc trang phục cưới hoặc mang đồ lễ.',
          ),
        ],
      },
      {
        heading: 'Trang trí và báo giá cần xác nhận riêng',
        blocks: [
          paragraph(
            'Hỏi rõ giá xe đã gồm hoa trang trí chưa, đơn vị nào làm, ai duyệt mẫu và ai chịu trách nhiệm tháo sau chuyến. Nếu dùng đơn vị hoa riêng, gửi vật liệu và vị trí gắn để nhà xe xác nhận phù hợp. Không mặc định mọi kiểu băng dính, phụ kiện hoặc đồ trang trí đều có thể gắn lên xe.',
          ),
          paragraph(
            'Đối chiếu số giờ phục vụ, điểm dừng, thời gian chờ, chi phí cầu đường/bãi đỗ và cách xử lý khi thêm chặng. Nếu cần xe cho người thân, hỏi báo giá riêng theo số người và các lượt đưa đón. Không suy ra xe đi kèm miễn phí từ việc đã thuê xe hoa.',
          ),
          paragraph([
            { text: 'Tham khảo ' },
            { text: 'dịch vụ xe cưới', href: '/xe-cuoi' },
            { text: ', ' },
            { text: 'Mercedes-Benz E-Class', href: '/doi-xe/mercedes-benz-e-class' },
            { text: ' và ' },
            { text: 'Toyota Camry', href: '/doi-xe/toyota-camry' },
            { text: '. Bài ' },
            { text: 'chuẩn bị thuê xe cưới', href: '/kinh-nghiem/chuan-bi-thue-xe-cuoi' },
            { text: ' giúp rà lại lịch và các thông tin trước khi trao đổi.' },
          ]),
          paragraph([
            { text: 'Gửi ngày cưới, lịch đón dâu và yêu cầu về màu xe hoặc đồ lễ qua ' },
            { text: 'Zalo', href: contact.zalo },
            { text: ' để hỏi xe còn trống và báo giá theo cùng lịch.' },
          ]),
        ],
      },
    ],
    faq: [
      {
        question: 'Có chắc được đúng màu xe như hình trên website không?',
        answer:
          'Cần nhà xe xác nhận màu và chiếc xe dự kiến theo ngày cưới. Ảnh minh họa trên website không thay thế xác nhận đặt xe.',
      },
      {
        question: 'Nên hỏi giá theo giờ hay theo ngày?',
        answer:
          'Gửi đầy đủ giờ bắt đầu/kết thúc và các điểm dừng, rồi yêu cầu báo phạm vi cụ thể. Tên gói theo giờ hay ngày cần đi kèm điều kiện chờ, thêm giờ và thêm chặng.',
      },
    ],
  },
  {
    slug: 'di-ho-tram-2-ngay-1-dem-bang-xe-rieng',
    title: 'Đi Hồ Tràm 2 ngày 1 đêm bằng xe riêng: chốt lịch đón và xe chờ',
    seoTitle: 'Hồ Tràm 2 ngày 1 đêm: chốt lịch xe',
    topics: ['ho-tram', 'vung-tau', 'lich-trinh', 'gia-dinh'],
    description:
      'Lên lịch xe đi Hồ Tràm 2 ngày 1 đêm theo giờ nhận trả phòng, nhu cầu ra ngoài resort và phương án xe ở lại hoặc đón về hôm sau.',
    category: 'Lịch nghỉ Hồ Tràm',
    date: '2026-11-17',
    updatedAt: '2026-11-27',
    image: '/images/kia-carnival-1.jpg',
    imageAlt:
      'Xe Kia Carnival trong bộ ảnh doanh nghiệp cung cấp để tham khảo chuyến nghỉ gia đình',
    imageCaption: 'Ảnh minh họa mẫu xe gia đình.',
    sections: [
      {
        heading: 'Chốt cổng đón trả và giờ phòng trước khi hẹn xe',
        blocks: [
          paragraph(
            'Hỏi resort xe được trả khách ở cổng hay sảnh, rồi gửi ghim đó cùng giờ nhận và trả phòng cho nhà xe. Hẹn giờ đón về sau khi cả đoàn trả phòng và gom đồ, đồng thời xác nhận chỗ xe có thể dừng hoặc chờ.',
          ),
          paragraph(
            'Gửi các điểm đón ở TP.HCM theo thứ tự dự kiến. Nếu đến trước giờ nhận phòng, hỏi resort nơi gửi đồ hoặc nghỉ tạm và thỏa thuận giờ xe phục vụ với nhà xe.',
          ),
        ],
      },
      {
        heading: 'Khung lịch hai ngày để điều chỉnh theo gia đình',
        blocks: [
          table(
            'Lịch gợi ý cho chuyến nghỉ dưỡng, không phải chương trình đã đặt',
            ['Mốc', 'Gợi ý', 'Thông tin xe cần biết'],
            [
              [
                'Ngày 1: khởi hành',
                'Tập trung, kiểm hành lý, di chuyển và dừng ăn nếu đã thống nhất.',
                'Thứ tự điểm đón và địa chỉ điểm ăn; không thêm điểm sát giờ mà chưa báo.',
              ],
              [
                'Ngày 1: nhận phòng',
                'Xuống đồ tại cổng/sảnh được cơ sở hướng dẫn rồi nhận phòng.',
                'Chỗ trả khách và việc xe còn phục vụ sau khi đoàn vào resort hay không.',
              ],
              [
                'Ngày 1: buổi tối',
                'Nghỉ tại resort hoặc đi ăn ngoài theo lịch riêng.',
                'Nếu ra ngoài, cần giờ đón, nhà hàng và giờ quay lại.',
              ],
              [
                'Ngày 2: trả phòng',
                'Kiểm đồ, làm thủ tục và tập kết trước giờ xe đón.',
                'Giờ có mặt, lượng hành lý và nhu cầu ghé thêm trước khi về.',
              ],
            ],
          ),
          paragraph(
            'Nếu mục tiêu là nghỉ dưỡng, giữ lịch đơn giản sẽ dễ phối hợp hơn lịch ghé nhiều nơi. Nếu muốn kết hợp Hồ Cốc hoặc Long Hải, gửi luôn thứ tự điểm và thời gian dừng để nhà xe kiểm tra. Chương trình ghép điểm cần báo riêng, không tự tính bằng giá đưa đến resort.',
          ),
        ],
      },
      {
        heading: 'Hẹn điểm đón về và chỗ xe chờ',
        blocks: [
          paragraph('Nếu trả phòng sớm rồi dùng tiện ích ở resort, hỏi điểm gửi đồ và cổng đón sau cùng. Báo nhà xe giờ cả nhóm có thể tập trung đủ thay vì chỉ gửi giờ trả phòng.'),
          paragraph(
            'Ngày đi, thống nhất cổng hoặc sảnh trả khách và nơi xe chờ nếu đoàn có lượt đi ăn tối. Ngày về, trả phòng → gom đồ tại nơi resort hướng dẫn → ra ghim đón đã hẹn → kiểm hành lý trước khi xe chạy.',
          ),
          paragraph(
            'Nếu xe đoàn phải dừng ngoài cổng, dành thêm thời gian để đưa người và đồ từ sảnh ra điểm đón. Khi giờ trả phòng thay đổi, đầu mối của đoàn báo lại để nhà xe xác nhận giờ đón mới và điều kiện chờ.',
          ),
          paragraph([
            { text: 'Có thể đọc ' },
            {
              text: 'so sánh xe ở lại và đưa đón hai lượt',
              href: '/kinh-nghiem/di-vung-tau-xe-o-lai-hay-dua-don-hai-luot',
            },
            {
              text: ' để hiểu cách tách phạm vi, rồi hỏi báo giá riêng cho đúng resort Hồ Tràm. Ví dụ và giá tuyến Vũng Tàu không tự chuyển thành báo giá Hồ Tràm.',
            },
          ]),
        ],
      },
      {
        heading: 'Kiểm tra báo giá xe đi resort',
        blocks: [
          paragraph([
            { text: 'Đối chiếu đúng dòng Hồ Tràm trong ' },
            { text: 'bảng giá', href: '/bang-gia' },
            { text: ' hoặc ' },
            { text: 'trang các điểm tuyến biển', href: '/tuyen-xe/vung-tau' },
            {
              text: '. Thời lượng bảng giá có thể khác chuyến nghỉ qua đêm của bạn, vì vậy cần báo lại đủ hai ngày và các lượt dùng xe.',
            },
          ]),
          paragraph(
            'Khi nhận xác nhận đặt xe, kiểm tra số ghế cho khách, khoang đồ, nơi dừng đón tại resort và điều kiện đặt cọc. Lưu cùng một bản lịch cho cả gia đình và người liên hệ nhà xe; thay đổi nên được thống nhất trước khi khởi hành.',
          ),
        ],
      },
    ],
    faq: [
      {
        question: 'Ở resort suốt chuyến có cần thuê xe chờ qua đêm không?',
        answer:
          'Hãy hỏi cả phương án chỉ đưa đi/đón về và xe ở lại, dựa trên lịch gia đình. So sánh tổng chi phí và điều kiện giờ đón lại trước khi chọn.',
      },
      {
        question: 'Trả phòng xong mới quyết định giờ về có được không?',
        answer:
          'Cần thỏa thuận khung giờ và điều kiện chờ trước. Nếu muốn linh hoạt, nêu rõ khi hỏi giá thay vì mặc định xe rảnh cả ngày.',
      },
    ],
  },
  {
    slug: 'thue-xe-di-tinh-cung-nguoi-lon-tuoi',
    title: 'Thuê xe đi tỉnh cùng người lớn tuổi: bố trí lịch nghỉ và hành lý',
    seoTitle: 'Đi tỉnh cùng người lớn tuổi: chuẩn bị xe',
    topics: ['gia-dinh', 'chon-xe', 'lich-trinh'],
    description:
      'Chuẩn bị xe đi tỉnh cùng người lớn tuổi: trao đổi nhu cầu lên xuống, chọn điểm nghỉ, bố trí hành lý và thống nhất lịch đón trả cho gia đình.',
    category: 'Chuyến đi gia đình',
    date: '2026-11-17',
    updatedAt: '2026-11-27',
    showFirstSectionBeforeImage: true,
    image: '/images/kia-carnival-2.jpg',
    imageAlt: 'Khoang hành khách Kia Carnival với ghế rời ở hàng giữa',
    imageCaption: 'Vị trí ghế và lối đi có thể khác theo xe. Hỏi trước về bậc lên xuống và chỗ xếp đồ hỗ trợ.',
    sections: [
      {
        heading: 'Trao đổi nhu cầu sinh hoạt trước khi chọn xe',
        blocks: [
          paragraph(
            'Hỏi người thân cần hỗ trợ gì khi lên xuống xe và muốn nghỉ ở đâu trước khi chốt lịch. Gửi nhà xe kích thước đồ hỗ trợ khi gấp, rồi xác nhận bậc lên xuống, vị trí ghế và chỗ xếp đồ trên chiếc xe dự kiến.',
          ),
        ],
      },
      {
        heading: 'Chọn xe dựa trên thao tác lên xuống và đồ mang theo',
        blocks: [
          checklist([
            'Báo số người đi, người đi cùng hỗ trợ và nhu cầu chỗ ngồi của cả đoàn.',
            'Nếu có gậy, khung hỗ trợ đi lại hoặc xe lăn gấp, gửi kích thước khi xếp cùng ảnh minh họa.',
            'Hỏi bậc lên xuống, cửa xe và vị trí ngồi trên mẫu xe dự kiến; nếu cần, đề nghị xem ảnh hoặc kiểm tra trước.',
            'Tách túi đồ dùng giữa đường khỏi vali để không phải dỡ nhiều kiện ở mỗi điểm nghỉ.',
          ]),
          paragraph(
            'Không nên mặc định mọi xe 7 hoặc 16 chỗ có cùng cách lên xuống, ghế ngồi hoặc không gian để đồ. Nếu cần giữ nguyên vị trí xe lăn khi di chuyển hoặc thiết bị cố định chuyên dụng, phải hỏi khả năng đáp ứng riêng; không suy ra từ việc xe còn ghế trống.',
          ),
          paragraph([
            { text: 'Gia đình có thể tham khảo ' },
            { text: 'nhóm xe 7 chỗ', href: '/thue-xe/7-cho' },
            { text: ' và ' },
            { text: 'nhóm xe 16 chỗ', href: '/thue-xe/16-cho' },
            { text: ', sau đó xác nhận trên chiếc xe được bố trí. Bài ' },
            {
              text: 'chọn xe theo số người và hành lý',
              href: '/kinh-nghiem/chon-xe-du-lich-theo-so-nguoi',
            },
            { text: ' giúp lập danh sách đồ chung.' },
          ]),
        ],
      },
      {
        heading: 'Đặt các điểm nghỉ vào lịch từ đầu',
        blocks: [
          paragraph('Khi người lớn tuổi cần điểm nghỉ dễ tiếp cận, hỏi trước khoảng đi bộ từ chỗ xe dừng đến cửa và vị trí có thể lên xuống thuận tiện. Nếu mang khung gấp, gửi số đo và ghi rõ cần lấy ra ở những điểm nào.'),
          table(
            'Checklist chọn điểm dừng cho chuyến gia đình',
            ['Nhu cầu', 'Thông tin cần hỏi', 'Cách đưa vào lịch'],
            [
              [
                'Lên xuống thuận tiện',
                'Nơi xe có thể dừng, mặt bằng và khoảng đi bộ tới khu nghỉ.',
                'Hẹn vị trí cụ thể thay vì chỉ ghi tên khu vực.',
              ],
              [
                'Ăn uống',
                'Giờ phục vụ, khả năng tiếp đoàn và yêu cầu riêng của gia đình.',
                'Đặt khoảng thời gian nghỉ thực tế, không nối sát một điểm tham quan.',
              ],
              [
                'Nghỉ giữa đường',
                'Vị trí nghỉ phù hợp trên tuyến và nơi có thể đỗ xe.',
                'Trao đổi điểm dự kiến và cách báo khi cần dừng thêm.',
              ],
              [
                'Đến nơi lưu trú',
                'Cổng trả khách, chỗ dỡ đồ và hỗ trợ từ cơ sở lưu trú.',
                'Báo trước giờ đến dự kiến, giữ đầu mối liên hệ.',
              ],
            ],
          ),
          paragraph(
            'Ví dụ, gia đình có người mang khung tập đi gấp. Buổi sáng, hẹn xe ở chỗ có thể dừng gần nhà và để khung ở vị trí dễ lấy. Giữa đường, chọn điểm nghỉ có lối đi phù hợp sau khi hỏi người thân. Khi tới khách sạn, hẹn trả tại cổng gần sảnh để lấy khung trước khi dỡ vali.',
          ),
        ],
      },
      {
        heading: 'Phân công người liên hệ và kiểm đồ',
        blocks: [
          paragraph(
            'Chọn một người thống nhất lịch với tài xế, một người kiểm đồ dùng chung nếu cần và một người hỗ trợ người thân lên xuống. Trước khi xe rời mỗi điểm, kiểm đủ người và các túi đã lấy ra. Những đồ cần dùng trong chuyến nên được sắp gọn, không cản lối đi hoặc đặt ở nơi dễ rơi khi xe di chuyển.',
          ),
          paragraph(
            'Giờ đón nên tính cả thời gian chuẩn bị và đưa hành lý ra điểm tập kết. Nếu nhà trong hẻm hoặc nơi xe không thể dừng lâu, trao đổi điểm gặp phù hợp từ trước; không đợi tới giờ xe đến mới quyết định. Khi tới khách sạn, nên có người làm thủ tục trong khi người còn lại cùng người thân nghỉ ở nơi thuận tiện.',
          ),
        ],
      },
      {
        heading: 'Xác nhận nhu cầu hỗ trợ với nhà xe',
        blocks: [
          paragraph([
            { text: 'Gửi điểm đón, điểm nghỉ dự kiến, nhu cầu lên xuống và kích thước đồ hỗ trợ qua ' },
            { text: 'Zalo', href: contact.zalo },
            { text: '. Nếu cần thiết bị cố định hoặc phương tiện chuyên dụng, trao đổi riêng trước khi đặt.' },
          ]),
        ],
      },
    ],
    faq: [
      {
        question: 'Xe càng lớn thì người lớn tuổi lên xuống càng dễ phải không?',
        answer:
          'Không thể kết luận chỉ từ số chỗ. Cần kiểm tra cửa, bậc lên xuống, vị trí ghế và nhu cầu thực tế của người đi trên mẫu xe dự kiến.',
      },
      {
        question: 'Có thể mang xe lăn gấp trên xe du lịch không?',
        answer:
          'Cần gửi kích thước khi gấp và tổng hành lý để nhà xe kiểm tra khoang chứa. Nếu cần thiết bị cố định hoặc phương tiện hỗ trợ chuyên dụng, phải hỏi khả năng đáp ứng riêng.',
      },
    ],
  },
];
