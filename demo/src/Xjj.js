import React, { Component, Fragment } from 'react';
import axios from 'axios'
import './style.css'
import XjjItem from './XjjItem';

class Xjj extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['hana', 'tu']
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
            .then(res => {
                console.log('axios 获取成功：' + JSON.stringify(res));
            }).catch(error => console.log('axios获取失败' + error))
    }
    render() {
        console.log('3-render------------------');
        return (
            <Fragment>
                <label htmlFor='halo'>add</label>
                <div>
                    <input
                        id='halo'
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.inputChage.bind(this)}
                        ref={input => (this.input = input)}
                    />
                    <button onClick={this.addList.bind(this)}>add</button>
                </div>
                <ul ref={ul => this.ul = ul}>
                    {this.state.list.map((item, index) => {
                        return (

                            <XjjItem
                                context={item}
                                index={index}
                                key={item + index}
                                delItem={this.delItem.bind(this)} />

                        )

                    })}
                </ul>
            </Fragment>
        )
    }
    inputChage() {
        this.setState({
            inputValue: this.input.value
        })
    }
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }, () => {
            console.log(this.ul.querySelectorAll('li').length);
        })
    }
    delItem(index) {
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
}

export default Xjj;