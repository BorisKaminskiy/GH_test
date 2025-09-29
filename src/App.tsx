import { Provider } from 'react-redux'
import { setupStore } from './store/store'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { FC } from 'react'


const App: FC = () => {
  return (
    <Provider store={setupStore()}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
