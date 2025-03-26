import { Upload, AlertCircle, CheckCircle2, X } from "lucide-react";
import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";

// TODO:Remove these Hardcoded Login Creds
const AUTH_USERNAME = "produpload";
const AUTH_PASSWORD = "password123";
const url = "https://api.plusdistribution.in/pdpl/glee-products";

export default function ProductUploadForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [authenticated, setAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");
  const [imagePreviews, setImagePreviews] = useState([]);

  const validationSchema = Yup.object({
    prod_brand: Yup.string().required("Product brand is required"),
    prod_category: Yup.string().required("Product category is required"),
    prod_des: Yup.string().required("Product description is required"),
    prod_det_desc: Yup.string().required("Detailed description is required"),
    prod_uses: Yup.string().required("Product uses are required"),
    prod_benefits: Yup.string().required("Product benefits are required"),
    prod_side_effects: Yup.string().required("Side effects are required"),
    images: Yup.array().min(1, "At least one product image is required").required("Product images are required"),
  });

  const initialValues = {
    prod_des: "",
    prod_category: "",
    prod_brand: "",
    prod_det_desc: "",
    prod_uses: "",
    prod_benefits: "",
    prod_side_effects: "",
    images: [],
  };

  const handleLogin = (values) => {
    if (values.username === AUTH_USERNAME && values.password === AUTH_PASSWORD) {
      setAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Invalid username or password.");
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        if (key !== "username" && key !== "password" && key !== "images") {
          formData.append(key, values[key]);
        }
      });
      if (Array.isArray(values.images)) {
        values.images.forEach((image, index) => {
          formData.append(`image`, image);
        });
      }

      formData.append("action", "upload");
      const response = await fetch(url, {
        method: "POST",
        body: formData,
        redirect: "follow",
      });

      const result = await response.json();
      if (result.responseCode === false) {
        setMessage({ type: "error", text: "Error uploading product. Please try again." });
      } else {
        setMessage({ type: "success", text: "Product uploaded successfully!" });
        setImagePreviews([]);
        resetForm();
      }
    } catch (error) {
      setMessage({ type: "error", text: "Error uploading product. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const removeImage = (index, setFieldValue, values) => {
    if (Array.isArray(values.images)) {
      const newImages = [...values.images];
      newImages.splice(index, 1);
      setFieldValue("images", newImages);

      const newPreviews = [...imagePreviews];
      newPreviews.splice(index, 1);
      setImagePreviews(newPreviews);
    }
  };

  return (
    <>
      <NavBar />

      <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          {!authenticated ? (
            <div>
              <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
              <Formik initialValues={{ username: "", password: "" }} onSubmit={handleLogin}>
                <Form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <Field
                      type="text"
                      name="username"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <Field
                      type="password"
                      name="password"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  {authError && <div className="text-red-600 text-sm">{authError}</div>}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Login
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold text-center mb-6">Product Upload Form</h2>
              <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ setFieldValue, values, isValid }) => (
                  <Form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Product Brand</label>
                        <Field
                          type="text"
                          name="prod_brand"
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                        />
                        <ErrorMessage name="prod_brand" component="div" className="text-red-600 text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Product Category</label>
                        <Field
                          type="text"
                          name="prod_category"
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                        />
                        <ErrorMessage name="prod_category" component="div" className="text-red-600 text-sm" />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Product Description</label>
                        <Field
                          as="textarea"
                          name="prod_des"
                          rows={4}
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                        />
                        <ErrorMessage name="prod_des" component="div" className="text-red-600 text-sm" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">Detailed Description</label>
                        <Field
                          as="textarea"
                          name="prod_det_desc"
                          rows={3}
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                        />
                        <ErrorMessage name="prod_det_desc" component="div" className="text-red-600 text-sm" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">Uses</label>
                        <Field
                          as="textarea"
                          name="prod_uses"
                          rows={2}
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                        />
                        <ErrorMessage name="prod_uses" component="div" className="text-red-600 text-sm" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">Benefits</label>
                        <Field
                          as="textarea"
                          name="prod_benefits"
                          rows={4}
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                        />
                        <ErrorMessage name="prod_benefits" component="div" className="text-red-600 text-sm" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">Side Effects</label>
                        <Field
                          as="textarea"
                          name="prod_side_effects"
                          rows={4}
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                        />
                        <ErrorMessage name="prod_side_effects" component="div" className="text-red-600 text-sm" />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700">Product Images</label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <Upload className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600">
                            <label className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                              <span>Upload files</span>
                              <input
                                type="file"
                                name="images"
                                accept="image/*"
                                multiple
                                onChange={(e) => {
                                  const files = Array.from(e.target.files || []);
                                  const currentImages = Array.isArray(values.images) ? values.images : [];
                                  const validFiles = files.filter((file) => file.size <= 1048576);

                                  if (validFiles.length > 0) {
                                    setFieldValue("images", [...currentImages, ...validFiles]);
                                    const newPreviews = validFiles.map((file) => URL.createObjectURL(file));
                                    setImagePreviews([...imagePreviews, ...newPreviews]);
                                  } else {
                                    setMessage({ type: "error", text: "Each image must be less than 1MB." });
                                  }
                                }}
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 1MB each</p>
                        </div>
                      </div>

                      <ErrorMessage name="images" component="div" className="text-red-600 text-sm" />
                    </div>

                    {imagePreviews.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Image Previews</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {imagePreviews.map((preview, index) => (
                            <div key={index} className="relative">
                              <img loading="lazy"  src={preview} alt={`Preview ${index + 1}`} className="w-full h-32 object-cover rounded-md" />
                              <button
                                type="button"
                                onClick={() => removeImage(index, setFieldValue, values)}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 focus:outline-none"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={loading || !isValid}
                        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        {loading ? "Uploading..." : "Upload Product"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>

              {message.text && (
                <div className={`mt-4 flex items-center ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
                  {message.type === "success" ? <CheckCircle2 className="mr-2" /> : <AlertCircle className="mr-2" />}
                  <span>{message.text}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
