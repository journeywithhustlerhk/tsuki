interface ProgressMoonProps {
  completed: number
  total: number
  size?: number
}

/**
 * TSUKI means moon. Progress is shown as the moon slowly filling rather
 * than a percentage bar — see PRODUCT_REQUIREMENTS "Progress System".
 */
export function ProgressMoon({ completed, total, size = 22 }: ProgressMoonProps) {
  const fraction = total > 0 ? completed / total : 0
  // Simple waxing-moon effect: an inner disc clipped to a fraction of the width.
  const clipPercent = Math.round((1 - fraction) * 100)

  return (
    <div
      className="relative shrink-0 rounded-full"
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${completed} of ${total} moments completed`}
      title={`${completed} of ${total} moments completed`}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{ background: 'var(--color-cream)', boxShadow: 'inset 0 0 0 1px rgba(44,30,26,0.12)' }}
      />
      <div
        className="absolute inset-0 rounded-full transition-[clip-path] duration-700 ease-out"
        style={{
          background: 'var(--color-gold)',
          clipPath: `inset(0 ${clipPercent}% 0 0)`,
        }}
      />
    </div>
  )
}
