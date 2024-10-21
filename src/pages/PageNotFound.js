import { useLocation } from 'react-router-dom'

const PageNotFound = (() => {
    let location = useLocation();

    console.log(location);

    return (
        <h2>
            Page {location.pathname} not found
        </h2>
    )
});

export default PageNotFound;