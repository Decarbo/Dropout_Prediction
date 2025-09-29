"use client";
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { motion, AnimatePresence } from "framer-motion";

const Profile = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
  const [menuOpen, setMenuOpen] = useState(false);

  if (isLoading) {
    return <div className="text-gray-600">Loading profile...</div>;
  }

  if (!isAuthenticated) {
    return (
      <button
        onClick={() => loginWithRedirect()}
        className="bg-blue-600 text-white px-2 py-1 rounded-md shadow-lg hover:shadow-blue-300 hover:bg-blue-700 transition"
      >
        Login
      </button>
    );
  }

  return (
    <div className="relative flex items-center">
      {/* Profile Avatar and Name */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex items-center p-2 rounded-lg shadow hover:shadow-lg transition bg-white/80 backdrop-blur-md"
      >
        <img
          src={user.picture}
          alt={user.name}
          className="w-10 h-10 rounded-full shadow-md"
        />
        <div className="ml-2 text-left">
          <h2 className="font-semibold text-gray-800 text-sm md:text-base truncate">{user.name}</h2>
          <p className="text-gray-500 text-xs md:text-sm truncate">{user.email}</p>
        </div>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute -right-0 top-6 mt-8  bg-white  shadow-lg border border-gray-200 overflow-hidden z-50"
          >
            <ul className="flex flex-col text-gray-700">
              <li>
                <button
                  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                  className="w-full text-left px-4 py-2 hover:bg-red-50 hover:text-red-600 transition font-medium"
                >
                  Log Out
                </button>
              </li>
              <li>
                <a
                  href="#profile-settings"
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 transition font-medium"
                >
                  Profile Settings
                </a>
              </li>
              <li>
                <a
                  href="#help"
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 transition font-medium"
                >
                  Help & Support
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Profile;
