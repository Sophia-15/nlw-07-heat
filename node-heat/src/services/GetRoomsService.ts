import prismaClient from '../prisma';

class GetRoomsService {
  async execute() {
    const rooms = await prismaClient.room.findMany();

    return rooms;
  }
}

export { GetRoomsService };
