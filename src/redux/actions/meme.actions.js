import * as types from "redux/constants/meme.constants";
import api from "redux/api";
import { toast } from "react-toastify";

const memesRequest = (pageNum) => async (dispatch) => {
  dispatch({ type: types.GET_MEMES_REQUEST, payload: null });
  try {
    const res = await api.get(`/memes?page=${pageNum}&perPage=9`);
    dispatch({ type: types.GET_MEMES_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.GET_MEMES_FAILURE, payload: error });
  }
};

const createMemeRequest = (image) => async (dispatch) => {
  dispatch({ type: types.CREATE_MEME_REQUEST, payload: null });
  try {
    const formData = new FormData();
    console.log(image)
    formData.append("image", image);
    const res = await api.post(`/memes`, formData,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    dispatch({
      type: types.CREATE_MEME_SUCCESS,
      payload: res.data.data,
    });
    toast.success("You can put your idea on the meme now!");
  } catch (error) {
    console.log(error)
    dispatch({ type: types.CREATE_MEME_FAILURE, payload: error });
  }
};

const setSelectedMeme = (meme) => ({
  type: types.SET_SELECTED_MEME,
  payload: meme,
});

const updateMemeRequest = (texts, memeId) => async (dispatch) => {
  dispatch({ type: types.UPDATE_MEME_REQUEST, payload: null });
  try {
    const body = { texts };
    const res = await api.put(`/memes/${memeId}`, body);
    dispatch({
      type: types.UPDATE_MEME_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: types.UPDATE_MEME_FAILURE, payload: error });
  }
};


export const memeActions = {
  memesRequest,
  createMemeRequest,
  setSelectedMeme,
  updateMemeRequest
};