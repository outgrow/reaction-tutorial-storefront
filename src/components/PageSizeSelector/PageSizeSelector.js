import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "@reactioncommerce/components/Select/v1";
import { withStyles } from "@material-ui/core/styles";
import { PAGE_SIZES } from "lib/utils/pageSizes";

const SELECTOR_OPTIONS = [
  {
    label: "Show: 20 Products",
    value: PAGE_SIZES._20
  },
  {
    label: "Show: 60 Products",
    value: PAGE_SIZES._60
  },
  {
    label: "Show: 100 Products",
    value: PAGE_SIZES._100
  }
];

const styles = () => ({
  select: {
    minWidth: "10rem"
  }
});

@withStyles(styles, { name: "SkPageSizeSelector" })
class PageSizeSelector extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    pageSize: PropTypes.number.isRequired
  }

  handleChange = (event) => {
    // this.props.onChange(event.target.value);
  }

  render() {
    const { classes, pageSize } = this.props;

    return (
      <Select
        className={classes.select}
        value={pageSize}
        options={SELECTOR_OPTIONS}
        inputProps={{
          name: "pageSize",
          id: "page-size"
        }}
        onChange={this.handleChange}
      />
    );
  }
}

export default PageSizeSelector;
