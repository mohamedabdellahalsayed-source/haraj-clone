import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { listings } from '../data/listings'
import ListingCard from '../components/ListingCard'
import './ListingDetail.css'

function ListingDetail() {
  const { id } = useParams()
  const listing = listings.find(l => l.id === parseInt(id))
  const [activeImg, setActiveImg] = useState(0)
  const [showPhone, setShowPhone] = useState(false)

  if (!listing) {
    return (
      <div className="not-found">
        <h2>الإعلان غير موجود</h2>
        <Link to="/">العودة للرئيسية</Link>
      </div>
    )
  }

  const related = listings.filter(l => l.category === listing.category && l.id !== listing.id).slice(0, 4)

  const formatPrice = (price) => {
    if (price === 0) return 'تواصل للسعر'
    return price.toLocaleString('ar-SA') + ' ريال'
  }

  return (
    <div className="detail-page">
      <div className="detail-container">

        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">الرئيسية</Link>
          <span>›</span>
          <Link to={`/category/${listing.category}`}>{listing.category}</Link>
          <span>›</span>
          <span>{listing.title}</span>
        </nav>

        <div className="detail-layout">

          {/* Left: Images + Description */}
          <div className="detail-main">

            {/* Image gallery */}
            <div className="gallery">
              <div className="gallery-main">
                <img src={listing.images[activeImg]} alt={listing.title} />
              </div>
              {listing.images.length > 1 && (
                <div className="gallery-thumbs">
                  {listing.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`صورة ${i + 1}`}
                      className={i === activeImg ? 'thumb active' : 'thumb'}
                      onClick={() => setActiveImg(i)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Description */}
            <div className="detail-card">
              <h2>تفاصيل الإعلان</h2>
              <p className="detail-desc">{listing.description}</p>
            </div>

            {/* Safety tips */}
            <div className="safety-box">
              <h4>⚠️ نصائح السلامة</h4>
              <ul>
                <li>تأكد من المعاينة الشخصية قبل الشراء</li>
                <li>لا تدفع مقدماً قبل استلام المنتج</li>
                <li>تعامل في مكان عام وآمن</li>
                <li>موظفو حراج لا يطلبون رقمك السري أبداً</li>
              </ul>
            </div>
          </div>

          {/* Right: Seller info + price */}
          <aside className="detail-sidebar">

            {/* Price card */}
            <div className="price-card">
              <h1 className="listing-title">{listing.title}</h1>
              <p className="listing-price">{formatPrice(listing.price)}</p>
              <div className="listing-meta">
                <span>📍 {listing.city}</span>
                <span>🕐 {listing.date}</span>
              </div>

              <button
                className="btn-phone"
                onClick={() => setShowPhone(!showPhone)}
              >
                {showPhone ? `📞 ${listing.phone}` : '📞 إظهار رقم الهاتف'}
              </button>
              <button className="btn-chat">💬 مراسلة البائع</button>
              <button className="btn-save">🔖 حفظ الإعلان</button>
            </div>

            {/* Seller card */}
            <div className="seller-card">
              <div className="seller-avatar">
                <img src="https://placehold.co/60x60/1a1a2e/e8b44b?text=👤" alt="البائع" />
              </div>
              <div className="seller-info">
                <h3>{listing.seller}</h3>
                <div className="seller-rating">
                  {'⭐'.repeat(Math.floor(listing.sellerRating))}
                  <span>{listing.sellerRating}</span>
                </div>
                <p>عضو نشط</p>
              </div>
              <Link to={`/seller/${listing.id}`} className="btn-seller-profile">
                عرض الملف الشخصي
              </Link>
            </div>

            {/* Ad box */}
            <div className="sidebar-ad">
              <img src="https://placehold.co/300x250/1a1a2e/e8b44b?text=إعلان" alt="إعلان" />
            </div>

          </aside>
        </div>

        {/* Related listings */}
        {related.length > 0 && (
          <section className="related-section">
            <div className="section-header">
              <h2>إعلانات مشابهة</h2>
              <Link to={`/category/${listing.category}`} className="see-all">عرض الكل</Link>
            </div>
            <div className="related-grid">
              {related.map(l => <ListingCard key={l.id} listing={l} />)}
            </div>
          </section>
        )}

      </div>
    </div>
  )
}

export default ListingDetail
