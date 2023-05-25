import {Router} from 'express';
//import { getUser, getUsers, postUser, putUser,deleteUser,enableOPrDisableUser } from '../controllers/usersController';
import { getUser, getUsers, postUser, putUser,deleteUser,enableOPrDisableUser } from '../controllers/psUsersControllers';
 
const router = Router();

router.get('/',getUsers);
router.get('/:id',getUser);
router.post('/',postUser);
router.put('/:id',putUser);
router.delete('/:id', deleteUser);
router.patch('/:id', enableOPrDisableUser);


export default router;
