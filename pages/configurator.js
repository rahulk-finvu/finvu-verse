import { useState, useRef } from "react";
import Head from "next/head";

const defaultThemeConfig = {
  borderRadius: "8px",
  btnHeight: "48px",
  btnWidth: "335px",
  fontFamily: "Ysabeau Infant",
  fontUrl:
    "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&family=Ysabeau+Infant:ital,wght@0,1..1000;1,1..1000&family=Ysabeau:ital,wght@0,262;1,262&display=swap",
  headingColor: "#101419",
  logo: "https://cdn.finvu.in/finvulogos/bank_large_light.png",
  primaryColor: "#1867DC",
  secondaryColor: "#F3F5F8",
  subHeadingColor: "#3E5065",
  textColor: "#3E5065",
  excludeFIP: ["UBI-FIP"],
  sdkOptions: {
    allowDifferentMobile: "Y",
    allowMultipleFipDiscovery: "true",
    alternativeText:
      '{"ACCEPT_BTN": "Accept Consent","DENY_BTN": "Deny Consent","INFOGRAPHIC_TITLE": "Share your Bank Information instantly","OTP_PAGE_HEADING": "requires your financial information to provide the best Credit Card.","ACCOUNT_SELECTION_SUBTEXT_1": "Select your primary bank where you receive Salary or Business Credits, enabling us to evaluate your financials","ACCOUNT_SELECTION_SUBTEXT_2": "Kindly avoid selecting joint accounts", "ADD_NEW_BTN": "Add Another Bank Account"}',
    closeWindow: "false",
    consentOptions:
      '[{"Purpose.code": 103, "rank": 1, "checkbox":false, "defaultCheck":false}, {"Purpose.code": 104, "rank": 2, "checkbox":false, "defaultCheck":false}]',
    isPrimaryConsentCheckBoxHidden: "false",
    redirect: "true",
    sendBackBtnRes: "true",
    version: "v2",
  },
};

export default function Configurator() {
  const [themeConfig, setThemeConfig] = useState(defaultThemeConfig);
  const iframeRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setThemeConfig((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSdkOptionChange = (e) => {
    const { name, value } = e.target;
    setThemeConfig((prev) => ({
      ...prev,
      sdkOptions: {
        ...prev.sdkOptions,
        [name]: value,
      },
    }));
  };

  const handleSubmit = () => {
    console.log("Saving config:", themeConfig);

    // Simulate DB save with fetch (you can replace this)
    // await fetch("/api/save-config", { method: "POST", body: JSON.stringify(themeConfig) });

    // Reload the iframe
    iframeRef.current.src += "";
  };

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ height: "8vh" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Redirection Journey Configurator
          </a>
        </div>
      </nav>
      <div
        className="container-fluid mt-1"
        style={{ height: "92vh", overflowY: "hidden" }}
      >
        <div
          className="row my-0 py-0 d-flex flex-row align-items-center"
          style={{ height: "100%", overflow: "hidden" }}
        >
          {/* Left Side: Form */}
          <div
            className="col-md-6 p-4 py-0 my-0"
            style={{ height: "80%", overflowY: "auto" }}
          >
            <h4>Admin Configurator</h4>
            <form>
              <div className="mb-3">
                <label className="form-label">Border Radius</label>
                <input
                  className="form-control"
                  name="borderRadius"
                  value={themeConfig.borderRadius}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Button Height</label>
                <input
                  className="form-control"
                  name="btnHeight"
                  value={themeConfig.btnHeight}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Button Width</label>
                <input
                  className="form-control"
                  name="btnWidth"
                  value={themeConfig.btnWidth}
                  onChange={handleChange}
                />
              </div>

              {/* Add more fields... */}

              <div className="mb-3">
                <label className="form-label">Font Family</label>
                <input
                  className="form-control"
                  name="fontFamily"
                  value={themeConfig.fontFamily}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Font URL</label>
                <input
                  className="form-control"
                  name="fontUrl"
                  value={themeConfig.fontUrl}
                  onChange={handleChange}
                />
              </div>

              {/* SDK Options - Example */}
              <div className="mb-3">
                <label className="form-label">
                  SDK Option: allowDifferentMobile
                </label>
                <input
                  className="form-control"
                  name="allowDifferentMobile"
                  value={themeConfig.sdkOptions.allowDifferentMobile}
                  onChange={handleSdkOptionChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  SDK Option: alternativeText (JSON)
                </label>
                <textarea
                  className="form-control"
                  rows={4}
                  name="alternativeText"
                  value={themeConfig.sdkOptions.alternativeText}
                  onChange={handleSdkOptionChange}
                />
              </div>

              <button
                type="button"
                className="btn btn-primary mt-2"
                onClick={handleSubmit}
              >
                Save Config & Reload Preview
              </button>
            </form>
          </div>

          {/* Right Side: Mobile Preview */}
          <div
            className="col-md-6 p-4 d-flex justify-content-center align-items-start"
            style={{ height: "100%" }}
          >
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "24px",
                overflow: "hidden",
                width: "375px",
                height: "100%",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }}
            >
              <iframe
                ref={iframeRef}
                title="Live Preview"
                src="http://localhost:3001?ecreq=CbAx0BgOWdg5kLs0-aBJ6rd3BjxB1mC2c13a_TLQw-J9-u0YOofzjnVbD76X7-NVvEPOth5sxBRfNN5YsLmsA74lUKZ3wNvMp-Cw9EkILzcM9HxkIiv252PQaTdxm3c_0CRIN89MzgtTbvjDjR6QNBaktzCr0SCUZ7wE4x1zUvP9UkhV_1fphKCGY6nGdnuwHyLUGj9Zjrde1ux3v5X94hIr1T2Bz0MWxx2ZpPu4TeI=&reqdate=170420250652231&fi=V15FdFZYU1tRRkdTS1xWUA=="
                width="100%"
                height="100%"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
