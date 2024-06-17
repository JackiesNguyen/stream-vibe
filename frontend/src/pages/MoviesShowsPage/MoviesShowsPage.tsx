import { Banner, Helmet, WrapperContainer } from '~/components/shared'

const MoviesShowsPage = () => {
  return (
    <>
      <Helmet title="Movies show" />
      <div className="min-h-screen bg-black-08">
        <WrapperContainer>
          <Banner />
        </WrapperContainer>
      </div>
    </>
  )
}

export default MoviesShowsPage
