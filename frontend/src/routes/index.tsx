import { useRoutes } from 'react-router-dom'

import PATH from '~/constants/paths'
import { DefaultLayout } from '~/layouts'

import { HomePage, MoviesOpenPage, MoviesShowsPage, NotFound } from '~/pages'

const Routes = () => {
  const element = useRoutes([
    {
      element: <DefaultLayout />,
      children: [
        {
          index: true,
          path: PATH.USER.HOME,
          element: <HomePage />,
        },
        {
          path: PATH.USER.MOVIES_OPEN_PAGE,
          element: <MoviesOpenPage />,
        },
        {
          path: PATH.USER.MOVIES_SHOWS_PAGE,
          element: <MoviesShowsPage />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ])
  return element
}

export default Routes
