import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        console.error("No access token");
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(
          "http://164.52.215.173:4002/api/user/getUserByToken",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        

        if (res?.data?.payload) {
          setUser(res.data.payload);

          
          localStorage.setItem(
            "user",
            JSON.stringify(res.data.payload)
          );
        }
      } catch (error) {
        console.error("Failed to load profile", error.response || error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-10 flex justify-center">
        {loading ? (
          <p>Loading profile...</p>
        ) : !user ? (
          <p>No profile data found</p>
        ) : (
          <div className="border p-6 rounded-md w-[400px]">
            <h1 className="text-2xl font-bold mb-4">My Profile</h1>

            {/* NAME */}
            <div className="mb-3">
              <label className="font-semibold">Name</label>
              <p>{user.name}</p>
            </div>

            {/* EMAIL */}
            <div className="mb-3">
              <label className="font-semibold">Email</label>
              <p>{user.email}</p>
            </div>

            {/* USER ID */}
            <p className="text-sm text-gray-500">
              User ID: {user._id}
            </p>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Profile;
