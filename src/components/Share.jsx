import React, { useState } from "react";
import { useLoaderData } from 'react-router-dom';
import SidebarMenu from "./Menu";

const PetSharing = () => {

    const shares = useLoaderData();

    

    const [selectedAnimal, setSelectedAnimal] = useState("");
    const [timeFrame, setTimeFrame] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedDay, setSelectedDay] = useState("");

    

    const handleSubmit = (e) => {
        e.preventDefault();
        const petSharingData = {
            selectedAnimal,
            timeFrame,
            contactNumber,
            selectedMonth,
            selectedDay,
        };
        console.log("Pet Sharing submitted:", petSharingData);

        fetch('http://localhost:5000/shares', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(petSharingData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.insertedId) {
                    alert("Post added successfully!!!");
                }
            });
    };

    return (
        <div>
            <SidebarMenu />
            <div className="min-h-screen bg-gradient-to-r bg-pink-200 flex justify-center items-center">
                <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Pet Sharing</h1>
                    <h1 className="text-2xl font-bold text-gray-600 mb-1">(Find a foster home for your pet)</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex flex-wrap gap-4">
                            {/* Animal Dropdown */}
                            <div className="flex-grow">
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

                            {/* Time Frame Dropdown */}
                            <div className="flex-grow">
                                <label htmlFor="timeFrame" className="block text-sm font-medium text-gray-700">
                                    Time Frame
                                </label>
                                <select
                                    id="timeFrame"
                                    value={timeFrame}
                                    onChange={(e) => setTimeFrame(e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    required
                                >
                                    <option value="" disabled>
                                        Select time frame
                                    </option>
                                    <option value="1 to 5 days">1 to 5 days</option>
                                    <option value="5 to 10 days">5 to 10 days</option>
                                    <option value="2 weeks">2 weeks</option>
                                    <option value="3 weeks">3 weeks</option>
                                    <option value="1 month">1 month</option>
                                    <option value="More than 1 month">More than 1 month</option>
                                </select>
                            </div>

                            {/* Contact Number Input */}
                            <div className="flex-grow">
                                <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                                    Contact Number
                                </label>
                                <input
                                    type="text"
                                    id="contactNumber"
                                    value={contactNumber}
                                    onChange={(e) => setContactNumber(e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Enter your contact number"
                                    required
                                />
                            </div>

                            {/* Month Dropdown */}
                            <div className="w-full md:w-1/5">
                                <label
                                htmlFor="month"
                                className="block text-sm font-medium text-gray-700"
                                >
                                Select Month
                                </label>
                                <select
                                id="month"
                                value={selectedMonth}
                                onChange={(e) => setSelectedMonth(e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                required
                                >
                                <option value="" disabled>
                                    Select month
                                </option>
                                {[
                                    "January",
                                    "February",
                                    "March",
                                    "April",
                                    "May",
                                    "June",
                                    "July",
                                    "August",
                                    "September",
                                    "October",
                                    "November",
                                    "December",
                                ].map((month, index) => (
                                    <option key={index} value={month}>
                                    {month}
                                    </option>
                                ))}
                                </select>
                            </div>

                            {/* Day Dropdown */}
                            <div className="w-full md:w-1/5">
                                <label
                                htmlFor="day"
                                className="block text-sm font-medium text-gray-700"
                                >
                                Select Day
                                </label>
                                <select
                                id="day"
                                value={selectedDay}
                                onChange={(e) => setSelectedDay(e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                required
                                >
                                <option value="" disabled>
                                    Select day
                                </option>
                                {[...Array(31).keys()].map((day) => (
                                    <option key={day + 1} value={day + 1}>
                                    {day + 1}
                                    </option>
                                ))}
                                </select>
                            </div>
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
                <div className="w-full max-w-6xl space-y-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Available Pet Shares</h1>
                    <h1 className="text-2xl font-bold text-gray-600 mb-1">Find a foster friend for yourself!</h1>
                    {shares.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {shares.map((share, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition"
                                >
                                    
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-bold text-gray-800">Animal: {share.selectedAnimal}</h3>
                                    </div>
                                    <p className="text-gray-800 mt-4"><strong>Time Frame:</strong> {share.timeFrame}</p>
                                    <p className="text-gray-800 mt-4"><strong>Contact:</strong> {share.contactNumber}</p>
                                    <p className="text-gray-800 mt-4"><strong>Date</strong> From {share.selectedMonth} {share.selectedDay}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500">No pet shares available yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PetSharing;
