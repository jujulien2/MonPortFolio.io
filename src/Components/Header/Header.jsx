
import '../../styles/Header/Header.css'
import { Link } from 'react-router-dom';
const Header = (props) => {

    return (
        <div className='headerWrapper'>
            <div className='presentation'>
                <Link to={"/"}>
                    < p > {props.navOne}</p>
                </Link>
            </div >
            <div className='presentation'>
                <Link to={"/Projects"} href="/Projects">
                    <p>{props.navTwo}</p>
                </Link>
            </div>
            <div className='presentation'>
                <Link to={"/Skills"}>
                    <p>{props.navThree}</p>

                </Link>
            </div>
        </div >
    );
};

export default Header;