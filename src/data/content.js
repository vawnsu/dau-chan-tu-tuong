export const sources = [
  {
    id: 'src-portrait',
    title: 'Chân dung Hồ Chí Minh, khoảng năm 1946',
    publisher: 'Wikimedia Commons · Tác giả không rõ',
    type: 'Ảnh tư liệu',
    url: 'https://commons.wikimedia.org/wiki/File:Ho_Chi_Minh_-_1946_Portrait.jpg',
    stationIds: [5],
    note: 'Ảnh chân dung dùng tại trang chủ; trang nguồn ghi nhận tác phẩm thuộc phạm vi công cộng.'
  },
  {
    id: 'src-bio',
    title: 'Tiểu sử Chủ tịch Hồ Chí Minh (1890–1969)',
    publisher: 'Chuyên trang Hồ Chí Minh',
    type: 'Biên niên',
    url: 'https://hochiminh.vn/cuoc-doi-su-nghiep/tieu-su-ho-chi-minh/tieu-su-chu-tich-ho-chi-minh-1890-1969-9?categoryId=102000008',
    stationIds: [1, 2, 3, 4, 5],
    note: 'Tư liệu khái quát các mốc chính trong cuộc đời và sự nghiệp.'
  },
  {
    id: 'src-journey',
    title: 'Chuyến đi lịch sử',
    publisher: 'Bảo tàng Hồ Chí Minh',
    type: 'Chuyên khảo',
    url: 'https://baotanghochiminh.vn/chuyen-di-lich-su.htm',
    stationIds: [2],
    note: 'Tư liệu về ngày 5/6/1911 và hành trình tìm đường cứu nước.'
  },
  {
    id: 'src-ship',
    title: 'Hành trình của con tàu Amiral Latouche-Tréville',
    publisher: 'Bảo tàng Hồ Chí Minh',
    type: 'Tư liệu bảo tàng',
    url: 'https://baotanghochiminh.vn/hanh-trinh-cua-con-tau-amiral-latouche-treville-dua-nguyen-tat-thanh-ra-di-tim-duong-cuu-nuoc.htm',
    stationIds: [2],
    note: 'Thông tin về con tàu và điểm khởi đầu của hành trình năm 1911.'
  },
  {
    id: 'src-lenin',
    title: 'Lịch sử biên niên Đảng Cộng sản Việt Nam – Tập 1',
    publisher: 'Tư liệu – Văn kiện Đảng',
    type: 'Sách điện tử',
    url: 'https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/book/lich-su-dang/lich-su-bien-nien-dang-cong-san-viet-nam-tap-1-18',
    stationIds: [2, 3],
    note: 'Đối chiếu các mốc 1920–1930, gồm việc tiếp cận Luận cương của Lênin.'
  },
  {
    id: 'src-archive',
    title: 'Tư liệu ảnh Chủ tịch Hồ Chí Minh từ năm 1930–1945',
    publisher: 'Chuyên trang Hồ Chí Minh',
    type: 'Bộ ảnh tư liệu',
    url: 'https://hochiminh.vn/tu-lieu-anh/tu-lieu-anh-chu-tich-ho-chi-minh-tu-nam-1930-1945.html',
    stationIds: [4],
    note: 'Danh mục ảnh, địa điểm và hiện vật giai đoạn 1930–1945.'
  },
  {
    id: 'src-book',
    title: 'Hồ Chí Minh – Tiểu sử',
    publisher: 'Bảo tàng Hồ Chí Minh, NXB Chính trị Quốc gia (2008)',
    type: 'Sách nghiên cứu',
    url: 'https://hochiminh.vn/book/cuoc-doi-su-nghiep/bien-nien-tieu-su-ho-chi-minh/ho-chi-minh-tieu-su-bao-tang-ho-chi-minh-nxb-chinh-tri-quoc-gia-ha-noi-nam-2008-20',
    stationIds: [1, 2, 3, 4, 5],
    note: 'Nguồn tổng hợp để kiểm tra trình tự sự kiện và bối cảnh.'
  },
  {
    id: 'src-works',
    title: 'Hồ Chí Minh tuyển tập (1919–1945), Tập 1',
    publisher: 'NXB Chính trị Quốc gia (2002)',
    type: 'Tác phẩm',
    url: 'https://hochiminh.vn/book/tac-pham-cua-ho-chi-minh/ho-chi-minh-tuyen-tap/ho-chi-minh-tuyen-tap-1919-1945-tap-1-nxb-chinh-tri-quoc-gia-2002-392?categoryId=102000010',
    stationIds: [2, 3, 4],
    note: 'Tập hợp văn bản gốc theo giai đoạn; dùng để phân biệt tác phẩm và phần diễn giải.'
  },
  {
    id: 'src-chronology',
    title: 'Biên niên tiểu sử Hồ Chí Minh',
    publisher: 'Chuyên trang Hồ Chí Minh',
    type: 'Bộ biên niên',
    url: 'https://hochiminh.vn/cuoc-doi-su-nghiep/bien-nien-tieu-su-ho-chi-minh',
    stationIds: [1, 2, 3, 4, 5],
    note: 'Tra cứu chi tiết theo từng giai đoạn.'
  }
]

