import { Heading } from '~/components/shared'
import experiences from '~/constants/experiences'

const Experience = () => {
  return (
    <section className="py-10 xl:py-20">
      <div className="flex flex-col gap-20">
        <Heading
          title="We Provide you streaming experience across various devices."
          subTitle="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="bg-experiences-card flex flex-col gap-5 rounded-xl border border-black-15 p-6 lg:gap-12 lg:p-12"
            >
              <div className="flex items-center gap-4">
                <div className="">
                  <img src={experience.icon} alt="icon" className="h-full w-full min-w-10 object-cover" />
                </div>
                <h3 className="text-lg font-semibold leading-9 text-white lg:text-2xl">{experience.title}</h3>
              </div>
              <span className="text-sm font-normal leading-7 text-grey-60 lg:text-lg">{experience.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
