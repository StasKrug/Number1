import { apiUrl } from "../../utils/constants";

export const REQUEST_ARTICLES_LOADING = "ARTICLES::REQUEST_LOADING";
export const REQUEST_ARTICLES_FAIL = "ARTICLES::REQUEST_FAIL";
export const REQUEST_ARTICLES_SUCCESS = "ARTICLES::REQUEST_SUCCESS";

export const getArticlesLoading = () => ({
  type: REQUEST_ARTICLES_LOADING,
});
export const getArticlesSuccess = (articles) => ({
  type: REQUEST_ARTICLES_SUCCESS,
  payload: articles,
});
export const getArticlesFail = (err) => ({
  type: REQUEST_ARTICLES_FAIL,
  payload: err,
});

export const getArticles = () => async (dispatch) => {
  dispatch(getArticlesLoading());

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Error. Try again.");
    }
    const result = await response.json();
    dispatch(getArticlesSuccess(result));
  } catch (err) {
    console.warn(err);
    dispatch(getArticlesFail(err.message));
  }
};
