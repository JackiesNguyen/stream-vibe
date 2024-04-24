import { useRoutes } from 'react-router-dom'

import PATH from '~/constants/paths'
import { HomePage, MoviesOpenPage, MoviesShowsPage, ShowsOpenPage, SubscriptionPage, SupportPage } from '~/pages'
import NotFound from '~/pages/NotFound/NotFound'

const routes = [
  { path: PATH.NOTFOUND, element: <NotFound /> },
  { path: PATH.USER.HOME, element: <HomePage /> },
  { path: PATH.USER.MOVIES_OPEN_PAGE, element: <MoviesOpenPage /> },
  { path: PATH.USER.MOVIES_SHOWS_PAGE, element: <MoviesShowsPage /> },
  { path: PATH.USER.SHOWS_OPEN_PAGE, element: <ShowsOpenPage /> },
  { path: PATH.USER.SUBSCRIPTION_PAGE, element: <SubscriptionPage /> },
  { path: PATH.USER.SUPPORT_PAGE, element: <SupportPage /> },
]

const Routes = () => {
  const element = useRoutes(
    routes.map((route) => ({
      path: route.path,
      element: route.element,
    })),
  )
  return element
}

export default Routes
