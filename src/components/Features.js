import snappy from "../images/icon-snappy-process.svg";
import afford from "../images/icon-affordable-prices.svg";
import people from "../images/icon-people-first.svg";

export default function Features() {
  return (
    <>
      <section className="features">
        <div className="features__separator"></div>
        <h2 className="features__headline">We’re different</h2>
        <div className="features__item">
          <div className="features__item--icon">
            <img
              src={snappy}
              alt="Lightning"
              className="features__item--icon-img"
            />
          </div>
          <h4 className="features__item--headline">Snappy Process</h4>
          <p className="features__item--text">
            Our application process can be completed in minutes, not hours.
            Don’t get stuck filling in tedious forms.
          </p>
        </div>
        <div className="features__item">
          <div className="features__item--icon">
            <img
              src={afford}
              alt="Lightning"
              className="features__item--icon-img"
            />
          </div>
          <h4 className="features__item--headline">Affordable Prices</h4>
          <p className="features__item--text">
            We don’t want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </p>
        </div>
        <div className="features__item">
          <div className="features__item--icon">
            <img
              src={people}
              alt="Lightning"
              className="features__item--icon-img"
            />
          </div>
          <h4 className="features__item--headline">People First</h4>
          <p className="features__item--text">
            Our plans aren’t full of conditions and clauses to prevent payouts.
            We make sure you’re covered when you need it.
          </p>
        </div>
      </section>
    </>
  );
}
