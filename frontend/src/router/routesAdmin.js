import { lazy } from "react";
import { AccessPrivateTemplate, DashboardPage, ProjectsPage, TechnologiesPage } from "../pages";


const Dashboard = lazy( () => import('../pages/accessPrivate/dashboard/DashboardPage') );
const Projects = lazy( () => import('../pages/accessPrivate/projects/ProjectsPage') );
const Technologies = lazy( () => import('../pages/accessPrivate/technologies/TechnologiesPage') );
const Configuration = lazy( () => import('../pages/accessPrivate/dashboard/DashboardPage') );

export const routesAdmin = [
    {
        path: '/dashboard',
        Template: AccessPrivateTemplate,
        Component: Dashboard
    },
    {
        path: '/projects',
        Template: AccessPrivateTemplate,
        Component: Projects
    },
    {
        path: '/technologies',
        Template: AccessPrivateTemplate,
        Component: Technologies
    },
    {
        path: '/configuration',
        Template: AccessPrivateTemplate,
        Component: Configuration
    }
]