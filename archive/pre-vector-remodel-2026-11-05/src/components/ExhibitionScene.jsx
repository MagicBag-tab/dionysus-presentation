import React from 'react';

// Native vector exhibits: editable, reusable, and independent of image-generation quotas.
export function ExhibitObject({ kind='vase', ...props }) {
  return <svg viewBox="0 0 160 180" fill="none" {...props}>
    <g stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
      {kind==='vine' && <><path d="M80 170Q30 110 96 55Q115 26 83 8M87 64Q123 39 145 58Q124 88 87 64M73 83Q30 48 12 81Q40 105 73 83M66 119Q109 98 132 123Q105 147 66 119" fill="currentColor" fillOpacity=".23"/>{[[78,67],[95,78],[62,81],[79,92],[98,97],[64,104],[83,117],[76,137]].map(([x,y])=><circle key={x+'-'+y} cx={x} cy={y} r="11" fill="currentColor" fillOpacity=".48"/>)}</>}
      {kind==='cup' && <><path d="M29 36H131L119 77Q111 107 80 110Q49 107 41 77Z" fill="currentColor" fillOpacity=".3"/><path d="M80 110V154M54 161H106M39 52H121M28 38Q6 30 14 64Q21 81 41 76M132 38Q154 30 146 64Q139 81 119 76"/><ellipse cx="80" cy="36" rx="51" ry="8" fill="currentColor" fillOpacity=".13"/></>}
      {kind==='thyrsus' && <><path d="M77 173L90 46" strokeWidth="5"/><path d="M89 48Q54 29 89 4Q122 27 89 48Z" fill="currentColor" fillOpacity=".45"/><path d="M76 60Q38 46 37 75Q61 81 76 60M89 82Q130 57 131 88Q111 106 89 82M85 55Q105 107 62 135"/><path d="M87 51Q112 92 98 122" strokeWidth="7" opacity=".35"/></>}
      {kind==='mask' && <><path d="M31 34Q80 7 129 34L119 105Q108 143 80 160Q52 143 41 105Z" fill="currentColor" fillOpacity=".23"/><path d="M43 65Q58 45 71 67M89 67Q105 45 119 65" strokeWidth="7"/><path d="M80 67L69 102H88M57 118Q80 138 104 118" strokeWidth="3"/><path d="M41 43Q80 20 119 43" opacity=".4"/></>}
      {kind==='panther' && <><path d="M23 101Q12 76 30 62L43 55L50 30L67 50Q103 43 124 68L142 73L143 94L125 101L121 147H105L100 107H65L59 148H42L40 105Z" fill="currentColor" fillOpacity=".26"/><path d="M126 78Q156 44 143 24M30 73L40 75M50 72L58 74M64 72L74 73M84 69L94 72M76 92L84 94"/></>}
      {kind==='lyre' && <><path d="M39 28Q20 94 56 129Q80 152 106 129Q140 94 121 28M39 28Q54 4 61 32M121 28Q106 4 99 32M40 45H120M57 130H106M62 45V130M74 45V138M87 45V138M100 45V130" strokeWidth="3"/><path d="M50 115Q80 127 112 115L104 137H59Z" fill="currentColor" fillOpacity=".4"/></>}
      {kind==='bolt' && <path d="M96 8L32 98H76L60 170L133 71H89Z" fill="currentColor" fillOpacity=".6"/>}
      {kind==='book' && <><path d="M18 34Q50 23 80 39Q109 23 142 34V146Q110 135 80 152Q50 135 18 146Z" fill="currentColor" fillOpacity=".2"/><path d="M80 39V152M32 57Q54 49 67 59M32 78Q54 70 67 80M32 99Q54 91 67 101M94 59Q112 49 129 57M94 80Q112 70 129 78M94 101Q112 91 129 99"/></>}
      {kind==='crown' && <><path d="M23 55L53 79L80 29L107 79L139 55L121 132H41Z" fill="currentColor" fillOpacity=".4"/><path d="M43 118H120M45 143H116"/><circle cx="80" cy="101" r="9"/></>}
      {kind==='ship' && <><path d="M12 119H149L121 152H42Z" fill="currentColor" fillOpacity=".4"/><path d="M80 25V121M82 33Q126 55 121 101H83Z" fill="currentColor" fillOpacity=".18"/><path d="M68 47L25 105H69ZM17 164Q36 151 55 164T93 164T131 164"/></>}
      {kind==='torch' && <><path d="M66 93H94L86 169H74Z" fill="currentColor" fillOpacity=".4"/><path d="M66 91Q34 66 79 12Q75 48 97 53Q113 72 94 91Z" fill="currentColor" fillOpacity=".35"/><path d="M79 86Q62 67 83 48Q84 70 92 76"/></>}
      {kind==='dolphin' && <path d="M13 111Q34 57 87 58L99 40L106 61Q131 66 144 88L124 83Q100 78 84 104L80 134L63 116Q38 104 13 111Z" fill="currentColor" fillOpacity=".4"/>}
      {kind==='bat' && <path d="M80 74L69 53L60 80Q28 48 7 43Q21 75 14 117Q41 98 60 122L80 147L100 122Q119 98 146 117Q139 75 153 43Q132 48 100 80L91 53Z" fill="currentColor" fillOpacity=".4"/>}
      {kind==='profile' && <><path d="M35 165V140Q45 122 64 119V103Q36 88 45 54Q48 22 80 17Q116 12 122 49L137 75L120 81L118 103L96 108V125L129 151V165Z" fill="currentColor" fillOpacity=".26"/><path d="M56 42Q72 25 99 38M107 57H119M110 91H119"/></>}
      {kind==='moon' && <><circle cx="80" cy="88" r="59" fill="currentColor" fillOpacity=".18"/><path d="M101 32Q56 55 69 96Q78 126 112 136Q51 154 26 104Q9 53 62 30" fill="currentColor" fillOpacity=".26"/></>}
      {kind==='balance' && <><path d="M80 20V148M38 158H122M19 54L141 44M31 55L12 104H52ZM129 47L109 96H149Z"/><path d="M12 104Q32 128 52 104M109 96Q129 120 149 96" fill="currentColor" fillOpacity=".4"/><circle cx="80" cy="49" r="7" fill="currentColor"/></>}
      {kind==='vase' && <><path d="M60 18H100L95 51Q132 68 125 110Q123 138 102 149L108 164H52L58 149Q37 138 35 110Q28 68 65 51Z" fill="currentColor" fillOpacity=".28"/><path d="M63 39H97M44 84H116M42 110H118M57 148H103M53 62Q11 45 19 96Q22 116 39 118M107 62Q149 45 141 96Q138 116 121 118"/></>}
    </g>
  </svg>;
}

