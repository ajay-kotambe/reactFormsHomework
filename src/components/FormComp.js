import { useState } from "react";
import "./FormComp.css";

const FormComp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
  });

  // console.log(formData);

  const changeHandler = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const submitHandler = (event) => {
    // <ShowOutput formData={formData} />;
    event.preventDefault();

    console.log(formData);
  };
  return (
    <>
      <div className="form-div">
        <form action="" onSubmit={submitHandler} className="actual-form">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name.."
            id="firstName"
            onChange={changeHandler}
          />
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            placeholder="Last Name.."
            id="lastName"
            name="lastName"
            onChange={changeHandler}
          />
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            placeholder="example@duck.com"
            id="email"
            name="email"
            onChange={changeHandler}
          />
          <div>
            <label htmlFor="country">Country</label> <br />
            <select name="country" onChange={changeHandler} id="country">
              <option value="India">India</option>
              <option value="Russia">Russia</option>
              <option value="USA">USA</option>
              <option value="Austrlia">Austrlia</option>
              <option value="Israel">Israel</option>
            </select>
          </div>
          <label htmlFor="street-address">Street Address</label>
          <input
            type="text"
            placeholder="Street Address"
            name="streetAddress"
            onChange={changeHandler}
            id="street-address"
          />
          <label htmlFor="city">City</label>
          <input
            type="text"
            placeholder="eg: Delhi"
            id="city"
            name="city"
            onChange={changeHandler}
          />
          <label htmlFor="state-province">State/Province</label>
          <input
            type="text"
            placeholder="West Bengal"
            id="state-province"
            name="state"
            onChange={changeHandler}
          />
          <label htmlFor="postalCode">ZIP/ Postal code</label>
          <input
            type="number"
            placeholder="413146"
            id="postalCode"
            name="postalCode"
            onChange={changeHandler}
          />
          <label>By Email</label>
          <div id="checkboxes">
            <input
              type="checkbox"
              name="comments"
              id="comments"
              onChange={changeHandler}
            />
            <label htmlFor="comments">Comments</label>
            <div>Get notified when someons posts a comment on a posting.</div>
            <input
              type="checkbox"
              name="candidiates"
              id="candidates"
              onChange={changeHandler}
            />
            <label htmlFor="candidates">Candidates</label>
            <div>Get notified when a candidate applies for job.</div>
            <input
              type="checkbox"
              name="offers"
              id="offers"
              onChange={changeHandler}
            />
            <label htmlFor="offers">Offers</label>
            <div>
              Fet notified when a candidate accepts or rejects an offer.
            </div>
          </div>
          <label>Push Notifications</label>
          <div id="">
            <input
              type="radio"
              name="notifications"
              id="everything"
              value="Everything"
              onChange={changeHandler}
            />
            <label htmlFor="everything">Everything</label>
            <input
              type="radio"
              name="notifications"
              id="same-as-email"
              value="Same as email"
              onChange={changeHandler}
            />
            <label htmlFor="same-as-email">Same as email</label>
            <input
              type="radio"
              name="notifications"
              id="no-push-notifications"
              value="No push notifications"
              onChange={changeHandler}
            />
            <label htmlFor="no-push-notifications">No push notifications</label>
          </div>
          <button>Save</button>
        </form>
      </div>
    </>
  );
};

export default FormComp;
