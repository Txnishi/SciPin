// import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {
  BiChevronDown,
  BiBell,
  BiMessageSquareDots,
  BiSearch,
} from "react-icons/bi";
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";
import {neobrutalism} from "@clerk/themes";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function SignUpButton() {
  const clerk = useClerk();

  return (
    <button className="sign-up-btn" onClick={() => clerk.openSignUp({})}>
      Sign up
    </button>
  );
}

function SignInButton() {
  const clerk = useClerk();

  return (
    <button className="sign-in-btn" onClick={() => clerk.openSignIn({})}>
      Sign in
    </button>
  );
}

function Header() {
  const [selected, setSelected] = useState('Home');
  const [results, setResults] = useState({});
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async() => {
    setQuery(input);
     // Check the query in console
    // Add the API call function here with the query parameter
    fetchSearchResults(query);

  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Function to handle the API call with the search query
  const fetchSearchResults = (query) => {
    // Implement your API call logic using the searchQuery parameter
    // Replace the following with your API call logic
    // console.log("Sending API request with query:", searchQuery);
    fetch(`https://api.core.ac.uk/v3/search/outputs?q=${query}`)
    .then(response => response.json())
    .then(data => {
      // Handle the data received from the API
      // setResults([data]);
      console.log(data);
      // Update state or do something with the data
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      // Handle errors or display an error message
    });
  };
    // setResults([
    //   {
    //     title: 'Research Paper 1',
    //     description: 'This is the first research paper with a description.',
    //   },
    //   {
    //     title: 'Research Paper 2',
    //     description: 'This is the second research paper with a different description.',
    //   },
    //   {
    //     title: 'Research Paper 3',
    //     description: 'Another research paper with its own description.',
    //   },
    // ]);

  // useEffect(() => {
  //   if (results.length > 0) {
  //     navigate('/search-results', { state: { results } });
  //   }
  // }, [results, navigate]);

  // useEffect(() => {
  //   console.log('Search query:', query);
  //   fetchSearchResults(query);
  // }, [query]);
  return (
    <div className="w-full h-20 border rounded-lg shadow-md px-5 py-1 flex items-center justify-center">
      <div className="w-full h-16 flex items-center">
        {/* Left  */}
        <div className="flex items-center">
          {/* Logo */}
          <div className="h-12 w-12 rounded-full hover:bg-gray-200 flex items-center justify-center cursor-pointer"></div>

          {/* Home */}
          <div
            className={`${
              selected === "Home" ? "bg-black text-white" : ""
            }  px-4 py-3 rounded-full cursor-pointer font-semibold hidden sm:inline-flex`}
            onClick={() => {
              setSelected("Home");
            }}
          >
            <h3>Home</h3>
          </div>

          {/* Today */}
          <div
            className={`${
              selected === "Today" ? "bg-black text-white" : ""
            }  px-4 py-3 rounded-full cursor-pointer font-semibold hidden sm:inline-flex`}
            onClick={() => {
              setSelected("Today");
            }}
          >
            <h3>Today</h3>
          </div>

          {/* Create */}
          <div className="px-4 py-3 rounded-full cursor-pointer font-semibold hidden sm:inline-flex items-center">
            <h3>Create</h3>
            <BiChevronDown className="h-6 w-6" />
          </div>

          {/* On Small Screens */}
          <div className="flex items-center sm:hidden text-semibold px-4 py-3 rounded-full cursor-pointer font-semibold hover-bg-gray-200">
            <h3>Home</h3>
            <BiChevronDown className="h-6 w-6" />
          </div>
        </div>

        {/* Middle */}
        <div className="flex items-center border rounded-3xl flex-1 px-4 bg-[#e9e9e9] h-12">
          <BiSearch
            className="h-5 w-5 text-[#767676] font-bold cursor-pointer"
            onClick={handleSearch}
          />
          <input
            onChange={(e) => setInput(e.target.value)}
            // onKeyDown={}{handleEnter}
            type="text"
            id="q"
            placeholder="Search"
            className="bg-[#e9e9e9] ml-2 h-full w-full placeholder-[#000000] placeholder-text-lg outline-none text-[#000000]"
          />
        </div>

        {/* Right */}
        <div className="ml-2 hidden sm:inline-flex items-center h-12">
          <div className="h-full w-12 flex items-center justify-center hover-bg-gray-100 rounded-full cursor-pointer">
            <BiBell className="h-7 w-7 text-[#767676] font-bold" />
          </div>

          <div className="h-full w-12 flex items-center justify-center hover-bg-gray-100 rounded-full cursor-pointer">
            <BiMessageSquareDots className="h-7 w-7 text-[#767676] font-bold" />
          </div>

          <SignedOut>
            <ul className=" flex space-x-4 ">
              <li className="border border-blue-100 p-2 rounded-md overflow-hidden transition-all hover:bg-blue-100 hover:shadow-md">
                <SignUpButton />
              </li>

              <li className="border border-blue-100 p-2 rounded-md overflow-hidden transition-all hover:bg-blue-100 hover:shadow-md">
                <SignInButton />
              </li>
            </ul>
          </SignedOut>
          <SignedIn>
            <UserButton className="user" afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </div>
  );
}

export default Header;
