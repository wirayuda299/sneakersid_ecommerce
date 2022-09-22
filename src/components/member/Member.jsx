import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import card from '../../assets/image/card.png'
import bg from '../../assets/image/bg.jpg';
const Member = () => {
	return (
		<div
			className='container-fluid pb-3 member'
			style={
				{
					backgroundImage: `url(${bg})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}
			}>
			<div className='container'>
				<div className='row justify-content-between align-items-center'>
					<div className='col-md-6 order-1 order-md-0'
						data-aos='zoom-in-right'
						data-aos-duration='800'
						data-aos-delay='200'
						data-aos-offset='200'>
						<h1 className='fw-bold member__title text-white pb-3 pt-5'>Join as a member </h1>
						<p className='text-white member__text pb-3'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi autem iusto beatae odio, amet aspernatur saepe eos obcaecati consequuntur, iure odit facere. Dolor, amet neque. Quo reiciendis magnam commodi repellat asperiores corrupti, vero aliquam nulla eveniet totam! Natus earum unde asperiores, totam sapiente ipsa delectus minima cumque sunt quod!
						</p>
						<div className='btn btn-danger btn-lg fw-semibold mt-3 px-5 fs-3'>
							<Link
								to='/registration'
								className='text-decoration-none text-white'>
								Join us
							</Link>
						</div>
					</div>
					<div
						className='col-md-6 order-0 order-md-1'
						data-aos='zoom-in-left'
						data-aos-duration='800'
						data-aos-delay='250'
						data-aos-offset='250'>
						<LazyLoadImage
							src={card}
							alt='member card'
							className='img-fluid member__card'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Member;
