import React, { Component } from 'react';
import TempView from './TempView';
import getTemp from '../utils/temp.utils';

class TempContainer extends Component {
  state = {
    celsius: '',
    fahrenheit: '',
    kelvin: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    this.calculateTemp(name, value);
  };

  calculateTemp = (name, value) => {
    if (!value) {
      this.setState({
        celsius: '',
        fahrenheit: '',
        kelvin: '',
      });
    } else {
      const data = getTemp(name, value);
      this.setState({ ...data });
    }
  };

  render() {
    return <TempView handleChange={e => this.handleChange(e)} {...this.state} />;
  }
}

export default TempContainer;
