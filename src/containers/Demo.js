import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

// ACTION
import { demoaction } from '../actions/demoaction';

// COMPONENTS
import { DemoComponent } from '../components/DemoComponent.jsx';  


class Demo extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
        demo:""
	  };
    }
    
    componentDidMount(){
        let { demoaction } = this.props;
        demoaction();
    }

	componentWillReceiveProps({demo}) {
        this.setState({
            demo
        })
	}

	render() {
        let { state } = this;
        let { demo } = state;

		return (
			<div style={{marginBottom:40}}>
				<DemoComponent 
					demo={demo.info}
				/>
			</div>
		);
	}
}


function mapStateToProps({demo}) {
	return {
		demo
	}
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ demoaction }, dispatch)
};

export default connect(mapStateToProps,mapDispatchToProps)(Demo);
