import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App';
import { ClerkProvider, RedirectToSignIn, SignIn, SignUp, SignedIn, SignedOut } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import SearchResultPage from './pages/SearchResultPage.jsx';

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error('Missing publishable Key');
}

const clerkKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;


const ClerkWithRoutes = () => {
  const [results, setResults] = useState([]); 
  const navigate = useNavigate();

  return (
    <ClerkProvider
      publishableKey={clerkKey}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/sign-in/*"
          element={<SignIn redirectUrl={'/protected'} routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp redirectUrl={'/protected'} routing="path" path="/sign-up" />}
        />
        <Route
          path="/protected"
          element={
            <>
              <SignedIn>
                <App />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      <Route path="/search-results" element={<SearchResultPage />} />
      </Routes>
    </ClerkProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkWithRoutes />
    </BrowserRouter>
  </React.StrictMode>
);