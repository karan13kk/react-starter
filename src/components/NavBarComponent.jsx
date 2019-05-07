import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBarComponent = ({ user }) => {
	return (
		<nav className="navbar container-fluid navbar-expand-md fixed-top navbar-dark bg-dark">
			<div className="container-fluid">
			  <NavLink className="navbar-brand" strict to="#">Name</NavLink>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
			  <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="collapsibleNavbar">
				{user.isAuthenticated?logoutComponent():loginComponent()}
			  </div> 
			</div>
		</nav>
	);
}

const loginComponent = () => {
	return (
		<ul className="navbar-nav my-lg-0 ml-auto">
			<div className="input-group-append">
				<NavLink className="nav-link" strict to="/login" >Login</NavLink>
			</div>
	    </ul>
	)
}


const logoutComponent = () => {
	return (
		<ul className="navbar-nav my-lg-0 ml-auto">
			<NavLink className="nav-link" strict to={`/`} >Link</NavLink>
	    </ul>
	)
}