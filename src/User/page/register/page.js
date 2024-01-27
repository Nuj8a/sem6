import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Button, Card } from "@nextui-org/react";
import { EyeFilledIcon } from "../../common/assets/jsx/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../common/assets/jsx/EyeSlashFilledIcon";
import { MailIcon } from "../../common/assets/jsx/MailIcon";
import PersonIcon from "@mui/icons-material/Person";
// import { useDispatch } from "react-redux";
// import { registerUser } from "../../../redux/slices/authSlice";
// import { useNavigate } from "react-router-dom";

const Register = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [formRegisterData, setFormRegisterData] = useState({
    email: "",
    password: "",
    name: "",
    image: "",
  });

  const formInputFieldChange = (e) => {
    if (e.target.name === "image") {
      setFormRegisterData({ ...formRegisterData, image: e.target.files[0] });
    } else {
      setFormRegisterData({
        ...formRegisterData,
        [e.target.name]: e.target.value,
      });
    }
  };

  // const handelLogin = async (data) => {
  //   try {
  //     const response = await dispatch(registerUser(data));
  //     if (response.payload.token) {
  //       navigate("/");
  //     }
  //   } catch (error) {
  //     console.error("Error creating post:", error);
  //   }
  // };

  return (
    <div className="min-h-[70vh] my-10 gap-2 flex flex-col justify-center items-center">
      <div className="min-h-[200px] w-[400px] rounded ">
        <Card
          radius="none"
          className="rounded-sm flex gap-5 flex-col p-8 font-poppins"
        >
          <div className="flex justify-between pb-1 items-center">
            <h3 className="text-[var(--text-dark-color)] font-semibold tracking-wider text-2xl font-Orbitron">
              Sign Up
            </h3>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-1 flex-col">
              <label
                htmlFor="name"
                className="text-sm text-[var(--text-dark-color)] cursor-pointer"
              >
                Name
              </label>
              <Input
                radius="sm"
                size="sm"
                variant="faded"
                isRequired
                label="Name"
                type="name"
                name="name"
                value={formRegisterData.name}
                onChange={formInputFieldChange}
                endContent={
                  <PersonIcon className="text-2xl mb-1 scale-90 text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
            </div>
            <div className="flex gap-1 flex-col">
              <label
                htmlFor="email"
                className="text-sm text-[var(--text-dark-color)] cursor-pointer"
              >
                Email
              </label>
              <Input
                radius="sm"
                size="sm"
                variant="faded"
                isRequired
                label="Email"
                name="email"
                value={formRegisterData.email}
                onChange={formInputFieldChange}
                type="email"
                endContent={
                  <MailIcon className="text-2xl mb-1 scale-90 text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
            </div>
            <div className="flex gap-1 flex-col">
              <div className="flex justify-between">
                <label
                  htmlFor="email"
                  className="text-sm text-[var(--text-dark-color)] cursor-pointer"
                >
                  Password
                </label>
              </div>
              <Input
                label="Password"
                isRequired
                radius="sm"
                size="sm"
                variant="faded"
                name="password"
                value={formRegisterData.password}
                onChange={formInputFieldChange}
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl mb-1 scale-90 text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl mb-1 scale-90 text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                className="max-w-full"
              />
            </div>
            <div className="flex gap-1 flex-col">
              <div className="flex justify-between">
                <label
                  htmlFor="email"
                  className="text-sm text-[var(--text-dark-color)] cursor-pointer"
                >
                  Profile Picture
                </label>
              </div>
              <Input
                radius="sm"
                variant="faded"
                size="sm"
                placeholder="Enter your profile picture"
                name="image"
                onChange={formInputFieldChange}
                type="file"
                endContent={
                  <PersonIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <Button
              fullWidth
              color="primary"
              radius="none"
              className="rounded-sm"
              type="submit"
            >
              Sign up
            </Button>
          </div>
          <div>
            <p className="text-xs text-[var(--text-light-color)] tracking-wider  pb-2">
              Already have account?{" "}
              <Link
                to={"/login"}
                className="text-blue-400 hover:text-blue-500 duration-150"
              >
                Sign in
              </Link>
            </p>
          </div>
        </Card>
      </div>
      <h3 className="text-[var(--text-light-color)] text-sm">
        Thank you for using web-upaya!!!
      </h3>
    </div>
  );
};

export default Register;
