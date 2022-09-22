import Banner from '../../components/banner/Banner';
import Member from '../../components/member/Member';
import BestSeller from '../../components/bestSeller/BestSeller';

const Home = () => {
	return (
		<>	
			<section>
				<Banner />
			</section>
			<section>
				<BestSeller />
			</section>
			<section>
				<Member />
			</section>		
		</>
	)
};
export default Home;
