import React from "react";
import PropTypes from "prop-types";
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
    width: "100%"
  },
  row: {
    maxWidth: "20%"
  },
  centerRow: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)"
  }
});

const Footer = ({ ...props }) => (
  <footer className={props.classes.footer}>
    <div className={props.classes.row}>
      <ul>
        <li><a href="#">About us</a></li>
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Legal Terms</a></li>
        <li><a href="#">Shipping</a></li>
        <li><a href="#">Returns</a></li>
      </ul>
    </div>
    <div className={props.classes.centerRow}>
      <Typography variant="caption">
        &copy; {date.getFullYear()} The Backpack Shop
      </Typography>
    </div>
    <div className={props.classes.row}>
      <p>You can reach our support at (123) 456-7890, Monday to Saturday, 8AM EST to 9PM EST.</p>
      <p>Send any question or suggestion to contact@thebackpackshop.com.</p>
      <p>We are based out of 123 Park Avenue, New York City, NY.</p>
    </div>
  </footer>
);

Footer.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles, { name: "SkFooter" })(Footer);
