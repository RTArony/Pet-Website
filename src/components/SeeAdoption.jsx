import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SidebarMenu from "./Menu";

const SeeAdoption = () => {
    const pets = useLoaderData();
    return (
        <div >
        <SidebarMenu></SidebarMenu>
            <div className="min-h-screen bg-gradient-to-r bg-pink-200 flex justify-center items-center">
                <div className="w-full max-w-3xl space-y-6">
                    {pets.length > 0 ? (
                    pets.map((pet, index) => (
                        <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition"
                        >
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-gray-800">{pet.selectedAnimal}</h3>
                        </div>
                        <ul className="list-disc pl-5 mt-4 text-gray-800">
                            {pet.selectedConditions.map((condition, idx) => (
                                <li key={idx}>{condition}</li>
                            ))}
                                </ul>
                        <p className="text-gray-800 mt-4">{pet.ageRange}</p>
                        <p className="text-gray-800 mt-4">{pet.description}</p>
                        <figure>
                            <img src={pet.image}
                            className="w-full h-auto rounded-md mt-4"
                              />
                        </figure>
                        </div>
                    ))
                    ) : (
                    <p className="text-center text-gray-500">No pet available yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SeeAdoption;