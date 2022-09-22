import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { client, urlFor } from '../../../lib/client.js'
import Loader from '../../components/loader/Loader'
import gotham from '../../assets/image/Gotham.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Products = () => {
	const [allProducts, setAllProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const formatToRupiah = new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
	});

	useEffect(() => {
		async function getAllProducts() {
			try {
				const query = '*[_type == "product"]'
				const reqProducts = await client.fetch(query)
					.then((data) => setAllProducts(data))
				setLoading(false)
				return reqProducts
			} catch (error) {
				setLoading(false)
				toast.error('failed to get product detail because of', error);
			}
		}
		getAllProducts()
	}, []);


	return (
		<>
			{loading ? <Loader /> : (
				<main>
					<div className='container-fluid px-0 pb-5' style={{
						backgroundImage: `url(${gotham})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
				

					}}>
						<div className="container product">
							<div className='row g-4'>
								{allProducts.map((product, index) => (
									<div className='col-md-4' key={product._id}>
										<Link to={`/products/${product._id}`} className='text-decoration-none'>
											<div className='card product__card shadow-sm '>
												<LazyLoadImage className='card-img-top product__card__img' src={urlFor(product?.image[0])} alt={product.name} lazy />
												<div className='card-body'>
													<h5 className='card-title text-white lead fw-bold'>{product.name}</h5>
													<em className='text-white pb-4'>{product.categories} shoe</em> <br />
													<small className='card-text text-white'>{formatToRupiah.format(product.price)}</small>
												</div>
											</div>
										</Link>
									</div>
								))}
							</div>
						</div>
					</div>
				</main>
			)}
		</>
	);
}
export default Products;
