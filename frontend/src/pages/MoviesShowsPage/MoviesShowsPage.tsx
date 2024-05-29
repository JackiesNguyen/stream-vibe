import { Helmet, WrapperContainer } from '~/components'
import CustomCarousel from '~/components/CustomCarousel'

const MoviesShowsPage = () => {
  return (
    <>
      <Helmet title="Home" />
      <div className="min-h-screen bg-black-08">
        <WrapperContainer>
          <CustomCarousel />
        </WrapperContainer>
      </div>
    </>
  )
}

export default MoviesShowsPage
