import { useContext, useState } from "react";
import { SettingsContext } from "../../Context/Settings";
import { createStyles, Button, Switch, TextInput, Text, Card } from "@mantine/core";
import { NumberInput } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';
import { If, Then } from "react-if";


const useStyles = createStyles((theme) => ({
  h1: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
  },
  div: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: theme.spacing.md,
  },
  card: {
    border: `1px solid gray`,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing.md,
  }
}));

const SettingsForm = (event) => {

  const {
    pageItems,
    setPageItems,
    showCompleted,
    setShowCompleted,
    sort,
    setSort,
    saveLocalStorage } = useContext(SettingsContext);

  const [showUpdate, setShowUpdate] = useState(false);


  const { classes } = useStyles();


  const handleSubmit = (e) => {
    e.preventDefault();
    setShowUpdate(true); // populates the box for updated settings
    saveLocalStorage();
  };


  return (
    <>
      <h1 className={classes.h1}><IconSettings /> Manage Settings </h1>
      <div className={classes.div}>
        <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.card}>
          <h3>Update Settings</h3>
          <form onSubmit={handleSubmit} className={classes.form} >

            <Switch
              label="Show Completed?"
              checked={showCompleted}
              onChange={(event) => setShowCompleted(event.target.checked)}
            />
            
            <NumberInput
              name="pageItems"
              label="Items Per Page"
              placeholder={pageItems}
              value={pageItems}
              onChange={setPageItems}
            />

            <TextInput
              label="Sort Keyword"
              placeholder={sort}
              value={sort}
              onChange={(event) => setSort(event.target.value)}
            />
            
            <Button type="submit">Update Settings</Button>
          </form>
        </Card>

        <If condition={showUpdate}>
          <Then>
            <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.card}>
              {
                showUpdate &&
                <section className={classes.section}>
                  <h3>Updated Settings</h3>
                  <Text> Show Completed: {showCompleted ? 'yes' : 'no'}</Text>
                  <Text> Items Per Page: {pageItems}</Text>
                  <Text> Sort Keyword: {sort}</Text>
                </section>
              }
            </Card>
          </Then>
        </If>

      </div>

    </>
  )
};


export default SettingsForm;








