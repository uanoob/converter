import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TempView from './TempView';

class TempContainer extends Component {
  render() {
    return (
      <div>
        <TempView />
      </div>
    );
  }
}

TempContainer.propTypes = {};

export default TempContainer;
