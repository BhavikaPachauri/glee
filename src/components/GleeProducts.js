import React, { useState, useEffect } from "react";
import axios from "axios";

export default function GleeProducts() {
  const API_URL = "https://api.plusdistribution.in/pdpl/glee-products";
  const [products, setProducts] = useState([]);
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

  // Fetch product list
  const fetchProducts = async () => {
    try {
      const res = await axios.post(API_URL, { action: "fetch" });
      if (res.data?.response?.list) {
        setProducts(res.data.response.list);
      } else {
        setProducts([]);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file input
  const handleFileChange = (e) => {
    setImages([...e.target.files]);
  };

  // Handle upload
  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      data.append("action", "upload");
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });
      images.forEach((file) => {
        data.append("image", file);
      });
      const res = await axios.post(API_URL, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(res.data.message || "Uploaded successfully ✅");
      fetchProducts();
    } catch (err) {
      console.error("Upload error:", err.response?.data || err.message);
      alert("Upload failed ❌");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
        🌟 Glee Products
      </h1>
      {/* Upload Form */}
      <form
        onSubmit={handleUpload}
        className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 border border-gray-200 max-w-4xl mx-auto"
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-6">
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
                  name="image"
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
      {/* Product List */}
      <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-800">
        🛒 Product Catalog
      </h2>
      {products.length === 0 ? (
        <p className="text-gray-500 text-center">No products found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((prod, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-2xl p-5 hover:shadow-2xl hover:-translate-y-1 transition duration-300"
            >
              {/* Image Section */}
              <div className="flex flex-col gap-2">
                {/* Main Image */}
                {prod.prod_image_url?.[0] && (
                  <img
                    src={prod.prod_image_url[0]}
                    alt="main product"
                    className="max-w-xs w-full h-40 object-contain rounded-xl border mx-auto bg-gray-50"
                  />
                )}
                {/* Thumbnails */}
                {prod.prod_image_url?.length > 1 && (
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {prod.prod_image_url.slice(1).map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt="product thumbnail"
                        className="w-16 h-16 object-contain rounded-lg border bg-gray-50"
                      />
                    ))}
                  </div>
                )}
              </div>
              {/* Text Info */}
              <h3 className="text-lg font-bold mt-3 text-gray-900">
                {prod.prod_brand}
              </h3>
              <p className="text-sm text-gray-500">{prod.prod_category}</p>
              <ul className="mt-3 text-sm space-y-1 text-gray-700">
                <li>
                  <strong>Description:</strong>{" "}
                  {prod.prod_des?.join(", ") || "N/A"}
                </li>
                <li>
                  <strong>Details:</strong>{" "}
                  {prod.prod_det_desc?.join(", ") || "N/A"}
                </li>
                <li>
                  <strong>Uses:</strong> {prod.prod_uses?.join(", ") || "N/A"}
                </li>
                <li>
                  <strong>Benefits:</strong>{" "}
                  {prod.prod_benefits?.join(", ") || "N/A"}
                </li>
                <li>
                  <strong>Side Effects:</strong>{" "}
                  {prod.prod_side_effects?.join(", ") || "N/A"}
                </li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}