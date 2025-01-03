import React, { useState, useEffect } from "react";
import useFormContextVC from "../../../hooks/useFormContextVC";


const Audio2 = (props) => {
  const [isRecording, setIsRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [recordingExists, setRecordingExists] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const { disableNext, setPage } = useFormContextVC();

  const handleNext = () => {
    setPage((prev) => prev + 1);
    postAudio();
  };

  const postAudio = async () => {
    if (audioBlob) {
      try {
        const formData = new FormData();
        formData.append("audio", audioBlob, "audio.mp3");

        const response = await fetch("http://127.0.0.1:5000/post", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          console.log("Audio uploaded successfully!");
        } else {
          console.error("Error uploading audio:", response.statusText);
        }
      } catch (error) {
        console.error("Error uploading audio:", error);
      }
    } else {
      console.error("No audio to upload.");
    }
  };
 
  useEffect(() => {
    let timer;

    if (isRecording) {
      // Start the timer when recording begins
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      // Clear the timer when recording stops
      clearInterval(timer);
    }

    // Clean up the timer when the component unmounts or when recording stops
    return () => {
      clearInterval(timer);
    };
  }, [isRecording]);

  const stopRecording = () => {
    mediaRecorder.stop();
    setIsRecording(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remainingSeconds}`;
  };

  const deleteRecording = () => {
    if (isRecording) {
      setShowDeleteConfirmation(true); // Show delete confirmation
    } else {
      // If not recording, delete immediately
      confirmDelete();
    }
  };

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const recorder = new MediaRecorder(stream);
        const chunks = [];

        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            chunks.push(event.data);
          }
        };

        recorder.onstop = () => {
          const blob = new Blob(chunks, { type: "audio/mp3" });
          setAudioBlob(blob);
          setAudioUrl(URL.createObjectURL(blob));
          setRecordingExists(true);
          setIsRecording(false);
        };

        recorder.start();
        setIsRecording(true);
        setMediaRecorder(recorder);
      })
      .catch((error) => console.error("Error accessing microphone:", error));
  };

  const confirmDelete = () => {
    setShowDeleteConfirmation(false); // Hide the delete confirmation message
    setIsRecording(false);
    setRecordingExists(false); // Reset recording state
    setSeconds(0); // Reset timer
    setAudioBlob(null); // Delete the recorded audio
    setAudioUrl(null);
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false); // Hide the delete confirmation message
  };

  return (
    <>
      {!props.pressed && (
        <div className={`${props.bgColor} h-1/2 w-full rounded-[20px] shadow flex flex-col space-y-[24px] justify-center items-center px-[54px]`}>
          <div className="w-[142.31px] h-5 text-center text-black text-base font-bold font-['Montserrat']">
            {isRecording ? `Recording: ${formatTime(seconds)}` : "Press to Record"}
          </div>
          <span>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="110"
              height="110"
              viewBox="0 0 110 110"
              fill="none"
            >
              <g filter="url(#filter0_d_805_391)">
                <circle cx="55" cy="51" r="51" fill="#FE764B" />
                <path
                  d="M32.6155 57.6588C32.0073 57.6588 31.424 57.469 30.9939 57.1311C30.5639 56.7932 30.3223 56.3349 30.3223 55.857V45.0459C30.3223 44.568 30.5639 44.1097 30.9939 43.7718C31.424 43.4339 32.0073 43.2441 32.6155 43.2441C33.2237 43.2441 33.807 43.4339 34.2371 43.7718C34.6672 44.1097 34.9088 44.568 34.9088 45.0459V55.857C34.9088 56.3349 34.6672 56.7932 34.2371 57.1311C33.807 57.469 33.2237 57.6588 32.6155 57.6588ZM44.0818 66.668C43.4736 66.668 42.8903 66.4782 42.4602 66.1403C42.0302 65.8024 41.7885 65.3441 41.7885 64.8662V36.0367C41.7885 35.5588 42.0302 35.1005 42.4602 34.7626C42.8903 34.4247 43.4736 34.2349 44.0818 34.2349C44.69 34.2349 45.2733 34.4247 45.7034 34.7626C46.1334 35.1005 46.3751 35.5588 46.3751 36.0367V64.8662C46.3751 65.3441 46.1334 65.8024 45.7034 66.1403C45.2733 66.4782 44.69 66.668 44.0818 66.668ZM55.5481 59.4607C54.9399 59.4607 54.3566 59.2708 53.9265 58.9329C53.4964 58.595 53.2548 58.1367 53.2548 57.6588V43.2441C53.2548 42.7662 53.4964 42.3079 53.9265 41.97C54.3566 41.6321 54.9399 41.4422 55.5481 41.4422C56.1563 41.4422 56.7396 41.6321 57.1696 41.97C57.5997 42.3079 57.8413 42.7662 57.8413 43.2441V57.6588C57.8413 58.1367 57.5997 58.595 57.1696 58.9329C56.7396 59.2708 56.1563 59.4607 55.5481 59.4607Z"
                  fill="white"
                />
                <path
                  d="M55.5498 41.4422V59.4607C56.158 59.4607 56.7413 59.2708 57.1714 58.9329C57.6015 58.595 57.8431 58.1367 57.8431 57.6588V43.2441C57.8431 42.7662 57.6015 42.3079 57.1714 41.97C56.7413 41.6321 56.158 41.4422 55.5498 41.4422ZM67.0161 66.668C66.4079 66.668 65.8246 66.4782 65.3945 66.1403C64.9644 65.8024 64.7228 65.3441 64.7228 64.8662V36.0367C64.7228 35.5588 64.9644 35.1005 65.3945 34.7626C65.8246 34.4247 66.4079 34.2349 67.0161 34.2349C67.6243 34.2349 68.2076 34.4247 68.6377 34.7626C69.0677 35.1005 69.3093 35.5588 69.3093 36.0367V64.8662C69.3093 65.3441 69.0677 65.8024 68.6377 66.1403C68.2076 66.4782 67.6243 66.668 67.0161 66.668ZM78.4824 59.4607C77.8741 59.4607 77.2908 59.2708 76.8608 58.9329C76.4307 58.595 76.1891 58.1367 76.1891 57.6588V43.2441C76.1891 42.7662 76.4307 42.3079 76.8608 41.97C77.2908 41.6321 77.8741 41.4422 78.4824 41.4422C79.0906 41.4422 79.6739 41.6321 80.1039 41.97C80.534 42.3079 80.7756 42.7662 80.7756 43.2441V57.6588C80.7756 58.1367 80.534 58.595 80.1039 58.9329C79.6739 59.2708 79.0906 59.4607 78.4824 59.4607Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_805_391"
                  x="0"
                  y="0"
                  width="110"
                  height="110"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_805_391"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_805_391"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </span>
          <div className="text-white text-base font-bold font-montserrat text-center hover:underline hover:cursor-pointer">
            {audioBlob && (
              <div>
                <audio
                  className="min-w-[220px] max-w-[80%]"
                  controls
                  src={audioUrl}
                />
              </div>
            )}
            <svg
                onClick={() => startRecording()}
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
              >
                <svg
                  onClick={() => startRecording()}
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <circle cx="17.1777" cy="17.1777" r="17.1777" fill="white" />
                  <path
                    d="M13.4268 11.9117V21.7124C13.4268 22.4598 14.3043 22.9139 14.9802 22.5071L23.1912 17.6067C23.8166 17.2378 23.8166 16.3864 23.1912 16.008L14.9802 11.117C14.3043 10.7103 13.4268 11.1643 13.4268 11.9117Z"
                    fill="black"
                  />
                </svg>
              </svg>
              <svg
                onClick={() => stopRecording()}
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
              >
                <svg
                  onClick={() => stopRecording()}
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <circle cx="17.1777" cy="17.4413" r="17.1777" fill="white" />
                  <path
                    d="M14.1323 11.228C13.68 11.228 13.2462 11.4041 12.9263 11.7174C12.6065 12.0307 12.4268 12.4557 12.4268 12.8988V21.2527C12.4268 21.6958 12.6065 22.1208 12.9263 22.4341C13.2462 22.7474 13.68 22.9235 14.1323 22.9235C14.5847 22.9235 15.0185 22.7474 15.3384 22.4341C15.6582 22.1208 15.8379 21.6958 15.8379 21.2527V12.8988C15.8379 12.4557 15.6582 12.0307 15.3384 11.7174C15.0185 11.4041 14.5847 11.228 14.1323 11.228ZM20.9547 11.228C20.5023 11.228 20.0685 11.4041 19.7486 11.7174C19.4288 12.0307 19.2491 12.4557 19.2491 12.8988V21.2527C19.2491 21.6958 19.4288 22.1208 19.7486 22.4341C20.0685 22.7474 20.5023 22.9235 20.9547 22.9235C21.407 22.9235 21.8408 22.7474 22.1607 22.4341C22.4806 22.1208 22.6603 21.6958 22.6603 21.2527V12.8988C22.6603 12.4557 22.4806 12.0307 22.1607 11.7174C21.8408 11.4041 21.407 11.228 20.9547 11.228Z"
                    fill="black"
                  />
                </svg>
              </svg>
              <svg
                onClick={() => deleteRecording()}
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
              >
                <svg
                  onClick={() => deleteRecording()}
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <circle cx="17.1777" cy="17.4413" r="17.1777" fill="white" />
                  <path
                    d="M13.1577 22.1925C13.1577 23.0002 13.8119 23.6544 14.6197 23.6544H20.4674C21.2751 23.6544 21.9293 23.0002 21.9293 22.1925V13.4209H13.1577V22.1925ZM22.6603 11.228H20.1019L19.3709 10.4971H15.7161L14.9851 11.228H12.4268V12.69H22.6603V11.228Z"
                    fill="black"
                  />
                </svg>
              </svg>

            {showDeleteConfirmation && (
              <div className="text-red-500 font-bold mt-2">
                Are you sure you want to delete the recording?
                <button
                  className="ml-2 text-white bg-red-500 px-2 py-1 rounded-md"
                  onClick={() => confirmDelete()}
                >
                  Yes
                </button>
                <button
                  className="ml-2 text-white bg-green-500 px-2 py-1 rounded-md"
                  onClick={() => cancelDelete()}
                >
                  No
                </button>
              </div>
            )}
          </div>
          <button
            onClick={() => {
              handleNext();
            }}
            disabled={disableNext}
            className="w-[198px] h-[39px] text-white bg-[#6610F2] rounded-[30px]"
          >
            Save & Continue
          </button>
        </div>
      )}
    </>
  );
  
};

export default Audio2;
