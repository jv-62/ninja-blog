import { useEffect, useState } from 'react';

const useFetch = url => {
	const [Data, setData] = useState();

	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortCont = new AbortController();
		setTimeout(() => {
			fetch(url, { signal: abortCont.signal })
				.then(res => {
					if (!res.ok) {
						throw Error('Could not fetch data from server');
					}
					return res.json();
				})
				.then(data => {
					setData(data);
					setIsPending(false);
					setError(null);
				})
				.catch(error => {
					if (error.name === 'AbortError') {
						console.log('Fetch abort');
					} else {
						setError(error.message);
						setIsPending(false);
					}
				});
			return () => abortCont.abort();
		}, 1000);
	}, [url]);
	return { Data, isPending, error };
};

export default useFetch;
