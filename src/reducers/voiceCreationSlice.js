import { createSlice } from "@reduxjs/toolkit";

const personalInfoInitialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
};

// Personal Info Slice
const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState: personalInfoInitialState,
  reducers: {
    updatePersonalInfo: (state, action) => {
      // Merge the action.payload with the existing personalInfo object
      Object.assign(state, action.payload);
    },
  },
});

export const { updatePersonalInfo } = personalInfoSlice.actions;
export const personalInfoReducer = personalInfoSlice.reducer;

const educationInitialState = {
  education: [
    {
      degree: "",
      school: "",
      graduationYear: "",
    },
  ],
};

// Education Slice
const educationSlice = createSlice({
  name: "education",
  initialState: educationInitialState, // Corrected
  reducers: {
    updateEducation: (state, action) => {
      // Overwrite the entire education array with the new one from the payload.
      state.education = action.payload;
    },
  },
});

export const { updateEducation } = educationSlice.actions;
export const educationReducer = educationSlice.reducer;

const experienceInitialState = {
  experience: [
    {
      position: "",
      company: "",
      startDate: "",
      endDate: "",
      responsibilities: [],
    },
  ],
};

// Experience Slice
const experienceSlice = createSlice({
  name: "experience",
  initialState: experienceInitialState,
  reducers: {
    updateExperience: (state, action) => {
      state.experience = action.payload;
    },
  },
});

export const { updateExperience } = experienceSlice.actions;
export const experienceReducer = experienceSlice.reducer;

const skillsInitialState = {
  skills: [
    {
      category: "",
      list: [],
    },
  ],
};

// Skills Slice
const skillsSlice = createSlice({
  name: "skills",
  initialState: skillsInitialState,
  reducers: {
    updateSkills: (state, action) => {
      state.skills = action.payload;
    },
  },
});

export const { updateSkills } = skillsSlice.actions;
export const skillsReducer = skillsSlice.reducer;

const languagesInitialState = {
  languages: [
    {
      language: "",
      proficiency: "",
    },
  ],
};

// Languages Slice
const languagesSlice = createSlice({
  name: "languages",
  initialState: languagesInitialState,
  reducers: {
    updateLanguages: (state, action) => {
      state.languages = action.payload;
    },
  },
});

export const { updateLanguages } = languagesSlice.actions;
export const languagesReducer = languagesSlice.reducer;

const projectsInitialState = {
  projects: [
    {
      title: "",
      description: "",
      technologies: [],
    },
  ],
};

// Projects Slice
const projectsSlice = createSlice({
  name: "projects",
  initialState: projectsInitialState,
  reducers: {
    updateProjects: (state, action) => {
      state.projects = action.payload;
    },
  },
});

export const { updateProjects } = projectsSlice.actions;
export const projectsReducer = projectsSlice.reducer;
