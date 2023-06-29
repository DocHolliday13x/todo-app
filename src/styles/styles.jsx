import { createStyles } from '@mantine/core';

const styles = createStyles((theme) => ({
  settingsHeader: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    fontSize: '16px',
    margin: '16 px auto',
    padding: '16px',
    width: '80%',
  },
  todo: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    fontSize: '16px',
    margin: '16 px auto',
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
    fontSize: '16px',
    boxSizing: 'border-box',
    padding: theme.spacing.md,
  },
  footer: {
    textAlign: 'right',
    width: '80%',
    margin: 'auto',
  }
}));


export default styles;








