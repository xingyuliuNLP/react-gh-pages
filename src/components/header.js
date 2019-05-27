import React,{ Component } from 'react';
import '../css/style.css'

class Header extends Component {
		state ={
			keywords:''
		}
		// state = {
		// 	title: 'The keywords are:',
		// 	keywords: ''
		// }

		inputChangeHandler = (e) => {
			console.log(e.target.value)
			// this.setState({
			// 	keywords: e.target.value
			// });
		}

		render(){
			return (
				<div>
					<header>
						<div className='logo'>Logo</div>
					<input type='text' onChange={ (e) => this.inputChangeHandler(e) } />
					{/* <div>{this.state.title}</div>
					<div>{this.state.keywords}</div> */}
					</header>
				</div>
			)
		}
}

export default Header;