// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import SidebarMenu from "./Menu";
// import axios from "axios";  //new

// const BlogWritingPage = () => {
//   const [title, setTitle] = useState("");
//   const [image, setImage] = useState(null);
//   const [allImage, setAllImage] = useState(null);  //new
//   const [description, setDescription] = useState("");

//   // useEffect(() => {   //new
//   //   getImage();
//   // }, []);

//   // const handleImageUpload = (e) => {
//   //   const file = e.target.files[0];
//   //   if (file) {
//   //     setImage(URL.createObjectURL(file));
//   //   }
//   // };

//   const onInputChange = (e) => {          //new
//     console.log(e.target.files[0]);
//     setImage(e.target.files[0]);
//   };

//   const submitImage = async (e) => {      //new
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("image", image);

//     const result = await axios.post(
//       "http://localhost:5000/upload-image",
//       formData,
//       {
//         headers: { "Content-Type": "multipart/form-data" },
//       }
//     );
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const blogData = {
//       title,
//       //image,
//       description,
//     };
//     console.log("Blog submitted:", blogData);
    
//     fetch('http://localhost:5000/blogs', {
//       method: 'POST',
//       headers: {
//           'content-type': 'application/json'
//       },
//       body: JSON.stringify(blogData)
//     })
//       .then(res => res.json())
//       .then(data => {
//           console.log(data);

//           if (data.insertedId) {
//             alert("Blog added successfully!!!")
            
//           }
//       })
//   };

//   return (
//     <div >
//     <SidebarMenu></SidebarMenu>
//       <div 
//         className="min-h-screen bg-gradient-to-r bg-pink-200 flex justify-center items-center" 
//       >
//         <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
//           <h1 className="text-2xl font-bold text-gray-800 mb-4">Write Your Blog</h1>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Title Input */}
//             <div>
//               <label htmlFor="title" className="block text-sm font-medium text-gray-700">
//                 Blog Title
//               </label>
//               <input
//                 type="text"
//                 id="title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 placeholder="Enter blog title"
//                 required
//               />
//             </div>
//           </form>
//             {/* Image Upload */}
//             {/* <div>
//               <label htmlFor="image" className="block text-sm font-medium text-gray-700">
//                 Upload Image
//               </label>
//               <input
//                 type="file"
//                 id="image"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
//                 required
//               />
//               {image && <img src={image} alt="Uploaded" className="mt-4 max-h-48" />}
//             </div> */}

//           {/* Image Upload */}  
//           <form onSubmit={submitImage} className="space-y-6">
//             <div>
//               <label htmlFor="image" className="block text-sm font-medium text-gray-700">
//                 Upload Image
//               </label>
//               <input
//                 type="file"
//                 id="image"
//                 accept="image/*"
//                 onChange={onInputChange}
//                 className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
//                 required
//               />
//             </div>
//           </form>

//             {/* Description Input */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//                 Description
//               </label>
//               <textarea
//                 id="description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 placeholder="Write your blog content here..."
//                 rows="6"
//                 required
//               ></textarea>
//             </div>
//           </form>

//             {/* Submit Button */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <button
//                 type="submit"
//                 className="w-full bg-pink-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
//               >
//                 Submit Blog
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogWritingPage;











import React, { useState } from "react";
import { Link } from "react-router-dom";
import SidebarMenu from "./Menu";


const BlogWritingPage = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");


  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const blogData = {
      title,
      image,
      description,
    };
    console.log("Blog submitted:", blogData);
    
    fetch('http://localhost:5000/blogs', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(blogData)
    })
      .then(res => res.json())
      .then(data => {
          console.log(data);

          if (data.insertedId) {
            alert("Blog added successfully!!!")
            
          }
      })
  };

  return (
    <div >
    <SidebarMenu></SidebarMenu>
      <div 
        className="min-h-screen bg-gradient-to-r bg-pink-200 flex justify-center items-center" 
      >
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Write Your Blog</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Input */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Blog Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter blog title"
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
                placeholder="Write your blog content here..."
                rows="6"
                required
              ></textarea>
            </div>
        

            {/* Submit Button */}
          
            <div>
              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              >
                Submit Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogWritingPage;
