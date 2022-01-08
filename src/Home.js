import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    // const [blogs, setBlogs] = useState()

    // const [name, setName] = useState('Mario');
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);

    const { Data, isPending, error } = useFetch('http://localhost:8000/blogs');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    // useEffect(() => {
    //     console.log('This works like ngOninit from angular');
    //     console.log('Name ==> ', name);
    //     fetch('http://localhost:8000/blogs').then((res) => {
    //         console.log('Res', res);
    //         if (!res.ok) {
    //             throw Error('Could not fetch data from server');
    //         }
    //         return res.json();
    //     }).then((data) => {
    //         setBlogs(data);
    //         setIsPending(false);
    //         setError(null);
    //     }).catch((error) => {
    //         setError(error.message);
    //         setIsPending(false);
    //     })
    // }, [name]) //If we don't use [] this then it will run as we change anything in useState
    // If we write something in this [] brackets that is going to be dependent.
    // Suppose we have a state name and we pass that in [] this then it will rerender if that value changes


    // const [name, setName] = useState('Mario');
    // const clickMeAgain = (name) => {
    //     console.log(`Hello ${name}`);
    //     setName(name);
    // }
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loding...</div>}
            {Data && <BlogList blogs={Data} title="All Blogs!" />}
            {/* handleDelete={handleDelete} */}
            {/* <button onClick={() => setName('Ninja')}>Change Name</button>
            <p>{name}</p> */}
            {/* <p>Name = {name}</p>
            <button onClick={() => clickMeAgain('Ninjas')}>Click me again</button> */}
        </div>
    );
}

export default Home;