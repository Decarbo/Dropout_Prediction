import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading profile...</div>;
  }

  if (!isAuthenticated) {
    return <div>You need to log in first.</div>;
  }

  return (
    <div className=" p-2 shadow rounded-lg text-gray-800 flex justify-center items-center " >
      <img
        src={user.picture}
        alt={user.name}
        className="w-8 h-8 rounded-full shadow-md  flex justify-center items-center"
      />
      <h2 className=" font-bold ml-2">{user.name}</h2>
      {/* <p className="text-gray-600">{user.email}</p> */}
    </div>
  );
};

export default Profile;
