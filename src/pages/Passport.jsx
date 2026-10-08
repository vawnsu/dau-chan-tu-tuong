import { useState } from 'react'
import { Award, BookOpen, Check, Compass, Edit3, Footprints, Medal, Mountain, RotateCcw, Sprout, Star, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { badges } from '../data/content'
import { useProgress } from '../context/ProgressContext'

const iconMap = { Sprout, Compass, BookOpen, Mountain, Star }

export default function Passport() {
  const { displayProgress, progress, demoMode, score, updateName, resetProgress } = useProgress()
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(progress.explorerName)
  const [confirmReset, setConfirmReset] = useState(false)
  const completed = displayProgress.completedStations.length
  const nextStation = Math.min(completed + 1, 5)
  const saveName = (event) => { event.preventDefault(); if (!demoMode) updateName(name); setEditing(false) }

  return (
    <div className="page-pad passport-page">
      <section className="passport-intro"><span className="eyebrow"><i />HỒ SƠ HÀNH TRÌNH<i /></span><h1>Hộ chiếu<br /><em>khám phá</em></h1><p>Mỗi trạm hoàn thành để lại một con dấu. Dữ liệu được lưu trên chính trình duyệt này.</p></section>
      <section className="passport-book">
        <div className="book-spine" />
        <div className="passport-left">
          <div className="passport-cover-title"><span>DẤU CHÂN TƯ TƯỞNG</span><b>HỘ CHIẾU</b><small>KHÁM PHÁ LỊCH SỬ</small></div>
          <div className="passport-profile">
            <div className="avatar"><Footprints /></div>
            <div><span>TÊN NHÀ KHÁM PHÁ</span>{editing ? <form onSubmit={saveName}><input autoFocus value={name} onChange={(e) => setName(e.target.value)} maxLength={40} /><button aria-label="Lưu tên"><Check /></button></form> : <h2>{displayProgress.explorerName}<button onClick={() => setEditing(true)} disabled={demoMode} aria-label="Sửa tên"><Edit3 /></button></h2>}<small>{demoMode ? 'HỒ SƠ MINH HỌA' : 'HỒ SƠ CÁ NHÂN · LƯU CỤC BỘ'}</small></div>
          </div>
          <div className="passport-stats"><div><span>TỔNG ĐIỂM CAO NHẤT</span><b>{score}</b><small>/ 700</small></div><div><span>TRẠM HOÀN THÀNH</span><b>{completed}</b><small>/ 5</small></div><div><span>TIẾN ĐỘ</span><b>{completed * 20}%</b><small>Hành trình</small></div></div>
          <div className="passport-progress"><i style={{ width: `${completed * 20}%` }} /></div>
          <div className="passport-actions"><Link to={`/tram/${nextStation}`} className="button button-gold">{completed === 5 ? 'Xem lại trạm cuối' : 'Tiếp tục hành trình'}</Link><button className="button button-text danger" onClick={() => setConfirmReset(true)} disabled={demoMode}><RotateCcw size={16} /> Reset tiến độ</button></div>
        </div>
        <div className="passport-right">
          <div className="passport-page-no">HUY HIỆU · {completed}/5</div>
          <h2>Dấu ấn đã sưu tập</h2><p>Mỗi huy hiệu tương ứng với một chặng đã hoàn thành bằng bài kiểm tra kiến thức.</p>
          <div className="badge-grid">{badges.map((badge) => { const unlocked = badge.condition(displayProgress); const Icon = iconMap[badge.icon]; return <div key={badge.id} className={`badge-item ${unlocked ? 'unlocked' : ''}`}><div className="badge-medal">{unlocked ? <Icon /> : <span>{badge.id}</span>}</div><div><b>{badge.name}</b><span>{unlocked ? 'ĐÃ MỞ KHÓA' : badge.description}</span></div></div> })}</div>
          {completed === 0 && <div className="empty-achievement"><Medal /><div><b>Chưa có dấu chân nào</b><p>Hoàn thành quiz Trạm 1 để nhận huy hiệu đầu tiên.</p></div></div>}
          {completed === 5 && <div className="certificate"><Award /><div><span>CHỨNG NHẬN HOÀN THÀNH</span><b>{displayProgress.explorerName}</b><p>đã đi qua toàn bộ hành trình Dấu Chân Tư Tưởng.</p></div></div>}
        </div>
      </section>
      <div className="passport-note">Dữ liệu LocalStorage có thể mất khi xóa dữ liệu trình duyệt. Website tự phục hồi về trạng thái mặc định nếu dữ liệu bị lỗi.</div>
      {confirmReset && <div className="modal-backdrop" role="presentation" onMouseDown={() => setConfirmReset(false)}><div className="confirm-modal" role="dialog" aria-modal="true" aria-labelledby="reset-title" onMouseDown={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setConfirmReset(false)} aria-label="Đóng"><X /></button><RotateCcw /><h2 id="reset-title">Xóa toàn bộ dấu chân?</h2><p>Tên, điểm, trạm đã hoàn thành và huy hiệu sẽ trở về mặc định. Thao tác này không thể hoàn tác.</p><div><button className="button button-line" onClick={() => setConfirmReset(false)}>Giữ lại</button><button className="button button-danger" onClick={() => { resetProgress(); setConfirmReset(false) }}>Xóa tiến độ</button></div></div></div>}
    </div>
  )
}
