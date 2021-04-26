import styles from "../../styles/ProductCard.module.css"

export default function ProductCard({ product, payForProduct }) {
  const getCurrency = (curr) => {
    switch (curr) {
      case "eur":
        return "€"
      case "usd":
        return "$"
      case "sek":
        return "kr"
    }
  }
  return (
    <div className="card" className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <img
          src={product.image}
          className={`card-img-top ${styles.cardImage}`}
          alt={`product_image_${product.title}`}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">
          {product.amount} {getCurrency(product.currency)} (including shipping)
        </p>
        <button
          className="btn btn-accent"
          onClick={() => payForProduct(product)}
        >
          Pay with <b>Stripe</b>
        </button>
      </div>
    </div>
  )
}
