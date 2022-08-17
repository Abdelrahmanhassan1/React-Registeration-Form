import "./App.css";
import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserCard from "./components/UserCard";
function App() {
  const [users, setUsers] = useState([
    {
      name: "Abdelrahman Hassan",
      email: "abdelrahmanha278@gmail.com",
      website: "abdelrahman@magara.com",
      image:
        "https://avatars.githubusercontent.com/u/66575436?s=400&u=ddf32a6f90ecb7cbf642213af796e8f6606c59d2&v=4",
      skills: ["HTML", "CSS", "JavaScript"],
      gender: "male",
    },
  ]);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    website: "",
    image: "",
  });

  const [skills, setSkills] = useState([]);
  const [gender, setGender] = useState("");
  const htmlRef = useRef(false);
  const cssRef = useRef(false);
  const javaRef = useRef(false);
  const maleRef = useRef(false);
  const femaleRef = useRef(false);

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };
  const toastOptions = {
    autoClose: true,
    closeOnClick: true,
    draggable: true,
    pauseOnHover: true,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData.name && userData.email && userData.website && userData.image) {
      if (skills.length > 0) {
        if (gender !== "") {
          setUsers((prevUsers) => [
            ...prevUsers,
            {
              name: userData.name,
              email: userData.email,
              website: userData.website,
              image: userData.image,
              skills: skills,
              gender: gender,
            },
          ]);
        } else {
          toast.error("Must specify a Gender.", toastOptions);
        }
      } else {
        toast.error("Must Select at Least one Skill.", toastOptions);
      }
    } else {
      toast.error("There are empty field need data.", toastOptions);
    }
    clear();
  };

  const clear = () => {
    setUserData({
      name: "",
      email: "",
      website: "",
      image: "",
    });
    htmlRef.current.checked = false;
    cssRef.current.checked = false;
    javaRef.current.checked = false;
    maleRef.current.checked = false;
    femaleRef.current.checked = false;
    setSkills([]);
    setGender("");
  };

  const handleClear = (event) => {
    event.preventDefault();
    clear();
  };
  const handleCheckbox = (event) => {
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };
  const handleRadioButtons = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className="Main">
      <div className="App">
        <h1>User Registration Form</h1>
        <form>
          <div className="text-inputs">
            <div className="name">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                autoComplete="off"
                onChange={handleChange}
                value={userData.name}
                className="input-texts"
              />
            </div>
            <div className="email">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                onChange={handleChange}
                value={userData.email}
                className="input-texts"
              />
            </div>
            <div className="website">
              <label>Website:</label>
              <input
                type="text"
                name="website"
                autoComplete="off"
                onChange={handleChange}
                value={userData.website}
                className="input-texts"
              />
            </div>
            <div className="image">
              <label>Image Link:</label>
              <input
                type="text"
                name="image"
                autoComplete="off"
                onChange={handleChange}
                value={userData.image}
                className="input-texts"
              />
            </div>
          </div>
          <div className="skills">
            <label>Skills:</label>
            <input
              type="checkbox"
              id="HTML"
              name="HTML"
              value="HTML"
              onChange={handleCheckbox}
              ref={htmlRef}
            />
            <label htmlFor="HTML"> HTML</label>
            <input
              type="checkbox"
              id="CSS"
              name="CSS"
              value="CSS"
              onChange={handleCheckbox}
              ref={cssRef}
            />
            <label htmlFor="CSS">CSS</label>
            <input
              type="checkbox"
              id="Javascript"
              name="Javascript"
              value="Javascript"
              onChange={handleCheckbox}
              ref={javaRef}
            />

            <label htmlFor="Javascript"> Javascript</label>
          </div>
          <div className="gender">
            <label>Gender:</label>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={handleRadioButtons}
              ref={maleRef}
            />
            <label htmlFor="male">Male</label>

            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={handleRadioButtons}
              ref={femaleRef}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div className="buttons">
            <button onClick={handleSubmit} className="enroll">
              Enroll Student
            </button>
            <button onClick={handleClear} className="clear">
              Clear
            </button>
          </div>
        </form>
      </div>
      <hr />
      <div className="users">
        {users.map((user) => (
          <UserCard
            key={user.name}
            name={user.name}
            email={user.email}
            website={user.website}
            image={user.image}
            skills={user.skills}
            gender={user.gender}
          />
        ))}

        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
