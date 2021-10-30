import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';

import { useTheme } from '../../hooks/useTheme';
import { api } from '../../services/api';

import {
  Container,
  Button,
} from './styles';

interface RoomProps {
  name: string
  id: string
}

export function ChooseRoom() {
  const { title, logo, colors } = useContext(ThemeContext);
  const { toggleTheme } = useTheme();

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
      <div className="rooms">
        <header>
          <img src={logo} alt="Logo DoWhile 2021" />

          <Switch
            onChange={toggleTheme}
            checked={title === 'light'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            onColor={colors.pink}
            offColor={colors.yellow}
            offHandleColor={colors.yellow}
            onHandleColor={colors.pink}
          />
        </header>

        <ul className="room-list">
          {rooms.map((room) => (
            <li key={room.id}>
              {room.name}
              <Button to={`/rooms/${room.id}`}>Entrar</Button>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
