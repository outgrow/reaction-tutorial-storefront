import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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
  }
});

const Footer = ({ ...props }) => (
  <footer className={props.classes.footer}>
    <div className={props.classes.row}>
      <Typography variant="body1">
        <ul className={props.classes.linkList}>
          <li className={props.classes.linkListItem}>
            <a className={props.classes.link} href="#">About us</a>
          </li>
          <li className={props.classes.linkListItem}>
            <a className={props.classes.link} href="#">Terms of Use</a>
          </li>
          <li className={props.classes.linkListItem}>
            <a className={props.classes.link} href="#">Legal Terms</a>
          </li>
          <li className={props.classes.linkListItem}>
            <a className={props.classes.link} href="#">Shipping</a>
          </li>
          <li className={props.classes.linkListItem}>
            <a className={props.classes.link} href="#">Returns</a>
          </li>
        </ul>
      </Typography>
    </div>
    <div className={props.classes.centerRow}>
      <Typography variant="caption">
        &copy; {date.getFullYear()} The Backpack Shop
      </Typography>
    </div>
    <div className={classNames([props.classes.row, props.classes.contactColumn])}>
      <Typography variant="body1">
        <p>You can reach our support at <a className={props.classes.link} href="tel:+11234567890">(123) 456-7890</a>,
          Monday to Saturday, 8AM EST to 9PM EST.</p>
        <p>Send any question or suggestion to <a className={props.classes.link}
          href="mailto:contact@thebackpackshop.com">contact@thebackpackshop.com</a>.</p>
        <p>We are based out of 123 Park Avenue, New York City, NY.</p>
      </Typography>
    </div>
  </footer>
);

Footer.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles, { name: "SkFooter" })(Footer);
