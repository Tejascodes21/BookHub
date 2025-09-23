import React from "react";
import { homeAboutStyles as s } from "../assets/dummystyles";
import HomeAboutImage from "../assets/HomeAboutImage.png";
import {hastats} from "../assets/dummydata";

const HomeAbout = () => {
  return (
    <div className={s.wrapper}>
      <div className="absolute inset-0 overflow-hidden">
        <div className={s.bgBlur1}></div>
        <div className={s.bgBlur2}></div>
      </div>

      <div className={s.container}>
        <div className={s.aboutGrid}>
          <div className={s.imageWrapper}>
            <div className={s.imageGlow}></div>
            <div className={s.imageContainer}>
              <img
                src={HomeAboutImage}
                alt="about image"
                className={s.aboutImage}
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className={s.aboutHeader}>Our Literary Journey</h2>
              <div className={s.underline}></div>
            </div>
            <p className={s.aboutText}>
              Founded with passion for literature, Bookshell has evolved into a
              sanctuary for book lovers. We curate exceptional reading
              experience, connecting readers with stories that inspire, educate
              and transport them to new world.
            </p>
            <div className={s.statGrid}>
                {hastats.map((stat, index) =>(
                    <div className={s.statcard} key={index}>
                        <div className={s.statIconwrap}>
                            <stat.icon className={s.statIcon}/>
                            </div>
                            <h3 className={s.statValue}>{stat.value}</h3>
                            <p className={s.statLabel}>{stat.label}</p>
                    </div>
                    ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
