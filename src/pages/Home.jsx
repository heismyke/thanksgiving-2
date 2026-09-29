import { Link } from 'react-router'
import SmartImage from '../components/SmartImage.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import Reviews from '../components/Reviews.jsx'
import TrustBadges from '../components/TrustBadges.jsx'
import Countdown from '../components/Countdown.jsx'
import { useCart } from '../context/cart.js'
import { categories, imageFor, offer, products } from '../data/products.js'
import { discountPct, formatPrice } from '../utils/format.js'

export default function Home() {
  const { addItem } = useCart()
  const bestSellers = products.filter((p) => p.bestSeller)
  const bundle = products.find((p) => p.id === 'coffret-merci')

  return (
    <main>
      <section className="hero container">
        <div className="hero__text">
          <p className="eyebrow">{offer.label} · {offer.discount}</p>
          <h1>Dressez une table qui dit merci.</h1>
          <p className="hero__lead">
            Linge en lin, bois, grès et bougies : des objets simples pour recevoir ceux que vous aimez.
            Jusqu’à {offer.discount} jusqu’à Thanksgiving.
          </p>
          <div className="hero__actions">
            <Link to="/shop" className="btn btn--large">Découvrir les offres</Link>
            <Link to={`/product/${bundle.id}`} className="btn btn--large btn--ghost">Le coffret cadeau</Link>
          </div>
          <div className="hero__timer">
            <span className="muted">Les offres se terminent dans</span>
            <Countdown endsAt={offer.endsAt} />
          </div>
        </div>
        <SmartImage
          src="/images/hero.webp"
          alt="Table de Thanksgiving dressée avec du linge en lin, des bougies et de la vaisselle en grès"
          ratio="4 / 5"
          className="hero__image"
          eager
        />
      </section>

      <div className="container">
        <TrustBadges />
      </div>

      <section className="section container" aria-labelledby="cat-title">
        <div className="section__head">
          <h2 id="cat-title">Par catégorie</h2>
          <Link to="/shop" className="link">Tout voir</Link>
        </div>
        <ul className="cats">
          {categories.map((c) => {
            const cover = products.find((p) => p.category === c)
            return (
              <li key={c}>
                <Link to={`/shop?cat=${encodeURIComponent(c)}`} className="cat">
                  <SmartImage src={imageFor(cover.id)} alt="" ratio="3 / 4" />
                  <span className="cat__label">{c}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="section container" aria-labelledby="best-title">
        <div className="section__head">
          <h2 id="best-title">Meilleures ventes</h2>
          <Link to="/shop" className="link">Toute la boutique</Link>
        </div>
        <ProductGrid products={bestSellers} />
      </section>

      <div className="container">
        <section className="bundle" aria-labelledby="bundle-title">
          <SmartImage src={imageFor(bundle.id)} alt={bundle.name} ratio="1 / 1" className="bundle__img" />
          <div className="bundle__text">
            <p className="eyebrow">L’idée cadeau</p>
            <h2 id="bundle-title">{bundle.name}</h2>
            <p className="muted">{bundle.description}</p>
            <p className="bundle__price">
              <span>{formatPrice(bundle.price)}</span>
              <s>{formatPrice(bundle.oldPrice)}</s>
              <span className="tag tag--inline">-{discountPct(bundle.oldPrice, bundle.price)} %</span>
            </p>
            <p className="stock-note">Plus que {bundle.stockLeft} coffrets disponibles</p>
            <div className="hero__actions">
              <button type="button" className="btn btn--large" onClick={() => addItem(bundle)}>Ajouter au panier</button>
              <Link to={`/product/${bundle.id}`} className="btn btn--large btn--ghost">Voir le détail</Link>
            </div>
          </div>
        </section>
      </div>

      <Reviews />
    </main>
  )
}
