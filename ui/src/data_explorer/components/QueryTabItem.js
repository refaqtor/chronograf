import React, {PropTypes} from 'react';
import classNames from 'classnames';

const QueryTabItem = React.createClass({
  propTypes: {
    isActive: PropTypes.bool,
    query: PropTypes.shape({
      rawText: PropTypes.string,
    }).isRequired,
    onSelect: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    queryTabText: PropTypes.string,
  },

  handleSelect() {
    this.props.onSelect(this.props.query);
  },

  handleDelete(e) {
    e.stopPropagation();
    this.props.onDelete(this.props.query);
  },

  render() {
    return (
      <div className={classNames('query-builder--tab', {active: this.props.isActive})} onClick={this.handleSelect}>
        <span className="query-builder--tab-label">{this.props.queryTabText}</span>
        <span className="query-builder--tab-delete" onClick={this.handleDelete}></span>
      </div>
    );
  },
});

export default QueryTabItem;
