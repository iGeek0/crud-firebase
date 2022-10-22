import {useEffect} from 'react';

function Home() {
    useEffect(() => {
        console.log(process.env.REACT_APP_API_URL);
    }, []);
    return ( 
        <>
        <h1>Mi pagina de inicio</h1>
        <p>Crud App Firebase v1.0</p>
        </>
     );
}

export default Home;