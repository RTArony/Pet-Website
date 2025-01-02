import React, { useState } from "react";
import { useLoaderData } from 'react-router-dom';
import SidebarMenu from "./Menu";

const LostAndFound = () => {

    const losts = useLoaderData();

    const [alllost, setalllost]= useState(losts);


    const [selectedAnimal, setSelectedAnimal] = useState("");
    const [lastSeen, setLastSeen] = useState("");
    const [specialMark, setSpecialMark] = useState("");
    const [description, setDescription] = useState("");
    const [returnPlace, setReturnPlace] = useState("");
    const [image, setImage] = useState(null);

    const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
    };

    const handledelete = _id =>{
        console.log('delete',_id);
        fetch(`http://localhost:5000/lost/${_id}`,{
            method: 'DELETE',
          })
            .then(res => res.json())
            .then(data => {
                console.log("deleted succesfully",data);
                const remaining= alllost.filter(remain => remain._id !== _id);
                setalllost(remaining)
            })

    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const lostAndFoundData = {
            selectedAnimal,
            lastSeen,
            specialMark,
            description,
            returnPlace,
            image,
        };
        console.log("Lost and Found submitted:", lostAndFoundData);
        // Add logic to send lostAndFoundData to the backend or handle it as required

        fetch('http://localhost:5000/lost', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(lostAndFoundData)
          })
            .then(res => res.json())
            .then(data => {
                console.log(data);
      
                if (data.insertedId) {
                  alert("Data added successfully!!!")
                  
                }
            })
    };

    return (
        <div>
            <SidebarMenu />
            <div className="min-h-screen bg-gradient-to-r bg-pink-200 flex justify-center items-center">
                <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Lost & Found</h1>
                    <h1 className="text-2xl font-bold text-gray-600 mb-1">(Fillup the form to find your lost friend)</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Animal Dropdown */}
                        <div>
                            <label htmlFor="animal" className="block text-sm font-medium text-gray-700">
                                Choose Animal
                            </label>
                            <select
                                id="animal"
                                value={selectedAnimal}
                                onChange={(e) => setSelectedAnimal(e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                required
                            >
                                <option value="" disabled>
                                    Select an animal
                                </option>
                                <option value="Cat">Cat</option>
                                <option value="Dog">Dog</option>
                                <option value="Bird">Bird</option>
                                <option value="Rabbit">Rabbit</option>
                                <option value="Monkey">Monkey</option>
                            </select>
                        </div>

                        {/* Last Seen Input */}
                        <div>
                            <label htmlFor="lastSeen" className="block text-sm font-medium text-gray-700">
                                Place Where It Was Last Seen
                            </label>
                            <input
                                type="text"
                                id="lastSeen"
                                value={lastSeen}
                                onChange={(e) => setLastSeen(e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Enter last seen location"
                                required
                            />
                        </div>

                        {/* Special Mark Input */}
                        <div>
                            <label htmlFor="specialMark" className="block text-sm font-medium text-gray-700">
                                Special Mark to Recognize
                            </label>
                            <input
                                type="text"
                                id="specialMark"
                                value={specialMark}
                                onChange={(e) => setSpecialMark(e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Enter any special mark"
                                required
                            />
                        </div>

                        {/* Description Input */}
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Provide a description"
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        {/* Return Place Input */}
                        <div>
                            <label htmlFor="returnPlace" className="block text-sm font-medium text-gray-700">
                                Where to Return
                            </label>
                            <input
                                type="text"
                                id="returnPlace"
                                value={returnPlace}
                                onChange={(e) => setReturnPlace(e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Enter return location"
                                required
                            />
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                Upload Image
                            </label>
                            <input
                                type="file"
                                id="image"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                                required
                            />
                            {image && <img src={image} alt="Uploaded" className="mt-4 max-h-48" />}
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-pink-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>




            {/* <div className="min-h-screen bg-gradient-to-r bg-pink-200 flex justify-center items-center">
                <div className="w-full max-w-3xl space-y-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">LOST ANIMALS</h1>
                <h1 className="text-2xl font-bold text-gray-600 mb-1">Help People Find Their Furry Friend!!!!</h1>
                    {losts.length > 0 ? (
                    losts.map((lost, index) => (
                        <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition"
                        >
                        <button 
                        onClick={()=> handledelete(lost._id)}
                        className="text-gray-500 hover:text-black focus:outline-none"
                        >
                        X
                        </button>
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-gray-800">Animal :{lost.selectedAnimal}</h3>
                        </div>
                        <p className="text-gray-800 mt-4"><strong>Last Seen at:</strong>{ lost.lastSeen}</p>
                        <p className="text-gray-800 mt-4"><strong>Special Mark :</strong>{lost.specialMark}</p>
                        <p className="text-gray-800 mt-4"><strong>Description :</strong>{lost.description}</p>
                        <p className="text-gray-800 mt-4"><strong>If Found, Please Return to :</strong>{lost.returnPlace}</p>
                        <figure>
                            <img src={lost.image}
                            className="w-full h-auto rounded-md mt-4"
                              />
                        </figure>
                        </div>
                    ))
                    ) : (
                    <p className="text-center text-gray-500">No pet available yet.</p>
                    )}
                </div>
            </div> */}

            <div className="min-h-screen bg-gradient-to-r bg-pink-200 flex justify-center items-center">
            <div className="w-full max-w-6xl space-y-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">LOST ANIMALS</h1>
                <h1 className="text-2xl font-bold text-gray-600 mb-1">Help People Find Their Furry Friend!!!!</h1>
                {losts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {losts.map((lost, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition"
                    >
                        <button 
                        onClick={() => handledelete(lost._id)}
                        className="text-gray-500 hover:text-black focus:outline-none"
                        >
                        X
                        </button>
                        <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-gray-800">Animal: {lost.selectedAnimal}</h3>
                        </div>
                        <p className="text-gray-800 mt-4"><strong>Last Seen at:</strong> {lost.lastSeen}</p>
                        <p className="text-gray-800 mt-4"><strong>Special Mark:</strong> {lost.specialMark}</p>
                        <p className="text-gray-800 mt-4"><strong>Description:</strong> {lost.description}</p>
                        <p className="text-gray-800 mt-4"><strong>If Found, Please Return to:</strong> {lost.returnPlace}</p>
                        <figure>
                        <img 
                            src={lost.image}
                            className="w-full h-auto rounded-md mt-4"
                            alt="Lost Animal"
                        />
                        </figure>
                    </div>
                    ))}
                </div>
                ) : (
                <p className="text-center text-gray-500">No pet available yet.</p>
                )}
            </div>
            </div>

        
        </div>

    );
};

export default LostAndFound;
