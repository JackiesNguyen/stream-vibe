import { Banner, Helmet, WrapperContainer } from '~/components/shared'

const MoviesShowsPage = () => {
  return (
    <>
      <Helmet title="Home" />
      <div className="min-h-screen bg-black-08">
        <WrapperContainer>
          <Banner />
        </WrapperContainer>
      </div>
    </>
  )
}

export default MoviesShowsPage
