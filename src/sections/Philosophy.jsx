const words = 'Chaque projet mérite précision, engagement et sens.'.split(' ')

export default function Philosophy() {
  return (
    <section className="philo" aria-label="Philosophie de travail">
      <div className="wrap">
        <p className="philo-quote" aria-label={words.join(' ')}>
          {words.map((w, i) => <span className="w" aria-hidden="true" key={i}>{w} </span>)}
        </p>
        <p className="philo-text" data-reveal>Bien construire, ce n'est pas seulement ce qui sort de terre. C'est aussi la façon dont les équipes collaborent, dont les détails sont suivis et dont la qualité est livrée.</p>
      </div>
    </section>
  )
}
