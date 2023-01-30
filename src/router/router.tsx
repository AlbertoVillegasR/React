import path from "path";
import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ContainerBase from "../components/base/container-base";
import AddPersonComponent from "../components/intranet/addPerson-component";
import TableComponent from "../components/intranet/tabla-component";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <ContainerBase />,
        children:[
            {
                index:true,
                element:<Navigate to="/home"></Navigate>
            },
            {
                path:"home",
                element: <h2>Home Component</h2>
            },
            {
                path: "table",
                element: <TableComponent />
            },
            {
                path: "add-person",
                element: <AddPersonComponent />
            }
        ]
    },
])
export default Router;