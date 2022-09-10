import ClassController from "./endpoints/ClassController";
import TeacherController from "./endpoints/TeacherController";
import app from "./app";

const classController = new ClassController();
const teacherController = new TeacherController();

app.post("/class", classController.createClass);
app.get("/class", classController.getClass);
app.put("/class/:id", classController.editClass);

app.post("/teacher", teacherController.createTeacher);
app.get("/teacher", teacherController.getAllTeachers);
app.put("/teacher/:id", teacherController.editTeacherClass)