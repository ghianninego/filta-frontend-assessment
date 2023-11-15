import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { Container } from 'react-bootstrap'

// * Components
import HomePage from 'src/pages/home-page'

const App = () => {
  return (
    <Container fluid>
      <Router>
        <Routes>
          {/* <Route path='/exercise-1' element={<CatPage />} /> */}
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App
