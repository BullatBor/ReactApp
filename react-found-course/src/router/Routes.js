import About from "../pages/About";
import LogIn from "../pages/LogIn";
import PostIdPage from "../pages/PostIdPages";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {path: "/about", component: About, exact: true},
    {path: "/posts", component: Posts, exact: true},
    {path: "/Posts/:id", component: PostIdPage, exact: true}

]

export const publicRoutes = [
    {path: "/login", component: LogIn, exact: true}
]