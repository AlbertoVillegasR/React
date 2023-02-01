import { useContext, useState } from "react";
import { context } from "./ContextComponent";


// const [state , setState] = useState();

function OpenModal() {
    const { propsModal, setPropsModal } = useContext(context)

    const closeModal = () => {
        setPropsModal({
            ...propsModal,
            on: false,
        })
    }

    return <>
        {propsModal.on &&
            <div id="modal-overlay">
                <div id="modal-base">
                    <div id="modal-head">
                        <div>
                            <div className="modal-head">
                                <i className={propsModal.iconFA + " me-2 fa-lg fa-bold"}></i>
                                <span className="fw-bold fs-5">
                                    {propsModal.title}</span>
                            </div>
                        </div>
                        <div id="close-modal">
                            <button className="btn-close" onClick={closeModal}></button>
                        </div>
                    </div>
                    <div id="modal-body">
                        {propsModal.body}
                    </div>
                    <div id="modal-footer">
                        <div className="row mx-1">
                            {propsModal.footer}
                        </div>
                    </div>
                </div>
            </div >
        }
    </>
}

export default OpenModal;