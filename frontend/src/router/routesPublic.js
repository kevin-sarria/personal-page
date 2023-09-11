import { ForgotPasswordPage, HomePage, Login } from "../pages"


export const routesPublic = [
    {
        path: '/',
        Component: HomePage
    },
    {
        path: '/login',
        Component: Login
    },
    {
        path: '/recuperar-cuenta',
        Component: ForgotPasswordPage
    }
]
