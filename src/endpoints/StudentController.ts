import StudentData from "../data/StudentData";
import { Request,Response } from "express";
import ClassData from "../data/ClassData";

class StudentController {
    async createStudant(req: Request, res: Response){
    try {
        const { name,email,birth_date,class_id } = req.body
        if(!name || !email || !birth_date || !class_id){
            throw new Error("Todos os dados devem ser inseridos!")
        }

        const studantData = new  StudentData()
        const classData = new ClassData
        const ifEmail = await studantData.searchStudantForEmail(email)
        if(ifEmail){
            throw new Error("Esse email já foi cadastrado anteriormente no sistema!")
        }

        const ifID = await classData.searchClassById(class_id)
        if(!ifID){
            throw new Error("Turma inválida!")

        }
    }
        
      catch (error:any) {
        res.status(500).send({ message: error.message });
        
    }

}
}

export default StudentController