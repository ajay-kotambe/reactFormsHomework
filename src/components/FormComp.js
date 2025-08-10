import { useState } from "react";
import "./FormComp.css";

const FormComp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
  });

  console.log(formData);

  const changeHandler = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  return (
    <>
      <div className="form-div">
        <form action="" className="actual-form">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name.."
            id="firstName"
            onChange={changeHandler}
          />
          <label htmlFor="lastName">Last name</label>
          <input type="text" placeholder="Last Name.." id="lastName" />
          <label htmlFor="email">Email address</label>
          <input type="text" placeholder="example@duck.com" id="email" />
          <div>
            <label htmlFor="country">Country</label> <br />
            <select name="" id="country">
              <option value="India">India</option>
              <option value="Russia">Russia</option>
              <option value="USA">USA</option>
              <option value="Austrlia">Austrlia</option>
              <option value="Israel">Israel</option>
            </select>
          </div>
          <label htmlFor="street-address">Street Address</label>
          <input type="text" placeholder="Street Address" id="street-address" />
          <label htmlFor="city">City</label>
          <input type="text" placeholder="eg: Delhi" id="city" />
          <label htmlFor="state-province">State/Province</label>
          <input type="text" placeholder="West Bengal" id="state-province" />
          <label htmlFor="postalCode">ZIP/ Postal code</label>
          <input type="text" placeholder="413146" id="postalCode" />
          <label>By Email</label>
          <div id="checkboxes">
            <input type="checkbox" id="comments" />
            <label htmlFor="comments">Comments</label>
            <div>Get notified when someons posts a comment on a posting.</div>
            <input type="checkbox" id="candidates" />
            <label htmlFor="candidates">Candidates</label>
            <div>Get notified when a candidate applies for job.</div>
            <input type="checkbox" id="offers" />
            <label htmlFor="offers">Offers</label>
            <div>
              Fet notified when a candidate accepts or rejects an offer.
            </div>
          </div>
          <label>Push Notifications</label>
          <div id="">
            <input type="radio" name="notifications" id="everything" />
            <label htmlFor="everything">Everything</label>
            <input type="radio" name="notifications" id="same-as-email" />
            <label htmlFor="same-as-email">Same as email</label>
            <input
              type="radio"
              name="notifications"
              id="no-push-notifications"
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
