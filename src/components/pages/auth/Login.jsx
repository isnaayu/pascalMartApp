import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import "../Style/style.css";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ReactLoading from "react-loading";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notif, setNotif] = useState(false);
  const [loading, setLoading] = useState(false);

  const Validate = async (e) => {
    e.preventDefault();

    const getDatas = await axios.get("http://localhost:8000/users");
    const getAll = getDatas.data;
    console.log(getDatas);
    for (const data of getAll) {
      if (data.email === email && data.password === password) {
        setLoading(true);
        localStorage.setItem("token", "true");
        setTimeout(() => {
          navigate("/inputData");
        }, 2000);
      } else {
        console.log("ga ada");
        setNotif(true);
      }
    }
  };
  return (
    <>
      {loading ? (
        <center>
          <ReactLoading
            type={"bubbles"}
            color={"blue"}
            height={667}
            width={375}
          />
        </center>
      ) : (
        <div className="l1">
          <div className="l2">
            <Card>
              <CardBody>
                <center className="l12">
                  {notif ? <p>Email or Password Wrong</p> : ""}
                </center>

                <center className="l7">
                  <div>
                    <h1>Pascal Mart Admin</h1>
                  </div>
                </center>
                <form onSubmit={Validate}>
                  <div className="l3">
                    <div className="l4">
                      <p>Email</p>
                      <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                      />
                    </div>
                    <div className="l4">
                      <p>Password</p>
                      <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                      />
                    </div>
                    <div className="l6">
                      <Button type="submit" colorScheme="blue">
                        Login
                      </Button>
                      <center>
                        <p>Don't have an account ?</p>
                      </center>

                      <Button
                        type="submit"
                        onClick={() => navigate("/register")}
                        colorScheme="green"
                      >
                        Register
                      </Button>
                    </div>
                  </div>
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
