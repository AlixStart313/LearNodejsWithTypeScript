import {Router} from 'express';
import { getUser, getUsers, postUser, putUser } from '../controllers/usersController';
import { deleteUser } from '../controllers/usersController';
 

const router = Router();

router.get('/',getUsers);
router.get('/:id',getUser);
router.post('/',postUser);
router.put('/',putUser);
router.delete('/:id', deleteUser);


export default router;
