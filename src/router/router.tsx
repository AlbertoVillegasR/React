import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ContainerBase from "../components/base/container-base";
import AddPersonComponent from "../components/intranet/addPerson-component";
import TableComponent from "../components/intranet/tabla-component";


export const rutas = [
    {
        
        path: "/",
        element: <ContainerBase />,
        children: [
            {
                index: true,
                element: <Navigate to="/home" />
            },
            {
                path: "home",
                children: [
                    { path: "", element: <h2>Home Component</h2> },
                    { path: "add", element: <AddPersonComponent /> },
                    { path: "list", element: <TableComponent /> }
                ]
            }
        ]
    },
]
const Router = createBrowserRouter(rutas)
export default Router;