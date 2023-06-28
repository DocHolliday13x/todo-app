import React from 'react';
import { SettingsContext } from '../../Context/Settings';
import { Pagination } from '@mantine/core';

const List = (props) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageItems, displayCompleted, sort] = React.useContext(SettingsContext);
  const totalPages = Math.ceil(props.list.length / pageItems);
  
  const displayItems = displayCompleted ? props.list : props.list.filter(item => !item.complete);

  const start = (currentPage - 1) * pageItems;
  const end = start + pageItems;
  const page = displayItems.slice(start, end);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <>
      <ul>
        {page.map(item => (
          <li key={item._id}>
            <span onClick={() => props.handleComplete(item._id)}>
              {item.complete ? 'complete' : 'incomplete'}
            </span>
            <span onClick={() => props.handleDelete(item._id)}>
              {item.text}
            </span>
            <span onClick={() => props.handleEdit(item._id)}>
              edit
            </span>
          </li>
        ))}
      </ul>
      <Pagination
        style={{ marginTop: '1rem' }}
        size="md"
        total={totalPages}
        value={currentPage}
        onChange={handlePageChange}
      />
    </>
  )
}


export default List;






