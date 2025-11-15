export default function ArcText({ text = 'AquaSafe • Smart Water Control • ', radius = 120, className = '' }) {
  const id = 'arc-path-' + Math.random().toString(36).slice(2)
  // Build repeated text to fill arc
  const repeated = (text.repeat(6)).slice(0, 120)
  return (
    <svg className={className} width={radius * 2} height={radius + 20} viewBox={`0 0 ${radius * 2} ${radius + 20}`} fill="none">
      <defs>
        <path id={id} d={`M20 ${radius} A ${radius - 20} ${radius - 20} 0 0 1 ${radius * 2 - 20} ${radius}`} />
      </defs>
      <text fill="#3b82f6" fontSize="14" fontWeight="600" letterSpacing="2">
        <textPath href={`#${id}`} startOffset="0%">{repeated}</textPath>
      </text>
    </svg>
  )
}
