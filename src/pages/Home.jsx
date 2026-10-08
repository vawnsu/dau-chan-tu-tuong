import { ArrowRight, BookOpen, Compass, Gamepad2, Lightbulb, MapPin, ScrollText } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import SectionHeader from '../components/common/SectionHeader'
import Reveal from '../components/common/Reveal'
import { stations } from '../data/content'
import { useProgress } from '../context/ProgressContext'

const discoveries = [
  { icon: ScrollText, number: '01', title: 'Câu chuyện lịch sử', copy: 'Theo dõi những bước ngoặt qua dữ kiện, bối cảnh và không gian cụ thể.' },
  { icon: Lightbulb, number: '02', title: 'Tư tưởng & giá trị', copy: 'Hiểu tư tưởng hình thành thế nào từ việc giải quyết những vấn đề của dân tộc.' },
  { icon: Gamepad2, number: '03', title: 'Thử thách kiến thức', copy: 'Tự kiểm tra bằng câu hỏi, dòng thời gian và trò chơi ghép nối.' },
  { icon: Compass, number: '04', title: 'Bài học vận dụng', copy: 'Đặt giá trị lịch sử vào những lựa chọn không đơn giản của đời sống sinh viên.' }
]

export default function Home() {
  const { displayProgress } = useProgress()
  const completed = displayProgress.completedStations.length
  const nextStation = Math.min(completed + 1, 5)
  return (
    <>
      <section className="hero">
        <div className="hero-noise" />
        <div className="hero-routes" aria-hidden="true"><span /><span /><span /></div>
        <div className="hero-inner">
          <motion.div className="hero-copy" initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7 }}>
            <div className="hero-kicker"><span>1890</span><i />Hành trình qua 5 trạm<i /><span>1969</span></div>
            <h1><em>Theo dấu chân</em><span>NGƯỜI</span></h1>
            <p>Khám phá hành trình hình thành và phát triển tư tưởng Hồ Chí Minh — không chỉ bằng những mốc thời gian, mà qua câu chuyện, lựa chọn và bài học cho hôm nay.</p>
            <div className="hero-actions">
              <Link className="button button-gold" to={`/tram/${nextStation}`}>Bắt đầu hành trình <ArrowRight size={18} /></Link>
              <Link className="button button-ghost" to="/hanh-trinh">Khám phá câu chuyện</Link>
            </div>
            <div className="hero-status"><span>{String(completed).padStart(2, '0')}</span><div><b>trạm đã hoàn thành</b><small>Tiến độ được lưu trên thiết bị này</small></div></div>
          </motion.div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .12 }}>
            <div className="sun-disc" />
            <figure className="portrait-frame">
              <div className="portrait-photo">
                <img src={`${import.meta.env.BASE_URL}images/ho-chi-minh-1946.jpg`} alt="Chân dung Chủ tịch Hồ Chí Minh, khoảng năm 1946" />
                <span aria-hidden="true" />
              </div>
              <figcaption className="portrait-label">
                <span>ẢNH TƯ LIỆU · KHOẢNG 1946</span>
                <a href="https://commons.wikimedia.org/wiki/File:Ho_Chi_Minh_-_1946_Portrait.jpg" target="_blank" rel="noreferrer">WIKIMEDIA COMMONS · PUBLIC DOMAIN</a>
              </figcaption>
            </figure>
            <div className="map-line one" /><div className="map-line two" />
            <div className="hero-stamp">DẤU CHÂN<br /><b>TƯ TƯỞNG</b><small>Triển lãm số</small></div>
            <MapPin className="pin pin-one" /><MapPin className="pin pin-two" />
            <div className="coordinate">18°53′B · 105°19′Đ<br />KHỞI NGUỒN TỪ XỨ NGHỆ</div>
          </motion.div>
        </div>
        <div className="scroll-cue"><span />CUỘN ĐỂ KHÁM PHÁ</div>
      </section>

      <section className="intro-section section-shell">
        <Reveal className="intro-number">01</Reveal>
        <Reveal className="intro-title"><span className="eyebrow"><i />VỀ DỰ ÁN<i /></span><h2>Lịch sử không đứng yên<br />trong trang sách.</h2></Reveal>
        <Reveal className="intro-copy" delay={.1}>
          <p className="lead">Một tư tưởng không xuất hiện trong khoảnh khắc. Nó được hình thành qua trải nghiệm, đối thoại với thời đại và những lựa chọn trước thực tiễn.</p>
          <p>“Dấu Chân Tư Tưởng” biến nội dung học phần thành một hành trình. Mỗi trạm giúp bạn phân biệt dữ kiện lịch sử, diễn giải theo giáo trình và phần liên hệ do nhóm biên soạn.</p>
          <Link to="/tu-lieu" className="text-link">Xem nguyên tắc tư liệu <ArrowRight size={16} /></Link>
        </Reveal>
      </section>

      <section className="journey-preview">
        <div className="section-shell">
          <SectionHeader eyebrow="LỘ TRÌNH KHÁM PHÁ" title="Năm trạm. Một dòng tư tưởng." description="Đi từ nguồn cội yêu nước tới những giá trị được phát triển trong thực tiễn cách mạng Việt Nam." />
          <div className="preview-line">
            {stations.map((station, index) => (
              <Reveal key={station.id} className={`preview-station ${displayProgress.completedStations.includes(station.id) ? 'complete' : ''}`} delay={index * .05}>
                <div className="preview-dot"><span>{station.id}</span></div>
                <div className="preview-card">
                  <span>{station.period}</span><h3>{station.title}</h3><p>{station.short}</p>
                  <Link to={`/tram/${station.id}`} aria-label={`Khám phá ${station.title}`}><ArrowRight /></Link>
                </div>
              </Reveal>
            ))}
          </div>
          <Link className="button button-ink preview-cta" to="/hanh-trinh">Xem toàn bộ hành trình <ArrowRight size={18} /></Link>
        </div>
      </section>

      <section className="discover-section section-shell">
        <SectionHeader eyebrow="BẠN SẼ KHÁM PHÁ" title="Học bằng cách bước vào câu chuyện" align="center" />
        <div className="discover-grid">
          {discoveries.map(({ icon: Icon, number, title, copy }, index) => (
            <Reveal key={title} className="discover-item" delay={index * .07}>
              <div className="discover-icon"><Icon /></div><span>{number}</span><h3>{title}</h3><p>{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="home-cta">
        <div className="cta-seal"><BookOpen /></div>
        <div><span>MỞ HỘ CHIẾU KHÁM PHÁ</span><h2>Mỗi câu trả lời đúng<br />là một dấu chân mới.</h2></div>
        <Link to="/ho-chieu" className="button button-paper">Xem hộ chiếu <ArrowRight size={18} /></Link>
      </section>
    </>
  )
}
