import { baseUrl } from "../constants";
import React, { useState } from "react";

export default function ReactiveCard() {
  const [lang, setLang] = useState("eng");
  const [showStart, setShowStart] = useState(true);

  const chooseLang = (lang: string) => {
    setLang(lang);
    setShowStart(false);
  };

  const header: React.ReactElement = (
    <header className="navbar">
      <div id="nav-title" className="nav-title">
        <img src={`${baseUrl}/images/wedding-fav.png`} alt="favicon logo" />
        <h4 lang={lang} className="header-text">
          {lang === "eng" ? "Clemence & Zhi Min" : "智权和智敏"}
        </h4>
      </div>

      <div id="nav-actions" className="nav-actions">
        {/* <ul>
          <li className="nav-link">{lang === "eng" ? "Photos" : "照片库"}</li>
        </ul> */}
        {/* <button className="rsvp-cta">RSVP</button> */}
      </div>
    </header>
  );

  const languageCard = (
    <React.Fragment key={"wrapper-fragment"}>
      {header}
      <section className="content-block">
        <article className="wrapper-card">
          <img
            src={`${baseUrl}/images/select-lang-avatar.png`}
            alt="select language"
          />
          <span></span>
          <div className="card">
            <div>
              <h3 className="select-lang-title">
                <span className="top-break">Select Language</span>
                <span>/ 选择语言：</span>
              </h3>
              <div className="lang-buttons">
                <button onClick={() => chooseLang("eng")}>English</button>
                <span className="divider"></span>
                <button onClick={() => chooseLang("chi")}>中文</button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </React.Fragment>
  );

  /**
   * Language card
   */
  if (showStart) {
    return languageCard;
  }

  const engContent = (
    <div className="invitation-card">
      <h1>Wedding of</h1>
      <h2>Clemence and Zhi Min</h2>
      <h3>8 Oct 2022</h3>
      <h3>7pm</h3>

      <h4>Hilton Singapore Orchard</h4>
      <h5>581 Orchard Rd, Singapore 238883</h5>

      <div>
        <button className="rsvp-cta">RSVP Here</button>
      </div>
    </div>
  );

  const chineseContent = (
    <div className="invitation-card" data-lang={lang}>
      <h1>吴智权 和 梁智敏</h1>
      <h3>谨订于</h3>
      <h3>公历 2022 年 10 月 08 日</h3>
      <h3>举行结婚喜宴</h3>

      <h4>Hilton Singapore Orchard</h4>
      <h4>581 Orchard Rd, Singapore 238883</h4>

      <div className="p-block">
        <p>中午七时晋席</p>
        <p>您的光临将是</p>
        <p>我们最大的荣幸</p>
      </div>

      <div>
        <button className="rsvp-cta">登记出席</button>
      </div>
    </div>
  );

  // Invitation card
  return (
    <React.Fragment key={"wrapper-fragment"}>
      {header}
      <section className="content-block" id="content-block">
        <article id="wrapper-card" className="wrapper-card">
          {lang === "eng" ? (
            <img
              src={`${baseUrl}/images/main-avatar.png`}
              alt="english avatar"
            />
          ) : (
            <img
              src={`${baseUrl}/images/main-avatar-chinese.png`}
              alt="chinese avatar"
            />
          )}
          <span></span>
          <div className="card">
            {lang === "eng" ? engContent : chineseContent}
          </div>
        </article>
        <div className="language-select">
          <button onClick={() => chooseLang("eng")}>English</button>
          <hr className="line-divider" />
          <button onClick={() => chooseLang("chi")}>中文</button>
        </div>
      </section>
    </React.Fragment>
  );
}
