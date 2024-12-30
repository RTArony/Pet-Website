import React, { useState } from "react";
import { useLoaderData } from 'react-router-dom';
import SidebarMenu from "./Menu";

const Petlisting = () => {

    const pets = useLoaderData();

  const [animal, setAnimal] = useState("cat");
  const [petName, setPetName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [story, setStory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ animal, petName, imageUrl, story });
    alert("Pet information submitted successfully!");
  };

  return (
    <div>
        <SidebarMenu></SidebarMenu>
    
        <div className="min-h-screen bg-pink-200 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold mb-4 text-center">Pet Listing Form</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="animal" className="block text-sm font-medium text-gray-700 mb-1">
                Select Animal
                </label>
                <select
                id="animal"
                value={animal}
                onChange={(e) => setAnimal(e.target.value)}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                >
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
                <option value="bird">Bird</option>
                <option value="rabbit">Rabbit</option>
                <option value="monkey">Monkey</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="petName" className="block text-sm font-medium text-gray-700 mb-1">
                Pet Name
                </label>
                <input
                id="petName"
                type="text"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                placeholder="Enter pet name"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
                </label>
                <input
                id="imageUrl"
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Enter image URL"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="story" className="block text-sm font-medium text-gray-700 mb-1">
                Pet's Story
                </label>
                <textarea
                id="story"
                value={story}
                onChange={(e) => setStory(e.target.value)}
                placeholder="Share something about your pet"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
            >
                Submit
            </button>
            </form>
        </div>
        </div>


        <div className="min-h-screen bg-gradient-to-r bg-pink-200 flex justify-center items-center">
                <div className="w-full max-w-3xl space-y-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Pets Family</h1>
                <h1 className="text-2xl font-bold text-gray-600 mb-1">Help People Find Their Furry Friend!!!!</h1>
                    {pets.length > 0 ? (
                    pets.map((pet, index) => (
                        <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition"
                        >
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-gray-800">Animal :{pet.animal}</h3>
                        </div>
                        <p className="text-gray-800 mt-4"><strong>Last Seen at:</strong>{ pet.petName}</p>
                        <p className="text-gray-800 mt-4"><strong>Special Mark :</strong>{pet.imageUrl}</p>
                        <p className="text-gray-800 mt-4"><strong>Description :</strong>{pet.story}</p>
                        
                        <figure>
                            <img src={pet.imageUrl}
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

export default Petlisting;