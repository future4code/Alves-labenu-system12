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

        const specialtyId = await this.getConnection()
        .select("id")
        .from("LS_SPECIALTY")
        .where("name",teacher.getSpecialty())

        await this.getConnection()
        .insert({
            id: Date.now().toString(),
            teacher_id: teacher.getId(),
            specialty_id: specialtyId[0].id
        }).into("LS_TEACHER_SPECIALTY")
    }

    async selectTeachers() {
        const result = await this.getConnection().select("*").from("LS_TEACHER")

        return result
    }

    async updateTeacherClass(id: string, classId: string) : Promise<void> {
        await this.getConnection()
        .update({class_id: classId})
        .into("LS_TEACHER")
        .where({ id })
    }

}

export default TeacherData