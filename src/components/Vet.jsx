// import React from "react";
// import { useLoaderData } from 'react-router-dom';
// import SidebarMenu from "./Menu";

// const vetData = useLoaderData();
// console.log(vetData)
// //   [{
// //     name: "Dr. Jane Smith",
// //     phone: "+1 123-456-7890",
// //     location: "New York, NY",
// //     service: "General Check-up",
// //   },
// //   {
// //     name: "Dr. John Doe",
// //     phone: "+1 987-654-3210",
// //     location: "Los Angeles, CA",
// //     service: "Emergency Care",
// //   },
// //   {
// //     name: "Dr. Emily Brown",
// //     phone: "+1 456-789-0123",
// //     location: "Chicago, IL",
// //     service: "Vaccination",
// //   },
// //   {
// //     name: "Dr. Mike Johnson",
// //     phone: "+1 321-654-9870",
// //     location: "Houston, TX",
// //     service: "Surgery",
// //   },
// // ];

// const VetInfo = () => {
//   return (
//     <div className="bg-pink-200 min-h-screen flex flex-col items-center py-10">
//       <h1 className="text-4xl font-bold text-gray-800 mb-6">Vet & Doctor Info</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12">
//         {vetData.map((vet, index) => (
//           <div
//             key={index}
//             className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
//           >
//             <h2 className="text-xl font-semibold text-gray-800">{vet.name}</h2>
//             <p className="text-gray-600 mt-2">
//               <strong>Phone:</strong> {vet.phone}
//             </p>
//             <p className="text-gray-600 mt-1">
//               <strong>Location:</strong> {vet.location}
//             </p>
//             <p className="text-gray-600 mt-1">
//               <strong>Service:</strong> {vet.service}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VetInfo;
