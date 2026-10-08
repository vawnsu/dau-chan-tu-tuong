import { lazy, Suspense } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'

const Home = lazy(() => import('./pages/Home'))
const Journey = lazy(() => import('./pages/Journey'))
const StationDetail = lazy(() => import('./pages/StationDetail'))
const Challenge = lazy(() => import('./pages/Challenge'))
const RealLife = lazy(() => import('./pages/RealLife'))
const Passport = lazy(() => import('./pages/Passport'))
const HistoricalMap = lazy(() => import('./pages/HistoricalMap'))
const Resources = lazy(() => import('./pages/Resources'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  const location = useLocation()
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.28 }}
        >
          <Suspense fallback={<div className="page-loading" role="status"><span />Đang mở trang tư liệu…</div>}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/hanh-trinh" element={<Journey />} />
              <Route path="/tram/:id" element={<StationDetail />} />
              <Route path="/thu-thach" element={<Challenge />} />
              <Route path="/van-dung" element={<RealLife />} />
              <Route path="/ho-chieu" element={<Passport />} />
              <Route path="/ban-do" element={<HistoricalMap />} />
              <Route path="/tu-lieu" element={<Resources />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}
