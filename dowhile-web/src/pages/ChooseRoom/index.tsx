import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';

import {
  Container,
} from './styles';

interface RoomProps {
  name: string
  id: string
}

export function ChooseRoom() {
  const [rooms, setRooms] = useState<RoomProps[]>([]);

  useEffect(() => {
    async function getRooms() {
      const { data } = await api.get<RoomProps[]>('/rooms');

      setRooms(data);
    }

    getRooms();
  }, []);

  return (
    <Container>
      <ul>
        {rooms.map((room) => (
          <>
            <Link key={room.id} to={`/rooms/${room.id}`}>{room.name}</Link>
            <br />
            <br />
          </>
        ))}
      </ul>
    </Container>
  );
}
