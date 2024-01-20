import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WithAuth = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    useEffect(() => {
      const checkAuthentication = () => {
        const token = localStorage.getItem("token");
        if (token == "true") {
          console.log("Masuk");
        } else {
          navigate("/login");
        }

        console.log(token);
      };

      checkAuthentication();
    }, [navigate]);

    return <WrappedComponent {...props} />;
  };
};

export default WithAuth;
