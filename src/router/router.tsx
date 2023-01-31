import path from "path";
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
                // element: <h2>Home Component</h2>,
                children: [
                    { path: "", element: <h2>Home Component</h2> },
                    { path: "add", element: <AddPersonComponent /> },
                    { path: "list", element: <TableComponent /> }
                ]
            },
            {
                path: "table",
                element: <TableComponent />,
            },
            {
                path: "person",
                element: <img className="" src="../../src/components/base/opensource.png" alt=""></img>
            }
        ]
    },
]
const Router = createBrowserRouter(rutas)
export default Router;