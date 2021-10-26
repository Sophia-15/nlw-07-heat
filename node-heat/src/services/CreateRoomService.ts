import prismaClient from '../prisma';

class CreateRoomService {
  async execute(name: string) {
    const room = await prismaClient.room.create({
      data: {
        name,
      },
    });

    return room;
  }
}

export { CreateRoomService };
