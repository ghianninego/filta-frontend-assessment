import Container from 'react-bootstrap/Container'

// * Components
import { Header, ImageCard } from 'src/components'

// * Data
import { cardDescriptions } from 'src/data/exercise-1-data'

const Exercise1 = () => (
  <div>
    <Header />
    <Container className='px-4 pt-8 md:p-12'>
      <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {cardDescriptions.map((description, idx) => (
          <ImageCard key={idx} description={description} />
        ))}
      </div>
    </Container>
  </div>
)

export default Exercise1
