import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [error, setError] = useState();
  const handleNameBlur = (event) => {
    setName(event.target.value);
  };

  const handelPhoneBlur = (event) => {
    setPhone(event.target.value);
  };
  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };
  const handleInfoFrom = (event) => {
    event.preventDefault();
    const shipping = { name, email, address, phone };
    console.log(shipping);
  };
  return (
    <div className="from-container">
      <div>
        <form onSubmit={handleInfoFrom}>
          <h1 className="from-title">SignUp</h1>
          <div className="from-group">
            <label htmlFor="name">Name</label>
            <input
              onBlur={handleNameBlur}
              type="text"
              name="name"
              id=""
              placeholder="Please give Name"
              required
            />
          </div>
          <div className="from-group">
            <label htmlFor="email">Your Email</label>
            <input
              value={user?.email}
              readOnly
              type="email"
              name="email"
              id=""
              placeholder="Your Email"
              required
            />
          </div>
          <div className="from-group">
            <label htmlFor="phone">Your Phone</label>
            <input
              onBlur={handelPhoneBlur}
              type="number"
              name="phone"
              id=""
              placeholder="Phone number"
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <div className="from-group">
            <label htmlFor="address">Your Address</label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="address"
              id=""
              placeholder="Your address"
              required
            />
          </div>
          <input className="from-submit" type="submit" value="Add Shipping" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
