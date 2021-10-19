import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { GetLastThreeMessagesController } from './controllers/GetLastThreeMessagesController';
import { ProfileUserController } from './controllers/ProfileUserController';
import { ensureAuthentication } from './middleware/ensureAuthentication';

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);

router.post('/message', ensureAuthentication, new CreateMessageController().handle);

router.get('/messages/last3', new GetLastThreeMessagesController().handle);

router.get('/profile', ensureAuthentication, new ProfileUserController().handle);

export { router };
