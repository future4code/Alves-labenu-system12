import ClassController from "./endpoints/ClassController";
import TeacherController from "./endpoints/TeacherController";
import app from "./app";
import StudentController from "./endpoints/StudentController";
import knex from "knex";



export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const classController = new ClassController();
const teacherController = new TeacherController();
const studentController = new StudentController();

app.post("/class", classController.createClass);
app.get("/class", classController.getClass);
app.put("/class/:id", classController.editClass);

app.post("/teacher", teacherController.createTeacher);
app.get("/teacher", teacherController.getAllTeachers);
app.put("/teacher/:id", teacherController.editTeacherClass);

app.post("/create-studant",studentController.createStudant)