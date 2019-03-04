import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Header from "components/Header";
import Footer from "components/Footer";
import PromoBanner from "components/PromoBanner";

const styles = (theme) => ({
  root: {
    minHeight: "100vh"
  },
  mainHome: {
    flex: "1 1 auto",
    marginLeft: "auto",
    marginRight: "auto"
  },
  main: {
    flex: "1 1 auto",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: theme.layout.mainContentMaxWidth
  },
  article: {
    padding: theme.spacing.unit * 3
  }
});

@withStyles(styles, { name: "SkLayout" })
class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    route: PropTypes.string,
    shop: PropTypes.shape({
      name: PropTypes.string
    }).isRequired,
    viewer: PropTypes.object
  };

  static defaultProps = {
    classes: {}
  };

  render() {
    const { classes, children, route, shop, viewer } = this.props;

    return (
      <React.Fragment>
        <div className={classes.root}>
          <Header shop={shop} viewer={viewer} />
          <PromoBanner />
          <main className={route === "/home" ? classes.mainHome : classes.main}>
            <article className={route === "/home" ? "" : classes.article}>{children}</article>
          </main>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
