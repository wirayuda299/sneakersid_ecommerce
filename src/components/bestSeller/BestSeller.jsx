import { client, urlFor } from '../../../lib/client';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useEffect, useState } from 'react';
import gotham from '../../assets/image/gotham.jpg';
import toast from 'react-hot-toast';

const BestSeller = () => {
	const formatToRupiah = new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
	});

	const [best, setBest] = useState([]);
	useEffect(() => {
		try {
			async function getBestSeller() {
				const productQuery = '*[_type == "best"]';
				const response = await client
					.fetch(productQuery)
					.then((data) => setBest(data));
				return response;
			}
			getBestSeller();
		} catch (error) {
			toast.error(`failed to fetch data because of`, error.responseText);
		}
	}, []);

	return (
		<>
			<div className='container-fluid pb-5 border-bottom best-seller' style={{
				backgroundImage: `url(${gotham})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat'
			}}>
				<h1 className='best-seller__title text-center text-white pt-5'>Best Seller Products</h1>
				<p className='text-center best-seller__subtitle text-white'>here is our best seller products of the year</p>
				<div className='container'>
					<div className='row justify-content-center align-items-center gy-3'>
						{best.map((item, index) => {
							return (
								<div className='col-md-4' key={item._id}>
									<div className='card best-seller__card' id='card' data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'}
										data-aos-duration='800'
										data-aos-offset='300'
										data-aos-easing='ease'>
										<LazyLoadImage
											src={urlFor(item?.image[0])}
											alt={item.name}
											className='card-img-top'
										/>
										<div className='card-body'>
											<h5 className='card-text lead text-white'>{item.name}</h5>
											<small className='text-white'>{formatToRupiah.format(item.price)}</small>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};
export default BestSeller;
