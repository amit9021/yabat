import { useState, useEffect } from "react";

export const Testimonials = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "יעקב איש מקצועי מאוד, שביצע אצלי עבודת התקנה של מערכת מיזוג VRF ל6 חדרים. סוכם איתו על עלות מסוימת ולמרות שהיו עניינים בדרך שהצריכו תשלום נוסף, לא גבה זאת, ועמד במילה שלו. עד היום עברו 5 חודשים בערך מההתקנה והכל עובד מעולה. כן יירבו אנשי מקצוע כאלו.",
      name: "משה פתאל - קריית אונו",
    },
    {
      text: "יעקב התקין אצלי בבית מערכת VRF של תדיראן. עשה עבודה מעולה מקצועי מאוד בעל ניסיון עשיר בנאדם אמין מסביר כל דבר ובעל מקצוע מאוד נעים. כמובן שבחרתי ביעקב לאחר שעשיתי סקר שוק והמחיר שלו היה הכי נמוך ביחס להשוואה לאחרים. מאוד ממליץ עליו בנאדם טוב עם עבודה מקצועית ויסודית.",
      name: "ניר מרטשיני - קריית אונו",
    },
    {
      text: "יעקב בן אדם, הגון, אדיב וסופר מקצועי. הרכיב אצלי מזגן VRF של תדיראן 5 יחידות. + יחידת wifi לשליטה על כל מזגן. עבודה סופר מקצועית ושירות מעולה! ממליץ בחום.",
      name: "דויד בראל - אשדוד",
    },
    {
      text: "יעקב אחד מבעלי המקצוע שאני הכי ממליץ עליהם, הוא התקין לי מזגן VRF של סמסונג ל 6 חדרים, להבדיל מהרבה בעלי מקצוע היום שמביאים לך עובדים לא מקצועיים שאספו מהדרך, הוא מגיע לעשות את כל ההתקנה, בנאדם סופר מקצועי!! אכפתי! עבודה ברמה מאוד גבוהה!! ממליץ!!",
      name: "ניר יוסף - יבנה הירוקה",
    },
    {
      text: "דיוק, יושרה, הבנת צרכי הלקוח. בהחלט מומלץ ואמין ולא פחות חשוב עובד לפי הספר.",
      name: "שלומי שבת - אשדוד",
    },
    {
      text: "עבודה נקיה ויסודית. מקצועי באמת. מומלץ",
      name: "נורברטו - גן יבנה",
    },
    {
      text: "היי יעקב היקר שלום. דע לך שכל הידע המטורף שלי במערכות מיזוג הוא רק משיחותיי איתך. כשהגעתי מול בעלי מקצוע ידעתי בד... המחירים של יעקב גלויים באתר שלו, ככה שהכל שקוף מבחינה הזו. בחרנו בו בגלל הביקורות הטובות והמחיר ההוגן שהוא הציע לנו.",
      name: "דורון כהן - לוד",
    },
    {
      text: "נתקלתי בבעיה עם המזגן...ככה זה תמיד מתחיל, ואז רצים לחפש המלצות לטכנאי אמין והגיוני במחיר. אז התגלגלתי ליעקב, אחרי המלצות רבות מחברים, ולא התאכזבתי. שמע את הבעיה, חשב, נתן עצה בטלפון... ניסיתי, חזרתי אליו עם שאלות המשך, נתן עצה נוספת...וזהו. ניסיתי, הבעיה נפתרה...זו בעיה שדורשת ידע ויכולת להתעסק עם מתח גבוה, ארון חשמל ושאר ירקות.",
      name: "אריאל - מודיעין",
    },
    {
      text: "I had a great experience with YABAT AC! They installed my air conditioning system quickly and professionally. The work was neat, and everything functions perfectly. Highly recommend!",
      name: "Dima",
    },
    {
      text: "מחפשים איש מקצוע אמין, מסור ומדויק – יעקב בן טובים הוא הכתובת. מקצועיות ללא פשרות, הקפדה על כל פרט, שירות אנושי ואכפתי – כל אלו מורגשים בכל שלב בעבודה איתו. יעקב לא רק מתקין מזגנים, הוא מקשיב, מבין את הצרכים שלכם ודואג לתוצאה מושלמת שמתאימה בדיוק לכם.",
      name: "עידו - אשקלון",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>ביקורות של לקוחות</h2>
          <p>נילקחו מהדף העסקי שלנו בגוגל</p>
        </div>
        <div className="testimonials-container">
          <div className="testimonial-slider">
            <button
              className="testimonial-nav prev"
              onClick={prevTestimonial}
              aria-label="ביקורת קודמת"
            >
              ‹
            </button>

            <div className="testimonial-content">
              <div className="testimonial-text">
                <p>"{testimonials[currentIndex].text}"</p>
              </div>
              <div className="testimonial-meta">
                <strong>{testimonials[currentIndex].name}</strong>
              </div>
            </div>

            <button
              className="testimonial-nav next"
              onClick={nextTestimonial}
              aria-label="ביקורת הבאה"
            >
              ›
            </button>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`עבור לביקורת ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
