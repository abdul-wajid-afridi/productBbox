import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../Api";

const initialState = {
  items: [],
  cart: [],
  editItems: null,
  error: null,
  loading: false,
};

// getting items
export const asyncGetItems = createAsyncThunk(
  "asyncGetThunks/get",
  async () => {
    try {
      const items = await Api.get("items");
      const result = await items.data;
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

// posting items

export const asyncPostItems = createAsyncThunk(
  "asyncPostItems/post",
  async (data) => {
    const { img, name, price, toast } = data;
    console.log(data);
    try {
      const items = await Api.post("items", {
        name,
        price,
        img,
      });
      const result = await items.data;
      toast.success("post added");
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);
// delete items

export const asyncDeleteItems = createAsyncThunk(
  "asyncDeleteItems/delete",
  async (data, { dispatch }) => {
    const { toast, id } = data;
    try {
      const items = await Api.delete(`items/${id}`);
      const result = await items.data;
      dispatch(asyncGetItems());
      toast.error("post deleted");
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

// getSingle post items
export const asynGetSingleItem = createAsyncThunk(
  "asynGetSingleItem/put",
  async (id, { dispatch }) => {
    try {
      const items = await Api.get(`items/${id}`);
      const result = await items.data;
      dispatch(asyncGetItems());
      // console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);
// Edit  post items
export const asyncEditItem = createAsyncThunk(
  "asyncEditItem/put",
  async (data, { dispatch }) => {
    console.log(data);
    const { id, navigate, toast, name, price, img } = data;
    try {
      const items = await Api.put(`items/${id}`, { id, name, price, img });
      const result = await items.data;

      toast.success("item updated successfully");
      dispatch(asyncGetItems());
      setTimeout(() => {
        return navigate("/");
      }, [1000]);
      // console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const ItemsSlice = createSlice({
  name: "itemsSlice",
  initialState,
  reducers: {
    RemoveEditItem: (state) => {
      state.editItems = null;
    },
  },
  extraReducers: {
    // get items
    [asyncGetItems.pending]: (state) => {
      state.error = null;
      state.loading = true;
    },
    [asyncGetItems.fulfilled]: (state, { payload }) => {
      state.error = null;
      state.loading = false;
      state.items = payload;
    },
    [asyncGetItems.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    // post items
    [asyncPostItems.pending]: (state) => {
      state.error = null;
      state.loading = true;
    },
    [asyncPostItems.fulfilled]: (state, { payload }) => {
      state.error = null;
      state.loading = false;
      state.items = [payload];
    },
    [asyncPostItems.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    // Delete items
    [asyncDeleteItems.pending]: (state) => {
      state.error = null;
      state.loading = true;
    },
    [asyncDeleteItems.fulfilled]: (state, { payload }) => {
      state.error = null;
      state.loading = false;
      state.items = [payload];
    },
    [asyncDeleteItems.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    // GetSingle items
    [asynGetSingleItem.pending]: (state) => {
      state.error = null;
      state.loading = true;
    },
    [asynGetSingleItem.fulfilled]: (state, { payload }) => {
      state.error = null;
      state.loading = false;
      state.editItems = payload;
    },
    [asynGetSingleItem.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    // Edit items
    [asyncEditItem.pending]: (state) => {
      state.error = null;
      state.loading = true;
    },
    [asyncEditItem.fulfilled]: (state, { payload }) => {
      state.error = null;
      state.loading = false;
      state.items = payload;
    },
    [asyncEditItem.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const { RemoveEditItem } = ItemsSlice.actions;
export default ItemsSlice.reducer;
