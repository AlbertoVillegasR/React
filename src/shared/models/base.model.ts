export class BaseModel {
    title: string;
    description: string;
    iconFA: string;
    columns: [];

    constructor(data?: Partial<BaseModel>){
        this.title = data?.title || "";
        this.description = data?.description || "";
        this.iconFA = data?.iconFA || "";
        this.columns = data?.columns || [];
    }
}