import React, { useState, useEffect } from "react";
import "./create.scss";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [country, setCountry] = useState([]);
  const [countryid, setCountryid] = useState("");
  const [st, setSt] = useState([]);
  const [stateid, setStateid] = useState("");
  const [city, setCity] = useState([]);

  const postData = () => {
    console.log(name);
    console.log(email);
    console.log(phone);
}

  useEffect(() => {
    const getcountry = async () => {
      const rescountry = await fetch(
        "http://localhost/devopsdeveloper/country/"
      );
      const rescon = await rescountry.json();
      setCountry(await rescon);
    };
    getcountry();
  }, []);

  const handlecountry = (event) => {
    const getcountryid = event.target.value;
    setCountryid(getcountryid);
  };

  useEffect(() => {
    const getstate = async () => {
      const resstate = await fetch(
        `http://localhost/devopsdeveloper/state/getstate/${countryid}`
      );
      const resst = await resstate.json();
      setSt(await resst);
    };
    getstate();
  }, [countryid]);

  const handlestate = (event) => {
    const getstateid = event.target.value;
    setStateid(getstateid);
  };

  useEffect(() => {
    const getcity = async () => {
      const rescity = await fetch(
        `http://localhost/devopsdeveloper/city/getcity/${stateid}`
      );
      const rcity = await rescity.json();
      setCity(await rcity);
    };
    getcity();
  }, [stateid]);

  return (
    <>
      <div className="create" id="create">
        <div>
          <div className="container"  >
            <form id="contact">
              <h3>Details Form</h3>
              <fieldset>
                <input
                  placeholder="Your name"
                  type="text"
                  required
                  autofocus
                  onChange={(e) => setName(e.target.value)}
                />
              </fieldset>
              <fieldset>
                <input
                  placeholder="Your Email Address"
                  type="email"
                  required
                  autofocus
                  onChange={(e) => setEmail(e.target.value)}

                />
              </fieldset>
              <fieldset>
                <input
                  placeholder="Your Phone Number (optional)"
                  type="tel"
                  required
                  onChange={(e) => setPhone(e.target.value)}

                />
              </fieldset>
              <fieldset>
                <select
                  name="country"
                  className="form-control p-2"
                  onChange={(e) => handlecountry(e)}
                >
                  <option value="">--Select Country--</option>
                  {country.map((getcon, index) => (
                    <option key={index} value={getcon.country_id}>
                      {getcon.country_name}{" "}
                    </option>
                  ))}
                </select>
              </fieldset>
              <fieldset>
                <select
                  className="form-select"
                  name="state"
                  onChange={(e) => handlestate(e)}
                >
                  <option value="">--Select State--</option>
                  {st.map((getst, index) => (
                    <option key={index} value={getst.state_id}>
                      {getst.state_name}{" "}
                    </option>
                  ))}
                </select>
              </fieldset>
              <fieldset>
                <select className="form-select" name="city">
                  <option value="">--Select City--</option>
                  {city.map((gcity, index) => (
                    <option key={index} value={gcity.city_id}>
                      {" "}
                      {gcity.city_name}{" "}
                    </option>
                  ))}
                </select>
              </fieldset>
              <fieldset>
                <input className="file-upload" type="file" accept="image/*" />
              </fieldset>
              <fieldset>
                <button
                  name="submit"
                  type="submit"
                  id="contact-submit"
                  data-submit="...Sending"
                  onClick={postData}
                >
                  Submit
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
