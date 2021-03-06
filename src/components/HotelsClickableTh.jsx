import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import { setSortKey } from '../actions';

const HotelsClickableTh = props => (
  <th className="hotels_clickable_th" onClick={() => props.setSortKey(props.sortKey)}>
    {props.label}
    {props.isSelected ? '▲' : ''}
  </th>
);

HotelsClickableTh.propTypes = {
  label: PropTypes.string.isRequired,
  sortKey: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  setSortKey: PropTypes.func.isRequired,
};

export default connect(
  (state, ownProps) => ({
    isSelected: ownProps.sortKey === state.sortKey,
  }),
  { setSortKey },
)(HotelsClickableTh);
