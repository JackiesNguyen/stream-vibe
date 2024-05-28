import { Heading } from '~/components'
import CardExperience from '~/components/CardExperience'
import experiences from '~/constants/experiences'

const Experience = () => {
  return (
    <section className="py-10 xl:py-20">
      <div className="flex flex-col gap-20">
        <Heading
          content="We Provide you streaming experience across various devices."
          subContent="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {experiences.map((experience) => (
            <CardExperience key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
