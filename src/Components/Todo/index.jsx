import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form';

import { v4 as uuid } from 'uuid';
import List from '../List';

import { Grid, TextInput, Button, Text, createStyles, Slider } from '@mantine/core';

const styles = createStyles((theme) => ({
  todoForm: {
    backgroundColor: theme.colors.blue[6],
    color: theme.colors.gray[0],
    height: '100%',
    margin: 'auto',
    display: 'flex',
    flexFlow: 'row wrap',
    gap: '10px',
    fontSize: '16px',
    boxSizing: 'border-box',
    padding: theme.spacing.md,
  }
}));


const Todo = () => {

  const { classes } = styles(); // bring in styles from Mantine

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id === id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);  

  return (
    <>
      <h1 data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
      <Grid className={classes.todoForm}>
        <form onSubmit={handleSubmit}>
          <TextInput
            onChange={handleChange}
            name="text"
            type="text"
            placeholder="Item Details"
          />
          <TextInput
            onChange={handleChange}
            name="assignee"
            type="text"
            placeholder="Assignee Name"
          />
          <Slider
            onChange={handleChange}
            defaultValue={defaultValues.difficulty}
            min={1}
            max={5}
            name="difficulty"
          />
          <Button type="submit">Add Item</Button>
        </form>
      </Grid>
      <List
        list={list}
        handleComplete={toggleComplete}
        handleDelete={deleteItem}
      />
    </>
  );
};


  // return (
  //   <>
  //     <header data-testid="todo-header">
  //       <h1 data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
  //     </header>

  //     <form onSubmit={handleSubmit}> 
  //     {/* leave the form code inside of the Todo Component */}
  //     {/* DO NOT COMPONENTIZE BEFORE LAB 34 */}

  //       <h2>Add To Do Item</h2>

  //       <label>
  //         <span>To Do Item</span>
  //         <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
  //       </label>

  //       <label>
  //         <span>Assigned To</span>
  //         <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
  //       </label>

  //       <label>
  //         <span>Difficulty</span>
  //         <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
  //       </label>

  //       <label>
  //         <button type="submit">Add Item</button>
  //       </label>
  //     </form>

  //     {/* {list.map(item => (
  //       <div key={item.id}>
  //         <p>{item.text}</p>
  //         <p><small>Assigned to: {item.assignee}</small></p>
  //         <p><small>Difficulty: {item.difficulty}</small></p>
  //         <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
  //         <hr />
  //       </div>
  //     ))} */}

  //     <List 
  //       list={list}
  //       toggleComplete={toggleComplete}
  //     />

  //   </>
  // );
// };

export default Todo;
