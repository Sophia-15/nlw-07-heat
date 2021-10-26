import prismaClient from '../prisma';

import { io } from '../app';

class CreateMessageService {
  async execute(text: string, user_id: string, room_id: string) {
    const message = await prismaClient.message.create({
      data: {
        text,
        user_id,
        room_id,
      },
      include: {
        user: true,
        room: true,
      },
    });

    const infoWS = {
      text: message.text,
      user_id: message.user_id,
      created_at: user_id,
      user: {
        name: message.user.name,
        avatar_url: message.user.avatar_url,
      },
      room_id: message.room_id,
    };

    io.emit('new_message', infoWS);

    return message;
  }
}

export { CreateMessageService };
