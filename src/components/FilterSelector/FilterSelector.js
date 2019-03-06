import React, { Component } from "react";
import PropTypes from "prop-types";
import MultiSelect from "@reactioncommerce/components/MultiSelect/v1";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  select: {
    minWidth: "6rem"
  }
});

@withStyles(styles, { name: "SkFilterSelector" })
class FilterSelector extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    filters: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired
  }

  handleChange = (event) => {
    // this.props.onChange(event.target.value);
  }

  render() {
    const { classes, filter, filters, name } = this.props;

    return (
      <MultiSelect
        className={classes.select}
        value={filter}
        options={filters}
        inputProps={{
          name: `filterBy-${name}`,
          id: `filterBy-${name}`
        }}
        onChange={this.handleChange}
        placeholder={name}
      />
    );
  }
}

export default FilterSelector;
