import { connect } from 'react-redux';
import { FilterSelector } from '../components';
import { setFilter } from '../actions';

const mapStateToProps = (state) => {
    let uniqueSources = new Set();
    state.items.forEach(item => uniqueSources.add(item.source));
    return {
        filters: Array.from(uniqueSources),
        activeFilter: state.activeFilter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (filter) => {
            dispatch(setFilter(filter));
        }
    };
};

const AvailableFilters = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterSelector);

export default AvailableFilters;
