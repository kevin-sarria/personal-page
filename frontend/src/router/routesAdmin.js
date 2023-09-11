import { AccessPrivateTemplate, DashboardPage } from "../pages"


export const routesAdmin = [
    {
        path: '/dashboard',
        Template: AccessPrivateTemplate,
        Component: DashboardPage
    },
]