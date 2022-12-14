import React from "react";
import { Navigate, useLocation } from "react-router";
import { useSelector } from "react-redux";
import { UserState, userStateSelector } from "../store/auth/authSlice";
import { embedRedirect } from "../utils/redirect";

export interface RequireAuthProps {
  children: JSX.Element;
}

const RequireAuth: React.FC<React.PropsWithChildren<RequireAuthProps>> = (
  props
) => {
  const authState = useSelector(userStateSelector);
  const location = useLocation();
  console.log("Authing:", authState, location);
  const isHomePage = location.pathname === "/";
  const navigateTo = isHomePage ? "/login" : embedRedirect(location.pathname);
  if (authState === UserState.SIGNED_OUT) {
    return <Navigate to={navigateTo} state={{ isRedirect: !isHomePage }} />;
  } else {
    return props.children;
  }
};

export default RequireAuth;
