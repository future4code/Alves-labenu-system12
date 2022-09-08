import Class from "../model/Class";
import BaseDataBase from "./BaseDataBase";

class ClassData extends BaseDataBase {
  async insertClass(classe: Class): Promise<void> {
    await this.getConnection()
      .insert({
        id: classe.getId(),
        name: classe.getName(),
        unit: classe.getUnit(),
      })
      .into("LS_CLASS");
  }

  async selectClass() {
    const result = await this.getConnection()
      .select("*")
      .from("LS_CLASS")
      .where("unit", "<>", "0");

    return result;
  }

  async updateClass(classe: Class): Promise<void> {
    await this.getConnection()
      .where("id", classe.getId())
      .update({
        unit: classe.getUnit(),
      })
      .into("LS_CLASS");
  }
}
export default ClassData;
