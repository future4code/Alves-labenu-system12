import ClassController from "./endpoints/ClassController";
import app from "./app";

const classController = new ClassController();

app.post("/class", classController.createClass);
app.get("/class", classController.getClass);
app.put("/class/:id", classController.editClass);
