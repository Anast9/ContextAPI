import React, { Component} from 'react';
import Auxiliary from '../hoc/Auxiliary';
import Counter2 from '../Counter2/Counter2';

export default class Counter extends Component {
    state ={
        counter: 0
    }
    addCounter =() =>{
        this.setState((prevState) =>{
            return {
                counter: prevState.counter + 1
            }
        })
    }
    render(){
        return[
            <Auxiliary>
                <h2 key={'1'}>Добавить или удалить {this.state.counter} </h2>,
                <Counter2 clicked={this.props.clicked} />
                <button  key={'2'} onClick={this.addCounter}>+</button>,
                <button  key={'3'}onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
            </Auxiliary>
        ]
    }
}