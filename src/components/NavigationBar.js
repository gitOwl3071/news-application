import MarqueeText from './MarqueeText';
import {Button , Navbar , NavbarBrand , NavbarToggler , Collapse , Nav , NavItem , NavLink } from 'reactstrap'
import {Routes , Route , Link} from 'react-router-dom'
import AboutUs from './AboutUs';

const NavigationBar = () => {

    return(
        <>
        <Navbar className='my-2' color='dark' dark fixed='top'>
            <NavbarBrand className='brand ms-5' href='/'>
                News <b style={{color : "red" , fontSize : "30px"}}>x</b>
            </NavbarBrand>
            <Nav className='me-5'>
                    <NavItem className='hover'>                    
                        <NavLink style={{color : "lightgreen" ,  ":hover" : {backgroundColor : "yellow"}}} href='/AboutUs'>About Us</NavLink>                                                
                    </NavItem>
                    <NavItem className='hover'>
                        <NavLink style={{color : "lightgreen" ,  border : "none"}} href='/Business'>Business</NavLink>
                    </NavItem>
                    <NavItem className='hover'>
                        <NavLink style={{color : "lightgreen" ,  border : "none"}} href='/Entertainment'>Entertainment</NavLink>
                    </NavItem>
                    <NavItem className='hover'>
                        <NavLink style={{color : "lightgreen" , border : "none"}} href='/Health'>Health</NavLink>
                    </NavItem>
                    <NavItem className='hover'>
                        <NavLink style={{color : "lightgreen" ,  border : "none"}} href='/Politics'>Politics</NavLink>
                    </NavItem>
                    <NavItem className='hover'>
                        <NavLink style={{color : "lightgreen" ,  border : "none"}} href='/Science'>Science</NavLink>
                    </NavItem>
                    <NavItem className='hover'>
                        <NavLink style={{color : "lightgreen" ,  border : "none"}} href='/Sports'>Sports</NavLink>
                    </NavItem>
                    <NavItem className='hover'>
                        <NavLink style={{color : "lightgreen" ,  border : "none"}} href='/Technology'>Technology</NavLink>
                    </NavItem>
                    <NavItem className='dropdown p-1'>
                        <NavLink className='breakingNews' style={{color : "red" , backgroundColor : "black" , border : "none"}} href='/News'><b>BREAKING NEWS !!</b></NavLink>
                        <div className='dropdown-content'>
                            <NavLink style={{color : "red"}} href='/Australia'><b>AUSTRALIA</b></NavLink>
                            <NavLink style={{color : "red"}} href='/Belgium'><b>BELGIUM</b></NavLink>
                            <NavLink style={{color : "red"}} href='/Canada'><b>CANADA</b></NavLink>
                            <NavLink style={{color : "red"}} href='/China'><b>CHINA</b></NavLink>
                            <NavLink style={{color : "red"}} href='/France'><b>FRANCE</b></NavLink>
                            <NavLink style={{color : "red"}} href='/Germany'><b>GERMANY</b></NavLink>
                            <NavLink style={{color : "red"}} href='/India'><b>INDIA</b></NavLink>
                            <NavLink style={{color : "red"}} href='/Israel'><b>ISRAEL</b></NavLink>
                            <NavLink style={{color : "red"}} href='/Netherlands'><b>NETHERLANDS</b></NavLink>
                            <NavLink style={{color : "red"}} href='/NewZealand'><b>NEW ZEALAND</b></NavLink>
                            <NavLink style={{color : "red"}} href='/Russia'><b>RUSSIA</b></NavLink>
                            <NavLink style={{color : "red"}} href='/UK'><b>UK</b></NavLink>
                            <NavLink style={{color : "red"}} href='/USA'><b>USA</b></NavLink>                           
                        </div>
                    </NavItem>
            </Nav>
        </Navbar>
        </>
    );
}

export default NavigationBar;