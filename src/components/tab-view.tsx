import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

type TData = {
  title: string
  content: string
}

export const TabView = ({
  activeKey,
  setActiveKey,
  data = []
}: {
  activeKey: string
  setActiveKey: (key: string) => void
  data: TData[]
}) => (
  <Tabs
    id='tab-view'
    activeKey={activeKey}
    onSelect={(key: string | null) => setActiveKey(key as string)}
    fill
  >
    {data.map(({ title, content }) => (
      <Tab key={title} eventKey={title} title={title}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Tab>
    ))}
  </Tabs>
)
