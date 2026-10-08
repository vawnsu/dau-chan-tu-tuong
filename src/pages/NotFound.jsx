import { ArrowLeft, Compass } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return <div className="not-found"><div className="not-found-number">404</div><Compass /><span>LẠC KHỎI HÀNH TRÌNH</span><h1>Con đường này chưa được ghi trên bản đồ.</h1><p>Trang bạn tìm có thể đã thay đổi địa chỉ hoặc chưa tồn tại.</p><Link to="/" className="button button-gold"><ArrowLeft size={17} /> Quay về trang chủ</Link></div>
}
