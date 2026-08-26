import { ArrowUpRight, ChevronDown, LocateFixed, Pause, Play, Radio, ShieldCheck, Sparkles, Volume2, VolumeX, Waypoints, WifiOff, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/** Transit Noir page: asymmetry, sodium-saffron signals, editorial type, and route-trace motion. */
const APP_URL = import.meta.env.VITE_APP_URL || "https://drive.google.com/drive/folders/1o_C8v3dERBYKLYMYiRcNxbtCPt1T5Vaj?usp=sharing";

const signals = [
  { label: "LIVE BUS", value: "S12", detail: "Newtown → Howrah", tone: "saffron" },
  { label: "ARRIVING IN", value: "07 min", detail: "2.1 km away", tone: "mint" },
  { label: "CROWD", value: "LOW", detail: "Seats likely available", tone: "blue" },
];

const features = [
  { icon: LocateFixed, eyebrow: "01 / Observe", title: "See the commute as it unfolds.", copy: "Live positions, next stops, and rider signals give you a clear picture before you step out." },
  { icon: Sparkles, eyebrow: "02 / Understand", title: "Predictions with context.", copy: "YatriGo reads movement, history, traffic, and crowd patterns to make ETAs feel dependable." },
  { icon: Waypoints, eyebrow: "03 / Decide", title: "Take the route that fits today.", copy: "Compare time, crowd, walking distance, and transfers — then move with confidence." },
];

function goToApp() {
  window.open(APP_URL, "_blank", "noopener,noreferrer");
}

export default function Home() {
  const [noticeOpen, setNoticeOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const filmRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const film = filmRef.current;
    const video = videoRef.current;
    if (!film || !video) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        void video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }, { threshold: 0.42 });
    observer.observe(film);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play().then(() => setIsPlaying(true));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
    if (!video.muted) void video.play().then(() => setIsPlaying(true));
  };

  return (
    <main className="site-shell">
      <section className="hero" id="top">
        <div className="hero-backdrop" />
        <div className="grain" />
        <header className="nav-wrap">
          <a className="brand" href="#top" aria-label="YatriGo home">
            <span className="brand-mark"><img src="https://d36hbw14aib5lz.cloudfront.net/310519663829663503/GuiLPhYvDs65RZsuFekEsC/yatrigo-mark_70dd0f9a.png?Expires=1787776280&Signature=tiPJi5qYncWRQWtseANDCloMWPtHfiGItQc1hHH2lI2Bl~D83bTERQGdcZA8tOKbJV1aJYYHhCADNJZMudQZrv6od4ddO60YxCMlxghKV6eIEjPphP9cN~skYOeDUAI5T8CYdm09KObgDDB8yt5NlmMxpNx7thcXwqFAUkDzMOPRFcFG6jS0dGjYGd71Aq94hu8JKluaGOl3aUchfbFbvA5y7pHPQkjQl4ii6MG6HMMymQDUocHBxi-5y~ZgBwSHuAKNYgeJzWoT5XwPcfuZnxy7SXGzFXOvSAGSKecHFuGphRPoJcgsNplSml1iOZV8z7t-v8HGBXqXRvLf0zkfug__&Key-Pair-Id=K1MP89RTKNH4J" alt="" /></span>
            <span className="brand-name">Yatri<span>Go</span></span>
          </a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#intelligence">Intelligence</a>
            <a href="#how-it-works">How it works</a>
            <a href="#city">The first city</a>
          </nav>
          <button className="nav-cta" onClick={goToApp}>Go to the app <ArrowUpRight size={16} /></button>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="live-dot" /> Kolkata / live transit intelligence</div>
            <h1>Know the city<br /><em>before it moves.</em></h1>
            <p className="hero-lede">YatriGo turns everyday journeys into a live, shared picture — so you can see your bus, read the crowd, and choose what comes next.</p>
            <div className="hero-actions">
              <button className="primary-cta" onClick={goToApp}>Open YatriGo <ArrowUpRight size={18} /></button>
              <a className="text-link" href="#intelligence">See how it works <ChevronDown size={15} /></a>
            </div>
            <div className="hero-footnote"><Radio size={14} /> Built for the moving city · Kolkata-first MVP</div>
          </div>

          <div className="hero-panel" aria-label="Live YatriGo transit preview">
            <div className="panel-top"><span>YATRIGO / NOW</span><span className="panel-status"><span className="live-dot" /> receiving signals</span></div>
            <div className="mini-map">
              <div className="map-grid" />
              <svg className="route-svg" viewBox="0 0 500 330" fill="none" aria-hidden="true">
                <path className="route-main" d="M-20 230 C 75 230 75 118 160 132 S 260 258 336 195 S 410 88 520 103" />
                <path className="route-ghost" d="M20 60 C 105 80 118 218 220 216 S 350 62 510 48" />
              </svg>
              <span className="map-label label-one">Salt Lake</span><span className="map-label label-two">Park Street</span><span className="map-label label-three">Howrah</span>
              <span className="route-node node-one" /><span className="route-node node-two" /><span className="bus-ping"><span className="bus-core">S12</span></span>
              <div className="map-legend"><span><i className="legend-line saffron" /> live route</span><span><i className="legend-dot" /> your signal</span></div>
            </div>
            <div className="signal-list">{signals.map((signal) => <div className="signal-row" key={signal.label}><div><span className="signal-label">{signal.label}</span><strong>{signal.value}</strong></div><span className={`signal-detail ${signal.tone}`}>{signal.detail}</span></div>)}</div>
            <div className="panel-footer"><span>last sync 08:42:16</span><span>24 riders contributing</span></div>
          </div>
        </div>
        <div className="scroll-cue"><span>scroll to move with the city</span><span className="scroll-line" /></div>
      </section>

      <section className="ticker" aria-label="YatriGo product promise"><div className="ticker-track"><span>LIVE ROUTES</span><i>·</i><span>CROWD SIGNALS</span><i>·</i><span>SMARTER ETAs</span><i>·</i><span>SAFER JOURNEYS</span><i>·</i><span>LIVE ROUTES</span><i>·</i><span>CROWD SIGNALS</span></div></section>

      <section className="story-section" id="intelligence">
        <div className="section-kicker"><span>01</span><span className="rule" /><span>THE INTELLIGENCE LAYER</span></div>
        <div className="story-grid"><h2>Not another bus app.<br /><em>A better read on the city.</em></h2><div className="story-copy"><p>Most transit tools tell you what should happen. YatriGo listens to what is happening now — combining GPS, passenger reports, and route intelligence into one living signal.</p><p className="muted">More people moving with YatriGo means a clearer picture for everyone.</p><a className="arrow-link" href="#how-it-works">Follow the signal <ArrowUpRight size={16} /></a></div></div>
        <div className="feature-list">{features.map(({ icon: Icon, eyebrow, title, copy }) => <article className="feature-card" key={eyebrow}><div className="feature-icon"><Icon size={20} strokeWidth={1.5} /></div><span className="feature-eyebrow">{eyebrow}</span><h3>{title}</h3><p>{copy}</p><span className="card-arrow"><ArrowUpRight size={17} /></span></article>)}</div>
      </section>

      <section className="image-break" id="how-it-works"><div className="image-break-bg" /><div className="image-break-content"><span className="eyebrow">A city that shares its signal</span><h2>Your next bus is already telling us where it is.</h2><button className="outline-cta" onClick={goToApp}>Read the live network <ArrowUpRight size={17} /></button></div><div className="image-caption">01 — A moving network / Kolkata</div></section>

      <section className="principles-section" id="city">
        <div className="section-kicker"><span>02</span><span className="rule" /><span>MADE FOR THE EVERYDAY</span></div>
        <div className="principles-head"><h2>Less waiting.<br /><em>More knowing.</em></h2><p>From a crowded stop in Salt Lake to a late connection across the river, YatriGo keeps the useful details close and the uncertainty moving.</p></div>
        <div className="principle-grid"><div className="principle-card card-photo card-safety"><img src="https://d36hbw14aib5lz.cloudfront.net/310519663829663503/GuiLPhYvDs65RZsuFekEsC/yatrigo-safety-card-search_b52bde48.jpg?Expires=1787764302&Signature=i~sGL5dFFw8Y~NMV6ngKckaDHRzEfal2p372FiVdyFoI~WE5sy0212ny867OjZZR9MxYmo~CEpUBUTAmfMo3G5py8c0CDfeES80aQIR3KNTu~Vgq2sqJPUVnmiZgQ904PjKxTJl4vB-4k1zZotcy~hVhMASFc9JUXgVp-f5hN3xiBuIQ0JmwidCcdMLD0t5I4fyjqSpAZwuPBIvP6RljwEAHCrVQw1vv2~bfMCkZnT0g-ciJMHC0DnwbUt-qKPyjb43tEdAZ2mPbO1AJUo4e~GMaaB45~DX5q~nix-~VNKxgMQMublBvLUZJKrRS2xoQ-cunOD3gM4JqZNHekm4mrg__&Key-Pair-Id=K1MP89RTKNH4J" alt="A commuter walking safely from a city bus toward a lit station entrance" /><div className="card-photo-overlay" /><div className="card-photo-copy"><ShieldCheck size={22} /><span>SAFETY SHIELD</span><h3>Move with a little more certainty.</h3><p>Smart stop alerts and planned safety tools for solo journeys and late connections.</p></div></div><div className="principle-card card-image"><img src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=82" alt="An abstract network of city routes at night" /><div><span>OFFLINE-FIRST</span><h3>The signal stays with you.</h3></div></div><div className="principle-card card-photo"><img src="https://d36hbw14aib5lz.cloudfront.net/310519663829663503/GuiLPhYvDs65RZsuFekEsC/yatrigo-offline-card_0b559700.png?Expires=1787764474&Signature=hsh71GUlWfJlGY8SHRhYYBhQw-6eBOx7htvuyo3uFsJMJmJLE5M3F2rlYfirj-UIuEM90xHaUBCXiN1ZFuBuA~fOB6e2efsV6WcSC0c2mbB-PKblFSQ6Yr076NfO2GLVmZ9mTkaK5BiRVYMFuGMzAFXAYk24jEfD6xXOg6zdP9AfemYZlsbmFI59xqKOoPwJ94Oaic2Biy0BIAjZWwE1jKwZhx9bYNjpQyzllXThlcEXyo1KTWkSWH7IQJZ-NJgBBjkHI4j5t06ZX3PAYo6K2EsSKxSIWXlSJ7eLyLTcIv7bds2FCv~ROehbRLwC3IyJp77n~w1pdjCYKNLAW6qOMg__&Key-Pair-Id=K1MP89RTKNH4J" alt="A commuter waiting beside a city bus stop after rain" /><div className="card-photo-overlay" /><div className="card-photo-copy"><WifiOff size={22} /><span>LOW DATA / HIGH CLARITY</span><h3>Useful, even between signals.</h3><p>Cached routes, stops, and last-known data keep the journey legible when the network is not.</p></div></div></div>
      </section>

      <section className="film-section" id="film" ref={filmRef}>
        <video className="film-video" ref={videoRef} src="/yatrigo-promo-h264.mp4" poster="/manus-storage/yatrigo-film-poster_a7d6d438.jpg" autoPlay muted={isMuted} playsInline preload="metadata" aria-label="YatriGo product film" />
        <div className="film-shade" />
        <div className="film-content"><span className="eyebrow"><span className="live-dot" /> The YatriGo film / 00:54</span><h2>A clearer way<br /><em>to move.</em></h2><p>From the rush of the stop to the calm of the route ahead.</p></div>
        <div className="film-controls"><button className="film-control" onClick={togglePlay} aria-label={isPlaying ? "Pause film" : "Play film"}>{isPlaying ? <Pause size={16} /> : <Play size={16} />}<span>{isPlaying ? "Pause" : "Play"}</span></button><button className="film-control" onClick={toggleSound} aria-label={isMuted ? "Play film with sound" : "Mute film"}>{isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}<span>{isMuted ? "Play with sound" : "Mute"}</span></button></div>
        <div className="film-caption">02 — Observe / understand / decide</div>
      </section>

      <section className="closing-section"><div className="closing-orbit orbit-one" /><div className="closing-orbit orbit-two" /><div className="closing-content"><span className="eyebrow"><span className="live-dot" /> Now entering: the next commute</span><h2>Make the city<br /><em>legible.</em></h2><p>YatriGo is starting in Kolkata. The signal is designed to travel.</p><button className="primary-cta" onClick={goToApp}>Go to the app <ArrowUpRight size={18} /></button></div></section>

      <footer className="footer"><a className="brand" href="#top"><span className="brand-mark small"><img src="https://d36hbw14aib5lz.cloudfront.net/310519663829663503/GuiLPhYvDs65RZsuFekEsC/yatrigo-mark_70dd0f9a.png?Expires=1787776280&Signature=tiPJi5qYncWRQWtseANDCloMWPtHfiGItQc1hHH2lI2Bl~D83bTERQGdcZA8tOKbJV1aJYYHhCADNJZMudQZrv6od4ddO60YxCMlxghKV6eIEjPphP9cN~skYOeDUAI5T8CYdm09KObgDDB8yt5NlmMxpNx7thcXwqFAUkDzMOPRFcFG6jS0dGjYGd71Aq94hu8JKluaGOl3aUchfbFbvA5y7pHPQkjQl4ii6MG6HMMymQDUocHBxi-5y~ZgBwSHuAKNYgeJzWoT5XwPcfuZnxy7SXGzFXOvSAGSKecHFuGphRPoJcgsNplSml1iOZV8z7t-v8HGBXqXRvLf0zkfug__&Key-Pair-Id=K1MP89RTKNH4J" alt="" /></span><span className="brand-name">Yatri<span>Go</span></span></a><span>Team TRINETRA · HyperFusion 2026</span><span>© 2026 YatriGo</span><button className="footer-note" onClick={() => setNoticeOpen(true)}>About the MVP <ArrowUpRight size={14} /></button></footer>
      {noticeOpen && <div className="notice-backdrop" role="dialog" aria-modal="true" aria-label="About the MVP"><div className="notice-card"><button className="notice-close" onClick={() => setNoticeOpen(false)} aria-label="Close"><X size={18} /></button><span className="eyebrow">A note on the current build</span><h3>Built to be honest about the road ahead.</h3><p>YatriGo is a functional Kolkata-first MVP. Live reports and estimates work today; predictive AI, verified coordinates, persistent storage, and the Safety Shield are part of the planned platform direction.</p><button className="outline-cta" onClick={() => setNoticeOpen(false)}>Close note</button></div></div>}
    </main>
  );
}
