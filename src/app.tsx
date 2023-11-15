import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

// * Components
import Home from 'src/pages/home'
import Exercise1 from 'src/pages/exercise-1'
import Exercise2 from 'src/pages/exercise-2'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/exercise-1' element={<Exercise1 />} />
          <Route path='/exercise-2' element={<Exercise2 />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
