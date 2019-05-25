import React,{ Component } from 'react';
import '../css/style.css'

class Header extends Component {
		render(){
			return (
				<div>
					<header className = 'logo'>Logo</header>
					<input type='text'/>
				</div>
			)
		}
}

export default Header;