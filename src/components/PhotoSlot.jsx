// Cadre photo. Sans image, il affiche un emplacement clairement marqué "à fournir"
// (le rectangle barré d'une croix est la convention des plans pour une image à venir).
export default function PhotoSlot({ src, alt = '', hint, ratio = '4 / 3', className = '' }) {
  return (
    <div className={`photo-slot ${src ? 'has-img' : 'is-empty'} ${className}`} style={{ aspectRatio: ratio }}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      ) : (
        <>
          <svg className="photo-cross" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <line x1="0" y1="0" x2="100" y2="100" vectorEffect="non-scaling-stroke" />
            <line x1="100" y1="0" x2="0" y2="100" vectorEffect="non-scaling-stroke" />
          </svg>
          <p className="photo-note"><strong>Photo à fournir</strong>{hint && <span>{hint}</span>}</p>
        </>
      )}
    </div>
  )
}
