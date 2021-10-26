import { Request, Response } from 'express';
import { CreateRoomService } from '../services/CreateRoomService';

class CreateRoomController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const service = new CreateRoomService();

    const result = await service.execute(name);

    return response.json(result);
  }
}

export { CreateRoomController };
