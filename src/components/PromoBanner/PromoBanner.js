import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  banner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "1rem",
    background: theme.palette.primary.main,
    padding: "1rem 0"
  },
  text: {
    color: theme.palette.reaction.white,
    margin: 0,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize * 0.875,
    fontWeight: theme.typography.fontWeightSemiBold,
    textTransform: "uppercase"
  }
});

const PromoBanner = ({ classes }) => (
  <div className={classes.banner}>
    <h3 className={classes.text}>Enjoy free shipping on all orders!</h3>
  </div>
);

export default withStyles(styles, { name: "SkPromoBanner" })(PromoBanner);
