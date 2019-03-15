import React from "react";
import { Query } from "react-apollo";
import { inject } from "mobx-react";
import filterTagsQuery from "./filterTags.gql";

export default (Component) => {
  @inject("primaryShopId")
  class FilterTags extends React.Component {
    render() {
      const { primaryShopId: shopId } = this.props;

      return (
        <Query query={filterTagsQuery} variables={{ shopId }}>
          {({ data: { filterTags } }) => (
            <Component {...this.props} {...filterTags} />
          )}
        </Query>
      );
    }
  }

  return FilterTags;
}
