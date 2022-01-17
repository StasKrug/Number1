import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectAuth } from "../store/profile/selector";

export const PublicRoute = ({ children }) => {
  const authed = useSelector(selectAuth);

  return !authed ? children : <Navigate to="/chats" replace />;
};

export const PublicOutlet = () => {
  const authed = useSelector(selectAuth);

  return !authed ? <Outlet /> : <Navigate to="/chats" replace />;
};
