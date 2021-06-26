import axios from "axios";
import { getAPI } from "../constants";
import { GET_REPO_LIST } from "./types";
import Swal from "sweetalert2";

// // GET todo
export const getRepoSearch = (data, pageno) => (dispatch) => {
  console.log(data);
  axios
    .get(
      `https://api.github.com/search/repositories?q=${data}&page=${pageno}&per_page=20`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      dispatch({
        type: GET_REPO_LIST,
        payload: res,
      });
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};
