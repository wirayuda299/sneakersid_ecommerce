import {Link} from 'react-router-dom';
import logo from '../../assets/image/logo.png';
const Registration = () => {
  return (
    <div className='container-fluid'>
      <div className='container min-vh-100 d-flex flex-column justify-content-center align-items-center'>
        <img
          src={logo}
          alt='logo'
          width={150}
          height={150}/>
        <form
          action='/'
          style={{
            width: '400px',
            height: '650px',
          }}
        >
          <h1 className='text-center fw-bold text-uppercase'>
            Become Our Member
          </h1>
          <div
            className='text-center pb-4 text-muted'
            style={{fontSize: '0.8rem'}}
          >
            Create your Sneakers.id Member profile and get first access to the
            very best of our products, inspiration and community.
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control rounded-0 py-3'
              id='firstName'
              placeholder='First Name'
              required
            />
            <input
              type='text'
              className='form-control rounded-0 py-3 mt-3'
              id='lastName'
              placeholder='Last Name'
              required
            />
          </div>
          <input
            className='form-control py-3 rounded-0 mt-3'
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            required
          />

          <input
            className='form-control rounded-0 py-3 mt-3'
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            required
          />
          <div className='form-check '>
            <input
              className='form-check-input mt-4'
              type='checkbox'
              value=''
              id='news'
              required
            />
            <label
              className='form-check-label text-muted py-2'
              htmlFor='news'
              style={{fontSize: '0.8rem'}}
            >
              Sign up for emails to get updates from our products, offers and
              your Member benefits
            </label>
          </div>
          <p className='text-center text-muted pt-3'>
            by signup you agree our
            <Link
              className='text-dark px-2'
              to='/privacy'
            >
              Privacy policies
            </Link>
            and
            <Link
              to='/term-of-use'
              className='text-dark px-2'
            >
              Terms of Use
            </Link>
          </p>
          <button
            className='btn btn-dark btn-lg w-100'
            type='submit'
          >
            <h5>Create Account</h5>
          </button>
          <p className='pt-2'>
            Already a member?
            <Link
              className='text-dark'
              to='/login'
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Registration;
