import { CategorySection } from '~/components/shared'
import { type ICardCarousel } from '~/types/cardCarousel'

interface IExploreProps {
  data: ICardCarousel
}
const Explore = ({ data }: IExploreProps) => {
  return (
    <section className="py-10 xl:py-20">
      <CategorySection title="Our Genres" data={data} slidesToShow={5} />
    </section>
  )
}

export default Explore
