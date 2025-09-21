// ShopWidget.jsx
import { useState } from "react";

export const ShopWidget = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  // גלריית שירותים
  const products = [
    {
      id: 1,
      title: "התקנת מערכת VRF",
      description:
        "התקנה מקצועית של מערכת VRF מתקדמת עם הנמכות גבס מושלמות ותמיכה טכנית מלאה.",
      price: "התקשרו לקבלת הצעת מחיר",
      image: "img/portfolio/01.webp",
      paymentUrl: "tel:0522435115",
    },
    {
      id: 2,
      title: "מיני מרכזי עם דמפרים",
      description:
        "התקנה מקצועית של מיני מרכזי עם טכנולוגיית דמפרים מתקדמת ושליטה מלאה.",
      price: "התקשרו לקבלת הצעת מחיר",
      image: "img/portfolio/02.webp",
      paymentUrl: "tel:0522435115",
    },
    {
      id: 3,
      title: "מזגן נסתר בזריקה ישירה",
      description: "התקנה אסתטית של מזגן נסתר עם תריס דקור פינתי ועיצוב מושלם.",
      price: "התקשרו לקבלת הצעת מחיר",
      image: "img/portfolio/03.webp",
      paymentUrl: "tel:0522435115",
    },
    {
      id: 4,
      title: "הנמכות גבס מותאמות",
      description:
        "ביצוע הנמכות גבס מקצועיות המותאמות למערכות המיזוג עם עיצוב מושלם ואסתטי.",
      price: "התקשרו לקבלת הצעת מחיר",
      image: "img/portfolio/04.webp",
      paymentUrl: "tel:0522435115",
    },
    {
      id: 5,
      title: "מערכות גדולות בוילות",
      description:
        "התקנה של מערכות מיזוג גדולות בוילות עם טכנולוגיה מתקדמת וניסיון רב.",
      price: "התקשרו לקבלת הצעת מחיר",
      image: "img/portfolio/05.webp",
      paymentUrl: "tel:0522435115",
    },
    {
      id: 6,
      title: "ייעוץ מקצועי עם הדמיה",
      description:
        "ייעוץ מקצועי עם הדמיה תלת ממדית של תכנית העבודה והתקנה בדירת הלקוח.",
      price: "התקשרו לקבלת הצעת מחיר",
      image: "img/portfolio/06.webp",
      paymentUrl: "tel:0522435115",
    },
  ];

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProductIndex(
      (prev) => (prev - 1 + products.length) % products.length
    );
  };

  const goToProduct = (index) => {
    setCurrentProductIndex(index);
  };

  return (
    <>
      <div id="shop" className="max-w-6xl mx-auto p-4">
        {/* כותרת הגלריה */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            שירותי מיזוג אוויר מקצועיים
          </h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            בחרו מהמגוון הרחב של השירותים שלנו וקבלו פתרון מיזוג מושלם לביתכם
          </p>
        </header>

        <div className="product-carousel">
          <div className="carousel-container">
            {/* כפתורי ניווט */}
            <button
              className="carousel-nav prev"
              onClick={prevProduct}
              aria-label="מוצר קודם"
            >
              ‹
            </button>

            <button
              className="carousel-nav next"
              onClick={nextProduct}
              aria-label="מוצר הבא"
            >
              ›
            </button>

            {/* מוצר נוכחי */}
            <div className="current-product">
              <div className="product-card">
                <div className="product-image">
                  <img
                    src={products[currentProductIndex].image}
                    alt={products[currentProductIndex].title}
                    className="product-img"
                  />
                  <div className="product-overlay">
                    <a
                      href={products[currentProductIndex].paymentUrl}
                      className="btn-custom"
                      style={{
                        fontSize: "16px",
                        padding: "12px 30px",
                        textDecoration: "none",
                        display: "inline-block",
                      }}
                    >
                      התקשרו לקבלת הצעת מחיר
                    </a>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="text-xl font-bold mb-2">
                    {products[currentProductIndex].title}
                  </h3>
                  <p className="text-sm opacity-80 mb-3">
                    {products[currentProductIndex].description}
                  </p>
                  <div className="text-2xl font-bold text-center">
                    {products[currentProductIndex].price}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* נקודות ניווט */}
          <div className="carousel-dots">
            {products.map((_, index) => (
              <button
                key={index}
                className={`dot ${
                  index === currentProductIndex ? "active" : ""
                }`}
                onClick={() => goToProduct(index)}
                aria-label={`עבור למוצר ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* FAQ קצר + הבטחת אבטחה */}
        <details className="rounded-lg border p-4 mt-8">
          <summary className="cursor-pointer font-medium">איך זה עובד?</summary>
          <ol className="list-decimal ms-5 mt-2 space-y-1">
            <li>בוחרים שירות מהגלריה ולוחצים על "התקשרו לקבלת הצעת מחיר".</li>
            <li>מתקשרים לטלפון 0522435115 לקבלת ייעוץ מקצועי.</li>
            <li>נקבע פגישה לביקור באתר עם הדמיה תלת ממדית.</li>
            <li>מקבלים הצעת מחיר מפורטת ומקצועית.</li>
            <li>מבצעים את ההתקנה בצורה מקצועית ונקייה.</li>
          </ol>
        </details>
      </div>
    </>
  );
};
