import { connect } from 'react-redux';

import { ItemList } from '../components';
import { activate } from '../actions';

const mapStateToProps = (state) => {
    let activeFilter = state.activeFilter;
    return {
        items: state.items
            .filter(item => !activeFilter || item.source == activeFilter)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onItemClick: (item) => {
            dispatch(activate(item));
        }
    };
};

const FavoriteItemList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList);

export default FavoriteItemList;
