import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Logo from '/public/logo.png'
import Image from 'next/image';

const NaviBar = () => {
    return (
        <div className="NaviBar-Container">
            <Navbar collapseOnSelect expand="lg" className="" variant="dark" >
                <Container className='container'>
                    <Navbar.Brand  className='navLogo' href="/"><Image src={Logo} alt="" height="60" width="60" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto navCtn">
                            <Nav.Link href="/CV-2023.pdf"><button className='navBtn'><p style={{ margin: "0" }} className="">My CV</p></button></Nav.Link>
                            <Nav.Link href="/#Skills"><button className='navBtn'><p style={{ margin: "0" }} className="">Skills</p></button></Nav.Link>
                            <Nav.Link href="/#Projects"><button className='navBtn'><p style={{ margin: "0" }} className="">Projects</p></button></Nav.Link>
                            <Nav.Link href="/#Contact"><button className='navBtn'><p style={{ margin: "0" }} className="">Contact Me</p></button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NaviBar;