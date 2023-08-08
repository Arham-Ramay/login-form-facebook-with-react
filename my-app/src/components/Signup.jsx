import React from "react";

export default function Signup() {
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center  align-items-center">
          {/* left side of signup */}

          <div className="col-lg-6  col-md-6  pt-4 mt-5  text-md-start  text-center">
            <h1 className="display-4  text-primary  fw-bold">facebook</h1>
            <p className=" fs-3  display-5">
              Facebook helps you to connect and share with the people in your
              life.
            </p>
          </div>
          {/* right side of signup*/}

          <div
            className="col-lg-4 col-md-4  main-second-div  mt-4 p-4  shadow-lg"
            style={{ borderRadius: "18px" }}
          >
            <form>
              <div className="mb-2">
                <input
                  className="form-control p-3"
                  type="email"
                  placeholder="Email address or phone number"
                />
                <div className="form-text">
                  We will never share your email to anyone else.
                </div>
              </div>
              <div className="mb-2">
                <input
                  className="form-control p-3"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <button
                className="btn btn-primary p-2 fs-5 fw-bold"
                style={{ width: "100%" }}
              >
                Log in
              </button>

              <a href="/" className=" text-center text-primary mt-4">
                <p>Forgotten password</p>
              </a>
              <hr />
              <div className="container d-flex justify-content-center">
                <button
                  className="btn mt-2 p-2 fs-5"
                  style={{
                    backgroundColor: "rgb(66, 183, 42)",
                    color: "white",
                  }}
                >
                  Create new account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
