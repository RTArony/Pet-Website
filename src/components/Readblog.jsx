import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SidebarMenu from "./Menu";

const Readblog = () => {

    const blogs = useLoaderData();
    return (
        <div >
        <SidebarMenu></SidebarMenu>
            <div className="min-h-screen bg-gradient-to-r bg-pink-200 flex justify-center items-center">
                <div className="w-full max-w-3xl space-y-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Blogs & Resouces</h1>
                <h2 className="text-2xl font-bold text-gray-600 mb-1">Day to Day Guideline for Your Furry Friend!!!!</h2>
                    {blogs.length > 0 ? (
                    blogs.map((blog, index) => (
                        <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition"
                        >
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">{blog.title}</h3>
                        </div>
                        <figure>
                            <img src={blog.image}
                            className="w-full h-auto rounded-md mt-4"
                              />
                        </figure>
                        <p className="text-gray-800 mt-4">{blog.description}</p>
                        </div>
                    ))
                    ) : (
                    <p className="text-center text-gray-500">No Blog available yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Readblog;











// import React from 'react';
// import { useLoaderData } from 'react-router-dom';
// import SidebarMenu from "./Menu";

// const Readblog = () => {

//     const blogs = useLoaderData();
//     const getImage = async () => {
//         const result = await axios.get("http://localhost:5000/get-image");
//         console.log(result);
//         setAllImage(result.data.data);
//       };
//     return (
//         <div >
//         <SidebarMenu></SidebarMenu>
//             <div className="min-h-screen bg-gradient-to-r bg-pink-200 flex justify-center items-center">
//                 <div className="w-full max-w-3xl space-y-6">
//                     {blogs.length > 0 ? (
//                     blogs.map((blog, index) => (
//                         <div
//                         key={index}
//                         className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition"
//                         >
//                         <div className="flex items-center justify-between">
//                             <h3 className="text-lg font-semibold">{blog.title}</h3>
//                         </div>
//                         <figure>
//                             <img
//                                 src={require(`./images/${data.image}`)}
//                                 height={100}
//                                 width={100}
//                             />
//                         </figure>
//                         <p className="text-gray-800 mt-4">{blog.description}</p>
//                         </div>
//                     ))
//                     ) : (
//                     <p className="text-center text-gray-500">No Blog available yet.</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Readblog;
