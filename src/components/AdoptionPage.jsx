import React, { useState } from "react";
import SidebarMenu from "./Menu";

const AdoptionPage = () => {
  const [selectedAnimal, setSelectedAnimal] = useState("cat");
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [description, setDescription] = useState("");

  const conditions = [
    "Vaccinated",
    "Neutered/Spayed",
    "Good with kids",
    "Good with other pets",
    "Indoor only",
    "Requires special care",
    "House-trained",
  ];

  const handleConditionChange = (condition) => {
    setSelectedConditions((prev) =>
      prev.includes(condition)
        ? prev.filter((c) => c !== condition)
        : [...prev, condition]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const adoptionData = {
      selectedAnimal,
      selectedConditions,
      description,
    };
    console.log("Adoption form submitted:", adoptionData);


    fetch('http://localhost:5000/searchpet', {
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
    <div >
    <SidebarMenu></SidebarMenu>
      <div className="min-h-screen bg-gradient-to-r bg-pink-200 flex justify-center items-center"> 
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Adoption Form</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Dropdown for Animal Selection */}
            <div>
              <label htmlFor="animal" className="block text-sm font-medium text-gray-700">
                Select an Animal
              </label>
              <select
                id="animal"
                value={selectedAnimal}
                onChange={(e) => setSelectedAnimal(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Bird">Bird</option>
                <option value="Rabbit">Rabbit</option>
                <option value="Monkey">Monkey</option>
              </select>
            </div>

            {/* Conditions with Checkboxes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Conditions
              </label>
              <div className="space-y-2">
                {conditions.map((condition, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`condition-${index}`}
                      checked={selectedConditions.includes(condition)}
                      onChange={() => handleConditionChange(condition)}
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <label
                      htmlFor={`condition-${index}`}
                      className="ml-2 block text-sm text-gray-700"
                    >
                      {condition}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Description of the Pet */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description of the Pet
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Provide details about the pet you wish to adopt..."
                rows="6"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                Submit Adoption Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdoptionPage;
