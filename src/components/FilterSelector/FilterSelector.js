import React, { Component } from "react";
import PropTypes from "prop-types";
import MultiSelect from "@reactioncommerce/components/MultiSelect/v1";
import { withStyles } from "@material-ui/core/styles";

const styles = ({ zIndex }) => ({
  select: {
    minWidth: "6rem",
    zIndex: zIndex.modal
  }
});

@withStyles(styles, { name: "SkFilterSelector" })
class FilterSelector extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    filter: PropTypes.array.isRequired,
    filters: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired
  }

  render() {
    const { classes, filter, filters, name, onChange } = this.props;

    let defaultValue = [];

    if (filter.length > 0) {
      defaultValue = filters.find((thisFilter) => filter.includes(thisFilter.value));

      if (!Array.isArray(defaultValue)) {
        defaultValue = [defaultValue];
      }
    }

    return (
      <MultiSelect
        className={classes.select}
        options={filters}
        inputProps={{
          name: `filterBy-${name}`,
          id: `filterBy-${name}`
        }}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={name}
      />
    );
  }
}

export default FilterSelector;
