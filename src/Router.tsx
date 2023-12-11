// Strategic Imports
import { Routes, Route } from 'react-router-dom'

// Routes Imports
import { Home } from './pages/Home'
import { Post } from './pages/Post'

// Default Layout Import
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Route>
    </Routes>
  )
}
