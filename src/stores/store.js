import Reflux from 'reflux';
import actions from '../actions/actions';

export default Reflux.createStore({
    items: [],
    listenables: [actions],
    onGetall(){
        this.trigger({list: this.items});
    },
    onAdd(item){
        this.items.push(item);
        this.trigger({list: this.items});
    },
    onRemove(i){
        this.items.splice(i, 1);
        this.trigger({list: this.items});
    }
});
