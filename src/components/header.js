import React,{ Component } from 'react';
import '../css/style.css'

class Header extends Component {
		render(){
			return (
				<div>
					<header>
						<div className = 'logo'>Logo</div>
					</header>
					<input type='text'/>
				</div>
			)  
		}
}

export default Header;