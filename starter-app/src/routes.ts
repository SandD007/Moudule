// pages
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import Products from "./pages/GetResources";
import User from "./pages/User";
import Resources from "./pages/Resources";
import UserPage from "./pages/Home/components/changeUserIfo";
import UpdateUser from "./pages/UpdateUser/UpdateUser";

// other
import {FC} from "react";
import { title } from "process";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'about-route',
        title: 'Create User',
        path: '/CreateUser',
        enabled: true,
        component: CreateUser
    },
    {
        key: 'resources-route',
        title: 'Resources',
        path: '/resources',
        enabled: true,
        component: Products
    },
    {
        key: 'user-route',
        title: 'User',
        path: '/user/:id',
        enabled: false,
        component: User
    },
    {
        key: 'recres-route',
        title: 'Recres',
        path: '/getSoloRes/:id',
        enabled: false,
        component: Resources
    },
    {
        key: 'userInfo-route',
        title: 'userInfo',
        path: '/userInfo',
        enabled: false,
        component: UserPage
    }
    ,
    {
        key: 'UpdateUser-route',
        title: 'updateUser',
        path: '/updateUser/:id',
        enabled: false,
        component: UpdateUser
    }

]