import React, { useState } from "react";
import { useLoaderData } from 'react-router-dom';
import SidebarMenu from "./Menu";

const EventPage = () => {

    const events = useLoaderData();

    

    const [eventType, setEventType] = useState("");
    const [eventName, setEventName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    

    const handleSubmit = (e) => {
        e.preventDefault();
        const eventData = {
            eventType,
            eventName,
            location,
            description,
        };
        console.log("Event submitted:", eventData);

        fetch('http://localhost:5000/events', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(eventData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.insertedId) {
                    alert("Event added successfully!!!");
                }
            });
    };

    return (
        <div>
            <SidebarMenu />
            <div className="min-h-screen bg-gradient-to-r bg-pink-200 flex justify-center items-center">
                <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Event Page</h1>
                    <h1 className="text-2xl font-bold text-gray-600 mb-1">(Fill out the form to add your event)</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Event Type Dropdown */}
                        <div>
                            <label htmlFor="eventType" className="block text-sm font-medium text-gray-700">
                                Type of Event
                            </label>
                            <select
                                id="eventType"
                                value={eventType}
                                onChange={(e) => setEventType(e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                required
                            >
                                <option value="" disabled>
                                    Select an event type
                                </option>
                                <option value="Workshop">Workshop</option>
                                <option value="Pet Shop Opening">Pet Shop Opening</option>
                                <option value="Pet Vaccination">Pet Vaccination</option>
                                <option value="Furry Meetups">Furry Meetups</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Event Name Input */}
                        <div>
                            <label htmlFor="eventName" className="block text-sm font-medium text-gray-700">
                                Name of Event
                            </label>
                            <input
                                type="text"
                                id="eventName"
                                value={eventName}
                                onChange={(e) => setEventName(e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Enter event name"
                                required
                            />
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
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Events</h1>
                    <h1 className="text-2xl font-bold text-gray-600 mb-1">Check out what's happening!</h1>
                    {events.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {events.map((event, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition"
                                >
                                    
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-bold text-gray-800">Event: {event.eventType}</h3>
                                    </div>
                                    <p className="text-gray-800 mt-4"><strong>Name:</strong> {event.eventName}</p>
                                    <p className="text-gray-800 mt-4"><strong>Location:</strong> {event.location}</p>
                                    <p className="text-gray-800 mt-4"><strong>Description:</strong> {event.description}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500">No events available yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventPage;
