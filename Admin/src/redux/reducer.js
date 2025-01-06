import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
const initialState = {
  pa: [],
};

export const AdminLogin = createAsyncThunk("/admin/login", async (admin) => {
  const { username, password } = admin;
  const response = await axios
    .post(`${import.meta.env.VITE_APP_HTTP_URL}/api/admin`, {
      username,
      password,
    })
    .then((response) => {
      localStorage.setItem("authtoken", response.data.token);
      return response.data;
    })
    .catch((error) => {
      console.error(error.response.data);
      return error.response.data;
    });

  return response;
});
export const ContactGet = createAsyncThunk("/contact/get", async () => {
  const response = await axios
    .get(`${import.meta.env.VITE_APP_HTTP_URL}/api/contacts`, {
      headers: { authtoken: localStorage.getItem("authtoken") },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error.response.data);
      return error.response.data;
    });

  return response;
});
export const ContactDelete = createAsyncThunk("/contact/delete", async (id) => {
  const response = await axios
    .delete(`${import.meta.env.VITE_APP_HTTP_URL}/api/contacts/delete/${id}`, {
      headers: { authtoken: localStorage.getItem("authtoken") },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error.response.data);
      return error.response.data;
    });

  return response;
});
export const ContactTotal = createAsyncThunk("/contact/total", async () => {
  const response = await axios
    .get(`${import.meta.env.VITE_APP_HTTP_URL}/api/contacts/total/contact`, {
      headers: { authtoken: localStorage.getItem("authtoken") },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error.response.data);
      return error.response.data;
    });

  return response;
});

export const paFreelancer = createSlice({
  name: "pafreelancer",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AdminLogin.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(AdminLogin.fulfilled, (state, payload) => {
      state.pending = false;
      state.admins = payload.payload;
      if (state.admins.success === true) {
        toast.success("Admin Successfully Login!", {
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
      if (state.admins.success === false) {
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
    builder.addCase(ContactGet.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(ContactGet.fulfilled, (state, payload) => {
      state.pending = false;
      state.contact = payload.payload;
    });
    builder.addCase(ContactGet.rejected, (state, payload) => {
      state.pending = true;
      state.error = payload.payload;
    });
    builder.addCase(ContactDelete.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(ContactDelete.fulfilled, (state, payload) => {
      state.pending = false;
      state.contactd = payload.payload;
      if (state.contactd.success === true) {
        toast.success("Contact Successfully Deleted!", {
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
      if (state.contactd.success === false) {
        toast.warn("Contact Deletion Faild!", {
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
    builder.addCase(ContactDelete.rejected, (state, payload) => {
      state.pending = true;
      state.error = payload.payload;
    });
    builder.addCase(ContactTotal.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(ContactTotal.fulfilled, (state, payload) => {
      state.pending = false;
      state.contactt = payload.payload;
    });
    builder.addCase(ContactTotal.rejected, (state, payload) => {
      state.pending = true;
      state.error = payload.payload;
    });
  },
});

export default paFreelancer.reducer;
