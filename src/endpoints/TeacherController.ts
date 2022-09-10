import { Request, Response } from "express"
import ClassData from "../data/ClassData"
import TeacherData from "../data/TeacherData"
import Teacher from "../model/Teacher"

class TeacherController {

    async createTeacher(req: Request, res: Response) {
        try {
            const { name, email, birth_date, specialty } = req.body

            if (!name || !email || !birth_date || !specialty) {
                throw new Error("Todos os dados devem ser inseridos!")
            }

            const id = Date.now().toString()

            const classId = "0" // Coloquei o id de "Nenhuma turma" como default

            const teacher = new Teacher(id, name, email, birth_date, classId, specialty )

            const teacherData = new TeacherData()

            await teacherData.insertTeacher(teacher)

            await teacherData.insertTeacherSpecialty(teacher)

            res.status(201).end();

        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }

    async getAllTeachers(req: Request, res: Response) {
        try {
            const teacherData = new TeacherData()
            const teachers = await teacherData.selectTeachers()

            if(!teachers.length) {
                throw new Error("Não há nenhum docente cadastrado!")
            }
            res.status(200).send(teachers)
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }

    // Tá dando erro, falta isso só 
    async editTeacherClass(req: Request, res: Response) {
        try {
            const { classId } = req.body
            const id  = req.params.id

            const teacherData = new TeacherData()

            const response = await teacherData.updateTeacherClass(id, classId)

            res.status(200).send({ message: response })

        } catch (error: any) {
            res.status(500).send({ message: error.message });
        }
    }
}

export default TeacherController