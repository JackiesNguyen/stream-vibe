const plans = [
  {
    id: 1,
    title: 'Basic',
    description:
      'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.',
    price: '9.99',
  },
  {
    id: 2,
    title: 'Standard Plan',
    description: 'Access to a wider selection of movies and shows, including most new releases and exclusive content',
    price: '12.99',
  },
  {
    id: 3,
    title: 'Premium Plan',
    description: 'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
    price: '14.99',
  },
]

export type TPlan = (typeof plans)[number]

export default plans
