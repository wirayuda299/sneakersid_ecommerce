import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { AiOutlineHeart, AiOutlinePlus, AiOutlineMinus, AiOutlineStar, AiFillStar, } from 'react-icons/ai';
import { client, urlFor } from '../../../lib/client';
import Loader from '../../components/loader/Loader';
import { useStateContext } from '../../../context/StateContext';
import toast from 'react-hot-toast';
import bg from '../../assets/image/bg.jpg';

const ProductDetail = () => {
	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();
	const { decreaseQuantity, increaseQuantity, quantity, addToCart } = useStateContext();

	const formatToRupiah = new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
	});

	useEffect(() => {
		async function getProduct() {
			try {
				const query = `*[_type == "product" && _id == "${id}"]`;
				const response = await client
					.fetch(query)
					.then((item) => setProduct(item));
				setLoading(false);
				return response;
			} catch (error) {
				setLoading(false);
				toast.error('failed to get product detail because of', error.responseText);
			}
		}
		getProduct();
	}, []);

	return (
		<>
			{loading ? <Loader /> : (
				product.map((item) => {
					return (
						<div className='container-fluid p-3' style={
							{
								backgroundImage: `url(${bg})`,
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center'
							}}>
							<div className="container">
								<div className='row justify-content-between align-items-center gx-3'>
									<div className='col-md-6 py-3'>
										<div className='container'>
											<div className='carousel carousel-fade' id='productDetailModal' data-bs-ride='carousel'>
												<div className='carousel-inner text-dark'>
													<div className='carousel-item active' key={item._id}>
														<img className='d-block w-100' src={urlFor(item?.image[0])} alt='...' />
													</div>
													{item.image.map((image) => {
														return (
															<div className='carousel-item' key={image.asset._id}>
																<img src={urlFor(image)} className='d-block w-100' alt='...' />
															</div>
														);
													})}
												</div>
												<button className='carousel-control-prev' type='button' data-bs-target='#productDetailModal' data-bs-slide='prev'>
													<span className='carousel-control-prev-icon' aria-hidden='true'></span>
													<span className='visually-hidden'>Previous</span>
												</button>
												<button className='carousel-control-next' type='button' data-bs-target='#productDetailModal' data-bs-slide='next'>
													<span className='carousel-control-next-icon' aria-hidden='true'></span>
													<span className='visually-hidden'>Next</span>
												</button>
											</div>
										</div>
									</div>

									<div className='col-md-6'>
										<div className='container product-detail text-white'>
											<div>
												<h1 className='product-detail__title'>{item.name}</h1>
											</div>
											<p className='product-detail__price'>{formatToRupiah.format(Number(item.price))}</p>
											<div className='pb-3 product-detail__review'>
												<small className='text-warning'><AiFillStar /></small>
												<small className='text-warning'><AiFillStar /></small>
												<small className='text-warning'><AiFillStar /></small>
												<small className='text-warning'><AiFillStar /></small>
												<small className='text-warning'><AiFillStar /></small>
											</div>
											<p className='product-detail__desc'>{item.description}</p>
											<ul className='product-detail__list'>
												<li className='py-1'>Color : {item.color}</li>
												<li className='py-1'>Style : {item.style}</li>
												<li className='py-1'>Country : {item.country}</li>
											</ul>
											<div className='product-detail__quantity pb-2'>
												<div className='d-flex align-items-center'>
													<p className='pe-3'>Quantity:</p>
													<div className='quantity-btn__increase'>
														<button className='btn border text-white ' onClick={increaseQuantity}><AiOutlinePlus /> </button>
													</div>
													<p className='px-3'>{quantity}</p>
													<div className='quantity-btn__decrease'>
														<button className='btn text-white border' onClick={decreaseQuantity}><AiOutlineMinus /> </button>
													</div>
												</div>
											</div>

											<button
												className='btn btn-light shadow btn-lg w-100 rounded-pill py-3' onClick={() => addToCart(item, quantity)}
												role='button'>
												Add to Cart
											</button>
											<button
												className='btn btn-outline-secondary mt-3 btn-lg w-100 rounded-pill py-3'
												role='button'>
												Add to Favorite
												<AiOutlineHeart className='ps-1' />
											</button>
											{/* <div
												className='accordion accordion-flush mt-3  '
												id='delivery-text '>
												<div
													className='accordion-item border-0 outline-0 mt-3 bg-dark shadow-0 rounded'>
													<h2
														className='accordion-header shadow-sm rounded-pill'
														id='headingOne'>
														<button
															className='accordion-button bg-dark mt-2 text-decoration-none text-white rounded-pill py-3'
															type='button'
															data-bs-toggle='collapse'
															data-bs-target='#collapseOne'
															aria-expanded='true'
															aria-controls='collapseOne'>
															Free Delivery and Returns
														</button>
													</h2>

													<div
														id='collapseOne'
														class='accordion-collapse collapse '
														aria-labelledby='headingOne'
														data-bs-parent='#delivery-text'>
														<div className='accordion-body text-white'>
															<p>
																Your order of Rp 3,000,000 or more gets free
																standard delivery.
															</p>
															<ul>
																<li>Standard delivery 6–12 Working Days</li>
																<li>Express delivery 3–10 Working Days</li>
															</ul>
															<p>
																During checkout, we'll provide you with the
																estimated delivery date based on your order's
																delivery address. Orders are processed and
																delivered Monday–Friday (excluding public
																holidays). Sneakers.id Members enjoy free
																returns. Exclusions Apply.
															</p>
														</div>
													</div>
												</div>
											</div> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})
			)}
			<Outlet />
		</>
	);
};
export default ProductDetail;
