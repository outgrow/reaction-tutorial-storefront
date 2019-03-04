import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  hero: {
    alignItems: "flex-start",
    backgroundImage: "url(static/images/home-hero.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    height: "26rem",
    justifyContent: "flex-end",
    width: "100%",
    paddingTop: "4rem",
    paddingRight: "10rem"
  },
  heroText: {
    width: "14rem"
  },
  title: {
    color: theme.palette.reaction.white,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize * 2.625,
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: ".5rem",
    textTransform: "uppercase",
    textShadow: "rgba(0, 0, 0, .3) 0 0 2rem"
  },
  button: {
    backgroundColor: theme.palette.reaction.white,
    color: theme.palette.reaction.black,
    display: "inline-block",
    padding: ".5rem 1rem",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: theme.palette.reaction.black,
      color: theme.palette.reaction.white
    }
  },
  categories: {
    display: "flex",
    justifyContent: "center"
  },
  categoryRow: {
    display: "flex",
    justifyContent: "space-between",
    width: "70%"
  },
  categoryCard: {
    textAlign: "center"
  },
  categoryCardImage: {
    display: "block",
    height: "200px",
    margin: "1rem 0"
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
          <div className={classes.heroText}>
            <h2 className={classes.title} variant="title">Adventure awaits.</h2>
            <Typography variant="button"><a className={classes.button} href="#">Shop travel bags</a></Typography>
          </div>
        </div>
        <div className={classes.categories}>
          <div className={classes.categoryRow}>
            <div className={classes.categoryCard}>
              <Typography variant="title">Trekking</Typography>
              <img alt="Trekking Backpacks" className={classes.categoryCardImage} src="/static/images/trekking.jpg" />
              <Typography variant="button"><a className={classes.button} href="#">Shop now</a></Typography>
            </div>

            <div className={classes.categoryCard}>
              <Typography variant="title">Everyday</Typography>
              <img alt="Everyday Backpacks" className={classes.categoryCardImage} src="/static/images/everyday.jpg" />
              <Typography variant="button"><a className={classes.button} href="#">Shop now</a></Typography>
            </div>

            <div className={classes.categoryCard}>
              <Typography variant="title">Travel</Typography>
              <img alt="Travel Backpacks" className={classes.categoryCardImage} src="/static/images/travel.jpg" />
              <Typography variant="button"><a className={classes.button} href="#">Shop now</a></Typography>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