export const stations = [
  {
    id: 1,
    period: '1890–1911',
    title: 'Nguồn cội yêu nước',
    short: 'Từ quê hương, gia đình và thực tiễn mất nước hình thành lòng yêu nước cùng chí hướng tìm một con đường mới.',
    symbol: 'lotus',
    kicker: 'Khởi nguồn',
    context: 'Nguyễn Sinh Cung sinh ngày 19/5/1890 tại quê ngoại Hoàng Trù, lớn lên trong không gian văn hóa xứ Nghệ và một gia đình nhà nho yêu nước. Những biến động xã hội đầu thế kỷ XX, đời sống của nhân dân và sự bế tắc của các con đường cứu nước đương thời tạo nên câu hỏi lớn: phải làm gì để giành lại độc lập?',
    thought: 'Ở giai đoạn này chưa thể nói hệ thống tư tưởng Hồ Chí Minh đã hoàn chỉnh. Điều nổi bật là nền tảng yêu nước, thương dân, ý thức về độc lập và nhu cầu khảo nghiệm một con đường cứu nước khác với lối đi cũ.',
    significance: 'Nguồn cội văn hóa dân tộc và trải nghiệm thực tiễn là điểm xuất phát. Về phương pháp, điều đáng chú ý là tinh thần quan sát, so sánh và không chấp nhận sao chép máy móc.',
    modern: 'Với sinh viên, bài học khởi đầu là hiểu nơi mình đến từ, nhận diện vấn đề thật của cộng đồng và giữ tinh thần học hỏi cởi mở trước khi lựa chọn cách giải quyết.',
    sourceIds: ['src-bio', 'src-book', 'src-chronology'],
    events: [
      { date: '19/5/1890', title: 'Sinh tại Hoàng Trù', location: 'Nam Đàn, Nghệ An', summary: 'Nguyễn Sinh Cung ra đời trong một gia đình nhà nho yêu nước, tại vùng đất có truyền thống văn hóa và đấu tranh.', thought: 'Môi trường gia đình, quê hương là một trong các nguồn ảnh hưởng ban đầu.' },
      { date: '1901', title: 'Về sống tại làng Sen', location: 'Kim Liên, Nam Đàn', summary: 'Cùng gia đình về quê nội; từ đây tiếp tục học chữ Hán và tiếp xúc sâu hơn với đời sống người dân.', thought: 'Trải nghiệm xã hội góp phần nuôi dưỡng tình cảm gắn bó với nhân dân.' },
      { date: '1906–1909', title: 'Học tập ở Huế', location: 'Huế', summary: 'Theo gia đình vào Huế, học tại Trường Quốc học trong bối cảnh phong trào chống thuế Trung Kỳ và những biến chuyển xã hội mạnh mẽ.', thought: 'Thực tiễn thuộc địa làm rõ hơn mâu thuẫn giữa khát vọng độc lập và hiện trạng đất nước.' },
      { date: '1910–1911', title: 'Dạy học và đi vào Nam', location: 'Phan Thiết – Sài Gòn', summary: 'Dạy tại Trường Dục Thanh rồi vào Sài Gòn, chuẩn bị cho quyết định đi ra nước ngoài tìm đường cứu nước.', thought: 'Chuyển từ nhận thức vấn đề sang chủ động tìm kiếm con đường mới.' }
    ]
  },
  {
    id: 2,
    period: '1911–1920',
    title: 'Hành trình tìm đường cứu nước',
    short: 'Đi qua nhiều châu lục, khảo sát thực tiễn và từng bước đến với con đường giải phóng dân tộc theo cách mạng vô sản.',
    symbol: 'ship',
    kicker: 'Ra thế giới',
    context: 'Ngày 5/6/1911, từ Bến Nhà Rồng, Nguyễn Tất Thành rời Tổ quốc trên tàu Amiral Latouche-Tréville. Những năm lao động và hoạt động ở nước ngoài đem lại một trường học thực tiễn rộng lớn: Người quan sát cả đời sống của người lao động lẫn cơ chế của chủ nghĩa thực dân.',
    thought: 'Từ chủ nghĩa yêu nước, Nguyễn Ái Quốc tiếp cận chủ nghĩa Mác – Lênin. Việc đọc Luận cương về vấn đề dân tộc và thuộc địa năm 1920 giúp xác định một hướng đi: giải phóng dân tộc phải gắn với lực lượng quần chúng bị áp bức và phong trào cách mạng thế giới.',
    significance: 'Bước chuyển này không phải một sự thay thế lòng yêu nước, mà là tìm thấy cơ sở lý luận và phương pháp tổ chức để hiện thực hóa mục tiêu độc lập.',
    modern: 'Bài học phương pháp là học từ nhiều môi trường, kiểm chứng lý thuyết bằng thực tiễn và chọn công cụ dựa trên vấn đề của chính mình.',
    sourceIds: ['src-journey', 'src-ship', 'src-lenin', 'src-bio'],
    events: [
      { date: '5/6/1911', title: 'Rời Bến Nhà Rồng', location: 'Sài Gòn', summary: 'Với tên Văn Ba, Nguyễn Tất Thành lên tàu Amiral Latouche-Tréville, bắt đầu hành trình tìm đường cứu nước.', thought: 'Chủ động đi ra thế giới để hiểu thế giới và tìm lời giải cho Việt Nam.' },
      { date: '1911–1917', title: 'Khảo nghiệm thực tiễn quốc tế', location: 'Nhiều nước châu Phi, châu Mỹ, châu Âu', summary: 'Lao động, quan sát xã hội và nhận ra người lao động ở các thuộc địa cùng chịu nhiều hình thức áp bức.', thought: 'Cách nhìn về tự do mở rộng từ câu chuyện dân tộc sang quyền của con người bị áp bức.' },
      { date: '18/6/1919', title: 'Yêu sách của nhân dân An Nam', location: 'Paris, Pháp', summary: 'Thay mặt nhóm người Việt Nam yêu nước, Nguyễn Ái Quốc gửi bản yêu sách tới Hội nghị Versailles, yêu cầu các quyền tự do và bình đẳng tối thiểu.', thought: 'Đưa vấn đề quyền dân tộc ra diễn đàn quốc tế bằng ngôn ngữ pháp lý – chính trị.' },
      { date: '7–12/1920', title: 'Bước ngoặt nhận thức', location: 'Paris – Tours, Pháp', summary: 'Đọc Luận cương của Lênin và cuối năm tham gia Đại hội Tours, tán thành Quốc tế Cộng sản, tham gia sáng lập Đảng Cộng sản Pháp.', thought: 'Xác định con đường cách mạng vô sản như một hướng giải phóng dân tộc.' }
    ]
  },
  {
    id: 3,
    period: '1921–1930',
    title: 'Định hình tư tưởng cách mạng Việt Nam',
    short: 'Truyền bá lý luận, chuẩn bị tổ chức và hình thành những luận điểm căn bản về cách mạng giải phóng dân tộc.',
    symbol: 'book',
    kicker: 'Gieo hạt lý luận',
    context: 'Trong thập niên 1920, Nguyễn Ái Quốc vừa hoạt động quốc tế vừa hướng trọng tâm về Việt Nam. Báo chí, tác phẩm lý luận và công tác đào tạo cán bộ trở thành phương tiện kết nối lý luận cách mạng với phong trào trong nước.',
    thought: 'Các nội dung dần định hình gồm: giải phóng dân tộc là nhiệm vụ trước hết; cách mạng là sự nghiệp của quần chúng; cần có một đảng cách mạng có lý luận và tổ chức; phải xây dựng liên minh công – nông và đoàn kết rộng rãi.',
    significance: 'Giai đoạn này đặt nền tảng chính trị, tư tưởng và tổ chức cho sự ra đời của Đảng Cộng sản Việt Nam, đồng thời thể hiện cách vận dụng lý luận vào điều kiện thuộc địa cụ thể.',
    modern: 'Tri thức chỉ có giá trị xã hội khi được diễn đạt dễ hiểu, tổ chức thành hành động và gắn với năng lực của con người cụ thể.',
    sourceIds: ['src-lenin', 'src-works', 'src-book', 'src-bio'],
    events: [
      { date: '1921–1922', title: 'Diễn đàn của các dân tộc thuộc địa', location: 'Paris, Pháp', summary: 'Tham gia Hội Liên hiệp thuộc địa và góp phần xuất bản báo Le Paria (Người cùng khổ).', thought: 'Gắn cuộc đấu tranh của Việt Nam với tiếng nói chung của các dân tộc thuộc địa.' },
      { date: '6/1925', title: 'Hội Việt Nam Cách mạng Thanh niên', location: 'Quảng Châu, Trung Quốc', summary: 'Thành lập tổ chức nhằm truyền bá lý luận, huấn luyện cán bộ và thúc đẩy phong trào cách mạng trong nước.', thought: 'Chuẩn bị con người và tổ chức là điều kiện để lý tưởng trở thành lực lượng thực tiễn.' },
      { date: '1927', title: 'Xuất bản Đường Kách mệnh', location: 'Quảng Châu', summary: 'Các bài giảng huấn luyện được tập hợp thành tác phẩm trình bày những vấn đề cơ bản về mục tiêu, lực lượng và tổ chức cách mạng.', thought: 'Nhấn mạnh vai trò của lý luận, tổ chức và đạo đức người cách mạng.' },
      { date: '3/2/1930', title: 'Thống nhất các tổ chức cộng sản', location: 'Cửu Long, Hương Cảng', summary: 'Nguyễn Ái Quốc chủ trì hội nghị hợp nhất, dẫn tới sự ra đời của Đảng Cộng sản Việt Nam.', thought: 'Đặt lợi ích chung và yêu cầu thống nhất phong trào lên trên chia rẽ tổ chức.' }
    ]
  },
  {
    id: 4,
    period: '1930–1945',
    title: 'Kiên định qua thử thách',
    short: 'Vượt qua gian khó, trở về Tổ quốc, đặt nhiệm vụ giải phóng dân tộc lên hàng đầu và cùng toàn dân giành độc lập.',
    symbol: 'mountain',
    kicker: 'Trở về',
    context: 'Đây là thời kỳ nhiều thử thách đối với phong trào cách mạng và cá nhân Hồ Chí Minh. Sau ba mươi năm hoạt động ở nước ngoài, đầu năm 1941 Người về nước, trực tiếp cùng Trung ương chuẩn bị lực lượng cho mục tiêu giải phóng dân tộc.',
    thought: 'Tư duy độc lập, tự chủ thể hiện ở việc xác định đúng nhiệm vụ trung tâm trong từng thời điểm; đoàn kết mọi lực lượng yêu nước; kết hợp chuẩn bị lâu dài với nắm bắt thời cơ.',
    significance: 'Cách mạng Tháng Tám và Tuyên ngôn Độc lập đánh dấu việc chuyển khát vọng độc lập thành nhà nước mới. Quyền dân tộc được lập luận trong quan hệ với những quyền phổ quát của con người.',
    modern: 'Kiên định không đồng nghĩa cứng nhắc: cần giữ mục tiêu cốt lõi nhưng linh hoạt về bước đi, biết tích lũy năng lực và nhận ra thời điểm hành động.',
    sourceIds: ['src-archive', 'src-bio', 'src-book', 'src-works'],
    events: [
      { date: '28/1/1941', title: 'Trở về Tổ quốc', location: 'Pác Bó, Cao Bằng', summary: 'Nguyễn Ái Quốc trở về sau ba mươi năm hoạt động ở nước ngoài, chọn Cao Bằng làm nơi xây dựng căn cứ.', thought: 'Trực tiếp gắn lý luận và kinh nghiệm quốc tế với thực tiễn trong nước.' },
      { date: '5/1941', title: 'Hội nghị Trung ương VIII', location: 'Pác Bó, Cao Bằng', summary: 'Hội nghị xác định giải phóng dân tộc là nhiệm vụ trước hết và quyết định thành lập Mặt trận Việt Minh.', thought: 'Ưu tiên đúng mâu thuẫn chủ yếu, mở rộng đoàn kết dân tộc.' },
      { date: '8/1945', title: 'Tổng khởi nghĩa', location: 'Trên cả nước', summary: 'Khi thời cơ xuất hiện, lực lượng cách mạng và nhân dân tiến hành Tổng khởi nghĩa, giành chính quyền.', thought: 'Kết quả của chuẩn bị lực lượng, đoàn kết và nghệ thuật nắm thời cơ.' },
      { date: '2/9/1945', title: 'Tuyên ngôn Độc lập', location: 'Quảng trường Ba Đình, Hà Nội', summary: 'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, tuyên bố sự ra đời của nước Việt Nam Dân chủ Cộng hòa.', thought: 'Khẳng định quyền độc lập của dân tộc và nền tảng quyền của con người.' }
    ]
  },
  {
    id: 5,
    period: '1945–1969',
    title: 'Phát triển và hoàn thiện tư tưởng',
    short: 'Tư tưởng được phát triển trong thực tiễn xây dựng nhà nước, kháng chiến, kiến quốc và bồi dưỡng con người.',
    symbol: 'star',
    kicker: 'Vì nhân dân',
    context: 'Trong vai trò đứng đầu Nhà nước mới và lãnh đạo cách mạng, Hồ Chí Minh cùng toàn dân đối diện đồng thời nhiều nhiệm vụ: bảo vệ nền độc lập, xây dựng chính quyền, phát triển văn hóa – xã hội và tiến hành kháng chiến.',
    thought: 'Nổi bật là quan niệm Nhà nước của nhân dân, do nhân dân, vì nhân dân; đại đoàn kết; đạo đức cách mạng; chăm lo con người; độc lập dân tộc gắn với định hướng xã hội chủ nghĩa; và vai trò của Đảng vừa lãnh đạo vừa phục vụ nhân dân.',
    significance: 'Tư tưởng không chỉ tồn tại trong văn bản mà được kiểm nghiệm qua việc tổ chức nhà nước và huy động sức dân. Di chúc kết tinh sự quan tâm đến Đảng, nhân dân, thế hệ trẻ và đoàn kết quốc tế.',
    modern: 'Sinh viên có thể chuyển các giá trị lớn thành tiêu chuẩn nhỏ nhưng cụ thể: trung thực, trách nhiệm, hợp tác, tự học, tiết kiệm và phục vụ cộng đồng.',
    sourceIds: ['src-bio', 'src-book', 'src-chronology'],
    events: [
      { date: '6/1/1946', title: 'Tổng tuyển cử đầu tiên', location: 'Việt Nam', summary: 'Cuộc Tổng tuyển cử bầu Quốc hội khóa I góp phần đặt nền tảng pháp lý cho Nhà nước mới.', thought: 'Quyền làm chủ của nhân dân cần được thể chế hóa.' },
      { date: '1946–1954', title: 'Kháng chiến và kiến quốc', location: 'Việt Bắc và cả nước', summary: 'Vừa lãnh đạo kháng chiến, vừa xây dựng chính quyền, văn hóa, giáo dục và tinh thần toàn dân.', thought: 'Kết hợp mục tiêu độc lập với xây dựng năng lực tự chủ lâu dài.' },
      { date: '1954–1965', title: 'Xây dựng miền Bắc, đấu tranh thống nhất', location: 'Hà Nội và cả nước', summary: 'Tư tưởng về xây dựng xã hội mới, đạo đức, con người và đại đoàn kết tiếp tục được phát triển trong hoàn cảnh mới.', thought: 'Sức mạnh chính trị gắn với phẩm chất con người và sự đồng thuận xã hội.' },
      { date: '1965–1969', title: 'Viết và hoàn thiện Di chúc', location: 'Hà Nội', summary: 'Di chúc được viết, bổ sung trong nhiều năm, thể hiện những căn dặn về Đảng, nhân dân, đoàn kết và thế hệ trẻ.', thought: 'Đặt tương lai lâu dài, trách nhiệm và việc chăm lo con người ở trung tâm.' }
    ]
  }
]