function Figure({ x=0,y=0,scale=1,pose='still',tone='url(#ex-stone)' }) {
 return <g transform={`translate(${x} ${y}) scale(${scale})`} fill={tone} stroke="#dbc49b" strokeOpacity=".22" strokeWidth="1">
  <ellipse cx="0" cy="-130" rx="20" ry="25"/>
  <path d={pose==='dance'?'M-18-104Q-27-85-76-117L-80-108L-30-58L-49 59L3 72L26 40L16-53L78-85L73-97L18-104Z':'M-18-104Q-39-87-36-47L-30 32L-43 72H42L31 32L33-47Q37-89 18-104Z'}/>
  <path d="M-22-85L15 57M-11-91L28 52M-26-48L-4 65M3-83L-14 62" fill="none" stroke="#241a2e" strokeOpacity=".3"/>
 </g>;
}
function Plinth({x=0,y=0,w=160,h=90}){return <g transform={`translate(${x} ${y})`}><path d={`M${-w/2-9} 0H${w/2+9}L${w/2} 12H${-w/2}Z`} fill="url(#ex-stone)"/><rect x={-w/2} y="12" width={w} height={h} fill="url(#ex-stone)"/><rect x={-w/2+12} y="25" width={w-24} height={h-25} fill="none" stroke="#d9c096" strokeOpacity=".25"/><path d={`M${-w/2-10} ${h+12}H${w/2+10}V${h+22}H${-w/2-10}Z`} fill="#9a8464"/></g>}
function Arch({x=0,y=0,w=250,h=450}){return <g transform={`translate(${x} ${y})`}><path d={`M0 ${h}V${w/2}a${w/2} ${w/2} 0 0 1 ${w} 0V${h}`} fill="#191321" fillOpacity=".7" stroke="url(#ex-stone)" strokeWidth="18"/><path d={`M15 ${h}V${w/2}a${w/2-15} ${w/2-15} 0 0 1 ${w-30} 0V${h}`} fill="none" stroke="#bea06b" strokeOpacity=".23"/></g>}
function ObjectAt({kind,x,y,size=150,...props}){return <g transform={`translate(${x} ${y})`} {...props}><ExhibitObject kind={kind} x={-size/2} y={-size/2} width={size} height={size}/></g>}

