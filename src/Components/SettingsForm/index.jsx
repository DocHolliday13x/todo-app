import { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { createStyles, Button, Checkbox, TextInput, Text } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  h1: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
  },
  div: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: 'theme.spacing.md',
  },
  section: {
    border: `1px solid ${theme.colors.gray[4]}`,
    borderRadius: theme.radius.sm,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: 'theme.spacing.md',
  }
}));

const SettingsForm = (event) => {

  const { pageItems, setPageItems, displayCompleted, setDisplayCompleted, sort, setSort, saveLocalStorage } = useContext(SettingsContext);
  const { showUpdate, setShowUpdate } = useState(false);

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    saveLocalStorage();
    setShowUpdate(true);
  };

  return (
    <>

      <h1 className={classes.h1}><IconSettings /> Manage Settings </h1>

      <div className={classes.div}>
        <section className={classes.section}>
          <h3>Update Settings</h3>
          <form onSubmit={handleSubmit} className={classes.form}>
            <Checkbox
              label="Show Completed Items"
              checked={displayCompleted}
              onChange={(event) => setDisplayCompleted(event.currentTarget.checked)}
            />
            <TextInput
              label="Items Per Page"
              type="number"
              min={1}
              max={10}
              value={pageItems}
              onChange={(event) => setPageItems(event.currentTarget.value)}
            />
            <TextInput
              label="Sort Field"
              type="text"
              value={sort.field}
              onChange={(event) => setSort({ ...sort, field: event.currentTarget.value })}
            />
            <Button type="submit" variant="light" color="blue">Save Settings</Button>
          </form>
        </section>

        showUpdate && (
          <section className={classes.section}>
            <h3>Settings Saved</h3>
            <Text>Display Completed Items: {displayCompleted ? 'Yes' : 'No'}</Text>
            <Text>Items Per Page: {pageItems}</Text>
            <Text>Sort Field: {sort.field}</Text>
          </section>
        )
      </div>

    </>
  )
};



export default SettingsForm;








