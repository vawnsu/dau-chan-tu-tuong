import { Clock3, Link2, ListChecks } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import QuizGame from '../components/quiz/QuizGame'
import OrderingGame from '../components/games/OrderingGame'
import MatchingGame from '../components/games/MatchingGame'

const tabs = [
  { id: 'quiz', label: 'Trắc nghiệm', icon: ListChecks },
  { id: 'order', label: 'Dòng thời gian', icon: Clock3 },
  { id: 'match', label: 'Ghép tư tưởng', icon: Link2 }
]

export default function Challenge() {
  const [params] = useSearchParams()
  const initialStation = Math.max(1, Math.min(5, Number(params.get('tram')) || 1))
  const [tab, setTab] = useState('quiz')
  return (
    <div className="page-pad challenge-page">
      <section className="page-hero challenge-hero"><div><span className="eyebrow light"><i />PHÒNG THỬ THÁCH<i /></span><h1>Kiến thức chỉ ở lại<br />khi được <em>vận dụng.</em></h1><p>Ba trò chơi, ba cách nhìn lại hành trình. Điểm mỗi lượt và kỷ lục được tách riêng để thành tích luôn minh bạch.</p></div><div className="challenge-glyph" aria-hidden="true">?</div></section>
      <div className="game-tabs" role="tablist">{tabs.map(({ id, label, icon: Icon }) => <button key={id} role="tab" aria-selected={tab === id} className={tab === id ? 'active' : ''} onClick={() => setTab(id)}><Icon /> <span>{label}</span></button>)}</div>
      <section className="game-area">
        {tab === 'quiz' && <QuizGame initialStation={initialStation} />}
        {tab === 'order' && <OrderingGame />}
        {tab === 'match' && <MatchingGame />}
      </section>
      <div className="scoring-note"><b>Quy tắc điểm</b><span>Trắc nghiệm: 20 điểm/câu đúng, tối đa 100 mỗi trạm.</span><span>Dòng thời gian và ghép cặp: tối đa 100 mỗi trò.</span><span>Chơi lại chỉ cập nhật khi điểm mới cao hơn.</span></div>
    </div>
  )
}
