import { ArrowRight, Check, Lock, Map, Play } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import ArchiveArt from '../components/common/ArchiveArt'
import SectionHeader from '../components/common/SectionHeader'
import { stations } from '../data/content'
import { useProgress } from '../context/ProgressContext'
import { useState } from 'react'

export default function Journey() {
  const { displayProgress, isUnlocked, demoMode } = useProgress()
  const [lockedMessage, setLockedMessage] = useState(null)
  const navigate = useNavigate()
  const completed = displayProgress.completedStations.length

  const openStation = (station) => {
    if (isUnlocked(station.id)) navigate(`/tram/${station.id}`)
    else setLockedMessage(`Hoàn thành thử thách Trạm ${station.id - 1} với ít nhất 3/5 câu đúng để mở trạm này.`)
  }

  return (
    <div className="page-pad journey-page">
      <section className="page-hero compact-hero">
        <div><span className="eyebrow"><i />BẢN ĐỒ HÀNH TRÌNH<i /></span><h1>Hành trình<br /><em>lịch sử</em></h1><p>Đi qua năm giai đoạn để theo dõi cách tư tưởng được hình thành, kiểm nghiệm và phát triển trong thực tiễn.</p></div>
        <div className="journey-progress-card">
          <div className="progress-ring" style={{ '--progress': `${(completed / 5) * 360}deg` }}><span><b>{completed}</b>/5</span></div>
          <div><span>TIẾN ĐỘ TỔNG THỂ</span><h2>{completed === 5 ? 'Hành trình hoàn tất' : `${5 - completed} trạm đang chờ`}</h2><p>{demoMode ? 'Đang hiển thị dữ liệu minh họa.' : 'Hoàn thành quiz để mở khóa chặng kế tiếp.'}</p></div>
        </div>
      </section>

      {lockedMessage && (
        <div className="notice locked-notice" role="alert"><Lock size={20} /><span>{lockedMessage}</span><button onClick={() => setLockedMessage(null)}>Đã hiểu</button></div>
      )}

      <section className="timeline-section">
        <SectionHeader eyebrow="5 TRẠM KHÁM PHÁ" title="Một đường đi, nhiều lớp nghĩa" />
        <div className="timeline-spine" />
        {stations.map((station, index) => {
          const unlocked = isUnlocked(station.id)
          const complete = displayProgress.completedStations.includes(station.id)
          return (
            <motion.article key={station.id} className={`journey-stop ${index % 2 ? 'reverse' : ''} ${!unlocked ? 'locked' : ''}`} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }}>
              <div className="stop-marker"><span>{complete ? <Check /> : station.id}</span></div>
              <div className="stop-art"><ArchiveArt type={station.symbol} label={`Minh họa đồ họa cho ${station.title}`} /></div>
              <div className="stop-copy">
                <div className="stop-meta"><span>TRẠM {String(station.id).padStart(2, '0')}</span><i />{station.period}</div>
                <h2>{station.title}</h2><p>{station.short}</p>
                <div className={`status-pill ${complete ? 'complete' : unlocked ? 'current' : 'locked'}`}>{complete ? <Check /> : unlocked ? <Play /> : <Lock />}{complete ? 'Đã hoàn thành' : unlocked ? 'Sẵn sàng khám phá' : 'Chưa mở khóa'}</div>
                <button className="button button-line" onClick={() => openStation(station)}>{unlocked ? 'Khám phá trạm' : 'Xem điều kiện'} <ArrowRight size={17} /></button>
              </div>
            </motion.article>
          )
        })}
      </section>
      <section className="journey-bottom-cta"><Map /><div><span>NHÌN HÀNH TRÌNH TRÊN KHÔNG GIAN</span><h2>Bốn địa danh, nhiều lớp ký ức</h2></div><Link to="/ban-do" className="button button-gold">Mở bản đồ <ArrowRight size={17} /></Link></section>
    </div>
  )
}
