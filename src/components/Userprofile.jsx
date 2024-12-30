import React, { useState } from "react";
import SidebarMenu from "./Menu";

const UserProfilePage = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [favoritePets, setFavoritePets] = useState([]);
  const [newPet, setNewPet] = useState("");

  const handleProfilePictureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  const handleAddPet = () => {
    if (newPet.trim()) {
      setFavoritePets((prev) => [...prev, newPet.trim()]);
      setNewPet("");
    }
  };

  const handleRemovePet = (pet) => {
    setFavoritePets((prev) => prev.filter((p) => p !== pet));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const profileData = {
      profilePicture,
      email,
      password,
      favoritePets,
    };
    console.log("Profile updated:", profileData);
    // Add logic to send profileData to the backend or handle it as required
  };

  return (
    <div >
    <SidebarMenu></SidebarMenu>
      <div className="min-h-screen bg-gradient-to-r  bg-pink-200 flex justify-center items-center"> 
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">User Profile</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Picture Upload */}
            <div>
              <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">
                Profile Picture
              </label>
              <input
                type="file"
                id="profilePicture"
                accept="image/*"
                onChange={handleProfilePictureUpload}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              />
              {profilePicture && <img src={profilePicture} alt="Profile" className="mt-4 w-24 h-24 rounded-full object-cover" />}
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Favorite Pets List */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Favorite Pets
              </label>
              <div className="space-y-2">
                {favoritePets.map((pet, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{pet}</span>
                    <button
                      type="button"
                      onClick={() => handleRemovePet(pet)}
                      className="text-red-500 text-sm hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center space-x-2">
                <input
                  type="text"
                  value={newPet}
                  onChange={(e) => setNewPet(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Add a new favorite pet"
                />
                <button
                  type="button"
                  onClick={handleAddPet}
                  className="bg-pink-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                >
                  Add
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
