import { useMemo, useState } from 'react'
import { Check, Link2, RotateCcw, X } from 'lucide-react'
import { matchingPairs } from '../../data/content'
import { shuffle } from '../../utils/progress'
import { useProgress } from '../../context/ProgressContext'

export default function MatchingGame() {
  const { displayProgress, saveMatch, demoMode } = useProgress()
  const [round, setRound] = useState(0)
  const thoughts = useMemo(() => shuffle(matchingPairs), [round])
  const [left, setLeft] = useState(null)
  const [right, setRight] = useState(null)
  const [matched, setMatched] = useState([])
  const [mistakes, setMistakes] = useState(0)
  const [feedback, setFeedback] = useState(null)

  const chooseLeft = (id) => { if (!matched.includes(id)) { setLeft(id); setFeedback(null); if (right) compare(id, right) } }
  const chooseRight = (id) => { if (!matched.includes(id)) { setRight(id); setFeedback(null); if (left) compare(left, id) } }
  const compare = (a, b) => {
    if (a === b) {
      const next = [...matched, a]; setMatched(next); setFeedback('correct'); setLeft(null); setRight(null)
      if (next.length === matchingPairs.length) {
        const score = Math.max(20, 100 - mistakes * 10)
        if (!demoMode) saveMatch(score)
      }
    } else { setMistakes((value) => value + 1); setFeedback('wrong'); setTimeout(() => { setLeft(null); setRight(null) }, 450) }
  }
  const reset = () => { setRound((value) => value + 1); setLeft(null); setRight(null); setMatched([]); setMistakes(0); setFeedback(null) }
  const completed = matched.length === matchingPairs.length
  const score = Math.max(20, 100 - mistakes * 10)

  return (
    <div className="game-panel match-game">
      <div className="game-heading"><div><span>GHÉP SỰ KIỆN VỚI TƯ TƯỞNG</span><h2>Tìm sợi dây liên hệ</h2></div><div className="best-score">KỶ LỤC <b>{displayProgress.matchBest}</b></div></div>
      <p>Chọn một sự kiện và một nội dung liên quan. Mỗi lần ghép sai trừ 10 điểm của lượt chơi.</p>
      <div className="match-board">
        <div><h3>SỰ KIỆN / GIAI ĐOẠN</h3>{matchingPairs.map((pair) => <button key={pair.id} disabled={matched.includes(pair.id)} onClick={() => chooseLeft(pair.id)} className={`${left === pair.id ? 'selected' : ''} ${matched.includes(pair.id) ? 'matched' : ''}`}>{matched.includes(pair.id) ? <Check /> : <span>0{matchingPairs.indexOf(pair) + 1}</span>}{pair.event}</button>)}</div>
        <div className="match-link"><Link2 /></div>
        <div><h3>NỘI DUNG / Ý NGHĨA</h3>{thoughts.map((pair) => <button key={pair.id} disabled={matched.includes(pair.id)} onClick={() => chooseRight(pair.id)} className={`${right === pair.id ? 'selected' : ''} ${matched.includes(pair.id) ? 'matched' : ''}`}>{matched.includes(pair.id) ? <Check /> : <span>?</span>}{pair.thought}</button>)}</div>
      </div>
      {feedback && !completed && <div className={`match-feedback ${feedback}`}>{feedback === 'correct' ? <><Check /> Ghép chính xác — mối liên hệ đã được mở.</> : <><X /> Hai thẻ chưa cùng một mạch ý. Hãy thử lại.</>}</div>}
      {completed && <div className="game-result-bar perfect"><Check /><div><b>Hoàn thành 5/5 cặp · {score} điểm</b><span>{demoMode ? 'Kết quả demo không lưu vào tiến độ thật.' : 'Thành tích cao nhất đã được đối chiếu và cập nhật.'}</span></div></div>}
      <button onClick={reset} className="button button-line"><RotateCcw size={16} /> Chơi lại</button>
    </div>
  )
}