function Theatre(){return <g transform="translate(460 470)">
 {[320,275,230,185,140].map((r,i)=><path key={r} d={`M${-r} ${-r*.38}A${r} ${r*.65} 0 0 0 ${r} ${-r*.38}L${r-24} ${-r*.38-4}A${r-24} ${(r-24)*.65} 0 0 1 ${-r+24} ${-r*.38-4}Z`} fill="url(#ex-stone)" stroke="#d5be94" strokeOpacity=".2"/>)}
 <ellipse cy="-30" rx="102" ry="45" fill="#a58d68" fillOpacity=".35"/>
 <path d="M-230-190H230V-145H-230ZM-210-200V-335H210V-200" fill="#4f4041" stroke="#bba078" strokeOpacity=".3"/>
 {[-180,-90,0,90,180].map(x=><g key={x}><rect x={x-9} y="-320" width="18" height="130" fill="url(#ex-stone)"/><rect x={x-14} y="-327" width="28" height="9" fill="#ac9573"/></g>)}
 </g>}

function SceneArt({type}){
 if(type==='symbols')return <><Arch x={90} y={50} w={550} h={480}/>{['vine','cup','thyrsus','mask','panther','lyre'].map((k,i)=><g key={k}><Plinth x={180+(i%3)*180} y={280+Math.floor(i/3)*210} w={130} h={35}/><ObjectAt kind={k} x={180+(i%3)*180} y={205+Math.floor(i/3)*210} size={135}/></g>)}</>;
 if(type==='orbit')return <><circle cx="390" cy="310" r="220" fill="none" stroke="currentColor" strokeOpacity=".22"/><circle cx="390" cy="310" r="150" fill="none" stroke="currentColor" strokeOpacity=".12"/><ObjectAt kind="profile" x={390} y={310} size={220}/>{['vine','cup','lyre','mask','moon'].map((k,i)=>{const a=i*Math.PI*2/5-Math.PI/2;return <ObjectAt key={k} kind={k} x={390+Math.cos(a)*220} y={310+Math.sin(a)*220} size={105}/>})}</>;
 if(type==='birth')return <>{[110,350,590].map((x,i)=><g key={x}><Arch x={x-85} y={60} w={170} h={440}/><Plinth x={x} y={450} w={140} h={45}/>{i===0?<Figure x={x} y={330} scale={1.05}/>:i===1?<ObjectAt kind="bolt" x={x} y={245} size={180}/>:<g><ellipse cx={x} cy="280" rx="65" ry="80" fill="url(#ex-light)"/><Figure x={x} y={350} scale={.6}/></g>}</g>)}</>;
 if(type==='forest')return <><path d="M20 600L80 100L116 70L104 600M610 600L560 90L595 50L660 600" fill="url(#ex-stone)" opacity=".45"/>{[90,240,440,590].map((x,i)=><ObjectAt key={x} kind="vine" x={x} y={120+(i%2)*100} size={220}/>)}<Figure x={270} y={420} scale={1.25}/><Figure x={420} y={440} scale={.7}/><path d="M50 550Q300 470 700 560" fill="none" stroke="currentColor" strokeOpacity=".25"/></>;
 if(type==='tree')return <><path d="M390 500V180M130 180H650M130 180V260M650 180V260M390 360H620" stroke="currentColor" strokeWidth="2" opacity=".35"/>{[[130,130],[650,130],[390,320],[620,350]].map(([x,y])=><ObjectAt key={x} kind="profile" x={x} y={y} size={120}/>)}<ObjectAt kind="vine" x={390} y={510} size={170}/></>;
 if(type==='society')return <><path d="M15 530L170 410L360 460L550 300L780 440V620H0Z" fill="#685d4d" opacity=".2"/>{[[60,250,1],[290,170,.75],[470,320,1.1]].map(([x,y,s])=><g key={x} transform={`translate(${x} ${y}) scale(${s})`}><path d="M0 90L100 30L200 90Z" fill="url(#ex-stone)"/><rect y="240" width="200" height="20" fill="url(#ex-stone)"/>{[20,60,100,140,180].map(a=><rect key={a} x={a-8} y="95" width="16" height="145" fill="url(#ex-stone)"/>)}</g>)}<ObjectAt kind="vine" x={140} y={530} size={200}/></>;
 if(type==='festival')return <>{[90,280,470,660].map((x,i)=><g key={x}><Arch x={x-70} y={110} w={140} h={380}/><ObjectAt kind={['cup','mask','vine','lyre'][i]} x={x} y={310} size={125}/></g>)}<path d="M15 520H760" stroke="currentColor" strokeOpacity=".4"/></>;
 if(type==='theatre')return <Theatre/>;
 if(type==='ship')return <><circle cx="630" cy="110" r="65" fill="url(#ex-light)"/><g className="ex-vessel"><ObjectAt kind="ship" x={370} y={310} size={470}/><ObjectAt kind="vine" x={465} y={220} size={180}/></g>{[0,1,2,3].map(i=><path className="ex-wave" key={i} d={`M-40 ${460+i*38}Q65 ${425+i*38} 170 ${460+i*38}T380 ${460+i*38}T590 ${460+i*38}T800 ${460+i*38}`} stroke="currentColor" strokeOpacity={.3-i*.05} fill="none" style={{animationDelay:`${-i*2}s`}}/>)}<ObjectAt kind="dolphin" x={600} y={490} size={130}/></>;
 if(type==='gold')return <><Arch x={100} y={30} w={550} h={490}/><ObjectAt kind="crown" x={390} y={180} size={220}/><path d="M100 460H680V488H100Z" fill="url(#ex-stone)"/><path d="M145 488V620M635 488V620" stroke="url(#ex-stone)" strokeWidth="28"/>{[220,390,560].map((x,i)=><ObjectAt key={x} kind={['vase','cup','vine'][i]} x={x} y={380} size={155}/>)}</>;
 if(type==='thunder')return <><Arch x={220} y={40} w={330} h={500}/><Figure x={390} y={440} scale={1.8}/><ObjectAt kind="bolt" x={130} y={220} size={230}/><path d="M580 110L530 270L640 230L590 450" fill="none" stroke="currentColor" strokeOpacity=".35" strokeWidth="2"/></>;
 if(type==='ampelo')return <><Figure x={280} y={430} scale={1.5}/><ObjectAt kind="vine" x={480} y={330} size={330}/><Plinth x={280} y={540} w={220} h={50}/><path d="M100 560Q350 510 700 560" stroke="currentColor" strokeOpacity=".3" fill="none"/></>;
 if(type==='india')return <><path d="M20 530Q230 430 400 490T790 400" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 10"/>{[130,300,470,640].map((x,i)=><Figure key={x} x={x} y={420-i*20} scale={1-i*.07} pose="dance"/>)}<ObjectAt kind="thyrsus" x={190} y={240} size={180}/><path d="M0 620L160 430L300 540L510 330L800 560" fill="#81725c" opacity=".1"/></>;
 if(type==='bacchae')return <><path d="M60 620L90 40M700 620L645 40M140 80L35 160M650 100L750 180" stroke="url(#ex-stone)" strokeWidth="22" opacity=".45"/><Figure x={380} y={400} scale={1.5}/><Figure x={190} y={470} scale={1.05} pose="dance"/><Figure x={580} y={470} scale={1.05} pose="dance"/><ObjectAt kind="mask" x={390} y={130} size={110}/></>;
 if(type==='bats')return <><path d="M200 540V210H580V540M220 245H560M220 490H560" stroke="url(#ex-stone)" strokeWidth="16"/>{Array.from({length:10},(_,i)=><path key={i} d={`M${235+i*33} 245V490`} stroke="currentColor" opacity=".2"/>)}{[[150,140,120],[420,100,85],[640,220,135]].map(([x,y,s])=><g className="ex-floating" key={x}><ObjectAt kind="bat" x={x} y={y} size={s}/></g>)}</>;
 if(type==='ariadne')return <><circle cx="590" cy="180" r="95" fill="url(#ex-light)"/><path d="M0 470Q180 390 390 460T800 450V640H0Z" fill="#746a59" opacity=".22"/><Figure x={300} y={410} scale={1.4}/><Figure x={490} y={410} scale={1.4}/><path d="M200 540Q400 500 700 550" fill="none" stroke="currentColor" opacity=".3"/></>;
 if(type==='underworld')return <><Arch x={180} y={40} w={410} h={540}/><ellipse cx="385" cy="110" rx="150" ry="100" fill="url(#ex-light)"/>{[0,1,2,3,4].map(i=><path key={i} d={`M${100+i*22} ${600-i*26}H${680-i*22}V${625-i*26}H${100+i*22}Z`} fill="url(#ex-stone)" opacity={.5+i*.08}/>)}<Figure x={340} y={370} scale={1.15}/><Figure x={460} y={370} scale={1.15}/><ObjectAt kind="torch" x={140} y={350} size={155}/></>;
 if(type==='altar')return <><Arch x={150} y={60} w={460} h={440}/><Plinth x={390} y={400} w={370} h={120}/><ObjectAt kind="cup" x={310} y={315} size={170}/><ObjectAt kind="vase" x={480} y={310} size={175}/><ObjectAt kind="torch" x={110} y={300} size={170}/><ObjectAt kind="torch" x={670} y={300} size={170}/></>;
 if(type==='maenads')return <>{[130,300,470,640].map((x,i)=><Figure key={x} x={x} y={400+(i%2)*40} scale={1.25} pose="dance"/>)}<path d="M20 540H760M20 550H760" stroke="currentColor" opacity=".3"/><ObjectAt kind="lyre" x={390} y={130} size={150}/></>;
 if(type==='mystery')return <><Arch x={210} y={25} w={350} h={490}/><Plinth x={390} y={430} w={430} h={110}/><ObjectAt kind="cup" x={270} y={325} size={180}/><ObjectAt kind="vase" x={490} y={320} size={190}/><path d="M340 405L390 360L445 400L392 430Z" fill="#c5a66b" fillOpacity=".6"/></>;
 if(type==='ritual')return <><circle cx="390" cy="310" r="210" fill="none" stroke="currentColor" opacity=".25"/>{[0,1,2,3,4,5].map((i)=>{const a=i*Math.PI/3;return <Figure key={i} x={390+Math.cos(a)*220} y={310+Math.sin(a)*150} scale={.6} pose="dance"/>})}<ObjectAt kind="vine" x={390} y={300} size={220}/></>;
 if(type==='dual')return <><path d="M390 40V600" stroke="currentColor" opacity=".3"/><circle cx="200" cy="180" r="85" fill="url(#ex-light)"/><ObjectAt kind="lyre" x={200} y={330} size={230}/><ObjectAt kind="vine" x={580} y={330} size={250}/><ObjectAt kind="moon" x={580} y={170} size={140}/></>;
 if(type==='fusion')return <><circle cx="300" cy="300" r="180" fill="none" stroke="currentColor" opacity=".35"/><circle cx="480" cy="300" r="180" fill="#783c56" fillOpacity=".12" stroke="currentColor" strokeOpacity=".3"/><ObjectAt kind="lyre" x={220} y={300} size={180}/><ObjectAt kind="vine" x={560} y={300} size={180}/><ObjectAt kind="mask" x={390} y={300} size={160}/></>;
 if(type==='limits')return <><path d="M120 550V100H330V550M445 550V100H650V550" fill="#342938" fillOpacity=".5" stroke="url(#ex-stone)" strokeWidth="14"/><path d="M407 110L378 225L423 315L383 465L409 550" fill="none" stroke="currentColor" opacity=".5"/><Figure x={225} y={400} scale={1.5}/><Figure x={550} y={400} scale={1.5} pose="dance"/></>;
 if(type==='ethics')return <>{['balance','mask','profile'].map((kind,i)=><g key={kind}><Arch x={80+i*230} y={100} w={175} h={350}/><ObjectAt kind={kind} x={167+i*230} y={290} size={140}/></g>)}</>;
 if(type==='knowledge')return <><circle cx="390" cy="310" r="220" fill="none" stroke="currentColor" opacity=".25"/><path d="M390 90V530M170 310H610" stroke="currentColor" opacity=".2"/><ObjectAt kind="profile" x={390} y={310} size={190}/>{[['book',390,80],['lyre',620,310],['mask',390,540],['vine',160,310]].map(([k,x,y])=><ObjectAt key={k} kind={k} x={x} y={y} size={115}/>)}</>;
 if(type==='gallery')return <>{['lyre','book','cup'].map((k,i)=><g key={k}><path d={`M${55+i*245} 100H${245+i*245}V510H${55+i*245}Z`} fill="#3b2938" stroke="currentColor" strokeOpacity=".25"/><ObjectAt kind={k} x={150+i*245} y={310} size={150}/></g>)}</>;
 if(type==='final')return <><Arch x={140} y={20} w={500} h={570}/><circle cx="390" cy="210" r="135" fill="url(#ex-light)"/><ObjectAt kind="profile" x={390} y={290} size={300}/><Plinth x={390} y={470} w={250} h={85}/><ObjectAt kind="vine" x={150} y={440} size={170}/><ObjectAt kind="vine" x={650} y={440} size={170}/></>;
 if(type==='books')return <><path d="M20 540H760" stroke="url(#ex-stone)" strokeWidth="20"/>{[140,390,640].map(x=><ObjectAt key={x} kind="book" x={x} y={370} size={190}/>)}</>;
 return <><Arch x={130} y={30} w={520} h={520}/><g transform="translate(250 280) rotate(-12)"><ExhibitObject kind="mask" x="-110" y="-140" width="220" height="280"/></g><g transform="translate(530 360) rotate(12)"><ExhibitObject kind="mask" x="-110" y="-140" width="220" height="280"/></g><Plinth x={390} y={540} w={500} h={40}/></>;
}

