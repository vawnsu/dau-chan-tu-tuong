const symbols = {
  lotus: '✦', ship: '≈', book: '§', mountain: '⌃', star: '★', gate: '門', paper: '¶'
}

export default function ArchiveArt({ type = 'star', label, compact = false }) {
  return (
    <div className={`archive-art art-${type} ${compact ? 'compact' : ''}`} role="img" aria-label={label || 'Minh họa đồ họa lịch sử'}>
      <span className="art-grid" />
      <span className="art-orbit" />
      <span className="art-symbol">{symbols[type] || '✦'}</span>
      <span className="art-caption">MINH HỌA · DẤU CHÂN TƯ TƯỞNG</span>
    </div>
  )
}
