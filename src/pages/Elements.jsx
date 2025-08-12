import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Elements.css";

// Import images from Elements Images folder
import dImage from "../Elements Images/d.jpg";
import f1Image from "../Elements Images/f1.jpg";
import f2Image from "../Elements Images/f2.jpg";
import f3Image from "../Elements Images/f3.jpg";
import f4Image from "../Elements Images/f4.jpg";
import f5Image from "../Elements Images/f5.jpg";
import f6Image from "../Elements Images/f6.jpg";
import f7Image from "../Elements Images/f7.jpg";
import f8Image from "../Elements Images/f8.jpg";
import g1Image from "../Elements Images/g1.jpg";
import g2Image from "../Elements Images/g2.jpg";
import g3Image from "../Elements Images/g3.jpg";
import g4Image from "../Elements Images/g4.jpg";
import g5Image from "../Elements Images/g5.jpg";
import g6Image from "../Elements Images/g6.jpg";
import g7Image from "../Elements Images/g7.jpg";
import g8Image from "../Elements Images/g8.jpg";

const Elements = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    message: "",
    primaryColor: "",
    accentColor: "",
    secondaryColor: "",
  });

  const [switches, setSwitches] = useState({
    sample: false,
    primary: true,
    outline: true,
  });

  const [checkboxes, setCheckboxes] = useState({
    sample: false,
    primary: true,
    outline: true,
    disabled: false,
    disabledActive: true,
  });

  const [radioValue, setRadioValue] = useState("primary");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSwitchChange = (switchName) => {
    setSwitches({
      ...switches,
      [switchName]: !switches[switchName],
    });
  };

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes({
      ...checkboxes,
      [checkboxName]: !checkboxes[checkboxName],
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="elements-hero">
        <div className="elements-hero-overlay"></div>
        <div className="elements-hero-content">
          <h1 className="elements-hero-title">OUR ELEMENT</h1>
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">
              HOME
            </Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">ELEMENT</span>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="elements-content">
        <div className="container">
          {/* Text Sample Section */}
          <section className="elements-section">
            <h2 className="section-title">Text Sample</h2>
            <div className="text-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
            </div>
          </section>

          {/* Sample Buttons Section */}
          <section className="elements-section">
            <h2 className="section-title">Sample Buttons</h2>

            {/* Button Colors */}
            <div className="button-group">
              <div className="button-row">
                <button className="btn btn-default">Default</button>
                <button className="btn btn-primary">Primary</button>
                <button className="btn btn-info">Info</button>
                <button className="btn btn-warning">Warning</button>
                <button className="btn btn-danger">Danger</button>
                <button className="btn btn-light">Light</button>
                <button className="btn btn-dark">Dark</button>
                <button className="btn btn-disabled" disabled>Disable</button>
              </div>
              <div className="button-row">
                <button className="btn btn-outline btn-outline-default">Default</button>
                <button className="btn btn-outline btn-outline-primary">Primary</button>
                <button className="btn btn-outline btn-outline-info">Info</button>
                <button className="btn btn-outline btn-outline-warning">Warning</button>
                <button className="btn btn-outline btn-outline-danger">Danger</button>
                <button className="btn btn-outline btn-outline-light">Light</button>
                <button className="btn btn-outline btn-outline-dark">Dark</button>
              </div>
            </div>

            {/* Button Shapes */}
            <div className="button-group">
              <div className="button-row">
                <button className="btn btn-primary btn-sharp">Sharp</button>
                <button className="btn btn-primary btn-rounded">Rounded</button>
                <button className="btn btn-primary btn-pill">Pill</button>
              </div>
            </div>

            {/* Button Sizes */}
            <div className="button-group">
              <div className="button-row">
                <button className="btn btn-primary btn-lg">Large</button>
                <button className="btn btn-primary">Default</button>
                <button className="btn btn-primary btn-sm">Small</button>
              </div>
              <div className="button-row">
                <button className="btn btn-outline btn-outline-primary btn-lg">Large</button>
                <button className="btn btn-outline btn-outline-primary">Default</button>
                <button className="btn btn-outline btn-outline-primary btn-sm">Small</button>
              </div>
            </div>
          </section>

          {/* Left/Right Aligned Text with Images */}
          <section className="elements-section">
            <div className="aligned-content">
              <div className="aligned-item">
                <h3>Left Aligned</h3>
                <div className="aligned-content-wrapper">
                  <img
                    src={dImage}
                    alt="Child in field"
                    className="aligned-image"
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae
                    ab illo inventore veritatis et quasi architecto beatae
                    vitae dicta sunt explicabo.
                  </p>
                </div>
              </div>

              <div className="aligned-item">
                <h3>Right Aligned</h3>
                <div className="aligned-content-wrapper right-aligned">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae
                    ab illo inventore veritatis et quasi architecto beatae
                    vitae dicta sunt explicabo.
                  </p>
                  <img
                    src={dImage}
                    alt="Child in field"
                    className="aligned-image"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Definition List */}
          <section className="elements-section">
            <h2 className="section-title">Definition</h2>
            <div className="definition-list">
              <div className="definition-item">
                <h3>Definition 01</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className="definition-item">
                <h3>Definition 02</h3>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
              <div className="definition-item">
                <h3>Definition 03</h3>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem.
                </p>
              </div>
            </div>
          </section>

          {/* Block Quotes */}
          <section className="elements-section">
            <h2 className="section-title">Block Quotes</h2>
            <blockquote className="block-quote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </blockquote>
          </section>

          {/* Table */}
          <section className="elements-section">
            <h2 className="section-title">Table</h2>
            <div className="table-container">
              <table className="elements-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>COUNTRIES</th>
                    <th>VISITS</th>
                    <th>PERCENTAGES</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <div className="country-flag">
                        <img src={f1Image} alt="Canada Flag" className="flag-image" />
                        <span>Canada</span>
                      </div>
                    </td>
                    <td>648012</td>
                    <td>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: "85%", backgroundColor: "#dc3545" }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <div className="country-flag">
                        <img src={f2Image} alt="UK Flag" className="flag-image" />
                        <span>UK</span>
                      </div>
                    </td>
                    <td>548012</td>
                    <td>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: "75%", backgroundColor: "#007bff" }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <div className="country-flag">
                        <img src={f3Image} alt="Germany Flag" className="flag-image" />
                        <span>Germany</span>
                      </div>
                    </td>
                    <td>448012</td>
                    <td>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: "65%", backgroundColor: "#28a745" }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      <div className="country-flag">
                        <img src={f4Image} alt="China Flag" className="flag-image" />
                        <span>China</span>
                      </div>
                    </td>
                    <td>348012</td>
                    <td>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: "55%", backgroundColor: "#ffc107" }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>
                      <div className="country-flag">
                        <img src={f5Image} alt="USA Flag" className="flag-image" />
                        <span>USA</span>
                      </div>
                    </td>
                    <td>248012</td>
                    <td>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: "45%", backgroundColor: "#6f42c1" }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>
                      <div className="country-flag">
                        <img src={f6Image} alt="Brazil Flag" className="flag-image" />
                        <span>Brazil</span>
                      </div>
                    </td>
                    <td>148012</td>
                    <td>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: "35%", backgroundColor: "#fd7e14" }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>
                      <div className="country-flag">
                        <img src={f7Image} alt="India Flag" className="flag-image" />
                        <span>India</span>
                      </div>
                    </td>
                    <td>98012</td>
                    <td>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: "25%", backgroundColor: "#20c997" }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>
                      <div className="country-flag">
                        <img src={f8Image} alt="Russia Flag" className="flag-image" />
                        <span>Russia</span>
                      </div>
                    </td>
                    <td>48012</td>
                    <td>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: "15%", backgroundColor: "#6c757d" }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Image Gallery Grid */}
          <section className="elements-section">
            <h2 className="section-title">Image Gallery</h2>
            <div className="image-gallery-grid">
              <div className="gallery-item">
                <img src={g1Image} alt="Gallery Image 1" />
              </div>
              <div className="gallery-item">
                <img src={g2Image} alt="Gallery Image 2" />
              </div>
              <div className="gallery-item">
                <img src={g3Image} alt="Gallery Image 3" />
              </div>
              <div className="gallery-item">
                <img src={g4Image} alt="Gallery Image 4" />
              </div>
              <div className="gallery-item">
                <img src={g5Image} alt="Gallery Image 5" />
              </div>
              <div className="gallery-item">
                <img src={g6Image} alt="Gallery Image 6" />
              </div>
              <div className="gallery-item">
                <img src={g7Image} alt="Gallery Image 7" />
              </div>
              <div className="gallery-item">
                <img src={g8Image} alt="Gallery Image 8" />
              </div>
              <div className="gallery-item">
                <img src={g1Image} alt="Gallery Image 9" />
              </div>
            </div>
          </section>

          {/* Three Column Layout */}
          <section className="elements-section">
            <div className="three-column-layout">
              {/* Image Gallery with Headers */}
              <div className="column">
                <h3>Image Gallery</h3>
                <div className="gallery-headers">
                  <div className="gallery-header-item">This is header 01</div>
                  <div className="gallery-header-item">This is header 02</div>
                  <div className="gallery-header-item">This is header 03</div>
                  <div className="gallery-header-item">This is header 04</div>
                  <div className="gallery-header-item">This is header 01</div>
                </div>
              </div>

              {/* Unordered List */}
              <div className="column">
                <h3>Unordered List</h3>
                <ul className="unordered-list">
                  <li>List item one</li>
                  <li>List item two</li>
                  <li>List item three</li>
                  <li>List item four</li>
                  <li>List item five</li>
                  <li>List item six</li>
                  <li>List item seven</li>
                  <li>List item eight</li>
                  <li>List item nine</li>
                  <li>List item ten</li>
                </ul>
              </div>

              {/* Ordered List */}
              <div className="column">
                <h3>Ordered List</h3>
                <ol className="ordered-list">
                  <li>List item one</li>
                  <li>List item two</li>
                  <li>List item three</li>
                  <li>List item four</li>
                  <li>List item five</li>
                  <li>List item six</li>
                  <li>List item seven</li>
                  <li>List item eight</li>
                  <li>List item nine</li>
                  <li>List item ten</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Form Elements */}
          <section className="elements-section">
            <h2 className="section-title">Form Element</h2>
            <div className="form-layout">
              {/* Form Inputs */}
              <div className="form-column">
                <form className="elements-form">
                  <div className="form-group">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="country"
                      placeholder="Country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="primaryColor"
                      placeholder="Primary color"
                      value={formData.primaryColor}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="accentColor"
                      placeholder="Accent color"
                      value={formData.accentColor}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="secondaryColor"
                      placeholder="Secondary color"
                      value={formData.secondaryColor}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </form>
              </div>

              {/* Right Side Controls */}
              <div className="controls-column">
                {/* Switches */}
                <div className="control-group">
                  <h3>Switches</h3>
                  <div className="switch-item">
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={switches.sample}
                        onChange={() => handleSwitchChange("sample")}
                      />
                      <span className="slider"></span>
                    </label>
                    <span>Sample Switch</span>
                  </div>
                  <div className="switch-item">
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={switches.primary}
                        onChange={() => handleSwitchChange("primary")}
                      />
                      <span className="slider slider-primary"></span>
                    </label>
                    <span>Primary Color Switch</span>
                  </div>
                  <div className="switch-item">
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={switches.outline}
                        onChange={() => handleSwitchChange("outline")}
                      />
                      <span className="slider slider-outline"></span>
                    </label>
                    <span>Outline Color Switch</span>
                  </div>
                </div>

                {/* Selectboxes */}
                <div className="control-group">
                  <h3>Selectboxes</h3>
                  <select className="form-select">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>

                {/* Checkboxes */}
                <div className="control-group">
                  <h3>Checkboxes</h3>
                  <div className="checkbox-item">
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        checked={checkboxes.sample}
                        onChange={() => handleCheckboxChange("sample")}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <span>Sample Checkbox</span>
                  </div>
                  <div className="checkbox-item">
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        checked={checkboxes.primary}
                        onChange={() => handleCheckboxChange("primary")}
                      />
                      <span className="checkmark checkmark-primary"></span>
                    </label>
                    <span>Primary Color Checkbox</span>
                  </div>
                  <div className="checkbox-item">
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        checked={checkboxes.outline}
                        onChange={() => handleCheckboxChange("outline")}
                      />
                      <span className="checkmark checkmark-outline"></span>
                    </label>
                    <span>Outline Color Checkbox</span>
                  </div>
                  <div className="checkbox-item disabled">
                    <label className="checkbox">
                      <input type="checkbox" disabled />
                      <span className="checkmark"></span>
                    </label>
                    <span>Disabled Checkbox</span>
                  </div>
                  <div className="checkbox-item disabled">
                    <label className="checkbox">
                      <input type="checkbox" disabled checked />
                      <span className="checkmark"></span>
                    </label>
                    <span>Disabled Checkbox active</span>
                  </div>
                </div>

                {/* Radios */}
                <div className="control-group">
                  <h3>Radios</h3>
                  <div className="radio-item">
                    <label className="radio">
                      <input
                        type="radio"
                        name="radio"
                        value="sample"
                        checked={radioValue === "sample"}
                        onChange={(e) => setRadioValue(e.target.value)}
                      />
                      <span className="radio-mark"></span>
                    </label>
                    <span>Sample radio</span>
                  </div>
                  <div className="radio-item">
                    <label className="radio">
                      <input
                        type="radio"
                        name="radio"
                        value="primary"
                        checked={radioValue === "primary"}
                        onChange={(e) => setRadioValue(e.target.value)}
                      />
                      <span className="radio-mark radio-mark-primary"></span>
                    </label>
                    <span>Primary Color radio</span>
                  </div>
                  <div className="radio-item">
                    <label className="radio">
                      <input
                        type="radio"
                        name="radio"
                        value="outline"
                        checked={radioValue === "outline"}
                        onChange={(e) => setRadioValue(e.target.value)}
                      />
                      <span className="radio-mark radio-mark-outline"></span>
                    </label>
                    <span>Outline Color radio</span>
                  </div>
                  <div className="radio-item disabled">
                    <label className="radio">
                      <input type="radio" name="radio" disabled />
                      <span className="radio-mark"></span>
                    </label>
                    <span>Disabled radio</span>
                  </div>
                  <div className="radio-item disabled">
                    <label className="radio">
                      <input type="radio" name="radio" disabled checked />
                      <span className="radio-mark"></span>
                    </label>
                    <span>Disabled radio and text</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Elements;