export default function ExhibitionScene({type,parallax}) {
 const p=(depth)=>({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.4}px,0)`});
 return <div className={`exhibition-scene ex-${type}`} aria-hidden="true">
  <svg className="ex-architecture ex-plane" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style={p(4)}>
   <defs><linearGradient id="ex-wall"><stop stopColor="#1b1523"/><stop offset=".55" stopColor="#392c37"/><stop offset="1" stopColor="#705b49"/></linearGradient><linearGradient id="ex-floor" x2="0" y2="1"><stop stopColor="#43343c"/><stop offset="1" stopColor="#15121c"/></linearGradient><radialGradient id="ex-ambient"><stop stopColor="#d7b77c" stopOpacity=".16"/><stop offset="1" stopColor="#d7b77c" stopOpacity="0"/></radialGradient></defs>
   <rect width="1600" height="900" fill="url(#ex-wall)"/><path d="M0 680H1600V900H0Z" fill="url(#ex-floor)"/>
   <path d="M0 680H1600M0 720H1600M0 785H1600M0 885H1600M1050 680L0 900M1120 680L550 900M1180 680L1050 900M1240 680L1510 900" fill="none" stroke="#d7bb8b" strokeOpacity=".12"/>
   <path d="M780 0V680L1600 900M0 668H780L1600 888" fill="none" stroke="#d7bb8b" strokeOpacity=".14" strokeWidth="2"/>
   <ellipse cx="1220" cy="300" rx="650" ry="600" fill="url(#ex-ambient)"/>
  </svg>
  <div className="ex-art-wrap ex-plane" style={p(14)}>
   <svg className="ex-art" viewBox="0 0 780 640" preserveAspectRatio="xMidYMid meet">
    <defs><linearGradient id="ex-stone"><stop stopColor="#776353"/><stop offset=".24" stopColor="#d3bd91"/><stop offset=".48" stopColor="#a38c6a"/><stop offset="1" stopColor="#675345"/></linearGradient><radialGradient id="ex-light"><stop stopColor="#e4c17e" stopOpacity=".6"/><stop offset="1" stopColor="#d9ae68" stopOpacity="0"/></radialGradient></defs>
    <g className="ex-drawing"><SceneArt type={type}/></g>
   </svg>
  </div>
  <div className="ex-edge ex-plane" style={p(25)}/>
  <div className="ex-shade"/>
 </div>;
}
