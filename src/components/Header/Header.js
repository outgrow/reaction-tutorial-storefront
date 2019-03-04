import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject } from "mobx-react";
import classNames from "classnames";
import Helmet from "react-helmet";
import AppBar from "@material-ui/core/AppBar";
import Hidden from "@material-ui/core/Hidden";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import { NavigationDesktop } from "components/NavigationDesktop";
import { NavigationMobile, NavigationToggleMobile } from "components/NavigationMobile";
import AccountDropdown from "components/AccountDropdown";
import ShopLogo from "@reactioncommerce/components/ShopLogo/v1";
import Link from "components/Link";
import MiniCart from "components/MiniCart";

const styles = (theme) => ({
  appBar: {
    backgroundColor: theme.palette.reaction.white,
    borderBottom: `solid 1px ${theme.palette.reaction.black05}`,
    color: theme.palette.reaction.coolGrey500
  },
  title: {
    color: theme.palette.reaction.reactionBlue,
    marginRight: theme.spacing.unit,
    borderBottom: `solid 5px ${theme.palette.reaction.reactionBlue200}`
  },
  links: {
    display: "block",
    width: "100%"
  },
  logo: {
    marginTop: ".8rem",
    marginRight: ".6rem"
  },
  lowerLevel: {
    display: "flex",
    alignItems: "center",
    height: "2.6rem"
  },
  toolbar: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between"
  },
  upperLevel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  }
});

@withStyles(styles, { name: "SkHeader" })
@inject("uiStore")
class Header extends Component {
  static propTypes = {
    classes: PropTypes.object,
    shop: PropTypes.shape({
      name: PropTypes.string
    }).isRequired,
    uiStore: PropTypes.shape({
      toggleMenuDrawerOpen: PropTypes.func.isRequired
    }).isRequired,
    viewer: PropTypes.object
  };

  static defaultProps = {
    classes: {}
  };

  handleNavigationToggleClick = () => {
    this.props.uiStore.toggleMenuDrawerOpen();
  };

  render() {
    const { classes: { appBar, links, logo, lowerLevel, toolbar, upperLevel }, shop } = this.props;

    return (
      <AppBar position="static" elevation={0} className={appBar}>
        <Helmet>
          <style>{`.shop-logo img { height: 100px; }`}</style>
        </Helmet>
        <Toolbar className={toolbar}>
          <Hidden mdUp>
            <NavigationToggleMobile onClick={this.handleNavigationToggleClick} />
          </Hidden>

          <Link route="/">
            <ShopLogo
              className={classNames([logo, "shop-logo"])}
              shopName={shop.name}
              shopLogoUrl="/static/images/thebackpackshop.svg"
            />
          </Link>

          <div className={links}>
            <div className={upperLevel}>
              <AccountDropdown />
              <MiniCart />
            </div>
            <div className={lowerLevel}>
              <Hidden smDown initialWidth={"md"}>
                <NavigationDesktop />
              </Hidden>
            </div>
          </div>
        </Toolbar>
        <NavigationMobile />
      </AppBar>
    );
  }
}

export default Header;
