import PATH from './paths'

export const headerLinks = [
  {
    path: PATH.USER.HOME,
    title: 'Home',
  },
  {
    path: PATH.USER.MOVIES_SHOWS_PAGE,
    title: 'Movies & Shows',
  },
  {
    path: PATH.USER.SUPPORT_PAGE,
    title: 'Support',
  },
  {
    path: PATH.USER.SUBSCRIPTIONS_PAGE,
    title: 'Subscriptions',
  },
] as const

export const footerLinks = [
  {
    heading: 'Home',
    navigation: [
      {
        title: 'Categories',
        link: '/',
      },
      {
        title: 'Devices',
        link: '/',
      },
      {
        title: 'Pricing',
        link: '/',
      },
      {
        title: 'FAQ',
        link: '/',
      },
    ],
  },
  {
    heading: 'Movies',

    navigation: [
      {
        title: 'Popular',
        link: '/',
      },
      {
        title: 'New Release',
        link: '/',
      },
      {
        title: 'Trending',
        link: '/',
      },
      {
        title: 'Genres',
        link: '/',
      },
    ],
  },
  {
    heading: 'Shows',

    navigation: [
      {
        title: 'Genres',
        link: '/',
      },
      {
        title: 'Trending',
        link: '/',
      },
      {
        title: 'New Release',
        link: '/',
      },
      {
        title: 'Popular',
        link: '/',
      },
    ],
  },
  {
    heading: 'Support',

    navigation: [
      {
        title: 'Contact Us',
        link: '/',
      },
    ],
  },
  {
    heading: 'Subscription',

    navigation: [
      {
        title: 'Plans',
        link: '/',
      },
      {
        title: 'Features',
        link: '/',
      },
    ],
  },
  {
    heading: 'Connect With Us',

    navigation: [
      {
        title: 'Facebook',
        link: 'https://www.facebook.com/vanhai0610/',
      },
      {
        title: 'Twitter',
        link: '/',
      },
      {
        title: 'Instagram',
        link: '/',
      },
    ],
  },
] as const
