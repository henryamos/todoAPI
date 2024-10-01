export const addTodo =(req,res,next)=>{
res.json('Todo was added')
}
export const getTodos =(req,res,next)=>{
    res.json('All Todos');
}

export  const updateTodo =(req,res,next)=>{
res.json('Todo udpated');
}
export const deleteTodo =(req,res,next)=>{
    res.json('Todo deleted');
}