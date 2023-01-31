import { useState } from "react";

interface Modal {
    iconFA: string;
    title: string;
    body: any;
    footer?: any;
    on: boolean;
}
// const [state , setState] = useState();

function OpenModal(props: { modal: Modal, setOff?: any}) {
    return <> {props.modal.on &&
        <div id="modal-overlay">
            <div id="modal-base">
                <div id="modal-head">
                    <div>
                        <div className="modal-head">
                            <i className={props.modal.iconFA + " me-2 fa-lg fa-bold"}></i>
                            <span className="fw-bold fs-5">
                                {props.modal.title}</span>
                        </div>
                    </div>
                    <div id="close-modal">
                        <button className="btn btn-pill"><span className="fw-bold">X</span></button>
                    </div>
                </div>
                <div id="modal-body">
                    {props.modal.body}
                </div>
                <div id="modal-footer"></div>
            </div>
        </div >
    }</>
}

export default OpenModal;