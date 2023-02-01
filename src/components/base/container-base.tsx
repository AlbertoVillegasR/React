import { Outlet } from "react-router-dom";
import { DataContext } from "../../shared/components/ContextComponent";
import OpenModal from "../../shared/components/open-modal";
import { AsideComponent } from "./aside-component";
import { NavbarComponent } from "./navbar-component";

const ContainerBase = () => {
    return (
        <DataContext>
            <div className="d-flex h-100">
                <OpenModal></OpenModal>
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
            </div>
        </DataContext>
    );
}

export default ContainerBase;