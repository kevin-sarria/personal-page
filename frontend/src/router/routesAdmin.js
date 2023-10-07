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
    },
    {
        path: '/technologies',
        Template: AccessPrivateTemplate,
        Component: ProjectsPage
    },
    {
        path: '/configuration',
        Template: AccessPrivateTemplate,
        Component: ProjectsPage
    }
]