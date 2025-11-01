
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyinstallApps from "../Components/MyinstallApps";

const Installation = () => {

    const [applist, setApplist] = useState([])
    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('applist'))
        if (savedList) setApplist(savedList)
    }, [])

    if (!applist.length) return <p>No Data Available</p>

    const handleUninstall = (id) => {
        let updatedList = (JSON.parse(localStorage.getItem('applist'))).filter(p => p.id!== id)
        setApplist(updatedList)
        localStorage.setItem('applist', JSON.stringify(updatedList))
        toast.info("has been uninstalled!");

    }

    return (
        <div className="bg-gray-100 text-center py-10">
            <h1 className="text-3xl font-semibold">Your Installed Apps</h1>
            <p className="text-gray-400">
                Explore All Trending Apps on the Market developed by us
            </p>


            <div className="flex justify-between items-center p-8">
                <h1>Apps Found ({applist.length})</h1>

                <div className="relative inline-block group">
                    <button className="bg-gray-100 text-gray-800 px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-200 transition">
                        Sort By Size +
                    </button>

                    <div className="hidden absolute bg-white min-w-[120px] border border-gray-300 rounded-md shadow-md group-hover:block mt-1 z-10">
                        <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-gray-100">
                            Small
                        </a>
                        <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-gray-100">
                            Medium
                        </a>
                        <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-gray-100">
                            Large
                        </a>
                    </div>
                </div>
            </div>


            <div className="py-8 flex flex-col gap-5 p-10">
                {applist.map((install) => (
                    <MyinstallApps
                    handleUninstall={handleUninstall}
                        key={install.id}
                        install={install}
                    />
                ))}
            </div>


            <ToastContainer position="top-right" autoClose={3000} theme="colored" />
        </div>
    );
};

export default Installation;
