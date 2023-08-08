import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loading from './components/Loading'
const Home = lazy(() => import('./pages/Home'))
const Upload = lazy(() => import('./pages/Upload'))
const ResultLoading = lazy(() => import('./pages/ResultLoading'))
const NoMatch = lazy(() => import('./components/NoMatch'))
const Result = lazy(() => import('./pages/Result'))

const App = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loading" element={<ResultLoading />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/result/:slug" element={<Result />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
