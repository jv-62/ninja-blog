import BlogList from './BlogList';
import { API_BASE_URL } from './constant';
import useFetch from './useFetch';

const Home = () => {
	const { Data, isPending, error } = useFetch(`${API_BASE_URL}/blogs`);
	return (
		<div className='home'>
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{Data && <BlogList blogs={Data} title='All Blogs!' />}
		</div>
	);
};

export default Home;
