import React, { useState } from "react";
import { useLoaderData } from 'react-router-dom';
import SidebarMenu from "./Menu";

const PetRescue = () => {

    const rescued = useLoaderData();

    const [rescueds, setrescueds]= useState(rescued);



    const [selectedCondition, setSelectedCondition] = useState([]);
    const [selectedAnimal, setSelectedAnimal] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [contactInfo, setContactInfo] = useState("");

    const handleConditionChange = (condition) => {
        setSelectedCondition((prevConditions) =>
            prevConditions.includes(condition)
                ? prevConditions.filter((c) => c !== condition)
                : [...prevConditions, condition]
        );
    };

    const handledelete = _id =>{
        console.log('delete',_id);
        fetch(`http://localhost:5000/rescue/${_id}`,{
            method: 'DELETE',
          })
            .then(res => res.json())
            .then(data => {
                console.log("deleted succesfully",data);
                const remaining= rescueds.filter(resc => resc._id !== _id);
                setrescueds(remaining)
            })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const rescueData = {
            selectedCondition,
            selectedAnimal,
            location,
            description,
            contactInfo,
        };
        console.log("Rescue data submitted:", rescueData);
        // Add logic to send rescueData to the backend or handle it as required

        fetch('http://localhost:5000/rescue', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(rescueData)
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
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Pet Rescue</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Rescue Condition Checkboxes */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Condition of the Animal
                            </label>
                            <div className="space-y-2">
                                {[
                                    { label: "Urgent", value: "Urgent" },
                                    { label: "Within 1 Day", value: "Within 1 Day" },
                                    { label: "Within 2 to 5 Days", value: "Within 2 to 5 Days" },
                                ].map((condition) => (
                                    <div key={condition.value}>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox rounded text-indigo-600 focus:ring-indigo-500"
                                                checked={selectedCondition.includes(condition.value)}
                                                onChange={() => handleConditionChange(condition.value)}
                                            />
                                            <span className="ml-2 text-gray-700">{condition.label}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

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
                                <option value="cat">Cat</option>
                                <option value="dog">Dog</option>
                                <option value="bird">Bird</option>
                                <option value="rabbit">Rabbit</option>
                                <option value="monkey">Monkey</option>
                            </select>
                        </div>

                        {/* Location Input */}
                        <div>
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                Location
                            </label>
                            <input
                                type="text"
                                id="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Enter location"
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

                        {/* Contact Info Input */}
                        <div>
                            <label htmlFor="contactInfo" className="block text-sm font-medium text-gray-700">
                                Contact Information
                            </label>
                            <input
                                type="text"
                                id="contactInfo"
                                value={contactInfo}
                                onChange={(e) => setContactInfo(e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Enter contact information"
                                required
                            />
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


            <div className="min-h-screen bg-gradient-to-r bg-pink-200 flex justify-center items-center">
                <div className="w-full max-w-3xl space-y-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Animals Waiting To Be Rescued!!!!</h1>
                <h1 className="text-2xl font-bold text-gray-600 mb-1">Your Furry Friend Need You!</h1>
                    {rescued.length > 0 ? (
                    rescued.map((rescue, index) => (
                        <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition"
                        >
                        <button 
                        onClick={()=> handledelete(rescue._id)}
                        className="text-gray-500 hover:text-black focus:outline-none"
                        >
                        X
                        </button>
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-gray-800">{rescue.selectedCondition}</h3>
                        </div>
                        <p className="text-gray-800 mt-4"><strong>Animal:</strong>{ rescue.selectedAnimal}</p>
                        <p className="text-gray-800 mt-4"><strong>Location :</strong>{rescue.location}</p>
                        <p className="text-gray-800 mt-4"><strong>Description :</strong>{rescue.description}</p>
                        <p className="text-gray-800 mt-4"><strong>If Rescued, Please Contact to :</strong>{rescue.contactInfo}</p>
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

export default PetRescue;
