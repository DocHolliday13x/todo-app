import { Group, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  footer: {
    textAlign: 'center',
    padding: theme.spacing.sm,
  }
}));

function Footer() {
  const { classes } = useStyles();
  return (
    <Group position='right'  >
    <footer className={classes.footer}data-testid="footer-test">© 2023 Code Fellows</footer>
    </Group>
  )
}


// const Footer = (props) => {
//   return (
//     <footer data-testid="footer-test">
//       <p>© 2023 Code Fellows</p>
//     </footer>
//   );
// }


export default Footer;
