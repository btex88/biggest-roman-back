import { Router } from 'express';
import { handlePostRequest, handleError } from '../controllers';

const router: Router = Router();

router.post('/search', handlePostRequest, handleError);

export default router;
