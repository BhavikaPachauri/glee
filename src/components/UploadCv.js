import React, { useState } from "react";
import axios from "axios";

function UploadCv() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
    resume: null,
  });

  const [fileName, setFileName] = useState("No file chosen");
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, resume: file });
    setFileName(file ? file.name : "No file chosen");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const res = await axios.post("https://app.unios.in/web/applicants", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.status === 201) {
        setResponseMsg("Application submitted successfully!");
        setFormData({
            full_name: "",
            email: "",
            phone: "",
            role: "",
            message: "",
            resume: null,
        });
        setFileName("No file chosen");

        setTimeout(() => {
          setResponseMsg("");
        }, 5000);
      }
    } catch (error) {
      console.error(error);
      setResponseMsg(" Failed to submit. Please try again.");

      setTimeout(() => {
        setResponseMsg("");
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container} id="form">
      <h2 style={styles.title}>Send Us Your Resume</h2>

      <form style={styles.form} onSubmit={handleSubmit}>
        {/* Row 1 */}
        <div style={styles.row}>
          <div style={styles.group}>
            <label style={styles.label}>Full Name*</label>
            <input
              type="text"
              name="full_name"
              placeholder="Enter your full name"
              required
              style={styles.input}
              value={formData.full_name}
              onChange={handleChange}
            />
          </div>

          <div style={styles.group}>
            <label style={styles.label}>Email Address*</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              style={styles.input}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div style={styles.row}>
          <div style={styles.group}>
            <label style={styles.label}>Phone Number*</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              required
              style={styles.input}
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div style={styles.group}>
            <label style={styles.label}>Role Interested in*</label>
             <input
              type="text"
              name="role"
              placeholder="Enter Your Role"
              required
              style={styles.input}
              value={formData.role}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Message */}
        <div style={styles.group}>
          <label style={styles.label}>Message (Optional)</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Tell us about yourself..."
            style={styles.textarea}
            value={formData.message}
            onChange={handleChange}
            maxLength={400}
          ></textarea>
        </div>

        {/* File Upload */}
        <div style={styles.group}>
          <label style={styles.label}>Upload Resume*</label>
          <div style={styles.fileInputWrapper}>
            <label htmlFor="file-upload" style={styles.fileButton}>
              Choose File
            </label>
            <input
              id="file-upload"
              type="file"
              accept=".pdf"
              required
              onChange={handleFileChange}
              style={styles.hiddenFileInput}
            />
            <span style={styles.fileName}>{fileName}</span>
          </div>
          <p style={styles.fileInfo}>
            Accepted formats: PDF (Max 5 MB)
          </p>
        </div>

        <button type="submit" style={styles.submitBtn} disabled={loading}>
          {loading ? "Submitting..." : "Send Application"}
        </button>

        {responseMsg && (
          <p
            style={{
              textAlign: "center",
              marginTop: "15px",
              color: responseMsg.includes("successfully") ? "green" : "red",
              fontWeight: "500",
            }}
          >
            {responseMsg}
          </p>
        )}
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "700px",
    margin: "40px auto",
    background: "#fff",
    padding: "30px 40px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Poppins', sans-serif",
  },
  title: {
    textAlign: "center",
    color: "#1D79BB",
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "25px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  row: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  group: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#1D79BB",
    marginBottom: "6px",
  },
  input: {
    padding: "10px 12px",
    border: "1px solid #b3b1b1ff",
    backgroundColor: "#ebeaeaff",
    borderRadius: "6px",
    fontSize: "14px",
    outline: "none",
    color: "#818080ff",
  },
  textarea: {
    padding: "10px 12px",
    border: "1px solid #b3b1b1ff",
    backgroundColor: "#ebeaeaff",
    borderRadius: "6px",
    fontSize: "14px",
    resize: "none",
    outline: "none",
  },
  fileInputWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    border: "1px solid #b3b1b1ff",
    padding: "4px",
    borderRadius: "6px",
  },
  fileButton: {
    backgroundColor: "#1D79BB",
    border: "1px solid #1D79BB",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "20px",
    fontSize: "14px",
    cursor: "pointer",
    fontWeight: "500",
  },
  hiddenFileInput: {
    display: "none",
  },
  fileName: {
    fontSize: "14px",
    color: "#333",
  },
  fileInfo: {
    fontSize: "12px",
    color: "#666",
    marginTop: "4px",
  },
  submitBtn: {
    width: "100%",
    backgroundColor: "#1D79BB",
    color: "#fff",
    padding: "12px 0",
    fontSize: "15px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
};

export default UploadCv;
