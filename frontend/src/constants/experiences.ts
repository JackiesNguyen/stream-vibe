import { iconBot, iconGaming, iconLaptops, iconSmartPhones, iconSmartTV, iconTablet } from '~/assets'

const experiences = [
  {
    id: 1,
    icon: iconSmartPhones,
    title: 'Smartphones',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
  },
  {
    id: 2,
    icon: iconTablet,
    title: 'Tablet',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
  },
  {
    id: 3,
    icon: iconSmartTV,
    title: 'Smart TV',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
  },
  {
    id: 4,
    icon: iconLaptops,
    title: 'Laptops',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
  },
  {
    id: 5,
    icon: iconGaming,
    title: 'Gaming Consoles',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
  },
  {
    id: 6,
    icon: iconBot,
    title: 'VR Headsets ',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
  },
] as const

export type TExperience = (typeof experiences)[number]

export default experiences
