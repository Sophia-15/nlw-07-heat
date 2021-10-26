import { Request, Response } from 'express';
import { GetLastThreeMessagesFrontService } from '../services/GetLastThreeMessagesFrontService';

class GetLastThreeMessagesFrontController {
  async handle(request: Request, response: Response) {
    const { room_id } = request.params;

    const service = new GetLastThreeMessagesFrontService();

    const result = await service.execute(room_id);

    response.json(result);
  }
}

export { GetLastThreeMessagesFrontController };
