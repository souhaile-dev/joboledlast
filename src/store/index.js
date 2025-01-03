import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  personalInfoReducer,
  educationReducer,
  experienceReducer,
  skillsReducer,
  languagesReducer,
  projectsReducer,
} from "../reducers/voiceCreationSlice";

const voiceCreationReducer = combineReducers({
  personalInfo: personalInfoReducer,
  education: educationReducer,
  experience: experienceReducer,
  skills: skillsReducer,
  languages: languagesReducer,
  projects: projectsReducer,
});

const store = configureStore({
  reducer: voiceCreationReducer,
});

export default store;

// import { createStore } from "redux";

// const initialState = {
//   className: "default",
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "CHANGE_CLASSNAME":
//       return {
//         ...state,
//         className: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// import { configureStore } from "@reduxjs/toolkit";
// import resumeReducer from "../reducers/voiceCreationReducer";
// const store = configureStore({
//   reducer: {
//     resumeReducer: resumeReducer,
//   },
// });
// export default store;
