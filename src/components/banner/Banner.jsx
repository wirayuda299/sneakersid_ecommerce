import { client, urlFor } from '../../../lib/client';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiRightArrow } from 'react-icons/bi';
import bg from '../../assets/image/bg.jpg';
import toast from 'react-hot-toast';
import Loader from '../loader/Loader';
const Banner = () => {
	const [banner, setBanner] = useState([]);
	const [loading, setLoading] = useState(true);
	const section = useRef(null)

	useEffect(() => {
		try {
			async function getBanner() {
				const bannerQuery = '*[_type == "banner"]';
				const response = await client
					.fetch(bannerQuery)
					.then((res) => setBanner(res));
				setLoading(false);
				return response;
			}
			getBanner();
		} catch (err) {
			toast.error('failed to get banner because of', err.responseText);
		}
	}, []);

	return (
		<>
			{
				loading ? <Loader /> : (
					<div className='container-fluid banner pb-5 border-bottom' style={
						{
							backgroundImage: `url(${bg})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat'
						}}>
						{banner.map((item) => (
							<div
								className='container'
								key={item._id}>
								<div className='row justify-content-start justify-content-md-center align-items-center'>
									<div className='col-md-6 order-1 order-md-0'>
										<h1
											className='banner__title text-white py-3'
											data-aos='fade-right'
											data-aos-duration='800'>
											Selling only the best things online
										</h1>
										<Link
											to='/products'
											className='text-decoration-none btn btn-danger px-2 px-md-3 py-1 py-md-2 banner__btn'
											data-aos='fade-right'>
											Shop Now <BiRightArrow />
										</Link>
									</div>
									<div className='col-md-6 order-0 order-md-1'>
										<img
											data-aos='fade-left'
											data-aos-duration='800'
											className='img-fluid banner_img'
											src={urlFor(item?.image[0])}
											alt='banner image'
											width={500}
											height={500}
										/>
									</div>
								</div>
							</div>
						))}
					</div>
				)
			}
		</>
	);
};
export default Banner;
