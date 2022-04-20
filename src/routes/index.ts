import { Router } from 'express';
import { handlePostRequest } from '../controllers';
import { validateRequest } from '../middlewares';

const router: Router = Router();

router.post('/search', validateRequest, handlePostRequest);

export default router;
