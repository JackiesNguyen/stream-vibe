import { hero } from '~/assets'

const HomePage = () => {
  return (
    <div>
      <img src={hero} alt="hero" className="h-[640px] w-full object-cover sm:h-[836px] lg:h-screen" />
    </div>
  )
}

export default HomePage
