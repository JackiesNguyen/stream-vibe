import { Helmet as HelmetComp, HelmetData } from 'react-helmet-async'

interface IHelmetProps {
  title?: string
  description?: string
}

const helmetData = new HelmetData({})

const Helmet = ({ title = '', description = 'StreamVibe' }: IHelmetProps = {}) => {
  return (
    <HelmetComp helmetData={helmetData} title={title ? `${title} | StreamVibe` : undefined} defaultTitle="StreamVibe">
      <meta name="description" content={description} />
    </HelmetComp>
  )
}
export default Helmet
