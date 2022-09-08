import { Request, Response } from "express";
import ClassData from "../data/ClassData";
import Class from "../model/Class";

class ClassController {
  async createClass(req: Request, res: Response) {
    try {
      const { name, unit } = req.body;

      if (!name) {
        throw new Error("O nome e o módulo devem ser passados!");
      }

      const id = Date.now().toString();

      const classe = new Class(id, name, unit);

      const classData = new ClassData();

      const answer = await classData.insertClass(classe);

      res.status(201).send({ message: answer });
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }

  async getClass(req: Request, res: Response) {
    try {
      const classData = new ClassData();

      const classes = await classData.selectClass();

      if (!classes.length) {
        throw new Error("Não há nenhuma classe cadastrada!");
      }
      res.status(200).send(classes);
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }
  async editClass(req: Request, res: Response) {
    try {
      const { name, unit } = req.body;
      const { id } = req.params;

      const classe = new Class(id, name, unit);

      const classData = new ClassData();
      const answer = await classData.updateClass(classe);

      res.status(201).send({ message: answer });
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }
}

export default ClassController;
