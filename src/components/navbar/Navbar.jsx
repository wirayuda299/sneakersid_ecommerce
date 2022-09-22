import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import logo from '../../assets/image/logo.png';
import Cart from '../cart/Cart';
import { useStateContext } from '../../../context/StateContext';

const Navbar = () => {
	const { totalQuantity } = useStateContext()
	return (
		<>
			<header>
				<nav
					className='navbar bg-black border-bottom'>
					<div className='container-fluid d-flex justify-content-between align-items-center mx-3'>
						<Link to='/' className='navbar-brand text-decoration-none ps-3 text-white'>
							<h1 className='position-relative'>
								Sneakers.
							</h1>
						</Link>
						<div>
							<Link to='/products' className='text-decoration-none text-white navbar_link'>
								Shop
							</Link>
							<small className='position-relative btn' data-bs-toggle='modal' data-bs-target='#cart'>
								<b className='position-absolute top-0 badge rounded-pill bg-danger'>{ totalQuantity > 0 && totalQuantity}</b>
								<FaCartPlus className='text-white navbar_cart'/>
							</small>
						</div>
					</div>
				</nav>
				<Cart />
			</header>
		</>
	);
};
export default Navbar;
