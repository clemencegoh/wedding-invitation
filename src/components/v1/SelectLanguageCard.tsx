import React from "react";

export interface Props {
  baseUrl: string;
  chooseLang: (lang: string) => void;
}

export default function SelectLanguageCard({
  baseUrl,
  chooseLang,
}: Props): React.ReactElement {
  return (
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
  );
}
