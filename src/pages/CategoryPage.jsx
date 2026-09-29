import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { listings, categories } from '../data/listings'
import ListingCard from '../components/ListingCard'
import './CategoryPage.css'

function CategoryPage() {
  const { name } = useParams()
  const [sortBy, setSortBy] = useState('newest')
  const [priceMin, setPriceMin] = useState('')
  const [priceMax, setPriceMax] = useState('')

  const catInfo = categories.find(c => c.slug === name)

  let filtered = name === 'all'
    ? [...listings]
    : listings.filter(l => l.category === name || l.city === name)

  // Filter by price
  if (priceMin) filtered = filtered.filter(l => l.price >= parseInt(priceMin))
  if (priceMax) filtered = filtered.filter(l => l.price <= parseInt(priceMax))

  // Sort
  if (sortBy === 'price-asc')  filtered = [...filtered].sort((a,b) => a.price - b.price)
  if (sortBy === 'price-desc') filtered = [...filtered].sort((a,b) => b.price - a.price)

  return (
    <div className="cat-page">
      <div className="cat-container">

        {/* Header */}
        <div className="cat-header">
          <div>
            <h1>{catInfo ? `${catInfo.icon} ${catInfo.name}` : name}</h1>
            <p>{filtered.length} إعلان</p>
          </div>
          <Link to="/post" className="btn-post-cat">+ أضف إعلانك</Link>
        </div>

        <div className="cat-layout">

          {/* Sidebar filters */}
          <aside className="filter-sidebar">
            <div className="filter-card">
              <h3>🔍 تصفية النتائج</h3>

              <div className="filter-group">
                <label>الترتيب</label>
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                  <option value="newest">الأحدث أولاً</option>
                  <option value="price-asc">السعر: الأقل أولاً</option>
                  <option value="price-desc">السعر: الأعلى أولاً</option>
                </select>
              </div>

              <div className="filter-group">
                <label>نطاق السعر</label>
                <div className="price-range">
                  <input
                    type="number"
                    placeholder="من"
                    value={priceMin}
                    onChange={e => setPriceMin(e.target.value)}
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="إلى"
                    value={priceMax}
                    onChange={e => setPriceMax(e.target.value)}
                  />
                </div>
              </div>

              <div className="filter-group">
                <label>الأقسام</label>
                <div className="cat-filter-list">
                  <Link to="/category/all" className={name === 'all' ? 'active' : ''}>الكل</Link>
                  {categories.map(cat => (
                    <Link
                      key={cat.id}
                      to={`/category/${cat.slug}`}
                      className={name === cat.slug ? 'active' : ''}
                    >
                      {cat.icon} {cat.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Ad */}
              <div className="filter-ad">
                <img src="https://placehold.co/260x200/1a1a2e/e8b44b?text=إعلان" alt="إعلان" />
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="cat-results">
            {filtered.length === 0 ? (
              <div className="no-results">
                <p>😕 لا توجد إعلانات في هذا القسم حالياً</p>
                <Link to="/post">أضف أول إعلان</Link>
              </div>
            ) : (
              <div className="results-grid">
                {filtered.map(l => <ListingCard key={l.id} listing={l} />)}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default CategoryPage
