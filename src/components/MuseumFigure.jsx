import React from 'react';

const crownCharacters = new Set(['hera', 'midas', 'lycurgus', 'pentheus']);
const longHairCharacters = new Set(['dionysus', 'ampelos', 'semele', 'hera', 'ariadne', 'nymph', 'maenad']);
const cloakColors = {
  apollo: '#b59a68',
  ariadne: '#81515a',
  dionysus: '#71394d',
  hera: '#8f7658',
  lycurgus: '#51464d',
  maenad: '#6f5347',
  midas: '#8d7141',
  nymph: '#59634b',
  pentheus: '#63505b',
  semele: '#817260',
  silenus: '#77665c',
  zeus: '#71615c'
};

export default function MuseumFigure({
  x = 0,
  y = 0,
  scale = 1,
  pose = 'still',
  character = 'dionysus',
  tone = 'url(#ex-stone)',
  child = false
}) {
  const mature = character === 'zeus' || character === 'silenus';
  const longHair = longHairCharacters.has(character);
  const hair = mature ? '#786d66' : character === 'apollo' ? '#b2935f' : '#55413b';
  const garment = cloakColors[character] || '#735966';
  const arms = pose === 'dance'
    ? 'M-21-91Q-48-101-63-135L-85-166M21-91Q44-104 62-129L83-157'
    : 'M-21-91Q-43-79-47-47L-43-17M21-91Q43-79 47-47L43-17';

  return <g transform={`translate(${x} ${y}) scale(${scale})`} data-character={character}>
    <path d="M-13-108v16q-22 8-29 31l-8 104q49 17 100 0L42-61q-8-23-29-31v-16Z" fill={tone} stroke="#e0cba6" strokeOpacity=".3" strokeWidth="2"/>
    <path d="M-26-97Q-48-81-49-54L-45-17M26-97Q48-81 49-54L45-17" fill="none" stroke="#d4c09c" strokeWidth="15" strokeLinecap="round"/>
    <path d={arms} fill="none" stroke="#c6b28f" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
    <path d={arms} fill="none" stroke={garment} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M-54-16q11-10 21 0M34-16q11-10 21 0" fill="#c6b28f" stroke="#ddc59b" strokeWidth="1.5"/>
    {character === 'dionysus' && pose === 'still' && <g strokeLinecap="round">
      <path d="M58-8L65-208" stroke="#9c7544" strokeWidth="5"/>
      <path d="M64-176Q38-199 45-216Q65-208 67-183M64-152Q89-180 88-197Q69-188 64-160M62-124Q39-145 39-163Q58-156 64-132" fill="#768053" stroke="#c1aa78" strokeWidth="2"/>
      <circle cx="64" cy="-183" r="6" fill="#7b3848" stroke="#c9aa75" strokeWidth="1.5"/>
      <circle cx="63" cy="-167" r="6" fill="#7b3848" stroke="#c9aa75" strokeWidth="1.5"/>
    </g>}
    <path d="M-30-63Q-5-51 2-23L-6 28M26-65Q8-38 16-17L8 37M-17-48Q-3-17-15 17" fill="none" stroke="#382b30" strokeOpacity=".4" strokeWidth="3"/>
    <path d="M-30-91Q-48-46-34 40Q-16 51 3 48L1-75Q-11-93-30-91Z" fill={garment} opacity=".82"/>
    <path d="M-8-77Q4-49 14-22L32 44Q14 53 0 48L-1-57Z" fill="#e1ceb0" opacity=".52"/>
    <path d="M-28-76Q-12-55-14-31T-27 21M-4-70Q7-43 4-14T-1 35M17-49Q29-22 26 6" fill="none" stroke="#f0ddba" strokeOpacity=".34" strokeWidth="2"/>
    <path d="M-31-54Q-12-44 4-50M-28-27Q-7-17 8-24M-27 1Q-7 12 4 5" fill="none" stroke="#33272f" strokeOpacity=".28" strokeWidth="2"/>
    <path d="M-30 41Q0 57 34 41L41 58Q18 70-39 60Z" fill={tone} stroke="#ddc59b" strokeOpacity=".28" strokeWidth="1.5"/>
    <path d="M-25 57l-8 15q13 6 25 0l5-12M22 57l8 15q-13 6-25 0l-5-12" fill="#d0bd9d" stroke="#e1cba5" strokeWidth="1.5"/>
    <path d="M-17-108v-19h34v20" fill="#cbbb9d" stroke="#dbc8a7" strokeWidth="2"/>

    <g transform={child ? 'translate(0 -22) scale(.84)' : undefined}>
      {longHair
        ? <path d="M-24-166Q-44-146-36-106L-28-81Q-20-94-17-111L-11-151ZM24-166Q44-146 36-106L28-81Q20-94 17-111L11-151Z" fill={hair} stroke="#d5c19d" strokeOpacity=".24" strokeWidth="2"/>
        : <path d="M-31-143Q-36-181 0-181Q36-181 31-143L25-158Q12-169 0-161Q-17-170-27-153Z" fill={hair} stroke="#d5c19d" strokeOpacity=".24" strokeWidth="2"/>}
      {(character === 'dionysus' || character === 'ampelos') && <g stroke="#c1aa78" strokeWidth="2.2" strokeLinejoin="round">
        <path d="M-29-163Q-15-180 0-170Q15-180 29-163" fill="none" stroke="#a78b59" strokeWidth="3"/>
        <path d="M-24-166Q-38-177-36-187Q-23-185-18-171ZM-13-171Q-26-187-19-195Q-7-186-7-172ZM0-172Q-10-190 0-199Q10-190 5-172ZM13-171Q26-187 19-195Q7-186 7-172ZM24-166Q38-177 36-187Q23-185 18-171Z" fill="#788152"/>
        <circle cx="-28" cy="-174" r="3" fill="#7b3848"/><circle cx="28" cy="-174" r="3" fill="#7b3848"/>
      </g>}
      {crownCharacters.has(character) && <path d="M-24-164L-22-178L-8-168L0-187L9-168L23-179L25-163Z" fill="#a88a50" stroke="#e0c27b" strokeWidth="2"/>}
      {character === 'hermes' && <path d="M-25-160L-38-177L-30-180L-14-167M25-160L38-177L30-180L14-167" fill="none" stroke="#c6a15b" strokeWidth="4" strokeLinecap="round"/>}
      <path d="M-20-151Q-21-173 0-174Q21-173 20-151L16-126Q10-111 0-110Q-12-112-17-128Z" fill="#d4c19e" stroke="#ead7b5" strokeOpacity=".55" strokeWidth="2"/>
      {mature && <path d="M-16-132Q-11-119 0-118Q11-119 16-132L13-105Q0-91-13-105Z" fill={hair} stroke="#d3bf9b" strokeOpacity=".35" strokeWidth="1.5"/>}
      {longHair && <path d="M-21-148Q-26-124-19-108M21-148Q26-124 19-108" fill="none" stroke={hair} strokeWidth="7" strokeLinecap="round"/>}
      {(character === 'dionysus' || character === 'ampelos') && <g fill="none" stroke={hair} strokeWidth="3.5" strokeLinecap="round">
        <path d="M-27-153Q-37-146-29-137Q-21-131-28-122M27-153Q37-146 29-137Q21-131 28-122"/>
        <path d="M-31-146Q-35-137-29-132M31-146Q35-137 29-132" stroke="#9b8063" strokeWidth="1.5"/>
      </g>}
      <path d="M-15-145q6-5 12 0M3-145q6-5 12 0" fill="none" stroke="#54453f" strokeWidth="2.7" strokeLinecap="round"/>
      <ellipse cx="-9" cy="-138" rx="3.1" ry="2" fill="#392f30"/>
      <ellipse cx="9" cy="-138" rx="3.1" ry="2" fill="#392f30"/>
      <path d="M0-136l-3 15 6 2M-6-111q6 4 12 0" fill="none" stroke="#8d7564" strokeWidth="2" strokeLinecap="round"/>
      {character === 'nietzsche' && <path d="M-12-117q5-7 12-2 7-5 13 2l-5 5-6-2-6 2Z" fill="#74645a" stroke="#d3c09d" strokeWidth="1"/>}
    </g>
  </g>;
}
