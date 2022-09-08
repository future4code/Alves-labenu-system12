import User from "./User";
import { Specialty } from "../types";

class Teacher extends User{
    private specialty: Specialty

    constructor(
        id: string,
        name: string,
        email: string,
        birth_date: string,
        class_id: string,
        specialty: Specialty
    ) {
        super(id, name, email, birth_date, class_id)
        this.specialty = specialty
    }

    public getSpecialty(): string {
        return this.specialty
    }
}

export default Teacher