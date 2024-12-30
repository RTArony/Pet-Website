import React, { useState } from "react";
import SidebarMenu from "./Menu";

const GiveAdoption = () => {
    const [selectedAnimal, setSelectedAnimal] = useState("");
    const [selectedConditions, setSelectedConditions] = useState([]);
    const [ageRange, setAgeRange] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    const conditions = [
        "Vaccinated",
        "Neutered",
        "Good with kids",
        "House trained",
        "Microchipped",
        "Special needs",
        "Friendly with other pets",
    ];

    const ageRanges = ["0-1 year", "1-5 years", "5+ years"];

    const handleConditionChange = (condition) => {
        if (selectedConditions.includes(condition)) {
            setSelectedConditions(selectedConditions.filter((c) => c !== condition));
        } else {
            setSelectedConditions([...selectedConditions, condition]);
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const adoptionData = {
            selectedAnimal,
            selectedConditions,
            ageRange,
            description,
            image,
        };
        console.log("Adoption submitted:", adoptionData);
        // Add logic to send adoptionData to the backend or handle it as required

        fetch('http://localhost:5000/adoptionpost', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adoptionData)
          })
            .then(res => res.json())
            .then(data => {
                console.log(data);
      
                if (data.insertedId) {
                  alert("Adoption post added successfully!!!")
                  
                }
            })
    };

    return (
        <div>
            <SidebarMenu />
            <div className="min-h-screen bg-gradient-to-r bg-pink-200 flex justify-center items-center">
                <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Give Adoption</h1>
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

                        {/* Conditions Checkboxes */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Conditions
                            </label>
                            <div className="space-y-2 mt-2">
                                {conditions.map((condition, index) => (
                                    <div key={index} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id={`condition-${index}`}
                                            value={condition}
                                            checked={selectedConditions.includes(condition)}
                                            onChange={() => handleConditionChange(condition)}
                                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                        />
                                        <label
                                            htmlFor={`condition-${index}`}
                                            className="ml-2 text-sm text-gray-700"
                                        >
                                            {condition}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Age Range Dropdown */}
                        <div>
                            <label htmlFor="ageRange" className="block text-sm font-medium text-gray-700">
                                Age Range
                            </label>
                            <select
                                id="ageRange"
                                value={ageRange}
                                onChange={(e) => setAgeRange(e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                required
                            >
                                <option value="" disabled>
                                    Select age range
                                </option>
                                {ageRanges.map((range, index) => (
                                    <option key={index} value={range}>
                                        {range}
                                    </option>
                                ))}
                            </select>
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
                                placeholder="Describe the pet..."
                                rows="4"
                                required
                            ></textarea>
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
        </div>
    );
};

export default GiveAdoption;
