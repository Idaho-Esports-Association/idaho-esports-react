import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <>

      {/* <!-- Content================================================== --> */}
      <div className="site-content">
        <div className="container">
          {/* <!-- Error 404 --> */}
          <div className="error-404">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <figure className="error-404__figure">
                  <img src="assets/images/icon-ghost.svg" alt="" />
                </figure>
                <header className="error__header">
                  <h2 className="error__title">OOOOPS! Page not Found</h2>
                  <h3 className="error__subtitle">Seems that we have a problem!</h3>
                </header>
                <div className="error__description">
                  The page you are looking for has been moved or doesn’t exist
                  anymore, if you like you can return to our homepage. If the
                  problem persists, please send us an email to{" "}
                  <a href="mailto:info@idahoesports.gg">info@idahoesports.gg</a>
                </div>
                <footer className="error__cta">
                  <Link to="/" className="btn btn-primary">
                    Return to Home
                  </Link>
                  <a href="#" className="btn btn-primary-inverse">
                    Keep Browsing
                  </a>
                </footer>
              </div>
            </div>
          </div>
          {/* <!-- Error 404 / End --> */}
        </div>
      </div>

      {/* <!-- Content / End --> */}
    </>
  );
}
