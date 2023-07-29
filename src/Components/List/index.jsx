import { SettingsContext } from '../../Context/Settings';
import { useContext, useState } from 'react';
import { Badge, Card, Group, Pagination, Text, CloseButton } from '@mantine/core';
import { If, Then, Else } from "react-if"; 
import Auth from '../Auth';
import { AuthContext } from '../../Context/Auth';

function List({ list, toggleComplete, deleteItem }) {
  
  const { pageItems, showCompleted } = useContext(SettingsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoggedIn, can } = useContext(AuthContext);

  const displayItems = showCompleted
    ? list
    : list.filter((items) => !items.complete);

  const pages = Math.ceil(displayItems.length / pageItems);
  const firstItem = (currentPage - 1) * pageItems;
  const lastItem = currentPage * pageItems;
  const finalItems = displayItems.slice(firstItem, lastItem);

  return (
    <>
      {finalItems.map(item => (
        <Card mb="sm" shadow="md" withBorder key={item._id}>

          <Card.Section withBorder>
            <Group position="apart">
              <Group>
                <If condition={isLoggedIn && can('update')}>
                  <Then>
                    <Badge
                      onClick={() => toggleComplete(item._id)}
                      color={item.complete ? 'red' : 'green'}
                      variant="filled"
                      m="3px"
                    >
                      {item.complete ? 'Complete' : 'Pending'}
                    </Badge>
                  </Then>
                  <Else>
                    <Badge
                      color={item.complete ? 'red' : 'green'}
                      variant="filled"
                      m="3px"
                    >
                      {item.complete ? 'Complete' : 'Pending'}
                    </Badge>
                  </Else>
                </If>
                <Text data-testid='item-assignee-test' >{item.assignee}</Text>
              </Group>

              <Auth capability="delete">
                <CloseButton
                  onClick={() => deleteItem(item._id)}
                  title="Close Todo Item"
                />
              </Auth>

            </Group>
          </Card.Section>
          <Text data-testid='item-text-test' mt="sm" align="left">{item.text}</Text>
          <Text data-testid='item-difficulty-test' align="right"><small>Difficulty: {item.difficulty}</small></Text>
        </Card >
      ))
      }
      <Pagination
        value={currentPage}
        onChange={setCurrentPage}
        total={pages} />
    </>
  )
}


export default List;






