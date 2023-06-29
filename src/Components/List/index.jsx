import { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { Pagination, Card, Button, Text } from '@mantine/core';

function List ({list, toggleComplete}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageItems, displayCompleted] = useContext(SettingsContext);
  
  const displayItems = displayCompleted ? list : list.filter(item => !item.complete);

  const totalPages = Math.ceil(displayItems.length / pageItems);

  const start = (currentPage - 1) * pageItems;
  const end = start + pageItems;
  const page = displayItems.slice(start, end);

  

  return (
    <>

      <Card shadow="sm" padding="sm" radius="md" style={{ marginTop: '1rem' }}>
        <Card.Section>

        {page.map(item => (
          <div key={item._id}>  
          <Text>{item.text}</Text>
          <Text><small>Assigned To: {item.assignee}</small></Text>
          <Text><small>Difficulty: {item.difficulty}</small></Text>
          <Button onClick={() => toggleComplete(item._id)}>{item.complete ? 'Complete' : 'Pending'}</Button>
          <hr />
          </div>

        ))}
        </Card.Section>
      
      <Pagination
        style={{ marginTop: '1rem' }}
        size="md"
        total={totalPages}
        value={currentPage}
        onChange={(value) => setCurrentPage(value)}
      />
      </Card>
      
    </>
  )
}


export default List;






