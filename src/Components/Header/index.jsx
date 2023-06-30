import { createStyles, Navbar, Button } from "@mantine/core";
import { Link } from "react-router-dom";

const styles = createStyles((theme) => ({
  headerNav: {
    backgroundColor: theme.colors.blue[6],
    color: theme.colors.gray[0],
    height: '100%',
    // margin: 'auto',
    // display: 'flex',
    // flexFlow: 'row wrap',
    // gap: '10px',
    fontSize: theme.fontSizes.md,
    // boxSizing: 'border-box',
    padding: theme.spacing.md,
  },
  link: {
    color: theme.colors.gray[0],
    fontSize: theme.fontSizes.md,
    textDecoration: 'none',
  }
}));

function Header() {
  
  const { classes } = styles();

  return ( 
<>
<Navbar className={classes.headerNav}>
  <Link to='/' classes={classes.link}>Home</Link>
  <Link to='/settings' classes={classes.link}>Settings</Link>
<Button>Log Out</Button>
</Navbar>

</>
  );
}

export default Header;






