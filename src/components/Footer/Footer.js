import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "/components/Link";

const date = new Date();

const styles = (theme) => ({
  footer: {
    alignItems: "center",
    backgroundColor: theme.palette.reaction.coolGrey300,
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: theme.spacing.unit * 2,
    marginTop: "2rem",
    width: "100%"
  },
  row: {
    maxWidth: "20%"
  },
  centerRow: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)"
  },
  linkList: {
    listStyle: "none"
  },
  linkListItem: {
    margin: ".25rem 0"
  },
  link: {
    color: theme.palette.secondary.dark,
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.dark,
      textDecoration: "underline"
    }
  },
  contactColumn: {
    textAlign: "right",
    marginRight: "2rem"
  }
});

const Footer = ({ ...props }) => (
  <footer className={props.classes.footer}>
    <div className={props.classes.row}>
      <ul className={props.classes.linkList}>
        <li className={props.classes.linkListItem}>
          <Typography variant="body1">
            <a className={props.classes.link} href="#">About us</a>
          </Typography>
        </li>
        <li className={props.classes.linkListItem}>
          <Typography variant="body1">
            <a className={props.classes.link} href="#">Terms of Use</a>
          </Typography>
        </li>
        <li className={props.classes.linkListItem}>
          <Typography variant="body1">
            <a className={props.classes.link} href="#">Legal Terms</a>
          </Typography>
        </li>
        <li className={props.classes.linkListItem}>
          <Typography variant="body1">
            <a className={props.classes.link} href="#">Shipping</a>
          </Typography>
        </li>
        <li className={props.classes.linkListItem}>
          <Typography variant="body1">
            <a className={props.classes.link} href="#">Returns</a>
          </Typography>
        </li>
        <li className={props.classes.linkListItem}>
          <Typography variant="body1">
            <Link className={props.classes.link} route="/contact">Contact Us</Link>
          </Typography>
        </li>
      </ul>
    </div>
    <div className={props.classes.centerRow}>
      <Typography variant="caption">
        &copy; {date.getFullYear()} The Backpack Shop
      </Typography>
    </div>
    <div className={classNames([props.classes.row, props.classes.contactColumn])}>
      <Typography variant="body1" style={{ marginBottom: ".5rem" }}>
        Support: <a className={props.classes.link} href="tel:+11234567890">+1 (123) 456-7890</a>
      </Typography>
      <Typography variant="body1" style={{ marginBottom: ".5rem" }}>
        Questions or suggestions: <a className={props.classes.link}
          href="mailto:contact@thebackpackshop.com">contact@thebackpackshop.com</a>.
      </Typography>
      <Typography variant="body1">
        123 Park Avenue, New York City, NY.
      </Typography>
    </div>
  </footer>
);

Footer.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles, { name: "SkFooter" })(Footer);
