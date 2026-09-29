import { Link } from 'react-router-dom'
import './ListingCard.css'

function ListingCard({ listing }) {
  const formatPrice = (price) => {
    if (price === 0) return 'تواصل للسعر'
    return price.toLocaleString('ar-SA') + ' ريال'
  }

  return (
    <Link to={`/listing/${listing.id}`} className="listing-card">
      <div className="card-img-wrap">
        <img src={listing.image} alt={listing.title} loading="lazy" />
        {listing.featured && <span className="badge-featured">مميز</span>}
      </div>
      <div className="card-body">
        <h3 className="card-title">{listing.title}</h3>
        <p className="card-price">{formatPrice(listing.price)}</p>
        <div className="card-meta">
          <span className="card-city">📍 {listing.city}</span>
          <span className="card-date">{listing.date}</span>
        </div>
      </div>
    </Link>
  )
}

export default ListingCard
