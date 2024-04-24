import React, { useState } from "react";
import "./sup.css";

const Subscription = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    date_of_birth: "",
    profession: "",
    shoesize: "",
    haircolor: "",
    hairlength: "",
    waistsize: "",
    height: "",
    weight: "",
    castings: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let type = e.target.value;

    setUser({
      ...user,
      [name]: value,
      [name]: type === "radio" ? (checked ? value : "") : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert(user);
    console.log(user);

    try {
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log(response);
      if (response.ok) {
        setUser({
          firstname: "",
          lastname: "",
          gender: "",
          date_of_birth: "",
          profession: "",
          shoesize: "",
          haircolor: "",
          hairlength: "",
          waistsize: "",
          height: "",
          weight: "",
          castings: "",
        });
   
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <>
      <div className="form subscription_form">
        <form onSubmit={handleSubmit} id="signupForm">
          <h2 className="headingSub">Subscription Form</h2>
          <div className="input_box">
            <input
              type="text"
              name="firstname"
              placeholder="Enter your first name"
              id="fname"
              required
              autoComplete="off"
              value={user.firstname}
              onChange={handleInput}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Enter your last name"
              id="lname"
              required
              autoComplete="off"
              value={user.lastname}
              onChange={handleInput}
            />

            <br />
            <label>Gender: </label>
            <br />
            <div className="maleRad">
              <label>Male: </label>
              <input
                type="radio"
                name="gender"
                //   placeholder="Enter your last name"
                id="gender"
                required
                autoComplete="off"
                value="male"
                onChange={handleInput}
              />

              <label>Female: </label>
              <input
                type="radio"
                name="gender"
                id="gender"
                required
                autoComplete="off"
                value="female"
                onChange={handleInput}
              />
            </div>
            <br />
            <label>Date of Birth</label>
            <input
              type="date"
              name="date_of_birth"
              id="date_of_birth"
              required
              autoComplete="off"
              value={user.date_of_birth}
              onChange={handleInput}
            />
            <br />
            <select
              name="profession"
              value={user.profession} 
              onChange={handleInput}
            >
              <option value="">Select</option>
              <option value="Model">Model</option>
              <option value="Actor">Actor</option>
              <option value="Comedian">Comedian</option>
            </select>
            <br />
            <label>Shoe Size</label>
            <input
              type="number"
              name="shoesize"
              placeholder="Enter your Shoe Size"
              id="shoesize"
              required
              autoComplete="off"
              value={user.shoesize}
              onChange={handleInput}
            />
            <label>Hair Color</label>
            <input
              type="text"
              name="haircolor"
                placeholder="Enter your Hair Color"
              id="haircolor"
              required
              autoComplete="off"
              value={user.haircolor}
              onChange={handleInput}
            />
            <label>Hair Length</label>
            <input
              type="number"
              name="hairlength"
                placeholder="Enter your Hair Length"
              id="hairlength"
              required
              autoComplete="off"
              value={user.hairlength}
              onChange={handleInput}
            />
            <label>Waist Size</label>
            <input
              type="number"
              name="waistsize"
                placeholder="Enter your Waist size"
              id="waistsize"
              required
              autoComplete="off"
              value={user.waistsize}
              onChange={handleInput}
            />
            <label>Height</label>
            <input
              type="number"
              name="height"
                placeholder="Enter your height"
              id="height"
              required
              autoComplete="off"
              value={user.height}
              onChange={handleInput}
            />
            <label>Weight</label>
            <input
              type="number"
              name="weight"
                placeholder="Enter your weight"
              id="weight"
              required
              autoComplete="off"
              value={user.weight}
              onChange={handleInput}
            />
            <select
              name="castings"
              value={user.castings} 
              onChange={handleInput}
            >
              <option value="">Select</option>
              <option value="movies">Movies</option>
              <option value="commercials">Commercials</option>
              <option value="newspapers">Newspapers</option>
              <option value="magazines">Magazines</option>
            </select>
            <br />

            <button type="submit" className="buttonSubscribe">
              Subscribe Now
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Subscription;
