const Home = () => {
    const handleClick = () => {
        console.log("Button clicked!");
    };
    return (  
        <div className="home">
            <h2>Home Page</h2>
            <p>Welcome to the home page of the Dojo Blog!</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;