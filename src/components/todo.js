import React from 'react';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin';
import store from '../stores/store';
import actions from '../actions/actions';

export default class Todo extends React.Component{
    componentDidMount() {
        actions.getall();
    }

    add() {
        var item  = this.refs.item.value;
        this.refs.item.value = '';
        actions.add(item);
    }

    remove(i) {
        actions.remove(i);
    }

    render() {
        let items;

        if (this.state.store && this.state.store.list) {
            items = this.state.store.list.map((item, i) => {
                return <li key={i}>{item}<button onClick={this.remove.bind(this, i)}>Remove</button></li>
            });
        }

        return (
            <div>
                <input type="text" ref="item" />
                <button onClick={this.add.bind(this)}>Add</button>
                <ul>{items}</ul>
            </div>
        )
    }
}

ReactMixin.onClass(Todo, Reflux.connect(store, 'store'));
