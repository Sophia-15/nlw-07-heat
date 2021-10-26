import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { CreateRoomController } from './controllers/CreateRoomController';
import { GetLastThreeMessagesController } from './controllers/GetLastThreeMessagesController';
import { GetLastThreeMessagesFrontController } from './controllers/GetLastThreeMessagesFrontController';
import { GetRoomsController } from './controllers/GetRoomsController';
import { ProfileUserController } from './controllers/ProfileUserController';
import { ensureAuthentication } from './middleware/ensureAuthentication';

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);

router.post('/message/:room_id', ensureAuthentication, new CreateMessageController().handle);

router.post('/room', ensureAuthentication, new CreateRoomController().handle);

router.get('/messages/last3', new GetLastThreeMessagesController().handle);

router.get('/messages/last3/:room_id', new GetLastThreeMessagesFrontController().handle);

router.get('/rooms', new GetRoomsController().handle);

router.get('/profile', ensureAuthentication, new ProfileUserController().handle);

export { router };
