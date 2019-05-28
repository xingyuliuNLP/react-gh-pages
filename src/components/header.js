import React from 'react';
import classes from '../css/style.module.css'

const Header = (props) =>{

// class Header extends Component {
		// state ={
		// 	keywords:''
		// }
		// state = {
		// 	title: 'The keywords are:',
		// 	keywords: ''
		// }

		// inputChangeHandler = (e) => {
		// 	console.log(e.target.value)
		// 	this.setState({
		// 		keywords: e.target.value
		// 	});
		// }

		// // render(){ since we are using a functional component, there is no need to use render
			return (
				<div>
					<header>
						<div className={classes.logo}>Logo</div>
					<input type='text' onChange={ props.keywords } />
					{/* <div>{this.state.title}</div>
					<div>{this.state.keywords}</div> */}
					</header>
				</div>
			)
		}

 export default Header;