import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Product from './pages/products/Products';
import Error from './pages/error/Error';
import Home from './pages/home/Home.jsx';
import ProductDetail from './pages/products/ProductDetail';
import Registration from './pages/registration/Form';
import Footer from './components/footer/Footer';
import './style/global.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Login from './pages/login/Login';
import { StateProvider } from '../context/StateContext';

Aos.init({
	disable: false,
	startEvent: 'DOMContentLoaded',
	initClassName: 'aos-init',
	animatedClassName: 'aos-animate',
	useClassNames: false,
	disableMutationObserver: false,
	debounceDelay: 50,
	throttleDelay: 99,
});
function App() {
	return (
		<StateProvider>
			{/* enable pass data from anywhere*/}
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/products'
						element={<Product />}
					/>
					<Route
						path='/products/:id'
						element={<ProductDetail />}
					/>
					<Route
						path='/best-seller/:id'
						element={<ProductDetail />}
					/>
					<Route
						path='/registration'
						element={<Registration />}
					/>
					<Route
						path='/login'
						element={<Login />}
					/>
					<Route
						path='*'
						element={<Error />}
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</StateProvider>
	);
}

export default App;
