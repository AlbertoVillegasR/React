import { useContext, useState } from "react";
import ContentWithTable from "../../shared/components/contentWithTable";
import { context } from "../../shared/components/ContextComponent";
import { fakeData } from "../../shared/fakeData/fakeData";
import ContainerBase from "../base/container-base";

const table = {
    tableprops: [
        { header: "#", field: "userId" },
        { header: "ID", field: "id" },
        { header: "Titulo", field: "title" },
        { header: "Body", field: "body" },
        { header: "Acciones", field: "actions" },
    ],
    data: fakeData,
    actions: [
        {
            tooltip: "Agregar",
            className: "btn btn-success",
            iconFA: "fa fa-plus"
        },
        {
            tooltip: "Eliminar",
            className: "btn btn-danger",
            iconFA: "fa fa-trash"
        },
    ]
}

const TableComponent = (props: any) => {
    const { propsModal, setPropsModal } = useContext(context)
    const onClick = () => {
        console.log("XDD")
    }
    const handlerButton = (e: any) => {
        setPropsModal({
            ...propsModal,
            title: "Hola",
            body: <>
                <div className="row mx-5">
                    <h2>Hola Mundo</h2>
                    <button>Hola</button>
                </div>
            </>,
            footer:
                <>
                    <span className="text-danger col-auto">* Campos Requeridos</span>
                    <div className="col"></div>
                    <div className="col d-flex justify-content-end">
                        <a className="btn btn-success me-2" onClick={onClick}>
                            <i className="fa-solid fa-thumbs-up"></i>
                        </a>
                        <a className="btn btn-danger d-flex align-items-center" onClick={onClick}>
                            <i className="fa fa-trash me-2"></i>
                            <span className=""> Eliminar</span>
                        </a>
                    </div>
                </>,
            on: true
        })
    }
    return (
        <div className="col ">
            <div className="row mx-2">
                <div className="col-md-12">
                    <h1 className="text-center">Personas</h1>
                </div>
                <ContentWithTable tableprops={table.tableprops} data={table.data} actions={table.actions} onClick={handlerButton} />
            </div>
        </div>
    )
}

export default TableComponent;