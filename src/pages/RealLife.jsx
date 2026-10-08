import { ArrowLeft, ArrowRight, BookOpen, Check, RefreshCcw } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { scenarios } from '../data/content'
import { useProgress } from '../context/ProgressContext'

export default function RealLife() {
  const [index, setIndex] = useState(0)
  const [choice, setChoice] = useState(null)
  const { completeScenario, displayProgress, demoMode } = useProgress()
  const scenario = scenarios[index]
  const selected = choice === null ? null : scenario.choices[choice]

  const choose = (choiceIndex) => {
    setChoice(choiceIndex)
    if (!demoMode) completeScenario(scenario.id)
  }
  const go = (delta) => { setIndex((index + delta + scenarios.length) % scenarios.length); setChoice(null) }

  return (
    <div className="real-life-page">
      <section className="page-pad page-hero compact-hero real-hero"><div><span className="eyebrow"><i />PHÒNG THỰC HÀNH<i /></span><h1>Tư tưởng trong<br /><em>mỗi lựa chọn</em></h1><p>Không phải mọi tình huống đều có một đáp án tuyệt đối. Hãy cân nhắc mục tiêu, con người và hệ quả trước khi chọn.</p></div><div className="scenario-counter"><b>{String(index + 1).padStart(2, '0')}</b><span>/ 05<br />TÌNH HUỐNG</span></div></section>
      <section className="scenario-shell">
        <div className="scenario-rail">{scenarios.map((item, itemIndex) => <button key={item.id} className={`${itemIndex === index ? 'active' : ''} ${displayProgress.scenarioCompleted.includes(item.id) ? 'complete' : ''}`} onClick={() => { setIndex(itemIndex); setChoice(null) }}><span>{item.number}</span><b>{item.title}</b>{displayProgress.scenarioCompleted.includes(item.id) && <Check />}</button>)}</div>
        <AnimatePresence mode="wait">
          <motion.article key={scenario.id} className="scenario-card" initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }}>
            <header><div><span>TÌNH HUỐNG {scenario.number}</span><h2>{scenario.title}</h2><p>{scenario.theme}</p></div><span className="scenario-stamp">THỰC HÀNH<br />GIÁ TRỊ</span></header>
            <div className="scenario-context"><span>BỐI CẢNH</span><p>{scenario.context}</p></div>
            <div className="choice-area"><h3>Bạn sẽ hành động thế nào?</h3>{scenario.choices.map((item, choiceIndex) => <button key={item.label} className={`${choice === choiceIndex ? `selected ${item.tone}` : ''}`} onClick={() => choose(choiceIndex)}><span>{String.fromCharCode(65 + choiceIndex)}</span><div><b>{item.label}</b>{choice === choiceIndex && <p>{item.result}</p>}</div></button>)}</div>
            {selected && <motion.div className={`choice-analysis ${selected.tone}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}><div className="analysis-title"><BookOpen /><span>PHÂN TÍCH LỰA CHỌN</span></div><p>{selected.analysis}</p><hr /><b>Liên hệ tư tưởng</b><p>{scenario.connection}</p><div className="lesson"><b>BÀI HỌC GỢI MỞ</b><p>{scenario.lesson}</p></div></motion.div>}
            <footer><button className="button button-text" onClick={() => setChoice(null)} disabled={choice === null}><RefreshCcw size={16} /> Chọn lại</button><button className="button button-ink" onClick={() => go(1)}>Tình huống tiếp theo <ArrowRight size={17} /></button></footer>
          </motion.article>
        </AnimatePresence>
      </section>
      <div className="real-bottom"><button onClick={() => go(-1)}><ArrowLeft /> Tình huống trước</button><Link to="/hanh-trinh">Khám phá tư tưởng liên quan <ArrowRight /></Link></div>
    </div>
  )
}
