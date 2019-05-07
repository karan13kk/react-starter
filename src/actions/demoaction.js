import { DEMO } from '../actions/actiontypes';

export function demoaction() {
	return (dispatch) => {
        setTimeout(function(){
            dispatch({type:DEMO,payload:"Hi Connected"});
        },2000)
	}
}
