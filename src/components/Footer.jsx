import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <span className="footer-logo">حراج</span>
            <p>سوق الإعلانات المجاني الأول في المملكة العربية السعودية</p>
            <div className="footer-social">
              <a href="#" aria-label="تويتر">𝕏</a>
              <a href="#" aria-label="انستغرام">📷</a>
              <a href="#" aria-label="يوتيوب">▶</a>
              <a href="#" aria-label="سناب شات">👻</a>
            </div>
          </div>

          {/* Links */}
          <div className="footer-col">
            <h4>الأقسام</h4>
            <Link to="/category/cars">سيارات</Link>
            <Link to="/category/real-estate">عقارات</Link>
            <Link to="/category/electronics">إلكترونيات</Link>
            <Link to="/category/furniture">أثاث</Link>
            <Link to="/category/jobs">وظائف</Link>
          </div>

          <div className="footer-col">
            <h4>المدن</h4>
            <Link to="/category/riyadh">الرياض</Link>
            <Link to="/category/jeddah">جدة</Link>
            <Link to="/category/dammam">الدمام</Link>
            <Link to="/category/makkah">مكة المكرمة</Link>
            <Link to="/category/madinah">المدينة المنورة</Link>
          </div>

          <div className="footer-col">
            <h4>حراج</h4>
            <Link to="/about">من نحن</Link>
            <Link to="/contact">اتصل بنا</Link>
            <Link to="/privacy">سياسة الخصوصية</Link>
            <Link to="/terms">الشروط والأحكام</Link>
            <Link to="/help">مركز المساعدة</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()} موقع حراج</p>
          <p className="footer-warning">
            ⚠️ موظفو حراج لا يطلبون رقمك السري أبداً — لا تخبر أحداً به
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
