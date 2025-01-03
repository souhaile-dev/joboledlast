import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleNotch,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
const Cnv2 = () => {
  const [open, setOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [modal, setModal] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [uploadedPdf, setUploadedPdf] = useState(null);
  const [showIcon, setShowIcon] = useState(false);

  const handleOpen = () => setOpen(!open);
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
        height="150px"
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

  useEffect(() => {
    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [modal]);

  return (
    <div className=" flex flex-row">
      <Dialog
        className="relative max:w-[597px] min:w-[597px] pt-[38px] pb-[50px] px-[36px] h-[440px] flex flex-col justify-between"
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <div className="absolute right-[35px] top-[30px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            onClick={handleOpen}
            className=" close-modal flex float-right cursor-pointer"
          >
            <path
              d="M9.4158 8.00409L15.7158 1.71409C15.9041 1.52579 16.0099 1.27039 16.0099 1.00409C16.0099 0.73779 15.9041 0.482395 15.7158 0.294092C15.5275 0.105788 15.2721 0 15.0058 0C14.7395 0 14.4841 0.105788 14.2958 0.294092L8.0058 6.59409L1.7158 0.294092C1.52749 0.105788 1.2721 2.36434e-07 1.0058 2.38419e-07C0.739497 2.40403e-07 0.484102 0.105788 0.295798 0.294092C0.107495 0.482395 0.00170684 0.73779 0.00170684 1.00409C0.00170684 1.27039 0.107495 1.52579 0.295798 1.71409L6.5958 8.00409L0.295798 14.2941C0.20207 14.3871 0.127676 14.4977 0.0769072 14.6195C0.0261385 14.7414 0 14.8721 0 15.0041C0 15.1361 0.0261385 15.2668 0.0769072 15.3887C0.127676 15.5105 0.20207 15.6211 0.295798 15.7141C0.388761 15.8078 0.499362 15.8822 0.621222 15.933C0.743081 15.9838 0.873786 16.0099 1.0058 16.0099C1.13781 16.0099 1.26852 15.9838 1.39038 15.933C1.51223 15.8822 1.62284 15.8078 1.7158 15.7141L8.0058 9.41409L14.2958 15.7141C14.3888 15.8078 14.4994 15.8822 14.6212 15.933C14.7431 15.9838 14.8738 16.0099 15.0058 16.0099C15.1378 16.0099 15.2685 15.9838 15.3904 15.933C15.5122 15.8822 15.6228 15.8078 15.7158 15.7141C15.8095 15.6211 15.8839 15.5105 15.9347 15.3887C15.9855 15.2668 16.0116 15.1361 16.0116 15.0041C16.0116 14.8721 15.9855 14.7414 15.9347 14.6195C15.8839 14.4977 15.8095 14.3871 15.7158 14.2941L9.4158 8.00409Z"
              fill="black"
            />
          </svg>
        </div>
        {uploadSuccess ? (
          <></>
        ) : (
          <DialogHeader className="w-full p-0 justify-center text-black text-4xl font-normal font-spacegrotesk">
            Upload your Resume
          </DialogHeader>
        )}

        <DialogBody
          onDrop={handleDrop} // Handle dropped files
          onDragOver={(e) => e.preventDefault()}
          className="flex flex-col space-y-[20px] justify-center items-center"
        >
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
                  src={uploadedImage}
                  className="max-h-[150px]"
                  onDrop={handleDrop} // Handle dropped files
                  onDragOver={(e) => e.preventDefault()}
                />
              )}
            </>
          ) : (
            <>
              <div
                htmlFor="formFile"
                type="file"
                accept=".pdf, .png, .jpg, .jpeg" // Accept both PDF and image files
                onChange={(e) => displayFile(e.target.files[0])}
                className="flex flex-col items-center justify-center space-y-[10px] w-[470px] min-h-[140px] h-[140px] bg-gray-100 rounded-[10px] shadow border border-black border-opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="42"
                  viewBox="0 0 50 42"
                  fill="none"
                >
                  <path
                    d="M33.3722 29.1744L25.0093 20.8115M25.0093 20.8115L16.6465 29.1744M25.0093 20.8115V39.628"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M42.5501 34.171C44.5893 33.0593 46.2002 31.3002 47.1285 29.1713C48.0569 27.0424 48.2499 24.665 47.677 22.4142C47.1041 20.1635 45.798 18.1676 43.9649 16.7416C42.1317 15.3156 39.8758 14.5407 37.5533 14.5392H34.919C34.2862 12.0914 33.1067 9.81902 31.4692 7.89276C29.8317 5.96649 27.7789 4.4365 25.465 3.41782C23.1511 2.39913 20.6364 1.91826 18.1099 2.01134C15.5834 2.10443 13.1109 2.76905 10.8782 3.95525C8.64559 5.14145 6.71089 6.81836 5.2196 8.8599C3.72832 10.9014 2.71925 13.2545 2.26826 15.7421C1.81727 18.2298 1.9361 20.7873 2.61581 23.2224C3.29552 25.6576 4.51842 27.9069 6.19258 29.8014"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M33.3722 29.1744L25.0093 20.8115L16.6465 29.1744"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <label
                  htmlFor="formFile"
                  for="toUpload"
                  type="file"
                  className="text-black text-xl font-normal font-poppins  hover:underline cursor-pointer"
                  accept=".pdf, .png, .jpg, .jpeg" // Accept both PDF and image files
                  onChange={(e) => displayFile(e.target.files[0])}
                >
                  Click to <span className="font-semibold">Upload</span> or Drag
                  & Drop
                </label>
              </div>
            </>
          )}
          <div
            className="flex items-center justify-center w-[60px] h-[60px]"
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
            id="toUpload"
            hidden
            type="file"
            accept=".pdf, .png, .jpg, .jpeg" // Accept both PDF and image files
            onChange={(e) => displayFile(e.target.files[0])}
          />
          <div className="flex flex-row justify-start space-x-[15px]">
            <div className="w-[18px] h-[18px] rounded-full border border-black flex items-center justify-center">
              <span className="text-black text-sm font-normal font-poppins leading-none">
                ?
              </span>
            </div>
            <div className="text-black text-xs font-normal font-poppins leading-[15px]">
              We recommend using a high-quality PDF or Word version of your
              resume
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="flex justify-center ">
          <Button
            onClick={handleSaveAndContinue}
            className="absolute bottom-[20px]  w-[525px] h-10 bg-blue-500 rounded-[30px] text-white text-base font-bold font-montserrat p-0 normal-case"
          >
            Save and Continue
          </Button>
        </DialogFooter>
      </Dialog>
      <div className="w-[367px] bg-convert-resume h-[832px] justify-center flex items-center bg-cover bg-no-repeat">
        <div className="ct w-[207px] h-[440px] bg-gray-100 bg-opacity-50 rounded-[20px] justify-center flex items-center flex-col shadow border border-black border-opacity-70">
          <button className="btn-modal mt-[150px]" onClick={handleOpen}>
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
            <div className="w-[142px] h-[42px] text-center mb-2 text-black text-base font-bold font-montserrat">
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
      <div className="w-full bg-[#EDF0F3] py-[56px] flex justify-center">
        <div className="w-[487px] h-[720px] px-[30px] pt-[57px] bg-white rounded-[20px]">
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
        </div>
      </div>
    </div>
  );
};
export default Cnv2;
