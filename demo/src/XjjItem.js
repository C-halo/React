import React, { Component } from 'react';
import PropTypes from 'prop-types';

class XjjItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    componentWillReceiveProps() {
        console.log('child-componentWillReceiveProps--------------');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount--------------');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('nextProps.context:' + nextProps.context);
        console.log('this.props.context:' + this.props.context);
        return true
    }
    render() {
        return (
            <li onClick={this.handleClick.bind(this)}>
                {this.props.name} have {this.props.context}
            </li>
        );
    }
    handleClick() {
        let index = this.props.index;
        this.props.delItem(index);
    }
}

XjjItem.propTypes = {
    name: PropTypes.string.isRequired,
    context: PropTypes.string,
    index: PropTypes.number,
    delItem: PropTypes.func
}
XjjItem.defaultProps = {
    name: 'ive'
}

export default XjjItem;