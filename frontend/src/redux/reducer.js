import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  value: [],
};

export const ContactCreate = createAsyncThunk(
  "/contact/create",
  async (contact) => {
    const { name, email, message } = contact;
    const response = await axios
      .post(`${import.meta.env.VITE_APP_HTTP_URL}/api/contacts/message`, {
        name,
        email,
        message,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error.response.data);
        return error.response.data;
      });

    return response;
  }
);

export const paFreelancer = createSlice({
  name: "paFreelancer",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ContactCreate.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(ContactCreate.fulfilled, (state, payload) => {
      state.pending = false;
      state.contact = payload.payload;
      if (state.contact.success === true) {
        toast.success("Your Message Successfully Sended!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      if (state.contact.success === false) {
        toast.warn("Pleace Valid Data Enter!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    });
    builder.addCase(ContactCreate.rejected, (state, payload) => {
      state.pending = false;
      state.error = payload.payload;
    });
  },
});

export default paFreelancer.reducer;