const makeQuestion = (id, stationId, question, options, correctAnswer, explanation, sourceIds) => ({ id, stationId, question, options, correctAnswer, explanation, sourceIds })

export const questions = [
  makeQuestion('q1', 1, 'Nguyễn Sinh Cung sinh ngày nào?', ['19/5/1890', '2/9/1945', '5/6/1911', '3/2/1930'], 0, 'Ngày sinh được ghi nhận là 19/5/1890 tại Hoàng Trù, Nam Đàn, Nghệ An.', ['src-bio']),
  makeQuestion('q2', 1, 'Không gian quê hương gắn với thời niên thiếu của Người là nơi nào?', ['Kim Liên, Nam Đàn', 'Pác Bó, Cao Bằng', 'Ba Đình, Hà Nội', 'Bến Nhà Rồng'], 0, 'Hoàng Trù và làng Sen thuộc Kim Liên, Nam Đàn, Nghệ An là không gian quê hương.', ['src-book']),
  makeQuestion('q3', 1, 'Điều gì mô tả đúng nhất giai đoạn 1890–1911?', ['Hệ thống tư tưởng đã hoàn chỉnh', 'Hình thành nền tảng yêu nước và chí hướng cứu nước', 'Đã thành lập Đảng', 'Đã xây dựng Nhà nước mới'], 1, 'Đây là giai đoạn hình thành nền tảng tình cảm, nhận thức và chí hướng, chưa phải hệ thống tư tưởng hoàn chỉnh.', ['src-book']),
  makeQuestion('q4', 1, 'Trước khi vào Sài Gòn, Nguyễn Tất Thành từng dạy học ở đâu?', ['Trường Dục Thanh', 'Trường Đông Kinh Nghĩa Thục', 'Trường Bưởi', 'Trường Đại học Đông Dương'], 0, 'Người từng dạy ở Trường Dục Thanh tại Phan Thiết.', ['src-bio']),
  makeQuestion('q5', 1, 'Bài học phương pháp nổi bật từ giai đoạn đầu là gì?', ['Sao chép nguyên mẫu có sẵn', 'Chỉ học trong sách', 'Quan sát thực tiễn và chủ động tìm con đường mới', 'Tránh mọi tranh luận'], 2, 'Hành trình bắt đầu từ việc nhận diện bế tắc của lối cũ và chủ động tìm hiểu thực tiễn rộng hơn.', ['src-book']),

  makeQuestion('q6', 2, 'Nguyễn Tất Thành rời Bến Nhà Rồng vào ngày nào?', ['19/5/1890', '5/6/1911', '18/6/1919', '2/9/1945'], 1, 'Ngày 5/6/1911 là mốc mở đầu chuyến đi tìm đường cứu nước.', ['src-journey']),
  makeQuestion('q7', 2, 'Tên con tàu gắn với sự kiện 5/6/1911 là gì?', ['Amiral Latouche-Tréville', 'Aurora', 'Mékong', 'Bạch Đằng'], 0, 'Nguyễn Tất Thành làm việc trên tàu Amiral Latouche-Tréville.', ['src-ship']),
  makeQuestion('q8', 2, 'Bản Yêu sách của nhân dân An Nam được gửi năm nào?', ['1911', '1919', '1925', '1930'], 1, 'Bản yêu sách được gửi tới Hội nghị Versailles tháng 6/1919.', ['src-bio']),
  makeQuestion('q9', 2, 'Văn kiện nào tạo bước ngoặt nhận thức năm 1920?', ['Tuyên ngôn Độc lập', 'Đường Kách mệnh', 'Luận cương về vấn đề dân tộc và thuộc địa của Lênin', 'Di chúc'], 2, 'Luận cương giúp Nguyễn Ái Quốc thấy một lời giải lý luận cho vấn đề giải phóng dân tộc.', ['src-lenin']),
  makeQuestion('q10', 2, 'Điểm nổi bật của quá trình tìm đường là gì?', ['Chỉ dựa vào phỏng đoán', 'Kết hợp trải nghiệm thực tế với tiếp thu lý luận', 'Từ chối mọi kinh nghiệm quốc tế', 'Không quan tâm người lao động'], 1, 'Người khảo sát thực tiễn nhiều nước rồi đối chiếu với các học thuyết và phong trào.', ['src-journey', 'src-lenin']),

  makeQuestion('q11', 3, 'Hội Việt Nam Cách mạng Thanh niên được thành lập vào năm nào?', ['1920', '1925', '1927', '1930'], 1, 'Tổ chức được thành lập tại Quảng Châu vào tháng 6/1925.', ['src-book']),
  makeQuestion('q12', 3, 'Tác phẩm Đường Kách mệnh được xuất bản năm nào?', ['1919', '1925', '1927', '1945'], 2, 'Tác phẩm tập hợp các bài giảng huấn luyện và được xuất bản năm 1927.', ['src-works']),
  makeQuestion('q13', 3, 'Hoạt động nào trực tiếp góp phần chuẩn bị cán bộ?', ['Mở các lớp huấn luyện ở Quảng Châu', 'Tổ chức Tổng tuyển cử', 'Viết Di chúc', 'Đọc Tuyên ngôn Độc lập'], 0, 'Các lớp huấn luyện là một phần quan trọng của công tác chuẩn bị tổ chức và con người.', ['src-book']),
  makeQuestion('q14', 3, 'Nguyễn Ái Quốc chủ trì hội nghị hợp nhất các tổ chức cộng sản vào thời điểm nào?', ['3/2/1930', '2/9/1945', '28/1/1941', '6/1/1946'], 0, 'Hội nghị đầu năm 1930 dẫn tới sự ra đời của Đảng Cộng sản Việt Nam.', ['src-lenin']),
  makeQuestion('q15', 3, 'Luận điểm nào phù hợp với giai đoạn 1921–1930?', ['Cách mạng không cần tổ chức', 'Lý luận phải gắn với tổ chức và quần chúng', 'Chỉ cần vận động quốc tế', 'Độc lập không liên quan nhân dân'], 1, 'Lý luận, tổ chức, cán bộ và quần chúng được đặt trong quan hệ thống nhất.', ['src-works']),

  makeQuestion('q16', 4, 'Nguyễn Ái Quốc trở về Tổ quốc vào ngày nào?', ['28/1/1941', '19/8/1945', '2/9/1945', '3/2/1930'], 0, 'Ngày 28/1/1941, Người về nước qua khu vực Pác Bó, Cao Bằng.', ['src-bio']),
  makeQuestion('q17', 4, 'Hội nghị Trung ương VIII xác định nhiệm vụ trước hết là gì?', ['Công nghiệp hóa', 'Giải phóng dân tộc', 'Cải cách giáo dục', 'Mở rộng thương mại'], 1, 'Trong bối cảnh lúc đó, nhiệm vụ giải phóng dân tộc được đặt lên hàng đầu.', ['src-archive']),
  makeQuestion('q18', 4, 'Mặt trận nào được quyết định thành lập năm 1941?', ['Việt Minh', 'Liên Việt', 'Tổ quốc', 'Đông Dương Đại hội'], 0, 'Việt Nam Độc lập Đồng minh (Việt Minh) được quyết định thành lập.', ['src-bio']),
  makeQuestion('q19', 4, 'Tuyên ngôn Độc lập được đọc ở đâu?', ['Pác Bó', 'Bến Nhà Rồng', 'Quảng trường Ba Đình', 'Tân Trào'], 2, 'Ngày 2/9/1945, Tuyên ngôn được đọc tại Quảng trường Ba Đình, Hà Nội.', ['src-bio']),
  makeQuestion('q20', 4, 'Bài học chiến lược nổi bật của năm 1945 là gì?', ['Không cần chuẩn bị lực lượng', 'Chuẩn bị lâu dài và nắm đúng thời cơ', 'Chỉ chờ viện trợ', 'Tách rời quần chúng'], 1, 'Thành công gắn với chuẩn bị lực lượng, đoàn kết rộng rãi và nhận biết thời cơ.', ['src-book']),

  makeQuestion('q21', 5, 'Cuộc Tổng tuyển cử đầu tiên của nước Việt Nam Dân chủ Cộng hòa diễn ra khi nào?', ['6/1/1946', '2/9/1945', '7/5/1954', '19/5/1969'], 0, 'Ngày 6/1/1946, cử tri cả nước tham gia bầu Quốc hội khóa I.', ['src-bio']),
  makeQuestion('q22', 5, 'Cụm nào diễn đạt đúng quan niệm về Nhà nước trong tư tưởng Hồ Chí Minh?', ['Đứng ngoài nhân dân', 'Của nhân dân, do nhân dân, vì nhân dân', 'Chỉ do chuyên gia điều hành', 'Không cần pháp luật'], 1, 'Nhân dân là chủ thể của quyền lực và là mục tiêu phục vụ của Nhà nước.', ['src-book']),
  makeQuestion('q23', 5, 'Nội dung nào là một trọng điểm của tư tưởng đại đoàn kết?', ['Thu hẹp lực lượng', 'Tập hợp rộng rãi trên nền tảng lợi ích dân tộc', 'Loại bỏ mọi khác biệt', 'Chỉ đoàn kết trong thời chiến'], 1, 'Đại đoàn kết hướng tới tập hợp lực lượng rộng rãi vì mục tiêu chung, không đồng nghĩa xóa bỏ mọi khác biệt.', ['src-book']),
  makeQuestion('q24', 5, 'Di chúc được Hồ Chí Minh viết và bổ sung trong khoảng thời gian nào?', ['1911–1920', '1925–1930', '1941–1945', '1965–1969'], 3, 'Di chúc được viết và bổ sung từ năm 1965 đến năm 1969.', ['src-chronology']),
  makeQuestion('q25', 5, 'Cách vận dụng phù hợp với sinh viên là gì?', ['Chỉ ghi nhớ khẩu hiệu', 'Chuyển giá trị thành hành vi trung thực, trách nhiệm và tự học', 'Tránh làm việc nhóm', 'Đợi người khác giải quyết'], 1, 'Vận dụng có ý nghĩa khi thể hiện qua lựa chọn và hành vi có thể kiểm chứng.', ['src-book'])
]

