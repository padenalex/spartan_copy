import { AuthRoutes } from '@/app/auth/routes'
import { AccountRoutes } from '@/app/account/routes'
import { ActivityRoutes } from '@/app/activity/routes'
import { DevelopersRoutes } from '@/app/developers/routes'
import { InvitesRoutes } from '@/app/invites/routes'
import { ManagersRoutes } from '@/app/managers/routes'
import { NotFoundRoutes } from '@/app/not-found/routes'
import { NotificationsRoutes } from '@/app/notifications/routes'
import { OverviewRoutes } from '@/app/overview/routes'
import { ProfileRoutes } from '@/app/profile/routes'
import { ServicesRoutes } from '@/app/services/routes'
import { StaticRoutes } from '@/app/static/routes'
import { StatisticsRoutes } from '@/app/statistics/routes'

const routes = [
  ...AuthRoutes,
  ...AccountRoutes,
  ...ActivityRoutes,
  ...DevelopersRoutes,
  ...InvitesRoutes,
  ...ManagersRoutes,
  ...NotFoundRoutes,
  ...NotificationsRoutes,
  ...OverviewRoutes,
  ...ProfileRoutes,
  ...ServicesRoutes,
  ...StaticRoutes,
  ...StatisticsRoutes
]

export { routes }
