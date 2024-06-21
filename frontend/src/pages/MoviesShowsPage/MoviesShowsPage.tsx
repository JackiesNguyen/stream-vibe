import { Banner, Helmet, WrapperContainer } from '~/components/shared'

import CategorySection from '../../components/shared/CategorySection'

const MoviesShowsPage = () => {
  const arrData = {
    totalData: 25,
    results: [
      { id: 1, title: 'The Content1' },
      { id: 2, title: 'The Content2' },
      { id: 3, title: 'The Content3' },
      { id: 4, title: 'The Content4' },
      { id: 5, title: 'The Content5' },
    ],
  }

  const renderCategorySections = (category: string) => (
    <div className="relative rounded-xl border border-black-15 p-[50px]">
      <div className="absolute -top-5 left-12 z-10 rounded-lg bg-primary px-6 py-2.5 text-xl font-semibold leading-normal text-white">
        {category}
      </div>
      <div className="flex flex-col gap-28">
        <CategorySection title="Our Genres" data={arrData} />
        <CategorySection title="Popular Top 10 In Genres" data={arrData} isTopInContent />
        <CategorySection title="Trending Now" data={arrData} isTimeAndViewContent slidesToShow={5} />
        <CategorySection title="New Releases" data={arrData} slidesToShow={5} />
        <CategorySection title="Must-Watch Movies" data={arrData} slidesToShow={5} />
      </div>
    </div>
  )

  return (
    <>
      <Helmet title="Movies Show" />
      <div className="min-h-screen bg-black-08">
        <WrapperContainer>
          <Banner />
          <div className="flex flex-col gap-40">
            {renderCategorySections('Movies')}
            {renderCategorySections('Shows')}
          </div>
        </WrapperContainer>
      </div>
    </>
  )
}

export default MoviesShowsPage
