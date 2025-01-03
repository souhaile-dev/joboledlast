import React from "react";
import { useState, useEffect } from "react";
// import rt from "src/assets/img/Rectangle3.png";
// import rt from "../../assets/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCircleNotch,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FaCheckCircle } from "react-icons/fa";

const Cnv = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [modal, setModal] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [uploadedPdf, setUploadedPdf] = useState(null);
  const [showIcon, setShowIcon] = useState(false);

  const handlePdfUpload = () => {
    // Logic to handle PDF upload goes here
    // For demonstration purposes, we'll set a dummy PDF URL
    const dummyPdfUrl = "https://example.com/dummy.pdf";
    setUploadedPdf(dummyPdfUrl);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    displayImage(file);
    displayFile(file);
  };
  const handleSaveAndContinue = () => {
    setShowIcon(true);
    setUploadedPdf(false); // Hide the PDF
    setUploadedImage(false); // Hide the image

    setTimeout(() => {
      setShowIcon(false); // Hide the loading spinner after 5 seconds

      // Add any other logic you want to perform after 5 seconds here
      // For example, showing the checkmark or navigating to another page
    }, 5000);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    displayImage(file);
  };
  const PdfViewer = ({ pdfUrl }) => {
    return (
      <iframe
        src={pdfUrl}
        width="100%"
        height="600px"
        onDrop={handleDrop} // Handle dropped files
        onDragOver={(e) => e.preventDefault()}
      />
    );
  };

  const displayImage = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target.result);
      setUploadSuccess(true);
    };
    reader.onload = (e) => {
      const fileUrl = e.target.result;
      const fileType = file.type;

      if (fileType.includes("image")) {
        setUploadedImage(fileUrl);
        setUploadSuccess(true);
      } else if (fileType.includes("pdf")) {
        setUploadedPdf(fileUrl);
        setUploadSuccess(true);
      } else {
        // Handle unsupported file types
        console.error("Unsupported file type.");
      }
    };
    reader.readAsDataURL(file);
  };
  const displayFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const fileUrl = e.target.result;
      const fileType = file.type;

      if (fileType.includes("image")) {
        setUploadedImage(fileUrl);
        setUploadSuccess(true);
      } else if (fileType.includes("pdf")) {
        setUploadedPdf(fileUrl);
        setUploadSuccess(true);
      } else {
        // Handle unsupported file types
        console.error("Unsupported file type.");
      }
    };

    reader.readAsDataURL(file);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setShowIcon(true); // Change showIcon to true after 5 seconds
  //     }, 5000);

  //     return () => clearTimeout(timer);
  //   }, []);

  return (
    <div className=" flex items-center">
      <div className="w-[367px] bg-convert-resume h-[832px] justify-center flex items-center bg-cover bg-no-repeat">
        <div className="ct w-[207px] h-[440px] bg-gray-100 bg-opacity-50 rounded-[20px] justify-center flex items-center flex-col shadow border border-black border-opacity-70">
          <button className="btn-modal mt-[150px]" onClick={toggleModal}>
            <svg
              className="p-2 opacity-90 bg-white rounded-[20px] shadow"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 96 96"
              fill="none"
            >
              <path
                d="M48 29.6729L48 67.2001"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M66.7637 48.4365L29.2364 48.4365"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle cx="48" cy="48" r="48" fill="#F05A58" />
              <path
                d="M48 36L48 61"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M60 48L36 48"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="mt-4">
            <div className="w-[142px] h-[42px] text-center mb-2 text-black text-base font-bold font-['Montserrat']">
              Upload your Resume
            </div>
          </div>
          <div className="mt-4">
            <div className="w-40 h-16 text-black text-xs font-normal mt-[80px] font-['Poppins'] leading-[15px]">
              Please submit your resume in either Word or PDF format for further
              consideration.
            </div>
          </div>
        </div>
      </div>

      <div className="w-[487px] h-[720px] mx-[320px] bg-gray-100 rounded-[20px]">
        <div className="animate-pulse flex space-x-4 mt-2">
          <div className="w-[130px] h-[18px] bg-zinc-300 rounded-[22px]" />
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-gray-300 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                <div className="h-2 bg-gray-300 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>

        <div className="animate-pulse flex space-x-4 mt-5">
          <div className="w-[130px] h-[18px] bg-zinc-300 rounded-[22px]" />
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-gray-300 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                <div className="h-2 bg-gray-300 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
        {modal && (
          <div className="modal border w-full">
            <div className="overlay"></div>
            <div className="modal-content w-full border-1 bg-white border-gray-500 shadow-2xl py-4 pr-4 rounded-lg pb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                onClick={toggleModal}
                className=" close-modal flex float-right cursor-pointer"
              >
                <path
                  d="M9.4158 8.00409L15.7158 1.71409C15.9041 1.52579 16.0099 1.27039 16.0099 1.00409C16.0099 0.73779 15.9041 0.482395 15.7158 0.294092C15.5275 0.105788 15.2721 0 15.0058 0C14.7395 0 14.4841 0.105788 14.2958 0.294092L8.0058 6.59409L1.7158 0.294092C1.52749 0.105788 1.2721 2.36434e-07 1.0058 2.38419e-07C0.739497 2.40403e-07 0.484102 0.105788 0.295798 0.294092C0.107495 0.482395 0.00170684 0.73779 0.00170684 1.00409C0.00170684 1.27039 0.107495 1.52579 0.295798 1.71409L6.5958 8.00409L0.295798 14.2941C0.20207 14.3871 0.127676 14.4977 0.0769072 14.6195C0.0261385 14.7414 0 14.8721 0 15.0041C0 15.1361 0.0261385 15.2668 0.0769072 15.3887C0.127676 15.5105 0.20207 15.6211 0.295798 15.7141C0.388761 15.8078 0.499362 15.8822 0.621222 15.933C0.743081 15.9838 0.873786 16.0099 1.0058 16.0099C1.13781 16.0099 1.26852 15.9838 1.39038 15.933C1.51223 15.8822 1.62284 15.8078 1.7158 15.7141L8.0058 9.41409L14.2958 15.7141C14.3888 15.8078 14.4994 15.8822 14.6212 15.933C14.7431 15.9838 14.8738 16.0099 15.0058 16.0099C15.1378 16.0099 15.2685 15.9838 15.3904 15.933C15.5122 15.8822 15.6228 15.8078 15.7158 15.7141C15.8095 15.6211 15.8839 15.5105 15.9347 15.3887C15.9855 15.2668 16.0116 15.1361 16.0116 15.0041C16.0116 14.8721 15.9855 14.7414 15.9347 14.6195C15.8839 14.4977 15.8095 14.3871 15.7158 14.2941L9.4158 8.00409Z"
                  fill="black"
                />
              </svg>
              <div
                onDrop={handleDrop} // Handle dropped files
                onDragOver={(e) => e.preventDefault()}
              >
                <label
                  htmlFor="formFile"
                  className="w-[395px] h-[51px] flex items-center justify-center text-center text-black text-2xl font-normal font-['Space Grotesk']"
                >
                  {uploadSuccess ? <></> : "Upload your Resume"}
                </label>
                <div>
                  {uploadSuccess ? (
                    <>
                      {uploadedPdf ? (
                        <PdfViewer
                          pdfUrl={uploadedPdf}
                          onDrop={handleDrop} // Handle dropped files
                          onDragOver={(e) => e.preventDefault()}
                        />
                      ) : (
                        <img
                          className="mx-auto"
                          src={uploadedImage}
                          onDrop={handleDrop} // Handle dropped files
                          onDragOver={(e) => e.preventDefault()}
                        />
                      )}
                    </>
                  ) : (
                    <div  className="flex flex-col items-center border shadow-xl ml-3 bg-gray-200 justify-center py-8 pt-5 mb-5">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-black-500 dark:text-black-400">
                        Click to <span className="font-semibold">Upload</span>{" "}
                        or Drag & Drop
                      </p>
                    </div>
                  )}
                  <div
                    className="flex items-center justify-center w-full h-full"
                    //   style={{ display: showIcon ? 'flex' : 'ic2' }}
                  >
                    {showIcon ? (
                      <FontAwesomeIcon
                        icon={faCircleNotch}
                        className="text-6xl animate-spin text-green-500"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="ic2 text-6xl text-green-500"
                      />
                    )}
                  </div>
                  <input
                    hidden
                    type="file"
                    accept=".pdf, .png, .jpg, .jpeg" // Accept both PDF and image files
                    onChange={(e) => displayFile(e.target.files[0])}
                  />
                </div>
                <div className="text-left ml-4 text-black text-sm font-normal font-['Poppins'] leading-none mt-2">
                  <span className=" w-[18px] rounded-full border border-black">
                    ?
                  </span>{" "}
                  We recommend using a high-quality headshot that presents you
                  in a professional and positive light.
                </div>
                <button
                  onClick={handleSaveAndContinue}
                  className="rounded-full bg-blue-500 ml-8 text-white shadow-2xl   px-[130px] min-w-2 mt-4"
                >
                  Save and Continue
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="animate-pulse flex space-x-4 mt-8">
          <div className="flex-1 space-y-6 py-1">
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                <div className="h-2 bg-gray-300 rounded col-span-1"></div>
                <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                <div className="h-2 bg-gray-300 rounded col-span-1"></div>
                <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                <div className="h-2 bg-gray-300 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
        <div className="animate-pulse flex space-x-4 mt-2">
          <div className="w-[130px] h-[18px] bg-zinc-300 rounded-[22px]" />
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-gray-300 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                <div className="h-2 bg-gray-300 rounded col-span-1"></div>
              </div>

              <div className="h-2 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>

        <div className="animate-pulse flex space-x-4 mt-2">
          <div className="rounded-full bg-gray-300 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-gray-300 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                <div className="h-2 bg-gray-300 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>

        <div className="animate-pulse flex space-x-4 mt-2">
          <div className="rounded-full bg-gray-300 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-gray-300 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                <div className="h-2 bg-gray-300 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>

        <div className="animate-pulse flex space-x-4 mt-5">
          <div className="rounded-full bg-gray-300 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-gray-300 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                <div className="h-2 bg-gray-300 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>

        <div className="animate-pulse flex space-x-4 mt-8">
          <div className="flex-1 space-y-6 py-1">
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                <div className="h-2 bg-gray-300 rounded col-span-1"></div>
                <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                <div className="h-2 bg-gray-300 rounded col-span-1"></div>
                <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                <div className="h-2 bg-gray-300 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cnv;
