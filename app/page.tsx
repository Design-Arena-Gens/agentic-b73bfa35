"use client";

export default function Home() {
  return (
    <main className="page">
      <div className="poster">
        <div className="poster__background">
          <div className="poster__overlay poster__overlay--glow" />
          <div className="poster__overlay poster__overlay--pattern" />
        </div>

        <header className="poster__header">
          <div className="poster__brand">
            <div className="poster__logo">﷽</div>
            <span className="poster__handle">@YourInstaID</span>
          </div>
        </header>

        <div className="poster__content">
          <div className="poster__question-frame">
            <span className="poster__question-label">سؤال</span>
            <h1 className="poster__question">
              How should a believer cultivate gratitude in daily prayers?
            </h1>
          </div>

          <div className="poster__mufti">
            <span className="poster__mufti-label">Answer by</span>
            <span className="poster__mufti-name">Mufti Ahmad Kareem</span>
          </div>
        </div>

        <footer className="poster__footer">
          <div className="poster__footer-note">
            Update the question and scholar details before each reel.
          </div>
        </footer>
      </div>
    </main>
  );
}
