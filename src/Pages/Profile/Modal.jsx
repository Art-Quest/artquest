import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { AppContext } from "../../Context";
import toast from "react-hot-toast";

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    bio: "",
    socialLinks: "",
    referrals: "",
  });
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  const { getSmartContract } = React.useContext(AppContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);
    try {
      const contract = await getSmartContract();
      const profile = await contract
        .createUserProfile(
          formData.name,
          formData.username,
          formData.email,
          formData.bio,
          [formData.socialLinks],
          [formData.referrals]
        )
        .send({
          from: window.tronWeb.defaultAddress.base58,
          shouldPollResponse: false,
        });

      if (profile) {
        toast.success("Profile created successfully");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
    // Handle form submission here
  };

  if (!isOpen) return null; // Hide modal if it's not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      {/* Modal Container */}
      <div className="bg-gray-800 text-white rounded-lg shadow-lg max-w-lg w-full p-8 space-y-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">User Information</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-300"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Bio */}
          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-300"
            >
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              rows="3"
              value={formData.bio}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-indigo-500"
            ></textarea>
          </div>

          {/* Social Links */}
          <div>
            <label
              htmlFor="socialLinks"
              className="block text-sm font-medium text-gray-300"
            >
              Social Links
            </label>
            <input
              id="socialLinks"
              name="socialLinks"
              type="text"
              value={formData.socialLinks}
              onChange={handleChange}
              placeholder="Add multiple links separated by commas"
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Referrals */}
          <div>
            <label
              htmlFor="referrals"
              className="block text-sm font-medium text-gray-300"
            >
              Referrals
            </label>
            <input
              id="referrals"
              name="referrals"
              type="text"
              value={formData.referrals}
              onChange={handleChange}
              placeholder="Add multiple referrals separated by commas"
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            {loading ? (
              <p>submitting...</p>
            ) : (
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
