import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

// * Assets
import cardImage from 'src/public/assets/400x300.png'

export const ImageCard = ({ description }: { description: string }) => (
  <Card className='p-4 pb-2'>
    <Card.Img src={cardImage} />
    <Card.Body className='flex flex-col justify-between items-center text-center space-y-5'>
      <Card.Text>{description}</Card.Text>
      <Button className='button !w-fit'>Read more</Button>
    </Card.Body>
  </Card>
)
