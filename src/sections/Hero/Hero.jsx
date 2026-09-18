import { FaLocationDot } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { MdFileDownload } from "react-icons/md";

export function Hero({ profile, theme }) {
  const { hero, assets } = profile;

  return (
    <section
      className="hero container"
      id="hero"
      tabIndex={-1}
      aria-labelledby="hero-title"
    >
      <div className="hero-copy">
        <p className="hero-location ui">
          <FaLocationDot className="icon" /> {profile.location}
        </p>

        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-introduction">{hero.introduction}</p>
        <p className="hero-secondary">{hero.secondary}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            {hero.projects}
            <GoArrowUpRight className="icon-negative" />
          </a>
          <a
            className="button"
            href={assets.cv}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={hero.cvLabel}
          >
            {hero.cv}
            <MdFileDownload className="icon" />
          </a>
          <a className="hero-contact" href="#contact">
            {hero.contact}
          </a>
        </div>
      </div>
      <div className="hero-art">
        <img
          src={assets.hero[theme]}
          alt={hero.imageAlt[theme]}
          width="1536"
          height="1024"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}
