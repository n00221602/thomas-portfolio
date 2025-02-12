import { useNavigate } from 'react-router-dom';

const RedirectExample = (() => {

    let navigate = useNavigate();

    const handleClick = () => {
        console.log("clicked")
        navigate("/")
    }

    return(
        <>
        <h1>Redirect</h1>
        <button onClick={handleClick}>Click to Redirect</button>
        </>
    )
});

export default RedirectExample;