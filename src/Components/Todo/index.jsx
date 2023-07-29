import axios from 'axios';
import Auth from '../Auth';
import List from '../List';
import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form';
// import { v4 as uuid } from 'uuid';


import { Grid, TextInput, Button, Text, createStyles, Slider, Card } from '@mantine/core';



const styles = createStyles((theme) => ({
  todo: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '16px auto',
    padding: '16px',
    width: '80%',
  }
}));


const Todo = () => {
  const { classes } = styles(); // this needs to be in the function

  const [defaultValues] = useState({
    difficulty: 3,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    try {
      const url = 'https://api-js401.herokuapp.com/api/v1/todo';
      const method = 'post';
      const data = item;
      item.complete = false;
      console.log(item);
      // item.id = uuid();
      axios({ url, method, data });
      setList([...list, item]);

    } catch (error) {
      console.error('ERROR WHEN TRYING TO ADD ITEM', error);
    }
  }

  function deleteItem(id) {
    try {
      axios.delete(`https://api-js401.herokuapp.com/api/v1/todo/${id}`);
      const items = list.filter(item => item._id !== id);
      setList(items);
    } catch (error) {
      console.error('ERROR WHEN TRYING TO DELETE ITEM', error);
    }
  }

  function toggleComplete(id) {
    try {
      const items = list.map(item => {
      const url = `https://api-js401.herokuapp.com/api/v1/todo/${id}`;
      const method = 'put';
      const data = { complete: !item.complete };
      axios({ url, method, data });
        if (item._id === id) {
          item.complete = !item.complete;
        }
        return item;
      });

      setList(items);

    } catch (error) {
      console.error('ERROR WHEN TRYING TO TOGGLE COMPLETE', error);
    }

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);

  // this should trigger on page load to grab list of tasks from URL
  useEffect(() => {
    const getData = async () => {
      let response = await axios.get('https://api-js401.herokuapp.com/api/v1/todo');

      setList(response.data.results);
    };
    getData();
  }, []);


  return (
    <>
      <h1 data-testid="header-h1" className={classes.todo}>To Do List: {incomplete} items pending</h1>

      <Grid>
        <Auth capability="create">
          <Grid.Col xs={12} sm={4}>
            <Card shadow="sm" padding="md" margin="md" withBorder>
              <form onSubmit={handleSubmit}>

                <h2>Add To Do Item</h2>

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

                <Text>Difficulty Rating</Text>
                <Slider
                  onChange={handleChange}
                  defaultValue={defaultValues.difficulty}
                  min={1}
                  max={5}
                  name="difficulty"
                />

                <Button radius="md" type="submit">Add Item</Button>
              </form>
            </Card>
          </Grid.Col>
        </Auth>
        <Grid.Col xs={12} sm={8}>
          {/* <Card shadow="sm" padding="md" margin="md"> */}
          <List
            deleteItem={deleteItem}
            list={list}
            toggleComplete={toggleComplete} />
          {/* </Card> */}
        </Grid.Col>
      </Grid>
    </>
  );
};


export default Todo;




