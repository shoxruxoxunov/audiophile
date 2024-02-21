import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  return (
    JSON.parse(localStorage.getItem("audioplie-products")) || {
      allProducts: [],
      price: 0,
      total: 0,
    }
  );
};
