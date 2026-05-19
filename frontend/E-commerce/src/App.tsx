import './index.css'
import { AppRoutes } from './routes'
import { Toaster } from "sonner"

function App() {
  return (
    <>
      <AppRoutes/>
      <Toaster richColors position='bottom-right'/>
    </>
  )
}

export default App
