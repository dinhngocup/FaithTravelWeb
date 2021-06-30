import React, { createContext, useState } from "react";
import { getHomestayData } from "../Data/homestayData";
import { SavedData } from "../Data/savedData";

export const SavedContext = createContext();

const SavedProvider = ({ children }) => {
  const [savedData, setSavedData] = useState(SavedData);
  const savedHomestay = (homestayId) => {
    let newHomestay = getHomestayData(homestayId);
    let newList = [...savedData];
    newList.unshift(newHomestay);
    setSavedData(newList);
  };
  const removeHomestay = (homestayId) => {
    let newList = [...savedData];
    newList = newList.filter(
      (homestay) => homestay.homestayId !== parseInt(homestayId)
    );
    setSavedData(newList);
  };

  return (
    <SavedContext.Provider value={{ savedData, savedHomestay, removeHomestay }}>
      {children}
    </SavedContext.Provider>
  );
};

export default SavedProvider;