import { type TExperience } from '~/constants/experiences'

interface ICardExperienceProps {
  experience: TExperience
}

const CardExperience = ({ experience }: ICardExperienceProps) => {
  return (
    <div className="bg-experiences-card flex flex-col gap-5 rounded-xl border border-black-15 p-6 lg:gap-12 lg:p-12">
      <div className="flex items-center gap-4">
        <div className="">
          <img src={experience.icon} alt="icon" className="h-full w-full min-w-10 object-cover" />
        </div>
        <h3 className="text-lg font-semibold leading-9 text-white lg:text-2xl">{experience.title}</h3>
      </div>
      <span className="text-sm font-normal leading-7 text-grey-60 lg:text-lg">{experience.description}</span>
    </div>
  )
}

export default CardExperience
