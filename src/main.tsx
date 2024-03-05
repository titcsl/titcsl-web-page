import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from "@/components/Home.tsx";
import What_We_Do from "@/components/What-we-do.tsx";
import Inquiry from "@/components/Inquiry.tsx";
import Policy from "@/components/policy.tsx";
import Masthead from "@/components/Masthead.tsx";
import Who_we_are from "@/components/Who_we_are.tsx";

const router =  createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route path="" element={<Home/>}/>
        <Route path="what-we-do" element={<What_We_Do />}/>
        <Route path="who-we-are" element={<Who_we_are />}/>
        <Route path="inquiry/create" element={<Inquiry />}/>
        <Route path="privacy/Policy" element={<Policy />}/>
        <Route path="masthead" element={<Masthead />}/>

    </Route>


))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
