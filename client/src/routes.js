import Auth from "./pages/Auth"
import List from "./pages/List"
import { LIST_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: LIST_ROUTE,
        Component: List
    }
]

export const publicRoutes = [
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },

    {
        path: LOGIN_ROUTE,
        Component: Auth
    }
]