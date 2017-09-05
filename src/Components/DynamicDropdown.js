import React, { Component } from 'react';

class DynamicDropdown extends Component {
    constructor() {
        super();
        this.state={
            tierOne: "",
            tierTwo: "",
        }
    };

    componentWillReceiveProps(props) {
        this.setState({
            tierOne: props.selectedIndex,
            tierTwo: props.selectedIndex
        })
    }

    handleSelection(selectedIndex) {
        this.setState({
            tierOne: selectedIndex
        })
        this.onFirstChange = this.onFirstChange.bind( this );
    };

    onSecondChange(secondSelectedIndex) {
        this.setState({
            tierTwo: secondSelectedIndex
        })
        this.onSecondChange = this.onSecondChange.bind( this );
    };

    render() {
        return(
            <div className="select-loc">
            <h2>Selected Location: {this.state.onFirstChange ? this.state.onSecondChange : ''}</h2>
            <select onChange={(e) => { this.onFirstChange(e.target.value); }}>Pick a State</select>
            <select onChange={(e) => { this.onSecondChange(e.target.value); }}>Pick a Park</select>
          </div>
        )
    };
};

export default DynamicDropdown; 