export const orderingEvents = [
  { id: 'order-1', year: 1911, label: 'Rời Bến Nhà Rồng tìm đường cứu nước' },
  { id: 'order-2', year: 1919, label: 'Gửi Yêu sách của nhân dân An Nam' },
  { id: 'order-3', year: 1927, label: 'Xuất bản Đường Kách mệnh' },
  { id: 'order-4', year: 1930, label: 'Chủ trì hội nghị hợp nhất các tổ chức cộng sản' },
  { id: 'order-5', year: 1941, label: 'Trở về Tổ quốc, hoạt động tại Pác Bó' },
  { id: 'order-6', year: 1945, label: 'Đọc Tuyên ngôn Độc lập tại Ba Đình' }
]

export const matchingPairs = [
  { id: 'match-1', event: 'Rời Bến Nhà Rồng (1911)', thought: 'Chủ động khảo nghiệm thực tiễn thế giới' },
  { id: 'match-2', event: 'Đọc Luận cương của Lênin (1920)', thought: 'Bước chuyển trong nhận thức về con đường giải phóng dân tộc' },
  { id: 'match-3', event: 'Các lớp huấn luyện ở Quảng Châu', thought: 'Chuẩn bị cán bộ, lý luận và tổ chức' },
  { id: 'match-4', event: 'Hội nghị Trung ương VIII (1941)', thought: 'Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu' },
  { id: 'match-5', event: 'Tổng tuyển cử 1946', thought: 'Thể chế hóa quyền làm chủ của nhân dân' }
]

