import { createStyles, Navbar, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import Login from "../Login";

const styles = createStyles((theme) => ({
  headerNav: {
    backgroundColor: theme.colors.blue[6],
    color: theme.colors.gray[0],
    height: '100%',
    margin: 'auto',
    fontSize: '16px',
    padding: theme.spacing.sm,
  },
  links: {
    color: theme.colors.gray[0],
    fontSize: theme.fontSizes.md,
    textDecoration: 'none',
  }
}));

function Header(props) {

  const { classes } = styles();

  return (
    <>
      <Navbar className={classes.headerNav}>

        <Group position='left'>
          <Link className={classes.links} to='/'>Home</Link>
          <Link className={classes.links} to='/settings'>Settings</Link>
        </Group>

        <Group position='right'>
          <Login />
        </Group>

      </Navbar>

    </>
  );
}


export default Header;






