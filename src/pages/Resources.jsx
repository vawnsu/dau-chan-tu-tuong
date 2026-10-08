import { useMemo, useState } from 'react'
import { ExternalLink, FileSearch, Search } from 'lucide-react'
import ArchiveArt from '../components/common/ArchiveArt'
import { sources, stations } from '../data/content'

export default function Resources() {
  const [station, setStation] = useState('all')
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => sources.filter((source) => {
    const matchStation = station === 'all' || source.stationIds.includes(Number(station))
    const needle = query.trim().toLowerCase()
    const matchQuery = !needle || `${source.title} ${source.publisher} ${source.type} ${source.note}`.toLowerCase().includes(needle)
    return matchStation && matchQuery
  }), [station, query])
  return (
    <div className="page-pad resources-page">
      <section className="resources-hero"><div><span className="eyebrow light"><i />PHÒNG ĐỌC MỞ<i /></span><h1>Kho tư liệu<br /><em>& nguồn đối chiếu</em></h1><p>Mỗi liên kết dẫn tới nguồn công khai thực tế. Minh họa trong website được đánh dấu rõ và không thay thế ảnh tư liệu.</p></div><ArchiveArt type="book" label="Minh họa đồ họa kho tư liệu" /></section>
      <section className="source-principles"><div><b>01</b><span>PHÂN BIỆT LỚP NỘI DUNG</span><p>Dữ kiện lịch sử, nhận định theo giáo trình và liên hệ hiện đại được trình bày tách biệt.</p></div><div><b>02</b><span>KHÔNG GÁN LỜI NÓI</span><p>Không dùng câu nói chưa xác minh và không đặt tình huống hiện đại như nhận xét trực tiếp của Hồ Chí Minh.</p></div><div><b>03</b><span>ƯU TIÊN NGUỒN GỐC</span><p>Tra cứu bảo tàng, cơ quan lưu trữ, tuyển tập và sách nghiên cứu có thông tin xuất bản.</p></div></section>
      <section className="resource-browser">
        <div className="resource-tools"><div className="search-box"><Search /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Tìm theo tên, nhà xuất bản, chủ đề…" aria-label="Tìm tư liệu" /></div><select value={station} onChange={(e) => setStation(e.target.value)} aria-label="Lọc theo trạm"><option value="all">Tất cả giai đoạn</option>{stations.map((item) => <option key={item.id} value={item.id}>Trạm {item.id}: {item.period}</option>)}</select></div>
        <div className="resource-count">HIỂN THỊ {filtered.length} / {sources.length} TƯ LIỆU</div>
        {filtered.length ? <div className="resource-grid">{filtered.map((source, index) => <article key={source.id} className="resource-card"><div className="resource-thumb"><ArchiveArt compact type={source.type.includes('ảnh') ? 'star' : index % 2 ? 'paper' : 'book'} label={`Minh họa cho ${source.title}`} /><span>{source.type}</span></div><div className="resource-body"><span>{source.stationIds.map((id) => `TRẠM ${id}`).join(' · ')}</span><h2>{source.title}</h2><p>{source.note}</p><small>{source.publisher}</small><a href={source.url} target="_blank" rel="noreferrer">Mở nguồn gốc <ExternalLink /></a></div></article>)}</div> : <div className="resource-empty"><FileSearch /><h2>Chưa tìm thấy tư liệu</h2><p>Hãy thử bỏ bộ lọc giai đoạn hoặc dùng từ khóa ngắn hơn.</p><button onClick={() => { setQuery(''); setStation('all') }}>Xóa bộ lọc</button></div>}
      </section>
      <section className="editorial-note"><span>GHI CHÚ BIÊN TẬP</span><p>Nội dung được biên soạn cho mục đích học tập và trình diễn. Người học nên đối chiếu giáo trình chính thức của cơ sở đào tạo khi trích dẫn trong bài nghiên cứu.</p></section>
    </div>
  )
}
