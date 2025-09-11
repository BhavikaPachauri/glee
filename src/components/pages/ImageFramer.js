import React, { useState, useRef } from "react";
import { useDropzone } from "react-dropzone";
import * as htmlToImage from "html-to-image";

const ImageFramer = () => {
  const [image, setImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const imageRef = useRef(null);

  // Handle image upload
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif", ".bmp", ".webp"],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    },
  });

  // Download the framed image
  const downloadImage = async () => {
    if (!imageRef.current) return;

    setIsProcessing(true);
    try {
      // Fix for iOS - use toBlob instead of toPng
      const dataUrl = await new Promise((resolve) => {
        htmlToImage.toBlob(imageRef.current).then((blob) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.readAsDataURL(blob);
        });
      });

      // iOS-specific download handling
      if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "framed-image.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Alternative approach for iOS
        const img = new Image();
        img.src = dataUrl;
        const newWindow = window.open();
        newWindow.document.write(img.outerHTML);
      } else {
        // Standard download for other devices
        const link = document.createElement("a");
        link.download = "framed-image.png";
        link.href = dataUrl;
        link.click();
      }
    } catch (error) {
      console.error("Error generating image:", error);
      // Fallback for iOS
      if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        alert("Press and hold the image to save it to your photos");
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <div className="max-w-2xl mx-auto p-4 md:p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-gray-800">Circular Frame Image</h1>

        {!image ? (
          <div
            {...getRootProps()}
            className="border-2 border-dashed border-gray-400 rounded-lg p-8 md:p-12 text-center cursor-pointer hover:border-gray-600 hover:bg-gray-100 transition-colors duration-200"
          >
            <input {...getInputProps()} />
            <div className="text-gray-600">
              <svg className="mx-auto h-10 w-10 md:h-12 md:w-12 mb-3 md:mb-4" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                <path
                  d="M28 8H12a4 4 0 00-4 4v24a4 4 0 004 4h8m16-16l8-8v32l-8-8m0-16a4 4 0 00-4-4h-4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-base md:text-lg">Drag & drop an image here, or click to select</p>
              <p className="text-xs md:text-sm text-gray-500 mt-1 md:mt-2">Your image will be cropped to fit a circular frame</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4 md:space-y-6">
            <div className="flex justify-center">
              {/* Responsive container */}
              <div
                ref={imageRef}
                className="relative"
                style={{
                  width: "80vw",
                  maxWidth: "451px",
                  height: "calc(80vw * 1.124)", // Maintain aspect ratio (507/451)
                  maxHeight: "507px",
                }}
              >
                {/* Circular image */}
                <div
                  className="absolute rounded-full overflow-hidden z-10"
                  style={{
                    width: "calc(80vw * 0.789)", // 356/451 ratio
                    maxWidth: "356px",
                    height: "calc(80vw * 0.789)",
                    maxHeight: "356px",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <img src={image} alt="Uploaded content" className="w-full h-full object-cover" />
                </div>

                {/* Frame overlay */}
                <img
                  src="./img/Frame.png"
                  alt="Frame"
                  className="absolute pointer-events-none z-20 w-full"
                  style={{
                    height: "85.3%", 
                    top: "9.8%", 
                    left: "-5px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <button
                onClick={() => setImage(null)}
                className="px-4 py-2 md:px-6 md:py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium"
              >
                Upload New Image
              </button>
              <button
                onClick={downloadImage}
                disabled={isProcessing}
                className="px-4 py-2 md:px-6 md:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors duration-200 font-medium"
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Download Framed Image"
                )}
              </button>
            </div>

            <div className="text-center text-xs md:text-sm text-gray-600">
              <p>The image will be cropped to a perfect circle</p>
              <p className="mt-1">Only the center portion of your image will be visible</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageFramer;
