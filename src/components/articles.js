import { useEffect} from "react";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  selectArticlesError,
  selectArticlesList,
  selectArticlesLoading,
} from "../store/articles/selectors";
import { getArticles } from "../store/articles/actions";

export const Articles = () => {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticlesList);
  const isLoading = useSelector(selectArticlesLoading);
  const error = useSelector(selectArticlesError);

  const requestArticles = async () => {
    dispatch(getArticles());
  };

  useEffect(() => {
    requestArticles();
  }, []);

  return (
    <>
      <h3>Articles</h3>
      {isLoading ? (<CircularProgress />) : (
        <>
          <button onClick={requestArticles}>REQUEST</button>
          {!!error && <h4>ERRROR: {error}</h4>}
          <ul>
            <p key={articles.key}>{articles.activity}</p>
            <p>Price:{articles.price}</p>
            <a href={articles.link}>{articles.link}</a>
          </ul>
        </>
      )}
    </>
  );
};
