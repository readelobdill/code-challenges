import { connect } from 'react-redux';
import { FilterSelector } from '../components';
import { fetchItems } from '../actions';

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
        activeFilter: state.activeFilter,
        loading: state.filtersLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (filter) => {
            dispatch(fetchItems(filter));
        }
    };
};

const AvailableFilters = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterSelector);

export default AvailableFilters;
