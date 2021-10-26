import prismaClient from '../prisma';

class GetLastThreeMessagesFrontService {
  async execute(room_id: string) {
    const messages = await prismaClient.message.findMany({
      take: 3,
      orderBy: {
        created_at: 'desc',
      },
      where: {
        room_id,
      },
      include: {
        user: true,
      },
    });

    return messages;
  }
}

export { GetLastThreeMessagesFrontService };
