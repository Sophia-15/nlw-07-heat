import { Request, Response } from 'express';
import { GetRoomsService } from '../services/GetRoomsService';

class GetRoomsController {
  async handle(request: Request, response: Response) {
    const service = new GetRoomsService();

    const result = await service.execute();

    response.json(result);
  }
}

export { GetRoomsController };
