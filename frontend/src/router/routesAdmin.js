import { AccessPrivateTemplate, DashboardPage, ProjectsPage } from "../pages"


export const routesAdmin = [
    {
        path: '/dashboard',
        Template: AccessPrivateTemplate,
        Component: DashboardPage
    },
    {
        path: '/projects',
        Template: AccessPrivateTemplate,
        Component: ProjectsPage
    }
]