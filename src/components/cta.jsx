import { useState } from "react";

export const CTA = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const contactData = props.data || {};
  const phone = contactData.phone || "0522435115";
  const email = contactData.email || "yakovb50@gmail.com";

  return (
    <div className="floating-cta">
      <div className={`cta-buttons ${isExpanded ? "expanded" : ""}`}>
        <a
          href={`tel:${phone}`}
          className="cta-button phone"
          title="התקשרו אלינו"
        >
          <i className="fa fa-phone"></i>
          <span className="cta-text">התקשרו</span>
        </a>

        <a
          href={`https://wa.me/${phone}`}
          className="cta-button whatsapp"
          title="שלחו הודעה בווטסאפ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-whatsapp"></i>
          <span className="cta-text">ווטסאפ</span>
        </a>

        <a
          href={`mailto:${email}`}
          className="cta-button email"
          title="שלחו מייל"
        >
          <i className="fa fa-envelope"></i>
          <span className="cta-text">מייל</span>
        </a>
      </div>

      <button
        className="cta-toggle"
        onClick={toggleExpanded}
        title={isExpanded ? "סגור" : "צור קשר"}
      >
        <i className={`fa ${isExpanded ? "fa-times" : "fa-comments"}`}></i>
      </button>
    </div>
  );
};
