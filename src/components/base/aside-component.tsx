import { url } from "inspector"
import React, { ReactNode, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { rutas } from "../../router/router"
import imagen from "../../shared/img/opensource.png";
export const AsideComponent = () => {

    function getLink(data: Array<any>, data2?: any, nivel: number = 1): ReactNode {
        return data.map((e: any) => {
            if (!e.path) return;
            let resul = (
                <div className="p-3 div-aside-link">
                    {/* <a href={"#id_"+ e.path+"_"+nivel}> */}
                    <Link to={data2?.path ? `${data2.path + "/" + e.path}` : e.path} className="text-white aside-link">
                        <i className="fa-solid fa-house me-2"></i>{e.path}</Link>
                    {/* {e.children && <div id={"id_" + e.path + "_" + nivel}>{getLink(e.children, e, nivel + 1)}</div>} */}
                    {/* </a> */}
                </div >)
            // console.log(resul)
            return resul
        })
    }


    return (
        <aside className="d-flex w-100 flex-column">
            <div className="aside-logo mb-3">
                <Link to="/home">
                <img className="img-logo" src={imagen} alt="" />
                </Link>
            </div>
            <div className="p-3 div-aside-link">
                <Link to="/home" className="text-white aside-link">
                    <i className="fa-solid fa-house me-2"></i>Home</Link>
                <div id="hide_1" >
                    <div className="p-3 div-aside-link">
                        <Link to="/home/add" className="text-white aside-link">
                            <i className="fa-solid fa-house me-2"></i>Add
                        </Link>
                    </div>
                    <div className="p-3 div-aside-link">
                        <Link to="/home/list" className="text-white aside-link">
                            <i className="fa-solid fa-house me-2"></i>List
                        </Link>
                    </div>
                </div>
            </div>
            <div className="p-3 div-aside-link">
                <Link to="/table" className="text-white aside-link">
                    <i className="fa-solid fa-house me-2"></i>Table</Link>
                <div id="hide_1" className="hidden">
                    <div className="p-3 div-aside-link">
                        <Link to="/add" className="text-white aside-link">
                            <i className="fa-solid fa-house me-2"></i>Add2
                        </Link>
                    </div>
                    <div className="p-3 div-aside-link">
                        <Link to="/list" className="text-white aside-link">
                            <i className="fa-solid fa-house me-2"></i>List2
                        </Link>
                    </div>
                </div>
            </div>
            <div className="p-3 div-aside-link">
                <Link to="/person" className="text-white aside-link">
                    <i className="fa-solid fa-house me-2"></i>Person
                </Link>
            </div>
        </aside>
    );
}