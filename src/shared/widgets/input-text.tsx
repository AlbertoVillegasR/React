
// import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import "../shared-css.css"
interface InputFieldProps {
    id: string;
    label: string;
    error?: string;
    getValue: any;
    setValue: any; 
    placeholder?: string;
    className: string;
    inputProps?: unknown;
}
function WidgetInputComponent(props: InputFieldProps) {
    // console.log(props)
    return (
        <div className={'mb-2 ' + props.className}>
            <label className=" d-flex justify-content-left mb-1" >{props.label}
                <label className="text-danger">*</label>
            </label>
            <input type="text" className="input-text" id={props.id} placeholder={props.placeholder} value={props.setValue}
                onChange={(e) => props.getValue(props.id,e.target.value)}></input>
        </div>
    );
}

export default WidgetInputComponent;