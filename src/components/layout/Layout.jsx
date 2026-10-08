import { useEffect, useState } from 'react'
import { Menu, X, Footprints, Presentation } from 'lucide-react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { useProgress } from '../../context/ProgressContext'

const navItems = [
  ['/', 'Trang chủ'],
  ['/hanh-trinh', 'Hành trình'],
  ['/ban-do', 'Bản đồ'],
  ['/thu-thach', 'Thử thách'],
  ['/van-dung', 'Vận dụng'],
  ['/ho-chieu', 'Hộ chiếu'],
  ['/tu-lieu', 'Tư liệu']
]

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const { demoMode, setDemoMode } = useProgress()
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-paper text-ink">
      <a href="#main-content" className="skip-link">Bỏ qua điều hướng</a>
      <header className="site-nav">
        <div className="nav-inner">
          <Link to="/" className="brand" aria-label="Dấu Chân Tư Tưởng – Trang chủ">
            <span className="brand-mark"><Footprints size={22} /></span>
            <span><b>DẤU CHÂN</b><small>TƯ TƯỞNG</small></span>
          </Link>
          <nav className="desktop-nav" aria-label="Điều hướng chính">
            {navItems.map(([to, label]) => (
              <NavLink key={to} to={to} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>
            ))}
          </nav>
          <div className="nav-actions">
            <button
              className={`demo-button ${demoMode ? 'on' : ''}`}
              onClick={() => setDemoMode(!demoMode)}
              aria-pressed={demoMode}
              title="Chế độ trình diễn không thay đổi tiến độ thật"
            >
              <Presentation size={17} /> <span>{demoMode ? 'Thoát demo' : 'Trình diễn'}</span>
            </button>
            <button className="icon-button menu-button" onClick={() => setOpen(!open)} aria-label="Mở menu" aria-expanded={open}>
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {demoMode && <div className="demo-strip">CHẾ ĐỘ TRÌNH DIỄN · Dữ liệu minh họa, không ghi đè tiến độ thật</div>}
        <nav className={`mobile-nav ${open ? 'open' : ''}`} aria-label="Điều hướng di động">
          {navItems.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}
        </nav>
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <div className="brand footer-brand"><span className="brand-mark"><Footprints size={20} /></span><span><b>DẤU CHÂN</b><small>TƯ TƯỞNG</small></span></div>
            <p>Mỗi dấu chân là một câu chuyện,<br />mỗi câu chuyện mở ra một bài học.</p>
          </div>
          <div><h2>Khám phá</h2><Link to="/hanh-trinh">5 trạm lịch sử</Link><Link to="/thu-thach">Thử thách kiến thức</Link><Link to="/van-dung">Tình huống sinh viên</Link></div>
          <div><h2>Thông tin</h2><Link to="/tu-lieu">Nguồn tư liệu</Link><Link to="/ho-chieu">Hộ chiếu khám phá</Link><p>Học phần Tư tưởng Hồ Chí Minh</p></div>
        </div>
        <div className="footer-note">Sản phẩm giáo dục độc lập phục vụ học tập; không phải website chính thức của cơ quan, bảo tàng hoặc tổ chức nhà nước.</div>
      </footer>
    </div>
  )
}
