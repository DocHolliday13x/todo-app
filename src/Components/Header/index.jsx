import React, { useContext } from 'react';
import { ModeContext } from '../../Context/Mode';
import { ActionIcon } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export default function Header() {
  const { colorScheme, toggleColorScheme } = useContext(ModeContext);

  const dark = colorScheme === 'dark';

  return (
    <header>
      <h1>Todo App</h1>
      
      {/* Render the dark/light mode toggle button */}
      <ActionIcon
        variant="outline"
        color={dark ? 'yellow' : 'blue'}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
      </ActionIcon>
    </header>
  );
}






// const Header = (props) => {
//   return (
//     <header>
//       <h1>My Todo List</h1>
//     </header>
//   );
// }





