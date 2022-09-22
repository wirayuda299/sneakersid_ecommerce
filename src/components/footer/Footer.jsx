import { FaInstagram, FaGithub, FaTwitter, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo.png'
const Footer = () => {
  return (
		<footer className='text-center text-white bg-black border-top'>
			<div className='text-center text-dark p-3'>
				<div className='container w-100 d-flex justify-content-center gap-3 '>
					<a className='btn' href='https://www.instagram.com/wiiiraaaaa_/'>

					<FaInstagram className='fs-3 text-white' />
					</a>
					<a className='btn' href="">
					<FaTiktok className='fs-3 text-white' />

					</a>
				</div>
				<p className='py-2 fs-5 text-white'>&copy; Copyright 2022</p>
			</div>
		</footer>
	);
}
export default Footer