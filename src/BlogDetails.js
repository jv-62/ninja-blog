import { useHistory, useParams } from 'react-router';
import { API_BASE_URL } from './constant';
import useFetch from './useFetch';

const BlogDetails = () => {
	const { id } = useParams();
	const { Data: blog, error, isPending } = useFetch(`${API_BASE_URL}/blogs/${id}`);
	const history = useHistory();

	const handleClick = () => {
		fetch(`${API_BASE_URL}/blogs/${blog.id}`, {
			method: 'DELETE',
		}).then(() => {
			history.push('/');
		});
	};

	return (
		<div className='blog-details'>
			{isPending && <div>Loading...</div>}
			{error && <div>{error}</div>}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
					<div>{blog.body}</div>
					<button onClick={handleClick}>Delete</button>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
