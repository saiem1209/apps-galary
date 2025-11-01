
import { useRouteError } from 'react-router';
import errorImg from '../assets/error-404.png'

const Error = () => {
    const error = useRouteError();
    return <div>{error.message}
        <div className='flex justify-center'>
            <img src={errorImg} alt="" srcset="" />
        </div>
        <div className='text-center'>
            <h1 className='text-3xl font-bold'>Oops, page not found!</h1>
            <p className='text-gray-400'>The page you are looking for is not available.</p>
        </div>


    </div>;
};

export default Error;