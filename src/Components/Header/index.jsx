import { createStyles, Navbar, Button } from "@mantine/core";
import { Link } from "react-router-dom";

const styles = createStyles((theme) => ({
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
  }
}));

function Header(props) {
  
  const { classes } = styles();

  return (
<>
<Navbar className={classes.headerNav}>
  <Link to='/'>Home</Link>
  <Link to='/settings'>Settings</Link>
<Button>Log Out</Button>
</Navbar>

</>
  );
}

export default Header;






