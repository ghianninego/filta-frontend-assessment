import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

// * Components
import HomePage from 'src/pages/home-page'
import Exercise1 from 'src/pages/exercise-1'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/exercise-1' element={<Exercise1 />} />
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
