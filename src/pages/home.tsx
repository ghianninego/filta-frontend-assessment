import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

const Home = () => (
  <Container className='flex flex-col space-y-3 p-5'>
    <p className='text-3xl font-bold'>Frontend Assessment</p>
    <ul className='list-disc list-inside'>
      <li>
        <Link to='/exercise-1' className='link'>
          Exercise 1
        </Link>
      </li>
      <li>
        <Link to='/exercise-2' className='link'>
          Exercise 2
        </Link>
      </li>
    </ul>
  </Container>
)

export default Home
