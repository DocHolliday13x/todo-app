import { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { createStyles, Button, Card, TextInput, Text, Grid, NumberInput } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';
import { Switch, When } from 'react-if'; // We have to bring this in with `npm i react-if` from react-if for our grid to display properly

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

  const { displayCompleted, setDisplayCompleted, sort, setSort, saveLocalStorage } = useContext(SettingsContext);
  const { showUpdate, setShowUpdate } = useState(false); // We need to bring in useState from react to use this

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    saveLocalStorage();
    setShowUpdate(true);
  };

  return (
    <>

      <h1 className={classes.h1}><IconSettings /> Manage Settings </h1>

      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Grid.Col span={6}>
          <Card withBorder>
            <form onSubmit={handleSubmit} className={classes.form}>
              <Text fontSize="xl" weight='bold'>Update Settings</Text>
              <Switch
                checked={displayCompleted}
                onChange={(event) => setDisplayCompleted(event.currentTarget.checked)}
                label="Show Completed Items"
                m="sm"
              />
              <NumberInput
                value={displayCompleted}
                label="Items Per Page"
                onChange={setDisplayCompleted}
                />
              <TextInput
              placeholder={sort}
                label="Sort Field"
                onChange={(event) => setSort({ ...sort, field: event.currentTarget.value })}
              />
              <Button mt="sm" type="submit" variant="light" color="blue">Save Settings</Button>
            </form>
            </Card>
        </Grid.Col>
        <Grid.Col span={6}>
          <Card withBorder>
            <When condition={showUpdate}> {/* We need to bring in When from react-if to use this */}
              <Text fontSize="xl" weight='bold'>Settings Saved!</Text>
            </When>

            <When condition={!showUpdate}>
              <Text fontSize="xl" weight='bold'>Update Settings</Text>
              <Switch
                checked={displayCompleted}
                onChange={(event) => setDisplayCompleted(event.currentTarget.checked)}
                label="Show Completed Items"
                m="sm"
              />
              <NumberInput
                value={displayCompleted}
                label="Items Per Page"
                onChange={setDisplayCompleted}
                />
              <TextInput
              placeholder={sort}
                label="Sort Field"
                onChange={(event) => setSort({ ...sort, field: event.currentTarget.value })}
              />
              <Button mt="sm" type="submit" variant="light" color="blue">Save Settings</Button>
            </When>
          </Card>
        </Grid.Col>
      </Grid>

    </>

  );
};



export default SettingsForm;








