
import { useParams } from 'react-router';
import useApp from '../hook/useApp';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";
import { useState } from 'react';
import { toast } from 'react-toastify';

const AppDetails = () => {
    const { id } = useParams()
    const [installed, setInstalled] = useState(false);

    const { apps, loading} = useApp();
    const app = apps.find(a => String(a.id) === id)
    if (loading) return <p>loading...</p>
    const { title, image } = app || {}
    const handleInstall = () => {
        const existingList = JSON.parse(localStorage.getItem('applist'))
        let updatedList = []
        if (existingList) {
            const isDuplicate = existingList.some(p => p.id === app.id)
            if (isDuplicate) return alert('Already Installed')
            updatedList = [...existingList, app]
        } else {
            updatedList.push(app)
        }
        localStorage.setItem('applist', JSON.stringify(updatedList))

        setInstalled(true);
        toast.success(`${app.title} installed successfully!`);
    }


    return (
        <div className="max-w-5xl mx-auto py-8 px-4 space-y-6">

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white rounded-xl p-6 shadow">

                <img
                    src={image}
                    alt={title}
                    className="w-40 h-40 object-cover rounded-lg"
                />

                <div className="flex-1 space-y-3">
                    <h1 className="text-2xl font-bold">{app.title}</h1>

                    <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
                        <span>⭐ {app.ratingAvg} / 5</span>
                        <span>📥 {app.downloads} Downloads</span>
                        <span>💬 {app.reviews} Reviews</span>
                        <span>🏢 {app.companyName}</span>
                    </div>


                    <button
                        onClick={handleInstall}
                        disabled={installed}
                        className={`px-6 py-2 rounded-lg text-white font-medium ${installed ? "bg-gray-400 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-700"
                            }`}
                    >
                        {installed ? "Installed ✅" : "Install"}
                    </button>
                </div>
            </div>


            <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-xl font-semibold mb-4">User Review Summary</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={app.ratings}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" fill="#10b981" radius={[5, 5, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>


            <div className="bg-white p-6 rounded-xl shadow space-y-3">
                <h2 className="text-xl font-semibold">Description</h2>
                <p className="text-gray-700 leading-relaxed">{app.description}</p>
            </div>
        </div>
    );
};

export default AppDetails;