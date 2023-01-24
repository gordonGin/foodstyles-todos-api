import prisma from "../db";


//Get All
export const getTodos = async (req, res) => {
    const { todos } = await prisma.user.findUnique({
        where: {
            id: req.user.id,
        },
        include: {
            todos: true
        }
    });
    res.json({ data: todos })
}

//Get one
export const getTodo = async (req, res) => {
    const id = req.params.id;
    const todo = await prisma.todo.findFirst({
        where: {
            id,
            belongsToId: req.user.id,
        },
    });
    res.json({ data: todo })
}

//Create Todo
export const createTodo = async (req, res, next) => {
    try {
        const todo = await prisma.todo.create({
            data: {
                description: req.body.description,
                belongsToId: req.user.id,
            }
        })
        res.json({ data: todo });
    } catch (e) {
        next(e);
    }
}

//Update todo
export const updateTodo = async (req, res, next) => {
    try {
        const updated = await prisma.todo.update({
            where: {
                id_belongsToId: {
                    id: req.params.id,
                    belongsToId: req.user.id
                }
            },
            data: {
                description: req.body.description,
                status: req.body.status,
            }
        })
        res.json({ data: updated });
    } catch (e) {
        next({ ...e, type: 'input' });
    }
}
//Delete Todo
export const deleteTodo = async (req, res, next) => {
    try {
        const deleted = await prisma.todo.delete({
            where: {
                id_belongsToId: {
                    id: req.params.id,
                    belongsToId: req.user.id
                }
            },
        });
        res.json({ data: deleted });
    } catch (e) {
        next(e);
    }
}