import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SidebarMenu from "./Menu";

const SearchingPet = () => {
    const pets = useLoaderData();

    const [allpets, setallpets]= useState(pets);

    const handledelete = _id =>{
        console.log('delete',_id);
        fetch(`http://localhost:5000/searchpet/${_id}`,{
            method: 'DELETE',
          })
            .then(res => res.json())
            .then(data => {
                console.log("deleted succesfully",data);
                const remaining= allpets.filter(remain => remain._id !== _id);
                setallpets(remaining)
            })

    }

    return (
        <div >
        <SidebarMenu></SidebarMenu>
            <div className="min-h-screen bg-gradient-to-r bg-pink-200 flex justify-center items-center">
                <div className="w-full max-w-3xl space-y-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">FIND YOUR FUTURE FURRY FRIEND!!</h1>
                    {pets.length > 0 ? (
                    pets.map((pet, index) => (
                        <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition"
                        >
                        <button 
                        onClick={()=> handledelete(pet._id)}
                        className="text-gray-500 hover:text-black focus:outline-none"
                        >
                        X
                        </button>
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-gray-800">{pet.selectedAnimal}</h3>
                        </div>
                        <ul className="list-disc pl-5 mt-4 text-gray-800">
                            {pet.selectedConditions.map((condition, idx) => (
                                <li key={idx}>{condition}</li>
                            ))}
                                </ul>
                        <p className="text-gray-800 mt-4">{pet.description}</p>
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

export default SearchingPet;