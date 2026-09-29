import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/category/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header className="navbar">
      {/* Top bar */}
      <div className="navbar-top">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <span className="logo-text">Mo7amed</span>
          </Link>

          <form className="navbar-search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="ابحث في حراج..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-btn">
              🔍
            </button>
          </form>

          <div className="navbar-actions">
            <Link to="/post" className="btn-post">
              + أضف إعلان
            </Link>
            <button className="btn-login">دخول</button>
            <button className="btn-register">تسجيل</button>
          </div>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* Categories bar */}
      <nav className="navbar-cats">
        <div className="navbar-container">
          <Link to="/category/cars">سيارات</Link>
          <Link to="/category/real-estate">عقارات</Link>
          <Link to="/category/electronics">إلكترونيات</Link>
          <Link to="/category/mobiles">موبايلات</Link>
          <Link to="/category/furniture">أثاث</Link>
          <Link to="/category/clothes">ملابس</Link>
          <Link to="/category/jobs">وظائف</Link>
          <Link to="/category/services">خدمات</Link>
          <Link to="/category/animals">حيوانات</Link>
          <Link to="/category/sports">رياضة</Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/post" onClick={() => setMenuOpen(false)}>+ أضف إعلان</Link>
          <Link to="/category/cars" onClick={() => setMenuOpen(false)}>سيارات</Link>
          <Link to="/category/real-estate" onClick={() => setMenuOpen(false)}>عقارات</Link>
          <Link to="/category/electronics" onClick={() => setMenuOpen(false)}>إلكترونيات</Link>
          <Link to="/category/mobiles" onClick={() => setMenuOpen(false)}>موبايلات</Link>
          <Link to="/category/furniture" onClick={() => setMenuOpen(false)}>أثاث</Link>
          <Link to="/category/clothes" onClick={() => setMenuOpen(false)}>ملابس</Link>
          <Link to="/category/jobs" onClick={() => setMenuOpen(false)}>وظائف</Link>
        </div>
      )}
    </header>
  )
}

export default Navbar
