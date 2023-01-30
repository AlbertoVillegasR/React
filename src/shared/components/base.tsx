import { useState } from "react";
import { BaseModel } from "../models/base.model";
export const useForm = (inputs: BaseModel) => {
    const [input, setInput] = useState(inputs);
    
    const handlerBaseModel=({target}:any) => {
        setInput({...input, [target.name]: target.value})
    }

    return [input, handlerBaseModel, setInput];
}