import React, { useState } from 'react';
import useApp from '../hook/useApp';
import AppCard from '../Components/AppCard';

const Apps = () => {
    const { apps } = useApp();
    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchedProducts = term
        ? apps.filter(app =>
            app.title.toLocaleLowerCase().includes(term)
        )
        : apps
    return (
        <div className="text-center py-10 bg-gray-100">
            <h1 className="text-3xl font-bold">Our All Applications</h1>
            <p className="text-gray-400">
                Explore All Apps on the Market developed by us. We code for Millions
            </p>
            <div className="flex justify-between px-8 items-center py-5">
                <h1 className="text-xl font-semibold">
                    <span>({searchedProducts.length})</span> Apps Found
                </h1>
                <label className="input flex items-center border rounded px-2 py-1">
                    <svg
                        className="h-[1em] opacity-50 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input

                        placeholder="Search"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        type="search"
                    />
                </label>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-4 p-5">
                {
                    searchedProducts.map(app => (
                        <AppCard key={app.id} app={app}></AppCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Apps;