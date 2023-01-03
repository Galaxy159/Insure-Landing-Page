import heroDesk from "../images/image-intro-desktop.jpg";
import heroMob from "../images/image-intro-mobile.jpg";
import bgLeftDesk from "../images/bg-pattern-intro-left-desktop.svg";
import bgLeftMob from "../images/bg-pattern-intro-left-mobile.svg";
import bgRightDesk from "../images/bg-pattern-intro-right-desktop.svg";
import bgRightMob from "../images/bg-pattern-intro-right-mobile.svg";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <div className="hero__hero">
            <picture>
              <source srcSet={heroDesk} media="(min-width: 768px)" />
              <img
                src={heroMob}
                alt="Family holding hands while walking"
                className="hero__hero--img"
              />
            </picture>
          </div>
          <div className="hero__content">
            <h1 className="hero__content--headline">
              Humanizing your insurance.
            </h1>
            <p className="hero__content--text">
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that’s right
              for you. Ensure you and your loved ones are protected.
            </p>
            <button className="hero__content--btn">VIEW PLANS</button>
          </div>
        </div>
        <div className="hero__bg-patterns">
          <picture>
            <source srcSet={bgRightDesk} media="(min-width: 768px)" />
            <img
              src={bgRightMob}
              alt="Background pattern"
              className="hero__bg-patterns--right"
            />
          </picture>
          <picture>
            <source srcSet={bgLeftDesk} media="(min-width: 768px)" />
            <img
              src={bgLeftMob}
              alt="Background pattern"
              className="hero__bg-patterns--left"
            />
          </picture>
        </div>
      </section>
    </>
  );
}
