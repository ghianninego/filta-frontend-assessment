import { useState } from 'react'
import Container from 'react-bootstrap/Container'

// * Data
import data from 'src/data/exercise-2-data.json'
import { TabView, AccordionView } from 'src/components'

const Exercise2 = () => {
  const [activeKey, setActiveKey] = useState<string>(data[0].title)

  return (
    <Container className='p-8 md:p-12'>
      <div className='hidden sm:block'>
        <TabView
          activeKey={activeKey}
          setActiveKey={setActiveKey}
          data={data}
        />
      </div>

      <div className='block sm:hidden'>
        <AccordionView activeKey={activeKey} data={data} />
      </div>
    </Container>
  )
}
export default Exercise2
