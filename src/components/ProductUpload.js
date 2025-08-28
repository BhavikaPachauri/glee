import React, { useState } from "react";
import axios from "axios";

export default function ProductUpload({ onUploadSuccess }) {
  const API_URL = "https://api.plusdistribution.in/pdpl/glee-products";
  const [formData, setFormData] = useState({
    prod_des: "",
    prod_category: "",
    prod_brand: "",
    prod_det_desc: "",
    prod_uses: "",
    prod_benefits: "",
    prod_side_effects: "",
  });
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle files
  const handleFileChange = (e) => {
    setImages([...e.target.files]);
  };

  // Submit upload
  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      data.append("action", "upload");
      Object.entries(formData).forEach(([key, value]) =>
        data.append(key, value)
      );
      images.forEach((file) => data.append("image", file));

      const res = await axios.post(API_URL, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert(res.data.message || "Uploaded successfully ✅");
      setFormData({
        prod_des: "",
        prod_category: "",
        prod_brand: "",
        prod_det_desc: "",
        prod_uses: "",
        prod_benefits: "",
        prod_side_effects: "",
      });
      setImages([]);
      onUploadSuccess?.(); // notify parent to refresh
    } catch (err) {
      console.error("Upload error:", err.response?.data || err.message);
      alert("Upload failed ❌");
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleUpload}
      className="bg-white/80 mt-5 backdrop-blur-md shadow-xl rounded-2xl p-6 border border-gray-200 max-w-4xl mx-auto"
    >
      <h2 className="text-xl font-semibold text-gray-700 mb-6 mt-5">
        📤 Upload New Product
      </h2>
      <table className="w-full border border-gray-300 rounded-lg mb-3 text-sm">
        <tbody>
          {Object.keys(formData).map((field) => (
            <tr key={field}>
              <td className="py-2 px-3 font-medium align-top w-1/4">
                {field.replace(/_/g, " ").toUpperCase()}
              </td>
              <td className="py-2 px-3 w-3/4">
                <textarea
                  name={field}
                  value={formData[field]}
                  placeholder={field.replace(/_/g, " ")}
                  onChange={handleChange}
                  rows={3}
                  className="p-2 w-full border rounded focus:ring-2 focus:ring-blue-500 outline-none resize-vertical"
                  required
                />
              </td>
            </tr>
          ))}
          <tr>
            <td className="py-2 px-3 font-medium align-top w-1/4">
              Product Images
            </td>
            <td className="py-2 px-3 w-3/4">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition disabled:opacity-50 w-full"
        disabled={loading}
      >
        {loading ? "🚀 Uploading..." : "📤 Upload Product"}
      </button>
    </form>
  );
}
