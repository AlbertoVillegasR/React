import { useState } from "react";
import { fakeData } from "../../shared/fakeData/fakeData";
import { PersonaModel } from "../../shared/models/persona.model";
import WidgetButtonComponent from "../../shared/widgets/button";
import WidgetInputComponent from "../../shared/widgets/input-text";

const AddPersonComponent = () => {
    // let persona = new PersonaModel();
    interface Persona {
        nombre?: string;
        apellido_paterno?: string;
        apellido_materno?: string;
    }
    const [persona2, setPersona] = useState(new PersonaModel())
    // const [persona2, setPersona] = useState<Persona>({})

    function handleInputs(key: string, value: any) {
        setPersona({ ...persona2, [key]: value })
    }

    function btn(e:any) {
        e.preventDefault();
        setPersona(new PersonaModel())
    }

    return (
        <div className="col ">
            <div className="row mx-2">
                <div className="col-md-12">
                    <h1 className="mx-auto">Agregar Persona</h1>
                </div>
                <form>
                    <div className="col row">
                        <WidgetInputComponent id="nombre" label="Nombre" className="col-md-4" getValue={handleInputs}
                            setValue={persona2.nombre} />
                        <WidgetInputComponent id="apellido_paterno" label="Apellido Paterno" className="col-md-4"
                            getValue={handleInputs} setValue={persona2.apellido_paterno} />
                        <WidgetInputComponent id="apellido_materno" label="Apellido Materno" className="col-md-4"
                            getValue={handleInputs} setValue={persona2.apellido_materno} />
                        <WidgetButtonComponent className="btn btn-primary col-md-4" label="Log" name="btn_log" onClick={btn} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddPersonComponent;