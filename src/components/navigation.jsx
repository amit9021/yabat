export const Navigation = (props) => {
  const contactData = props.data || {};
  const phone = contactData.phone || "0522435115";

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-left">
            <li>
              <a href={`tel:${phone}`}>
                <i className="fa fa-phone"></i>
              </a>
            </li>
            <li>
              <a href={`https://wa.me/${phone}`}>
                <i className="fa fa-whatsapp"></i>
              </a>
            </li>
          </ul>

          <ul className="nav navbar-nav navbar-center">
            <li>
              <a href="#about" className="page-scroll">
                אודות
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                שירותים
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                גלריה
              </a>
            </li>

            <li>
              <a href="#testimonials" className="page-scroll">
                המלצות
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                צור קשר
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-header navbar-right">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            י.ב.ט מיזוג אוויר
          </a>{" "}
          <img src="/img/logo.jpg" alt="logo" id="nav-logo" className="logo" />
        </div>
      </div>
    </nav>
  );
};
