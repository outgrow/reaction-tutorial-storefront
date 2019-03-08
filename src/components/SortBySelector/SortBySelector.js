import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "@reactioncommerce/components/Select/v1";
import { withStyles } from "@material-ui/core/styles";

const SORT_BY = [
  {
    label: "Sort: Newest",
    value: "updatedAt-desc"
  },
  {
    label: "Sort: $ - $$$$",
    value: "minPrice-asc"
  },
  {
    label: "Sort: $$$$ - $",
    value: "minPrice-desc"
  }
];

const styles = ({ zIndex }) => ({
  select: {
    minWidth: "9rem",
    zIndex: zIndex.modal
  }
});

@withStyles(styles, { name: "SkSortBySelector" })
class SortBySelector extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired
  }

  render() {
    const { classes, onChange, sortBy } = this.props;

    return (
      <Select
        className={classes.select}
        value={sortBy}
        options={SORT_BY}
        inputProps={{
          name: "sortBy",
          id: "sort-by"
        }}
        onChange={onChange}
      />
    );
  }
}

export default SortBySelector;
