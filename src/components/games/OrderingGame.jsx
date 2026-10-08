import { useState } from 'react'
import { ArrowDown, ArrowUp, CheckCircle2, Eye, RotateCcw } from 'lucide-react'
import { orderingEvents } from '../../data/content'
import { shuffle } from '../../utils/progress'
import { useProgress } from '../../context/ProgressContext'

export default function OrderingGame() {
  const { displayProgress, saveTimeline, demoMode } = useProgress()
  const [items, setItems] = useState(() => shuffle(orderingEvents))
  const [result, setResult] = useState(null)
  const [dragged, setDragged] = useState(null)

  const move = (index, direction) => {
    const target = index + direction
    if (target < 0 || target >= items.length) return
    const copy = [...items]; [copy[index], copy[target]] = [copy[target], copy[index]]; setItems(copy); setResult(null)
  }
  const drop = (target) => {
    if (dragged === null || dragged === target) return
    const copy = [...items]; const [item] = copy.splice(dragged, 1); copy.splice(target, 0, item); setItems(copy); setDragged(null); setResult(null)
  }
  const check = () => {
    const correct = items.filter((item, index) => item.id === orderingEvents[index].id).length
    const score = Math.round((correct / items.length) * 100)
    setResult({ score, correct })
    if (!demoMode) saveTimeline(score)
  }
  const reset = () => { setItems(shuffle(orderingEvents)); setResult(null) }
  const solve = () => { setItems(orderingEvents); setResult({ score: 0, correct: orderingEvents.length, solution: true }) }

  return (
    <div className="game-panel order-game">
      <div className="game-heading"><div><span>SẮP XẾP DÒNG THỜI GIAN</span><h2>Từ chuyến đi đến ngày độc lập</h2></div><div className="best-score">KỶ LỤC <b>{displayProgress.timelineBest}</b></div></div>
      <p>Kéo thả thẻ, hoặc dùng nút lên/xuống, để xếp từ sớm đến muộn.</p>
      <div className="order-list">
        {items.map((item, index) => <div key={item.id} draggable onDragStart={() => setDragged(index)} onDragOver={(e) => e.preventDefault()} onDrop={() => drop(index)} className={`order-item ${result && item.id === orderingEvents[index].id ? 'correct' : ''}`}><span className="grab">⠿</span><span className="order-position">{index + 1}</span><div><b>{result?.solution && item.year}</b><p>{item.label}</p></div><div className="move-buttons"><button onClick={() => move(index, -1)} aria-label={`Di chuyển ${item.label} lên`}><ArrowUp /></button><button onClick={() => move(index, 1)} aria-label={`Di chuyển ${item.label} xuống`}><ArrowDown /></button></div></div>)}
      </div>
      {result && <div className={`game-result-bar ${result.correct === items.length && !result.solution ? 'perfect' : ''}`}><CheckCircle2 /><div><b>{result.solution ? 'Đây là thứ tự đúng.' : `${result.correct}/${items.length} vị trí chính xác · ${result.score} điểm`}</b><span>{result.solution ? 'Xem lời giải không ghi điểm.' : 'Điểm cao nhất chỉ cập nhật khi lượt này tốt hơn.'}</span></div></div>}
      <div className="game-button-row"><button onClick={check} className="button button-ink">Kiểm tra</button><button onClick={reset} className="button button-line"><RotateCcw size={16} /> Làm lại</button><button onClick={solve} className="button button-text"><Eye size={16} /> Xem lời giải</button></div>
    </div>
  )
}
