import { useState } from "react";
import { Outlet } from "react-router-dom";
import OpenModal from "../../shared/components/open-modal";
import { AsideComponent } from "./aside-component";
import { NavbarComponent } from "./navbar-component";


// const ContainerBase = (props?: any) => {
//     // const [openModal, setOpenModal] = useState(false);
//     const [propsModal, setPropsModal] = useState<any>({
//         title: props.title||"",
//         iconFA: props.iconFA||"fa fa-check",
//         body: props.body||<></>,
//         on: false
//     });
//     return ContainerBaseWithOutModal(propsModal)
// }



const ContainerBase = (props: any) => {
    return (< div className="d-flex h-100">
        <OpenModal modal={props}></OpenModal>
        <div id="aside" className="mr-auto" style={{ width: "250px" }}>
            <AsideComponent />
        </div>
        <div className="d-flex flex-column w-100">
            <div id="navbar" className="mr-auto" style={{ height: "55px" }}>
                <NavbarComponent />
            </div>
            <div className="mr-auto d-flex h-100 overflow-auto">
                <Outlet></Outlet>
                {/* <h1 className="m-auto text-white" >Hola Mundo</h1> */}
            </div>
        </div>
    </div>);
}


export default ContainerBase;