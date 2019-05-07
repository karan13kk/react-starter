import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

// ACTION

// COMPONENTS
import { NavBarComponent } from '../components/NavBarComponent.jsx';  


class NavBar extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	user:{
              isAuthenticated: true
          }
	  };
	}

	componentWillReceiveProps(props) {
	}

	render() {
		let { user } = this.state;
		return (
			<div style={{marginBottom:40}}>
				<NavBarComponent 
					user		= {user}
				/>
			</div>
		);
	}
}


function mapStateToProps({user}) {
	return {
		user: {isAuthenticated:true}
	}
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ }, dispatch)
};

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
