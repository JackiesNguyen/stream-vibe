import { hero } from '~/assets'
import { Footer, Header } from '~/components'

const HomePage = () => {
  return (
    <div>
      <Header />
      <img src={hero} alt="hero" className="h-[640px] w-full object-cover sm:h-[836px] lg:h-screen" />
      <Footer />
    </div>
  )
}

export default HomePage
