import { useParams } from 'react-router-dom';

const Show = (() => {
    let {id} = useParams();
    return (
        <h1>This is book {id}</h1>
    )
})

export default Show;