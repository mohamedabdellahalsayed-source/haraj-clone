import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ListingDetail from './pages/ListingDetail'
import PostListing from './pages/PostListing'
import CategoryPage from './pages/CategoryPage'

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing/:id" element={<ListingDetail />} />
          <Route path="/post" element={<PostListing />} />
          <Route path="/category/:name" element={<CategoryPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
