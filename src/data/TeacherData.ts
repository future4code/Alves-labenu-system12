import Teacher from "../model/Teacher"
import BaseDataBase from "./BaseDataBase"

class TeacherData extends BaseDataBase {

    async insertTeacher(teacher: Teacher) : Promise<void> {
        await this.getConnection()
        .insert({
            id: teacher.getId(),
            name: teacher.getName(),
            email: teacher.getEmail(),
            birth_date: teacher.getBirthDate(),
            class_id: teacher.getClassId()
        })
        .into("LS_TEACHER")
    }


    async insertTeacherSpecialty(teacher: Teacher) : Promise<void> {
        // Falta acertar pegar esse ID direito !!
        const specialtyId = await this.getConnection()
        .select("id")
        .from("LS_SPECIALTY")
        .where("name",teacher.getSpecialty())

        await this.getConnection()
        .insert({
            teacher_id: teacher.getId(),
            specialty_id: specialtyId
        })
    }

}

export default TeacherData