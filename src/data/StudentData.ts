import BaseDataBase from "./BaseDataBase"

class StudentData extends BaseDataBase{

    async searchStudantForEmail(email:string){

        const result = await this.getConnection().select("*").from("LS_STUDENT")
        .where({email})

        return result[0]

    }

}

export default StudentData