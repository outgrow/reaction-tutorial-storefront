import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  hero: {
    alignItems: "center",
    backgroundImage: "url(static/images/home-hero.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: theme.palette.reaction.white,
    display: "flex",
    fontFamily: theme.typography.fontFamily,
    height: "26rem",
    justifyContent: "flex-end",
    minWidth: "100vw",
    paddingRight: "10rem"
  },
  title: {
    fontSize: 28
  },
  subTitle: {
    fontSize: 20
  },
  button: {
    backgroundColor: theme.palette.reaction.white,
    color: theme.palette.reaction.black,
    display: "inline-block",
    padding: ".5rem 1rem",
    textDecoration: "none"
  },
  categories: {
    display: "flex"
  },
  categoryRow: {

  },
  categoryCard: {

  }
});

@withStyles(styles, { name: "SkHome" })
@inject("routingStore", "uiStore")
@observer
class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.hero}>
          <div>
            <h2 className={classes.title}>Adventure awaits.</h2>
            <h3 className={classes.subTitle}>Discover our brand new collection of backpacks.</h3>
            <a className={classes.button} href="#">Shop now</a>
          </div>
        </div>
        <div className={classes.categories}>
          <div className={classes.categoryCard}>
            <h2>Trekking</h2>
            <a className={classes.button} href="#">Shop now</a>
          </div>

          <div className={classes.categoryCard}>
            <h2>Everyday</h2>
            <a className={classes.button} href="#">Shop now</a>
          </div>

          <div className={classes.categoryCard}>
            <h2>Travel</h2>
            <a className={classes.button} href="#">Shop now</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

