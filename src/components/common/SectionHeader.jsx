export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`section-header ${align === 'center' ? 'text-center mx-auto' : ''}`}>
      {eyebrow && <span className="eyebrow"><i />{eyebrow}<i /></span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
