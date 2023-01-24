import { Router } from 'express';
import { postTodoValidationRules, putTodoValidationRules, handleInputErrors } from './modules/validators';
import { createTodo, deleteTodo, getTodo, getTodos, updateTodo } from './handlers/todo';
import { errorHandling } from './modules/error';

const router = Router();

router.get('/todo', getTodos);
router.get('/todo/:id', getTodo);
router.post('/todo', postTodoValidationRules(), handleInputErrors, createTodo);
router.put('/todo/:id', putTodoValidationRules(), handleInputErrors, updateTodo);
router.delete('/todo/:id', deleteTodo);

router.use(errorHandling);

export default router;

