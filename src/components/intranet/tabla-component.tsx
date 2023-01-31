import { useState } from "react";
import ContentWithTable from "../../shared/components/contentWithTable";
import { fakeData } from "../../shared/fakeData/fakeData";
import  ContainerBase  from "../base/container-base";

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
    const [state , setState] = useState(false)
    const handlerButton = (e: any) => {
        setState(true)
        // ContainerBase({
        //     title: "Hola Mundo",
        //     iconFA: "fa fa-trash",
        //     body: <h2></h2>,
        //     on: true
        // })
    }
    console.log("Inicio Tablax")

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