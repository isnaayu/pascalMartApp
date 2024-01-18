import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import "../Style/style.css";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    addRegister();
  }, []);

  const addRegister = async (e) => {
    e.preventDefault();

    try {
      const add = await axios.post("http://localhost:3001/user", {
        name,
        email,
        password,
        gender,
      });

      console.log(add);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="l1register">
      <div className="l2">
        <Card>
          <CardBody>
            <form onSubmit={addRegister}>
              <center className="l7">
                <div>
                  <h1>Pascal Mart Admin</h1>
                </div>
              </center>

              <div className="l3">
                <div className="l4">
                  <p>Name</p>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama"
                  />
                </div>
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
                <div className="l4">
                  <p>Gender</p>
                  <Input
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    placeholder="gender"
                  />
                </div>
                <div className="l6">
                  <Button
                    onClick={() => navigate("/login")}
                    type="submit"
                    colorScheme="green"
                  >
                    Create Account
                  </Button>
                </div>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Register;