export const scenarios = [
  {
    id: 'teamwork',
    number: '01',
    title: 'Khoảng trống trong nhóm',
    theme: 'Đoàn kết và trách nhiệm',
    context: 'Nhóm thuyết trình có một bạn liên tục nộp phần việc muộn. Cả nhóm bắt đầu chia phe: một bên muốn loại bạn, bên kia muốn bỏ qua để tránh mâu thuẫn.',
    connection: 'Liên hệ tư tưởng đại đoàn kết: đoàn kết cần mục tiêu chung, tôn trọng khác biệt và đi cùng nguyên tắc, trách nhiệm — không phải né tránh vấn đề.',
    lesson: 'Tạo cơ hội sửa sai nhưng làm rõ chuẩn chung, hỗ trợ cụ thể và cơ chế chịu trách nhiệm.',
    choices: [
      { label: 'Loại bạn khỏi nhóm ngay', tone: 'limited', result: 'Bảo vệ tiến độ tức thời nhưng đóng mất cơ hội tìm nguyên nhân và khắc phục.', analysis: 'Có tính quyết đoán, song dễ làm mâu thuẫn sâu hơn nếu chưa trao đổi minh bạch.' },
      { label: 'Họp ngắn, hỏi nguyên nhân và chia lại việc kèm mốc kiểm tra', tone: 'strong', result: 'Nhóm giữ mục tiêu chung và tạo một cam kết có thể kiểm chứng.', analysis: 'Cân bằng đoàn kết với kỷ luật; cần một người theo dõi tiến độ và phương án dự phòng.' },
      { label: 'Âm thầm làm hộ toàn bộ', tone: 'mixed', result: 'Bài có thể kịp nhưng gánh nặng dồn lên vài người và vấn đề không được giải quyết.', analysis: 'Thể hiện tinh thần hỗ trợ nhưng thiếu công bằng, không giúp người chậm tiến bộ.' }
    ]
  },
  {
    id: 'integrity',
    number: '02',
    title: 'Tệp đáp án trước giờ thi',
    theme: 'Trung thực trong học tập',
    context: 'Một tệp được cho là đáp án đề thi lan truyền trong nhóm lớp. Bạn thân nhờ bạn mở xem để “chỉ kiểm tra mức độ ôn tập”.',
    connection: 'Liên hệ tư tưởng về đạo đức cách mạng, đặc biệt sự thống nhất giữa lời nói và việc làm. Đây là vận dụng của nhóm biên soạn vào bối cảnh hiện đại, không phải lời nhận xét trực tiếp của Hồ Chí Minh.',
    lesson: 'Trung thực là lựa chọn bảo vệ năng lực thật và sự công bằng của cộng đồng học tập.',
    choices: [
      { label: 'Mở xem nhưng không chia sẻ', tone: 'limited', result: 'Vẫn tạo lợi thế không công bằng và có thể tiếp tay cho vi phạm.', analysis: 'Ý định “không phát tán” không loại bỏ tác động của việc sử dụng tài liệu bất minh.' },
      { label: 'Không mở, khuyên nhóm xóa và báo kênh phù hợp nếu có căn cứ', tone: 'strong', result: 'Bảo vệ tính công bằng và giảm nguy cơ tệp tiếp tục lan truyền.', analysis: 'Cần bình tĩnh, tránh kết tội cá nhân khi nguồn tệp chưa được xác minh.' },
      { label: 'Đăng công khai tên người gửi để cảnh cáo', tone: 'mixed', result: 'Cảnh báo nhanh nhưng dễ gây tổn hại danh dự trước khi sự việc được xác minh.', analysis: 'Mục tiêu đúng cần đi cùng quy trình có trách nhiệm và tôn trọng con người.' }
    ]
  },
  {
    id: 'social',
    number: '03',
    title: 'Một tin nóng chưa kiểm chứng',
    theme: 'Trách nhiệm trên mạng xã hội',
    context: 'Một bài đăng gây phẫn nộ về trường đang lan rất nhanh. Nội dung chưa có nguồn gốc rõ, nhưng bạn bè thúc giục chia sẻ để “tạo áp lực”.',
    connection: 'Liên hệ tinh thần tôn trọng sự thật, trách nhiệm với tập thể và cân nhắc lợi ích chung trước khi hành động.',
    lesson: 'Chậm vài phút để kiểm chứng có thể tránh một hậu quả kéo dài nhiều tháng.',
    choices: [
      { label: 'Chia sẻ ngay kèm câu “chưa kiểm chứng”', tone: 'limited', result: 'Nhãn cảnh báo không ngăn được thông tin tiếp tục lan rộng.', analysis: 'Tốc độ được ưu tiên hơn trách nhiệm; người đọc vẫn có thể hiểu đó là sự xác nhận.' },
      { label: 'Tìm nguồn gốc, đối chiếu kênh chính thức rồi mới quyết định', tone: 'strong', result: 'Giảm nguy cơ phát tán sai và giúp cuộc thảo luận dựa trên dữ kiện.', analysis: 'Có thể chậm hơn, nhưng tạo nền tảng cho phản biện đáng tin cậy.' },
      { label: 'Bỏ qua hoàn toàn', tone: 'mixed', result: 'Không tiếp tay cho tin sai, nhưng cũng bỏ lỡ cơ hội giúp bạn bè kiểm chứng.', analysis: 'An toàn cho cá nhân nhưng trách nhiệm cộng đồng còn hạn chế.' }
    ]
  },
  {
    id: 'selfstudy',
    number: '04',
    title: 'Môn học nằm ngoài vùng an toàn',
    theme: 'Tự học, tự lực và sáng tạo',
    context: 'Bạn nhận một đề tài cần kỹ năng trực quan hóa dữ liệu mà cả nhóm chưa từng học. Thời gian còn ba tuần và ngân sách gần như bằng không.',
    connection: 'Liên hệ tinh thần tự học, độc lập suy nghĩ và kết hợp sức mình với việc học hỏi kinh nghiệm bên ngoài.',
    lesson: 'Tự lực không phải tự cô lập; đó là chủ động chịu trách nhiệm, biết tìm nguồn lực và biến việc học thành hành động.',
    choices: [
      { label: 'Chọn mẫu có sẵn và thay tên', tone: 'limited', result: 'Tiết kiệm thời gian nhưng sản phẩm khó phù hợp vấn đề và ít tạo năng lực mới.', analysis: 'Có thể dùng mẫu làm điểm xuất phát, không nên xem là lời giải cuối cùng.' },
      { label: 'Chia kỹ năng thành phần nhỏ, học thử và xin phản hồi sớm', tone: 'strong', result: 'Nhóm kiểm soát rủi ro, đồng thời hình thành năng lực thật.', analysis: 'Cần quản lý phạm vi để việc học không nuốt hết thời gian thực hiện.' },
      { label: 'Xin đổi đề tài ngay', tone: 'mixed', result: 'Giảm rủi ro tiến độ nhưng có thể bỏ lỡ một cơ hội phát triển.', analysis: 'Hợp lý nếu yêu cầu vượt quá nguồn lực; nên đánh giá sau một thử nghiệm nhỏ thay vì phản ứng tức thời.' }
    ]
  },
  {
    id: 'community',
    number: '05',
    title: 'Quỹ hoạt động cuối kỳ',
    theme: 'Tiết kiệm và trách nhiệm cộng đồng',
    context: 'Câu lạc bộ còn một khoản quỹ nhỏ. Một số thành viên muốn tổ chức tiệc tổng kết thật lớn; số khác đề xuất giữ một phần cho hoạt động hỗ trợ tân sinh viên.',
    connection: 'Liên hệ quan niệm thực hành tiết kiệm và tinh thần phục vụ cộng đồng: nguồn lực nên được dùng minh bạch, hiệu quả và hướng tới lợi ích chung.',
    lesson: 'Tiết kiệm không phải không chi; đó là chi đúng mục tiêu, đúng mức và có trách nhiệm giải trình.',
    choices: [
      { label: 'Dùng toàn bộ cho tiệc vì mọi người đã đóng góp', tone: 'limited', result: 'Tạo niềm vui ngắn hạn nhưng không để lại năng lực cho hoạt động tiếp theo.', analysis: 'Quyền lợi thành viên là hợp lý, song cần cân đối với mục tiêu cộng đồng của câu lạc bộ.' },
      { label: 'Công khai quỹ, lấy ý kiến và chia theo hai mục tiêu có định mức', tone: 'strong', result: 'Vừa ghi nhận đóng góp, vừa bảo đảm tính kế thừa và trách nhiệm.', analysis: 'Quy trình tham gia giúp quyết định có tính chính danh hơn, dù cần thêm thời gian.' },
      { label: 'Giữ lại toàn bộ, không tổ chức tổng kết', tone: 'mixed', result: 'Tối đa hóa nguồn lực tương lai nhưng có thể làm giảm động lực và sự gắn kết hiện tại.', analysis: 'Tiết kiệm cực đoan cũng có chi phí; cần nhìn cả giá trị tinh thần của tập thể.' }
    ]
  }
]

