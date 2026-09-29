import Stars from './Stars.jsx'
import { reviews } from '../data/products.js'

export default function Reviews() {
  return (
    <section className="section container" aria-labelledby="reviews-title">
      <div className="section__head">
        <h2 id="reviews-title">4,9/5 sur 470 avis</h2>
        <p className="muted">Ils ont dressé leur table avec Maison Merci.</p>
      </div>
      <ul className="reviews">
        {reviews.map((r) => (
          <li key={r.name} className="review">
            <Stars value={r.rating} />
            <blockquote>« {r.text} »</blockquote>
            <p className="review__author">{r.name} <span className="muted">· {r.city}</span></p>
          </li>
        ))}
      </ul>
    </section>
  )
}
