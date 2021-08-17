import { connect } from 'react-redux';
import { compose } from 'redux';
import BillBoard from './billBoard';
import {updateUserInput} from './action'


const mapDispatchToProps = (dispatch) => ({
	updateUserInput: (...args) => dispatch(updateUserInput(...args)),

});

const mapStateToProps = (state) => {
	// const HS = state[REDUCER_KEY_MAP.hs];
	return {
		inputData: state.billBoard.inputData
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(BillBoard);
