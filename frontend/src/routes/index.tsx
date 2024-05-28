import { useLocation, useRoutes } from 'react-router-dom'

import PATH from '~/constants/paths'
import { DefaultLayout } from '~/layouts'
import { HomePage, MoviesOpenPage, MoviesShowsPage, NotFound } from '~/pages'

const Routes = () => {
  const location = useLocation()

  const getHeaderPosition = () => {
    if (location.pathname === PATH.USER.HOME) {
      return 'fixed'
    }
    return 'relative'
  }

  const element = useRoutes([
    {
      element: <DefaultLayout headerPosition={getHeaderPosition()} />,
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
