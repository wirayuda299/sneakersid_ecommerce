const Loader = () => {
	return (
		<div className='container-fluid min-vh-100 bg-dark'>
			<div className='container d-flex justify-content-center align-items-center min-vh-100'>
				<div
					className='spinner-border text-white fs-1'
          role='status' style={
            {
              width: '5rem',
              height: '5rem'
            }
          }>
					<span className='visually-hidden'>Loading...</span>
				</div>
			</div>
		</div>
	);
};
export default Loader;
