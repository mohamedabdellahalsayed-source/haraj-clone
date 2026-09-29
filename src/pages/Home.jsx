import { Link } from 'react-router-dom'
import ListingCard from '../components/ListingCard'
import { listings, categories } from '../data/listings'
import './Home.css'

const PLACEHOLDER = 'https://placehold.co/400x300/e8e8e8/999?text=صورة'

// Banner ad placeholder
const BannerAd = ({ height = 90 }) => (
  <div className="banner-ad" style={{ height }}>
    <img src={`https://placehold.co/970x${height}/1a1a2e/e8b44b?text=إعلان+مميز`} alt="إعلان" />
  </div>
)

function Home() {
  const featuredListings = listings.filter(l => l.featured)
  const recentListings = [...listings].sort((a, b) => a.id - b.id)

  return (
    <div className="home">

      {/* Hero banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>سوق الإعلانات المجاني الأول</h1>
          <p>بيع واشتري بسهولة وأمان في المملكة العربية السعودية</p>
          <Link to="/post" className="hero-btn">+ أضف إعلانك مجاناً</Link>
        </div>
      </section>

      <div className="home-container">

        {/* Top ad banner */}
        <BannerAd height={90} />

        {/* Categories grid */}
        <section className="section">
          <div className="section-header">
            <h2>تصفح الأقسام</h2>
          </div>
          <div className="categories-grid">
            {categories.map(cat => (
              <Link key={cat.id} to={`/category/${cat.slug}`} className="cat-card">
                <span className="cat-icon">{cat.icon}</span>
                <span className="cat-name">{cat.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured listings */}
        <section className="section">
          <div className="section-header">
            <h2>⭐ الإعلانات المميزة</h2>
            <Link to="/category/all" className="see-all">عرض الكل</Link>
          </div>
          <div className="listings-grid">
            {featuredListings.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </section>

        {/* Middle ad banner */}
        <BannerAd height={90} />

        {/* Latest listings */}
        <section className="section">
          <div className="section-header">
            <h2>🕐 أحدث الإعلانات</h2>
            <Link to="/category/all" className="see-all">عرض الكل</Link>
          </div>
          <div className="listings-grid">
            {recentListings.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </section>

        {/* Cities section */}
        <section className="section">
          <div className="section-header">
            <h2>🗺️ تصفح حسب المدينة</h2>
          </div>
          <div className="cities-grid">
            {['الرياض','جدة','الدمام','مكة المكرمة','المدينة المنورة','الطائف','تبوك','أبها','القصيم','الجوف'].map(city => (
              <Link key={city} to={`/category/${city}`} className="city-card">
                {city}
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom ad */}
        <BannerAd height={90} />

        {/* Stats bar */}
        <section className="stats-bar">
          <div className="stat">
            <span className="stat-num">+5,000,000</span>
            <span className="stat-label">إعلان نشط</span>
          </div>
          <div className="stat">
            <span className="stat-num">+3,000,000</span>
            <span className="stat-label">مستخدم مسجل</span>
          </div>
          <div className="stat">
            <span className="stat-num">+100</span>
            <span className="stat-label">مدينة</span>
          </div>
          <div className="stat">
            <span className="stat-num">مجاني 100%</span>
            <span className="stat-label">للنشر</span>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Home
