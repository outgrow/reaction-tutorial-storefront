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
    justifyContent: "center",
    marginTop: ".8rem"
  },
  categoryRow: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "0 1.5rem"
  },
  categoryCard: {
    textAlign: "left",
    width: "30%"
  },
  categoryCardImage: {
    display: "block",
    width: "100%",
    margin: "1rem 0"
  },
  categoryCardDescription: {
    margin: ".3rem 0"
  },
  categoryCardLink: {
    color: theme.palette.reaction.black,
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.main
    }
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
              <img alt="Trekking Backpacks" className={classes.categoryCardImage} src="/static/images/trekking.jpg" />
              <Typography variant="title">Trekking</Typography>
              <Typography className={classes.categoryCardDescription} variant="caption">Whether it's on a weekend trip
                to Yosemite or on a life-changing expedition to Kilimanjaro, these trekking bags will follow you
                anywhere.</Typography>
              <Typography variant="button">
                <a className={classes.categoryCardLink} href="#">Shop trekking bags</a>
              </Typography>
            </div>

            <div className={classes.categoryCard}>
              <img alt="Everyday Backpacks" className={classes.categoryCardImage} src="/static/images/everyday.jpg" />
              <Typography variant="title">Everyday</Typography>
              <Typography className={classes.categoryCardDescription} variant="caption">Rain-resistant? Check.
                Laptop-friendly? Check. Light and compact? Check. We've got what you need to bring your essentials to
                the office in style.</Typography>
              <Typography variant="button">
                <a className={classes.categoryCardLink} href="#">Shop everyday bags</a>
              </Typography>
            </div>

            <div className={classes.categoryCard}>
              <img alt="Travel Backpacks" className={classes.categoryCardImage} src="/static/images/travel.jpg" />
              <Typography variant="title">Travel</Typography>
              <Typography className={classes.categoryCardDescription} variant="caption">Every travel story starts with
                the right bag. Whether you're looking for a compact carry-on or a full-size bag to take you around the
                world, we've got you covered.</Typography>
              <Typography variant="button">
                <a className={classes.categoryCardLink} href="#">Shop travel bags</a>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