export const locations = [
  { id: 'kim-lien', name: 'Kim Liên, Nghệ An', coords: [18.883, 105.316], period: '1890–1906', stationId: 1, event: 'Không gian quê hương và thời niên thiếu, gắn với Hoàng Trù và làng Sen.', illustration: 'lotus' },
  { id: 'hue', name: 'Huế', coords: [16.4637, 107.5909], period: '1906–1909', stationId: 1, event: 'Thời gian học tập và quan sát những biến động xã hội đầu thế kỷ XX.', illustration: 'gate' },
  { id: 'nha-rong', name: 'Bến Nhà Rồng, TP.HCM', coords: [10.7681, 106.7067], period: '5/6/1911', stationId: 2, event: 'Điểm khởi đầu hành trình ra đi tìm đường cứu nước.', illustration: 'ship' },
  { id: 'paris', name: 'Paris, Pháp', coords: [48.8566, 2.3522], period: '1917–1923', stationId: 2, event: 'Hoạt động trong phong trào công nhân, gửi Yêu sách năm 1919 và tiếp cận Luận cương năm 1920.', illustration: 'paper' },
  { id: 'pac-bo', name: 'Pác Bó, Cao Bằng', coords: [22.9755, 106.0539], period: '1941', stationId: 4, event: 'Nơi Người trở về Tổ quốc và cùng Trung ương chuẩn bị cho nhiệm vụ giải phóng dân tộc.', illustration: 'mountain' },
  { id: 'ba-dinh', name: 'Quảng trường Ba Đình, Hà Nội', coords: [21.0368, 105.8346], period: '2/9/1945', stationId: 4, event: 'Nơi Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập.', illustration: 'star' }
]

export const badges = [
  { id: 1, icon: 'Sprout', name: 'Mầm yêu nước', description: 'Hoàn thành Trạm 1', condition: (p) => p.completedStations.includes(1) },
  { id: 2, icon: 'Compass', name: 'Người tìm đường', description: 'Hoàn thành Trạm 2', condition: (p) => p.completedStations.includes(2) },
  { id: 3, icon: 'BookOpen', name: 'Người khám phá tư tưởng', description: 'Hoàn thành Trạm 3', condition: (p) => p.completedStations.includes(3) },
  { id: 4, icon: 'Mountain', name: 'Người kiên định', description: 'Hoàn thành Trạm 4', condition: (p) => p.completedStations.includes(4) },
  { id: 5, icon: 'Star', name: 'Người tiếp nối giá trị', description: 'Hoàn thành cả 5 trạm', condition: (p) => p.completedStations.includes(5) }
]
