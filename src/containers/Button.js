import {connect} from 'react-redux';
import Button from '../components/Button';
import {upCount, downCount} from '../actions/index';

const mapStateToProps = ({count}) => ({
  count
});

const mapDispatchToProps = (dispatch) => ({
  setUpCount: () => {
    dispatch(upCount())
  },
  setDownCount: () => {
    dispatch(downCount())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);