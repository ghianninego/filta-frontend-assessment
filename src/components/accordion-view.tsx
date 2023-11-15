import Accordion from 'react-bootstrap/Accordion'

type TData = {
  title: string
  content: string
}

export const AccordionView = ({
  activeKey,
  data = []
}: {
  activeKey: string
  data: TData[]
}) => (
  <Accordion defaultActiveKey={activeKey}>
    {data.map(({ title, content }) => (
      <Accordion.Item key={title} eventKey={title}>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Accordion.Body>
      </Accordion.Item>
    ))}
  </Accordion>
)
