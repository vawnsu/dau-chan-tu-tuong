import { ArrowLeft, ArrowRight, BookMarked, ExternalLink, Flag, Lightbulb, MapPin, Users } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ArchiveArt from '../components/common/ArchiveArt'
import Reveal from '../components/common/Reveal'
import { sources, stations } from '../data/content'
import { useProgress } from '../context/ProgressContext'

export default function StationDetail() {
  const { id } = useParams()
  const station = stations.find((item) => item.id === Number(id))
  const { isUnlocked } = useProgress()
  if (!station) return <Navigate to="/404" replace />
  if (!isUnlocked(station.id)) return <Navigate to="/hanh-trinh" replace />
  const stationSources = sources.filter((source) => station.sourceIds.includes(source.id))
  const previous = stations[station.id - 2]
  const next = stations[station.id]

  return (
    <div className="station-page">
      <section className="station-hero">
        <div className="station-hero-copy"><span>TRẠM {String(station.id).padStart(2, '0')} · {station.kicker.toUpperCase()}</span><h1>{station.title}</h1><p>{station.period}</p><div className="station-lead">{station.short}</div></div>
        <ArchiveArt type={station.symbol} label={`Minh họa đồ họa cho giai đoạn ${station.period}`} />
      </section>

      <section className="story-shell">
        <Reveal className="story-intro">
          <span className="section-index">I</span><div><span className="eyebrow"><i />BỐI CẢNH LỊCH SỬ<i /></span><h2>Mỗi lựa chọn bắt đầu<br />từ một thời đại cụ thể.</h2></div><p>{station.context}</p>
        </Reveal>

        <div className="event-story">
          {station.events.map((event, index) => (
            <Reveal key={event.title} className={`event-row ${index % 2 ? 'reverse' : ''}`}>
              <div className="event-date"><b>{event.date}</b><span>{String(index + 1).padStart(2, '0')}</span></div>
              <div className="event-visual"><ArchiveArt compact type={index === 0 ? station.symbol : ['paper', 'mountain', 'star', 'book'][index % 4]} label={`Minh họa đồ họa: ${event.title}`} /></div>
              <article><div className="event-location"><MapPin size={15} />{event.location}</div><h3>{event.title}</h3><p>{event.summary}</p><div className="thought-note"><Lightbulb size={19} /><div><b>Kết nối tư tưởng</b><p>{event.thought}</p></div></div></article>
            </Reveal>
          ))}
        </div>

        <section className="insight-grid">
          <Reveal className="insight-main"><span className="eyebrow light"><i />NHẬN ĐỊNH THEO GIÁO TRÌNH<i /></span><h2>Nội dung tư tưởng</h2><p>{station.thought}</p><BookMarked /></Reveal>
          <Reveal className="insight-card"><Flag /><span>Ý NGHĨA LỊCH SỬ & LÝ LUẬN</span><p>{station.significance}</p></Reveal>
          <Reveal className="insight-card moss"><Users /><span>LIÊN HỆ SINH VIÊN HÔM NAY</span><p>{station.modern}</p><small>Phần liên hệ do nhóm biên soạn</small></Reveal>
        </section>

        <section className="source-block">
          <div><span className="eyebrow"><i />NGUỒN ĐỐI CHIẾU<i /></span><h2>Tư liệu của trạm</h2><p>Các liên kết mở tới nguồn công khai của cơ quan lưu trữ, bảo tàng và nhà xuất bản. Website không gán lời trích dẫn chưa kiểm chứng.</p></div>
          <div className="source-list">{stationSources.map((source, index) => <a key={source.id} href={source.url} target="_blank" rel="noreferrer"><span>{String(index + 1).padStart(2, '0')}</span><div><b>{source.title}</b><small>{source.publisher}</small></div><ExternalLink /></a>)}</div>
        </section>

        <section className="station-challenge-cta"><div><span>ĐÃ SẴN SÀNG?</span><h2>Kiểm tra dấu chân vừa đi qua</h2><p>Đạt ít nhất 3/5 câu để hoàn thành trạm và mở khóa chặng kế tiếp.</p></div><Link to={`/thu-thach?tram=${station.id}`} className="button button-paper">Bắt đầu thử thách <ArrowRight size={18} /></Link></section>
        <nav className="station-nav" aria-label="Điều hướng giữa các trạm">
          {previous ? <Link to={`/tram/${previous.id}`}><ArrowLeft /><span>TRẠM TRƯỚC<b>{previous.title}</b></span></Link> : <Link to="/hanh-trinh"><ArrowLeft /><span>QUAY LẠI<b>Bản đồ hành trình</b></span></Link>}
          {next ? <Link to={isUnlocked(next.id) ? `/tram/${next.id}` : '/hanh-trinh'}><span>TRẠM TIẾP THEO<b>{next.title}</b></span><ArrowRight /></Link> : <Link to="/ho-chieu"><span>HOÀN TẤT<b>Xem hộ chiếu</b></span><ArrowRight /></Link>}
        </nav>
      </section>
    </div>
  )
}
