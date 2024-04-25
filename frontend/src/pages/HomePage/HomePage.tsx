import { hero } from '~/assets'
import { Header } from '~/components'

const HomePage = () => {
  return (
    <div>
      <Header />
      <img src={hero} alt="hero" className="h-[640px] w-full object-cover sm:h-[836px] lg:h-screen" />
    </div>
  )
}

export default HomePage
