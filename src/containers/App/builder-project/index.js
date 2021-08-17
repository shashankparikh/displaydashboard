import { connect } from 'react-redux';
import { compose } from 'redux';
import Builder from './builder';
import {getCategoryList,
	// updateUserInput
} from './action'
import WithCounter from '../../../containers/HighOrderComponent/withCounter'


const mapDispatchToProps = (dispatch) => ({
	getCategoryList: (...args) => dispatch(getCategoryList(...args)),
	// updateUserInput: (...args) => dispatch(updateUserInput(...args)),

});

const mapStateToProps = (state) => {
	// const HS = state[REDUCER_KEY_MAP.hs];
	return {
		listData: state.builder.list,
	//	inputData: state.builder.inputData
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Builder);
