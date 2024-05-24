import { type TExperience } from '~/constants/experiences'

interface ICardExperienceProps {
  experience: TExperience
}

const CardExperience = ({ experience }: ICardExperienceProps) => {
  return (
    <div className="bg-experiences-card flex flex-col gap-12 rounded-xl border border-black-15 p-12">
      <div className="flex items-center gap-4">
        <div className="">
          <img src={experience.icon} alt="icon" className="h-full w-full object-cover" />
        </div>
        <h3 className="text-2xl font-semibold leading-9 text-white">{experience.title}</h3>
      </div>
      <span className="text-lg font-normal leading-7 text-grey-60">{experience.description}</span>
    </div>
  )
}

export default CardExperience
