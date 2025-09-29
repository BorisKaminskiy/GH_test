import { lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router'
import { Layout, Main, Project } from '~/pages'


const LazyItems = lazy(() => import('../pages/Items/Items'))



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="/" element={<Main />}>
          <Route index element={<LazyItems />} />
        </Route>
        <Route path="project/:id" element={<Project />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
