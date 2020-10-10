import React, { useEffect, useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";

const resolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return null;
};

export default resolveAuthScreen;
