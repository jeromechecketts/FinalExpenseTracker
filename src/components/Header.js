import {
	Navbar,
	NavbarBrand,
	Collapse,
	NavbarToggler,
	Nav,
	NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../app/assets/img/logo.png';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const iconStyle = {
		color: 'White',
	};

	return (
		<Navbar
			// dark
			className='header'
			sticky='top'
			expand='md'
		>
			<NavbarBrand
				className='ms-5'
				href='/'
			>
				<img
					className='float-start'
					src={Logo}
					alt='Cardinal Logo'
				/>
			</NavbarBrand>
			<NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
			<Collapse
				navbar
				isOpen={menuOpen}
			>
				<Nav
					className='ms-auto'
					navbar
				>
					<NavItem>
						<NavLink
							className='nav-link'
							to='/'
						>
							<i className='fa fa-home fa-lg' style={iconStyle} /> Home
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className='nav-link'
							to='/companies'
						>
							<i class="fa fa-light fa-briefcase fa-lg" style={iconStyle} />{' '}
							Companies
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className='nav-link'
							to='/contact'
						>
							<i 
								className='fa fa-sharp fa-solid fa-address-card fa-lg' 
								style={iconStyle} 
							/>{' '}
							Contact Us
						</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default Header;
