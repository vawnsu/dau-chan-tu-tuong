import { useEffect, useMemo, useState } from 'react'
import { Check, Lock, RotateCcw, X } from 'lucide-react'
import { questions, stations } from '../../data/content'
import { useProgress } from '../../context/ProgressContext'

export default function QuizGame({ initialStation = 1 }) {
  const { displayProgress, isUnlocked, saveQuiz, demoMode } = useProgress()
  const safeInitial = isUnlocked(initialStation) ? initialStation : 1
  const [stationId, setStationId] = useState(safeInitial)
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [checked, setChecked] = useState(false)
  const [correct, setCorrect] = useState(0)
  const [finished, setFinished] = useState(false)
  const set = useMemo(() => questions.filter((q) => q.stationId === stationId), [stationId])
  const question = set[index]

  useEffect(() => {
    if (isUnlocked(initialStation)) setStationId(initialStation)
  }, [initialStation])

  const reset = (nextStation = stationId) => {
    setStationId(nextStation); setIndex(0); setSelected(null); setChecked(false); setCorrect(0); setFinished(false)
  }

  const check = () => {
    if (selected === null) return
    setChecked(true)
    if (selected === question.correctAnswer) setCorrect((value) => value + 1)
  }

  const next = () => {
    if (index === set.length - 1) {
      const totalCorrect = correct + (selected === question.correctAnswer && !checked ? 1 : 0)
      const score = totalCorrect * 20
      if (!demoMode) saveQuiz(stationId, score)
      setFinished(true)
      return
    }
    setIndex((value) => value + 1); setSelected(null); setChecked(false)
  }

  if (finished) {
    const score = correct * 20
    const passed = score >= 60
    return (
      <div className="game-panel quiz-result">
        <div className={`result-seal ${passed ? 'pass' : ''}`}>{passed ? <Check /> : <RotateCcw />}<span>{score}</span><small>ĐIỂM</small></div>
        <span className="eyebrow"><i />KẾT QUẢ TRẠM {stationId}<i /></span>
        <h2>{passed ? 'Dấu chân đã được ghi nhận!' : 'Cần thêm một chút khám phá'}</h2>
        <p>{passed ? `Bạn trả lời đúng ${correct}/5 câu. ${stationId < 5 ? `Trạm ${stationId + 1} đã được mở khóa.` : 'Bạn đã hoàn thành trạm cuối.'}` : `Bạn trả lời đúng ${correct}/5 câu. Cần ít nhất 3 câu đúng để hoàn thành trạm.`}</p>
        {demoMode && <div className="demo-data-note">Kết quả demo không được lưu vào hộ chiếu thật.</div>}
        <div className="result-actions"><button className="button button-ink" onClick={() => reset()}><RotateCcw size={17} /> Chơi lại</button>{stationId < 5 && passed && <button className="button button-line" onClick={() => reset(stationId + 1)}>Quiz trạm tiếp theo</button>}</div>
      </div>
    )
  }

  return (
    <div className="game-panel quiz-panel">
      <div className="station-selector" aria-label="Chọn trạm quiz">
        {stations.map((station) => {
          const unlocked = isUnlocked(station.id)
          return <button key={station.id} disabled={!unlocked} className={stationId === station.id ? 'active' : ''} onClick={() => reset(station.id)}>{!unlocked && <Lock size={13} />} {station.id}</button>
        })}
      </div>
      <div className="quiz-topline"><span>TRẠM {stationId} · CÂU {index + 1}/5</span><span>Thành tích cao nhất: {displayProgress.quizBest[stationId] || 0}</span></div>
      <div className="question-progress"><i style={{ width: `${((index + 1) / 5) * 100}%` }} /></div>
      <h2>{question.question}</h2>
      <div className="answer-list">
        {question.options.map((option, optionIndex) => {
          const isCorrect = checked && optionIndex === question.correctAnswer
          const isWrong = checked && selected === optionIndex && optionIndex !== question.correctAnswer
          return <button key={option} disabled={checked} onClick={() => setSelected(optionIndex)} className={`${selected === optionIndex ? 'selected' : ''} ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`}><span>{String.fromCharCode(65 + optionIndex)}</span>{option}{isCorrect && <Check />}{isWrong && <X />}</button>
        })}
      </div>
      {checked && <div className={`answer-feedback ${selected === question.correctAnswer ? 'correct' : 'wrong'}`}><b>{selected === question.correctAnswer ? 'Chính xác.' : 'Chưa chính xác.'}</b> {question.explanation}</div>}
      <div className="quiz-actions">{!checked ? <button className="button button-ink" disabled={selected === null} onClick={check}>Kiểm tra đáp án</button> : <button className="button button-gold" onClick={next}>{index === 4 ? 'Xem kết quả' : 'Câu tiếp theo'}</button>}</div>
    </div>
  )
}
