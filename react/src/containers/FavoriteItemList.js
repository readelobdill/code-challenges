import { connect } from 'react-redux';

import { ItemList } from '../components';
import { activate } from '../actions';

const mapStateToProps = (state) => {
    return {
        items: state.items,
        loading: state.itemsLoading
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
