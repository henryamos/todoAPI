import { Router } from "express";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todo.js";


//Create router //
const todoRouter = Router();
//Adding 
todoRouter.post('/todos',addTodo)
//Getting 
todoRouter.get('/todos',getTodos)
//Updating 
todoRouter.patch('/todos/:id',updateTodo)
//deleting 
todoRouter.delete('/todos/:id',deleteTodo)

// exporting router //
export default todoRouter