import { createStyles } from '@mantine/core';

const styles = createStyles((theme) => ({
  userSettingsHeader: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '16px auto',
    padding: '16px',
    width: '80%',
  },
  todo: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '16px auto',
    padding: '16px',
    width: '80%',
  },
  headerNav: {
    backgroundColor: theme.colors.blue[6],
    color: theme.colors.gray[0],
    height: '100%',
    margin: 'auto',
    display: 'flex',
    flexFlow: 'row wrap',
    gap: '10px',
    // justifyContent: 'space-evenly',
    fontSize: '16px',
    boxSizing: 'border-box',
    padding: theme.spacing.md,
  },
  footer: {
    textAlign:'right',
    width: '80%',
    margin: 'auto',
  }
}));


export default styles;








