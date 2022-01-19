import React, {useState} from "react";
import {Link} from "react-router-dom";
import { logIn } from "../services/firebase";
import { SignForm } from "./signForm";

export const Home = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (email, pass) => {
    setLoading(true);
    try {
      await logIn(email, pass);
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (<>
    <h3>HOME</h3>
    <SignForm onSubmit={handleSignIn} error={error} loading={loading} />
    <Link to="/signup">Sign Up</Link>
  </>);
};
