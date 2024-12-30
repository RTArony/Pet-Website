import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import BlogPage from './components/BlogPage';
import AdoptionPage from './components/AdoptionPage';
import Userprofile from './components/Userprofile';
import Menu from './components/Menu';
import Readblog from './components/Readblog';
import SearchingPet from './components/SearchingPet';
import GiveAdoption from './components/GiveAdoption';
import SeeAdoption from './components/SeeAdoption';
import LostandFound from './components/LostandFound';
import Rescue from './components/Rescue';
import Petlisting from './components/Petlisting';
import Login from './components/Login';
import Register from './components/Register';
import Donation from './components/Donation';
import Homepage from './components/Homepage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage></Homepage>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/donation",
    element: <Donation></Donation>,
  },
  {
    path: "/writeblog",
    element: <BlogPage></BlogPage>,
  },
  {
    path: "/readblog",
    element: <Readblog></Readblog>,
    loader: () => fetch("http://localhost:5000/blogs")
  },
  {
    path: "/petlisting",
    element: <Petlisting></Petlisting>,
    loader: () => fetch("http://localhost:5000/petlist")
  },
  {
    path: "/adoption",
    element: <AdoptionPage></AdoptionPage>,
  },
  {
    path: "/searchingpet",
    element: <SearchingPet></SearchingPet>,
    loader: () => fetch("http://localhost:5000/searchpet")
  },
  {
    path: "/giveadoption",
    element: <GiveAdoption></GiveAdoption>,
  },
  {
    path: "/seeadoption",
    element: <SeeAdoption></SeeAdoption>,
    loader: () => fetch("http://localhost:5000/adoptionpost")
  },
  {
    path: "/userprofile",
    element: <Userprofile></Userprofile>,
  },
  {
    path: "/menu",
    element: <Menu></Menu>,
  },
  {
    path: "/lostandfound",
    element: <LostandFound></LostandFound>,
    loader: () => fetch("http://localhost:5000/lost")
  },
  {
    path: "/rescueanimal",
    element: <Rescue></Rescue>,
    loader: () => fetch("http://localhost:5000/rescue")
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)