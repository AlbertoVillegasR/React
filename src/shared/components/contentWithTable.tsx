import { useEffect, useState } from "react";
import WidgetButtonComponent from "../widgets/button";

interface TableProps {
  tableprops: Props[];
  data: any[];
  onClick: any;
  actions: ActionButtons[];
}

interface Props {
  header: string;
  field: string;
}
interface ActionButtons {
  iconFA: string;
  tooltip: string;
  className: string;

}

function ContentWithTable(props: TableProps) {
  const [datos, setDatos] = useState(props.data)
  useEffect(() => {
    setDatos(props.data);
  }, []);
  return (
    <div className="table-responsive px-0">
      <table className="table table-striped table-hover align-middle">
        <thead className="table-light">
          <tr key={"table_tr_header"}>
            {props.tableprops.map((e, i) => {
              return <th scope="col" key={"table_th_header_" + i}>{e.header}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {datos.length > 0 ?
            datos.map((dato, idato) => {
              let value = "";
              return <tr key={"table_tr_" + idato}>{
                props.tableprops.map((prop) => {
                  if (prop.field === "actions") {
                    return <td key={"table_actions"} className="text-nowrap">
                      {props.actions.map((x, ix) => {
                        return <a className={x.className + " me-2"} title={x.tooltip} key={"table_action_a_" + ix} onClick={(e) => props.onClick(dato)}>
                          <i className={x.iconFA} key={"table_action_i_" + ix}></i>
                        </a>
                      })}

                    </td>
                  }
                  value = dato[prop.field] || "";
                  console.log(idato);

                  return <td key={"td_" + idato}>{value}</td>;;
                })
              }</tr>;
            })
            :
            <tr><td colSpan={props.tableprops.length} className="text-center">Sin Datos</td></tr>
          }
        </tbody>
      </table>
    </div>
  );
}

export default ContentWithTable;
