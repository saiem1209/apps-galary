import React from 'react';
import { Link } from 'react-router';

const AppCard = ({ app }) => {
    return (
        <div className="card bg-base-100 w-75 h-full shadow-sm">
            <figure className='h-48 overflow-hidden'>
                <img
                    src={app.image}
                    className="h-full w-full p-3"
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {app.title}

                </h2>

                <div className=" flex justify-between py-3 mt-auto">
                    <Link to='/installation' className="btn text-green-600"><img src="https://i.ibb.co.com/My7yPXf2/icon-downloads.png" className='br-2 w-5 h-5' alt="" srcset="" />{app.downloads}</Link>
                    <button className="btn text-amber-600"> <img src="https://i.ibb.co.com/Mxc8s6nY/icon-ratings.png" className='br-2 w-5 h-5' alt="" srcset="" />{app.ratingAvg}</button>
                </div>
            </div>

        </div>

    );
};

export default AppCard;