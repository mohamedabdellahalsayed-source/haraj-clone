import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { categories } from '../data/listings'
import './PostListing.css'

function PostListing() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    title: '',
    category: '',
    price: '',
    city: '',
    description: '',
    phone: '',
    images: [],
  })
  const [submitted, setSubmitted] = useState(false)

  const cities = ['الرياض','جدة','الدمام','مكة المكرمة','المدينة المنورة','الطائف','تبوك','أبها','القصيم','الجوف','حائل','نجران','جيزان','ينبع','بريدة']

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => navigate('/'), 2500)
  }

  if (submitted) {
    return (
      <div className="post-page">
        <div className="success-box">
          <div className="success-icon">✅</div>
          <h2>تم نشر إعلانك بنجاح!</h2>
          <p>سيتم مراجعة إعلانك وظهوره خلال دقائق</p>
          <p className="redirect-msg">جاري تحويلك للصفحة الرئيسية...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="post-page">
      <div className="post-container">
        <div className="post-header">
          <h1>أضف إعلانك مجاناً</h1>
          <p>انشر إعلانك الآن وتواصل مع آلاف المشترين</p>
        </div>

        <form className="post-form" onSubmit={handleSubmit}>

          {/* Step 1: Category */}
          <div className="form-section">
            <h3>1. اختر القسم</h3>
            <div className="cats-select-grid">
              {categories.map(cat => (
                <label
                  key={cat.id}
                  className={`cat-option ${form.category === cat.slug ? 'selected' : ''}`}
                >
                  <input
                    type="radio"
                    name="category"
                    value={cat.slug}
                    onChange={handleChange}
                    hidden
                  />
                  <span className="cat-icon">{cat.icon}</span>
                  <span>{cat.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Step 2: Details */}
          <div className="form-section">
            <h3>2. تفاصيل الإعلان</h3>

            <div className="form-group">
              <label>عنوان الإعلان *</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="مثال: سيارة تويوتا كامري 2022 نظيفة"
                required
                maxLength={100}
              />
              <span className="char-count">{form.title.length}/100</span>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>السعر (ريال)</label>
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="0 = السعر قابل للتفاوض"
                  min="0"
                />
              </div>
              <div className="form-group">
                <label>المدينة *</label>
                <select name="city" value={form.city} onChange={handleChange} required>
                  <option value="">اختر المدينة</option>
                  {cities.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>وصف الإعلان *</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="اكتب وصفاً تفصيلياً للمنتج أو الخدمة..."
                rows={5}
                required
                maxLength={2000}
              />
              <span className="char-count">{form.description.length}/2000</span>
            </div>
          </div>

          {/* Step 3: Images */}
          <div className="form-section">
            <h3>3. الصور</h3>
            <div className="upload-area">
              <input type="file" id="img-upload" multiple accept="image/*" hidden />
              <label htmlFor="img-upload" className="upload-label">
                <span className="upload-icon">📷</span>
                <span>اضغط لإضافة الصور</span>
                <span className="upload-hint">يمكنك إضافة حتى 10 صور</span>
              </label>
            </div>
            <div className="img-placeholders">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="img-placeholder">
                  <img src={`https://placehold.co/100x100/f0f0f0/bbb?text=صورة`} alt="" />
                </div>
              ))}
            </div>
          </div>

          {/* Step 4: Contact */}
          <div className="form-section">
            <h3>4. بيانات التواصل</h3>
            <div className="form-group">
              <label>رقم الجوال *</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="05xxxxxxxx"
                required
                pattern="05[0-9]{8}"
              />
            </div>
          </div>

          {/* Terms */}
          <div className="form-terms">
            <label>
              <input type="checkbox" required />
              <span>أوافق على <a href="/terms">شروط الاستخدام</a> وأتحمل المسؤولية الكاملة عن محتوى الإعلان</span>
            </label>
          </div>

          <button type="submit" className="btn-submit">نشر الإعلان مجاناً 🚀</button>

        </form>
      </div>
    </div>
  )
}

export default PostListing
