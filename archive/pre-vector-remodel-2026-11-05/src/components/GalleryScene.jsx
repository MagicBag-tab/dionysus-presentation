import React from 'react';

// A self-contained room: it cannot inherit the old image-layer overrides.
export default function GalleryScene({ parallax }) {
  const move = (depth) => ({ transform: `translate3d(${parallax.x * depth}px, ${parallax.y * depth * .35}px, 0)` });
  return <div className="museum-scene" aria-hidden="true">
    <div className="museum-room museum-plane" style={move(5)}>
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="museum-wall" x2="1" y2=".3"><stop stopColor="#241b29"/><stop offset=".48" stopColor="#332631"/><stop offset="1" stopColor="#70584c"/></linearGradient>
          <linearGradient id="museum-stone"><stop stopColor="#403437"/><stop offset=".2" stopColor="#ad9778"/><stop offset=".45" stopColor="#786354"/><stop offset="1" stopColor="#352b2d"/></linearGradient>
          <linearGradient id="museum-floor" x2="0" y2="1"><stop stopColor="#47363b"/><stop offset="1" stopColor="#19151f"/></linearGradient>
          <radialGradient id="museum-glow"><stop stopColor="#c5a16b" stopOpacity=".26"/><stop offset="1" stopColor="#c5a16b" stopOpacity="0"/></radialGradient>
          <linearGradient id="museum-shadow" x2="1" y2="0"><stop stopColor="#100d18"/><stop offset="1" stopColor="#423237"/></linearGradient>
          <pattern id="museum-grain" width="180" height="180" patternUnits="userSpaceOnUse"><path d="M0 160L70 95 100 100 180 10M38 0l30 50-10 22M90 180l40-70 50-30" fill="none" stroke="#e3c99b" strokeOpacity=".025" strokeWidth="1"/></pattern>
        </defs>
        <rect width="1600" height="900" fill="url(#museum-wall)"/>
        {/* The end wall and receding wall establish a common vanishing point. */}
        <path d="M880 0L1600 0 1600 900 1190 657 880 657Z" fill="#675145" opacity=".38"/>
        <path d="M0 0H880V657H0Z" fill="url(#museum-wall)"/>
        <path d="M880 0V657L1600 900" fill="none" stroke="#d9b47a" strokeOpacity=".17" strokeWidth="2"/>
        <path d="M0 657H1190L1600 900H0Z" fill="url(#museum-floor)"/>
        <path d="M0 657H1190L1600 900M0 714H1286M0 798H1429M0 894H1590M1000 657L0 900M1070 657L500 900M1125 657L940 900M1160 657L1350 900" fill="none" stroke="#c5ab83" strokeOpacity=".13" strokeWidth="1"/>
        <path d="M0 643H880L1600 847" fill="none" stroke="#ad8b64" strokeWidth="12" opacity=".3"/>
        <path d="M0 636H880L1600 840M0 650H880L1600 854" fill="none" stroke="#b99b70" strokeWidth="1" opacity=".35"/>
        {/* Small apertures at the far end, then a nearer opening on the side wall. */}
        {[{x:915,y:275,w:98,h:345},{x:1057,y:211,w:151,h:442},{x:1280,y:92,w:249,h:652}].map((a,i)=><g key={a.x}>
          <path d={`M${a.x} ${a.y+a.h}V${a.y+a.w/2}a${a.w/2} ${a.w/2} 0 0 1 ${a.w} 0V${a.y+a.h}Z`} fill="url(#museum-shadow)" stroke="url(#museum-stone)" strokeWidth={12+i*5}/>
          <path d={`M${a.x+13} ${a.y+a.h}V${a.y+a.w/2}a${a.w/2-13} ${a.w/2-13} 0 0 1 ${a.w-26} 0V${a.y+a.h}`} fill="none" stroke="#c8ad83" strokeOpacity=".18"/>
          <ellipse cx={a.x+a.w*.55} cy={a.y+a.h*.74} rx={a.w*.55} ry={a.h*.42} fill="url(#museum-glow)"/>
          {i<2&&<g fill="#c9b797" opacity={.38+i*.06}>
            <ellipse cx={a.x+a.w*.51} cy={a.y+a.h*.54} rx={a.w*.09} ry={a.w*.12}/>
            <path d={`M${a.x+a.w*.35} ${a.y+a.h*.69}q0 ${-a.h*.15} ${a.w*.16} ${-a.h*.13}q${a.w*.19} 0 ${a.w*.18} ${a.h*.13}Z`}/>
            <rect x={a.x+a.w*.32} y={a.y+a.h*.7} width={a.w*.38} height={a.h*.24} fill="#706257"/>
            <rect x={a.x+a.w*.28} y={a.y+a.h*.69} width={a.w*.46} height="5"/>
          </g>}
        </g>)}
        <path d="M880 82L1600 6M880 103L1600 39" stroke="#d3b88f" strokeOpacity=".16" strokeWidth="2"/>
        <ellipse cx="1200" cy="270" rx="430" ry="400" fill="url(#museum-glow)"/>
        <rect width="1600" height="900" fill="url(#museum-grain)"/>
      </svg>
    </div>
    <div className="museum-exhibit museum-plane" style={move(15)}>
      <div className="museum-contact-shadow"/>
      <svg className="museum-bust" viewBox="749 0 923 941" role="presentation">
        <image href="/assets/characters/dionysus/hero_dionysus_bust.png" width="1672" height="941"/>
      </svg>
      <div className="museum-plinth"><div className="museum-plinth-top"/><div className="museum-plinth-face"/><div className="museum-plinth-side"/><div className="museum-plinth-foot"/></div>
    </div>
    <div className="museum-near-column museum-plane" style={move(29)}><span/></div>
    <div className="museum-vignette"/>
  </div>;
}
