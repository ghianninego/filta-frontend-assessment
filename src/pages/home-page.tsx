import { Link } from 'react-router-dom'

const HomePage = () => (
  <div className='flex flex-col space-y-3 p-5'>
    <p className='text-3xl font-bold'>Frontend Assessment</p>
    <ul className='list-disc list-inside'>
      <li>
        <Link to='/' className='link'>
          Exercise 1
        </Link>
      </li>
      <li>
        <Link to='/' className='link'>
          Exercise 2
        </Link>
      </li>
    </ul>
  </div>
)

export default HomePage
