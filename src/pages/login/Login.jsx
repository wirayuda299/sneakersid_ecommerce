import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo.png';
const Login = () => {
	return (
		<div className='container-fluid login'>
			<div className='container min-vh-100 d-flex flex-column justify-content-center align-items-center'>
				<form
					action='/'
					style={{
						maxWidth: '600px',
					}}>
					<h1 className='text-center login__title'>
						1 Account for anywhere
					</h1>
					
					<div className='form-group'>
						<label
							className='form-label pt-2'
							htmlFor='email'>
							Email
						</label>
					</div>
					<input
						className='form-control py-3 rounded-0'
						type='email'
						name='email'
						id='email'
						placeholder='Email'
						required
					/>
					<label
						className='form-label pt-2'
						htmlFor='password'>
						Password
					</label>
					<input
						className='form-control rounded-0 py-3'
						type='password'
						name='password'
						id='password'
						placeholder='Password'
						required
					/>
					<button
						className='btn btn-dark btn-lg w-100 mt-4'
						type='submit'>
						<h5>Login</h5>
					</button>
					<p className='pt-2 text-white'>
						Not a member? 
						<Link
							className='text-white pt-3'
							to='/registration'>
							Sign Up
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};
export default Login;
