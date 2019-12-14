import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {
	return (
		<Navbar className="bg-primary justify-content-between">
			<Navbar.Brand href="/">Yahoo Weather</Navbar.Brand>
			<Navbar.Toggle aria-controls="toggle-navbar" />
			<Navbar.Collapse id="navbar-nav">
				<Nav className="ml-auto">
					<Nav.Item>
						<a href="https://github.com/gskumawat0" target="_blank" rel="noopener noreferrer" className="text-dark px-2">
							<FontAwesomeIcon icon={faGithub} size="lg" />
						</a>
					</Nav.Item>
					<Nav.Item>
						<a
							href="https://www.linkedin.com/in/gskumawat/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-dark px-2"
						>
							<FontAwesomeIcon icon={faTwitter} size="lg" />
						</a>
					</Nav.Item>
					<Nav.Item>
						<a href="https://twitter.com/dev_gskumawat" target="_blank" rel="noopener noreferrer" className="text-dark px-2">
							<FontAwesomeIcon icon={faLinkedin} size="lg" />
						</a>
					</Nav.Item>
					{/* <Nav.Item>
						<span>
							<FontAwesomeIcon icon={faPhone} style={{ transform: 'rotate(100deg)' }} />
							+91 8890232339
						</span>
					</Nav.Item> */}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
