export class PersonaModel {
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    constructor(data?: Partial<PersonaModel>) {
        this.nombre = data?.nombre || "";
        this.apellido_paterno = data?.nombre || "";
        this.apellido_materno = data?.nombre || "";
    }
}