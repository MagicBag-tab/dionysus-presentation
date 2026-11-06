import React from 'react';
import MuseumFigure from './MuseumFigure';

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

const Figure = MuseumFigure;
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
 if(type==='cover')return <><Arch x={90} y={35} w={570} h={480}/><path d="M45 582Q180 522 285 576M570 578Q660 510 760 548" fill="none" stroke="#788050" strokeWidth="12" strokeOpacity=".72"/>{[80,130,650,700].map((x,i)=><ObjectAt key={x} kind="vine" x={x} y={360+(i%2)*70} size={135}/>)}<Figure x={420} y={445} scale={1.3} character="dionysus"/><Plinth x={420} y={545} w={250} h={58}/></>;
 if(type==='symbols')return <><Arch x={90} y={50} w={550} h={480}/>{['vine','cup','thyrsus','mask','panther','lyre'].map((k,i)=><g key={k}><Plinth x={180+(i%3)*180} y={280+Math.floor(i/3)*210} w={130} h={35}/><ObjectAt kind={k} x={180+(i%3)*180} y={205+Math.floor(i/3)*210} size={135}/></g>)}</>;
 if(type==='orbit')return <><circle cx="390" cy="310" r="220" fill="none" stroke="currentColor" strokeOpacity=".22"/><circle cx="390" cy="310" r="150" fill="none" stroke="currentColor" strokeOpacity=".12"/><ObjectAt kind="profile" x={390} y={310} size={220}/>{['vine','cup','lyre','mask','moon'].map((k,i)=>{const a=i*Math.PI*2/5-Math.PI/2;return <ObjectAt key={k} kind={k} x={390+Math.cos(a)*220} y={310+Math.sin(a)*220} size={105}/>})}</>;
 if(type==='birth')return <>{[110,350,590].map((x,i)=><g key={x}><Arch x={x-85} y={60} w={170} h={440}/><Plinth x={x} y={450} w={140} h={45}/>{i===0?<Figure x={x} y={390} scale={1.05} character="zeus"/>:i===1?<g><ellipse cx={x} cy="300" rx="78" ry="100" fill="url(#ex-light)"/><Figure x={x} y={405} scale={1.05} character="semele"/><ObjectAt kind="bolt" x={x+54} y={220} size={115}/></g>:<g><ellipse cx={x} cy="280" rx="65" ry="80" fill="url(#ex-light)"/><Figure x={x} y={400} scale={.7} character="dionysus" child/></g>}</g>)}</>;
 if(type==='forest')return <><path d="M20 600L80 100L116 70L104 600M610 600L560 90L595 50L660 600" fill="url(#ex-stone)" opacity=".45"/>{[90,240,440,590].map((x,i)=><ObjectAt key={x} kind="vine" x={x} y={120+(i%2)*100} size={220}/>)}<Figure x={270} y={420} scale={1.1} character="dionysus" child/><Figure x={420} y={440} scale={.7} character="hermes"/><Figure x={170} y={455} scale={.68} character="nymph"/><Figure x={535} y={455} scale={.68} character="nymph"/><path d="M50 550Q300 470 700 560" fill="none" stroke="currentColor" strokeOpacity=".25"/></>;
 if(type==='tree')return <><path d="M390 500V180M130 180H650M130 180V260M650 180V260M390 360H620" stroke="currentColor" strokeWidth="2" opacity=".35"/>{[['zeus',130,130],['semele',650,130],['dionysus',390,320],['ariadne',620,350]].map(([character,x,y])=><Figure key={character} x={x} y={y} scale={.62} character={character}/>)}<ObjectAt kind="vine" x={390} y={510} size={170}/></>;
 if(type==='society')return <>
  <path d="M0 395L145 300L245 348L385 236L520 310L675 188L800 268V640H0Z" fill="#8d7a64" opacity=".15"/>
  <path d="M0 445Q146 398 278 432T535 406T800 414V640H0Z" fill="#596044" opacity=".32"/>
  <g className="ex-city">
   <path d="M58 389V296H177V390M46 300L117 250L188 300M70 322H165M82 337V388M111 337V388M140 337V388" fill="#51434a" stroke="#c3a97a" strokeOpacity=".65" strokeWidth="5"/>
   <path d="M226 385V274H372V386M210 280L299 212L388 280M241 302H357M253 320V384M285 320V384M317 320V384M349 320V384" fill="#56454a" stroke="#d0b583" strokeOpacity=".67" strokeWidth="5"/>
   <path d="M421 382V307H505V382M410 310L463 268L516 310M437 331H490M448 346V380M477 346V380" fill="#574449" stroke="#c6a978" strokeOpacity=".62" strokeWidth="4"/>
   <path d="M18 399H532M30 408H540" stroke="#d0b583" strokeOpacity=".35" strokeWidth="5"/>
   <path d="M253 270H357" stroke="#d9c18f" strokeOpacity=".56" strokeWidth="4"/>
   <path d="M245 257H365" stroke="#b48b69" strokeOpacity=".7" strokeWidth="8"/>
  </g>
  <g className="ex-vineyard" fill="#718050" stroke="#c0ab78" strokeOpacity=".65" strokeWidth="2">
   <path d="M18 515Q106 458 205 516M28 544Q116 487 218 544M520 506Q615 456 773 510M520 538Q630 486 790 544" fill="none" strokeWidth="5"/>
   {[50,90,135,180,560,610,660,710,758].map((x,i)=><path key={x} d={`M${x} ${500+(i%2)*30}q-18-22-12-43 21 9 23 31 12-24 34-23-8 26-35 36Z`}/>)}
  </g>
  <path d="M0 568Q180 522 360 560T800 546V640H0Z" fill="#55454a" opacity=".58"/>
  <path d="M0 570Q180 524 360 562T800 548" fill="none" stroke="#d4ba87" strokeOpacity=".4" strokeWidth="4"/>
  <Figure x={275} y={425} scale={.48} character="maenad"/>
  <Figure x={350} y={425} scale={.45} character="silenus"/>
  <Figure x={430} y={425} scale={.47} character="pirate"/>
  <Figure x={505} y={425} scale={.48} pose="dance" character="maenad"/>
 </>;
 if(type==='festival')return <>{[90,280,470,660].map((x,i)=><g key={x}><Arch x={x-70} y={110} w={140} h={380}/><ObjectAt kind={['cup','mask','vine','lyre'][i]} x={x} y={310} size={125}/><Figure x={x} y={480} scale={.48} character={['maenad','silenus','dionysus','maenad'][i]}/></g>)}<path d="M15 520H760" stroke="currentColor" strokeOpacity=".4"/></>;
 if(type==='theatre')return <><Theatre/><Figure x={345} y={300} scale={.5} character="dionysus"/><Figure x={455} y={300} scale={.5} character="silenus"/><ObjectAt kind="mask" x={130} y={120} size={90}/><ObjectAt kind="mask" x={650} y={120} size={90}/></>;
 if(type==='ship')return <><circle cx="630" cy="110" r="65" fill="url(#ex-light)"/><g className="ex-vessel"><ObjectAt kind="ship" x={370} y={310} size={470}/><ObjectAt kind="vine" x={465} y={220} size={180}/><Figure x={370} y={300} scale={.7} character="dionysus"/><Figure x={290} y={320} scale={.54} character="silenus"/><Figure x={470} y={320} scale={.54} character="pirate"/></g>{[0,1,2,3].map(i=><path className="ex-wave" key={i} d={`M-40 ${460+i*38}Q65 ${425+i*38} 170 ${460+i*38}T380 ${460+i*38}T590 ${460+i*38}T800 ${460+i*38}`} stroke="currentColor" strokeOpacity={.3-i*.05} fill="none" style={{animationDelay:`${-i*2}s`}}/>)}<ObjectAt kind="dolphin" x={600} y={490} size={130}/></>;
 if(type==='gold')return <><Arch x={100} y={30} w={550} h={490}/><ObjectAt kind="crown" x={390} y={180} size={220}/><Figure x={390} y={440} scale={1.2} character="midas"/><path d="M100 460H680V488H100Z" fill="url(#ex-stone)"/><path d="M145 488V620M635 488V620" stroke="url(#ex-stone)" strokeWidth="28"/>{[220,390,560].map((x,i)=><ObjectAt key={x} kind={['vase','cup','vine'][i]} x={x} y={380} size={155}/>)}</>;
 if(type==='thunder')return <><Arch x={220} y={40} w={330} h={500}/><Figure x={390} y={440} scale={1.8} character="lycurgus"/><ObjectAt kind="thyrsus" x={130} y={220} size={190}/><path d="M580 110L530 270L640 230L590 450" fill="none" stroke="currentColor" strokeOpacity=".35" strokeWidth="2"/></>;
 if(type==='ampelo')return <><Figure x={270} y={450} scale={1.15} character="ampelos"/><Figure x={490} y={450} scale={1.15} character="dionysus"/><ObjectAt kind="vine" x={390} y={240} size={220}/><Plinth x={390} y={540} w={440} h={42}/><path d="M100 560Q350 510 700 560" stroke="currentColor" strokeOpacity=".3" fill="none"/></>;
 if(type==='india')return <><path d="M20 530Q230 430 400 490T790 400" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 10"/><path d="M0 570L150 420L286 544L470 320L800 550V640H0Z" fill="#81725c" opacity=".12"/>{[120,270,500,650].map((x,i)=><Figure key={x} x={x} y={430-i%2*22} scale={.86+i%2*.08} pose={i%2?'dance':'still'} character={['maenad','silenus','dionysus','pirate'][i]}/>)}<ObjectAt kind="thyrsus" x={180} y={240} size={150}/></>;
 if(type==='bacchae')return <><path d="M60 620L90 40M700 620L645 40M140 80L35 160M650 100L750 180" stroke="url(#ex-stone)" strokeWidth="22" opacity=".45"/><Figure x={390} y={410} scale={1.32} character="dionysus"/><Figure x={215} y={465} scale={1.02} pose="dance" character="maenad"/><Figure x={570} y={465} scale={1.02} pose="dance" character="maenad"/><Figure x={705} y={470} scale={.84} character="pentheus"/><ObjectAt kind="mask" x={390} y={130} size={110}/></>;
 if(type==='bats')return <><path d="M200 540V210H580V540M220 245H560M220 490H560" stroke="url(#ex-stone)" strokeWidth="16"/>{Array.from({length:10},(_,i)=><path key={i} d={`M${235+i*33} 245V490`} stroke="currentColor" opacity=".2"/>)}<Figure x={250} y={475} scale={.72} character="ariadne"/><Figure x={390} y={475} scale={.72} character="semele"/><Figure x={530} y={475} scale={.72} character="nymph"/>{[[150,140,120],[420,100,85],[640,220,135]].map(([x,y,s])=><g className="ex-floating" key={x}><ObjectAt kind="bat" x={x} y={y} size={s}/></g>)}</>;
 if(type==='ariadne')return <><circle cx="590" cy="180" r="95" fill="url(#ex-light)"/><path d="M0 470Q180 390 390 460T800 450V640H0Z" fill="#746a59" opacity=".22"/><path d="M0 460Q210 420 410 466T800 452" fill="none" stroke="#bea878" strokeOpacity=".4" strokeWidth="5"/><Figure x={300} y={430} scale={1.2} character="ariadne"/><Figure x={490} y={430} scale={1.2} character="dionysus"/><path d="M200 540Q400 500 700 550" fill="none" stroke="currentColor" opacity=".3"/></>;
 if(type==='underworld')return <><Arch x={180} y={40} w={410} h={540}/><ellipse cx="385" cy="110" rx="150" ry="100" fill="url(#ex-light)"/>{[0,1,2,3,4].map(i=><path key={i} d={`M${100+i*22} ${600-i*26}H${680-i*22}V${625-i*26}H${100+i*22}Z`} fill="url(#ex-stone)" opacity={.5+i*.08}/>)}<Figure x={340} y={390} scale={1.05} character="dionysus"/><Figure x={470} y={390} scale={1.02} character="semele"/><ObjectAt kind="torch" x={140} y={350} size={155}/></>;
 if(type==='altar')return <><Arch x={150} y={60} w={460} h={440}/><Plinth x={390} y={400} w={370} h={120}/><ObjectAt kind="cup" x={310} y={315} size={170}/><ObjectAt kind="vase" x={480} y={310} size={175}/><ObjectAt kind="torch" x={110} y={300} size={170}/><ObjectAt kind="torch" x={670} y={300} size={170}/></>;
 if(type==='maenads')return <>{[['maenad',130],['nymph',300],['maenad',470],['ariadne',640]].map(([character,x],i)=><Figure key={x} x={x} y={400+(i%2)*40} scale={1.15} pose={i%2?'dance':'still'} character={character}/>)}<path d="M20 540H760M20 550H760" stroke="currentColor" opacity=".3"/><ObjectAt kind="lyre" x={390} y={130} size={150}/><ObjectAt kind="thyrsus" x={80} y={320} size={95}/><ObjectAt kind="thyrsus" x={700} y={320} size={95}/></>;
 if(type==='mystery')return <><Arch x={210} y={25} w={350} h={490}/><Plinth x={390} y={430} w={430} h={110}/><ObjectAt kind="cup" x={270} y={325} size={180}/><ObjectAt kind="vase" x={490} y={320} size={190}/><Figure x={390} y={480} scale={.74} character="maenad"/><path d="M340 405L390 360L445 400L392 430Z" fill="#c5a66b" fillOpacity=".6"/></>;
 if(type==='ritual')return <>
  <circle cx="390" cy="310" r="210" fill="none" stroke="currentColor" opacity=".25"/>
  {[
    ['maenad',0],['silenus',1],['nymph',2],['maenad',3],['pirate',4],['ariadne',5]
  ].map(([character,i])=>{
    const angle=i*Math.PI/3;
    return <Figure key={character+i} x={390+Math.cos(angle)*220} y={310+Math.sin(angle)*150} scale={.55} pose={i%2?'dance':'still'} character={character}/>;
  })}
  <ObjectAt kind="vine" x={390} y={300} size={220}/>
 </>;
 if(type==='dual')return <><path d="M390 40V600" stroke="currentColor" opacity=".3"/><circle cx="200" cy="180" r="85" fill="url(#ex-light)"/><Figure x={205} y={430} scale={1.18} character="apollo"/><Figure x={575} y={430} scale={1.18} character="dionysus"/><ObjectAt kind="lyre" x={180} y={220} size={95}/><ObjectAt kind="vine" x={600} y={210} size={105}/></>;
 if(type==='fusion')return <><circle cx="300" cy="300" r="180" fill="none" stroke="currentColor" opacity=".35"/><circle cx="480" cy="300" r="180" fill="#783c56" fillOpacity=".12" stroke="currentColor" strokeOpacity=".3"/><Figure x={205} y={470} scale={.96} character="apollo"/><Figure x={575} y={470} scale={.96} character="dionysus"/><Figure x={390} y={510} scale={.67} character="nietzsche"/><ObjectAt kind="mask" x={390} y={280} size={115}/></>;
 if(type==='limits')return <><path d="M120 550V100H330V550M445 550V100H650V550" fill="#342938" fillOpacity=".5" stroke="url(#ex-stone)" strokeWidth="14"/><path d="M407 110L378 225L423 315L383 465L409 550" fill="none" stroke="currentColor" opacity=".5"/><Figure x={225} y={400} scale={1.25} character="pentheus"/><Figure x={550} y={400} scale={1.25} pose="dance" character="dionysus"/></>;
 if(type==='ethics')return <>{['balance','mask','profile'].map((kind,i)=><g key={kind}><Arch x={80+i*230} y={100} w={175} h={350}/><ObjectAt kind={kind} x={167+i*230} y={290} size={140}/></g>)}</>;
 if(type==='knowledge')return <><circle cx="390" cy="310" r="220" fill="none" stroke="currentColor" opacity=".25"/><path d="M390 90V530M170 310H610" stroke="currentColor" opacity=".2"/><Figure x={390} y={400} scale={1.05} character="nietzsche"/>{[['book',390,80],['lyre',620,310],['mask',390,540],['vine',160,310]].map(([k,x,y])=><ObjectAt key={k} kind={k} x={x} y={y} size={115}/>)}</>;
 if(type==='gallery')return <>{['lyre','book','cup'].map((k,i)=><g key={k}><path d={`M${55+i*245} 100H${245+i*245}V510H${55+i*245}Z`} fill="#3b2938" stroke="currentColor" strokeOpacity=".25"/><ObjectAt kind={k} x={150+i*245} y={310} size={150}/></g>)}</>;
 if(type==='final')return <><Arch x={140} y={20} w={500} h={570}/><circle cx="390" cy="210" r="135" fill="url(#ex-light)"/><Figure x={390} y={435} scale={1.2} character="dionysus"/><Plinth x={390} y={525} w={250} h={85}/><ObjectAt kind="vine" x={150} y={440} size={170}/><ObjectAt kind="vine" x={650} y={440} size={170}/></>;
 if(type==='books')return <><path d="M20 540H760" stroke="url(#ex-stone)" strokeWidth="20"/>{[140,390,640].map(x=><ObjectAt key={x} kind="book" x={x} y={370} size={190}/>)}</>;
 if(type==='masks')return <><Arch x={130} y={30} w={520} h={520}/><g transform="translate(230 300) rotate(-12)"><ExhibitObject kind="mask" x="-90" y="-120" width="180" height="240"/></g><g transform="translate(400 245) rotate(5)"><ExhibitObject kind="mask" x="-90" y="-120" width="180" height="240"/></g><g transform="translate(570 310) rotate(12)"><ExhibitObject kind="mask" x="-90" y="-120" width="180" height="240"/></g><path d="M65 490Q150 430 206 473L239 530L183 548L143 511L88 547ZM540 510Q601 441 674 482L726 535L678 550L627 517L565 555Z" fill="#a38d6e" stroke="#dfcba5" strokeOpacity=".45" strokeWidth="4"/><Plinth x={390} y={555} w={570} h={40}/></>;
 return <><Arch x={130} y={30} w={520} h={520}/><g transform="translate(250 280) rotate(-12)"><ExhibitObject kind="mask" x="-110" y="-140" width="220" height="280"/></g><g transform="translate(530 360) rotate(12)"><ExhibitObject kind="mask" x="-110" y="-140" width="220" height="280"/></g><Plinth x={390} y={540} w={500} h={40}/></>;
}

function SymbolsStillLife({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.35}px,0)`});
 return <div className="exhibition-scene ex-symbols">
  <svg className="symbols-layer symbols-architecture" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.45)} aria-hidden="true">
   <defs>
    <linearGradient id="symbols-wall" x2="0" y2="1"><stop stopColor="#211925"/><stop offset=".52" stopColor="#382938"/><stop offset="1" stopColor="#241d27"/></linearGradient>
    <linearGradient id="symbols-stone" x1="0" x2="1"><stop stopColor="#514148"/><stop offset=".22" stopColor="#b59b77"/><stop offset=".48" stopColor="#706055"/><stop offset=".75" stopColor="#c5ad84"/><stop offset="1" stopColor="#493a40"/></linearGradient>
    <linearGradient id="symbols-floor" x2="0" y2="1"><stop stopColor="#493941"/><stop offset="1" stopColor="#19151f"/></linearGradient>
    <radialGradient id="symbols-light"><stop stopColor="#d6b27a" stopOpacity=".33"/><stop offset=".55" stopColor="#a66d75" stopOpacity=".1"/><stop offset="1" stopColor="#523444" stopOpacity="0"/></radialGradient>
    <pattern id="symbols-stone-grain" width="180" height="160" patternUnits="userSpaceOnUse"><path d="M8 0Q41 37 15 75T33 160M143 0Q116 40 145 83T128 160" fill="none" stroke="#e4d0aa" strokeOpacity=".055" strokeWidth="2"/><path d="M77 8L64 36M81 118L69 150" stroke="#110e18" strokeOpacity=".12" strokeWidth="3"/></pattern>
    <pattern id="symbols-key" width="46" height="22" patternUnits="userSpaceOnUse"><path d="M1 20V2H22V15H8V8H16M24 2H45V20H31V8H39V15" fill="none" stroke="#d7bd88" strokeOpacity=".58" strokeWidth="2"/></pattern>
   </defs>
   <rect width="1920" height="1080" fill="url(#symbols-wall)"/>
   <path d="M0 0H1920V772H0Z" fill="url(#symbols-stone-grain)" opacity=".8"/>
   <path d="M0 0H192V790H0ZM1728 0H1920V790H1728Z" fill="#211a25" opacity=".78"/>
   <path d="M0 772H1920V1080H0Z" fill="url(#symbols-floor)"/>
   <path d="M0 781H1920M0 829H1920M0 906H1920M0 1036H1920M0 1078H1920M785 781L120 1080M1030 781L650 1080M1260 781L1250 1080M1510 781L1830 1080" fill="none" stroke="#d2b88a" strokeOpacity=".13" strokeWidth="2"/>
   <ellipse cx="1000" cy="505" rx="760" ry="650" fill="url(#symbols-light)"/>
   <path d="M245 100H1675V745H245Z" fill="#29212c" opacity=".66" stroke="#9e8564" strokeOpacity=".35" strokeWidth="4"/>
   <path d="M270 124H1650V716H270Z" fill="none" stroke="#d1b987" strokeOpacity=".2" strokeWidth="3"/>
   <path d="M296 150H1624V177H296Z" fill="url(#symbols-key)" opacity=".54"/>
   <path d="M290 685H1630V719H290Z" fill="url(#symbols-stone)" stroke="#d6bd8b" strokeOpacity=".55" strokeWidth="3"/>
   <rect x="310" y="691" width="1300" height="20" fill="url(#symbols-key)" opacity=".68"/>
   <path d="M310 202H1610" stroke="#c3a671" strokeOpacity=".27" strokeWidth="3"/>
   <path d="M310 224H1610" stroke="#dfc99e" strokeOpacity=".12" strokeWidth="2"/>
   <g className="symbols-carved-reliefs" fill="none" stroke="#bca47d" strokeWidth="5" opacity=".48">
    <path d="M404 536Q418 476 454 462Q490 479 496 536L510 579H389Z"/>
    <path d="M414 477Q410 436 449 416Q488 437 481 479M422 448Q398 397 427 378L453 416L472 380Q504 405 483 454"/>
    <path d="M409 519Q365 495 354 459M490 519Q532 493 543 458M394 579H505"/>
    <path d="M1454 531Q1467 474 1504 459Q1542 477 1549 531L1562 578H1440Z"/>
    <path d="M1465 478Q1458 438 1503 416Q1547 437 1540 480M1473 447Q1452 397 1480 379L1505 417L1531 380Q1561 407 1540 451"/>
    <path d="M1459 519Q1418 494 1405 462M1542 519Q1585 493 1596 458M1446 578H1558"/>
   </g>
   <g className="symbols-pilasters">
    {[206,1690].map((x,i)=><g key={x} opacity={i?.7:.84}>
      <path d={`M${x-42} 116H${x+42}V146H${x-42}ZM${x-54} 146H${x+54}V166H${x-54}Z`} fill="url(#symbols-stone)" stroke="#e3cda3" strokeOpacity=".52" strokeWidth="2"/>
      <path d={`M${x-34} 166H${x+34}V737H${x-34}Z`} fill="url(#symbols-stone)" stroke="#d5bb8b" strokeOpacity=".6" strokeWidth="3"/>
      {[-22,-11,0,11,22].map(d=><path key={d} d={`M${x+d} 174V727`} stroke="#fff0cf" strokeOpacity={d===0?.18:.1} strokeWidth="2"/>)}
      <path d={`M${x-53} 738H${x+53}V765H${x-53}Z`} fill="url(#symbols-stone)" stroke="#d7bf94" strokeWidth="2"/>
      <path d={`M${x-39} 278Q${x} 242 ${x+39} 278M${x-39} 291Q${x} 255 ${x+39} 291M${x-35} 692Q${x} 658 ${x+35} 692`} fill="none" stroke="#4b3b40" strokeOpacity=".68" strokeWidth="5"/>
      <path d={`M${x-35} 278Q${x} 246 ${x+35} 278M${x-30} 691Q${x} 662 ${x+30} 691`} fill="none" stroke="#ead5ac" strokeOpacity=".62" strokeWidth="2"/>
    </g>)}
   </g>
   <path d="M260 746H1660" stroke="#e2c99a" strokeOpacity=".38" strokeWidth="5"/>
  </svg>

  <svg className="symbols-layer symbols-altar" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(1.05)} aria-hidden="true">
   <defs>
    <linearGradient id="symbols-altar-stone" x1="0" x2="1"><stop stopColor="#514147"/><stop offset=".2" stopColor="#d0bb92"/><stop offset=".46" stopColor="#8a745f"/><stop offset=".76" stopColor="#c4aa7e"/><stop offset="1" stopColor="#493940"/></linearGradient>
    <linearGradient id="symbols-bronze" x1="0" x2="1"><stop stopColor="#59443d"/><stop offset=".2" stopColor="#d1ad68"/><stop offset=".5" stopColor="#78634b"/><stop offset=".78" stopColor="#c5a16b"/><stop offset="1" stopColor="#493942"/></linearGradient>
    <linearGradient id="symbols-wine" x2="0" y2="1"><stop stopColor="#a34455"/><stop offset=".35" stopColor="#722d46"/><stop offset="1" stopColor="#3c2036"/></linearGradient>
    <linearGradient id="symbols-vessel" x1="0" x2="1"><stop stopColor="#452d3c"/><stop offset=".2" stopColor="#bd9865"/><stop offset=".45" stopColor="#62374a"/><stop offset=".7" stopColor="#a9865e"/><stop offset="1" stopColor="#382735"/></linearGradient>
    <radialGradient id="symbols-object-light"><stop stopColor="#f1d99f" stopOpacity=".38"/><stop offset="1" stopColor="#c69d63" stopOpacity="0"/></radialGradient>
    <pattern id="symbols-key-detail" width="40" height="19" patternUnits="userSpaceOnUse"><path d="M1 17V2H19V13H7V7H14M21 2H39V17H27V7H34V13" fill="none" stroke="#ead7b0" strokeOpacity=".74" strokeWidth="2"/></pattern>
   </defs>
   <ellipse cx="991" cy="826" rx="693" ry="55" fill="#100c16" opacity=".55"/>
   <path d="M345 732Q955 683 1570 732L1538 784Q961 823 379 784Z" fill="url(#symbols-altar-stone)" stroke="#ead9b8" strokeWidth="5"/>
   <path d="M379 784H1538L1502 823H414Z" fill="#65534c" stroke="#d0b890" strokeWidth="4"/>
   <path d="M426 823H1493V912H448Z" fill="url(#symbols-altar-stone)" stroke="#dcc9a4" strokeWidth="4"/>
   <path d="M1493 823H1538L1570 846V903L1493 912Z" fill="#514047" stroke="#c9ae80" strokeWidth="3"/>
   <path d="M470 843H1451V888H470Z" fill="none" stroke="#d2ae6c" strokeWidth="3"/>
   <rect x="482" y="852" width="954" height="21" fill="url(#symbols-key-detail)" opacity=".68"/>
   <path d="M414 914H1511V940H414Z" fill="#4a3b40" stroke="#bda37a" strokeWidth="3"/>
   <path d="M382 941H1540L1580 973H341Z" fill="url(#symbols-altar-stone)" stroke="#ebdab8" strokeWidth="4"/>
   <path d="M359 975H1560V998H359Z" fill="#514149" stroke="#c4a97b" strokeWidth="3"/>
   <path d="M337 999H1582L1612 1024H310Z" fill="url(#symbols-altar-stone)" stroke="#ead8b6" strokeWidth="4"/>
   <path d="M393 745H1521" stroke="#fff0ce" strokeOpacity=".54" strokeWidth="3"/>
   <ellipse cx="987" cy="483" rx="464" ry="333" fill="url(#symbols-object-light)"/>

   <g className="symbol-krater">
    <path d="M828 365Q990 344 1155 365L1136 430Q1124 548 1054 604L1050 666H931L927 604Q860 547 846 430Z" fill="url(#symbols-vessel)" stroke="#e4ca94" strokeWidth="5"/>
    <path d="M851 410Q992 432 1134 410Q1128 510 1068 567L1058 631H923L912 567Q856 508 851 410Z" fill="#4d293c" opacity=".66"/>
    <path d="M851 411Q989 438 1133 411M866 456Q992 480 1121 455M888 557Q995 578 1098 555" fill="none" stroke="#d6b473" strokeWidth="5"/>
    <path d="M862 455Q814 435 788 472Q773 512 842 534M1124 455Q1174 435 1199 472Q1214 512 1143 534" fill="none" stroke="url(#symbols-bronze)" strokeWidth="17"/>
    <path d="M865 458Q817 441 798 474M1121 458Q1168 441 1188 474" fill="none" stroke="#f1daa2" strokeOpacity=".65" strokeWidth="3"/>
    <path d="M905 349Q990 367 1078 350" fill="none" stroke="#eed9ad" strokeWidth="5"/>
    <ellipse cx="991" cy="361" rx="164" ry="21" fill="#392436" stroke="#dfc48d" strokeWidth="6"/>
    <ellipse cx="991" cy="363" rx="145" ry="12" fill="url(#symbols-wine)"/>
    <path d="M868 381Q991 400 1116 380M900 604H1080M926 633H1061" fill="none" stroke="#ead6ad" strokeOpacity=".69" strokeWidth="4"/>
    <path d="M922 483Q991 445 1060 483Q991 521 922 483Z" fill="none" stroke="#d2ae6e" strokeWidth="4"/>
    <path d="M991 453V513M977 465L991 450L1005 465" fill="none" stroke="#e3c88e" strokeWidth="3"/>
    <circle cx="991" cy="483" r="13" fill="#512a3d" stroke="#e4c990" strokeWidth="3"/>
   </g>

   <g className="symbol-ceremonial-cup" transform="translate(660 508)">
    <path d="M-91-79H91L76-16Q63 38 0 46Q-63 38-76-16Z" fill="url(#symbols-vessel)" stroke="#e7d0a1" strokeWidth="5"/>
    <path d="M-77-68H77L69-34H-68Z" fill="url(#symbols-wine)" stroke="#d1ab70" strokeWidth="3"/>
    <ellipse cy="-77" rx="93" ry="15" fill="#342233" stroke="#e6cc98" strokeWidth="4"/>
    <path d="M-86-45H86M-70 3Q0 24 70 3M0 46V132M-45 140H45L58 151H-58Z" fill="none" stroke="url(#symbols-bronze)" strokeWidth="8"/>
    <path d="M-83-24Q-141-49-151-9Q-152 29-78 20M83-24Q141-49 151-9Q152 29 78 20" fill="none" stroke="#c4a36d" strokeWidth="10"/>
    <path d="M-77-21Q-130-37-139-6M77-21Q130-37 139-6" fill="none" stroke="#efdbb1" strokeOpacity=".75" strokeWidth="3"/>
    <path d="M-48-50Q0-67 48-50M-45 15Q0 27 45 15" fill="none" stroke="#eccf8e" strokeWidth="3"/>
    <path d="M-38-8Q0-32 38-8Q0 16-38-8Z" fill="none" stroke="#d8bb7e" strokeWidth="3"/>
    <circle cy="-8" r="7" fill="#d2b374"/>
   </g>

   <g className="symbol-thyrsus" transform="translate(1322 525) rotate(-23)">
    <path d="M0 212V-202" stroke="url(#symbols-bronze)" strokeWidth="16" strokeLinecap="round"/>
    <path d="M-5 195L4 165M-5 135L5 105M-5 74L5 45M-5 14L5-15M-5-47L5-77M-5-109L5-139" stroke="#f0d7a2" strokeOpacity=".67" strokeWidth="4"/>
    <path d="M0-187Q-88-244-56-322Q-15-301 2-365Q48-312 92-334Q97-249 0-187Z" fill="url(#symbols-altar-stone)" stroke="#e4ce9d" strokeWidth="5"/>
    <path d="M0-190Q2-275 2-350M0-246L-42-296M1-268L49-307" fill="none" stroke="#6b6549" strokeWidth="5"/>
    {[[-45,-145,-36],[46,-118,37],[-48,-62,-36],[44,-25,35],[-38,39,-42],[38,77,39],[0,-171,0]].map(([x,y,r],i)=><g key={i} transform={`translate(${x} ${y}) rotate(${r})`}>
      <path d="M0 0Q-42-25-30-78Q-4-59 2-111Q30-66 59-85Q63-24 0 0Z" fill={i%2?'#727c50':'#838457'} stroke="#d8c38e" strokeWidth="3"/>
      <path d="M0 0Q-2-45 2-100M2-45L-20-64M3-62L31-76" fill="none" stroke="#ead6a4" strokeWidth="3"/>
    </g>)}
    <path d="M-35-200Q-102-155-78-122Q-51-101 0-164Q47-104 82-130Q105-165 34-205" fill="none" stroke="#9d4756" strokeWidth="10"/>
    <path d="M-34-197Q-94-152-74-126M35-200Q92-153 78-131" fill="none" stroke="#e6c58d" strokeWidth="3"/>
    <path d="M0-187Q-12-159-2-143Q9-162 0-187Z" fill="#a34a58" stroke="#e5c28a" strokeWidth="2"/>
   </g>

   <g className="symbol-panther-relief" transform="translate(1336 671)">
    <path d="M-153 33Q-157 2-132-20L-96-41L-80-89L-39-56Q38-83 103-38L145-27L155 9L125 27L111 73H77L63 35H-49L-65 76H-99L-103 29Z" fill="#5a4147" stroke="#d0b47d" strokeWidth="6"/>
    <path d="M128-20Q183-93 154-117Q130-91 141-66M-127-10L-101-5M-85-26L-61-21M-37-36L-14-31M13-39L36-34M57-35L79-29M-26-2L-10 2" fill="none" stroke="#dbc594" strokeWidth="5" strokeLinecap="round"/>
    <path d="M-98-44L-80-89L-42-59M-80-89L-73-48" fill="#80675c" stroke="#d0b47d" strokeWidth="4"/>
    <circle cx="-90" cy="-13" r="4" fill="#e9d39f"/>
    <path d="M94 14Q120 9 137-3" fill="none" stroke="#281f2b" strokeWidth="4"/>
   </g>

   <g className="symbol-masks" transform="translate(1506 570)">
    <g transform="translate(-65 18) rotate(-9)">
      <path d="M-68-104Q0-151 68-104L57-6Q42 55 0 78Q-43 53-57-6Z" fill="url(#symbols-altar-stone)" stroke="#e5d1a5" strokeWidth="5"/>
      <path d="M-47-58Q-29-82-9-56M9-56Q29-82 47-58" fill="none" stroke="#43353a" strokeWidth="10"/>
      <path d="M0-55L-16-4H13M-40 24Q0 72 40 24" fill="none" stroke="#4c3940" strokeWidth="7" strokeLinecap="round"/>
      <path d="M-54-94Q0-126 54-94M-43 2L-28 37M43 2L28 37" fill="none" stroke="#f1dfba" strokeOpacity=".62" strokeWidth="3"/>
      <path d="M-22-9Q0-23 23-8" fill="none" stroke="#c6a66f" strokeWidth="3"/>
    </g>
    <g transform="translate(76 18) rotate(9)">
      <path d="M-68-104Q0-151 68-104L57-6Q42 55 0 78Q-43 53-57-6Z" fill="#8c5961" stroke="#ead6af" strokeWidth="5"/>
      <path d="M-47-58Q-29-82-9-56M9-56Q29-82 47-58" fill="none" stroke="#382c37" strokeWidth="10"/>
      <path d="M0-55L-16-4H13M-40 14Q0-15 40 14M-38 34Q0 4 38 34" fill="none" stroke="#382d37" strokeWidth="6" strokeLinecap="round"/>
      <path d="M-54-94Q0-126 54-94M-43 2L-28 37M43 2L28 37" fill="none" stroke="#f1dfba" strokeOpacity=".62" strokeWidth="3"/>
    </g>
   </g>

   <path d="M480 729Q544 712 601 729M1190 729Q1253 712 1312 729M1416 729H1614" fill="none" stroke="#d6bd8e" strokeOpacity=".7" strokeWidth="4"/>
   <g fill="#80905a" stroke="#d2bb86" strokeWidth="2">
    <path d="M520 728Q487 700 498 673Q528 688 532 716Q548 683 570 687Q567 716 535 732Z"/>
    <path d="M1240 727Q1205 701 1217 672Q1247 686 1251 715Q1268 681 1290 686Q1286 716 1255 733Z"/>
   </g>
  </svg>

  <svg className="symbols-layer symbols-foreground" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(3.2)} aria-hidden="true">
   <defs>
    <linearGradient id="symbols-vine" x2="1" y2="1"><stop stopColor="#8e905b"/><stop offset=".5" stopColor="#586b48"/><stop offset="1" stopColor="#293c32"/></linearGradient>
    <radialGradient id="symbols-grape"><stop stopColor="#a15468"/><stop offset=".64" stopColor="#65344b"/><stop offset="1" stopColor="#312034"/></radialGradient>
   </defs>
   <g fill="none" stroke="url(#symbols-vine)" strokeWidth="9" strokeLinecap="round">
    <path d="M-40 1085Q128 966 76 834T137 656Q196 542 134 438T181 216"/>
    <path d="M-16 1010Q141 958 226 863T295 759M43 858Q147 806 200 719"/>
    <path d="M1960 1084Q1785 970 1843 838T1776 661Q1725 552 1806 446T1762 235"/>
    <path d="M1964 841Q1818 769 1857 647T1813 458"/>
    <path d="M90 552Q174 510 218 436M1821 551Q1760 506 1724 449"/>
   </g>
   {[[70,868,-30,1.1],[156,986,29,.92],[207,744,-42,.7],[1837,874,28,1.12],[1766,976,-22,.94],[1790,723,38,.78],[1775,417,-25,.67],[172,396,24,.64]].map(([x,y,r,s],i)=><g key={i} className="symbols-vine-leaf" transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
    <path d="M0 0Q-51-35-39-88Q-9-71 0-123Q28-81 55-101Q60-42 0 0Z" fill="url(#symbols-vine)" stroke="#d5bd85" strokeOpacity=".7" strokeWidth="2"/>
    <path d="M0 0Q-3-50 0-112M0-46L-29-76M1-68L32-87" fill="none" stroke="#e8d5a5" strokeOpacity=".7" strokeWidth="2"/>
   </g>)}
   {[[147,946,.78],[1819,936,.88],[1805,510,.58]].map(([x,y,s],i)=><g key={i} transform={`translate(${x} ${y}) scale(${s})`}>
    <path d="M0-75Q22-101 49-87M6-74Q-12-94-35-84" fill="none" stroke="#88905d" strokeWidth="7"/>
    {[[-21,1],[3,-5],[27,3],[-13,26],[12,28],[0,53]].map(([cx,cy],j)=><circle key={j} cx={cx} cy={cy} r="18" fill="url(#symbols-grape)" stroke="#d0b177" strokeOpacity=".75" strokeWidth="2"/>)}
    <path d="M-28 0L-14 3M-4-7L8-3M18 1L30 5" stroke="#f0d7a4" strokeOpacity=".52" strokeWidth="3"/>
   </g>)}
  </svg>

  <svg className="symbols-layer symbols-atmosphere" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
   <defs><radialGradient id="symbols-warm-glint"><stop stopColor="#efd59d" stopOpacity=".65"/><stop offset="1" stopColor="#d4ae70" stopOpacity="0"/></radialGradient></defs>
   <ellipse cx="1000" cy="470" rx="490" ry="370" fill="url(#symbols-warm-glint)" className="symbols-light-breath"/>
   {[[476,378,2],[716,263,1.5],[1125,298,1.7],[1457,378,1.4],[594,606,1.3],[1080,643,1.6],[1564,633,1.2],[848,196,1.2],[1284,540,1.4],[400,529,1.2]].map(([x,y,r],i)=><circle key={i} cx={x} cy={y} r={r} className="symbols-dust" style={{animationDelay:`${i*-1.4}s`}}/>)}
  </svg>
 </div>;
}

function CoverVines({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.35}px,0)`});
 const leaves = [[58,720,-38,1.35],[170,815,28,1.05],[1470,795,-26,1.3],[1550,650,34,1.05],[1450,125,18,.72]];
 const grapes = [[130,745,1],[1475,782,.9],[1515,202,.62]];
 return <>
  <svg className="cover-layer cover-foreground" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style={move(10)} aria-hidden="true">
   <defs>
    <linearGradient id="cover-vine" x2="1" y2="1"><stop stopColor="#87905d"/><stop offset=".48" stopColor="#586342"/><stop offset="1" stopColor="#29352e"/></linearGradient>
    <radialGradient id="cover-grape"><stop stopColor="#9b536d"/><stop offset=".62" stopColor="#623044"/><stop offset="1" stopColor="#34202f"/></radialGradient>
   </defs>
   <g fill="none" stroke="url(#cover-vine)" strokeWidth="8" strokeLinecap="round">
    <path d="M-50 910Q75 804 54 690T140 530Q190 444 142 346"/>
    <path d="M-15 900Q120 842 191 757T265 633"/>
    <path d="M1650 920Q1503 826 1546 715T1464 580Q1410 500 1492 418"/>
    <path d="M1650 700Q1550 628 1582 522T1542 338Q1505 242 1575 125"/>
    <path d="M1398 148Q1474 192 1518 257"/>
   </g>
   {leaves.map(([x,y,r,s],i)=><g key={i} transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`} className="cover-leaf">
    <path d="M0 0Q-48-32-37-82Q-6-69 0-112Q28-75 50-91Q55-39 0 0Z" fill="url(#cover-vine)" stroke="#b09a66" strokeOpacity=".6" strokeWidth="2"/>
    <path d="M0 0Q-3-47 0-104M0-45L-26-68M1-60L28-76" fill="none" stroke="#d0bc83" strokeOpacity=".55" strokeWidth="2"/>
   </g>)}
   {grapes.map(([x,y,s],i)=><g key={i} transform={`translate(${x} ${y}) scale(${s})`}>
    <path d="M0-72Q22-98 45-85M5-70Q-10-88-32-82" fill="none" stroke="#87905d" strokeWidth="6"/>
    {[[0,0],[24,8],[-22,11],[10,30],[-12,36],[0,59]].map(([cx,cy],j)=><circle key={j} cx={cx} cy={cy} r="17" fill="url(#cover-grape)" stroke="#c5a36d" strokeOpacity=".48" strokeWidth="2"/>)}
    <path d="M-6 2Q-1-3 4-1M17 10Q22 5 27 7" fill="none" stroke="#e4bd8b" strokeOpacity=".45" strokeWidth="2"/>
   </g>)}
  </svg>
  <svg className="cover-layer cover-atmosphere" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
   {[[174,230,2],[625,140,1.5],[925,218,2],[1370,106,1.5],[1180,455,1.7],[790,535,1.2],[1510,455,1.4],[585,690,1.3],[1320,610,1.7],[1000,90,1.2]].map(([x,y,r],i)=><circle key={i} className="cover-dust" cx={x} cy={y} r={r} style={{animationDelay:`${i*-1.7}s`}}/>)}
  </svg>
 </>;
}

function CoverStatue({parallax}) {
 const move = {transform:`translate3d(${parallax.x*5}px,${parallax.y*1.4}px,0)`};
 return <svg className="cover-layer cover-statue" viewBox="0 0 520 760" preserveAspectRatio="xMidYMax meet" style={move} role="presentation">
  <defs>
   <linearGradient id="cover-marble" x1="0" x2="1" y1=".15" y2=".75"><stop stopColor="#f0e2c6"/><stop offset=".24" stopColor="#b9a98c"/><stop offset=".54" stopColor="#e0d1b3"/><stop offset=".79" stopColor="#978773"/><stop offset="1" stopColor="#5d5150"/></linearGradient>
   <linearGradient id="cover-cloak" x1="0" x2="1"><stop stopColor="#783d50"/><stop offset=".5" stopColor="#4a293e"/><stop offset="1" stopColor="#241f30"/></linearGradient>
   <linearGradient id="cover-plinth" x1="0" x2="1"><stop stopColor="#5b4b49"/><stop offset=".18" stopColor="#d0bb92"/><stop offset=".5" stopColor="#9b886d"/><stop offset=".82" stopColor="#c9b48d"/><stop offset="1" stopColor="#514448"/></linearGradient>
   <radialGradient id="cover-statue-light" cx=".35" cy=".2"><stop stopColor="#fff2cf" stopOpacity=".55"/><stop offset="1" stopColor="#c6a15b" stopOpacity="0"/></radialGradient>
   <pattern id="cover-marble-grain" width="92" height="110" patternUnits="userSpaceOnUse"><path d="M10 0Q32 26 15 50T24 110M73 0Q57 30 78 53T67 110" fill="none" stroke="#fff1d2" strokeOpacity=".1" strokeWidth="2"/><path d="M40 8L31 31M52 72L43 98" stroke="#5d4c48" strokeOpacity=".08" strokeWidth="2"/></pattern>
  </defs>
  <ellipse cx="273" cy="729" rx="211" ry="23" fill="#100b18" opacity=".72"/>
  <ellipse cx="270" cy="715" rx="183" ry="13" fill="#d0aa69" opacity=".12"/>
  <g className="cover-statue-glow"><ellipse cx="250" cy="278" rx="190" ry="290" fill="url(#cover-statue-light)"/></g>
  <g className="cover-statue-sculpture">
   <path d="M165 291Q171 253 206 236L209 208H306L311 240Q350 254 365 296L390 443Q332 481 258 474Q185 480 136 448Z" fill="url(#cover-marble)" stroke="#f4e3bf" strokeOpacity=".65" strokeWidth="4"/>
   <path d="M170 287Q127 303 125 360L143 451Q153 467 178 457L195 351Q204 324 228 312" fill="url(#cover-marble)" stroke="#f0dfbd" strokeWidth="5"/>
   <path d="M345 286Q386 303 394 351L378 412Q366 428 349 414L332 347Q325 326 305 313" fill="url(#cover-marble)" stroke="#f0dfbd" strokeWidth="5"/>
   <path d="M358 402Q374 414 390 404L397 384Q405 377 414 386L420 397Q414 414 398 425L377 437L355 426Z" fill="url(#cover-marble)" stroke="#e8d6b3" strokeWidth="3"/>
   <path d="M125 430Q147 440 168 430M365 404Q380 417 394 407" fill="none" stroke="#77665b" strokeOpacity=".52" strokeWidth="4"/>
   <path d="M188 277Q213 248 251 261Q290 245 329 280L375 518Q324 544 278 532L252 340L219 532Q176 540 138 513Z" fill="url(#cover-cloak)" stroke="#cfb27b" strokeOpacity=".78" strokeWidth="4"/>
   <path d="M214 259Q238 286 248 326Q262 410 280 532M316 270Q294 307 287 390Q282 462 303 537M178 309Q213 360 231 420M350 315Q324 364 309 445" fill="none" stroke="#e6d3ad" strokeOpacity=".72" strokeWidth="5"/>
   <path d="M235 286Q249 356 255 420M320 292Q303 378 300 438M198 346L207 496M354 359L338 494M265 349L275 478" fill="none" stroke="#281e2d" strokeOpacity=".5" strokeWidth="3"/>
   <path d="M200 292Q237 313 273 291M277 292Q313 310 345 289" fill="none" stroke="#d8c49c" strokeOpacity=".8" strokeWidth="5"/>
   <path d="M234 236Q235 215 235 198H286Q283 223 299 246L279 274H239Z" fill="url(#cover-marble)" stroke="#eee0c2" strokeWidth="3"/>
   <path d="M212 167Q208 121 236 91Q257 69 287 88Q318 104 312 157L301 207Q285 238 257 239Q229 233 218 206Z" fill="url(#cover-marble)" stroke="#f4e4c4" strokeWidth="4"/>
   <path d="M214 145Q190 175 208 224L228 244L235 205L223 177M304 144Q329 173 309 224L291 242L286 203L299 177" fill="#70645b" stroke="#b8a78a" strokeWidth="4"/>
   <path d="M217 147Q196 109 217 72Q229 51 252 58Q266 31 287 54Q319 62 321 111L307 160L295 122Q279 103 259 108Q239 106 224 129Z" fill="url(#cover-marble)" stroke="#d8c5a2" strokeWidth="4"/>
   <path d="M222 105Q230 66 249 60M247 108Q254 73 273 57M275 105Q294 73 310 91M217 137Q207 166 221 183M308 129Q320 157 307 183" fill="none" stroke="#74645a" strokeWidth="8" strokeLinecap="round"/>
   <path d="M228 140Q238 133 247 140M274 139Q284 132 294 139" fill="none" stroke="#574944" strokeWidth="4" strokeLinecap="round"/>
   <path d="M229 147Q237 145 244 148M276 147Q284 145 291 148" fill="none" stroke="#3b3030" strokeWidth="3"/>
   <path d="M261 146L255 171L264 174M250 189Q263 194 276 187" fill="none" stroke="#826c5e" strokeWidth="3" strokeLinecap="round"/>
   <path d="M245 190Q261 197 279 190" fill="none" stroke="#f3e5c7" strokeWidth="5"/>
   <path d="M214 112Q236 88 257 104Q281 87 310 111" fill="none" stroke="#6b553f" strokeWidth="7"/>
   {[[216,113,-32],[232,96,-12],[251,94,12],[272,92,-8],[294,101,22],[310,120,40],[222,132,-55],[302,137,45]].map(([x,y,r],i)=><g key={i} transform={`translate(${x} ${y}) rotate(${r})`}>
    <path d="M0 0Q-18-11-12-29Q2-20 6-37Q18-20 28-28Q30-7 0 0Z" fill={i%2?'#727b50':'#8a8b59'} stroke="#d4bd85" strokeWidth="2"/>
    <path d="M0 0L7-32M7-15L-3-23" stroke="#ead6a4" strokeOpacity=".7" strokeWidth="1.5"/>
   </g>)}
   {[[-16,120],[9,115],[33,122],[58,129],[81,141]].map(([dx,dy],i)=><circle key={i} cx={258+dx} cy={dy} r="6" fill={i%2?'#74394b':'#9a8054'} stroke="#ddc58c" strokeWidth="2"/> )}
   <path d="M418 390Q436 275 461 145M438 304Q405 285 398 251M446 251Q478 224 487 190M456 203Q423 183 419 157" fill="none" stroke="#997447" strokeWidth="8" strokeLinecap="round"/>
   <path d="M447 207Q423 190 430 171Q449 179 455 199M459 166Q476 147 491 158Q481 180 459 166M431 267Q407 246 411 226Q432 235 439 260M467 239Q488 217 504 229Q492 251 467 239M438 326Q415 311 418 293Q438 300 446 321" fill="#7a8053" stroke="#d3bc83" strokeWidth="3"/>
   <path d="M428 230Q442 214 454 227Q448 244 430 245M457 190Q467 174 480 182Q478 199 460 202" fill="none" stroke="#cfb578" strokeWidth="2"/>
   <path d="M206 525Q216 540 239 541L245 558Q224 570 196 557L185 548ZM287 541Q310 538 323 521L347 540L340 555Q313 570 284 560Z" fill="url(#cover-marble)" stroke="#e9d8b7" strokeWidth="3"/>
   <path d="M204 554Q224 562 245 554M287 557Q313 562 339 548" fill="none" stroke="#7b6a5e" strokeOpacity=".45" strokeWidth="3"/>
   <path d="M119 559Q258 580 397 555L383 590Q257 607 134 590Z" fill="url(#cover-plinth)" stroke="#efddba" strokeWidth="4"/>
   <path d="M134 590H383L369 614H147Z" fill="#796858" stroke="#d5c098" strokeWidth="3"/>
   <path d="M148 614H369V682H158Z" fill="url(#cover-plinth)" stroke="#e8d6b2" strokeWidth="4"/>
   <path d="M369 614H385L400 628V675L369 682Z" fill="#58494a" stroke="#c6ae82" strokeWidth="3"/>
   <path d="M170 625H347V670H170Z" fill="none" stroke="#d1ad68" strokeWidth="3"/>
   <path d="M181 632H336V663H181Z" fill="none" stroke="#f0ddb6" strokeOpacity=".54" strokeWidth="2"/>
   <path d="M188 642H329M188 655H329" stroke="#d7c39e" strokeOpacity=".45" strokeWidth="2"/>
   <path d="M204 648Q258 632 312 648Q258 664 204 648Z" fill="#41313b" stroke="#c5a15f" strokeWidth="2"/>
   <path d="M258 638V658M249 642L258 635L267 642" fill="none" stroke="#d8bf8c" strokeWidth="2"/>
   <path d="M133 683H389L414 699H106Z" fill="url(#cover-plinth)" stroke="#eddbb6" strokeWidth="4"/>
   <path d="M106 700H414V716H106Z" fill="#493b3e" stroke="#bca77f" strokeWidth="3"/>
   <path d="M95 717H425L443 739H77Z" fill="url(#cover-plinth)" stroke="#e4d1ad" strokeWidth="4"/>
   <path d="M119 690H402M119 727H401" stroke="#e9d8b8" strokeOpacity=".52" strokeWidth="2"/>
   <path d="M142 682Q166 669 188 682M329 682Q351 669 374 682" fill="none" stroke="#748051" strokeWidth="4"/>
   <path d="M142 682Q130 670 145 664Q158 670 142 682M374 682Q386 670 371 664Q358 670 374 682" fill="#7e8554" stroke="#ccb579" strokeWidth="2"/>
  </g>
  <path d="M92 749H428" stroke="#c6a15b" strokeOpacity=".55" strokeWidth="2"/>
  <rect x="76" y="24" width="368" height="714" fill="url(#cover-marble-grain)" opacity=".42" pointerEvents="none"/>
 </svg>;
}

function CoverScene({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.35}px,0)`});
 return <div className="exhibition-scene ex-cover" aria-hidden="true">
  <svg className="cover-layer cover-sky" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style={move(1)}>
   <defs>
    <linearGradient id="cover-sky-gradient" x2="0" y2="1"><stop stopColor="#241a30"/><stop offset=".52" stopColor="#48283d"/><stop offset="1" stopColor="#211925"/></linearGradient>
    <radialGradient id="cover-sky-glow"><stop stopColor="#c69869" stopOpacity=".38"/><stop offset=".45" stopColor="#85516a" stopOpacity=".2"/><stop offset="1" stopColor="#40263c" stopOpacity="0"/></radialGradient>
    <linearGradient id="cover-mountain" x2="0" y2="1"><stop stopColor="#5b3b50"/><stop offset="1" stopColor="#28232f"/></linearGradient>
   </defs>
   <rect width="1600" height="900" fill="url(#cover-sky-gradient)"/>
   <ellipse cx="1030" cy="340" rx="660" ry="450" fill="url(#cover-sky-glow)"/>
   <circle cx="1195" cy="180" r="52" fill="#e2c997" opacity=".56"/>
   <circle cx="1215" cy="166" r="50" fill="#493047" opacity=".72"/>
   {[[170,130,2],[360,220,1.5],[745,145,2],[954,105,1.4],[1362,242,1.7],[1490,88,2],[1115,330,1.4]].map(([x,y,r],i)=><circle key={i} cx={x} cy={y} r={r} fill="#f3dfb2" opacity=".54"/>)}
   <path d="M0 596L144 518L243 555L368 433L510 550L661 470L795 583L934 478L1074 563L1200 428L1328 552L1444 461L1600 536V900H0Z" fill="url(#cover-mountain)" opacity=".84"/>
   <path d="M0 641L204 578L360 616L502 523L681 625L860 552L1024 639L1190 528L1386 628L1510 551L1600 590V900H0Z" fill="#312533" opacity=".72"/>
   <path d="M0 710Q410 642 807 706T1600 671V900H0Z" fill="#211b27"/>
   <path d="M0 732Q370 682 800 731T1600 710" fill="none" stroke="#b48b69" strokeOpacity=".26" strokeWidth="2"/>
  </svg>
  <svg className="cover-layer cover-temple" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style={move(3)}>
   <defs>
    <linearGradient id="cover-stone-gradient" x1="0" x2="1"><stop stopColor="#4c3b42"/><stop offset=".2" stopColor="#a28a70"/><stop offset=".48" stopColor="#64514d"/><stop offset=".76" stopColor="#c0a67e"/><stop offset="1" stopColor="#473940"/></linearGradient>
    <linearGradient id="cover-temple-shadow" x2="0" y2="1"><stop stopColor="#1c1825"/><stop offset="1" stopColor="#382536"/></linearGradient>
    <pattern id="cover-meander" width="48" height="22" patternUnits="userSpaceOnUse"><path d="M1 20V2H23V15H8V8H17M25 2H47V20H32V8H40V15" fill="none" stroke="#d8bf8e" strokeOpacity=".55" strokeWidth="2"/></pattern>
   </defs>
   <path d="M635 359L1082 150L1532 359Z" fill="#5b4648" stroke="url(#cover-stone-gradient)" strokeWidth="20"/>
   <path d="M696 339L1081 183L1471 339Z" fill="#302632" stroke="#c0a67e" strokeOpacity=".55" strokeWidth="4"/>
   <path d="M736 327L1081 204L1427 327" fill="none" stroke="#d6b678" strokeOpacity=".48" strokeWidth="3"/>
   <path d="M681 351H1484V390H681Z" fill="url(#cover-stone-gradient)" stroke="#deca9e" strokeOpacity=".62" strokeWidth="3"/>
   <rect x="696" y="359" width="774" height="22" fill="url(#cover-meander)" opacity=".78"/>
   <path d="M664 391H1500V421H664Z" fill="#4a3b42" stroke="#bfa77d" strokeOpacity=".58" strokeWidth="3"/>
   <path d="M610 422H1544V454H610Z" fill="url(#cover-stone-gradient)" stroke="#d5bd8d" strokeWidth="3"/>
   <path d="M645 454V733H1506V454" fill="url(#cover-temple-shadow)" stroke="#a68e70" strokeWidth="4"/>
   <path d="M666 480H1485V711H666Z" fill="#261f2b" stroke="#c3a97b" strokeOpacity=".26" strokeWidth="3"/>
   <path d="M760 480V711M1391 480V711" stroke="#b89868" strokeOpacity=".3" strokeWidth="3"/>
   {[704,870,1035,1200,1365,1518].map((x,i)=><g key={x} opacity={i===5?.68:.88}>
    <path d={`M${x-50} 444V${i===5?424:411}H${x+50}V444Z`} fill="url(#cover-stone-gradient)" stroke="#e0cba1" strokeWidth="3"/>
    <path d={`M${x-35} 458V${i===5?696:665}Q${x} 647 ${x+35} 665V458Z`} fill="#302632" opacity=".72"/>
    <path d={`M${x-31} 462V${i===5?696:665}M${x+31} 462V${i===5?696:665}`} stroke="#c9ae80" strokeOpacity=".52" strokeWidth="3"/>
    <path d={`M${x-69} 697H${x+69}V723H${x-69}Z`} fill="url(#cover-stone-gradient)" stroke="#d3be94" strokeWidth="3"/>
    {[0,1,2,3,4].map(j=><path key={j} d={`M${x-30+j*15} 464V${i===5?694:663}`} stroke="#ddcba8" strokeOpacity=".14" strokeWidth="2"/>)}
    <path d={`M${x-56} 429Q${x} 411 ${x+56} 429M${x-56} 439H${x+56}`} fill="none" stroke="#ead7b3" strokeOpacity=".5" strokeWidth="3"/>
    {i<5&&<g fill="#9b8a67" stroke="#dcc797" strokeOpacity=".55" strokeWidth="2">
     <path d={`M${x-13} 561Q${x-12} 534 ${x} 532Q${x+13} 535 ${x+14} 561L${x+20} 590H${x-19}Z`}/>
     <path d={`M${x-37} 600Q${x} 580 ${x+37} 600V635H${x-37}Z`}/>
     <path d={`M${x-45} 637H${x+45}V646H${x-45}Z`}/>
    </g>}
   </g>)}
   <path d="M0 710H1600V900H0Z" fill="#30272f" opacity=".64"/>
   <path d="M0 720H1600M0 776H1600M0 846H1600M0 900H1600M720 720L0 900M850 720L430 900M1010 720L920 900M1220 720L1450 900" fill="none" stroke="#cbb28c" strokeOpacity=".17" strokeWidth="2"/>
   <path d="M620 725H1550M650 737H1540" stroke="#d2b37c" strokeOpacity=".32" strokeWidth="4"/>
   <path d="M635 728L760 699H1475L1541 728" fill="#8f775e" opacity=".2"/>
   <path d="M620 723H1550" stroke="#d5bd8d" strokeOpacity=".6" strokeWidth="5"/>
   <g fill="none" stroke="#bd9b63" strokeWidth="3" opacity=".5">
    <path d="M704 403q16-24 32 0t32 0M1355 403q16-24 32 0t32 0"/>
    <path d="M721 390l15-18 15 18M1370 390l15-18 15 18"/>
   </g>
  </svg>
  <svg className="cover-layer cover-columns" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style={move(5)}>
   <defs>
    <linearGradient id="cover-near-column" x1="0" x2="1"><stop stopColor="#42353c"/><stop offset=".25" stopColor="#b49b76"/><stop offset=".48" stopColor="#766253"/><stop offset=".76" stopColor="#c6af87"/><stop offset="1" stopColor="#4a3b40"/></linearGradient>
   </defs>
   {[810,1515].map((x,i)=><g key={x} opacity={i?.76:.92}>
    <path d={`M${x-79} 339H${x+79}V374H${x-79}ZM${x-94} 374H${x+94}V395H${x-94}Z`} fill="url(#cover-near-column)" stroke="#e0cba0" strokeOpacity=".72" strokeWidth="3"/>
    <path d={`M${x-62} 395V744H${x+62}V395Z`} fill="url(#cover-near-column)" stroke="#d2bb8d" strokeWidth="3"/>
    {[-42,-21,0,21,42].map(offset=><path key={offset} d={`M${x+offset} 405V735`} stroke="#f0dfbd" strokeOpacity={offset===0?.34:.17} strokeWidth={offset===0?4:2}/>)}
    <path d={`M${x-79} 738H${x+79}V765H${x-79}Z`} fill="url(#cover-near-column)" stroke="#dfc99e" strokeWidth="3"/>
    <path d={`M${x-67} 410V716M${x+67} 410V716`} stroke="#312731" strokeOpacity=".4" strokeWidth="5"/>
    <path d={`M${x-90} 352Q${x} 334 ${x+90} 352M${x-89} 382H${x+89}`} fill="none" stroke="#eddbb6" strokeOpacity=".62" strokeWidth="3"/>
    <path d={`M${x-95} 755H${x+95}V776H${x-95}Z`} fill="#514248" stroke="#d5bf92" strokeOpacity=".56" strokeWidth="2"/>
   </g>)}
  </svg>
  <CoverStatue parallax={parallax}/>
  <CoverVines parallax={parallax}/>
  <div className="cover-vignette"/>
 </div>;
}

function FacetsMural({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.35}px,0)`});
 return <div className="exhibition-scene ex-facets-mural">
  <svg className="facets-layer facets-background" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.35)} aria-hidden="true">
   <defs>
    <linearGradient id="facets-wall" x2="0" y2="1"><stop stopColor="#211824"/><stop offset=".48" stopColor="#3b2937"/><stop offset="1" stopColor="#211923"/></linearGradient>
    <linearGradient id="facets-stone" x1="0" x2="1"><stop stopColor="#57454a"/><stop offset=".24" stopColor="#c5ab7d"/><stop offset=".5" stopColor="#776458"/><stop offset=".76" stopColor="#c7ad7c"/><stop offset="1" stopColor="#514048"/></linearGradient>
    <radialGradient id="facets-dawn"><stop stopColor="#d2a968" stopOpacity=".4"/><stop offset=".45" stopColor="#804458" stopOpacity=".18"/><stop offset="1" stopColor="#241925" stopOpacity="0"/></radialGradient>
    <pattern id="facets-meander" width="48" height="24" patternUnits="userSpaceOnUse"><path d="M1 22V2H23V16H8V8H16M25 2H47V22H32V8H40V16" fill="none" stroke="#d3b77f" strokeOpacity=".56" strokeWidth="2"/></pattern>
   </defs>
   <rect width="1920" height="1080" fill="url(#facets-wall)"/>
   <ellipse cx="960" cy="480" rx="830" ry="650" fill="url(#facets-dawn)"/>
   <path d="M0 784H1920V1080H0Z" fill="#17131d"/>
   <path d="M0 812H1920M0 886H1920M0 1002H1920M0 1064H1920M420 812L90 1080M690 812L510 1080M960 812V1080M1230 812L1410 1080M1500 812L1830 1080" fill="none" stroke="#cfb487" strokeOpacity=".16" strokeWidth="2"/>
   <path d="M186 815V356Q186 84 960 82Q1734 84 1734 356V815" fill="none" stroke="url(#facets-stone)" strokeWidth="34" opacity=".7"/>
   <path d="M226 802V360Q226 126 960 124Q1694 126 1694 360V802" fill="none" stroke="#d5bb8c" strokeOpacity=".43" strokeWidth="4"/>
   <path d="M260 164H1660V192H260Z" fill="url(#facets-meander)" opacity=".72"/>
   <g className="facets-columns">
    {[92,1828].map((x,i)=><g key={x} opacity={i?.85:.78}>
     <path d={`M${x-70} 204H${x+70}V246H${x-70}ZM${x-94} 246H${x+94}V276H${x-94}Z`} fill="url(#facets-stone)" stroke="#ddc79e" strokeOpacity=".5" strokeWidth="3"/>
     <path d={`M${x-56} 276H${x+56}V798H${x-56}Z`} fill="url(#facets-stone)" stroke="#ddc79e" strokeOpacity=".45" strokeWidth="3"/>
     {[-38,-19,0,19,38].map(dx=><path key={dx} d={`M${x+dx} 290V785`} stroke="#fff0d0" strokeOpacity={dx===0?.19:.08} strokeWidth="3"/>)}
     <path d={`M${x-86} 798H${x+86}V828H${x-86}Z`} fill="url(#facets-stone)" stroke="#ddc79e" strokeOpacity=".46" strokeWidth="3"/>
    </g>)}
   </g>
   <path d="M265 824H1655" stroke="#d5bd90" strokeOpacity=".36" strokeWidth="4"/>
  </svg>

  <svg className="facets-layer facets-scenes" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.8)} aria-hidden="true">
   <defs>
    <linearGradient id="facets-fresco" x2="0" y2="1"><stop stopColor="#6b4d50" stopOpacity=".12"/><stop offset=".5" stopColor="#785044" stopOpacity=".24"/><stop offset="1" stopColor="#35252f" stopOpacity=".58"/></linearGradient>
    <linearGradient id="facets-ribbon" x1="0" x2="1"><stop stopColor="#90734a"/><stop offset=".5" stopColor="#d2b574"/><stop offset="1" stopColor="#796044"/></linearGradient>
   </defs>
   <path d="M302 770V395Q302 210 590 212Q810 214 840 526Q860 702 788 830Z" fill="url(#facets-fresco)" stroke="#c6a86f" strokeOpacity=".35" strokeWidth="3"/>
   <path d="M1110 526Q1140 214 1360 212Q1648 210 1648 395V770L1162 830Q1090 702 1110 526Z" fill="url(#facets-fresco)" stroke="#c6a86f" strokeOpacity=".35" strokeWidth="3"/>
   <path d="M326 754Q388 600 535 581Q682 563 814 663M1106 663Q1238 563 1385 581Q1532 600 1594 754" fill="none" stroke="url(#facets-ribbon)" strokeOpacity=".55" strokeWidth="5"/>
   <path d="M425 678Q495 602 570 677T716 684M1204 684Q1276 602 1350 677T1495 678" fill="none" stroke="#85905a" strokeOpacity=".75" strokeWidth="9" strokeLinecap="round"/>
   <g className="facets-vines" fill="#68734d" stroke="#b6a36e" strokeWidth="3">
    <path d="M490 655Q450 612 422 583Q464 590 483 627Q492 593 521 584Q519 627 490 655Z"/>
    <path d="M574 621Q548 575 542 544Q576 560 584 597Q600 565 633 568Q617 607 574 621Z"/>
    <path d="M1416 649Q1450 607 1480 579Q1438 586 1420 623Q1410 590 1381 581Q1383 624 1416 649Z"/>
    <path d="M1332 621Q1358 575 1364 544Q1330 560 1322 597Q1306 565 1273 568Q1289 607 1332 621Z"/>
   </g>
   <g fill="#70384b" stroke="#c6a96d" strokeWidth="2">
    {[[453,706],[475,725],[497,709],[482,747],[506,741],[1401,705],[1424,724],[1445,706],[1431,747],[1456,739]].map(([x,y])=><circle key={`${x}-${y}`} cx={x} cy={y} r="12"/>)}
   </g>
   <g className="facets-celebration">
    <path d="M600 718Q633 693 667 718L688 766H582Z" fill="#a28a69" fillOpacity=".42" stroke="#dbc495" strokeOpacity=".5" strokeWidth="3"/>
    <path d="M594 710H673L665 733H603Z" fill="#774052" stroke="#d7bb83" strokeWidth="3"/>
    <Figure x={724} y={775} scale={.7} pose="dance" character="maenad"/>
    <Figure x={1190} y={775} scale={.7} pose="dance" character="maenad"/>
    <g transform="translate(1268 692) rotate(-8)"><ExhibitObject kind="cup" x="-54" y="-62" width="108" height="122"/></g>
   </g>
   <g className="facets-theatre">
    <path d="M1310 505V430Q1310 355 1455 355Q1600 355 1600 430V505" fill="none" stroke="#c5a871" strokeOpacity=".62" strokeWidth="7"/>
    <path d="M1334 500H1576M1355 482V426M1455 482V408M1555 482V426" fill="none" stroke="#d7bf91" strokeOpacity=".38" strokeWidth="5"/>
    <g transform="translate(1435 488) rotate(-8)"><ExhibitObject kind="mask" x="-58" y="-70" width="116" height="140"/></g>
    <g transform="translate(1530 484) rotate(9)" opacity=".9"><ExhibitObject kind="mask" x="-52" y="-64" width="104" height="128"/></g>
   </g>
   <g className="facets-transformation" fill="none" stroke="#928b58" strokeOpacity=".72" strokeWidth="6" strokeLinecap="round">
    <path d="M342 840Q487 900 598 818T832 840M1088 840Q1233 900 1344 818T1578 840"/>
    <path d="M389 846l32-32 28 24 31-45M1490 846l-32-32-28 24-31-45" stroke="#c4a66a"/>
    <path d="M504 844q-12-52 18-88m813 88q12-52-18-88" stroke="#687550" strokeWidth="10"/>
   </g>
  </svg>

  <svg className="facets-layer facets-center" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(1.35)} aria-hidden="true">
   <defs>
    <radialGradient id="facets-halo"><stop stopColor="#ead39f" stopOpacity=".38"/><stop offset=".46" stopColor="#bd8c68" stopOpacity=".17"/><stop offset="1" stopColor="#5c3344" stopOpacity="0"/></radialGradient>
    <linearGradient id="facets-plinth" x1="0" x2="1"><stop stopColor="#5b4849"/><stop offset=".2" stopColor="#c4ad83"/><stop offset=".5" stopColor="#8a725f"/><stop offset=".8" stopColor="#c3a97a"/><stop offset="1" stopColor="#544149"/></linearGradient>
   </defs>
   <ellipse className="facets-light-breath" cx="960" cy="574" rx="430" ry="485" fill="url(#facets-halo)"/>
   <path d="M793 902H1127L1090 936H830Z" fill="url(#facets-plinth)" stroke="#ead6ad" strokeOpacity=".7" strokeWidth="4"/>
   <path d="M830 938H1090V1003H830Z" fill="url(#facets-plinth)" stroke="#ddc79d" strokeOpacity=".65" strokeWidth="4"/>
   <path d="M852 951H1068V991H852Z" fill="none" stroke="#e0c58c" strokeOpacity=".42" strokeWidth="3"/>
   <path d="M804 1003H1116V1029H804Z" fill="#57454a" stroke="#d9c196" strokeOpacity=".58" strokeWidth="4"/>
   <g className="facets-statue">
    <Figure x={960} y={780} scale={1.62} pose="dance" character="dionysus"/>
    <g className="facets-statue-curls" fill="none" stroke="#493a35" strokeWidth="5" strokeLinecap="round">
     <path d="M926 530Q914 514 927 501Q938 493 944 507Q949 516 940 522M994 530Q1006 514 993 501Q982 493 976 507Q971 516 980 522"/>
     <path d="M934 514Q930 501 941 496M986 514Q990 501 979 496" stroke="#d7c09a" strokeOpacity=".64" strokeWidth="2"/>
    </g>
    <g className="facets-wreath" fill="#758052" stroke="#d1b77f" strokeWidth="2.5">
     <path d="M923 527Q940 493 960 492Q980 493 997 527" fill="none" stroke="#b89960" strokeWidth="4"/>
     <path d="M931 515Q914 504 916 490Q932 495 940 509ZM943 502Q930 485 937 474Q950 485 951 498ZM960 495Q949 478 960 466Q972 478 966 495ZM978 502Q990 485 983 474Q970 485 970 498ZM989 515Q1006 504 1004 490Q988 495 980 509Z"/>
     <circle cx="944" cy="507" r="4" fill="#7a3949"/><circle cx="975" cy="507" r="4" fill="#7a3949"/>
    </g>
    <g className="facets-drapery" fill="none" stroke="#e1c995" strokeOpacity=".48" strokeWidth="3" strokeLinecap="round">
     <path d="M936 641Q954 680 946 718Q941 754 956 790M980 646Q963 690 976 725Q990 760 971 805"/>
     <path d="M928 676Q944 690 957 694M987 700Q973 715 961 720M939 757Q955 767 974 766"/>
    </g>
    <path d="M1062 862L1114 528" stroke="#9c7544" strokeWidth="8" strokeLinecap="round"/>
    <path d="M1110 536Q1068 514 1103 478Q1139 511 1110 536Z" fill="#8a7650" stroke="#ddc28a" strokeWidth="4"/>
    <path d="M1088 586Q1043 553 1037 521Q1078 534 1094 569M1126 626Q1175 586 1197 597Q1183 635 1126 646M1074 700Q1033 678 1024 647Q1062 657 1080 688" fill="#6d7950" stroke="#c6ac78" strokeWidth="4"/>
   </g>
  </svg>

  <svg className="facets-layer facets-foreground" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(2.1)} aria-hidden="true">
   <g className="facets-cloth" fill="none" stroke="#9b4357" strokeWidth="11" strokeLinecap="round" opacity=".8">
    <path d="M150 850Q248 793 322 850T474 852M1746 850Q1648 793 1574 850T1422 852"/>
    <path d="M164 875q-24 34-8 66m160-92q26 28 14 56M1756 875q24 34 8 66m-160-92q-26 28-14 56"/>
   </g>
   <g className="facets-leaves" fill="#718050" stroke="#c8b27d" strokeWidth="3">
    <path d="M198 1037Q138 961 159 904Q210 929 220 985Q245 925 294 922Q292 990 230 1030Z"/>
    <path d="M1722 1037Q1782 961 1761 904Q1710 929 1700 985Q1675 925 1626 922Q1628 990 1690 1030Z"/>
    <path d="M317 1042Q280 978 304 946Q350 973 355 1022Q383 982 420 989Q408 1037 360 1052Z"/>
    <path d="M1603 1042Q1640 978 1616 946Q1570 973 1565 1022Q1537 982 1500 989Q1512 1037 1560 1052Z"/>
   </g>
   <g className="facets-dust">{[[350,342],[520,410],[774,310],[1110,345],[1398,390],[1542,540],[382,670],[1502,743],[678,900],[1274,870]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r={i%3===0?4:3}/>)}</g>
  </svg>
 </div>;
}

function BirthScene({parallax}) {
  const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.35}px,0)`});
  return <div className="exhibition-scene ex-birth">
   <svg className="birth-layer birth-background" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.3)} aria-hidden="true">
    <defs>
     <linearGradient id="birth-wall" x2="0" y2="1"><stop stopColor="#211827"/><stop offset=".58" stopColor="#492c43"/><stop offset="1" stopColor="#2b222d"/></linearGradient>
     <linearGradient id="birth-floor" x2="0" y2="1"><stop stopColor="#87745f"/><stop offset=".15" stopColor="#51404a"/><stop offset="1" stopColor="#211827"/></linearGradient>
     <linearGradient id="birth-marble" x1="0" x2="1"><stop stopColor="#5c4a4b"/><stop offset=".22" stopColor="#e9dcc0"/><stop offset=".48" stopColor="#87745f"/><stop offset=".72" stopColor="#c8b58f"/><stop offset="1" stopColor="#59474b"/></linearGradient>
     <linearGradient id="birth-shadow" x2="1"><stop stopColor="#211827"/><stop offset=".48" stopColor="#211827" stopOpacity=".94"/><stop offset=".72" stopColor="#211827" stopOpacity=".55"/><stop offset="1" stopColor="#211827" stopOpacity=".08"/></linearGradient>
     <radialGradient id="birth-heaven"><stop stopColor="#f4dc9e" stopOpacity=".78"/><stop offset=".25" stopColor="#c38f5b" stopOpacity=".35"/><stop offset="1" stopColor="#8c4a61" stopOpacity="0"/></radialGradient>
     <pattern id="birth-meander" width="48" height="22" patternUnits="userSpaceOnUse"><path d="M1 20V2H23V15H8V8H16M25 2H47V20H32V8H40V15" fill="none" stroke="#b79a68" strokeOpacity=".7" strokeWidth="2"/></pattern>
    </defs>
    <rect width="1920" height="1080" fill="url(#birth-wall)"/>
    <path d="M0 0H1920V772H0Z" fill="#211827" opacity=".28"/>
    <ellipse cx="1450" cy="370" rx="720" ry="625" fill="url(#birth-heaven)" className="birth-light-breath"/>
    <path d="M780 0H1920V820H780Z" fill="#492c43" opacity=".24"/>
    <path d="M0 728H1920V1080H0Z" fill="url(#birth-floor)"/>
    <path d="M0 737H1920M0 810H1920M0 930H1920M0 1048H1920M876 737L480 1080M1060 737L850 1080M1270 737L1320 1080M1450 737L1800 1080" fill="none" stroke="#e9dcc0" strokeOpacity=".14" strokeWidth="3"/>
    <path d="M710 0V737M710 0H1860M710 132H1860" fill="none" stroke="#b79a68" strokeOpacity=".32" strokeWidth="5"/>
    <path d="M745 15H1880V39H745Z" fill="url(#birth-meander)" opacity=".72"/>
    <path d="M778 170V715Q778 122 1316 122Q1854 122 1854 715" fill="#211827" fillOpacity=".37" stroke="url(#birth-marble)" strokeWidth="20" opacity=".68"/>
    <path d="M805 713V374Q805 161 1316 160Q1827 161 1827 374V713" fill="none" stroke="#e9dcc0" strokeOpacity=".19" strokeWidth="4"/>
    <g className="birth-palace-columns" fill="url(#birth-marble)" stroke="#e9dcc0" strokeOpacity=".42" strokeWidth="3">
     {[850,1775].map(x=><g key={x}>
      <path d={`M${x-56} 180H${x+56}V214H${x-56}ZM${x-72} 214H${x+72}V239H${x-72}Z`}/>
      <path d={`M${x-43} 239H${x+43}V724H${x-43}Z`}/>
      {[-26,-13,0,13,26].map(dx=><path key={dx} d={`M${x+dx} 250V711`} fill="none" stroke="#f1e4c9" strokeOpacity={dx===0?.28:.12} strokeWidth="3"/>)}
      <path d={`M${x-64} 724H${x+64}V752H${x-64}Z`}/>
     </g>)}
    </g>
    <path d="M0 0H990V1080H0Z" fill="url(#birth-shadow)"/>
    <path d="M730 759H1855" stroke="#b79a68" strokeOpacity=".45" strokeWidth="4"/>
    <path d="M740 779H1840" stroke="#e9dcc0" strokeOpacity=".12" strokeWidth="2"/>
   </svg>

   <svg className="birth-layer birth-myth" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(1)}>
    <defs>
     <radialGradient id="birth-aureole"><stop stopColor="#fff0c4" stopOpacity=".92"/><stop offset=".26" stopColor="#e4bd76" stopOpacity=".48"/><stop offset="1" stopColor="#d2a15e" stopOpacity="0"/></radialGradient>
     <linearGradient id="birth-sash" x1="0" x2="1"><stop stopColor="#87745f"/><stop offset=".38" stopColor="#e9dcc0"/><stop offset=".68" stopColor="#b79a68"/><stop offset="1" stopColor="#6f504e"/></linearGradient>
    </defs>
    <g fill="none" stroke="#dfbd79" strokeLinecap="round">
     <path d="M1100 740Q1240 602 1385 704Q1520 800 1498 580T1575 370" strokeOpacity=".42" strokeWidth="9"/>
     <path d="M1110 748Q1258 621 1380 716Q1496 806 1481 585T1560 385" stroke="#f3d996" strokeOpacity=".34" strokeWidth="3"/>
     <path d="M1140 650L1098 574L1163 598L1181 514L1228 584L1261 510" strokeOpacity=".75" strokeWidth="8"/>
     <path d="M1380 676L1420 602L1441 654L1492 567L1507 634" strokeOpacity=".62" strokeWidth="6"/>
    </g>
    <g className="birth-clouds" fill="#d4b8a0" opacity=".34">
     <path d="M1320 468Q1350 411 1401 448Q1422 378 1481 414Q1525 352 1574 402Q1642 389 1650 456Q1701 461 1704 508H1318Q1284 495 1320 468Z"/>
     <path d="M1050 598Q1081 555 1124 582Q1156 531 1190 572Q1223 524 1268 568Q1319 565 1320 613H1048Z"/>
    </g>
    <g className="birth-thunder" fill="none" stroke="#f4d893" strokeLinecap="round" strokeLinejoin="round">
     <path d="M1054 428L1018 507L1065 491L1038 558" strokeWidth="7" strokeOpacity=".8"/>
     <path d="M1402 480L1371 541L1416 527L1395 583" strokeWidth="6" strokeOpacity=".66"/>
     <path d="M1172 380L1150 426L1182 417" strokeWidth="4" strokeOpacity=".55"/>
    </g>
    <ellipse cx="1530" cy="360" rx="260" ry="240" fill="url(#birth-aureole)" className="birth-light-breath"/>
    <g className="birth-rays" transform="translate(1530 360)" stroke="#f1d59a" strokeOpacity=".55" strokeWidth="4">
     {Array.from({length:16},(_,i)=><path key={i} d="M0-142V-198" transform={`rotate(${i*22.5})`}/>)}
    </g>
    <Figure x={950} y={930} scale={1.35} character="semele"/>
    <Figure x={1275} y={930} scale={1.72} pose="dance" character="zeus"/>
    <g transform="translate(1530 354)">
     <ellipse cy="134" rx="106" ry="28" fill="#211827" opacity=".3"/>
     <path d="M-83 82Q-50 37 0 51Q48 35 82 78Q75 143 0 169Q-72 144-83 82Z" fill="url(#birth-sash)" stroke="#f0dfbd" strokeWidth="5"/>
     <path d="M-72 94Q-17 127 0 65Q23 128 72 91M-54 126Q0 156 54 123" fill="none" stroke="#87745f" strokeWidth="5"/>
     <circle cy="20" r="44" fill="#e9dcc0" stroke="#b79a68" strokeWidth="5"/>
     <path d="M-27 9Q-14-2-2 10M5 10Q18-2 30 9M-14 31Q0 38 14 31" fill="none" stroke="#5b4845" strokeWidth="4" strokeLinecap="round"/>
     <path d="M-19-15Q0-34 20-14" fill="none" stroke="#b79a68" strokeWidth="4"/>
    </g>
    <path d="M1410 496Q1336 637 1300 814Q1284 867 1254 906" fill="none" stroke="#b79a68" strokeOpacity=".83" strokeWidth="11"/>
    <path d="M1420 493Q1349 644 1314 812Q1298 866 1264 901" fill="none" stroke="#f4db9d" strokeOpacity=".62" strokeWidth="3"/>
    <ellipse cx="1268" cy="884" rx="72" ry="37" fill="url(#birth-aureole)" className="birth-light-breath"/>
    <path d="M1202 873Q1265 825 1332 873Q1320 922 1265 930Q1214 922 1202 873Z" fill="none" stroke="#d7b575" strokeWidth="6"/>
    <path d="M1218 880Q1267 844 1316 880Q1303 910 1267 916Q1231 911 1218 880Z" fill="none" stroke="#f1d59a" strokeOpacity=".7" strokeWidth="3"/>
    <circle cx="1267" cy="881" r="11" fill="#fff0c4"/>
   </svg>
   <svg className="birth-layer birth-foreground" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(2.4)} aria-hidden="true">
    <defs><linearGradient id="birth-foreground-cloth" x1="0" x2="1"><stop stopColor="#87745f"/><stop offset=".42" stopColor="#e9dcc0"/><stop offset=".72" stopColor="#b79a68"/><stop offset="1" stopColor="#6f504e"/></linearGradient></defs>
    <g className="birth-drapery" fill="url(#birth-foreground-cloth)" stroke="#e9dcc0" strokeOpacity=".36" strokeWidth="3">
     <path d="M736 900Q869 798 1020 866Q1129 914 1197 998L1135 1080H750Q826 1008 736 900Z" opacity=".56"/>
     <path d="M1530 890Q1660 828 1778 908L1920 1043V1080H1575Q1646 1000 1530 890Z" opacity=".48"/>
    </g>
    <path d="M0 1000Q252 936 506 1000T1008 1000T1510 1000T2012 1000" fill="none" stroke="#b79a68" strokeOpacity=".55" strokeWidth="5"/>
    <g fill="#72754a" stroke="#b79a68" strokeWidth="3" opacity=".8">
     <path d="M818 1005Q768 950 790 907Q833 933 839 987Q869 938 907 946Q899 995 842 1019Z"/>
     <path d="M1818 1013Q1862 955 1838 914Q1796 941 1790 994Q1760 944 1722 952Q1730 1001 1787 1024Z"/>
    </g>
   </svg>
  </div>;
}

function NisaScene({parallax}) {
  const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.35}px,0)`});
  return <div className="exhibition-scene ex-nisa">
   <svg className="nisa-layer nisa-distance" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.3)} aria-hidden="true">
    <defs>
     <linearGradient id="nisa-sky" x2="0" y2="1"><stop stopColor="#211827"/><stop offset=".46" stopColor="#492c43"/><stop offset="1" stopColor="#87745f"/></linearGradient>
     <linearGradient id="nisa-mountain" x2="0" y2="1"><stop stopColor="#554451"/><stop offset="1" stopColor="#332b38"/></linearGradient>
     <linearGradient id="nisa-far-water" x2="0" y2="1"><stop stopColor="#b79a68" stopOpacity=".7"/><stop offset="1" stopColor="#899078" stopOpacity=".36"/></linearGradient>
     <radialGradient id="nisa-dusk"><stop stopColor="#d6b77c" stopOpacity=".3"/><stop offset="1" stopColor="#d6b77c" stopOpacity="0"/></radialGradient>
     <linearGradient id="nisa-reading-shade" x2="1"><stop stopColor="#17141d" stopOpacity=".97"/><stop offset=".62" stopColor="#211827" stopOpacity=".91"/><stop offset="1" stopColor="#211827" stopOpacity="0"/></linearGradient>
    </defs>
    <rect width="1920" height="1080" fill="url(#nisa-sky)"/>
    <ellipse cx="1450" cy="370" rx="790" ry="640" fill="url(#nisa-dusk)"/>
    <path d="M575 612L786 405L900 480L1081 273L1192 391L1392 212L1576 425L1705 319L1920 496V830H575Z" fill="url(#nisa-mountain)"/>
    <path d="M1036 323L1081 273L1122 317L1094 306L1078 312L1060 300Z M1346 266L1392 212L1445 279L1405 254L1385 262L1368 246Z M1667 365L1705 319L1747 364L1710 347Z" fill="#d9c8a9" opacity=".38"/>
    <path d="M605 648Q800 556 962 614T1261 591T1571 627T1920 568V890H605Z" fill="#41443b"/>
    <path d="M615 723Q793 633 971 682T1281 650T1574 698T1920 629" fill="none" stroke="#72754a" strokeOpacity=".56" strokeWidth="25"/>
    <path d="M0 0H1070V1080H0Z" fill="url(#nisa-reading-shade)"/>
    <path d="M875 0H1920" stroke="#b79a68" strokeOpacity=".35" strokeWidth="2"/>
    <g fill="#211827" opacity=".84">
     <path d="M970 724Q910 551 939 404Q872 317 896 197Q912 291 963 328Q989 233 1048 151Q1010 270 1010 347Q1074 266 1158 226Q1079 323 1038 402Q1063 572 1093 726Z"/>
     <path d="M1780 682Q1738 496 1772 344Q1711 257 1736 140Q1752 229 1791 265Q1826 164 1896 100Q1845 218 1846 292Q1883 249 1920 232V720Z"/>
    </g>
    <g fill="none" stroke="#72754a" strokeLinecap="round" opacity=".8">
     <path d="M974 409Q881 345 864 261M1007 373Q1093 314 1128 258M1794 325Q1700 266 1694 200M1843 294Q1902 243 1924 193" strokeWidth="13"/>
    </g>
    <g fill="#72754a" opacity=".62">
     <path d="M854 278Q827 246 840 220Q870 236 873 264Q895 239 920 244Q915 276 877 282Z"/>
     <path d="M1103 285Q1091 249 1110 231Q1132 255 1120 279Q1149 264 1168 280Q1147 304 1119 292Z"/>
     <path d="M1680 229Q1656 198 1672 174Q1700 195 1697 219Q1722 194 1745 205Q1727 237 1696 232Z"/>
    </g>
    <path d="M0 790Q190 764 356 789T704 781T1040 799T1368 777T1689 796T2020 771V1080H0Z" fill="#302b32"/>
    <path d="M0 0H1920V1080H0Z" fill="none"/>
   </svg>

   <svg className="nisa-layer nisa-garden" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.8)} aria-hidden="true">
    <defs>
     <linearGradient id="nisa-stone" x1="0" x2="1"><stop stopColor="#51434a"/><stop offset=".26" stopColor="#b29a76"/><stop offset=".53" stopColor="#766456"/><stop offset=".8" stopColor="#c0a980"/><stop offset="1" stopColor="#51434a"/></linearGradient>
     <linearGradient id="nisa-river" x2="0" y2="1"><stop stopColor="#c8b17f" stopOpacity=".78"/><stop offset=".4" stopColor="#7b8770" stopOpacity=".65"/><stop offset="1" stopColor="#39434a" stopOpacity=".5"/></linearGradient>
     <linearGradient id="nisa-waterfall" x2="0" y2="1"><stop stopColor="#e9dcc0" stopOpacity=".12"/><stop offset=".45" stopColor="#e9dcc0" stopOpacity=".78"/><stop offset="1" stopColor="#b79a68" stopOpacity=".24"/></linearGradient>
    </defs>
    <path d="M1460 447Q1532 415 1604 452L1575 714Q1535 754 1490 716Z" fill="#7c7265" opacity=".7"/>
    <path d="M1490 426Q1533 408 1570 430L1556 715H1502Z" fill="url(#nisa-waterfall)" className="nisa-waterfall"/>
    <path d="M1503 466Q1524 534 1510 627M1531 449Q1550 534 1537 645M1554 458Q1571 519 1557 614" fill="none" stroke="#f1e4c9" strokeOpacity=".6" strokeWidth="5" className="nisa-water-thread"/>
    <path d="M1467 706Q1540 681 1616 713L1662 751Q1554 773 1450 744Z" fill="#87745f"/>
    <path d="M890 753Q1047 688 1207 736T1510 735T1920 695V1080H890Z" fill="url(#nisa-river)" opacity=".68"/>
    <path d="M859 795Q1020 751 1159 791T1437 789T1721 766" fill="none" stroke="#e9dcc0" strokeOpacity=".45" strokeWidth="6" className="nisa-water-ripple"/>
    <path d="M924 834Q1086 794 1215 827T1487 825T1761 801" fill="none" stroke="#b79a68" strokeOpacity=".38" strokeWidth="4" className="nisa-water-ripple"/>
    <path d="M890 739Q1000 719 1090 747T1285 741M1573 753Q1688 719 1804 748T1974 731" fill="none" stroke="#72754a" strokeWidth="28" strokeLinecap="round" opacity=".88"/>

    <g className="nisa-sanctuary" opacity=".76">
     <path d="M1600 478L1690 414L1780 478Z" fill="#87745f" stroke="#c1aa78" strokeWidth="4"/>
     <path d="M1610 479H1770V500H1610ZM1602 627H1782V647H1602Z" fill="url(#nisa-stone)" stroke="#d7c49b" strokeOpacity=".55" strokeWidth="3"/>
     {[1634,1673,1712,1751].map(x=><g key={x}>
      <path d={`M${x-10} 500H${x+10}V620H${x-10}Z`} fill="url(#nisa-stone)"/>
      <path d={`M${x-15} 494H${x+15}V502H${x-15}ZM${x-14} 620H${x+14}V629H${x-14}Z`} fill="#c6ad83"/>
     </g>)}
     <path d="M1590 646H1794" stroke="#b79a68" strokeWidth="6"/>
    </g>
    <path d="M1130 826Q1192 755 1283 805Q1321 830 1300 860H1118Z" fill="#87745f" stroke="#b79a68" strokeOpacity=".72" strokeWidth="4"/>
    <path d="M1161 820Q1196 771 1248 804Q1267 819 1265 836H1150Z" fill="#211827" opacity=".7"/>
    <path d="M1128 824Q1213 801 1302 828" fill="none" stroke="#e9dcc0" strokeOpacity=".65" strokeWidth="4"/>
    <path d="M1250 813Q1274 786 1302 793Q1324 810 1302 828" fill="none" stroke="#e9dcc0" strokeOpacity=".45" strokeWidth="4"/>

    <g fill="#72754a" stroke="#b79a68" strokeOpacity=".7" strokeWidth="3">
     <path d="M1023 804Q972 748 995 703Q1040 729 1047 781Q1078 728 1116 740Q1105 790 1050 819Z"/>
     <path d="M1380 806Q1432 748 1409 706Q1366 734 1358 784Q1327 734 1289 744Q1300 794 1355 821Z"/>
     <path d="M1768 802Q1717 748 1738 706Q1781 731 1790 783Q1820 733 1859 744Q1849 795 1794 820Z"/>
    </g>
    <g fill="#75434f" stroke="#c6a66f" strokeWidth="2">
     <path d="M1080 854Q1090 829 1100 854Q1090 871 1080 854ZM1418 860Q1428 833 1438 860Q1428 878 1418 860ZM1820 848Q1830 823 1840 848Q1830 867 1820 848Z"/>
    </g>
    <g className="nisa-animals" fill="#332c31" stroke="#b79a68" strokeOpacity=".42" strokeWidth="3">
     <path d="M1002 736Q1017 708 1055 714L1080 731L1075 747L1052 747L1044 777H1035L1033 747H1018L1010 773H1001L1005 744Z"/>
     <path d="M1008 717L1004 699L1018 711M1055 716L1060 699L1068 718"/>
     <path d="M1822 690Q1841 668 1861 686L1877 680L1886 689L1876 700L1874 728H1867L1865 703L1844 705L1838 729H1830L1833 701Z"/>
    </g>
    <g className="nisa-birds" fill="none" stroke="#d8c6a0" strokeOpacity=".66" strokeWidth="3">
     <path d="M1230 315Q1246 299 1262 315Q1278 299 1294 315M1352 355Q1365 344 1378 355Q1391 344 1404 355"/>
    </g>
   </svg>

   <svg className="nisa-layer nisa-figures" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(1.35)} aria-hidden="true">
    <defs>
     <linearGradient id="ex-stone"><stop stopColor="#776353"/><stop offset=".24" stopColor="#d3bd91"/><stop offset=".48" stopColor="#a38c6a"/><stop offset="1" stopColor="#675345"/></linearGradient>
     <radialGradient id="nisa-character-light"><stop stopColor="#e9d39f" stopOpacity=".43"/><stop offset="1" stopColor="#e9d39f" stopOpacity="0"/></radialGradient>
    </defs>
    <ellipse cx="1330" cy="724" rx="350" ry="290" fill="url(#nisa-character-light)"/>
    <path d="M1096 868Q1215 837 1326 860T1555 852" fill="none" stroke="#b79a68" strokeOpacity=".53" strokeWidth="5"/>
    <Figure x={1110} y={890} scale={1.2} character="nymph"/>
    <Figure x={1535} y={884} scale={1.16} character="nymph"/>
    <Figure x={1322} y={858} scale={.9} character="dionysus" child/>
    <g fill="none" stroke="#b79a68" strokeOpacity=".8" strokeWidth="3">
     <path d="M1073 653Q1103 625 1122 649M1476 647Q1500 618 1528 641"/>
     <path d="M1100 860Q1120 831 1139 858M1484 854Q1506 826 1525 851"/>
    </g>
    <g fill="#72754a" stroke="#b79a68" strokeWidth="2">
     <path d="M1237 820Q1208 796 1217 777Q1242 791 1244 812Q1264 790 1281 799Q1274 822 1247 828Z"/>
     <path d="M1398 831Q1423 806 1412 786Q1389 799 1387 820Q1366 800 1347 809Q1355 834 1387 838Z"/>
    </g>
   </svg>

   <svg className="nisa-layer nisa-foreground" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(2.2)} aria-hidden="true">
    <g fill="none" stroke="#72754a" strokeWidth="12" strokeLinecap="round">
     <path d="M1910 1088Q1744 974 1817 844T1747 651Q1716 579 1761 482"/>
     <path d="M1924 930Q1818 874 1839 771T1790 638"/>
     <path d="M1093 1085Q1004 1001 1044 923T1012 827"/>
    </g>
    <g className="nisa-sway-leaf" transform="translate(1812 848) rotate(-22)">
     <path d="M0 0Q-71-47-51-111Q-12-88 0-156Q42-101 82-128Q89-53 0 0Z" fill="#72754a" stroke="#d2bd8c" strokeWidth="4"/>
     <path d="M0 0Q-3-63 0-145M0-57L-37-91M2-84L49-113" fill="none" stroke="#d8c6a0" strokeOpacity=".7" strokeWidth="3"/>
    </g>
    <g className="nisa-sway-leaf" transform="translate(1740 674) rotate(25) scale(.8)">
     <path d="M0 0Q-71-47-51-111Q-12-88 0-156Q42-101 82-128Q89-53 0 0Z" fill="#72754a" stroke="#d2bd8c" strokeWidth="4"/>
     <path d="M0 0Q-3-63 0-145M0-57L-37-91M2-84L49-113" fill="none" stroke="#d8c6a0" strokeOpacity=".7" strokeWidth="3"/>
    </g>
    <g fill="#b79a68">
     {[[1148,495,4],[1260,420,3],[1450,501,3],[1570,357,3],[1680,569,4],[1008,592,3],[1380,335,2.5],[1618,420,2.5]].map(([x,y,r],i)=><circle key={i} className="nisa-firefly" cx={x} cy={y} r={r} style={{animationDelay:`${i*-.9}s`}}/>)}
    </g>
    <g fill="none" stroke="#b79a68" strokeOpacity=".62" strokeWidth="3">
     <path d="M1646 1014Q1674 986 1702 1014T1758 1014M1784 1047Q1808 1025 1832 1047T1880 1047"/>
    </g>
   </svg>
  </div>;
}

function FamilyMural({parallax}) {
  const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.35}px,0)`});
  return <div className="exhibition-scene ex-family-mural">
   <svg className="family-mural-layer family-mural-architecture" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.3)} aria-hidden="true">
    <defs>
     <linearGradient id="family-wall" x2="0" y2="1"><stop stopColor="#211827"/><stop offset=".48" stopColor="#382938"/><stop offset="1" stopColor="#211827"/></linearGradient>
     <linearGradient id="family-stone" x1="0" x2="1"><stop stopColor="#514149"/><stop offset=".2" stopColor="#d0bb92"/><stop offset=".46" stopColor="#87745f"/><stop offset=".75" stopColor="#c8b18a"/><stop offset="1" stopColor="#493a40"/></linearGradient>
     <linearGradient id="family-gold" x1="0" x2="1"><stop stopColor="#6d553c"/><stop offset=".48" stopColor="#d2b778"/><stop offset="1" stopColor="#806244"/></linearGradient>
     <linearGradient id="family-lower-shade" x2="0" y2="1"><stop stopColor="#211827" stopOpacity="0"/><stop offset=".15" stopColor="#211827" stopOpacity=".84"/><stop offset="1" stopColor="#211827" stopOpacity=".98"/></linearGradient>
     <pattern id="family-meander" width="48" height="22" patternUnits="userSpaceOnUse"><path d="M1 20V2H23V15H8V8H16M25 2H47V20H32V8H40V15" fill="none" stroke="#b79a68" strokeOpacity=".64" strokeWidth="2"/></pattern>
     <radialGradient id="family-medallion"><stop stopColor="#806d5d"/><stop offset=".8" stopColor="#3b2b36"/><stop offset="1" stopColor="#211827"/></radialGradient>
    </defs>
    <rect width="1920" height="1080" fill="url(#family-wall)"/>
    <path d="M95 228H1825V1020H95Z" fill="#211827" fillOpacity=".42" stroke="url(#family-stone)" strokeWidth="20"/>
    <path d="M123 249H1797V992H123Z" fill="none" stroke="#d7c49b" strokeOpacity=".28" strokeWidth="3"/>
    <path d="M148 258H1772V284H148Z" fill="url(#family-meander)" opacity=".72"/>
    <path d="M147 1004H1773V1030H147Z" fill="url(#family-meander)" opacity=".48"/>
    <g className="family-mural-pilasters" fill="url(#family-stone)" stroke="#e9dcc0" strokeOpacity=".35" strokeWidth="3">
     {[143,1777].map(x=><g key={x}>
      <path d={`M${x-48} 240H${x+48}V270H${x-48}ZM${x-63} 270H${x+63}V293H${x-63}Z`}/>
      <path d={`M${x-34} 293H${x+34}V936H${x-34}Z`}/>
      {[-20,-10,0,10,20].map(dx=><path key={dx} d={`M${x+dx} 305V924`} fill="none" stroke="#fff0d0" strokeOpacity={dx===0?.19:.09} strokeWidth="2"/>)}
      <path d={`M${x-57} 936H${x+57}V964H${x-57}Z`}/>
     </g>)}
    </g>
    <path d="M225 232H1695" stroke="#b79a68" strokeOpacity=".26" strokeWidth="3"/>
    <path d="M230 744H1690" stroke="#b79a68" strokeOpacity=".42" strokeWidth="4"/>
    <path d="M122 756H1798V1040H122Z" fill="url(#family-lower-shade)"/>
    <g fill="none" stroke="url(#family-gold)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
     <path d="M633 433Q608 496 705 546Q797 590 905 636"/>
     <path d="M456 682Q628 770 895 667"/>
     <path d="M995 662Q1142 768 1458 681"/>
     <path d="M748 358Q963 278 1172 357" strokeOpacity=".72"/>
    </g>
    <g className="family-relief-branches" fill="none" stroke="#72754a" strokeWidth="7" strokeLinecap="round">
     <path d="M528 444Q495 378 538 330Q570 294 618 288M1389 440Q1425 375 1382 328Q1350 291 1304 288M626 721Q550 756 501 799M1307 722Q1380 758 1420 798"/>
    </g>
    <g className="family-marriage-mark" fill="none" stroke="#d1b778" strokeWidth="4">
     <circle cx="903" cy="301" r="13"/><circle cx="960" cy="301" r="13"/><circle cx="1017" cy="301" r="13"/>
     <path d="M927 301H993"/>
    </g>
    <g className="family-connection-labels" textAnchor="middle" fill="#d9c18f">
     <text x="690" y="520">PADRE</text><text x="700" y="735">MADRE</text><text x="960" y="330">ESPOSOS</text><text x="1220" y="665">PAREJA</text>
    </g>
    <g className="family-descendant-vine" fill="#72754a" stroke="#b79a68" strokeWidth="2">
     <path d="M960 714Q926 684 941 661Q966 676 970 704Q991 679 1012 687Q1004 713 975 722Z"/>
     <path d="M391 700Q360 672 374 650Q398 663 402 690Q425 665 444 674Q437 700 407 707Z"/>
     <path d="M1465 703Q1436 675 1450 653Q1474 667 1478 694Q1501 669 1520 678Q1513 704 1483 711Z"/>
    </g>
   </svg>

   <svg className="family-mural-layer family-mural-portraits" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(1.05)} aria-hidden="true">
    <defs>
     <linearGradient id="ex-stone"><stop stopColor="#776353"/><stop offset=".24" stopColor="#d3bd91"/><stop offset=".48" stopColor="#a38c6a"/><stop offset="1" stopColor="#675345"/></linearGradient>
     <radialGradient id="family-profile-light"><stop stopColor="#e9d39f" stopOpacity=".34"/><stop offset="1" stopColor="#e9d39f" stopOpacity="0"/></radialGradient>
     <clipPath id="family-zeus-clip"><circle cx="633" cy="385" r="105"/></clipPath>
     <clipPath id="family-hera-clip"><circle cx="1287" cy="385" r="105"/></clipPath>
     <clipPath id="family-semele-clip"><circle cx="456" cy="610" r="106"/></clipPath>
     <clipPath id="family-dionysus-clip"><circle cx="960" cy="598" r="138"/></clipPath>
     <clipPath id="family-ariadne-clip"><circle cx="1464" cy="610" r="106"/></clipPath>
    </defs>
    {[[633,385,105],[1287,385,105],[456,610,106],[960,598,138],[1464,610,106]].map(([x,y,r],i)=><g key={x}>
     <circle cx={x} cy={y} r={r+20} fill="#211827" stroke="url(#family-gold)" strokeWidth="7" className="family-medallion-light" style={{animationDelay:`${i*.6}s`}}/>
     <circle cx={x} cy={y} r={r+9} fill="none" stroke="#e9dcc0" strokeOpacity=".42" strokeWidth="2"/>
     <circle cx={x} cy={y} r={r} fill="url(#family-medallion)"/>
    </g>)}
    <g clipPath="url(#family-zeus-clip)"><ellipse cx="633" cy="382" rx="100" ry="130" fill="url(#family-profile-light)"/><Figure x={633} y={461} scale={.75} character="zeus"/></g>
    <g clipPath="url(#family-hera-clip)"><ellipse cx="1287" cy="382" rx="100" ry="130" fill="url(#family-profile-light)"/><Figure x={1287} y={461} scale={.75} character="hera"/></g>
    <g clipPath="url(#family-semele-clip)"><ellipse cx="456" cy="606" rx="100" ry="130" fill="url(#family-profile-light)"/><Figure x={456} y={690} scale={.74} character="semele"/></g>
    <g clipPath="url(#family-dionysus-clip)"><ellipse cx="960" cy="594" rx="130" ry="165" fill="url(#family-profile-light)"/><Figure x={960} y={704} scale={.92} character="dionysus"/></g>
    <g clipPath="url(#family-ariadne-clip)"><ellipse cx="1464" cy="606" rx="100" ry="130" fill="url(#family-profile-light)"/><Figure x={1464} y={690} scale={.74} character="ariadne"/></g>
    <path d="M710 340L680 382H700L688 414L723 371H704Z" fill="#b79a68" stroke="#e9dcc0" strokeOpacity=".7" strokeWidth="2"/>
    <g className="family-name-inscriptions" textAnchor="middle" fill="#eadcc0">
     <text x="633" y="520">ZEUS</text><text x="1287" y="520">HERA</text>
     <text x="456" y="742">SÉMELE</text><text x="960" y="440" className="family-name-dionysus">DIONISO</text><text x="1464" y="742">ARIADNA</text>
    </g>
    <g className="family-portrait-ornaments" fill="#b79a68">
     <path d="M633 245l8 13-8 13-8-13ZM1287 245l8 13-8 13-8-13ZM456 468l8 13-8 13-8-13ZM1464 468l8 13-8 13-8-13Z"/>
    </g>
   </svg>

   <svg className="family-mural-layer family-mural-foreground" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(2.2)} aria-hidden="true">
    <g fill="none" stroke="#72754a" strokeWidth="10" strokeLinecap="round">
     <path d="M4 1080Q155 969 109 836T165 650Q190 579 150 499"/>
     <path d="M1910 1080Q1766 973 1816 845T1762 658"/>
    </g>
    <g className="family-vine-leaf" transform="translate(126 838) rotate(-23)">
     <path d="M0 0Q-62-42-45-100Q-11-79 0-139Q37-89 72-114Q77-47 0 0Z" fill="#72754a" stroke="#d2bd8c" strokeWidth="4"/>
     <path d="M0 0Q-3-57 0-130M0-51L-33-83M2-76L44-101" fill="none" stroke="#d8c6a0" strokeOpacity=".7" strokeWidth="3"/>
    </g>
    <g className="family-vine-leaf" transform="translate(1800 841) rotate(26) scale(.8)">
     <path d="M0 0Q-62-42-45-100Q-11-79 0-139Q37-89 72-114Q77-47 0 0Z" fill="#72754a" stroke="#d2bd8c" strokeWidth="4"/>
     <path d="M0 0Q-3-57 0-130M0-51L-33-83M2-76L44-101" fill="none" stroke="#d8c6a0" strokeOpacity=".7" strokeWidth="3"/>
    </g>
    <g className="family-particles" fill="#f1d8a4">
     {[[767,427],[1081,420],[561,556],[1360,552],[810,687],[1100,692]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r={i%2?2.5:3.5} style={{animationDelay:`${i*-1.1}s`}}/>)}
    </g>
   </svg>
  </div>;
}

function SocietyCitizen({x,y,scale=1,female=false,pose=0,garment='#e9dcc0'}) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
   <path d="M-12-52Q0-60 12-52L26-5Q3 4-25-5Z" fill={garment} stroke="#b79a68" strokeWidth="2"/>
   <path d="M-9-53Q-12-72 0-77Q14-74 11-52Z" fill="#b68e70"/>
   {female ? <>
    <path d="M-14-67Q-19-93 0-96Q20-94 15-66L13-48Q5-55 4-70Q-3-58-12-57Z" fill="#33232a"/>
    <path d="M-13-72Q-6-82 1-77Q6-72 13-75M-13-63Q-8-59-11-51M13-64Q8-58 12-50" fill="none" stroke="#6b4935" strokeWidth="4" strokeLinecap="round"/>
    <path d="M-13-89Q-1-103 13-89" fill="none" stroke="#b79a68" strokeWidth="3"/>
    <path d="M10-55Q18-43 13-30" fill="none" stroke="#33232a" strokeWidth="5" strokeLinecap="round"/>
   </> : <>
    <path d="M-13-68Q-17-88 0-91Q18-87 13-68L8-61L-8-61Z" fill="#30232b"/>
    <path d="M-12-75Q-7-80-2-75M1-78Q6-83 11-77" fill="none" stroke="#6b4935" strokeWidth="4" strokeLinecap="round"/>
   </>}
   <path d={pose%2===0?"M-20-45Q-37-35-43-20M19-45Q33-58 39-66":"M-20-44Q-38-50-42-67M18-45Q38-38 44-23"} fill="none" stroke={garment} strokeWidth="8" strokeLinecap="round"/>
   <path d="M-9-5L-13 25M9-5L15 25" stroke="#4b3840" strokeWidth="8" strokeLinecap="round"/>
  </g>;
}

function SocietyCity({parallax}) {
  const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.35}px,0)`});
  return <div className="exhibition-scene ex-society-city">
   <svg className="society-city-layer society-city-backdrop" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.18)} aria-hidden="true">
    <defs>
     <linearGradient id="society-sky" x2="0" y2="1"><stop stopColor="#211827"/><stop offset=".58" stopColor="#493342"/><stop offset="1" stopColor="#87745f"/></linearGradient>
     <linearGradient id="society-stone" x1="0" x2="1"><stop stopColor="#625146"/><stop offset=".3" stopColor="#c6ad83"/><stop offset=".56" stopColor="#e9dcc0"/><stop offset=".82" stopColor="#947e63"/><stop offset="1" stopColor="#55444a"/></linearGradient>
     <linearGradient id="society-ground" x2="0" y2="1"><stop stopColor="#77654f"/><stop offset=".4" stopColor="#49363c"/><stop offset="1" stopColor="#211827"/></linearGradient>
     <radialGradient id="society-sun"><stop stopColor="#e7c889" stopOpacity=".55"/><stop offset="1" stopColor="#e7c889" stopOpacity="0"/></radialGradient>
    </defs>
    <rect width="1920" height="1080" fill="url(#society-sky)"/>
    <ellipse cx="1170" cy="382" rx="720" ry="410" fill="url(#society-sun)"/>
    <path d="M0 560L180 390L330 535L520 350L690 535L865 378L1030 535L1240 322L1408 526L1594 350L1780 520L1920 397V730H0Z" fill="#332735" opacity=".8"/>
    <path d="M0 585L250 462L430 565L620 426L810 574L1010 450L1225 572L1435 419L1650 574L1810 460L1920 523V760H0Z" fill="#493941" opacity=".86"/>
    <g fill="#28212d" stroke="#b79a68" strokeOpacity=".17" strokeWidth="4">
     {[80,245,404,584,752,1110,1284,1770].map((x,i)=><g key={x}>
      <path d={`M${x} 600V${490-i%3*24}L${x+72} ${435-i%3*24}L${x+144} ${490-i%3*24}V600Z`}/>
      <path d={`M${x+23} 600V${520-i%3*24}H${x+46}V600M${x+92} 600V${520-i%3*24}H${x+115}V600`} fill="#493942"/>
     </g>)}
    </g>
    <path d="M0 653H1920V1080H0Z" fill="url(#society-ground)"/>
    <path d="M0 654H1920" stroke="#d3bb90" strokeOpacity=".34" strokeWidth="4"/>
   </svg>

   <svg className="society-city-layer society-city-architecture" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.52)} aria-hidden="true">
    <defs><pattern id="society-meander" width="48" height="22" patternUnits="userSpaceOnUse"><path d="M1 20V2H23V15H8V8H16M25 2H47V20H32V8H40V15" fill="none" stroke="#b79a68" strokeWidth="2"/></pattern></defs>
    {/* Vineyard terraces lead from the edge of the polis toward the sanctuary. */}
    <g fill="none" stroke="#72754a" strokeLinecap="round">
     <path d="M0 575Q220 492 495 560M0 627Q220 542 510 610M0 682Q222 593 525 660" strokeWidth="11"/>
     <path d="M18 574Q180 626 340 541M73 553Q220 610 400 548M0 626Q205 680 443 605" strokeWidth="5" opacity=".72"/>
    </g>
    <g fill="#72754a" stroke="#b79a68" strokeWidth="2">
     {[[70,553],[135,570],[207,580],[286,574],[355,552],[52,615],[156,630],[249,637],[368,620],[430,611]].map(([x,y],i)=><path key={i} d={`M${x} ${y}q-25 -22 -12 -38q20 8 18 29q18 -27 36 -16q-2 22 -33 32Z`}/>)}
    </g>
    <g fill="#5a453f" stroke="#b89f77" strokeWidth="4">
     <path d="M760 555V453L961 354L1162 453V555Z"/>
     <path d="M728 457L961 330L1194 457L1165 470L961 364L757 470Z" fill="url(#society-stone)"/>
     <rect x="749" y="550" width="424" height="18" fill="url(#society-meander)" stroke="none"/>
     {[792,875,1047,1130].map(x=><g key={x}>
      <path d={`M${x} 474H${x+42}V550H${x}Z`} fill="url(#society-stone)"/>
      <path d={`M${x-10} 468H${x+52}V476H${x-10}ZM${x-8} 548H${x+50}V557H${x-8}Z`} fill="#d0bb92"/>
     </g>)}
     <path d="M914 451Q961 389 1008 451V535H914Z" fill="#211827"/>
     <circle cx="961" cy="451" r="20" fill="#b79a68" opacity=".7"/>
     <path d="M946 479Q961 458 976 479L972 518H950Z" fill="#e9dcc0" opacity=".75"/>
    </g>
    {/* Elevated theatre, with seating, stage and a carved proscenium. */}
    <g className="society-theatre" stroke="#d1bb91" strokeOpacity=".58" strokeWidth="5">
     {[340,300,260,220,180,140].map((r,i)=><path key={r} d={`M${1450-r} ${600-i*19}A${r} ${r*.61} 0 0 1 ${1450+r} ${600-i*19}`} fill="none" strokeWidth="12"/> )}
     <path d="M1300 495H1600V607H1300Z" fill="#4a3540"/>
     <path d="M1323 517H1577V586H1323Z" fill="#211827" strokeWidth="3"/>
     {[1340,1408,1476,1544].map(x=><g key={x} fill="url(#society-stone)" strokeWidth="2"><path d={`M${x} 522H${x+14}V584H${x}Z`}/><path d={`M${x-4} 518H${x+18}V524H${x-4}Z`}/></g>)}
     <path d="M1295 496H1605V510H1295Z" fill="url(#society-meander)" stroke="none"/>
    </g>
    {/* Colonnade and domestic façades connect the civic spaces. */}
    <g fill="url(#society-stone)" stroke="#d0bb92" strokeOpacity=".4" strokeWidth="3">
     {[495,605,1250,1700].map((x,i)=><g key={x}>
      <path d={`M${x} 617V${500+i%2*23}H${x+18}V617Z`}/>
      <path d={`M${x-8} ${500+i%2*23}H${x+26}V${508+i%2*23}H${x-8}Z`}/>
     </g>)}
     <path d="M465 505H645V520H465ZM1215 524H1285V539H1215Z"/>
    </g>
    <path d="M0 700H1920" stroke="#c1a77b" strokeOpacity=".38" strokeWidth="5"/>
    {/* Perspective paving lines mark the shared public square. */}
    <g fill="none" stroke="#d3bb90" strokeOpacity=".19" strokeWidth="3">
     <path d="M0 760H1920M0 862H1920M0 1000H1920"/>
     <path d="M210 700L0 1080M520 700L360 1080M820 700L750 1080M1120 700L1150 1080M1420 700L1570 1080M1700 700L1920 1080"/>
    </g>
   </svg>

   <svg className="society-city-layer society-city-life" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(1.05)} aria-hidden="true">
    {/* Citizens prepare offerings, tend vines and gather in the agora. */}
    <g>
     <SocietyCitizen x={103} y={695} scale={.92} female pose={0} garment="#e9dcc0"/>
     <SocietyCitizen x={214} y={722} scale={.78} pose={1} garment="#b79a68"/>
     <SocietyCitizen x={381} y={707} scale={.88} female pose={1} garment="#c2aa80"/>
     <SocietyCitizen x={570} y={742} scale={.92} pose={0} garment="#e9dcc0"/>
     <SocietyCitizen x={700} y={720} scale={.79} female pose={0} garment="#72754a"/>
     <SocietyCitizen x={862} y={725} scale={.78} pose={1} garment="#b79a68"/>
     <SocietyCitizen x={1016} y={726} scale={.85} female pose={1} garment="#e9dcc0"/>
     <SocietyCitizen x={1140} y={743} scale={1.02} pose={0} garment="#72754a"/>
     <SocietyCitizen x={1284} y={710} scale={.9} female pose={0} garment="#b79a68"/>
     <SocietyCitizen x={1455} y={716} scale={.82} pose={1} garment="#e9dcc0"/>
     <SocietyCitizen x={1578} y={738} scale={1.02} female pose={1} garment="#c2aa80"/>
     <SocietyCitizen x={1740} y={711} scale={.86} pose={0} garment="#72754a"/>
    </g>
    <g fill="#762f50" stroke="#d1ad73" strokeWidth="3">
     <path d="M555 693H605L600 747Q580 760 560 747Z"/><path d="M548 691H612V699H548Z"/>
     <path d="M917 706H963L958 757Q939 769 920 757Z"/><path d="M910 704H970V712H910Z"/>
     <path d="M1515 697H1560L1556 746Q1537 760 1518 746Z"/><path d="M1508 695H1567V703H1508Z"/>
    </g>
    <g fill="none" stroke="#d3bb90" strokeOpacity=".48" strokeWidth="4">
     <path d="M470 698Q490 679 510 698M610 709Q630 687 652 706M1215 710Q1237 683 1256 705M1645 704Q1668 679 1687 703"/>
    </g>
    {/* A small procession approaches the sanctuary with a thyrsus and lyre. */}
    <g fill="none" stroke="#b79a68" strokeWidth="5" strokeLinecap="round">
     <path d="M964 690L945 612M1120 691L1146 615"/>
     <path d="M939 618Q952 592 965 618M1134 622Q1151 596 1161 616"/>
    </g>
   </svg>

   <svg className="society-city-layer society-city-foreground" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(1.8)} aria-hidden="true">
    <g className="society-banner" transform="translate(1210 374)">
     <path d="M0 0H82V124L42 103L0 124Z" fill="#492c43" stroke="#b79a68" strokeWidth="4"/>
     <path d="M14 18Q41 38 68 18M41 14V82" fill="none" stroke="#e9dcc0" strokeOpacity=".72" strokeWidth="3"/>
    </g>
    <g className="society-vines" fill="#72754a" stroke="#b79a68" strokeWidth="3">
     <path d="M-24 940Q98 842 190 905T383 890M1530 1048Q1640 900 1736 931T1950 820" fill="none" strokeWidth="12"/>
     <path d="M68 915Q25 874 52 840Q91 859 88 902Q124 863 153 883Q143 919 99 928Z"/>
     <path d="M1780 922Q1740 879 1770 844Q1805 864 1800 908Q1840 867 1868 892Q1856 927 1811 935Z"/>
     <path d="M1660 997Q1625 955 1652 925Q1685 944 1681 983Q1721 944 1748 968Q1737 1003 1691 1010Z"/>
    </g>
    <g className="society-ambience" fill="#f1d8a4">
     {[[332,635],[682,483],[1112,420],[1278,618],[1534,480],[840,585],[421,792],[1390,806]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r={i%3===0?4:2.5} style={{animationDelay:`${i*-1.1}s`}}/>)}
    </g>
   </svg>
  </div>;
}

function FestivalProcession({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.35}px,0)`});
 return <div className="exhibition-scene ex-festival-procession">
  <svg className="festival-layer festival-background" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.18)} aria-hidden="true">
   <defs>
    <linearGradient id="festival-sky" x2="0" y2="1"><stop stopColor="#211827"/><stop offset=".58" stopColor="#493342"/><stop offset="1" stopColor="#87745f"/></linearGradient>
    <linearGradient id="festival-ground" x2="0" y2="1"><stop stopColor="#8c795f"/><stop offset=".42" stopColor="#59434a"/><stop offset="1" stopColor="#211827"/></linearGradient>
    <radialGradient id="festival-light"><stop stopColor="#f0d093" stopOpacity=".55"/><stop offset="1" stopColor="#e2bb79" stopOpacity="0"/></radialGradient>
   </defs>
   <rect width="1920" height="1080" fill="url(#festival-sky)"/>
   <ellipse cx="1450" cy="430" rx="720" ry="500" fill="url(#festival-light)"/>
   <path d="M0 515L210 363L350 493L540 322L710 495L885 358L1050 498L1245 332L1410 496L1615 345L1785 496L1920 390V715H0Z" fill="#302532" opacity=".8"/>
   <path d="M0 555L175 445L360 552L545 405L730 554L935 430L1102 554L1310 410L1514 556L1714 435L1920 535V735H0Z" fill="#493941" opacity=".84"/>
   <path d="M0 654H1920V1080H0Z" fill="url(#festival-ground)"/>
   <g fill="#28212d" stroke="#b79a68" strokeOpacity=".25" strokeWidth="5">
    {[42,220,397,575,752,1116,1294,1472,1650,1828].map((x,i)=><g key={x}>
     <path d={`M${x} 631V${510-i%2*34}L${x+72} ${455-i%2*34}L${x+144} ${510-i%2*34}V631Z`}/>
     <path d={`M${x+26} 631V${544-i%2*34}H${x+51}V631M${x+96} 631V${544-i%2*34}H${x+121}V631`} fill="#493942"/>
    </g>)}
   </g>
   <path d="M0 707H1920M0 796H1920M0 911H1920M0 1055H1920" fill="none" stroke="#d3bb90" strokeOpacity=".2" strokeWidth="4"/>
   <g fill="none" stroke="#d3bb90" strokeOpacity=".14" strokeWidth="3">
    <path d="M180 704L0 1080M470 704L310 1080M760 704L690 1080M1050 704L1090 1080M1340 704L1510 1080M1630 704L1920 1080"/>
   </g>
  </svg>

  <svg className="festival-layer festival-architecture" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.48)} aria-hidden="true">
   <defs>
    <linearGradient id="festival-stone" x1="0" x2="1"><stop stopColor="#5a4944"/><stop offset=".25" stopColor="#d0bb92"/><stop offset=".53" stopColor="#98836a"/><stop offset=".8" stopColor="#e9dcc0"/><stop offset="1" stopColor="#614e4b"/></linearGradient>
    <pattern id="festival-meander" width="48" height="22" patternUnits="userSpaceOnUse"><path d="M1 20V2H23V15H8V8H16M25 2H47V20H32V8H40V15" fill="none" stroke="#b79a68" strokeWidth="2"/></pattern>
   </defs>
   <g className="festival-theatre" fill="none" stroke="#cbb58e" strokeOpacity=".52">
    {[430,380,330,280,230,180,130].map((r,i)=><path key={r} d={`M${1150-r} ${554-i*22}A${r} ${r*.61} 0 0 1 ${1150+r} ${554-i*22}`} strokeWidth="14"/> )}
    <path d="M990 390H1310V557H990Z" fill="#49343f" strokeWidth="5"/><path d="M1014 411H1286V532H1014Z" fill="#211827" strokeWidth="3"/>
    {[1035,1097,1159,1221,1283].map(x=><g key={x} fill="url(#festival-stone)" strokeWidth="2"><path d={`M${x} 420H${x+15}V531H${x}Z`}/><path d={`M${x-5} 414H${x+20}V421H${x-5}Z`}/></g>)}
    <path d="M985 389H1315V406H985Z" fill="url(#festival-meander)" stroke="none"/>
   </g>
   <g stroke="#cdb58b" strokeWidth="5">
    <path d="M1410 546L1640 397L1870 546Z" fill="url(#festival-stone)"/>
    <path d="M1442 551H1838V571H1442Z" fill="#89745d"/>
    {[1480,1565,1715,1800].map(x=><g key={x} fill="url(#festival-stone)"><path d={`M${x} 568H${x+33}V704H${x}Z`}/><path d={`M${x-8} 560H${x+41}V571H${x-8}Z`}/><path d={`M${x-12} 699H${x+45}V711H${x-12}Z`}/></g>)}
    <path d="M1380 710H1900V733H1380Z" fill="#ad9672"/>
    <path d="M1544 521Q1640 462 1736 521V551H1544Z" fill="#211827" strokeWidth="4"/>
    <path d="M1570 704H1699L1687 730H1582Z" fill="#8f7757"/>
    <rect x="1604" y="630" width="60" height="74" fill="url(#festival-stone)"/>
    <rect x="1589" y="618" width="90" height="14" fill="#c4aa7f"/>
   </g>
   <path d="M1336 668H1440L1431 681H1345ZM1345 681H1431V704H1345Z" fill="url(#festival-stone)" stroke="#d0bb92" strokeWidth="3"/>
   <ellipse cx="1388" cy="554" rx="90" ry="118" fill="url(#festival-light)"/>
   <Figure x={1388} y={630} scale={.52} character="dionysus"/>
   <path className="festival-garland" d="M1355 468Q1452 527 1544 468T1732 468T1900 478" fill="none" stroke="#72754a" strokeWidth="12"/>
   <g fill="#72754a" stroke="#c1aa78" strokeWidth="2">
    {[[1412,495],[1474,506],[1538,493],[1602,482],[1668,489],[1734,494],[1800,501],[1860,492]].map(([x,y],i)=><path key={i} d={`M${x} ${y}q-19 -19 -8 -31q16 8 13 25q17 -21 29 -9q-5 18 -28 22Z`}/>)}
   </g>
   <g fill="#e9dcc0" stroke="#b79a68" strokeWidth="2">
    {[[1478,477],[1590,477],[1715,478],[1842,484]].map(([x,y],i)=><g key={i} transform={`translate(${x} ${y})`}>
     <circle cx="0" cy="-7" r="5"/><circle cx="7" cy="0" r="5"/><circle cx="0" cy="7" r="5"/><circle cx="-7" cy="0" r="5"/><circle r="3" fill="#b79a68"/>
    </g>)}
   </g>
   <g fill="#762f50" stroke="#d4b77b" strokeWidth="3">
    <path d="M1387 522H1423L1419 564Q1405 576 1391 564Z"/><path d="M1381 519H1429V526H1381Z"/>
    <path d="M1839 535H1875L1871 577Q1857 589 1843 577Z"/><path d="M1833 532H1881V539H1833Z"/>
   </g>
  </svg>

  <svg className="festival-layer festival-procession" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(1.05)} aria-hidden="true">
   <g>
    <Figure x={185} y={889} scale={.82} pose="dance" character="maenad"/>
    <Figure x={355} y={867} scale={.78} character="silenus"/>
    <Figure x={530} y={891} scale={.87} character="maenad"/>
    <Figure x={710} y={866} scale={.82} character="dionysus"/>
    <Figure x={900} y={894} scale={.92} pose="dance" character="maenad"/>
    <Figure x={1095} y={866} scale={.86} character="silenus"/>
    <Figure x={1280} y={890} scale={.9} pose="dance" character="maenad"/>
    <Figure x={1460} y={859} scale={.84} character="dionysus"/>
   </g>
   <g fill="none" stroke="#72754a" strokeWidth="7" strokeLinecap="round">
    <path d="M188 768L165 655M355 748L381 647M529 772L500 645M710 733L732 626M900 780L875 641M1095 735L1116 620M1280 762L1255 636M1460 729L1486 614"/>
   </g>
   <g fill="#72754a" stroke="#c1aa78" strokeWidth="2">
    {[[165,655],[381,647],[500,645],[732,626],[875,641],[1116,620],[1255,636],[1486,614]].map(([x,y],i)=><g key={i}>
     <path d={`M${x} ${y}q-29 -22 -18 -41q22 9 22 32q22 -27 39 -12q-5 23 -39 28Z`}/>
     <path d={`M${x-3} ${y-25}q-25 -22 -13 -39q20 10 18 32q20 -24 36 -10q-5 21 -36 24Z`}/>
    </g>)}
   </g>
   <g fill="none" stroke="#d5c19d" strokeWidth="5" strokeLinecap="round">
    <path d="M345 785Q375 760 404 785M353 778V825M397 778V825M355 780H395M361 782V822M370 782V825M380 782V825M389 782V822"/>
    <path d="M1070 769L1150 734M1108 753L1098 738M1121 747L1110 732M1134 741L1122 726M1145 736L1135 721"/>
   </g>
   <g fill="#b79a68" stroke="#e9dcc0" strokeWidth="3">
    <ellipse cx="622" cy="801" rx="30" ry="16"/>
    <path d="M592 801Q622 761 652 801M595 803Q622 835 649 803" fill="none"/>
    <circle cx="622" cy="801" r="4" fill="#e9dcc0"/>
   </g>
   <g fill="#762f50" stroke="#d1b987" strokeWidth="4">
    <path d="M257 797H295L291 836H261Z"/><path d="M250 794H302V802H250Z"/>
    <path d="M1200 801H1239L1235 841H1204Z"/><path d="M1193 798H1246V806H1193Z"/>
   </g>
   <g fill="none" stroke="#d1b987" strokeWidth="3">
    <path d="M263 797Q264 774 276 774Q289 774 290 797M1207 801Q1208 778 1220 778Q1233 778 1234 801"/>
   </g>
  </svg>

  <svg className="festival-layer festival-foreground" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(1.8)} aria-hidden="true">
   <g className="festival-banner" transform="translate(704 352)">
    <path d="M0 0H120V181L60 148L0 181Z" fill="#492c43" stroke="#b79a68" strokeWidth="5"/>
    <path d="M22 30Q60 57 98 30M60 22V117" fill="none" stroke="#e9dcc0" strokeOpacity=".8" strokeWidth="4"/>
    <path d="M60 65Q43 50 47 39Q60 47 62 61Q65 47 77 40Q80 52 64 66" fill="#72754a" stroke="#d8c49c" strokeWidth="2"/>
   </g>
   <g className="festival-vines" fill="#72754a" stroke="#c1aa78" strokeWidth="3">
    <path d="M-15 1070Q105 946 241 1003T482 968M1420 1080Q1556 966 1669 1009T1940 924" fill="none" strokeWidth="12"/>
    <path d="M62 1020Q17 981 46 946Q85 965 82 1008Q121 966 150 988Q139 1023 94 1033Z"/>
    <path d="M1778 1003Q1737 961 1764 926Q1800 947 1795 990Q1835 947 1865 970Q1853 1005 1806 1014Z"/>
    <path d="M1600 1047Q1563 1008 1591 974Q1625 993 1620 1033Q1660 993 1688 1016Q1676 1050 1632 1058Z"/>
   </g>
   <g className="festival-particles" fill="#f2dfa9">
    {[[302,612],[563,565],[892,584],[1248,589],[1530,525],[1740,665],[772,654],[1010,667]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r={i%3===0?4:2.5} style={{animationDelay:`${i*-1.2}s`}}/>)}
   </g>
  </svg>
 </div>;
}

function TheatrePanorama({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.35}px,0)`});
 const audienceRows = [
  [510,620,12,8],[470,655,14,9],[420,690,16,10],[365,728,18,11],[305,770,20,12]
 ];
 return <div className="exhibition-scene ex-theatre-panorama">
  <svg className="theatre-layer theatre-architecture" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.18)} aria-hidden="true">
   <defs>
    <linearGradient id="theatre-wall" x2="0" y2="1"><stop stopColor="#211827"/><stop offset=".58" stopColor="#493342"/><stop offset="1" stopColor="#87745f"/></linearGradient>
    <linearGradient id="theatre-marble" x1="0" x2="1"><stop stopColor="#65524a"/><stop offset=".25" stopColor="#d0bb92"/><stop offset=".55" stopColor="#8e7a65"/><stop offset=".82" stopColor="#e9dcc0"/><stop offset="1" stopColor="#53434a"/></linearGradient>
    <radialGradient id="theatre-spot"><stop stopColor="#f3d89e" stopOpacity=".78"/><stop offset=".48" stopColor="#e6c27f" stopOpacity=".25"/><stop offset="1" stopColor="#e6c27f" stopOpacity="0"/></radialGradient>
    <linearGradient id="theatre-floor" x2="0" y2="1"><stop stopColor="#77634f"/><stop offset=".45" stopColor="#493840"/><stop offset="1" stopColor="#211827"/></linearGradient>
    <pattern id="theatre-meander" width="48" height="22" patternUnits="userSpaceOnUse"><path d="M1 20V2H23V15H8V8H16M25 2H47V20H32V8H40V15" fill="none" stroke="#b79a68" strokeWidth="2"/></pattern>
   </defs>
   <rect width="1920" height="1080" fill="url(#theatre-wall)"/>
   <path d="M0 668H1920V1080H0Z" fill="url(#theatre-floor)"/>
   <ellipse cx="1040" cy="650" rx="750" ry="550" fill="url(#theatre-spot)"/>
   <path d="M0 625Q160 383 464 299Q735 222 960 237Q1185 222 1456 299Q1760 383 1920 625V735H0Z" fill="#211827" stroke="#b79a68" strokeOpacity=".38" strokeWidth="8"/>
   <g className="theatre-seats" fill="none" stroke="url(#theatre-marble)" strokeWidth="24">
    {[520,575,630,685,740,795,850,905].map((r,i)=><path key={r} d={`M${960-r} ${600-i*11}A${r} ${r*.77} 0 0 1 ${960+r} ${600-i*11}`} strokeOpacity={.84-i*.045}/>)}
   </g>
   <g fill="#30242e" stroke="#b79a68" strokeOpacity=".38" strokeWidth="6">
    <path d="M610 485V304L960 166L1310 304V485Z"/>
    <path d="M580 313L960 150L1340 313L1306 327L960 178L614 327Z" fill="url(#theatre-marble)"/>
    <path d="M649 470H1271V493H649Z" fill="url(#theatre-meander)" stroke="none"/>
    {[683,810,1110,1237].map(x=><g key={x} fill="url(#theatre-marble)" strokeWidth="3">
     <path d={`M${x} 328H${x+48}V470H${x}Z`}/>
     <path d={`M${x-12} 318H${x+60}V330H${x-12}Z`}/>
     <path d={`M${x-10} 463H${x+58}V477H${x-10}Z`}/>
    </g>)}
    <path d="M860 328Q960 221 1060 328V470H860Z" fill="#211827" stroke="#b79a68" strokeOpacity=".5" strokeWidth="4"/>
    <path d="M886 356Q960 274 1034 356V470H886Z" fill="#392b35" stroke="#b79a68" strokeOpacity=".3" strokeWidth="3"/>
   </g>
   <g fill="none" stroke="#d4bd91" strokeOpacity=".25" strokeWidth="3">
    <path d="M0 690H1920M0 760H1920M0 850H1920M0 970H1920"/>
    <path d="M230 660L0 1080M510 660L365 1080M790 660L725 1080M1130 660L1195 1080M1410 660L1565 1080M1690 660L1920 1080"/>
   </g>
  </svg>

  <svg className="theatre-layer theatre-audience" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.58)} aria-hidden="true">
   <g fill="#493943" stroke="#b79a68" strokeOpacity=".42" strokeWidth="4">
    {audienceRows.map(([radius,y,count,headSize],row)=>Array.from({length:count},(_,i)=>{
     const angle=Math.PI-(i/(count-1))*Math.PI;
     const x=960+Math.cos(angle)*radius;
     const cy=y-Math.sin(angle)*radius*.18;
     return <g key={`${row}-${i}`} transform={`translate(${x} ${cy}) scale(${headSize/12})`}>
      <path d="M-8 7Q0 3 8 7L12 31H-12Z" fill={i%3===0?'#b9a17c':'#65534b'}/>
      <ellipse cy="0" rx="7" ry="9" fill="#d2bd96"/>
      <path d="M-8-2Q-10-12 0-13Q10-12 8-2L5-6Q0-10-4-6Z" fill="#33232a" stroke="#b79a68" strokeWidth="1.3"/>
     </g>;
    }))}
   </g>
   <g fill="none" stroke="#d8c49c" strokeOpacity=".4" strokeWidth="4">
    {[490,550,610,670,730,790].map((r,i)=><path key={r} d={`M${960-r} ${611-i*11}A${r} ${r*.77} 0 0 1 ${960+r} ${611-i*11}`}/>)}
   </g>
  </svg>

  <svg className="theatre-layer theatre-performance" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(1.05)} aria-hidden="true">
   <ellipse cx="960" cy="741" rx="330" ry="194" fill="#b79a68" fillOpacity=".08" stroke="#d7bb8b" strokeOpacity=".66" strokeWidth="7"/>
   <ellipse cx="960" cy="741" rx="286" ry="160" fill="none" stroke="#e9dcc0" strokeOpacity=".24" strokeWidth="3" strokeDasharray="9 12"/>
   <g className="theatre-stage-glow"><ellipse cx="972" cy="675" rx="420" ry="310" fill="url(#theatre-spot)"/></g>
   <g stroke="#d1bb91" strokeWidth="4">
    <path d="M760 540H1168V635H760Z" fill="#49343f"/>
    <path d="M782 558H1146V620H782Z" fill="#211827"/>
    {[802,882,962,1042,1122].map(x=><g key={x} fill="url(#theatre-marble)" strokeWidth="2">
     <path d={`M${x} 566H${x+15}V619H${x}Z`}/><path d={`M${x-5} 561H${x+20}V567H${x-5}Z`}/>
    </g>)}
   </g>
   <path d="M784 539H1144V550H784Z" fill="url(#theatre-meander)"/>
   <g fill="#493943" stroke="#d5c19d" strokeWidth="4">
    <path d="M866 771Q876 722 913 718Q950 722 958 771L979 846H845Z"/>
    <path d="M1007 771Q1015 722 1052 718Q1089 722 1097 771L1118 846H986Z"/>
   </g>
   <g fill="#d1bd98" stroke="#f0ddba" strokeWidth="3">
    <ellipse cx="913" cy="701" rx="19" ry="25"/><ellipse cx="1052" cy="701" rx="19" ry="25"/>
   </g>
   <g fill="#372630" stroke="#d0b77f" strokeWidth="3">
    <path d="M894 694Q894 664 913 663Q932 664 932 694L928 708L913 702L898 708Z"/>
    <path d="M1033 694Q1033 664 1052 663Q1071 664 1071 694L1067 708L1052 702L1037 708Z"/>
   </g>
   <g fill="none" stroke="#d8c49c" strokeWidth="3">
    <path d="M900 694Q913 685 926 694M1039 694Q1052 685 1065 694"/>
    <path d="M905 711Q913 717 921 711M1044 711Q1052 717 1060 711"/>
   </g>
   <g className="theatre-statue" transform="translate(1455 695)">
    <path d="M-73 1H73L63 15H-63ZM-63 15H63V93H-63ZM-82 93H82V111H-82Z" fill="url(#theatre-marble)" stroke="#d6bf96" strokeWidth="3"/>
    <Figure x={0} y={91} scale={.65} character="dionysus"/>
   </g>
   <g className="theatre-curtain theatre-curtain-left">
    <path d="M0 270Q250 350 470 270V800Q230 735 0 810Z" fill="#492c43" stroke="#b79a68" strokeWidth="8"/>
    <path d="M28 310Q222 386 430 316M34 730Q225 670 438 736" fill="none" stroke="#d4b77b" strokeOpacity=".58" strokeWidth="5"/>
   </g>
   <g className="theatre-curtain theatre-curtain-right">
    <path d="M1920 270Q1670 350 1450 270V800Q1690 735 1920 810Z" fill="#492c43" stroke="#b79a68" strokeWidth="8"/>
    <path d="M1892 310Q1698 386 1490 316M1886 730Q1695 670 1482 736" fill="none" stroke="#d4b77b" strokeOpacity=".58" strokeWidth="5"/>
   </g>
  </svg>

  <svg className="theatre-layer theatre-foreground" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(1.8)} aria-hidden="true">
   <g transform="translate(300 782)" className="theatre-mask-tragedy">
    <path d="M-102-118Q0-176 102-118L84 12Q62 89 0 126Q-62 89-84 12Z" fill="url(#theatre-marble)" stroke="#d6bf96" strokeWidth="8"/>
    <path d="M-69-49Q-43-80-17-48M17-48Q43-80 69-49" fill="none" stroke="#3b2b35" strokeWidth="13" strokeLinecap="round"/>
    <path d="M0-27L-14 11H14ZM-45 62Q0 33 45 62" fill="none" stroke="#49343f" strokeWidth="9" strokeLinecap="round"/>
    <path d="M-73-112Q0-143 73-112" fill="none" stroke="#b79a68" strokeWidth="5"/>
   </g>
   <g transform="translate(1632 790)" className="theatre-mask-comedy">
    <path d="M-94-112Q0-170 94-112L80 8Q58 76 0 112Q-58 76-80 8Z" fill="url(#theatre-marble)" stroke="#d6bf96" strokeWidth="8"/>
    <path d="M-64-44Q-42-68-18-43M18-43Q42-68 64-44" fill="none" stroke="#3b2b35" strokeWidth="12" strokeLinecap="round"/>
    <path d="M-43 23Q0 74 43 23Q0 38-43 23Z" fill="#49343f" stroke="#49343f" strokeWidth="5"/>
    <path d="M-69-105Q0-137 69-105" fill="none" stroke="#b79a68" strokeWidth="5"/>
   </g>
   <g className="theatre-olive" fill="#72754a" stroke="#c1aa78" strokeWidth="3">
    <path d="M33 1060Q125 938 202 991T372 943M1545 1080Q1668 944 1744 995T1928 934" fill="none" strokeWidth="12"/>
    <path d="M91 1003Q47 964 72 932Q108 950 104 992Q143 950 172 973Q161 1008 117 1017Z"/>
    <path d="M1778 1004Q1735 960 1765 928Q1802 950 1795 992Q1836 949 1867 974Q1854 1008 1808 1016Z"/>
   </g>
  </svg>
 </div>;
}

function PentheusTragedy({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.35}px,0)`});
 return <div className="exhibition-scene ex-pentheus-tragedy">
  <svg className="pentheus-layer pentheus-stage" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.16)} aria-hidden="true">
   <defs>
    <linearGradient id="pentheus-curtain" x2="0" y2="1"><stop stopColor="#71394d"/><stop offset=".58" stopColor="#492c43"/><stop offset="1" stopColor="#211827"/></linearGradient>
    <linearGradient id="pentheus-mountain" x2="0" y2="1"><stop stopColor="#53404a"/><stop offset="1" stopColor="#25232c"/></linearGradient>
    <linearGradient id="pentheus-floor" x2="0" y2="1"><stop stopColor="#51403c"/><stop offset="1" stopColor="#211827"/></linearGradient>
    <radialGradient id="pentheus-torchlight"><stop stopColor="#e4b66e" stopOpacity=".84"/><stop offset=".45" stopColor="#ad6b49" stopOpacity=".25"/><stop offset="1" stopColor="#ad6b49" stopOpacity="0"/></radialGradient>
    <radialGradient id="pentheus-divine-light"><stop stopColor="#e9d39b" stopOpacity=".64"/><stop offset=".5" stopColor="#b79a68" stopOpacity=".18"/><stop offset="1" stopColor="#b79a68" stopOpacity="0"/></radialGradient>
   </defs>
   <rect width="1920" height="1080" fill="#211827"/>
   <path d="M0 0H1920V692H0Z" fill="#302833"/>
   <path d="M0 490L180 363L292 435L454 265L596 454L770 302L915 481L1070 324L1238 477L1408 277L1557 450L1722 308L1880 442L1920 406V805H0Z" fill="url(#pentheus-mountain)"/>
   <path d="M0 577L151 477L301 560L479 395L628 575L801 417L976 591L1152 432L1308 584L1492 413L1663 574L1836 433L1920 499V835H0Z" fill="#38313a"/>
   <g className="pentheus-mountain-forest" fill="#25252d">
    <path d="M0 730L75 542L122 695L178 497L231 714L302 541L363 735L429 511L486 731L548 564L599 757L676 522L738 747L807 567L865 770L935 520L1004 747L1066 565L1138 744L1206 512L1270 745L1337 546L1400 754L1466 523L1529 740L1604 555L1665 766L1735 525L1800 750L1861 558L1920 708V850H0Z"/>
   </g>
   <path d="M0 670Q245 608 483 676T961 661T1450 678T1920 650V1080H0Z" fill="url(#pentheus-floor)"/>
   <path d="M0 722Q360 676 720 721T1440 712T1920 696M0 910Q400 868 815 906T1585 896T1920 882" fill="none" stroke="#b79a68" strokeOpacity=".2" strokeWidth="5"/>
   <path d="M0 762L1920 951M0 965L1460 1080M415 682L124 1080M1505 682L1842 1080" fill="none" stroke="#b79a68" strokeOpacity=".12" strokeWidth="4"/>
   <g className="pentheus-stage-frame" fill="none" stroke="#9e8261" strokeOpacity=".62">
    <path d="M65 0V748M1855 0V748M88 0H1832" strokeWidth="17"/>
    <path d="M92 0V727M1828 0V727M109 31H1811" stroke="#d0b77f" strokeWidth="4"/>
    <path d="M84 708H1836M95 730H1825" strokeWidth="12"/>
   </g>
   <g className="pentheus-curtains">
    <path d="M0 0H294Q246 153 300 308Q218 453 282 686H0Z" fill="url(#pentheus-curtain)"/>
    <path d="M1920 0H1638Q1687 152 1627 306Q1710 456 1641 688H1920Z" fill="url(#pentheus-curtain)"/>
    <path d="M276 0Q239 151 281 303Q218 459 272 691M1647 0Q1684 150 1640 304Q1706 455 1650 691" fill="none" stroke="#b79a68" strokeWidth="7" strokeOpacity=".72"/>
    <path d="M0 0H294L271 48H0ZM1920 0H1638L1658 48H1920Z" fill="#b79a68" opacity=".8"/>
   </g>
   <g className="pentheus-torches">
    <ellipse cx="626" cy="630" rx="160" ry="176" fill="url(#pentheus-torchlight)"/>
    <ellipse cx="1412" cy="624" rx="156" ry="172" fill="url(#pentheus-torchlight)"/>
    <path d="M622 696L622 556M1407 690L1407 548" stroke="#876044" strokeWidth="15" strokeLinecap="round"/>
    <path className="pentheus-flame" d="M622 558Q582 528 614 465Q621 499 639 507Q662 464 658 440Q714 514 653 561Z" fill="#d29556" stroke="#f0d091" strokeWidth="4"/>
    <path className="pentheus-flame" d="M1407 550Q1368 518 1399 458Q1406 491 1424 500Q1445 458 1442 436Q1498 505 1438 553Z" fill="#d29556" stroke="#f0d091" strokeWidth="4"/>
   </g>
   <ellipse cx="1110" cy="678" rx="360" ry="360" fill="url(#pentheus-divine-light)" className="pentheus-divine-aura"/>
   <path d="M0 754Q420 702 817 751T1590 738T1960 754" fill="none" stroke="#d0b77f" strokeOpacity=".33" strokeWidth="6"/>
  </svg>

  <svg className="pentheus-layer pentheus-actors" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.78)} aria-hidden="true">
   <g className="pentheus-bacchae">
    <Figure x={565} y={866} scale={.8} pose="dance" character="maenad"/>
    <Figure x={742} y={845} scale={.68} pose="dance" character="maenad"/>
    <Figure x={1326} y={850} scale={.74} pose="dance" character="maenad"/>
    <g className="pentheus-agave">
     <Figure x={1483} y={871} scale={.86} pose="dance" character="maenad"/>
     <path d="M1454 703Q1483 680 1511 704" fill="none" stroke="#b79a68" strokeWidth="5"/>
     <path d="M1460 704Q1448 682 1458 671Q1478 682 1476 701M1480 698Q1474 676 1488 665Q1501 683 1495 701M1496 702Q1501 681 1517 682Q1521 700 1508 712" fill="#72754a" stroke="#cfb580" strokeWidth="3"/>
    </g>
   </g>
   <g className="pentheus-tirsi" fill="none" strokeLinecap="round">
    <path d="M551 823L476 614M717 813L795 600M1308 808L1240 595M1492 821L1555 606" stroke="#9b754e" strokeWidth="8"/>
    <g fill="#72754a" stroke="#c1aa78" strokeWidth="3">
     <path d="M476 614Q440 587 458 555Q491 569 485 601Q520 570 544 595Q528 628 491 634Z"/>
     <path d="M795 600Q761 573 780 541Q812 556 806 587Q840 558 864 583Q849 617 811 622Z"/>
     <path d="M1240 595Q1207 570 1225 538Q1257 551 1251 582Q1285 554 1308 580Q1291 612 1257 618Z"/>
    </g>
   </g>
   <g className="pentheus-dionysus">
    <Figure x={1068} y={895} scale={1.42} character="dionysus"/>
    <path d="M1042 646Q1068 619 1094 646M1046 644Q1030 621 1038 608Q1057 617 1058 638M1064 638Q1061 614 1077 603Q1090 623 1080 642M1082 643Q1091 619 1107 622Q1110 641 1096 652" fill="#72754a" stroke="#cfb580" strokeWidth="3"/>
   </g>
   <g className="pentheus-king">
    <path d="M1600 638L1790 638L1844 764L1795 805L1571 794L1540 750Z" fill="#87745f" stroke="#c0a27a" strokeWidth="8"/>
    <path d="M1570 640L1790 640L1812 676L1556 677Z" fill="#d1bb91" stroke="#f0dfc0" strokeWidth="4"/>
    <Figure x={1696} y={842} scale={1.12} character="pentheus"/>
    <path d="M1664 639L1697 604L1730 639L1720 660H1674Z" fill="#b79a68" stroke="#ecd49c" strokeWidth="5"/>
    <path d="M1715 766L1791 673" stroke="#79593e" strokeWidth="12" strokeLinecap="round"/>
    <path d="M1791 673L1810 627L1822 672L1849 692L1803 684Z" fill="#c1aa83" stroke="#e9dcc0" strokeWidth="4" strokeLinejoin="round"/>
   </g>
   <g className="pentheus-veil">
    <path d="M1730 668Q1802 680 1814 735Q1779 748 1746 723Z" fill="#492c43" fillOpacity=".86" stroke="#b79a68" strokeWidth="4"/>
   </g>
   <g className="pentheus-broken-mask" transform="translate(945 967) rotate(-17)">
    <path d="M-50-35Q0-60 48-35L38 19Q28 50 0 59Q-30 47-40 17Z" fill="#87745f" stroke="#d4bd91" strokeWidth="5"/>
    <path d="M-32-14Q-20-26-8-13M13-13Q27-25 37-11M-2-9L-11 13L4 18M-23 32Q0 24 22 33" fill="none" stroke="#211827" strokeWidth="6" strokeLinecap="round"/>
    <path d="M5-51L-3-18L11-8L2 15L13 57" fill="none" stroke="#492c43" strokeWidth="7"/>
    <path d="M-45 30L-65 41L-42 51M38 31L59 42L38 53" fill="none" stroke="#d2bd8e" strokeWidth="4"/>
   </g>
   <g className="pentheus-foreground-vines" fill="none" stroke="#72754a" strokeWidth="10" strokeLinecap="round">
    <path d="M111 1001Q234 939 280 859T376 793M1832 1008Q1749 952 1710 875T1637 819"/>
   </g>
   <g className="pentheus-foreground-leaves" fill="#72754a" stroke="#b79a68" strokeWidth="3">
    <path d="M278 889Q243 861 259 830Q293 847 289 876Q319 847 343 875Q324 908 292 900Z"/>
    <path d="M1708 903Q1673 875 1690 844Q1723 861 1718 891Q1748 860 1773 889Q1753 921 1721 913Z"/>
   </g>
  </svg>

  <svg className="pentheus-layer pentheus-dust" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(1.38)} aria-hidden="true">
   <g fill="#e7c68b" className="pentheus-embers">
    {[[490,572],[640,488],[795,558],[1189,530],[1395,468],[1515,563],[951,732],[1744,575],[362,702],[1255,746]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r={i%3===0?4:2.5} style={{animationDelay:`${i*-1.1}s`}}/>)}
   </g>
   <g className="pentheus-stage-shadow" fill="#211827" opacity=".6">
    <path d="M470 911Q590 881 700 909L676 925Q569 908 486 932ZM1268 918Q1400 885 1536 914L1504 934Q1387 909 1282 940Z"/>
   </g>
  </svg>
 </div>;
}

function DionysusExpedition({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.35}px,0)`});
 const satyr = (x,y,scale,pose='dance') => <g key={`${x}-${y}`}>
  <Figure x={x} y={y} scale={scale} pose={pose} character="silenus"/>
  <path d={`M${x-scale*20} ${y-scale*166}l${-scale*13} ${-scale*22}l${scale*23} ${scale*15}M${x+scale*20} ${y-scale*166}l${scale*13} ${-scale*22}l${-scale*23} ${scale*15}`} fill="#786d66" stroke="#d3bf9b" strokeOpacity=".6" strokeWidth={scale*3} strokeLinejoin="round"/>
 </g>;
 return <div className="exhibition-scene ex-dionysus-expedition">
  <svg className="expedition-layer expedition-land" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.16)} aria-hidden="true">
   <defs>
    <linearGradient id="expedition-sky" x2="0" y2="1"><stop stopColor="#211827"/><stop offset=".45" stopColor="#473342"/><stop offset="1" stopColor="#b08b60"/></linearGradient>
    <linearGradient id="expedition-hill" x2="0" y2="1"><stop stopColor="#70624f"/><stop offset="1" stopColor="#272630"/></linearGradient>
    <linearGradient id="expedition-road" x2="0" y2="1"><stop stopColor="#8c7254"/><stop offset="1" stopColor="#3a3034"/></linearGradient>
    <radialGradient id="expedition-light"><stop stopColor="#eed398" stopOpacity=".72"/><stop offset=".48" stopColor="#c39b61" stopOpacity=".23"/><stop offset="1" stopColor="#b79a68" stopOpacity="0"/></radialGradient>
   </defs>
   <rect width="1920" height="1080" fill="url(#expedition-sky)"/>
   <ellipse cx="1070" cy="465" rx="590" ry="410" fill="url(#expedition-light)"/>
   <path d="M0 614L147 496L272 548L430 370L563 535L726 333L870 559L1022 406L1184 544L1352 345L1508 550L1668 377L1814 535L1920 462V820H0Z" fill="#302b35" opacity=".8"/>
   <path d="M0 677L172 552L326 675L500 486L649 677L818 511L980 677L1157 492L1325 684L1502 503L1680 673L1842 518L1920 584V880H0Z" fill="url(#expedition-hill)"/>
   <path d="M0 743Q282 672 547 744T1060 733T1576 749T1980 726V1080H0Z" fill="#4a4937"/>
   <path d="M0 850Q305 776 649 827T1235 818T1920 804V1080H0Z" fill="#343039"/>
   <path d="M790 1080Q875 942 949 856Q1009 791 1071 743Q1156 677 1222 623L1323 627Q1242 715 1172 779Q1105 842 1046 907Q976 984 933 1080Z" fill="url(#expedition-road)" opacity=".84"/>
   <path d="M867 1080Q924 953 1001 869T1145 715L1212 652" fill="none" stroke="#d2b37a" strokeOpacity=".36" strokeWidth="7"/>
   <g className="expedition-distant-temple" transform="translate(1450 423)" opacity=".74">
    <path d="M-124 78L0 8L124 78Z" fill="#78634d" stroke="#c1a577" strokeWidth="5"/>
    <path d="M-109 82H109V100H-109ZM-130 257H130V276H-130Z" fill="#917a5a"/>
    <g fill="#685a4c" stroke="#c1a577" strokeWidth="4"><path d="M-95 101H-72V256H-95ZM-37 101H-14V256H-37ZM20 101H43V256H20ZM73 101H96V256H73Z"/></g>
    <path d="M-56 256V199A56 56 0 0 1 56 199V256Z" fill="#211827"/>
   </g>
   <g className="expedition-foreign-garden" fill="#384332" opacity=".72">
    <path d="M65 772Q28 676 66 604Q47 535 93 491Q143 531 122 602Q164 674 132 772ZM194 790Q155 708 190 651Q171 593 214 553Q260 592 243 651Q276 713 253 790ZM1714 787Q1675 682 1718 617Q1698 552 1747 512Q1797 553 1773 616Q1811 684 1781 787ZM1830 805Q1793 728 1828 672Q1814 617 1854 581Q1898 619 1880 673Q1912 731 1891 805Z"/>
    <path d="M94 781V699M218 795V720M1745 786V709M1854 802V726" stroke="#514333" strokeWidth="19"/>
   </g>
   <g className="expedition-land-vines" fill="none" stroke="#72754a" strokeWidth="10" strokeLinecap="round">
    <path d="M0 832Q133 781 226 816T421 797M1541 816Q1640 777 1741 823T1930 804M260 749Q293 700 280 651"/>
   </g>
   <g fill="#72754a" stroke="#b79a68" strokeWidth="3">
    <path d="M276 682Q242 654 260 624Q292 642 288 672Q319 644 340 671Q323 704 292 696Z"/>
    <path d="M1676 794Q1645 764 1667 736Q1696 754 1689 784Q1719 758 1740 785Q1721 815 1692 808Z"/>
   </g>
   <path d="M0 930Q346 863 702 916T1425 905T1920 923" fill="none" stroke="#c6a567" strokeOpacity=".28" strokeWidth="5"/>
  </svg>

  <svg className="expedition-layer expedition-procession" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.78)} aria-hidden="true">
   <ellipse cx="1018" cy="646" rx="350" ry="342" fill="url(#expedition-light)" className="expedition-divine-aura"/>
   <g className="expedition-banner expedition-banner-one">
    <path d="M544 430V697" stroke="#79593e" strokeWidth="11"/>
    <path d="M550 436Q630 470 700 435L685 577Q618 600 548 568Z" fill="#492c43" stroke="#b79a68" strokeWidth="6"/>
    <path d="M565 459Q622 484 677 460M564 542Q621 565 680 542" fill="none" stroke="#d1b77f" strokeOpacity=".56" strokeWidth="4"/>
    <circle cx="616" cy="504" r="20" fill="#b79a68" opacity=".75"/>
   </g>
   <g className="expedition-banner expedition-banner-two">
    <path d="M1454 352V615" stroke="#79593e" strokeWidth="10"/>
    <path d="M1460 358Q1523 388 1585 360L1571 493Q1515 512 1458 486Z" fill="#72754a" stroke="#c3a66f" strokeWidth="5"/>
    <path d="M1473 382Q1523 405 1572 383M1470 463Q1522 483 1577 462" fill="none" stroke="#ded0ab" strokeOpacity=".55" strokeWidth="4"/>
   </g>
   <g className="expedition-troupe">
    {satyr(465,875,.78,'dance')}
    <Figure x={666} y={866} scale={.73} pose="dance" character="maenad"/>
    {satyr(849,843,.68,'dance')}
    <Figure x={1050} y={865} scale={1.43} character="dionysus"/>
    <Figure x={1217} y={845} scale={.72} pose="dance" character="maenad"/>
    {satyr(1398,839,.74,'dance')}
    <Figure x={1582} y={857} scale={.73} pose="dance" character="maenad"/>
    <g className="expedition-musician">
     <Figure x={766} y={862} scale={.61} character="maenad"/>
     <path d="M742 706L823 674" stroke="#c6a15b" strokeWidth="8" strokeLinecap="round"/>
     <path d="M745 705L817 675" stroke="#d9c294" strokeWidth="3" strokeDasharray="3 11"/>
    </g>
    <g className="expedition-satyr-musician">
     {satyr(1278,859,.62,'dance')}
     <path d="M1250 704L1317 737" stroke="#b79a68" strokeWidth="8" strokeLinecap="round"/>
     <path d="M1258 709L1308 734" stroke="#e9dcc0" strokeWidth="3" strokeDasharray="3 10"/>
    </g>
   </g>
   <g className="expedition-thyrsus" fill="none" strokeLinecap="round">
    <path d="M920 824L856 596M916 765L968 574" stroke="#9c7544" strokeWidth="8"/>
    <path d="M855 597Q819 572 837 541Q871 555 866 586Q900 555 926 579Q911 613 872 620Z" fill="#72754a" stroke="#c1aa78" strokeWidth="4"/>
    <path d="M970 576Q937 553 954 521Q986 535 981 566Q1017 537 1041 559Q1026 593 987 599Z" fill="#72754a" stroke="#c1aa78" strokeWidth="4"/>
    <circle cx="864" cy="608" r="10" fill="#762f50" stroke="#d0b77c" strokeWidth="3"/>
    <circle cx="980" cy="565" r="10" fill="#762f50" stroke="#d0b77c" strokeWidth="3"/>
   </g>
   <g className="expedition-procession-vines" fill="none" stroke="#72754a" strokeWidth="9" strokeLinecap="round">
    <path d="M327 926Q432 837 522 803T701 774Q791 759 859 819M1151 885Q1250 811 1343 798T1534 821Q1641 845 1718 784"/>
   </g>
   <g className="expedition-vine-leaves" fill="#72754a" stroke="#b79a68" strokeWidth="3">
    <path d="M508 815Q468 784 488 749Q522 765 520 800Q552 770 578 800Q556 835 522 831Z"/>
    <path d="M694 779Q654 748 676 713Q710 732 705 764Q739 735 763 765Q739 799 706 795Z"/>
    <path d="M1343 798Q1304 770 1325 737Q1358 753 1354 784Q1387 756 1410 786Q1386 818 1354 814Z"/>
    <path d="M1534 824Q1494 791 1518 757Q1550 777 1544 810Q1577 781 1603 812Q1577 845 1545 840Z"/>
   </g>
   <g className="expedition-grapes" fill="#492c43" stroke="#b79a68" strokeWidth="3">
    {[[545,844],[561,855],[531,859],[546,872],[566,871],[550,885],[1402,831],[1418,844],[1388,849],[1404,862],[1424,860],[1408,876]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r={i%3===0?9:8}/>)}
   </g>
   <g className="expedition-march-line" fill="none" stroke="#d1bd95" strokeWidth="5" strokeOpacity=".45">
    <path d="M355 946Q596 890 823 933T1262 924T1668 919"/>
   </g>
  </svg>

  <svg className="expedition-layer expedition-foreground" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(1.42)} aria-hidden="true">
   <g className="expedition-foreground-vine" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M-40 1033Q157 960 247 851T350 679Q396 626 444 684T521 825Q573 877 650 812" stroke="#211827" strokeWidth="37"/>
    <path d="M-40 1020Q157 947 247 838T350 666Q396 613 444 671T521 812Q573 864 650 799" stroke="#72754a" strokeWidth="21"/>
    <path d="M275 811Q220 750 255 692M407 696Q469 641 455 579" stroke="#72754a" strokeWidth="12"/>
   </g>
   <g className="expedition-foreground-leaves" fill="#72754a" stroke="#c1aa78" strokeWidth="4">
    <path d="M255 730Q200 691 229 646Q269 668 264 708Q306 670 342 708Q315 755 273 744Z"/>
    <path d="M445 648Q399 607 431 564Q470 589 457 635Q502 595 536 637Q505 683 462 667Z"/>
   </g>
   <g className="expedition-dust" fill="#f1d89d">
    {[[364,591],[605,667],[805,518],[1098,479],[1207,578],[1479,650],[1631,510],[955,713],[732,851],[1742,740]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r={i%3===0?4:2.5} style={{animationDelay:`${i*-1.2}s`}}/>)}
   </g>
  </svg>
 </div>;
}

function AmpelosMemory({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.35}px,0)`});
 return <div className="exhibition-scene ex-ampelos-memory">
  <svg className="ampelos-layer ampelos-landscape" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.18)} aria-hidden="true">
   <defs>
    <linearGradient id="ampelos-sky" x2="0" y2="1"><stop stopColor="#211827"/><stop offset=".48" stopColor="#493342"/><stop offset="1" stopColor="#937456"/></linearGradient>
    <linearGradient id="ampelos-hills" x2="0" y2="1"><stop stopColor="#5c5546"/><stop offset="1" stopColor="#29252d"/></linearGradient>
    <linearGradient id="ampelos-meadow" x2="0" y2="1"><stop stopColor="#72754a"/><stop offset="1" stopColor="#302c31"/></linearGradient>
    <radialGradient id="ampelos-sunset"><stop stopColor="#e9d39b" stopOpacity=".62"/><stop offset=".46" stopColor="#c8a86f" stopOpacity=".22"/><stop offset="1" stopColor="#b79a68" stopOpacity="0"/></radialGradient>
   </defs>
   <rect width="1920" height="1080" fill="url(#ampelos-sky)"/>
   <ellipse cx="1130" cy="507" rx="570" ry="420" fill="url(#ampelos-sunset)"/>
   <circle cx="1130" cy="435" r="118" fill="#e9d6a5" opacity=".16"/>
   <path d="M0 606L154 480L265 548L430 393L567 567L727 430L866 577L1036 386L1191 560L1355 413L1504 576L1668 429L1804 557L1920 469V840H0Z" fill="#302b35" opacity=".78"/>
   <path d="M0 693L208 558L373 679L554 511L719 684L910 542L1061 683L1231 518L1412 689L1586 538L1770 673L1920 571V890H0Z" fill="url(#ampelos-hills)" opacity=".9"/>
   <path d="M0 765Q300 692 575 755T1123 737T1660 762T2050 736V1080H0Z" fill="url(#ampelos-meadow)"/>
   <path d="M0 894Q338 810 705 875T1400 867T1920 856V1080H0Z" fill="#353039"/>
   <path d="M0 946Q355 870 731 926T1453 916T1920 908" fill="none" stroke="#b79a68" strokeOpacity=".2" strokeWidth="5"/>
   <g className="ampelos-distant-trees" fill="#211f29" opacity=".72">
    <path d="M55 806Q17 676 73 594Q48 535 100 492Q153 536 126 594Q183 657 144 806ZM180 817Q147 711 193 650Q173 589 220 551Q269 592 245 651Q289 714 260 817ZM1652 790Q1611 670 1664 594Q1644 532 1696 490Q1747 531 1721 594Q1775 662 1735 790ZM1788 818Q1756 722 1798 664Q1781 610 1824 576Q1873 613 1852 665Q1891 722 1865 818Z"/>
    <path d="M99 794V700M223 803V720M1695 779V698M1825 800V716" fill="none" stroke="#493b36" strokeWidth="18"/>
   </g>
   <g className="ampelos-wildflowers" fill="#d0ad71">
    <circle cx="277" cy="855" r="8"/><circle cx="294" cy="850" r="6"/><circle cx="1544" cy="849" r="7"/><circle cx="1560" cy="857" r="5"/>
   </g>
   <path d="M0 1018Q409 946 829 1004T1615 994T1970 1010" fill="none" stroke="#a78b59" strokeOpacity=".36" strokeWidth="4"/>
  </svg>

  <svg className="ampelos-layer ampelos-figures" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.78)} aria-hidden="true">
   <defs>
    <radialGradient id="ampelos-figure-light"><stop stopColor="#e9d5a5" stopOpacity=".42"/><stop offset=".55" stopColor="#b79a68" stopOpacity=".12"/><stop offset="1" stopColor="#b79a68" stopOpacity="0"/></radialGradient>
   </defs>
   <ellipse cx="1106" cy="690" rx="324" ry="337" fill="url(#ampelos-figure-light)" className="ampelos-warm-light"/>
   <g className="ampelos-vine-memory" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M260 903Q411 825 478 694T672 550Q768 510 840 592T1035 656Q1154 703 1264 617T1490 512Q1621 477 1780 566" stroke="#4d563c" strokeWidth="34"/>
    <path d="M260 903Q411 825 478 694T672 550Q768 510 840 592T1035 656Q1154 703 1264 617T1490 512Q1621 477 1780 566" stroke="#72754a" strokeWidth="19"/>
    <path d="M570 642Q531 540 580 466M720 566Q740 450 838 401M1264 617Q1304 510 1272 433M1490 512Q1530 410 1618 385M954 642Q923 554 971 492" stroke="#72754a" strokeWidth="12"/>
   </g>
   <g className="ampelos-vine-leaves" fill="#72754a" stroke="#b79a68" strokeWidth="4">
    <path d="M574 535Q509 496 533 447Q581 462 583 514Q624 461 669 493Q646 547 591 559Z"/>
    <path d="M717 474Q671 426 707 382Q749 409 735 455Q788 420 823 460Q792 508 745 495Z"/>
    <path d="M1262 491Q1209 452 1238 408Q1280 430 1273 474Q1319 431 1358 466Q1332 514 1284 511Z"/>
    <path d="M1503 419Q1457 377 1489 336Q1528 360 1515 404Q1565 365 1595 405Q1568 450 1522 436Z"/>
    <path d="M948 566Q905 527 936 489Q974 511 962 551Q1004 516 1037 553Q1010 592 968 581Z"/>
    <path d="M419 805Q372 761 403 722Q442 746 430 785Q475 753 506 791Q478 835 437 820Z"/>
    <path d="M1672 570Q1625 534 1655 492Q1693 515 1682 555Q1726 522 1759 559Q1732 600 1690 589Z"/>
   </g>
   <g className="ampelos-grapes" fill="#492c43" stroke="#b79a68" strokeWidth="3">
    {[[617,576],[636,590],[605,597],[624,612],[645,610],[627,629],[1494,459],[1512,473],[1482,479],[1501,495],[1523,491],[1504,511],[1001,620],[1018,634],[986,638],[1003,653],[1025,652],[1007,670]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r={i%3===0?10:9}/>)}
   </g>
   <g className="ampelos-tendril" fill="none" stroke="#b79a68" strokeWidth="5">
    <path d="M658 627Q709 649 685 679Q665 702 643 682Q628 663 650 650M1429 530Q1474 553 1454 580Q1433 601 1412 581"/>
   </g>
   <g className="ampelos-pair">
    <Figure x={1005} y={858} scale={1.38} character="ampelos"/>
    <Figure x={1237} y={858} scale={1.38} character="dionysus"/>
    <path d="M1087 751Q1130 724 1175 753" fill="none" stroke="#d7c29b" strokeWidth="10" strokeLinecap="round"/>
    <path d="M1087 751Q1130 724 1175 753" fill="none" stroke="#81515a" strokeWidth="5" strokeLinecap="round"/>
    <g className="ampelos-wreath" fill="#72754a" stroke="#c1aa78" strokeWidth="3">
     <path d="M973 614Q997 592 1021 613M978 612Q965 590 972 578Q992 586 991 608M994 608Q985 583 998 571Q1013 587 1008 608M1010 610Q1009 586 1024 580Q1032 598 1020 614"/>
    </g>
   </g>
   <g className="ampelos-memory-flowers" fill="#b79a68" stroke="#eadcc0" strokeWidth="2">
    <path d="M1080 662Q1068 643 1081 626Q1094 643 1080 662ZM1078 647Q1058 649 1052 634Q1070 627 1078 647ZM1083 647Q1093 628 1110 632Q1106 651 1083 647Z"/>
    <circle cx="1080" cy="648" r="6" fill="#492c43"/>
   </g>
  </svg>

  <svg className="ampelos-layer ampelos-foreground" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(1.42)} aria-hidden="true">
   <g className="ampelos-foreground-vine" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M-45 1020Q139 976 236 882T324 736Q354 684 405 720T462 830Q492 874 541 843" stroke="#211827" strokeWidth="37"/>
    <path d="M-45 1010Q139 966 236 872T324 726Q354 674 405 710T462 820Q492 864 541 833" stroke="#72754a" strokeWidth="21"/>
    <path d="M267 842Q213 783 247 721M367 747Q424 676 412 624" stroke="#72754a" strokeWidth="12"/>
   </g>
   <g className="ampelos-foreground-leaves" fill="#72754a" stroke="#c1aa78" strokeWidth="4">
    <path d="M245 759Q188 720 217 672Q258 693 255 738Q297 695 334 734Q308 781 264 773Z"/>
    <path d="M405 672Q359 629 392 586Q431 610 419 656Q464 618 497 660Q467 704 424 690Z"/>
    <path d="M61 977Q13 941 42 899Q82 920 72 962Q115 927 147 968Q118 1008 76 994Z"/>
   </g>
   <g className="ampelos-ambient-dust" fill="#f1d89d">
    {[[749,737],[854,392],[1118,538],[1295,744],[1458,679],[1582,391],[938,941],[1228,417],[682,622],[1752,831]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r={i%3===0?4:2.5} style={{animationDelay:`${i*-1.1}s`}}/>)}
   </g>
  </svg>
 </div>;
}

function LycurgusPursuit({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.35}px,0)`});
 return <div className="exhibition-scene ex-lycurgus-pursuit">
  <svg className="lycurgus-layer lycurgus-mountains" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.18)} aria-hidden="true">
   <defs>
    <linearGradient id="lycurgus-storm-sky" x2="0" y2="1"><stop stopColor="#211827"/><stop offset=".48" stopColor="#39303d"/><stop offset="1" stopColor="#77634f"/></linearGradient>
    <linearGradient id="lycurgus-mountain" x2="0" y2="1"><stop stopColor="#4a414b"/><stop offset="1" stopColor="#29252f"/></linearGradient>
    <linearGradient id="lycurgus-rock" x2="0" y2="1"><stop stopColor="#87745f"/><stop offset="1" stopColor="#3a3136"/></linearGradient>
    <radialGradient id="lycurgus-divine-glow"><stop stopColor="#d8c38f" stopOpacity=".64"/><stop offset=".42" stopColor="#b79a68" stopOpacity=".24"/><stop offset="1" stopColor="#b79a68" stopOpacity="0"/></radialGradient>
   </defs>
   <rect width="1920" height="1080" fill="url(#lycurgus-storm-sky)"/>
   <g className="lycurgus-cloud-drift" fill="#211827" opacity=".6">
    <path d="M470 174Q530 104 625 147Q672 69 780 115Q851 63 932 125Q1025 82 1098 151Q1187 124 1234 208H470Z"/>
    <path d="M990 244Q1050 176 1148 211Q1217 119 1309 174Q1394 118 1477 178Q1571 136 1641 201Q1734 166 1797 248H990Z"/>
   </g>
   <g className="lycurgus-cloud-shadow" fill="#6e5960" opacity=".32">
    <path d="M705 256Q771 198 842 231Q892 163 974 214Q1048 164 1127 226Q1210 185 1288 265H705Z"/>
    <path d="M1296 302Q1365 234 1442 269Q1514 203 1595 252Q1672 210 1752 278Q1825 252 1880 318H1296Z"/>
   </g>
   <g fill="url(#lycurgus-mountain)">
    <path d="M0 675L151 522L249 592L395 414L519 562L673 354L815 565L989 421L1119 574L1288 368L1419 557L1558 405L1701 571L1835 453L1920 524V850H0Z"/>
    <path d="M0 724L188 602L307 663L494 500L628 653L797 466L931 651L1087 501L1227 667L1395 471L1540 647L1696 504L1825 635L1920 566V894H0Z" fill="#3c3540"/>
   </g>
   <g fill="#c6b59b" opacity=".34">
    <path d="M673 354L718 427L690 420L654 448L681 414L650 408Z"/>
    <path d="M1288 368L1336 447L1305 435L1272 459L1294 426L1264 416Z"/>
    <path d="M1558 405L1592 467L1568 456L1541 477L1557 450L1536 441Z"/>
   </g>
   <path d="M0 750Q350 685 704 738T1395 722T1920 745V1080H0Z" fill="#342e35"/>
   <path d="M0 861Q340 793 715 842T1400 835T1920 852V1080H0Z" fill="#29252e"/>
   <g className="lycurgus-temple" transform="translate(1370 430)">
    <path d="M-145 76L0 0L145 76Z" fill="url(#lycurgus-rock)" stroke="#d0b98d" strokeOpacity=".55" strokeWidth="5"/>
    <path d="M-127 82H127V102H-127Z" fill="#a28a69"/>
    <g fill="#82705e" stroke="#d0b98d" strokeOpacity=".4" strokeWidth="4">
     <path d="M-106 102H-78V260H-106ZM-44 102H-16V260H-44ZM18 102H46V260H18ZM80 102H108V260H80Z"/>
     <path d="M-120 94H120V108H-120ZM-138 260H138V280H-138Z"/>
    </g>
    <path d="M-68 260V190A68 68 0 0 1 68 190V260Z" fill="#211827" stroke="#c3a97a" strokeOpacity=".6" strokeWidth="5"/>
    <path d="M-11 236Q0 214 11 236V260H-11Z" fill="#6e392e"/>
   </g>
   <g className="lycurgus-lightning" fill="none" stroke="#d8cba9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1110 194L1056 323L1101 307L1060 419" strokeWidth="11" opacity=".53"/>
    <path d="M1170 248L1142 321L1169 309" strokeWidth="6" opacity=".32"/>
   </g>
   <ellipse cx="1138" cy="690" rx="340" ry="286" fill="url(#lycurgus-divine-glow)" className="lycurgus-presence"/>
   <path d="M0 835Q250 794 515 836T1050 838T1600 820T2020 845" fill="none" stroke="#a48d69" strokeOpacity=".31" strokeWidth="7"/>
  </svg>

  <svg className="lycurgus-layer lycurgus-figures" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.82)} aria-hidden="true">
   <g className="lycurgus-fleeing">
    <g className="lycurgus-runner" transform="translate(704 830) rotate(-8)">
     <Figure x={0} y={0} scale={.78} pose="dance" character="maenad"/>
     <path d="M-68-133L-108-278" stroke="#9c7544" strokeWidth="8" strokeLinecap="round"/>
     <path d="M-108-278Q-141-307-126-340Q-94-320-102-287Q-68-323-42-300Q-57-268-94-270Z" fill="#72754a" stroke="#d2bd8e" strokeWidth="4"/>
    </g>
    <g className="lycurgus-runner lycurgus-runner-two" transform="translate(929 867) rotate(9)">
     <Figure x={0} y={0} scale={.68} pose="dance" character="silenus"/>
     <path d="M38-120L115-242" stroke="#9c7544" strokeWidth="7" strokeLinecap="round"/>
     <path d="M115-242Q151-265 178-240Q157-213 124-228Q147-193 123-169Q96-189 105-224Z" fill="#72754a" stroke="#d2bd8e" strokeWidth="4"/>
    </g>
    <g className="lycurgus-runner lycurgus-runner-three" transform="translate(1051 910) rotate(-5)">
     <Figure x={0} y={0} scale={.58} pose="dance" character="maenad"/>
    </g>
   </g>
   <g className="lycurgus-dionysus">
    <Figure x={1150} y={861} scale={1.16} character="dionysus"/>
   </g>
   <g className="lycurgus-king">
    <Figure x={1560} y={885} scale={1.48} pose="dance" character="lycurgus"/>
    <path d="M1602 731L1702 542" stroke="#78543c" strokeWidth="15" strokeLinecap="round"/>
    <path d="M1702 542L1730 468L1742 539L1782 578L1711 561Z" fill="#b9a17c" stroke="#e1cfaa" strokeWidth="6" strokeLinejoin="round"/>
    <path d="M1702 542L1685 593" stroke="#d4c09c" strokeWidth="7" strokeLinecap="round"/>
   </g>
   <g className="lycurgus-foreground-rocks" fill="url(#lycurgus-rock)" stroke="#b19a77" strokeOpacity=".33" strokeWidth="5">
    <path d="M470 1005L555 869L635 902L699 1080H415Z"/>
    <path d="M1288 1080L1364 925L1458 951L1519 1080Z"/>
    <path d="M1742 1068L1812 914L1910 951V1080H1710Z"/>
   </g>
   <g className="lycurgus-vines" fill="none" stroke="#72754a" strokeWidth="8" strokeLinecap="round">
    <path d="M508 985Q572 923 590 864T647 814M1316 1056Q1368 1003 1394 948T1454 905M1816 1000Q1852 966 1872 910"/>
   </g>
   <g className="lycurgus-leaves" fill="#72754a" stroke="#b79a68" strokeWidth="3">
    <path d="M590 892Q553 870 566 839Q598 852 598 881Q625 849 650 869Q638 902 604 909Z"/>
    <path d="M1393 973Q1357 949 1372 920Q1401 934 1400 962Q1429 931 1452 953Q1437 984 1406 990Z"/>
    <path d="M1850 959Q1817 936 1830 910Q1858 922 1858 948Q1884 918 1906 939Q1892 970 1863 976Z"/>
   </g>
  </svg>

  <svg className="lycurgus-layer lycurgus-atmosphere" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(1.4)} aria-hidden="true">
   <g className="lycurgus-storm-particles" fill="#d4c29b">
    {[[612,525],[774,671],[1004,603],[1184,478],[1345,608],[1492,491],[1654,689],[1831,738],[925,757],[1262,794]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r={i%3===0?4:2.5} style={{animationDelay:`${i*-1.2}s`}}/>)}
   </g>
   <g className="lycurgus-ground-shadow" fill="none" stroke="#211827" strokeOpacity=".72" strokeWidth="22">
    <path d="M623 971Q778 925 920 961M1058 988Q1276 928 1470 969M1424 1008Q1640 958 1812 993"/>
   </g>
  </svg>
 </div>;
}

function MidasStory({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.35}px,0)`});
 return <div className="exhibition-scene ex-midas-story">
  <svg className="midas-layer midas-palace" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.18)} aria-hidden="true">
   <defs>
    <linearGradient id="midas-wall" x2="0" y2="1"><stop stopColor="#382b39"/><stop offset=".58" stopColor="#655044"/><stop offset="1" stopColor="#342b32"/></linearGradient>
    <linearGradient id="midas-stone" x2="0" y2="1"><stop stopColor="#b9a17c"/><stop offset=".38" stopColor="#806d5d"/><stop offset="1" stopColor="#493b3b"/></linearGradient>
    <linearGradient id="midas-floor" x2="0" y2="1"><stop stopColor="#6d5749"/><stop offset="1" stopColor="#211827"/></linearGradient>
    <linearGradient id="midas-river" x2="0" y2="1"><stop stopColor="#8c8067"/><stop offset=".3" stopColor="#53605a"/><stop offset="1" stopColor="#28343a"/></linearGradient>
    <radialGradient id="midas-golden-light"><stop stopColor="#d9b66f" stopOpacity=".52"/><stop offset=".58" stopColor="#b79a68" stopOpacity=".17"/><stop offset="1" stopColor="#b79a68" stopOpacity="0"/></radialGradient>
   </defs>
   <rect width="1920" height="1080" fill="#211827"/>
   <path d="M0 0H1920V705H0Z" fill="url(#midas-wall)"/>
   <path d="M570 0H1920V677H570Z" fill="#7c6651" opacity=".14"/>
   <path d="M0 0H710V705H0Z" fill="#211827" opacity=".62"/>
   <g fill="#211827" stroke="url(#midas-stone)" strokeWidth="20">
    <path d="M830 636V308A204 204 0 0 1 1238 308V636Z"/>
    <path d="M1300 640V382A159 159 0 0 1 1618 382V640Z"/>
    <path d="M1627 645V420A137 137 0 0 1 1901 420V645Z"/>
   </g>
   <g fill="none" stroke="#d4b77b" strokeOpacity=".38" strokeWidth="6">
    <path d="M850 630V309A184 184 0 0 1 1218 309V630"/>
    <path d="M1320 634V382A139 139 0 0 1 1598 382V634"/>
    <path d="M1647 639V420A117 117 0 0 1 1881 420V639"/>
   </g>
   <g fill="url(#midas-stone)" stroke="#d1bb91" strokeOpacity=".48" strokeWidth="5">
    {[790,1249,1282,1625,1905].map(x=><g key={x}>
     <path d={`M${x-25} 185H${x+25}L${x+16} 650H${x-16}Z`}/>
     <path d={`M${x-47} 172H${x+47}V193H${x-47}ZM${x-56} 650H${x+56}V671H${x-56}Z`}/>
    </g>)}
   </g>
   <path d="M0 668H1920V1080H0Z" fill="url(#midas-floor)"/>
   <path d="M0 671H1920M0 704Q460 683 930 710T1920 690M0 920Q475 896 940 924T1920 904" fill="none" stroke="#d4b77b" strokeOpacity=".22" strokeWidth="4"/>
   <path d="M0 709L1920 933M0 879L1440 1080M280 673L0 1080M1365 672L1920 954" fill="none" stroke="#d4b77b" strokeOpacity=".12" strokeWidth="3"/>
   <g className="midas-pactolus" fill="none" strokeLinecap="round">
    <path d="M1920 619Q1800 642 1741 718T1652 865Q1593 977 1534 1080" stroke="#293b3c" strokeWidth="210"/>
    <path d="M1920 619Q1800 642 1741 718T1652 865Q1593 977 1534 1080" stroke="url(#midas-river)" strokeWidth="164"/>
    <path d="M1908 640Q1800 664 1760 730T1672 873Q1621 976 1560 1060" stroke="#cfb47b" strokeOpacity=".66" strokeWidth="7"/>
    <path d="M1870 704Q1805 720 1778 765M1714 826Q1669 849 1648 893M1646 955Q1601 977 1587 1004" stroke="#e9dcc0" strokeOpacity=".52" strokeWidth="5"/>
   </g>
   <path d="M0 682Q310 650 620 682T1240 676T1870 685" fill="none" stroke="#b79a68" strokeOpacity=".48" strokeWidth="8"/>
  </svg>

  <svg className="midas-layer midas-figures" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.82)} aria-hidden="true">
   <defs>
    <radialGradient id="midas-divine-aura"><stop stopColor="#e9d39b" stopOpacity=".5"/><stop offset=".46" stopColor="#b79a68" stopOpacity=".18"/><stop offset="1" stopColor="#b79a68" stopOpacity="0"/></radialGradient>
    <linearGradient id="midas-table" x2="0" y2="1"><stop stopColor="#947353"/><stop offset=".44" stopColor="#614b3e"/><stop offset="1" stopColor="#352b31"/></linearGradient>
   </defs>
   <ellipse cx="1290" cy="573" rx="355" ry="335" fill="url(#midas-divine-aura)" className="midas-aura"/>
   <g className="midas-transformation" fill="#b79a68" stroke="#e9d39b" strokeWidth="5" strokeLinejoin="round">
    <path d="M787 617Q739 572 760 526Q803 540 798 589Q844 546 882 571Q869 615 817 628Z"/>
    <path d="M825 567Q790 522 815 483Q849 505 836 546Q882 508 914 536Q895 574 851 580Z"/>
    <circle cx="850" cy="626" r="13"/><circle cx="874" cy="605" r="10"/><circle cx="890" cy="583" r="7"/>
    <path d="M791 620Q842 584 892 540M792 620Q837 634 884 617" fill="none" stroke="#9c7544" strokeWidth="9" strokeLinecap="round"/>
   </g>
   <g className="midas-figures-main">
    <g transform="translate(955 816) scale(1.25)">
     <Figure x={0} y={0} pose="dance" character="midas"/>
     <path d="M-15-146Q-9-151-2-147M3-147Q10-151 16-145M-7-112Q0-106 7-112" fill="none" stroke="#49343a" strokeWidth="3" strokeLinecap="round"/>
    </g>
    <g className="midas-dionysus">
     <Figure x={1260} y={811} scale={1.13} character="dionysus"/>
    </g>
    <g className="midas-silenus">
     <Figure x={1573} y={817} scale={.93} character="silenus"/>
     <path d="M1583 673Q1593 648 1610 665Q1624 679 1630 706L1615 715L1590 702Z" fill="#9b754e" stroke="#e1c491" strokeWidth="5"/>
     <path d="M1587 674Q1596 652 1611 668" fill="none" stroke="#f0ddba" strokeWidth="4"/>
     <path d="M1534 659Q1555 640 1577 658M1539 652L1534 638M1550 646L1549 630M1562 647L1568 632M1574 654L1584 643" fill="none" stroke="#72754a" strokeWidth="7" strokeLinecap="round"/>
    </g>
   </g>
   <g className="midas-banquet">
    <path d="M700 777Q1060 735 1459 779L1424 828Q1058 796 731 833Z" fill="url(#midas-table)" stroke="#d3b77b" strokeWidth="9"/>
    <path d="M735 830L747 990M1405 828L1390 988M733 985Q1060 1008 1394 985" fill="none" stroke="#b79a68" strokeWidth="18"/>
    <path d="M774 850Q1064 822 1379 850M773 896Q1068 870 1376 898" fill="none" stroke="#d4b77b" strokeOpacity=".23" strokeWidth="5"/>
    <ellipse cx="1070" cy="758" rx="120" ry="34" fill="#b79a68" stroke="#e9dcc0" strokeWidth="5"/>
    <ellipse cx="1070" cy="752" rx="105" ry="22" fill="#74563c" stroke="#d9c292" strokeWidth="4"/>
    <g className="midas-golden-feast" fill="#c59f5d" stroke="#f0d99c" strokeWidth="4">
     <path d="M1009 747Q1026 711 1054 732Q1081 703 1100 736Q1130 716 1140 750Q1106 780 1067 772Q1028 777 1009 747Z"/>
     <circle cx="1034" cy="738" r="17"/><circle cx="1065" cy="727" r="20"/><circle cx="1095" cy="741" r="16"/>
     <path d="M1071 710Q1063 698 1070 688M1059 712Q1047 699 1050 691M1080 709Q1091 699 1090 691" fill="none" stroke="#72754a" strokeWidth="5" strokeLinecap="round"/>
     <path d="M905 768Q913 737 936 741L950 769Z"/>
     <path d="M1224 762Q1224 739 1250 738Q1274 741 1278 762L1268 777H1234Z"/>
    </g>
    <g fill="#49343a" stroke="#d2b77f" strokeWidth="5">
     <path d="M830 757H875L869 776H838Z"/><path d="M837 757V739H869V757M833 738H873"/>
     <path d="M1306 759H1350L1344 778H1314Z"/><path d="M1313 759V741H1345V759M1309 740H1349"/>
    </g>
   </g>
   <g className="midas-gold-reflections" fill="#f3d996">
    <path d="M1002 680l8-21 8 21 21 8-21 8-8 21-8-21-21-8Z"/>
    <path d="M1142 720l5-13 5 13 13 5-13 5-5 13-5-13-13-5Z"/>
    <path d="M784 497l6-15 6 15 15 6-15 6-6 15-6-15-15-6Z"/>
   </g>
  </svg>

  <svg className="midas-layer midas-atmosphere" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(1.4)} aria-hidden="true">
   <g className="midas-gold-dust" fill="#f1d89d">
    {[[736,715],[872,453],[956,534],[1101,606],[1195,510],[1353,691],[1468,574],[1652,744],[1731,812],[1022,669],[1305,620],[907,706]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r={i%3===0?5:3} style={{animationDelay:`${i*-1.1}s`}}/>)}
   </g>
   <g className="midas-water-glints" fill="none" stroke="#ddc58e" strokeLinecap="round">
    <path d="M1715 752Q1750 739 1783 752M1666 878Q1700 865 1727 876M1590 1018Q1621 1004 1648 1013" strokeWidth="5"/>
    <path d="M1764 792Q1784 785 1797 791M1633 926Q1656 918 1673 926" strokeWidth="3"/>
   </g>
  </svg>
 </div>;
}

function PirateMetamorphosis({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.35}px,0)`});
 return <div className="exhibition-scene ex-pirate-metamorphosis">
  <svg className="pirate-layer pirate-sky" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.18)} aria-hidden="true">
   <defs>
    <linearGradient id="pirate-sky-gradient" x2="0" y2="1"><stop stopColor="#211827"/><stop offset=".48" stopColor="#493342"/><stop offset="1" stopColor="#9a765c"/></linearGradient>
    <linearGradient id="pirate-sea-gradient" x2="0" y2="1"><stop stopColor="#53605a"/><stop offset=".35" stopColor="#34454c"/><stop offset="1" stopColor="#17212c"/></linearGradient>
    <linearGradient id="pirate-hull-gradient" x1="0" x2="1"><stop stopColor="#34272b"/><stop offset=".24" stopColor="#795743"/><stop offset=".5" stopColor="#b18d5d"/><stop offset=".76" stopColor="#65433b"/><stop offset="1" stopColor="#31242b"/></linearGradient>
    <linearGradient id="pirate-sail-gradient" x1="0" x2="1"><stop stopColor="#78634b"/><stop offset=".28" stopColor="#ead9b8"/><stop offset=".7" stopColor="#c5ab7c"/><stop offset="1" stopColor="#79614d"/></linearGradient>
    <radialGradient id="pirate-divine-light"><stop stopColor="#f2d89e" stopOpacity=".78"/><stop offset=".42" stopColor="#e9c77f" stopOpacity=".25"/><stop offset="1" stopColor="#e9c77f" stopOpacity="0"/></radialGradient>
   </defs>
   <rect width="1920" height="1080" fill="url(#pirate-sky-gradient)"/>
   <circle cx="1125" cy="413" r="430" fill="url(#pirate-divine-light)"/>
   <path d="M0 530L142 440L268 500L418 398L548 502L692 430L824 511L980 384L1115 510L1260 410L1400 511L1580 382L1742 500L1880 421L1920 440V736H0Z" fill="#302631" opacity=".66"/>
   <path d="M0 598L140 534L280 582L430 488L578 589L730 525L868 594L1012 494L1163 592L1310 510L1462 591L1600 492L1752 584L1883 514L1920 535V758H0Z" fill="#493840" opacity=".65"/>
   <path d="M0 646Q182 621 350 653T700 645T1050 655T1400 642T1750 658T2100 645V1080H0Z" fill="url(#pirate-sea-gradient)"/>
   <path d="M0 666Q200 638 400 669T800 662T1200 670T1600 660T2000 667" fill="none" stroke="#dac69f" strokeOpacity=".33" strokeWidth="5"/>
   <g className="pirate-distant-waves" fill="none" stroke="#c4b38f" strokeOpacity=".31" strokeWidth="4">
    {[720,773,834,910,1000,1050].map((y,i)=><path key={y} d={`M${-80+i*31} ${y}Q${150+i*19} ${y-20} ${345+i*27} ${y}T${790+i*21} ${y}T${1230+i*19} ${y}T${1690+i*23} ${y}T${2040+i*17} ${y}`}/>)}
   </g>
  </svg>

  <svg className="pirate-layer pirate-ship" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.72)} aria-hidden="true">
   <g className="pirate-sails">
    <path d="M745 548V197M1110 560V159M1400 573V245" stroke="#49343a" strokeWidth="18"/>
    <path d="M752 214Q916 252 1034 215V480Q890 459 752 482Z" fill="url(#pirate-sail-gradient)" stroke="#d4bd91" strokeWidth="6"/>
    <path d="M1118 177Q1278 215 1365 179V494Q1235 462 1118 493Z" fill="url(#pirate-sail-gradient)" stroke="#d4bd91" strokeWidth="6"/>
    <path d="M1408 261Q1510 291 1581 268V501Q1497 481 1408 500Z" fill="url(#pirate-sail-gradient)" stroke="#d4bd91" strokeWidth="5"/>
    <path d="M770 240Q893 279 1017 240M1135 204Q1241 240 1348 204M1423 286Q1496 310 1566 291" fill="none" stroke="#876d52" strokeOpacity=".7" strokeWidth="4"/>
    <path d="M749 196Q890 221 1038 194M1110 158Q1240 182 1373 155M1399 244Q1498 264 1588 241" fill="none" stroke="#d2ba8a" strokeWidth="7" strokeLinecap="round"/>
    <path d="M745 197L683 263M1110 159L1061 220M1400 245L1365 294" stroke="#b79a68" strokeWidth="4"/>
    <path className="pirate-wind-cloth" d="M1410 238Q1492 251 1587 237L1568 266Q1490 277 1411 262Z" fill="#492c43" stroke="#b79a68" strokeWidth="4"/>
   </g>
   <g className="pirate-hull">
    <path d="M296 585Q650 553 1005 577T1668 553L1551 722Q1358 791 954 770Q570 755 397 696Z" fill="url(#pirate-hull-gradient)" stroke="#d1b987" strokeWidth="10"/>
    <path d="M344 609Q712 588 1010 607T1606 586M380 651Q749 627 1044 650T1574 629M420 691Q751 668 1054 689T1542 671" fill="none" stroke="#2e2228" strokeOpacity=".67" strokeWidth="10"/>
    <path d="M371 598Q702 575 1012 596T1636 575" fill="none" stroke="#e0c58e" strokeWidth="13"/>
    <path d="M396 720Q936 800 1541 735" fill="none" stroke="#d0a76e" strokeOpacity=".72" strokeWidth="12"/>
    <path d="M322 579Q273 556 245 535M1643 557Q1721 523 1760 476" fill="none" stroke="#8d6948" strokeWidth="16" strokeLinecap="round"/>
    <path d="M250 535Q217 508 199 471M1760 476Q1792 450 1800 415" fill="none" stroke="#d4bd91" strokeWidth="7"/>
    <g fill="#b79a68" stroke="#eed8ac" strokeWidth="3">
     {[426,526,626,726,826,926,1026,1126,1226,1326,1426,1526].map(x=><circle key={x} cx={x} cy={613+Math.abs(x-950)*.015} r="8"/>)}
    </g>
    <path d="M398 580Q540 555 684 574L667 594Q533 577 400 603ZM1440 566Q1534 536 1629 552L1618 578Q1527 563 1444 590Z" fill="#49343a" stroke="#b79a68" strokeWidth="4"/>
   </g>
   <g className="pirate-vine-growth" fill="#72754a" stroke="#c4aa78" strokeWidth="4">
    <path d="M541 653Q590 599 626 548T735 487Q812 461 844 386M625 615Q716 577 752 529T848 500Q933 489 966 423M1002 622Q1041 559 1088 540T1170 468Q1209 427 1220 366M1245 643Q1305 609 1318 552T1392 488Q1439 465 1465 405M851 576Q891 525 886 468T925 368" fill="none" strokeWidth="11" strokeLinecap="round"/>
    {[[635,550],[735,486],[844,386],[752,529],[966,423],[1088,540],[1220,366],[1318,552],[1465,405],[925,368]].map(([x,y],i)=><g key={i}>
     <path d={`M${x} ${y}q-35 -27 -21 -52 28 11 25 43 26 -39 53 -21 -7 33 -52 43Z`}/>
     <path d={`M${x-12} ${y+7}q-26 -21 -13 -41 22 8 20 33 23 -31 45 -16 -6 26 -44 33Z`}/>
    </g>)}
   </g>
   <g fill="#762f50" stroke="#d6b982" strokeWidth="5">
    <path d="M553 533Q518 507 533 472Q569 486 564 523Q597 485 627 505Q617 541 574 550Z"/>
    <path d="M1317 540Q1285 511 1302 480Q1337 495 1329 530Q1363 493 1391 514Q1378 548 1338 557Z"/>
    <path d="M958 468Q929 446 943 416Q975 428 971 458Q1000 427 1027 449Q1017 479 980 486Z"/>
   </g>
   <g fill="#b79a68" stroke="#ead7b3" strokeWidth="4">
    <path d="M604 560Q620 546 635 560Q650 546 665 560V590Q649 607 635 590Q620 607 604 590Z"/>
    <path d="M1380 510Q1395 497 1410 510Q1425 497 1440 510V540Q1424 556 1410 540Q1395 556 1380 540Z"/>
    <path d="M984 439Q996 427 1008 439Q1020 427 1032 439V465Q1020 478 1008 465Q996 478 984 465Z"/>
   </g>
   <g className="pirate-supernatural-wine" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1092 535Q1050 553 1080 580T1126 624Q1143 644 1134 669" stroke="#492c43" strokeWidth="26"/>
    <path d="M1092 535Q1050 553 1080 580T1126 624Q1143 644 1134 669" stroke="#a64d55" strokeOpacity=".8" strokeWidth="12"/>
    <path d="M1134 669Q1121 694 1136 704Q1150 693 1134 669Z" fill="#a64d55" stroke="#d6b982" strokeWidth="3"/>
   </g>
  </svg>

  <svg className="pirate-layer pirate-deck" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(1.05)} aria-hidden="true">
   <g fill="#9b754e" stroke="#382a2d" strokeWidth="5">
    <path d="M438 569H1530V595H438Z"/>
    <path d="M484 595V621M604 592V621M724 591V621M844 592V621M964 594V621M1084 592V621M1204 589V621M1324 585V621M1444 580V621" strokeWidth="7"/>
   </g>
   <g fill="#6f4a39" stroke="#d0b782" strokeWidth="5">
    <path d="M497 555H562L553 615H505Z"/><path d="M489 550H570V561H489Z"/>
    <path d="M1262 547H1328L1319 610H1270Z"/><path d="M1254 542H1336V554H1254Z"/>
   </g>
   <g fill="none" stroke="#d6bd90" strokeWidth="5">
    <path d="M505 550Q506 518 529 518Q552 518 553 550M1270 542Q1271 510 1295 510Q1319 510 1320 542"/>
   </g>
   <g fill="#493943" stroke="#d1bb91" strokeWidth="4">
    <path d="M662 552Q672 513 701 512Q730 513 739 552L753 604H648Z"/>
    <path d="M1128 548Q1138 509 1167 508Q1196 509 1205 548L1219 601H1114Z"/>
    <path d="M808 559Q818 520 847 519Q876 520 885 559L899 610H794Z"/>
   </g>
   <g fill="#d1bd98" stroke="#f0ddba" strokeWidth="3">
    <ellipse cx="701" cy="497" rx="17" ry="23"/><ellipse cx="1167" cy="493" rx="17" ry="23"/><ellipse cx="847" cy="504" rx="17" ry="23"/>
   </g>
   <g fill="#33232a" stroke="#b79a68" strokeWidth="3">
    <path d="M685 492Q684 466 701 465Q718 466 717 492L712 502L701 497L690 502Z"/>
    <path d="M1151 488Q1150 462 1167 461Q1184 462 1183 488L1178 498L1167 493L1156 498Z"/>
    <path d="M831 499Q830 473 847 472Q864 473 863 499L858 509L847 504L836 509Z"/>
   </g>
   <g className="pirate-figures">
    <Figure x={950} y={583} scale={.96} character="dionysus"/>
    <Figure x={426} y={598} scale={.72} character="pirate"/>
    <Figure x={688} y={600} scale={.68} pose="dance" character="pirate"/>
    <Figure x={1154} y={591} scale={.68} pose="dance" character="pirate"/>
    <Figure x={1428} y={580} scale={.65} character="silenus"/>
   </g>
   <path d="M930 477Q950 465 970 477" fill="none" stroke="#72754a" strokeWidth="5"/>
   <g className="pirate-divine-light">
    <ellipse cx="958" cy="443" rx="194" ry="254" fill="url(#pirate-divine-light)"/>
   </g>
   <g className="pirate-vine-ropes" fill="none" stroke="#72754a" strokeWidth="7" strokeLinecap="round">
    <path d="M879 580Q846 547 876 510T907 445Q922 421 944 408M1015 575Q1047 548 1024 516T1045 465Q1051 432 1029 412"/>
   </g>
   <g fill="#72754a" stroke="#c1aa78" strokeWidth="3">
    <path d="M877 514Q842 489 861 459Q892 470 886 502Q919 472 943 493Q930 526 897 532Z"/>
    <path d="M1027 484Q1000 458 1021 432Q1048 445 1038 474Q1070 448 1090 471Q1078 501 1044 503Z"/>
   </g>
   <g fill="#b79a68" stroke="#ead7b3" strokeWidth="4">
    <path d="M1040 525Q1057 509 1073 525Q1089 509 1105 525V556Q1088 574 1073 556Q1057 574 1040 556Z"/>
   </g>
   <g className="pirate-captain-oar" stroke="#75553d" strokeWidth="11" strokeLinecap="round">
    <path d="M585 535L500 675"/>
    <path d="M488 668Q470 702 462 722Q498 715 517 685Z" fill="#ad8c60" stroke="#d3bb90" strokeWidth="4"/>
   </g>
   <g className="pirate-helmsman">
    <Figure x={585} y={604} scale={.72} character="pirate"/>
   </g>
   <g className="pirate-falling">
    <g transform="translate(1326 751) rotate(42)"><Figure x={0} y={0} scale={.72} pose="dance" character="pirate"/></g>
    <g transform="translate(1510 771) rotate(52)"><Figure x={0} y={0} scale={.68} pose="dance" character="pirate"/></g>
   </g>
  </svg>

  <svg className="pirate-layer pirate-transformation" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(1.65)} aria-hidden="true">
   <g className="pirate-splash pirate-splash-one">
    <path d="M1210 837Q1249 792 1288 836Q1328 876 1374 839Q1347 902 1289 882Q1242 867 1210 837Z" fill="#91aa9c" fillOpacity=".42" stroke="#d7e2ca" strokeWidth="5"/>
    <path d="M1238 823Q1214 795 1235 769M1271 826Q1268 785 1290 766M1344 824Q1373 792 1383 775" fill="none" stroke="#dce4cf" strokeWidth="6" strokeLinecap="round"/>
   </g>
   <g className="pirate-splash pirate-splash-two">
    <path d="M1430 873Q1473 824 1514 873Q1554 911 1598 872Q1575 939 1515 918Q1464 901 1430 873Z" fill="#91aa9c" fillOpacity=".4" stroke="#d7e2ca" strokeWidth="5"/>
    <path d="M1460 859Q1442 829 1464 805M1494 856Q1494 819 1516 800M1563 859Q1586 832 1597 810" fill="none" stroke="#dce4cf" strokeWidth="6" strokeLinecap="round"/>
   </g>
   <g className="pirate-dolphins" fill="#839d96" stroke="#d7e2ca" strokeWidth="5" strokeLinejoin="round">
    <g className="pirate-dolphin pirate-dolphin-one" transform="translate(1285 838) rotate(-17)">
     <path d="M-102 18Q-54-49 14-44Q54-41 86-5L124-26L112 4L139 26L91 21Q54 66 8 56Q-52 46-102 18Z"/>
     <path d="M18-40L41-73L52-34M-26 40L-5 72L4 42M-85 13L-119-4L-102 22Z" fill="#728a84"/>
     <circle cx="72" cy="-13" r="5" fill="#211827" stroke="none"/>
     <path d="M80 5Q99 11 113 4" fill="none" stroke="#eee0bf" strokeWidth="3"/>
    </g>
    <g className="pirate-dolphin pirate-dolphin-two" transform="translate(1517 901) rotate(12) scale(.8)">
     <path d="M-102 18Q-54-49 14-44Q54-41 86-5L124-26L112 4L139 26L91 21Q54 66 8 56Q-52 46-102 18Z"/>
     <path d="M18-40L41-73L52-34M-26 40L-5 72L4 42M-85 13L-119-4L-102 22Z" fill="#728a84"/>
     <circle cx="72" cy="-13" r="5" fill="#211827" stroke="none"/>
     <path d="M80 5Q99 11 113 4" fill="none" stroke="#eee0bf" strokeWidth="3"/>
    </g>
    <g className="pirate-dolphin pirate-dolphin-three" transform="translate(1051 967) rotate(-5) scale(.66)">
     <path d="M-102 18Q-54-49 14-44Q54-41 86-5L124-26L112 4L139 26L91 21Q54 66 8 56Q-52 46-102 18Z"/>
     <path d="M18-40L41-73L52-34M-26 40L-5 72L4 42M-85 13L-119-4L-102 22Z" fill="#728a84"/>
     <circle cx="72" cy="-13" r="5" fill="#211827" stroke="none"/>
    </g>
   </g>
   <g className="pirate-sea-spray" fill="#f2dfae">
    {[[1190,917],[1262,950],[1385,920],[1453,969],[1583,942],[1032,887],[1660,901],[1124,1009]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r={i%3===0?5:3} style={{animationDelay:`${i*-1.1}s`}}/>)}
   </g>
   <g className="pirate-foreground-waves" fill="none" stroke="#b5c3b0" strokeOpacity=".55" strokeWidth="7">
    {[906,960,1015,1064].map((y,i)=><path key={y} d={`M${-100+i*40} ${y}Q${165+i*23} ${y-39} ${382+i*31} ${y}T${875+i*21} ${y}T${1370+i*22} ${y}T${1910+i*26} ${y}`}/>)}
   </g>
   <g className="pirate-distant-splash" fill="none" stroke="#dce4cf" strokeWidth="5" strokeLinecap="round">
    <path d="M1680 795Q1663 766 1686 740M1710 799Q1711 760 1735 742M1762 803Q1785 773 1798 750"/>
   </g>
  </svg>
  <div className="pirate-curtain pirate-curtain-left" aria-hidden="true"/>
  <div className="pirate-curtain pirate-curtain-right" aria-hidden="true"/>
 </div>;
}

function MinyasWeaving({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.38}px,0)`});
 return <div className="exhibition-scene ex-minyas-weaving">
  <svg className="minyas-layer minyas-room" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.18)} aria-hidden="true">
   <defs>
    <linearGradient id="minyas-wall" x2="0" y2="1"><stop stopColor="#312631"/><stop offset=".58" stopColor="#493b3b"/><stop offset="1" stopColor="#28212b"/></linearGradient>
    <linearGradient id="minyas-floor" x2="0" y2="1"><stop stopColor="#665248"/><stop offset="1" stopColor="#211827"/></linearGradient>
    <linearGradient id="minyas-cloth" x2="1" y2="1"><stop stopColor="#493047"/><stop offset=".5" stopColor="#76505c"/><stop offset="1" stopColor="#302232"/></linearGradient>
    <radialGradient id="minyas-festival-light"><stop stopColor="#d5a25d" stopOpacity=".55"/><stop offset="1" stopColor="#9b6644" stopOpacity="0"/></radialGradient>
    <radialGradient id="minyas-shadow"><stop stopColor="#17131d" stopOpacity=".82"/><stop offset="1" stopColor="#17131d" stopOpacity="0"/></radialGradient>
   </defs>
   <rect width="1920" height="1080" fill="#211827"/>
   <path d="M0 0H1920V728H0Z" fill="url(#minyas-wall)"/>
   <path d="M0 728H1920V1080H0Z" fill="url(#minyas-floor)"/>
   <path d="M0 731H1920M0 865Q475 830 930 874T1920 843M0 1000Q450 952 910 1001T1920 974" fill="none" stroke="#d3bb91" strokeOpacity=".16" strokeWidth="4"/>
   <path d="M0 730L520 1080M570 729L830 1080M1220 729L1085 1080M1710 728L1505 1080" fill="none" stroke="#d3bb91" strokeOpacity=".12" strokeWidth="4"/>
   <path d="M0 0H1920V58H0Z" fill="#211827"/>
   <path d="M955 94V728M1448 94V728" stroke="#a48c6b" strokeWidth="24"/>
   <path d="M943 100H1460M943 716H1460" stroke="#d2b988" strokeOpacity=".48" strokeWidth="8"/>
   <path d="M1503 120H1850V721H1503Z" fill="#1a1720" stroke="#b79a68" strokeOpacity=".62" strokeWidth="13"/>
   <path d="M1530 694V330A150 150 0 0 1 1830 330V694Z" fill="#322a36" stroke="#d0b77f" strokeOpacity=".46" strokeWidth="8"/>
   <path d="M1538 575L1600 478L1655 541L1708 423L1766 537L1822 479V694H1538Z" fill="#393a3b"/>
   <path d="M1538 615L1607 541L1660 584L1723 500L1775 575L1822 536V694H1538Z" fill="#292a32"/>
   <ellipse cx="1690" cy="543" rx="340" ry="260" fill="url(#minyas-festival-light)"/>
   <g className="minyas-festival" fill="#211827" stroke="#a9875c" strokeWidth="5">
    <path d="M1595 688Q1607 622 1631 688ZM1660 694Q1670 605 1696 694ZM1734 690Q1745 632 1767 690Z"/>
    <path d="M1590 635L1592 575M1668 618L1669 553M1746 640L1747 579" fill="none" stroke="#b79a68" strokeWidth="5"/>
    <path d="M1583 574Q1592 543 1600 574Q1592 588 1583 574M1660 551Q1669 514 1678 551Q1669 567 1660 551M1737 577Q1746 545 1755 577Q1746 591 1737 577Z" fill="#cc9558" stroke="#ead1a0" strokeWidth="3"/>
   </g>
   <g fill="#b79a68" opacity=".27">
    <path d="M114 172H792M114 187H792M114 202H792"/>
    <path d="M113 172V210M167 172V210M221 172V210M275 172V210M329 172V210M383 172V210M437 172V210M491 172V210M545 172V210M599 172V210M653 172V210M707 172V210M761 172V210"/>
   </g>
   <path d="M0 0H955V728H0Z" fill="#15121be0"/>
   <path d="M0 728H955" stroke="#b79a68" strokeOpacity=".4" strokeWidth="3"/>
  </svg>

  <svg className="minyas-layer minyas-sisters" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.74)} aria-hidden="true">
   <ellipse cx="1225" cy="781" rx="510" ry="365" fill="url(#minyas-shadow)"/>
   <g className="minyas-weavers">
    <g className="minyas-sister minyas-sister-one"><Figure x={945} y={918} scale={1.02} character="minyas"/><path d="M920 763Q945 739 970 763M924 762Q916 747 925 738Q938 746 938 758M941 756Q940 739 952 732Q962 745 956 760" fill="none" stroke="#b79a68" strokeWidth="3"/><path d="M918 797Q889 827 903 858" fill="none" stroke="#bfa673" strokeWidth="4"/></g>
    <g className="minyas-sister minyas-sister-two"><Figure x={1240} y={929} scale={.94} character="minyas"/><path d="M1211 770Q1240 748 1269 770" fill="none" stroke="#b79a68" strokeWidth="4"/><path d="M1202 796Q1177 828 1196 854M1278 796Q1300 823 1283 850" fill="none" stroke="#bfa673" strokeWidth="4"/></g>
    <g className="minyas-sister minyas-sister-three"><Figure x={1435} y={930} scale={.91} character="minyas"/><path d="M1408 770Q1435 745 1462 770M1413 766Q1395 747 1404 737Q1421 746 1422 762M1430 756Q1432 736 1445 733Q1453 749 1444 762" fill="none" stroke="#b79a68" strokeWidth="3"/><path d="M1398 794Q1374 825 1394 851" fill="none" stroke="#bfa673" strokeWidth="4"/></g>
   </g>
   <g className="minyas-bats">
    <path d="M876 301Q844 263 815 273Q832 300 821 328Q850 310 870 334L892 356L913 334Q935 310 963 328Q951 300 972 273Q939 263 907 301L892 282Z" fill="#16131c"/>
    <path d="M1330 280Q1307 249 1285 258Q1298 279 1290 299Q1312 286 1327 304L1344 321L1361 304Q1378 286 1398 299Q1391 279 1404 258Q1381 249 1357 280L1344 266Z" fill="#17131d"/>
    <path d="M1587 374Q1563 343 1540 352Q1553 373 1545 394Q1567 381 1584 399L1601 416L1618 399Q1635 381 1657 394Q1649 373 1662 352Q1639 343 1615 374L1601 360Z" fill="#17131d"/>
    <path d="M1087 490Q1070 467 1053 473Q1063 490 1057 506Q1074 496 1087 510L1099 522L1111 510Q1124 496 1141 506Q1135 490 1145 473Q1128 467 1111 490L1099 480Z" fill="#201825"/>
   </g>
   <g className="minyas-threads" fill="none" stroke="#cfb47d" strokeWidth="3">
    <path d="M1010 871Q1080 756 1150 834T1300 812T1450 856"/>
    <path d="M1040 893Q1110 781 1180 854T1330 830T1480 872"/>
    <path d="M1080 916Q1150 810 1220 877T1370 855"/>
    <path d="M1110 834Q1147 869 1180 834T1250 834T1320 834" strokeDasharray="5 9"/>
   </g>
  </svg>

  <svg className="minyas-layer minyas-loom" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(1.05)} aria-hidden="true">
   <g className="minyas-loom-frame" fill="none" stroke="#8f714f" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1040 492L1003 1014M1385 492L1432 1014M1032 517H1391M1010 1008H1431"/>
    <path d="M1071 531L1356 531V922L1071 922Z" fill="url(#minyas-cloth)" stroke="#b79a68" strokeWidth="9"/>
   </g>
   <g className="minyas-warp" fill="none" stroke="#d8c49c" strokeOpacity=".62" strokeWidth="3">
    {[1090,1117,1144,1171,1198,1225,1252,1279,1306,1333].map(x=><path key={x} d={`M${x} 539V915`}/>)}
    {[562,593,624,655,686,717,748,779,810,841,872,903].map(y=><path key={y} d={`M1076 ${y}H1352`}/>)}
   </g>
   <path d="M1073 793Q1110 746 1148 793T1224 793T1300 793T1354 793V921H1073Z" fill="#342339" fillOpacity=".76" stroke="#b79a68" strokeOpacity=".65" strokeWidth="5"/>
   <g className="minyas-woven-bats" fill="#17131c">
    <path d="M1161 832L1148 812L1137 831Q1115 813 1099 810Q1110 834 1103 857Q1123 846 1139 862L1154 877L1169 862Q1185 846 1205 857Q1198 834 1209 810Q1193 813 1171 831L1164 818Z"/>
    <path d="M1289 880L1279 865L1270 881Q1253 868 1240 866Q1249 883 1244 900Q1260 892 1272 904L1284 916L1297 904Q1309 892 1325 900Q1320 883 1329 866Q1316 868 1299 881L1292 870Z"/>
   </g>
   <g className="minyas-cloth-edge" fill="none" stroke="#c6a15b" strokeWidth="5">
    <path d="M1067 779Q1114 751 1158 779T1248 779T1341 779"/>
    <path d="M1070 919Q1145 945 1216 918T1355 920"/>
   </g>
  </svg>

  <svg className="minyas-layer minyas-foreground" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(1.65)} aria-hidden="true">
   <path className="minyas-shadow-veil" d="M0 0H955V728H0Z" fill="url(#minyas-shadow)"/>
   <path d="M964 1075Q1040 957 1092 1010T1206 971T1322 1012T1429 970T1540 1009" fill="none" stroke="#6b4c58" strokeOpacity=".52" strokeWidth="25"/>
   <g fill="#72754a" stroke="#b79a68" strokeOpacity=".56" strokeWidth="3">
    <path d="M1920 1080Q1840 922 1774 973Q1800 1006 1853 1015Q1795 1031 1788 1069Z"/>
    <path d="M0 1080Q77 944 146 986Q126 1027 72 1034Q129 1049 133 1080Z"/>
   </g>
  </svg>
 </div>;
}

function AriadneNaxos({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.38}px,0)`});
 return <div className="exhibition-scene ex-ariadne-naxos">
  <svg className="ariadne-layer ariadne-horizon" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.14)} aria-hidden="true">
   <defs>
    <linearGradient id="ariadne-sky" x2="0" y2="1"><stop stopColor="#211827"/><stop offset=".48" stopColor="#50404d"/><stop offset="1" stopColor="#9b735f"/></linearGradient>
    <linearGradient id="ariadne-sea" x2="0" y2="1"><stop stopColor="#3a3b4a"/><stop offset=".48" stopColor="#293440"/><stop offset="1" stopColor="#1c2531"/></linearGradient>
    <linearGradient id="ariadne-warm-sea" x2="0" y2="1"><stop stopColor="#9c7055" stopOpacity=".6"/><stop offset="1" stopColor="#b79a68" stopOpacity="0"/></linearGradient>
    <linearGradient id="ariadne-rock" x2="0" y2="1"><stop stopColor="#87745f"/><stop offset="1" stopColor="#342a32"/></linearGradient>
    <radialGradient id="ariadne-dawn"><stop stopColor="#e9c27f" stopOpacity=".7"/><stop offset=".48" stopColor="#bb8a5b" stopOpacity=".3"/><stop offset="1" stopColor="#bb8a5b" stopOpacity="0"/></radialGradient>
    <radialGradient id="ariadne-night"><stop stopColor="#6b6376" stopOpacity=".32"/><stop offset="1" stopColor="#211827" stopOpacity="0"/></radialGradient>
   </defs>
   <rect width="1920" height="1080" fill="#211827"/>
   <path d="M0 0H1920V618H0Z" fill="url(#ariadne-sky)"/>
   <ellipse cx="420" cy="370" rx="720" ry="540" fill="url(#ariadne-night)"/>
   <ellipse cx="1430" cy="535" rx="710" ry="530" fill="url(#ariadne-dawn)" className="ariadne-dawn-glow"/>
   <path d="M0 563L175 491L314 534L490 449L648 544L807 486L984 561L1130 494L1286 535L1445 435L1595 509L1750 442L1920 492V713H0Z" fill="#38333e"/>
   <path d="M0 615L194 552L352 596L514 526L688 602L842 554L1006 622L1173 565L1325 605L1490 507L1626 582L1784 520L1920 557V729H0Z" fill="#292a35"/>
   <path d="M0 637Q258 608 486 639T964 633T1430 643T1920 620V1080H0Z" fill="url(#ariadne-sea)"/>
   <path d="M0 677Q280 655 514 681T988 675T1448 686T1920 660V774Q1620 755 1390 778T926 769T471 779T0 763Z" fill="url(#ariadne-warm-sea)"/>
   <g className="ariadne-water" fill="none" strokeLinecap="round">
    <path d="M30 722Q152 705 270 722M96 765Q246 744 365 763M376 701Q520 685 648 703M1000 743Q1120 725 1237 743M1268 790Q1411 769 1558 789M1543 710Q1698 696 1842 712" stroke="#c0a67b" strokeOpacity=".34" strokeWidth="4"/>
    <path d="M210 831Q328 816 442 831M762 795Q881 780 991 795M1120 863Q1262 844 1393 863M1626 826Q1742 808 1870 826" stroke="#9fa9a7" strokeOpacity=".24" strokeWidth="3"/>
   </g>
   <path d="M0 760Q260 726 500 771T964 755T1430 774T1920 745V1080H0Z" fill="url(#ariadne-rock)"/>
   <path d="M0 803Q245 756 438 800L584 879L682 1080H0ZM1920 779Q1682 752 1525 817L1468 932L1404 1080H1920Z" fill="#302832"/>
   <path d="M0 827Q214 784 404 820M1532 834Q1722 772 1920 808" fill="none" stroke="#bd9b70" strokeOpacity=".35" strokeWidth="6"/>
   <g className="ariadne-departing-ship" transform="translate(397 566)">
    <path d="M-86 24H95L55 52H-54Z" fill="#211827" stroke="#b79a68" strokeOpacity=".65" strokeWidth="4"/>
    <path d="M1-88V22M8-78Q65-53 62-2H8Z" fill="#6c5260" stroke="#c7a978" strokeOpacity=".55" strokeWidth="4"/>
    <path d="M-15-52L-70 14H-15Z" fill="#433440" stroke="#c7a978" strokeOpacity=".48" strokeWidth="3"/>
    <path d="M-100 61Q-46 50 12 61T123 61" fill="none" stroke="#9ba4a2" strokeOpacity=".34" strokeWidth="3"/>
   </g>
   <g className="ariadne-stars" fill="#ead7ad">
    {[[1232,155,5],[1295,197,4],[1362,146,6],[1421,205,4],[1480,160,5],[1540,221,4],[1601,172,6]].map(([x,y,r],i)=><circle key={i} cx={x} cy={y} r={r}/>)}
    <path d="M1232 155L1295 197L1362 146L1421 205L1480 160L1540 221L1601 172" fill="none" stroke="#d7bb84" strokeOpacity=".68" strokeWidth="2"/>
   </g>
   <path className="ariadne-corona" d="M1274 254Q1300 190 1340 225Q1362 171 1394 217Q1437 178 1452 238Q1496 210 1512 273" fill="none" stroke="#d5b675" strokeOpacity=".78" strokeWidth="6"/>
   <g fill="#e2c481">
    <path d="M1270 260L1277 245L1284 261ZM1333 230L1340 211L1347 231ZM1387 222L1394 202L1401 223ZM1445 244L1452 225L1459 245ZM1505 278L1512 260L1519 279Z"/>
   </g>
  </svg>

  <svg className="ariadne-layer ariadne-figures" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.76)} aria-hidden="true">
   <defs><radialGradient id="ariadne-figure-light"><stop stopColor="#e9c27f" stopOpacity=".72"/><stop offset=".48" stopColor="#bb8a5b" stopOpacity=".3"/><stop offset="1" stopColor="#bb8a5b" stopOpacity="0"/></radialGradient></defs>
   <ellipse cx="1225" cy="780" rx="455" ry="372" fill="url(#ariadne-figure-light)" className="ariadne-arrival-light"/>
   <g className="ariadne-alone">
    <path d="M709 944Q748 825 834 790Q912 771 984 823L1044 1028H665Z" fill="#494047" stroke="#9a8061" strokeOpacity=".6" strokeWidth="7"/>
    <path d="M750 917Q822 875 938 912" fill="none" stroke="#d0bb96" strokeOpacity=".25" strokeWidth="5"/>
    <Figure x={876} y={933} scale={1.28} character="ariadne"/>
    <path d="M842 731Q876 705 910 731M845 729Q831 710 839 696Q858 706 859 724M866 715Q868 691 883 686Q895 704 884 722M895 725Q910 704 926 710Q927 727 911 736" fill="none" stroke="#b79a68" strokeWidth="3"/>
    <path d="M821 823Q784 855 807 899M931 824Q966 857 945 892" fill="none" stroke="#8f6b6d" strokeWidth="5"/>
   </g>
   <g className="ariadne-dionysus">
    <path d="M1088 929Q1114 862 1173 853Q1230 861 1270 929L1306 1028H1066Z" fill="#5c414b" stroke="#c1a06e" strokeOpacity=".74" strokeWidth="6"/>
    <Figure x={1181} y={927} scale={1.34} character="dionysus"/>
    <path d="M1143 691Q1181 663 1219 691M1148 689Q1130 666 1140 650Q1162 662 1162 684M1174 682Q1172 652 1190 644Q1207 666 1193 686M1200 685Q1218 659 1236 668Q1237 688 1219 698" fill="#72754a" stroke="#d0b77f" strokeWidth="4"/>
    <path d="M1128 844Q1086 831 1060 855Q1038 874 1018 869" fill="none" stroke="#d0ba95" strokeWidth="13" strokeLinecap="round"/>
    <path d="M1128 844Q1086 831 1060 855Q1038 874 1018 869" fill="none" stroke="#71394d" strokeWidth="8" strokeLinecap="round"/>
    <path d="M1018 869Q1002 861 994 870" fill="none" stroke="#d8c49c" strokeWidth="8" strokeLinecap="round"/>
   </g>
   <g className="ariadne-thiasos">
    <Figure x={1402} y={908} scale={.77} pose="dance" character="maenad"/>
    <Figure x={1537} y={922} scale={.68} pose="dance" character="maenad"/>
    <Figure x={1640} y={931} scale={.67} character="silenus"/>
    <path d="M1367 782L1326 653M1514 815L1557 686" stroke="#9b754e" strokeWidth="7" strokeLinecap="round"/>
    <path d="M1326 653Q1297 628 1302 606Q1326 616 1330 643Q1350 612 1368 626Q1358 653 1336 663Z" fill="#72754a" stroke="#c1aa78" strokeWidth="3"/>
    <path d="M1557 686Q1530 661 1535 639Q1559 650 1561 677Q1582 647 1600 661Q1589 687 1567 696Z" fill="#72754a" stroke="#c1aa78" strokeWidth="3"/>
   </g>
   <g className="ariadne-flora" fill="#72754a" stroke="#b79a68" strokeWidth="3">
    <path d="M1050 1018Q1011 916 1042 871Q1084 914 1063 967Q1104 908 1137 928Q1120 988 1068 1008Z"/>
    <path d="M1300 1031Q1283 922 1327 893Q1358 943 1325 985Q1381 951 1402 979Q1367 1026 1316 1020Z"/>
    <path d="M1123 1008Q1092 955 1124 926Q1155 957 1139 990Q1178 968 1195 990Q1170 1021 1137 1017Z"/>
    <g fill="#9b5361" stroke="#d0b77f" strokeWidth="2">
     <circle cx="1051" cy="873" r="10"/><circle cx="1132" cy="932" r="9"/><circle cx="1330" cy="895" r="10"/><circle cx="1394" cy="979" r="9"/>
    </g>
   </g>
  </svg>

  <svg className="ariadne-layer ariadne-foreground" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(1.55)} aria-hidden="true">
   <g className="ariadne-vines" fill="none" stroke="#72754a" strokeWidth="10" strokeLinecap="round">
    <path d="M46 1080Q116 934 220 947T382 854M1874 1080Q1801 930 1696 960T1540 852"/>
   </g>
   <g className="ariadne-leaves" fill="#72754a" stroke="#b79a68" strokeWidth="3">
    <path d="M204 965Q162 927 187 893Q227 911 222 947Q260 910 290 938Q272 977 229 976Z"/>
    <path d="M1711 978Q1671 941 1696 906Q1735 923 1730 960Q1767 923 1798 951Q1780 990 1737 989Z"/>
    <path d="M91 1030Q56 997 79 970Q112 985 109 1017Q139 986 165 1008Q148 1042 114 1041Z"/>
   </g>
  </svg>
 </div>;
}

function DionysusUnderworld({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.38}px,0)`});
 return <div className="exhibition-scene ex-dionysus-underworld">
  <svg className="underworld-layer underworld-depth" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.13)} aria-hidden="true">
   <defs>
    <linearGradient id="underworld-cavern" x2="1" y2=".7"><stop stopColor="#17141e"/><stop offset=".46" stopColor="#302633"/><stop offset=".78" stopColor="#55434a"/><stop offset="1" stopColor="#b69a70"/></linearGradient>
    <linearGradient id="underworld-ground" x2="0" y2="1"><stop stopColor="#59474a"/><stop offset="1" stopColor="#211827"/></linearGradient>
    <linearGradient id="underworld-river" x2="1" y2=".15"><stop stopColor="#1c2531"/><stop offset=".55" stopColor="#35414b"/><stop offset="1" stopColor="#8b755f" stopOpacity=".5"/></linearGradient>
    <linearGradient id="underworld-veil" x2="1" y2="0"><stop stopColor="#e9dcc0" stopOpacity="0"/><stop offset=".55" stopColor="#e9dcc0" stopOpacity=".18"/><stop offset="1" stopColor="#f1d99c" stopOpacity=".55"/></linearGradient>
    <radialGradient id="underworld-portal-glow"><stop stopColor="#fff0bd" stopOpacity=".95"/><stop offset=".3" stopColor="#d7ae6e" stopOpacity=".52"/><stop offset="1" stopColor="#c2965d" stopOpacity="0"/></radialGradient>
    <linearGradient id="underworld-rock" x2="0" y2="1"><stop stopColor="#77645f"/><stop offset="1" stopColor="#28212a"/></linearGradient>
   </defs>
   <rect width="1920" height="1080" fill="#211827"/>
   <path d="M0 0H1920V754H0Z" fill="url(#underworld-cavern)"/>
   <path d="M0 0L212 0L310 126L274 284L387 398L318 568L433 730H0ZM1920 0H1666L1575 135L1613 290L1503 421L1581 584L1442 766H1920Z" fill="#211827"/>
   <path d="M0 386L179 301L266 371L365 287L448 414L556 349L641 446L720 360L814 450V780H0ZM1920 376L1746 292L1650 379L1550 298L1464 415L1363 342L1263 455L1185 378L1099 476V786H1920Z" fill="#342b35"/>
   <path d="M0 653Q242 615 430 656T858 638T1297 651T1687 630T1920 646V1080H0Z" fill="url(#underworld-ground)"/>
   <path d="M0 747Q250 683 530 746T1042 728T1491 745T1920 700V888Q1652 865 1409 898T918 884T446 910T0 891Z" fill="url(#underworld-river)"/>
   <path d="M0 769Q255 704 508 765T1000 750T1458 769T1920 723M0 837Q242 783 486 833T971 821T1460 843T1920 794" fill="none" stroke="#b1a99c" strokeOpacity=".22" strokeWidth="5"/>
   <path d="M0 872Q240 829 512 881T1025 869T1500 882T1920 846" fill="none" stroke="#d4b77b" strokeOpacity=".18" strokeWidth="3"/>
   <g className="underworld-styx">
    <path d="M0 725Q274 669 532 723T1003 710T1467 728T1920 681" fill="none" stroke="#151b24" strokeWidth="26" strokeOpacity=".75"/>
    <path d="M105 786Q240 758 353 784M603 786Q737 756 873 780M1211 800Q1341 766 1477 792" fill="none" stroke="#9aa5a4" strokeOpacity=".3" strokeWidth="4"/>
   </g>
   <g className="underworld-gate">
    <path d="M1140 644V420A196 196 0 0 1 1532 420V644Z" fill="#1a151e" stroke="url(#underworld-rock)" strokeWidth="32"/>
    <path d="M1181 644V425A155 155 0 0 1 1491 425V644Z" fill="#17131d" stroke="#b49a74" strokeOpacity=".42" strokeWidth="9"/>
    <path d="M1210 644V429A126 126 0 0 1 1462 429V644Z" fill="url(#underworld-portal-glow)" className="underworld-portal"/>
    <path d="M1202 644V422A134 134 0 0 1 1470 422V644" fill="none" stroke="#c7a46d" strokeOpacity=".76" strokeWidth="8"/>
    <path d="M1130 650H1545M1160 674H1513" stroke="#a48c6b" strokeOpacity=".58" strokeWidth="14"/>
   </g>
   <path d="M1230 0L1374 0L1398 655L1288 655Z" fill="url(#underworld-veil)" className="underworld-sunbeam"/>
   <ellipse cx="1340" cy="485" rx="440" ry="450" fill="url(#underworld-portal-glow)" className="underworld-aura"/>
   <path d="M0 1080L374 784L562 793L302 1080ZM1920 1080L1620 789L1456 800L1718 1080Z" fill="#302832"/>
   <g className="underworld-withered" fill="#4a5142" stroke="#8c8069" strokeOpacity=".55" strokeWidth="5">
    <path d="M529 775Q564 697 545 648M550 714Q504 694 494 661Q535 661 551 695M548 688Q584 652 611 664Q593 699 553 704Z"/>
    <path d="M1627 767Q1590 692 1612 637M1609 711Q1648 682 1678 696Q1660 729 1614 724M1609 685Q1571 652 1542 671Q1563 702 1603 702Z"/>
   </g>
  </svg>

  <svg className="underworld-layer underworld-figures" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.78)} aria-hidden="true">
   <defs><radialGradient id="underworld-mother-glow"><stop stopColor="#f6e5bb" stopOpacity=".76"/><stop offset=".56" stopColor="#d7b77c" stopOpacity=".26"/><stop offset="1" stopColor="#d7b77c" stopOpacity="0"/></radialGradient></defs>
   <ellipse cx="1284" cy="746" rx="330" ry="350" fill="url(#underworld-mother-glow)" className="underworld-semele-light"/>
   <g className="underworld-procession">
    <Figure x={815} y={946} scale={1.27} character="dionysus"/>
    <path d="M785 706Q815 675 845 706M790 704Q774 680 783 664Q802 674 804 699M808 695Q808 665 826 657Q842 678 829 700M832 700Q850 674 867 682Q868 700 849 710" fill="#72754a" stroke="#d0b77f" strokeWidth="4"/>
    <path d="M858 841L909 601" stroke="#9b754e" strokeWidth="11" strokeLinecap="round"/>
    <path d="M906 605Q865 577 881 548Q912 566 911 593Q943 562 968 581Q953 614 916 622Z" fill="#72754a" stroke="#c1aa78" strokeWidth="4"/>
    <circle cx="909" cy="588" r="13" fill="#7b3848" stroke="#cfb580" strokeWidth="3"/>
    <path d="M870 848Q932 823 968 847" fill="none" stroke="#d7c6a9" strokeWidth="13" strokeLinecap="round"/>
    <path d="M870 848Q932 823 968 847" fill="none" stroke="#71394d" strokeWidth="8" strokeLinecap="round"/>
    <g className="underworld-semele">
     <Figure x={1205} y={928} scale={1.12} character="semele"/>
     <path d="M1178 705Q1205 679 1232 705M1181 703Q1164 683 1173 668Q1192 676 1193 698M1200 696Q1199 671 1214 664Q1229 682 1217 701M1222 700Q1240 677 1256 685Q1257 701 1239 710" fill="none" stroke="#d2bb84" strokeWidth="4"/>
     <path d="M1159 840Q1116 819 1081 839Q1051 855 1024 848" fill="none" stroke="#d9c6a5" strokeWidth="12" strokeLinecap="round"/>
     <path d="M1159 840Q1116 819 1081 839Q1051 855 1024 848" fill="none" stroke="#817260" strokeWidth="7" strokeLinecap="round"/>
    </g>
    <path d="M965 847Q990 836 1010 846" fill="none" stroke="#d7c6a9" strokeWidth="8" strokeLinecap="round"/>
    <g className="underworld-spirits" fill="#d3c5a6" opacity=".56">
     <path d="M1262 681Q1277 660 1292 681Q1278 694 1262 681ZM1304 734Q1317 715 1330 734Q1318 748 1304 734ZM1125 698Q1136 680 1149 699Q1137 712 1125 698Z"/>
    </g>
   </g>
   <g className="underworld-guiding-light" fill="none" stroke="#f1dbab" strokeOpacity=".65" strokeWidth="4">
    <path d="M971 844Q1028 800 1069 762T1176 694"/>
    <path d="M1005 876Q1072 826 1115 780T1225 711" strokeOpacity=".34"/>
   </g>
  </svg>

  <svg className="underworld-layer underworld-foreground" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(1.5)} aria-hidden="true">
   <path className="underworld-path" d="M0 1080Q279 950 482 874T880 783T1170 704" fill="none" stroke="#987d60" strokeOpacity=".33" strokeWidth="15" strokeDasharray="3 24"/>
   <g fill="#72754a" stroke="#9c8b6a" strokeOpacity=".52" strokeWidth="4">
    <path d="M0 1080Q74 921 146 958Q132 1011 70 1038Q139 1015 178 1050L142 1080Z"/>
    <path d="M1920 1080Q1837 933 1766 973Q1786 1019 1845 1043Q1778 1028 1741 1061L1780 1080Z"/>
    <path d="M337 1080Q375 989 429 1001Q430 1040 387 1062Q436 1043 464 1071L443 1080Z"/>
    <path d="M1556 1080Q1511 991 1457 1007Q1458 1043 1501 1066Q1453 1047 1424 1074L1445 1080Z"/>
   </g>
   <g className="underworld-dust" fill="#e9d39b">
    {[[755,705,5],[1016,680,4],[1148,618,5],[1375,535,4],[1430,688,5],[928,774,4],[1270,777,4]].map(([x,y,r],i)=><circle key={i} cx={x} cy={y} r={r}/>)}
   </g>
  </svg>
 </div>;
}

function DionysianPolis({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.36}px,0)`});
 return <div className="exhibition-scene ex-dionysian-polis">
  <svg className="polis-layer polis-city" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.14)} aria-hidden="true">
   <defs>
    <linearGradient id="polis-sky" x2="0" y2="1"><stop stopColor="#211827"/><stop offset=".48" stopColor="#493342"/><stop offset="1" stopColor="#92715e"/></linearGradient>
    <linearGradient id="polis-stone" x1="0" x2="1"><stop stopColor="#625149"/><stop offset=".24" stopColor="#d0bb92"/><stop offset=".53" stopColor="#98836a"/><stop offset=".8" stopColor="#e9dcc0"/><stop offset="1" stopColor="#614e4b"/></linearGradient>
    <linearGradient id="polis-ground" x2="0" y2="1"><stop stopColor="#837058"/><stop offset=".5" stopColor="#554047"/><stop offset="1" stopColor="#211827"/></linearGradient>
    <radialGradient id="polis-lantern-light"><stop stopColor="#f0d093" stopOpacity=".44"/><stop offset="1" stopColor="#e2bb79" stopOpacity="0"/></radialGradient>
    <pattern id="polis-meander" width="48" height="22" patternUnits="userSpaceOnUse"><path d="M1 20V2H23V15H8V8H16M25 2H47V20H32V8H40V15" fill="none" stroke="#b79a68" strokeWidth="2"/></pattern>
   </defs>
   <rect width="1920" height="1080" fill="url(#polis-sky)"/>
   <ellipse cx="1490" cy="405" rx="760" ry="440" fill="url(#polis-lantern-light)"/>
   <path d="M0 560L168 432L310 528L469 389L628 541L782 431L948 544L1108 392L1268 532L1433 401L1592 530L1766 398L1920 496V746H0Z" fill="#332936" opacity=".8"/>
   <path d="M0 616L181 505L345 611L513 456L682 609L858 487L1036 613L1198 465L1368 608L1534 472L1693 601L1847 478L1920 521V765H0Z" fill="#493941" opacity=".83"/>
   <path d="M0 692H1920V1080H0Z" fill="url(#polis-ground)"/>
   <path d="M0 727H1920M0 811H1920M0 916H1920M0 1041H1920" fill="none" stroke="#d3bb90" strokeOpacity=".2" strokeWidth="4"/>
   <g fill="none" stroke="#d3bb90" strokeOpacity=".14" strokeWidth="3">
    <path d="M152 716L0 1080M440 716L305 1080M732 716L677 1080M1024 716L1050 1080M1316 716L1440 1080M1608 716L1850 1080"/>
   </g>
   <g className="polis-rural-shrine" stroke="#cdb58b" strokeWidth="5">
    <path d="M65 609L172 530L281 609Z" fill="url(#polis-stone)"/>
    <path d="M79 610H267V629H79Z" fill="#8f7757"/>
    {[105,149,193,237].map(x=><g key={x} fill="url(#polis-stone)"><path d={`M${x} 630H${x+24}V704H${x}Z`}/><path d={`M${x-5} 624H${x+29}V631H${x-5}Z`}/></g>)}
    <path d="M61 702H284V715H61Z" fill="#ad9672"/>
   </g>
   <g className="polis-antesteria-house">
    <path d="M350 620L497 516L645 620V711H350Z" fill="#4a3b3d" stroke="#b79a68" strokeOpacity=".55" strokeWidth="5"/>
    <path d="M373 630V554H622V711H373Z" fill="#302832" stroke="#cdb58b" strokeOpacity=".5" strokeWidth="4"/>
    <path d="M467 711V626A31 31 0 0 1 529 626V711Z" fill="#211827" stroke="#b79a68" strokeOpacity=".5" strokeWidth="4"/>
    <path d="M390 579H449V633H390ZM545 579H603V633H545Z" fill="#211827" stroke="#9e8261" strokeWidth="4"/>
    <g fill="#762f50" stroke="#d1b987" strokeWidth="3">
     <path d="M407 662H438L435 703H410Z"/><path d="M402 658H443V665H402Z"/>
     <path d="M559 658H590L587 699H562Z"/><path d="M554 654H595V661H554Z"/>
    </g>
   </g>
   <g className="polis-theatre">
    <path d="M695 687Q835 566 975 687V709H695Z" fill="#48333e" stroke="#cbb58e" strokeWidth="5"/>
    {[0,1,2,3,4,5].map(i=><path key={i} d={`M${715-i*11} ${666-i*21}A${250+i*21} ${(250+i*21)*.58} 0 0 1 ${955+i*11} ${666-i*21}`} fill="none" stroke="#cbb58e" strokeOpacity=".72" strokeWidth="11"/> )}
    <path d="M812 573H939V657H812Z" fill="#211827" stroke="#b79a68" strokeWidth="4"/>
    {[825,853,881,909].map(x=><path key={x} d={`M${x} 581H${x+10}V649H${x}Z`} fill="url(#polis-stone)"/> )}
    <path d="M808 570H944V578H808Z" fill="url(#polis-meander)"/>
   </g>
   <g className="polis-athens-sanctuary" stroke="#cdb58b" strokeWidth="5">
    <path d="M1300 609L1466 481L1633 609Z" fill="url(#polis-stone)"/>
    <path d="M1323 613H1610V633H1323Z" fill="#89745d"/>
    {[1350,1406,1462,1518,1574].map(x=><g key={x} fill="url(#polis-stone)"><path d={`M${x} 635H${x+31}V708H${x}Z`}/><path d={`M${x-7} 628H${x+38}V636H${x-7}Z`}/></g>)}
    <path d="M1296 706H1637V721H1296Z" fill="#ad9672"/>
    <path d="M1278 707H1651V721H1278Z" fill="url(#polis-meander)" stroke="none"/>
   </g>
   <g className="polis-stoa" fill="#342a32" stroke="#b79a68" strokeOpacity=".5" strokeWidth="4">
    <path d="M1644 640H1920V708H1644Z"/>
    {[1663,1717,1771,1825,1879].map(x=><path key={x} d={`M${x} 641V707`} stroke="#d0bb92" strokeWidth="10"/> )}
    <path d="M1640 634H1920V645H1640Z" fill="url(#polis-meander)" stroke="none"/>
   </g>
   <path d="M0 624Q126 540 252 624T504 624T756 624T1008 624T1260 624T1512 624T1764 624T2016 624" fill="none" stroke="#72754a" strokeWidth="10" className="polis-garland"/>
   <g fill="#72754a" stroke="#c1aa78" strokeWidth="2">
    {[[130,584],[260,603],[389,603],[518,596],[648,611],[778,600],[908,599],[1038,603],[1168,593],[1298,593],[1428,573],[1558,602],[1688,599],[1818,593]].map(([x,y],i)=><path key={i} d={`M${x} ${y}q-19 -19 -8 -31q16 8 13 25q17 -21 29 -9q-5 18 -28 22Z`}/>)}
   </g>
   <g fill="#e9dcc0" stroke="#b79a68" strokeWidth="2">
    {[[407,592],[585,604],[747,579],[1114,599],[1380,574],[1572,593],[1785,589]].map(([x,y],i)=><g key={i} transform={`translate(${x} ${y})`}><circle cy="-6" r="5"/><circle cx="6" r="5"/><circle cy="6" r="5"/><circle cx="-6" r="5"/><circle r="3" fill="#b79a68"/></g>)}
   </g>
  </svg>

  <svg className="polis-layer polis-procession" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.82)} aria-hidden="true">
   <g className="polis-procession-people">
    <Figure x={185} y={939} scale={.72} pose="dance" character="maenad"/>
    <Figure x={354} y={919} scale={.73} character="silenus"/>
    <Figure x={516} y={942} scale={.78} character="maenad"/>
    <Figure x={682} y={926} scale={.72} character="nymph"/>
    <Figure x={851} y={943} scale={.8} pose="dance" character="maenad"/>
    <Figure x={1020} y={916} scale={.76} character="silenus"/>
    <Figure x={1190} y={940} scale={.8} pose="dance" character="maenad"/>
    <Figure x={1360} y={919} scale={.77} character="dionysus"/>
    <Figure x={1530} y={942} scale={.79} pose="dance" character="maenad"/>
    <Figure x={1710} y={924} scale={.74} character="silenus"/>
   </g>
   <g fill="none" stroke="#72754a" strokeWidth="7" strokeLinecap="round">
    <path d="M185 820L164 701M516 823L493 694M851 823L875 696M1190 819L1162 689M1530 819L1557 688"/>
   </g>
   <g fill="#72754a" stroke="#c1aa78" strokeWidth="2">
    {[[164,701],[493,694],[875,696],[1162,689],[1557,688]].map(([x,y],i)=><path key={i} d={`M${x} ${y}q-29 -22 -18 -41q22 9 22 32q22 -27 39 -12q-5 23 -39 28Z`}/>)}
   </g>
   <g className="polis-musicians" fill="none" stroke="#d5c19d" strokeWidth="5" strokeLinecap="round">
    <path d="M335 837Q354 814 374 837M342 832V879M368 832V879M343 833H367M347 835V876M354 835V879M361 835V876"/>
    <path d="M489 837Q507 818 525 837M492 834V871M522 834V871M493 835H521"/>
    <ellipse cx="1002" cy="845" rx="28" ry="15" stroke="#b79a68" strokeWidth="7"/>
    <path d="M976 844Q1002 809 1028 844M979 846Q1002 875 1025 846"/>
    <path d="M1295 824L1353 792M1318 811L1308 797M1330 805L1320 791M1342 799L1333 785"/>
   </g>
   <g className="polis-offerings" fill="#762f50" stroke="#d1b987" strokeWidth="3">
    <path d="M273 841H309L305 881H277Z"/><path d="M267 837H315V845H267Z"/>
    <path d="M718 838H753L749 878H722Z"/><path d="M712 834H759V842H712Z"/>
    <path d="M1640 842H1678L1674 884H1644Z"/><path d="M1634 838H1684V846H1634Z"/>
   </g>
   <g className="polis-masks" transform="translate(747 815)" stroke="#d8c49c" strokeWidth="3">
    <path d="M-25-24Q0-37 25-24L20 9Q14 27 0 34Q-15 26-20 9Z" fill="#87745f"/>
    <path d="M-14-6Q-8-13-2-6M4-6Q10-13 16-6M-10 12Q0 17 10 12" fill="none"/>
   </g>
   <g fill="#b79a68" stroke="#e9dcc0" strokeWidth="3">
    <path d="M101 840H133L129 878Q117 887 105 878Z"/><path d="M95 837H139V844H95Z"/>
    <path d="M1780 835H1812L1808 873Q1796 882 1784 873Z"/><path d="M1774 832H1818V839H1774Z"/>
   </g>
  </svg>

  <svg className="polis-layer polis-foreground" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(1.65)} aria-hidden="true">
   <g className="polis-vines" fill="none" stroke="#72754a" strokeWidth="11" strokeLinecap="round">
    <path d="M0 1080Q85 938 205 972T385 893M1920 1080Q1842 942 1734 974T1556 885"/>
   </g>
   <g className="polis-foreground-leaves" fill="#72754a" stroke="#b79a68" strokeWidth="3">
    <path d="M190 984Q148 944 174 908Q215 927 209 966Q247 927 279 956Q260 997 216 995Z"/>
    <path d="M1741 986Q1702 947 1727 912Q1766 930 1760 969Q1798 931 1829 960Q1811 1000 1768 997Z"/>
    <path d="M65 1040Q31 1008 54 978Q87 994 83 1026Q114 994 141 1017Q123 1051 89 1051Z"/>
    <path d="M1846 1040Q1812 1008 1835 978Q1868 994 1864 1026Q1895 994 1922 1017Q1904 1051 1870 1051Z"/>
   </g>
   <g className="polis-particles" fill="#f1d8a4">
    {[[308,768,4],[620,725,3],[897,742,4],[1135,767,3],[1450,726,4],[1698,760,3],[1011,694,3],[536,801,3]].map(([x,y,r],i)=><circle key={i} cx={x} cy={y} r={r} style={{animationDelay:`${-i*1.1}s`}}/>)}
   </g>
  </svg>
 </div>;
}

function MaenadThiasos({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.36}px,0)`});
 return <div className="exhibition-scene ex-maenad-thiasos">
  <svg className="maenad-layer maenad-mountains" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.13)} aria-hidden="true">
   <defs>
    <linearGradient id="maenad-sky" x2="0" y2="1"><stop stopColor="#211827"/><stop offset=".52" stopColor="#493342"/><stop offset="1" stopColor="#87745f"/></linearGradient>
    <linearGradient id="maenad-mountain" x2="0" y2="1"><stop stopColor="#59444f"/><stop offset="1" stopColor="#28232f"/></linearGradient>
    <linearGradient id="maenad-earth" x2="0" y2="1"><stop stopColor="#75604f"/><stop offset="1" stopColor="#211827"/></linearGradient>
    <radialGradient id="maenad-moonlight"><stop stopColor="#d8c49c" stopOpacity=".4"/><stop offset="1" stopColor="#d8c49c" stopOpacity="0"/></radialGradient>
    <radialGradient id="maenad-dionysian-light"><stop stopColor="#d8b77c" stopOpacity=".58"/><stop offset=".45" stopColor="#8e685e" stopOpacity=".2"/><stop offset="1" stopColor="#8e685e" stopOpacity="0"/></radialGradient>
   </defs>
   <rect width="1920" height="1080" fill="url(#maenad-sky)"/>
   <circle cx="960" cy="296" r="248" fill="url(#maenad-moonlight)"/>
   <circle cx="960" cy="296" r="83" fill="#d9c9aa" fillOpacity=".56"/>
   <path d="M0 591L160 461L292 535L453 345L608 524L766 400L910 548L1070 373L1232 544L1408 383L1565 546L1756 407L1920 502V804H0Z" fill="url(#maenad-mountain)"/>
   <path d="M0 664L157 547L326 643L489 473L666 649L823 508L990 658L1143 485L1313 652L1482 510L1654 654L1810 524L1920 592V854H0Z" fill="#34303a"/>
   <path d="M0 750Q260 692 474 752T930 738T1396 752T1920 722V1080H0Z" fill="url(#maenad-earth)"/>
   <path d="M0 842Q316 770 598 829T1120 823T1645 818T1920 793" fill="none" stroke="#d4bd91" strokeOpacity=".2" strokeWidth="5"/>
   <g className="maenad-temenos" fill="none" stroke="#bca784" strokeOpacity=".38">
    <path d="M771 627L960 511L1149 627M800 630H1120M821 635V739M875 635V739M930 635V739M986 635V739M1041 635V739M1097 635V739M786 739H1134" strokeWidth="9"/>
    <path d="M787 626H1133" stroke="#d1bb91" strokeWidth="6"/>
   </g>
   <ellipse cx="971" cy="738" rx="480" ry="370" fill="url(#maenad-dionysian-light)"/>
   <g className="maenad-orbit-lines" fill="none" stroke="#d7bb84" strokeOpacity=".24" strokeWidth="5">
    <path d="M339 863C349 671 579 540 800 591C1042 646 1224 827 1450 781C1618 747 1694 587 1580 493"/>
    <path d="M420 921C480 746 671 645 846 679C1038 716 1171 884 1369 868C1547 854 1664 719 1630 596" strokeDasharray="9 15"/>
   </g>
   <g className="maenad-floor" fill="none" stroke="#d5c19d" strokeOpacity=".16" strokeWidth="4">
    <path d="M0 913Q450 867 905 914T1920 899M0 1018Q470 968 942 1017T1920 990"/>
    <path d="M423 814L170 1080M720 806L592 1080M1164 804L1310 1080M1472 794L1780 1080"/>
   </g>
  </svg>

  <svg className="maenad-layer maenad-dancers" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.76)} aria-hidden="true">
   <g className="maenad-dance-ring">
    <g className="maenad-dancer maenad-dancer-one"><Figure x={565} y={943} scale={1.04} pose="dance" character="maenad"/><path d="M532 723Q565 695 598 723M535 720Q520 696 530 683Q549 694 550 715M559 709Q558 682 575 674Q590 694 579 714M583 718Q601 694 619 702Q620 719 602 728" fill="#72754a" stroke="#d0b77f" strokeWidth="4"/></g>
    <g className="maenad-dancer maenad-dancer-two"><Figure x={787} y={929} scale={.94} pose="dance" character="maenad"/><path d="M757 703Q787 679 817 703M762 701Q744 682 752 668Q771 678 772 696M783 692Q782 666 797 658Q811 677 800 696M805 701Q825 679 840 687Q841 703 824 710" fill="#72754a" stroke="#d0b77f" strokeWidth="4"/></g>
    <g className="maenad-dancer maenad-dancer-three"><Figure x={1128} y={930} scale={.95} pose="dance" character="maenad"/><path d="M1098 704Q1128 679 1158 704M1103 701Q1085 682 1093 668Q1112 678 1113 696M1124 693Q1123 666 1138 658Q1152 678 1141 697M1146 701Q1165 679 1181 687Q1182 703 1165 711" fill="#72754a" stroke="#d0b77f" strokeWidth="4"/></g>
    <g className="maenad-dancer maenad-dancer-four"><Figure x={1357} y={945} scale={1.02} pose="dance" character="maenad"/><path d="M1327 724Q1357 696 1387 724M1331 721Q1314 699 1323 685Q1342 695 1342 715M1353 708Q1351 682 1367 674Q1381 694 1370 714M1375 719Q1396 696 1412 704Q1413 721 1394 730" fill="#72754a" stroke="#d0b77f" strokeWidth="4"/></g>
    <g className="maenad-dionysus"><Figure x={972} y={860} scale={.9} character="dionysus"/><path d="M946 648Q972 622 998 648M950 646Q934 625 942 610Q960 620 961 640M968 637Q967 612 981 604Q995 623 985 642M988 645Q1007 623 1021 631Q1022 647 1005 655" fill="#72754a" stroke="#d0b77f" strokeWidth="4"/></g>
   </g>
   <g className="maenad-animal-skins">
    {[[565,943,1.04],[787,929,.94],[1128,930,.95],[1357,945,1.02]].map(([x,y,scale])=><g key={x} transform={`translate(${x} ${y}) scale(${scale})`}>
     <path d="M-43-101Q-31-112-17-101Q-5-111 8-101Q23-112 39-101L31-77Q17-83 4-73Q-10-83-24-76L-34-82Z" fill="#87745f" stroke="#d0bb92" strokeOpacity=".8" strokeWidth="3"/>
     <path d="M-31-99Q-22-91-30-84M-9-100Q0-91-8-83M14-101Q22-92 14-84M33-98Q39-90 32-84" fill="none" stroke="#d5c19d" strokeOpacity=".72" strokeWidth="2"/>
    </g>)}
   </g>
   <g className="maenad-thiasos-elders">
    <Figure x={403} y={958} scale={.78} character="silenus"/>
    <Figure x={1537} y={952} scale={.79} character="silenus"/>
   </g>
   <g className="maenad-thyrsi" fill="none" strokeLinecap="round">
    <path d="M520 839L465 569M755 829L822 559M1125 831L1060 559M1334 844L1408 570" stroke="#9b754e" strokeWidth="9"/>
    <path d="M465 569L455 529M822 559L831 520M1060 559L1048 520M1408 570L1420 530" stroke="#b79a68" strokeWidth="5"/>
    <g fill="#72754a" stroke="#c1aa78" strokeWidth="3">
     <path d="M455 530Q420 506 438 476Q470 488 466 516Q497 486 521 507Q506 540 469 548Z"/>
     <path d="M831 520Q800 496 818 466Q849 478 844 506Q874 478 898 498Q883 531 847 538Z"/>
     <path d="M1048 520Q1015 495 1034 465Q1065 477 1060 506Q1090 477 1114 498Q1098 532 1063 539Z"/>
     <path d="M1420 530Q1387 506 1405 476Q1437 488 1432 516Q1462 487 1486 507Q1470 540 1435 548Z"/>
    </g>
    <g fill="#87745f" stroke="#d0bb92" strokeWidth="3">
     <path d="M450 479Q462 457 474 479L470 510H454Z"/>
     <path d="M830 469Q842 447 854 469L850 500H834Z"/>
     <path d="M1046 468Q1058 446 1070 468L1066 500H1050Z"/>
     <path d="M1417 479Q1429 457 1441 479L1437 510H1421Z"/>
    </g>
   </g>
   <g className="maenad-music" fill="none" stroke="#d8c49c" strokeWidth="5" strokeLinecap="round">
    <path d="M366 833Q390 808 414 833M374 825V872M406 825V872M375 826H405M382 828V868M390 828V871M398 828V868"/>
    <path d="M1493 819Q1514 801 1535 819M1497 815V853M1531 815V853M1498 816H1530"/>
    <ellipse cx="680" cy="836" rx="29" ry="16" stroke="#b79a68" strokeWidth="8"/>
    <path d="M653 835Q680 798 707 835M656 838Q680 869 704 838"/>
    <path d="M1230 826L1284 795M1255 812L1244 797M1267 806L1257 791M1277 800L1268 785"/>
   </g>
  </svg>

  <svg className="maenad-layer maenad-foreground" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(1.55)} aria-hidden="true">
   <g className="maenad-garlands" fill="none" stroke="#72754a" strokeWidth="12" strokeLinecap="round">
    <path d="M0 1080Q82 935 201 969T391 882M1920 1080Q1839 931 1722 970T1538 877"/>
    <path d="M218 948Q292 894 359 905M1560 905Q1637 888 1705 936" strokeWidth="6"/>
   </g>
   <g className="maenad-ivy-leaves" fill="#72754a" stroke="#b79a68" strokeWidth="3">
    <path d="M193 976Q152 936 180 903Q220 922 213 962Q252 923 282 952Q262 990 221 988Z"/>
    <path d="M1727 977Q1685 938 1712 905Q1752 923 1745 963Q1784 924 1815 953Q1795 991 1754 989Z"/>
    <path d="M74 1037Q37 1002 62 973Q97 991 92 1024Q125 991 151 1016Q132 1050 96 1049Z"/>
    <path d="M1840 1036Q1804 1002 1829 973Q1864 991 1859 1024Q1892 991 1918 1016Q1900 1050 1864 1049Z"/>
   </g>
   <g className="maenad-dust" fill="#f1d8a4">
    {[[315,746,4],[505,626,3],[695,697,4],[870,572,3],[1080,611,4],[1270,680,3],[1477,739,4],[1020,774,3]].map(([x,y,r],i)=><circle key={i} cx={x} cy={y} r={r} style={{animationDelay:`${-i*1.1}s`}}/>)}
   </g>
  </svg>
 </div>;
}

function SanctuaryMysteries({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.36}px,0)`});
 return <div className="exhibition-scene ex-sanctuary-mysteries">
  <svg className="cult-layer cult-architecture" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.14)} aria-hidden="true">
   <defs>
    <linearGradient id="cult-wall" x2="0" y2="1"><stop stopColor="#211827"/><stop offset=".46" stopColor="#3b2b38"/><stop offset="1" stopColor="#59444a"/></linearGradient>
    <linearGradient id="cult-floor" x2="0" y2="1"><stop stopColor="#705b4c"/><stop offset="1" stopColor="#211827"/></linearGradient>
    <linearGradient id="cult-marble" x1="0" x2="1"><stop stopColor="#6d5950"/><stop offset=".26" stopColor="#e4d3b1"/><stop offset=".52" stopColor="#a69070"/><stop offset=".78" stopColor="#eee0c2"/><stop offset="1" stopColor="#66544b"/></linearGradient>
    <linearGradient id="cult-curtain" x2="0" y2="1"><stop stopColor="#684352"/><stop offset=".6" stopColor="#492c43"/><stop offset="1" stopColor="#211827"/></linearGradient>
    <radialGradient id="cult-lamp-glow"><stop stopColor="#f4d293" stopOpacity=".72"/><stop offset=".4" stopColor="#d99c57" stopOpacity=".28"/><stop offset="1" stopColor="#d99c57" stopOpacity="0"/></radialGradient>
    <radialGradient id="cult-sanctum-glow"><stop stopColor="#e9dcc0" stopOpacity=".74"/><stop offset=".52" stopColor="#b79a68" stopOpacity=".2"/><stop offset="1" stopColor="#b79a68" stopOpacity="0"/></radialGradient>
    <pattern id="cult-meander" width="48" height="22" patternUnits="userSpaceOnUse"><path d="M1 20V2H23V15H8V8H16M25 2H47V20H32V8H40V15" fill="none" stroke="#b79a68" strokeWidth="2"/></pattern>
   </defs>
   <rect width="1920" height="1080" fill="#211827"/>
   <path d="M0 0H1920V719H0Z" fill="url(#cult-wall)"/>
   <path d="M0 719H1920V1080H0Z" fill="url(#cult-floor)"/>
   <path d="M0 720H1920M0 791H1920M0 891H1920M0 1031H1920" fill="none" stroke="#d4bd91" strokeOpacity=".2" strokeWidth="4"/>
   <path d="M0 745L340 1080M310 720L682 1080M1610 720L1260 1080M1920 750L1530 1080" fill="none" stroke="#d4bd91" strokeOpacity=".12" strokeWidth="4"/>
   <path d="M0 0L260 0L442 192L366 376L518 590L470 741H0ZM1920 0H1660L1478 192L1554 376L1402 590L1450 741H1920Z" fill="#211827"/>
   <g className="cult-columns" fill="url(#cult-marble)" stroke="#d6c39d" strokeOpacity=".38" strokeWidth="4">
    {[178,360,560,1360,1560,1742].map((x,i)=><g key={x}>
     <path d={`M${x} 95H${x+78}V723H${x}Z`}/>
     <path d={`M${x-13} 82H${x+91}V105H${x-13}ZM${x-18} 712H${x+96}V735H${x-18}Z`}/>
     <path d={`M${x+18} 118V690M${x+39} 118V690M${x+60} 118V690`} fill="none" stroke="#493942" strokeOpacity=".35" strokeWidth="5"/>
    </g>)}
   </g>
   <path d="M503 115H1417V720H503Z" fill="#211827" stroke="#a78b63" strokeOpacity=".48" strokeWidth="9"/>
   <path d="M563 718V402A397 397 0 0 1 1357 402V718Z" fill="#17131d" stroke="#c1a476" strokeOpacity=".72" strokeWidth="13"/>
   <path d="M619 718V403A341 341 0 0 1 1301 403V718Z" fill="url(#cult-sanctum-glow)" className="cult-inner-light"/>
   <path d="M598 718V402A362 362 0 0 1 1322 402V718" fill="none" stroke="#d3bb90" strokeOpacity=".55" strokeWidth="6"/>
   <ellipse cx="960" cy="594" rx="520" ry="420" fill="url(#cult-sanctum-glow)" className="cult-sanctum-aura"/>
   <g className="cult-inner-curtains">
    <path d="M573 173H724Q690 365 728 588L680 718H573Z" fill="url(#cult-curtain)" stroke="#b79a68" strokeOpacity=".68" strokeWidth="6"/>
    <path d="M1347 173H1196Q1230 365 1192 588L1240 718H1347Z" fill="url(#cult-curtain)" stroke="#b79a68" strokeOpacity=".68" strokeWidth="6"/>
    <path d="M704 194Q676 379 711 591M1216 194Q1244 379 1209 591" fill="none" stroke="#d0b77f" strokeOpacity=".5" strokeWidth="4"/>
   </g>
   <g className="cult-mystery-silhouettes" fill="#17131d" opacity=".8">
    <path d="M836 653Q842 579 880 566L894 532H926L940 566Q975 580 980 653Z"/>
    <ellipse cx="910" cy="514" rx="23" ry="31"/>
    <path d="M985 661Q990 595 1026 580L1040 550H1070L1084 580Q1116 596 1122 661Z"/>
    <ellipse cx="1055" cy="533" rx="22" ry="30"/>
    <path d="M758 671Q763 617 791 607L801 583H827L838 607Q866 620 869 671Z"/>
    <ellipse cx="814" cy="570" rx="19" ry="26"/>
   </g>
   <g className="cult-relief" fill="none" stroke="#b79a68" strokeOpacity=".55" strokeWidth="5">
    <path d="M60 333Q120 261 180 333T300 333M1620 333Q1680 261 1740 333T1860 333"/>
    <path d="M65 354H295M1625 354H1855"/>
    <circle cx="180" cy="292" r="52"/><circle cx="1740" cy="292" r="52"/>
   </g>
   <g className="cult-wall-lamps">
    {[412,1508].map(x=><g key={x} transform={`translate(${x} 475)`}>
     <ellipse cy="28" rx="118" ry="138" fill="url(#cult-lamp-glow)"/>
     <path d="M0 83V19M-16 36Q-25 16-10-4Q-4 9 0 15Q12-2 17 12Q24 31 7 39Z" fill="#dc9b56" stroke="#f0d091" strokeWidth="3"/>
     <path d="M-25 83H25L17 103H-17Z" fill="#87745f" stroke="#d1bb91" strokeWidth="3"/>
    </g>)}
   </g>
   <path d="M462 726H1458" stroke="#c2a678" strokeOpacity=".6" strokeWidth="12"/>
   <path d="M478 738H1442" stroke="url(#cult-meander)" strokeWidth="18"/>
   <g className="cult-floor-glow"><ellipse cx="960" cy="817" rx="510" ry="170" fill="url(#cult-lamp-glow)"/></g>
  </svg>

  <svg className="cult-layer cult-officiants" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.74)} aria-hidden="true">
   <g className="cult-approach-procession">
    <Figure x={448} y={946} scale={.8} character="silenus"/>
    <Figure x={640} y={941} scale={.83} character="maenad"/>
    <Figure x={1280} y={941} scale={.85} character="maenad"/>
    <Figure x={1472} y={946} scale={.8} character="silenus"/>
    <path d="M610 827L571 704M1310 830L1351 701" stroke="#9b754e" strokeWidth="8" strokeLinecap="round"/>
    <path d="M571 704Q539 677 555 650Q584 663 580 692Q608 664 631 686Q616 715 583 722Z" fill="#72754a" stroke="#c1aa78" strokeWidth="3"/>
    <path d="M1351 701Q1318 674 1334 647Q1363 660 1360 689Q1388 661 1411 683Q1396 712 1363 719Z" fill="#72754a" stroke="#c1aa78" strokeWidth="3"/>
    <path d="M660 841L708 823M1260 841L1212 823" stroke="#d6c5a5" strokeWidth="9" strokeLinecap="round"/>
    <path d="M708 823L742 816M1212 823L1178 816" stroke="#8d7659" strokeWidth="6" strokeLinecap="round"/>
   </g>
   <g className="cult-altar" transform="translate(960 0)">
    <ellipse cx="0" cy="887" rx="262" ry="75" fill="#15121b" fillOpacity=".42"/>
    <path d="M-212 761H212L190 798H-190Z" fill="url(#cult-marble)" stroke="#d6c39d" strokeWidth="5"/>
    <path d="M-185 798H185V921H-185Z" fill="url(#cult-marble)" stroke="#c4aa7f" strokeWidth="5"/>
    <path d="M-161 819H161V902H-161Z" fill="#49343f" stroke="#d2bd8e" strokeOpacity=".66" strokeWidth="4"/>
    <path d="M-212 921H212V949H-212Z" fill="#a88e68" stroke="#e0cba6" strokeWidth="4"/>
    <path d="M-170 842H170M-170 878H170M-130 819V902M-85 819V902M-40 819V902M5 819V902M50 819V902M95 819V902M140 819V902" stroke="#d5bd90" strokeOpacity=".42" strokeWidth="3"/>
    <path d="M-184 755Q-134 718-86 755T10 755T106 755T184 755" fill="none" stroke="#72754a" strokeWidth="9"/>
    <g fill="#72754a" stroke="#c1aa78" strokeWidth="2">
     <path d="M-138 744Q-163 720-148 701Q-123 711-127 735Q-102 708-82 727Q-88 754-122 759Z"/>
     <path d="M37 748Q13 724 28 705Q53 715 49 739Q74 712 94 731Q88 758 54 763Z"/>
     <path d="M124 744Q100 720 115 701Q139 711 135 735Q160 708 180 727Q174 754 141 759Z"/>
    </g>
    <g fill="#e9dcc0" stroke="#b79a68" strokeWidth="3">
     {[-116,-98,-80,70,88,106].map((x,i)=><circle key={x} cx={x} cy={i%2?731:739} r="9"/> )}
    </g>
    <path d="M-94 708H-46L-52 753Q-70 765-88 753Z" fill="#762f50" stroke="#e0cba6" strokeWidth="4"/>
    <path d="M-100 704H-40V712H-100Z" fill="#c6a776"/>
    <path d="M55 708H103L97 753Q79 765 61 753Z" fill="#762f50" stroke="#e0cba6" strokeWidth="4"/>
    <path d="M49 704H109V712H49Z" fill="#c6a776"/>
    <g className="cult-offering-flame">
     <path d="M-14 701Q-49 666-17 622Q-12 650 2 658Q23 628 20 605Q65 662 17 704Z" fill="#d29556" stroke="#f0d091" strokeWidth="4"/>
     <path d="M-2 691Q-22 665 1 642Q3 665 15 672Q23 687 11 697Z" fill="#f2d89c"/>
    </g>
   </g>
   <g className="cult-offer-vessels" fill="#762f50" stroke="#d5c19d" strokeWidth="4">
    <path d="M257 919H315L307 997Q286 1016 265 997Z"/><path d="M248 913H324V923H248Z"/>
    <path d="M1605 918H1663L1655 996Q1634 1015 1613 996Z"/><path d="M1596 912H1672V922H1596Z"/>
    <path d="M350 944H389L385 984Q370 997 355 984Z"/><path d="M344 940H395V947H344Z"/>
    <path d="M1530 943H1569L1565 983Q1550 996 1535 983Z"/><path d="M1524 939H1575V946H1524Z"/>
   </g>
  </svg>

  <svg className="cult-layer cult-foreground" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(1.5)} aria-hidden="true">
   <g className="cult-foreground-vines" fill="none" stroke="#72754a" strokeWidth="11" strokeLinecap="round">
    <path d="M0 1080Q85 923 208 961T394 882M1920 1080Q1839 931 1715 968T1530 882"/>
   </g>
   <g className="cult-foreground-leaves" fill="#72754a" stroke="#b79a68" strokeWidth="3">
    <path d="M197 977Q155 936 182 903Q222 922 215 963Q254 924 284 953Q264 992 223 989Z"/>
    <path d="M1718 977Q1676 937 1703 904Q1743 922 1736 963Q1775 924 1805 953Q1786 992 1744 989Z"/>
   </g>
   <g className="cult-oil-lamps" fill="#c49356" stroke="#ead5a6" strokeWidth="3">
    <path d="M119 937Q158 908 197 937Q187 959 158 961Q129 959 119 937Z"/>
    <path d="M1723 937Q1762 908 1801 937Q1791 959 1762 961Q1733 959 1723 937Z"/>
    <path d="M93 934Q107 916 123 932M1797 934Q1812 916 1828 932" fill="none"/>
   </g>
   <g className="cult-orphic-leaf" transform="translate(1580 798) rotate(8)">
    <path d="M0 0Q82-30 139 0L128 94Q69 112 12 95Z" fill="#b79a68" fillOpacity=".82" stroke="#ead5a6" strokeWidth="5"/>
    <path d="M20 20Q71 5 119 20M17 43Q70 29 121 44M15 66Q68 52 119 67M13 87Q69 75 117 89" fill="none" stroke="#49343f" strokeWidth="4"/>
    <path d="M32 17L38 89M63 12L68 82M95 14L99 89" stroke="#49343f" strokeWidth="3"/>
   </g>
   <g className="cult-lamp-motes" fill="#f1d8a4">
    {[[305,754,4],[452,825,3],[704,667,4],[1216,690,3],[1424,790,4],[1698,720,3],[1070,747,3],[850,744,4]].map(([x,y,r],i)=><circle key={i} cx={x} cy={y} r={r} style={{animationDelay:`${-i*1.1}s`}}/>)}
   </g>
  </svg>
 </div>;
}

function RitualMeaning({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.38}px,0)`});
 return <div className="exhibition-scene ex-ritual-meaning">
  <svg className="meaning-layer meaning-landscape" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.12)} aria-hidden="true">
   <defs>
    <linearGradient id="meaning-sky" x2="0" y2="1"><stop stopColor="#211827"/><stop offset=".55" stopColor="#5a3b46"/><stop offset="1" stopColor="#b08059"/></linearGradient>
    <linearGradient id="meaning-ground" x2="0" y2="1"><stop stopColor="#72754a"/><stop offset=".45" stopColor="#514539"/><stop offset="1" stopColor="#211827"/></linearGradient>
    <linearGradient id="meaning-bark" x1="0" x2="1"><stop stopColor="#492c43"/><stop offset=".42" stopColor="#a07c59"/><stop offset=".7" stopColor="#6d5149"/><stop offset="1" stopColor="#211827"/></linearGradient>
    <radialGradient id="meaning-sun"><stop stopColor="#e9dcc0" stopOpacity=".62"/><stop offset=".48" stopColor="#b79a68" stopOpacity=".19"/><stop offset="1" stopColor="#b79a68" stopOpacity="0"/></radialGradient>
    <linearGradient id="meaning-robe" x2="1"><stop stopColor="#492c43"/><stop offset=".5" stopColor="#9b745e"/><stop offset="1" stopColor="#211827"/></linearGradient>
   </defs>
   <rect width="1920" height="1080" fill="url(#meaning-sky)"/>
   <ellipse cx="985" cy="370" rx="700" ry="410" fill="url(#meaning-sun)" className="meaning-light"/>
   <path d="M0 673Q178 540 366 620T735 610Q926 512 1123 607T1507 578Q1740 532 1920 621V1080H0Z" fill="#35303a" opacity=".8"/>
   <path d="M0 773Q217 640 436 718T825 704Q1035 634 1244 706T1646 681Q1810 661 1920 719V1080H0Z" fill="url(#meaning-ground)"/>
   <path d="M0 820Q245 740 488 794T960 772Q1260 741 1514 785T1920 756M0 905Q250 814 507 870T1000 846Q1274 808 1530 861T1920 831M0 1010Q304 910 594 966T1125 946Q1415 904 1650 956T1920 929" fill="none" stroke="#d7bb8b" strokeOpacity=".17" strokeWidth="4"/>
   <g fill="#211827" opacity=".75">
    <path d="M0 681Q80 626 154 679Q198 626 259 660L304 733H0ZM1603 688Q1673 621 1744 665Q1816 616 1920 678V747H1603Z"/>
   </g>
   <g fill="none" stroke="#d2bd8e" strokeOpacity=".22" strokeWidth="4">
    <path d="M70 681V539Q70 473 135 473Q200 473 200 539V680M1720 686V535Q1720 469 1785 469Q1850 469 1850 535V686"/>
    <path d="M53 541H217M1703 537H1867"/>
   </g>
  </svg>

  <svg className="meaning-layer meaning-vine" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.42)} aria-hidden="true">
   <g fill="none" stroke="url(#meaning-bark)" strokeLinecap="round">
    <path d="M960 1030Q904 900 957 759Q1005 622 946 468Q904 350 956 221Q983 156 940 89" strokeWidth="64"/>
    <path d="M941 782Q824 693 746 549Q675 416 523 355Q443 323 365 345" strokeWidth="29"/>
    <path d="M959 636Q1111 526 1179 392Q1254 244 1403 210Q1481 192 1556 224" strokeWidth="31"/>
    <path d="M941 844Q831 835 738 904Q668 957 566 951" strokeWidth="24"/>
    <path d="M978 808Q1116 776 1205 861Q1283 936 1395 938" strokeWidth="25"/>
    <path d="M754 553Q777 448 696 379M1177 397Q1113 307 1136 225M735 900Q701 826 630 799M1204 860Q1247 798 1230 725" strokeWidth="13"/>
   </g>
   <g className="meaning-leaves" fill="#72754a" stroke="#c6a674" strokeOpacity=".58" strokeWidth="3">
    {[
     'M352 347Q293 293 318 242Q376 253 379 316Q425 262 469 290Q451 351 382 356Z',
     'M509 347Q474 292 511 253Q560 283 546 333Q603 307 627 350Q592 393 532 362Z',
     'M1381 213Q1360 149 1408 118Q1451 158 1423 207Q1486 187 1502 234Q1463 271 1404 234Z',
     'M1514 227Q1512 165 1564 147Q1597 196 1561 236Q1629 232 1635 280Q1584 309 1538 261Z',
     'M546 952Q510 897 546 861Q592 888 581 938Q631 907 655 949Q622 988 565 967Z',
     'M1362 938Q1346 881 1391 853Q1430 894 1401 936Q1460 916 1477 960Q1441 997 1385 957Z',
     'M923 248Q870 216 884 167Q937 171 944 222Q975 176 1017 200Q1005 253 948 259Z',
     'M956 473Q1014 430 1055 463Q1037 514 982 503Q1014 552 978 582Q934 550 956 503Z',
     'M943 672Q884 641 899 592Q953 596 961 646Q995 600 1035 625Q1022 677 965 683Z'
    ].map((d,i)=><path key={i} d={d}/>)}
   </g>
   <g className="meaning-grapes" fill="#492c43" stroke="#b79a68" strokeWidth="3">
    {[[402,388],[426,408],[450,428],[420,438],[444,458],[468,478],[1390,275],[1413,296],[1436,317],[1404,327],[1427,348],[1450,369],[592,983],[614,1003],[636,1023],[605,1032],[628,1052],[652,1072],[1315,899],[1337,919],[1359,939],[1327,949],[1350,969],[1372,989]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="15"/>)}
   </g>
   <g fill="none" stroke="#c7a972" strokeWidth="5" opacity=".78">
    <path d="M936 252Q823 211 857 132Q886 91 831 67M1168 406Q1274 402 1280 324Q1277 279 1338 262M738 893Q624 842 585 783M1203 853Q1309 819 1326 757"/>
   </g>
  </svg>

  <svg className="meaning-layer meaning-figures" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.78)} aria-hidden="true">
   <g className="meaning-vineyard" opacity=".78" fill="none" stroke="#9c8b61" strokeWidth="6">
    <path d="M94 560Q220 506 340 562T578 560M99 600Q220 546 340 602T580 600M117 640Q225 587 347 642T562 640"/>
    <path d="M142 533V666M258 530V650M380 548V665M497 545V663" stroke="#72754a" strokeWidth="10"/>
   </g>
   <g className="meaning-dancers" stroke="#d8c49c" strokeWidth="5" strokeLinejoin="round">
    <g transform="translate(1324 501)">
     <path d="M-38 67Q-32 31-16 23L-6 10H17L27 25Q48 37 52 68L75 153H-66Z" fill="url(#meaning-robe)"/>
     <ellipse cx="6" cy="-2" rx="23" ry="29" fill="#c69a72"/>
     <path d="M-17-10Q-28-38-2-45Q26-43 29-19L23-4Q8-29-12-19Z" fill="#3c2935"/>
     <path d="M-13 25Q-57 45-83 20M43 32Q77 8 96-18M-64 153L-90 196M71 153L105 187" fill="none" strokeLinecap="round"/>
     <path d="M-92 19Q-113-4-95-26" fill="none" stroke="#b79a68" strokeWidth="9" strokeLinecap="round"/>
    </g>
    <g transform="translate(1516 541)">
     <path d="M-36 58Q-26 31-13 20L-5 5H17L27 23Q44 35 48 62L69 143H-61Z" fill="#72754a"/>
     <ellipse cx="7" cy="-5" rx="22" ry="28" fill="#d0a47b"/>
     <path d="M-16-12Q-25-38 0-46Q29-42 28-14L22-4Q5-29-12-19Z" fill="#30212f"/>
     <path d="M-12 22Q-46 6-73-12M44 31Q71 48 95 35M-58 143L-91 182M64 143L90 184" fill="none" strokeLinecap="round"/>
     <path d="M-78-11Q-96-34-78-53M-70-5Q-55-39-45-53" fill="none" stroke="#d5bc8d" strokeWidth="5"/>
    </g>
    <g transform="translate(1668 544)">
     <path d="M-34 60Q-24 34-11 20L-3 5H18L28 22Q44 37 48 64L65 141H-58Z" fill="#492c43"/>
     <ellipse cx="7" cy="-5" rx="22" ry="28" fill="#bd8c68"/>
     <path d="M-15-13Q-24-36 0-45Q26-41 27-16L20-4Q4-27-12-18Z" fill="#352431"/>
     <path d="M-10 23Q-42 43-66 59M43 32Q66 9 86-17M-54 141L-83 179M61 141L92 172" fill="none" strokeLinecap="round"/>
    </g>
   </g>
   <g className="meaning-mask-bearer" stroke="#d9c49b" strokeWidth="5" strokeLinejoin="round">
    <path d="M605 737Q615 681 646 663L656 637H699L710 668Q741 685 747 738L767 850H578Z" fill="url(#meaning-robe)"/>
    <path d="M646 669Q606 691 585 730M708 676Q747 706 776 725" fill="none" strokeLinecap="round"/>
    <ellipse cx="679" cy="624" rx="31" ry="39" fill="#c99570"/>
    <path d="M649 616Q642 570 677 564Q718 566 711 614L700 632Q691 596 660 599Z" fill="#342431"/>
    <path d="M651 602Q624 625 644 652M706 600Q733 625 713 651M657 640Q625 677 640 706" fill="none" stroke="#342431" strokeWidth="12" strokeLinecap="round"/>
    <path d="M756 720L803 757" fill="none" strokeLinecap="round"/>
    <g transform="translate(812 768) rotate(25)">
     <path d="M-22-31Q0-45 22-31L17 4Q13 24 0 32Q-13 24-17 4Z" fill="#d4b77b"/>
     <path d="M-11-8Q-4-16 0-7M3-7Q10-16 15-8M-10 11Q0 3 10 11" fill="none" stroke="#492c43" strokeWidth="3"/>
    </g>
    <path d="M595 851Q663 870 752 851" fill="none" stroke="#b79a68" strokeWidth="5"/>
   </g>
   <g className="meaning-procession" stroke="#d9c49b" strokeWidth="5" strokeLinejoin="round">
    <path d="M1374 872Q1382 835 1404 825L1412 808H1439L1448 827Q1472 841 1477 879L1487 951H1360Z" fill="#87745f"/>
    <ellipse cx="1426" cy="793" rx="21" ry="27" fill="#c89570"/>
    <path d="M1407 790Q1400 759 1429 753Q1451 759 1447 789L1439 800Q1432 778 1413 779Z" fill="#362634"/>
    <path d="M1374 852Q1337 829 1310 806M1473 850Q1503 826 1528 799" fill="none" strokeLinecap="round"/>
    <path d="M1308 806L1272 750M1528 799L1551 732" fill="none" stroke="#8b704b" strokeWidth="9" strokeLinecap="round"/>
    <path d="M1268 751Q1241 728 1258 705Q1284 717 1280 742Q1305 718 1326 739Q1311 766 1283 770Z" fill="#72754a"/>
    <path d="M1548 733Q1521 710 1538 687Q1564 699 1560 724Q1585 700 1606 721Q1591 748 1563 752Z" fill="#72754a"/>
   </g>
   <g className="meaning-dionysus">
    <ellipse cx="961" cy="833" rx="89" ry="21" fill="#17121d" opacity=".55"/>
    <path d="M907 735Q917 683 943 674H978Q1008 690 1015 739L1028 822H890Z" fill="url(#meaning-robe)" stroke="#d9c49b" strokeWidth="5"/>
    <ellipse cx="961" cy="646" rx="29" ry="37" fill="#c9916b" stroke="#e2c89b" strokeWidth="4"/>
    <path d="M933 644Q921 604 954 592Q990 597 991 636L980 650Q969 619 938 625Z" fill="#30212f"/>
    <path d="M937 615Q912 596 928 579M985 615Q1009 593 996 578M934 608Q956 582 989 606" fill="none" stroke="#72754a" strokeWidth="8" strokeLinecap="round"/>
    <path d="M914 692Q882 728 889 774M1002 695Q1033 723 1044 762" fill="none" stroke="#d9c49b" strokeWidth="11" strokeLinecap="round"/>
    <path d="M1050 805L1072 620" fill="none" stroke="#a27e4f" strokeWidth="8" strokeLinecap="round"/>
    <path d="M1072 622Q1047 603 1060 579Q1084 592 1080 614Q1103 590 1121 610Q1107 637 1080 640Z" fill="#72754a" stroke="#d0b77f" strokeWidth="3"/>
   </g>
   <g fill="#b79a68" opacity=".8">
    {[[876,370,4],[1084,333,5],[1194,588,4],[824,578,3],[1171,732,4],[1593,610,4],[523,716,4],[802,923,3],[1128,899,4]].map(([x,y,r],i)=><circle key={i} cx={x} cy={y} r={r}/>)}
   </g>
  </svg>
 </div>;
}

function ApolloDionysus({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.38}px,0)`});
 return <div className="exhibition-scene ex-apollo-dionysus">
  <svg className="duality-layer duality-architecture" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.14)} aria-hidden="true">
   <defs>
    <linearGradient id="duality-sky" x2="1" y2="1"><stop stopColor="#d1bb91"/><stop offset=".37" stopColor="#87745f"/><stop offset=".63" stopColor="#59404d"/><stop offset="1" stopColor="#211827"/></linearGradient>
    <linearGradient id="duality-floor" x2="0" y2="1"><stop stopColor="#b69c70"/><stop offset=".35" stopColor="#5a4949"/><stop offset="1" stopColor="#211827"/></linearGradient>
    <linearGradient id="duality-marble" x1="0" x2="1"><stop stopColor="#87745f"/><stop offset=".34" stopColor="#f0dfbd"/><stop offset=".67" stopColor="#b79a68"/><stop offset="1" stopColor="#59474b"/></linearGradient>
    <linearGradient id="duality-merge"><stop stopColor="#eee0c2" stopOpacity=".4"/><stop offset=".48" stopColor="#d7bb8b" stopOpacity=".04"/><stop offset="1" stopColor="#8e4a5a" stopOpacity=".22"/></linearGradient>
    <radialGradient id="duality-sun"><stop stopColor="#fff0c4" stopOpacity=".75"/><stop offset=".35" stopColor="#d9b477" stopOpacity=".3"/><stop offset="1" stopColor="#d9b477" stopOpacity="0"/></radialGradient>
   </defs>
   <rect width="1920" height="1080" fill="url(#duality-sky)"/>
   <path d="M0 0H890V760H0Z" fill="#e9dcc0" opacity=".12"/>
   <path d="M1020 0H1920V760H1020Z" fill="#211827" opacity=".16"/>
   <ellipse cx="675" cy="378" rx="415" ry="395" fill="url(#duality-sun)"/>
   <circle cx="675" cy="380" r="248" fill="none" stroke="#f0dfbd" strokeOpacity=".36" strokeWidth="3"/>
   <circle cx="675" cy="380" r="208" fill="none" stroke="#f0dfbd" strokeOpacity=".18" strokeWidth="2"/>
   <path d="M675 75V685M369 380H981M458 163L892 597M892 163L458 597" stroke="#f0dfbd" strokeOpacity=".2" strokeWidth="3"/>
   <g fill="url(#duality-marble)" stroke="#eee0c2" strokeOpacity=".45" strokeWidth="4">
    {[72,255,438].map(x=><g key={x}>
     <path d={`M${x} 116H${x+72}V735H${x}Z`}/>
     <path d={`M${x-12} 100H${x+84}V124H${x-12}ZM${x-18} 724H${x+90}V750H${x-18}Z`}/>
     <path d={`M${x+17} 139V710M${x+36} 139V710M${x+55} 139V710`} fill="none" stroke="#87745f" strokeOpacity=".3" strokeWidth="4"/>
    </g>)}
   </g>
   <path d="M0 759Q286 667 560 747T1060 733Q1400 692 1642 742T1920 707V1080H0Z" fill="url(#duality-floor)"/>
   <path d="M0 792Q274 736 520 788T1025 778Q1372 741 1640 784T1920 752M0 885Q285 824 550 871T1068 855Q1416 823 1683 863T1920 835M0 1002Q301 932 587 980T1114 966Q1450 936 1712 972T1920 951" fill="none" stroke="#f0dfbd" strokeOpacity=".2" strokeWidth="4"/>
   <path d="M0 756L366 1080M320 748L710 1080M765 739L972 1080M1190 735L1270 1080M1608 730L1576 1080M1920 743L1830 1080" fill="none" stroke="#f0dfbd" strokeOpacity=".13" strokeWidth="3"/>
   <path d="M0 0H1920V1080H0Z" fill="url(#duality-merge)"/>
   <path d="M78 766Q282 673 502 735T937 756Q1177 769 1356 714T1850 735" fill="none" stroke="#c6a674" strokeOpacity=".35" strokeWidth="8"/>
  </svg>

  <svg className="duality-layer duality-flora" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.4)} aria-hidden="true">
   <g fill="none" stroke="#5d493f" strokeLinecap="round">
    <path d="M1920 947Q1661 818 1532 625Q1434 480 1257 430Q1132 395 1052 293" strokeWidth="34"/>
    <path d="M1720 856Q1623 682 1672 519Q1703 416 1659 332M1511 617Q1546 489 1500 387M1311 454Q1374 340 1351 243M1705 780Q1545 762 1436 850" strokeWidth="15"/>
   </g>
   <g className="duality-vines" fill="#72754a" stroke="#c6a674" strokeOpacity=".65" strokeWidth="3">
    {[
     'M1658 338Q1605 285 1636 234Q1690 257 1683 313Q1735 277 1769 316Q1739 372 1685 348Z',
     'M1510 393Q1458 343 1488 293Q1542 316 1535 368Q1586 332 1620 371Q1591 426 1537 403Z',
     'M1381 300Q1334 247 1367 203Q1416 228 1403 278Q1453 245 1484 284Q1453 333 1400 310Z',
     'M1438 852Q1383 798 1415 749Q1467 774 1458 826Q1510 789 1544 830Q1513 882 1461 860Z',
     'M1685 529Q1642 470 1678 427Q1724 458 1706 506Q1760 476 1787 519Q1751 568 1704 538Z',
     'M1811 936Q1767 876 1803 833Q1849 865 1831 913Q1885 883 1912 926Q1877 975 1829 945Z',
     'M1280 440Q1235 389 1268 347Q1314 376 1300 421Q1350 391 1378 432Q1347 479 1298 452Z'
    ].map((d,i)=><path key={i} d={d}/>)}
   </g>
   <g fill="#492c43" stroke="#b79a68" strokeWidth="3">
    {[[1543,460],[1570,480],[1597,501],[1565,514],[1592,536],[1618,556],[1750,722],[1777,742],[1804,763],[1772,775],[1799,797],[1825,817],[1302,533],[1328,553],[1354,573],[1322,585],[1348,605]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="14"/>)}
   </g>
   <g fill="none" stroke="#d7bb8b" strokeWidth="5" strokeLinecap="round" opacity=".84">
    <path d="M1198 472Q1303 418 1285 331Q1275 272 1341 240M1498 620Q1605 626 1629 552Q1648 496 1716 487M1432 846Q1343 811 1330 742"/>
   </g>
  </svg>

  <svg className="duality-layer duality-figures" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.78)} aria-hidden="true">
   <g className="duality-apollo">
    <ellipse cx="698" cy="852" rx="145" ry="28" fill="#211827" opacity=".4"/>
    <ellipse cx="698" cy="525" rx="175" ry="230" fill="url(#duality-sun)" opacity=".5"/>
    <Figure x={708} y={836} scale={1.46} character="apollo" tone="url(#duality-marble)"/>
    <g transform="translate(572 583) rotate(-13)" color="#e9dcc0">
     <ExhibitObject kind="lyre" x="-80" y="-90" width="160" height="180"/>
    </g>
    <path d="M612 627Q567 593 548 549M618 642Q583 611 571 575" fill="none" stroke="#e9dcc0" strokeWidth="8" strokeLinecap="round" opacity=".88"/>
   </g>
   <g className="duality-dionysus">
    <ellipse cx="1195" cy="854" rx="154" ry="30" fill="#17121d" opacity=".5"/>
    <ellipse cx="1211" cy="560" rx="210" ry="280" fill="#7e4456" opacity=".12"/>
    <Figure x={1202} y={839} scale={1.48} pose="dance" character="dionysus" tone="url(#duality-marble)"/>
    <g transform="translate(1373 620) rotate(-15)" color="#d3bb89">
     <ExhibitObject kind="thyrsus" x="-92" y="-105" width="184" height="210"/>
    </g>
    <path d="M1152 675Q1112 630 1080 579M1244 680Q1302 641 1340 588" fill="none" stroke="#b79a68" strokeWidth="8" strokeLinecap="round" opacity=".88"/>
   </g>
   <g className="duality-music" fill="none" stroke="#f0dfbd" strokeLinecap="round">
    <path d="M756 429Q950 331 1110 422T1434 403" strokeWidth="5" opacity=".58"/>
    <path d="M741 454Q940 369 1111 456T1453 438" strokeWidth="3" opacity=".43"/>
    <path d="M824 381Q949 338 1040 389" strokeWidth="2" opacity=".45"/>
   </g>
   <g fill="#f1dfb8" opacity=".8">
    {[[928,393,5],[1010,378,4],[1092,399,4],[1175,424,5],[1288,410,3],[874,431,3],[1374,456,4],[1084,501,3]].map(([x,y,r],i)=><circle key={i} cx={x} cy={y} r={r}/>)}
   </g>
  </svg>
 </div>;
}

function NietzscheTragedy({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.38}px,0)`});
 return <div className="exhibition-scene ex-nietzsche-tragedy">
  <svg className="nietzsche-layer nietzsche-gallery" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.12)} aria-hidden="true">
   <defs>
    <linearGradient id="nietzsche-wall" x2="0" y2="1"><stop stopColor="#211827"/><stop offset=".48" stopColor="#584449"/><stop offset="1" stopColor="#87745f"/></linearGradient>
    <linearGradient id="nietzsche-floor" x2="0" y2="1"><stop stopColor="#9b8261"/><stop offset=".42" stopColor="#51404a"/><stop offset="1" stopColor="#211827"/></linearGradient>
    <linearGradient id="nietzsche-marble" x1="0" x2="1"><stop stopColor="#695449"/><stop offset=".3" stopColor="#e9dcc0"/><stop offset=".62" stopColor="#a88e68"/><stop offset="1" stopColor="#57454a"/></linearGradient>
    <linearGradient id="nietzsche-curtain" x2="0" y2="1"><stop stopColor="#8e4a5a"/><stop offset=".6" stopColor="#492c43"/><stop offset="1" stopColor="#211827"/></linearGradient>
    <radialGradient id="nietzsche-light"><stop stopColor="#f2dfa9" stopOpacity=".72"/><stop offset=".45" stopColor="#c79b61" stopOpacity=".22"/><stop offset="1" stopColor="#b79a68" stopOpacity="0"/></radialGradient>
   </defs>
   <rect width="1920" height="1080" fill="url(#nietzsche-wall)"/>
   <path d="M0 0H650V749H0ZM1270 0H1920V749H1270Z" fill="#211827" opacity=".22"/>
   <ellipse cx="966" cy="454" rx="638" ry="454" fill="url(#nietzsche-light)"/>
   <g fill="url(#nietzsche-marble)" stroke="#ddc9a1" strokeOpacity=".42" strokeWidth="4">
    {[116,316,516,1404,1604,1804].map(x=><g key={x}>
     <path d={`M${x} 94H${x+72}V743H${x}Z`}/>
     <path d={`M${x-12} 76H${x+84}V102H${x-12}ZM${x-18} 732H${x+90}V758H${x-18}Z`}/>
     <path d={`M${x+18} 121V711M${x+36} 121V711M${x+54} 121V711`} fill="none" stroke="#493942" strokeOpacity=".32" strokeWidth="4"/>
    </g>)}
   </g>
   <path d="M0 748H1920V1080H0Z" fill="url(#nietzsche-floor)"/>
   <path d="M0 786H1920M0 865H1920M0 978H1920M212 748L530 1080M583 748L798 1080M952 748L1064 1080M1320 748L1324 1080M1690 748L1578 1080" fill="none" stroke="#dfc99e" strokeOpacity=".16" strokeWidth="4"/>
   <path d="M0 768Q305 698 610 760T1200 749Q1560 703 1920 749" fill="none" stroke="#d2b582" strokeOpacity=".36" strokeWidth="8"/>
   <path d="M52 56H1868V733H52Z" fill="none" stroke="#c6a674" strokeOpacity=".25" strokeWidth="3"/>
   <path d="M72 76H1848V713H72Z" fill="none" stroke="#e9dcc0" strokeOpacity=".12" strokeWidth="2"/>
   <g fill="none" stroke="#c6a674" strokeOpacity=".45" strokeWidth="3">
    <path d="M600 742V340A360 360 0 0 1 1320 340V742"/>
    <path d="M637 742V346A323 323 0 0 1 1283 346V742"/>
    <path d="M628 339H1292"/>
   </g>
   <path d="M700 728V449Q700 287 960 287Q1220 287 1220 449V728Z" fill="#211827" stroke="#b79a68" strokeOpacity=".62" strokeWidth="10"/>
   <path d="M730 728V450Q730 317 960 317Q1190 317 1190 450V728Z" fill="#17131d"/>
   <path d="M744 723V454Q744 337 960 337Q1176 337 1176 454V723Z" fill="url(#nietzsche-curtain)"/>
   <path d="M960 363V726" stroke="#c6a674" strokeOpacity=".32" strokeWidth="4"/>
   <path d="M770 722Q842 644 915 722M1005 722Q1077 644 1150 722" fill="none" stroke="#e5cda0" strokeOpacity=".38" strokeWidth="5"/>
   <path d="M760 740H1160V766H760Z" fill="#b79a68" stroke="#e9dcc0" strokeOpacity=".4" strokeWidth="3"/>
   <path d="M811 766V797M1109 766V797" stroke="#b79a68" strokeWidth="7"/>
  </svg>

  <svg className="nietzsche-layer nietzsche-masks" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.42)} aria-hidden="true">
   <g className="nietzsche-mask-apollo" transform="translate(590 542)">
    <ellipse cy="114" rx="116" ry="22" fill="#17121d" opacity=".42"/>
    <path d="M-112 83H112L96 105H-96Z" fill="url(#nietzsche-marble)" stroke="#e9dcc0" strokeOpacity=".45" strokeWidth="4"/>
    <path d="M-96 105H96V279H-96Z" fill="url(#nietzsche-marble)" stroke="#c6a674" strokeWidth="4"/>
    <path d="M-112 279H112V302H-112Z" fill="#9b8261" stroke="#e9dcc0" strokeOpacity=".42" strokeWidth="4"/>
    <g transform="translate(0 3)">
     <path d="M-66-13Q-68-87-41-119Q0-157 41-119Q68-87 66-13L48 60Q26 91 0 102Q-29 91-48 60Z" fill="#e9dcc0" stroke="#b79a68" strokeWidth="5"/>
     <path d="M-56-93Q0-141 56-93L44-64Q0-82-44-64Z" fill="#87745f" stroke="#d8c49b" strokeWidth="4"/>
     <path d="M-43-36Q-25-47-10-36M10-36Q27-47 43-36" fill="none" stroke="#55454a" strokeWidth="7" strokeLinecap="round"/>
     <path d="M0-32L-8 9L7 12M-34 44Q0 68 34 44" fill="none" stroke="#78614d" strokeWidth="5" strokeLinecap="round"/>
     <path d="M-40-62Q0-77 40-62M-46 73Q0 96 46 73" fill="none" stroke="#b79a68" strokeWidth="3"/>
    </g>
   </g>
   <g className="nietzsche-mask-dionysus" transform="translate(1330 534) rotate(8)">
    <ellipse cy="115" rx="124" ry="24" fill="#17121d" opacity=".48"/>
    <path d="M-118 84H118L101 107H-101Z" fill="#87745f" stroke="#c6a674" strokeWidth="4"/>
    <path d="M-101 107H101V281H-101Z" fill="#492c43" stroke="#b79a68" strokeWidth="4"/>
    <path d="M-118 281H118V305H-118Z" fill="#655048" stroke="#ddc9a1" strokeOpacity=".5" strokeWidth="4"/>
    <g transform="translate(0 2)">
     <path d="M-68-10Q-74-97-38-129Q0-157 40-124Q74-89 66-9L45 64Q23 95 0 103Q-31 91-49 61Z" fill="#b79a68" stroke="#e0cba6" strokeWidth="5"/>
     <path d="M-67-88Q-52-149-5-144Q37-155 67-99L48-79Q17-108-8-92Q-33-108-53-77Z" fill="#332432" stroke="#977f59" strokeWidth="4"/>
     <path d="M-48-40Q-28-57-10-40M11-40Q31-57 49-37" fill="none" stroke="#382832" strokeWidth="7" strokeLinecap="round"/>
     <path d="M-1-34L-11 9L7 11M-35 42Q-3 72 35 37" fill="none" stroke="#492c43" strokeWidth="6" strokeLinecap="round"/>
     <path d="M-59-95Q-84-120-71-147Q-43-134-45-103M-30-120Q-43-152-21-170Q-1-145-12-114M2-125Q1-163 30-174Q40-141 18-118M35-111Q57-146 83-133Q75-102 49-94" fill="#72754a" stroke="#c1aa78" strokeWidth="4"/>
     <path d="M-58-54Q0-72 60-50M-45 74Q0 97 48 69" fill="none" stroke="#d6bd8b" strokeWidth="3"/>
    </g>
   </g>
   <g className="nietzsche-theatre-glow" fill="none" stroke="#e9dcc0" strokeLinecap="round">
    <path d="M732 562Q842 480 955 562T1182 550" strokeWidth="5" opacity=".7"/>
    <path d="M740 588Q847 518 956 592T1170 579" strokeWidth="3" opacity=".48"/>
    <path d="M760 613Q861 556 962 622T1145 612" strokeWidth="2" opacity=".36"/>
   </g>
   <g fill="#d9c293" opacity=".8">{[[832,511,4],[892,480,3],[1030,490,4],[1102,532,3],[961,471,4],[791,579,3],[1131,613,4]].map(([x,y,r],i)=><circle key={i} cx={x} cy={y} r={r}/>)}</g>
  </svg>

  <svg className="nietzsche-layer nietzsche-portrait" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.76)} aria-hidden="true">
   <g className="nietzsche-bust" transform="translate(960 0)">
    <ellipse cx="0" cy="892" rx="166" ry="30" fill="#17121d" opacity=".48"/>
    <path d="M-141 848V741Q-136 662-79 635L-62 596H61L80 636Q137 668 144 741V848Z" fill="url(#nietzsche-marble)" stroke="#dfcca6" strokeOpacity=".58" strokeWidth="6"/>
    <path d="M-101 691Q0 725 101 691M-126 779Q0 815 127 779" fill="none" stroke="#6d5750" strokeOpacity=".55" strokeWidth="5"/>
    <path d="M-62 608V573Q-94 546-85 475Q-82 390-3 378Q77 387 82 474Q91 545 60 574V609Z" fill="#dbc9a7" stroke="#f0dfbd" strokeOpacity=".56" strokeWidth="5"/>
    <path d="M-79 468Q-95 376-13 348Q72 340 93 416Q100 453 75 476L60 451Q36 431 17 439Q-18 418-57 458Z" fill="#554139" stroke="#b79a68" strokeWidth="5"/>
    <path d="M-79 456Q-100 502-79 552L-53 579L-54 493ZM79 457Q100 501 79 554L53 579L54 490Z" fill="#58433a" stroke="#a88c65" strokeWidth="4"/>
    <path d="M-58 470Q-38 451-17 466M12 466Q35 448 59 466" fill="none" stroke="#51413b" strokeWidth="8" strokeLinecap="round"/>
    <ellipse cx="-34" cy="480" rx="5" ry="4" fill="#332a2b"/><ellipse cx="34" cy="480" rx="5" ry="4" fill="#332a2b"/>
    <path d="M0 477L-9 521L9 524M-22 541Q0 549 22 539" fill="none" stroke="#8d7564" strokeWidth="5" strokeLinecap="round"/>
    <path d="M-45 533Q0 562 45 531L38 586Q0 626-38 586Z" fill="#66534d" stroke="#b79a68" strokeWidth="4"/>
    <path d="M-121 847H121L141 878H-141Z" fill="#b79a68" stroke="#e9dcc0" strokeOpacity=".55" strokeWidth="5"/>
    <path d="M-125 878H125V926H-125Z" fill="#554249" stroke="#c6a674" strokeWidth="4"/>
    <path d="M-144 926H144V950H-144Z" fill="#8d765b" stroke="#e9dcc0" strokeOpacity=".45" strokeWidth="4"/>
    <path d="M-100 895H100" stroke="#d8c49b" strokeOpacity=".55" strokeWidth="4"/>
   </g>
   <g className="nietzsche-ivy" fill="#72754a" stroke="#c6a674" strokeWidth="3">
    <path d="M751 833Q716 785 744 747Q785 777 770 817Q817 791 841 831Q808 874 764 846Z"/>
    <path d="M1161 832Q1196 784 1168 746Q1127 776 1142 816Q1095 790 1071 830Q1104 873 1148 845Z"/>
   </g>
  </svg>
 </div>;
}

function FreedomLimits({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.38}px,0)`});
 return <div className="exhibition-scene ex-freedom-limits">
  <svg className="limits-layer limits-landscape" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.12)} aria-hidden="true">
   <defs>
    <linearGradient id="limits-sky" x2="0" y2="1"><stop stopColor="#211827"/><stop offset=".48" stopColor="#5a3b46"/><stop offset="1" stopColor="#b08059"/></linearGradient>
    <linearGradient id="limits-floor" x2="0" y2="1"><stop stopColor="#8e755b"/><stop offset=".4" stopColor="#51404a"/><stop offset="1" stopColor="#211827"/></linearGradient>
    <linearGradient id="limits-stone" x1="0" x2="1"><stop stopColor="#67544a"/><stop offset=".33" stopColor="#e9dcc0"/><stop offset=".64" stopColor="#a88e68"/><stop offset="1" stopColor="#57454a"/></linearGradient>
    <linearGradient id="limits-path-freedom" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#b57b54"/><stop offset=".5" stopColor="#8a5260"/><stop offset="1" stopColor="#72754a"/></linearGradient>
    <linearGradient id="limits-path-order" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#e9dcc0"/><stop offset=".55" stopColor="#b79a68"/><stop offset="1" stopColor="#87745f"/></linearGradient>
    <radialGradient id="limits-glow"><stop stopColor="#f3d9a0" stopOpacity=".68"/><stop offset=".47" stopColor="#c08e5b" stopOpacity=".2"/><stop offset="1" stopColor="#b79a68" stopOpacity="0"/></radialGradient>
   </defs>
   <rect width="1920" height="1080" fill="url(#limits-sky)"/>
   <ellipse cx="962" cy="521" rx="570" ry="447" fill="url(#limits-glow)"/>
   <path d="M0 0H636V739H0Z" fill="#492c43" opacity=".19"/>
   <path d="M1284 0H1920V739H1284Z" fill="#211827" opacity=".28"/>
   <g fill="url(#limits-stone)" stroke="#ddc9a1" strokeOpacity=".38" strokeWidth="4">
    {[72,246,420,1490,1664,1838].map(x=><g key={x}>
     <path d={`M${x} 135H${x+62}V720H${x}Z`}/>
     <path d={`M${x-12} 117H${x+74}V143H${x-12}ZM${x-18} 708H${x+80}V734H${x-18}Z`}/>
     <path d={`M${x+15} 158V690M${x+31} 158V690M${x+47} 158V690`} fill="none" stroke="#514148" strokeOpacity=".3" strokeWidth="4"/>
    </g>)}
   </g>
   <path d="M0 739Q260 685 492 742T941 723Q1242 685 1482 733T1920 700V1080H0Z" fill="url(#limits-floor)"/>
   <g fill="none" stroke="#d7c49c" strokeOpacity=".18" strokeWidth="4">
    <path d="M0 786Q281 732 536 781T1014 771Q1338 734 1607 774T1920 755M0 884Q284 813 552 868T1045 844Q1373 810 1640 851T1920 827M0 1013Q314 921 596 978T1101 950Q1432 910 1700 958T1920 929"/>
    <path d="M128 738L450 1080M479 729L729 1080M856 728L999 1080M1260 729L1270 1080M1650 720L1511 1080"/>
   </g>
   <path d="M0 0H1920V1080H0Z" fill="url(#limits-glow)" opacity=".26"/>
  </svg>

  <svg className="limits-layer limits-paths" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.38)} aria-hidden="true">
   <g fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M54 1017Q260 897 436 914Q591 929 624 802Q657 681 777 700Q891 718 960 601Q1018 501 1146 529Q1293 563 1331 442Q1365 335 1516 340Q1690 347 1872 202" stroke="#241924" strokeOpacity=".46" strokeWidth="92"/>
    <path d="M54 1017Q260 897 436 914Q591 929 624 802Q657 681 777 700Q891 718 960 601Q1018 501 1146 529Q1293 563 1331 442Q1365 335 1516 340Q1690 347 1872 202" stroke="url(#limits-path-freedom)" strokeWidth="68"/>
    <path d="M1880 1012Q1669 902 1486 913Q1318 922 1289 795Q1261 674 1144 694Q1029 714 960 601Q898 501 774 531Q629 564 589 443Q554 334 406 339Q234 346 49 201" stroke="#211827" strokeOpacity=".46" strokeWidth="92"/>
    <path d="M1880 1012Q1669 902 1486 913Q1318 922 1289 795Q1261 674 1144 694Q1029 714 960 601Q898 501 774 531Q629 564 589 443Q554 334 406 339Q234 346 49 201" stroke="url(#limits-path-order)" strokeWidth="68"/>
    <path d="M85 1010Q345 958 483 838T754 741Q893 719 960 601Q1030 482 1163 502T1394 396Q1626 305 1833 211" stroke="#f0dfbd" strokeOpacity=".57" strokeWidth="4" strokeDasharray="3 22"/>
    <path d="M1837 1007Q1572 960 1437 838T1163 741Q1025 718 960 601Q891 482 758 501T526 396Q294 304 86 211" stroke="#5a3c48" strokeOpacity=".72" strokeWidth="4" strokeDasharray="3 22"/>
   </g>
   <g className="limits-maze" fill="none" stroke="#e9dcc0" strokeOpacity=".19" strokeWidth="5">
    <path d="M1398 172H1783V536H1470V247H1698V456H1550V319H1620V382"/>
    <path d="M1424 198H1758V510H1497V274H1672V430H1575V345H1595V357"/>
    <path d="M1610 609H1830V806H1681V670H1774V746H1724"/>
   </g>
   <g className="limits-vines" fill="#72754a" stroke="#c6a674" strokeOpacity=".68" strokeWidth="3">
    {[
     'M142 743Q91 682 122 630Q178 659 163 715Q216 673 249 719Q212 770 158 751Z',
     'M320 880Q270 824 304 775Q357 804 343 852Q395 818 424 861Q389 908 338 889Z',
     'M557 720Q511 664 545 615Q598 644 584 692Q636 657 665 700Q630 747 579 729Z',
     'M194 944Q149 882 184 839Q230 871 214 918Q268 886 294 929Q260 976 210 952Z',
     'M708 627Q661 569 696 522Q744 554 727 600Q783 563 808 607Q773 653 723 635Z',
     'M86 788Q46 730 80 687Q125 719 110 764Q162 730 187 773Q154 820 104 795Z',
     'M484 979Q433 918 468 870Q516 902 499 950Q554 915 580 958Q546 1005 495 986Z'
    ].map((d,i)=><path key={i} d={d}/>)}
   </g>
   <g fill="#492c43" stroke="#b79a68" strokeWidth="3">
    {[[214,778],[240,798],[266,818],[235,832],[261,852],[287,872],[386,945],[412,965],[438,985],[406,999],[432,1019],[458,1039],[635,667],[660,687],[685,707]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="13"/>)}
   </g>
  </svg>

  <svg className="limits-layer limits-figures" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.76)} aria-hidden="true">
   <g className="limits-traveler">
    <ellipse cx="647" cy="906" rx="79" ry="20" fill="#17121d" opacity=".5"/>
    <path d="M594 820Q603 777 627 768L637 746H671L682 770Q711 784 716 823L725 898H579Z" fill="#87745f" stroke="#d8c49b" strokeWidth="5"/>
    <ellipse cx="654" cy="722" rx="26" ry="33" fill="#c69673" stroke="#e9dcc0" strokeWidth="4"/>
    <path d="M629 713Q626 674 655 665Q686 669 681 708L673 719Q662 694 635 699Z" fill="#382932" stroke="#c6a674" strokeWidth="3"/>
    <path d="M614 790Q581 810 563 840M693 790Q721 812 741 831" fill="none" stroke="#d8c49b" strokeWidth="11" strokeLinecap="round"/>
    <path d="M741 831L783 790" fill="none" stroke="#c69673" strokeWidth="10" strokeLinecap="round"/>
    <g transform="translate(799 773) rotate(23)">
     <path d="M-25-37Q0-53 25-37L20 9Q14 34 0 43Q-15 33-20 8Z" fill="#d2bd91" stroke="#492c43" strokeWidth="5"/>
     <path d="M-15-8Q-6-21 0-9M4-9Q13-21 18-7M-13 15Q0 3 14 15" fill="none" stroke="#492c43" strokeWidth="4" strokeLinecap="round"/>
    </g>
   </g>
   <g className="limits-dionysus">
    <ellipse cx="960" cy="876" rx="97" ry="24" fill="#17121d" opacity=".5"/>
    <path d="M898 781Q907 730 940 718H979Q1013 735 1023 786L1037 858H883Z" fill="#492c43" stroke="#d9c49b" strokeWidth="5"/>
    <path d="M919 751Q958 774 998 751M897 819Q960 846 1024 819" fill="none" stroke="#d6bd8b" strokeOpacity=".55" strokeWidth="4"/>
    <path d="M943 718V685H977V719" fill="#b79a68" stroke="#e9dcc0" strokeWidth="4"/>
    <path d="M925 670Q917 620 958 604Q1001 612 996 670L981 704Q960 724 940 704Z" fill="#d0a079" stroke="#e9dcc0" strokeWidth="4"/>
    <path d="M923 651Q912 596 960 579Q1007 591 1000 645L986 659Q978 624 941 631Z" fill="#382932" stroke="#c6a674" strokeWidth="4"/>
    <path d="M927 620Q901 596 915 569Q943 589 944 615M948 604Q939 569 961 548Q981 575 967 605M975 610Q987 577 1016 574Q1017 603 987 622" fill="#72754a" stroke="#c1aa78" strokeWidth="4"/>
    <path d="M910 745Q878 771 868 805M1008 746Q1045 768 1062 800" fill="none" stroke="#d9c49b" strokeWidth="11" strokeLinecap="round"/>
    <path d="M1065 827L1103 608" fill="none" stroke="#a27e4f" strokeWidth="9" strokeLinecap="round"/>
    <path d="M1103 610Q1070 591 1082 563Q1113 579 1110 600Q1140 575 1159 601Q1143 632 1110 631Z" fill="#72754a" stroke="#d0b77f" strokeWidth="4"/>
    <path d="M890 857H1030" stroke="#b79a68" strokeOpacity=".75" strokeWidth="5"/>
   </g>
   <g className="limits-shadow-figure" opacity=".72">
    <ellipse cx="1400" cy="930" rx="50" ry="13" fill="#17121d"/>
    <path d="M1368 887Q1372 863 1388 856L1394 844H1412L1418 857Q1437 865 1440 890L1446 922H1360Z" fill="#51404a" stroke="#d2bd91" strokeWidth="3"/>
    <ellipse cx="1403" cy="835" rx="14" ry="18" fill="#bc8e70"/>
    <path d="M1390 834Q1387 810 1405 806Q1421 811 1419 834L1412 841Q1406 824 1394 827Z" fill="#352431"/>
   </g>
   <g className="limits-firelight" fill="#eacb8f" opacity=".75">
    {[[492,585,4],[523,567,3],[1150,760,4],[1194,725,3],[828,474,3],[1080,505,4],[371,726,3],[1320,568,3]].map(([x,y,r],i)=><circle key={i} cx={x} cy={y} r={r}/>)}
   </g>
  </svg>
 </div>;
}

function EthicalReflections({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.38}px,0)`});
 return <div className="exhibition-scene ex-ethical-reflections">
  <svg className="ethics-scene-layer ethics-landscape" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.12)} aria-hidden="true">
   <defs>
    <linearGradient id="ethics-sky" x2="0" y2="1"><stop stopColor="#211827"/><stop offset=".47" stopColor="#62404a"/><stop offset="1" stopColor="#b58a62"/></linearGradient>
    <linearGradient id="ethics-ground" x2="0" y2="1"><stop stopColor="#72754a"/><stop offset=".43" stopColor="#675344"/><stop offset="1" stopColor="#211827"/></linearGradient>
    <linearGradient id="ethics-marble" x1="0" x2="1"><stop stopColor="#675449"/><stop offset=".34" stopColor="#e9dcc0"/><stop offset=".68" stopColor="#b79a68"/><stop offset="1" stopColor="#58464a"/></linearGradient>
    <radialGradient id="ethics-light"><stop stopColor="#f4d99e" stopOpacity=".7"/><stop offset=".45" stopColor="#c99a61" stopOpacity=".22"/><stop offset="1" stopColor="#b79a68" stopOpacity="0"/></radialGradient>
   </defs>
   <rect width="1920" height="1080" fill="url(#ethics-sky)"/>
   <ellipse cx="966" cy="447" rx="680" ry="428" fill="url(#ethics-light)"/>
   <path d="M0 662Q219 548 425 626T845 611Q1020 526 1228 612T1633 589Q1805 553 1920 620V1080H0Z" fill="#352e38" opacity=".8"/>
   <path d="M0 768Q221 651 444 718T846 711Q1047 623 1262 704T1651 681Q1827 651 1920 708V1080H0Z" fill="url(#ethics-ground)"/>
   <g fill="url(#ethics-marble)" stroke="#d7c49c" strokeOpacity=".36" strokeWidth="4">
    {[116,278,440,1480,1642,1804].map(x=><g key={x}>
     <path d={`M${x} 104H${x+62}V704H${x}Z`}/>
     <path d={`M${x-12} 87H${x+74}V112H${x-12}ZM${x-18} 693H${x+80}V719H${x-18}Z`}/>
     <path d={`M${x+15} 128V674M${x+31} 128V674M${x+47} 128V674`} fill="none" stroke="#514148" strokeOpacity=".3" strokeWidth="4"/>
    </g>)}
   </g>
   <path d="M0 763Q275 702 535 756T1012 747Q1345 713 1607 754T1920 731M0 846Q298 774 565 830T1054 815Q1374 779 1660 820T1920 800M0 968Q306 877 601 935T1110 911Q1445 875 1702 917T1920 899" fill="none" stroke="#e1cfaa" strokeOpacity=".16" strokeWidth="4"/>
   <path d="M0 790Q190 728 395 751Q611 776 765 829Q933 888 1104 827Q1270 768 1442 766Q1643 762 1920 841" fill="none" stroke="#bc9d68" strokeOpacity=".45" strokeWidth="11"/>
   <path d="M0 0H1920V1080H0Z" fill="#211827" opacity=".1"/>
  </svg>

  <svg className="ethics-scene-layer ethics-architecture" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.34)} aria-hidden="true">
   <g fill="none" stroke="#c6a674" strokeOpacity=".34" strokeWidth="5">
    <path d="M90 733V507A240 240 0 0 1 570 507V733M125 733V512A205 205 0 0 1 535 512V733"/>
    <path d="M1344 730V504A250 250 0 0 1 1844 504V730M1380 730V510A214 214 0 0 1 1808 510V730"/>
    <path d="M118 507H542M1370 504H1818"/>
   </g>
   <g className="ethics-vines" fill="#72754a" stroke="#c6a674" strokeOpacity=".62" strokeWidth="3">
    {[
     'M177 703Q128 647 161 599Q211 628 196 676Q246 638 275 679Q242 726 192 710Z',
     'M392 719Q344 660 379 612Q427 644 412 690Q464 653 491 696Q458 743 408 725Z',
     'M1455 738Q1404 681 1437 632Q1489 661 1473 710Q1524 670 1555 713Q1522 760 1470 744Z',
     'M1685 720Q1641 663 1676 617Q1723 649 1708 693Q1758 657 1784 701Q1752 746 1704 728Z',
     'M719 864Q676 811 707 765Q754 793 741 840Q789 803 816 844Q786 890 737 872Z',
     'M1122 849Q1075 793 1108 748Q1155 778 1142 825Q1192 787 1218 829Q1187 876 1138 857Z'
    ].map((d,i)=><path key={i} d={d}/>)}
   </g>
   <g fill="#492c43" stroke="#b79a68" strokeWidth="3">
    {[[224,753],[248,773],[272,793],[243,807],[267,827],[291,847],[1606,774],[1630,794],[1654,814],[1624,828],[1648,848],[1672,868],[1150,886],[1173,906],[1196,926]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="12"/>)}
   </g>
   <g fill="none" stroke="#e9dcc0" strokeOpacity=".2" strokeWidth="4">
    <path d="M0 920Q237 853 418 901T785 900M1138 934Q1368 856 1525 901T1920 887"/>
    <path d="M70 953Q306 887 508 938M1435 967Q1630 902 1845 944"/>
   </g>
  </svg>

  <svg className="ethics-scene-layer ethics-human-scenes" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.68)} aria-hidden="true">
   <g className="ethics-community">
    <ellipse cx="407" cy="916" rx="200" ry="31" fill="#17121d" opacity=".42"/>
    <Figure x={315} y={874} scale={.86} pose="dance" character="maenad"/>
    <Figure x={468} y={883} scale={.84} character="silenus"/>
    <Figure x={566} y={895} scale={.77} pose="dance" character="ariadne"/>
    <path d="M370 722Q423 665 474 719" fill="none" stroke="#d7c49c" strokeWidth="5" strokeLinecap="round"/>
   </g>

   <g className="ethics-reflection-scene">
    <ellipse cx="1306" cy="918" rx="117" ry="21" fill="#17121d" opacity=".46"/>
    <path d="M1202 738H1410L1391 760H1221Z" fill="url(#ethics-marble)" stroke="#e9dcc0" strokeOpacity=".5" strokeWidth="4"/>
    <path d="M1221 760H1391V890H1221Z" fill="#51404a" stroke="#c6a674" strokeWidth="4"/>
    <path d="M1200 890H1412V913H1200Z" fill="#9c8461" stroke="#e9dcc0" strokeOpacity=".5" strokeWidth="4"/>
    <path d="M1247 785Q1305 758 1365 785V862Q1307 886 1247 862Z" fill="#211827" stroke="#d1bb91" strokeWidth="5"/>
    <ellipse cx="1306" cy="824" rx="42" ry="54" fill="#66545a" stroke="#b79a68" strokeWidth="4"/>
    <path d="M1293 815Q1304 807 1315 815M1306 819L1300 837L1310 840M1296 852Q1307 858 1318 851" fill="none" stroke="#e9dcc0" strokeWidth="3" strokeLinecap="round"/>
    <Figure x={1140} y={900} scale={.75} character="maenad"/>
    <path d="M1159 838Q1187 815 1222 816" fill="none" stroke="#d7c49c" strokeWidth="10" strokeLinecap="round"/>
   </g>

   <g className="ethics-journey-scene">
    <path d="M761 939Q853 888 915 822Q951 781 1001 789" fill="none" stroke="#c6a674" strokeOpacity=".55" strokeWidth="6"/>
    <ellipse cx="790" cy="930" rx="67" ry="16" fill="#17121d" opacity=".4"/>
    <Figure x={790} y={899} scale={.72} character="apollo"/>
    <path d="M751 811L780 758L809 811" fill="none" stroke="#d9c49b" strokeWidth="5"/>
   </g>

   <g className="ethics-responsibility-scene">
    <ellipse cx="1584" cy="925" rx="84" ry="19" fill="#17121d" opacity=".48"/>
    <Figure x={1580} y={892} scale={.82} character="ariadne"/>
    <path d="M1534 822Q1501 844 1494 873M1627 822Q1656 841 1661 866" fill="none" stroke="#d7c49c" strokeWidth="10" strokeLinecap="round"/>
    <g transform="translate(1669 858) rotate(18)">
     <path d="M-25-37Q0-52 25-37L20 9Q14 34 0 43Q-15 33-20 8Z" fill="#d2bd91" stroke="#492c43" strokeWidth="5"/>
     <path d="M-15-8Q-6-21 0-9M4-9Q13-21 18-7M-13 15Q0 3 14 15" fill="none" stroke="#492c43" strokeWidth="4" strokeLinecap="round"/>
    </g>
   </g>
   <g className="ethics-dionysus">
    <ellipse cx="960" cy="910" rx="76" ry="19" fill="#17121d" opacity=".45"/>
    <Figure x={960} y={886} scale={.76} character="dionysus"/>
    <path d="M1009 833L1035 688" stroke="#a27e4f" strokeWidth="7" strokeLinecap="round"/>
    <path d="M1034 690Q1006 673 1017 649Q1042 663 1040 683Q1065 660 1083 681Q1068 705 1040 707Z" fill="#72754a" stroke="#c6a674" strokeWidth="3"/>
   </g>

   <g className="ethics-river" fill="none" stroke="#e4d4b5" strokeLinecap="round">
    <path d="M967 938Q1111 902 1240 944T1493 936" strokeWidth="5" opacity=".62"/>
    <path d="M985 960Q1112 929 1232 967T1463 963" strokeWidth="3" opacity=".42"/>
   </g>
   <g fill="#e9d29b" opacity=".8">
    {[[675,755,4],[723,722,3],[1083,788,4],[1106,770,3],[1452,741,3],[1708,796,4],[991,733,3],[869,855,4],[1369,723,3]].map(([x,y,r],i)=><circle key={i} cx={x} cy={y} r={r}/>)}
   </g>
  </svg>
 </div>;
}

function KnowledgeFountain({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.38}px,0)`});
 return <div className="exhibition-scene ex-knowledge-fountain">
  <svg className="knowledge-layer knowledge-sanctuary" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.12)} aria-hidden="true">
   <defs>
    <linearGradient id="knowledge-wall" x2="0" y2="1"><stop stopColor="#211827"/><stop offset=".48" stopColor="#4a3641"/><stop offset="1" stopColor="#87745f"/></linearGradient>
    <linearGradient id="knowledge-floor" x2="0" y2="1"><stop stopColor="#88745b"/><stop offset=".36" stopColor="#52414a"/><stop offset="1" stopColor="#211827"/></linearGradient>
    <linearGradient id="knowledge-marble" x1="0" x2="1"><stop stopColor="#67544a"/><stop offset=".34" stopColor="#e9dcc0"/><stop offset=".64" stopColor="#b79a68"/><stop offset="1" stopColor="#57454a"/></linearGradient>
    <radialGradient id="knowledge-reflect"><stop stopColor="#efd99d" stopOpacity=".78"/><stop offset=".4" stopColor="#c99d63" stopOpacity=".27"/><stop offset="1" stopColor="#b79a68" stopOpacity="0"/></radialGradient>
    <linearGradient id="knowledge-water" x2="0" y2="1"><stop stopColor="#9b8261" stopOpacity=".82"/><stop offset=".34" stopColor="#68515b" stopOpacity=".84"/><stop offset="1" stopColor="#28212d"/></linearGradient>
   </defs>
   <rect width="1920" height="1080" fill="url(#knowledge-wall)"/>
   <path d="M0 0H1920V725H0Z" fill="#211827" opacity=".17"/>
   <ellipse cx="966" cy="505" rx="600" ry="416" fill="url(#knowledge-reflect)"/>
   <g fill="url(#knowledge-marble)" stroke="#d7c49c" strokeOpacity=".4" strokeWidth="4">
    {[116,300,484,1352,1536,1720].map(x=><g key={x}>
     <path d={`M${x} 98H${x+70}V750H${x}Z`}/>
     <path d={`M${x-12} 81H${x+82}V107H${x-12}ZM${x-18} 738H${x+88}V764H${x-18}Z`}/>
     <path d={`M${x+17} 128V716M${x+35} 128V716M${x+53} 128V716`} fill="none" stroke="#514148" strokeOpacity=".28" strokeWidth="4"/>
    </g>)}
   </g>
   <path d="M0 744Q273 676 533 738T1011 726Q1338 693 1610 734T1920 711V1080H0Z" fill="url(#knowledge-floor)"/>
   <path d="M0 786Q288 724 550 780T1034 764Q1368 730 1647 769T1920 748M0 879Q299 805 576 858T1069 839Q1405 806 1677 845T1920 819M0 1001Q313 910 612 970T1117 946Q1450 910 1713 951T1920 927" fill="none" stroke="#dfc99e" strokeOpacity=".16" strokeWidth="4"/>
   <path d="M80 767V492A260 260 0 0 1 600 492V767M1320 765V486A270 270 0 0 1 1860 486V765" fill="none" stroke="#c6a674" strokeOpacity=".34" strokeWidth="6"/>
   <path d="M110 766V499A230 230 0 0 1 570 499V766M1350 764V493A240 240 0 0 1 1830 493V764" fill="none" stroke="#e9dcc0" strokeOpacity=".17" strokeWidth="3"/>
   <path d="M0 0H1920V1080H0Z" fill="url(#knowledge-reflect)" opacity=".15"/>
  </svg>

  <svg className="knowledge-layer knowledge-nature" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.38)} aria-hidden="true">
   <g fill="none" stroke="#655243" strokeLinecap="round">
    <path d="M0 889Q192 780 286 613Q356 492 503 447Q589 420 647 321" strokeWidth="29"/>
    <path d="M1920 911Q1730 788 1640 612Q1577 490 1420 439Q1328 410 1277 299" strokeWidth="30"/>
    <path d="M245 701Q200 601 245 520M413 494Q377 390 433 320M1658 699Q1707 605 1664 515M1488 487Q1530 387 1476 320" strokeWidth="14"/>
   </g>
   <g className="knowledge-leaves" fill="#72754a" stroke="#c6a674" strokeOpacity=".62" strokeWidth="3">
    {[
     'M236 529Q183 473 214 425Q269 454 254 501Q306 463 336 507Q302 554 250 537Z',
     'M418 328Q369 272 404 225Q455 255 440 301Q492 264 520 306Q486 353 436 336Z',
     'M478 458Q426 405 461 356Q511 384 497 431Q549 394 576 436Q542 482 492 466Z',
     'M1672 521Q1723 465 1692 417Q1637 446 1652 493Q1600 455 1570 499Q1604 546 1656 529Z',
     'M1479 328Q1528 272 1493 225Q1442 255 1457 301Q1405 264 1377 306Q1411 353 1461 336Z',
     'M1418 461Q1468 407 1434 358Q1383 386 1398 433Q1346 396 1319 438Q1353 485 1404 468Z'
    ].map((d,i)=><path key={i} d={d}/>)}
   </g>
   <g fill="#492c43" stroke="#b79a68" strokeWidth="3">
    {[[321,588],[345,608],[369,628],[339,642],[363,662],[387,682],[1589,597],[1613,617],[1637,637],[1607,651],[1631,671],[1655,691],[515,399],[539,419],[563,439],[1428,397],[1452,417],[1476,437]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="13"/>)}
   </g>
   <g className="knowledge-lyre" transform="translate(404 784) rotate(-12)">
    <path d="M-50-74Q-78 14-30 65Q0 91 30 65Q78 14 50-74M-50-74Q-35-103-27-70M50-74Q35-103 27-70" fill="none" stroke="#d7c49c" strokeWidth="7" strokeLinecap="round"/>
    <path d="M-49-46H49M-30 63H30M-25-46V67M-9-46V77M9-46V77M25-46V67" stroke="#d7c49c" strokeWidth="3"/>
    <path d="M-31 45Q0 58 32 45L23 73H-22Z" fill="#8b6a51" stroke="#d7c49c" strokeWidth="3"/>
   </g>
   <g className="knowledge-aulos" transform="translate(1517 798) rotate(22)" fill="none" stroke="#c6a674" strokeWidth="9" strokeLinecap="round">
    <path d="M-15-87L-28 79M20-90L33 76"/>
    <path d="M-19-52L-31-52M-22-17L-34-17M-25 18L-37 18M14-51L27-51M17-15L30-15M20 20L33 20" strokeWidth="6"/>
   </g>
   <g className="knowledge-sculpture-fragment" transform="translate(1745 794)" opacity=".72">
    <path d="M-77 80L-69 45L-49 37L-45-5Q-62-29-47-57Q-30-82 1-72Q31-67 37-41L31-9Q22 12 3 19L10 43L46 52L57 80Z" fill="url(#knowledge-marble)" stroke="#d7c49c" strokeWidth="5"/>
    <path d="M-46-29Q-22-43 3-27M-21-5Q-10-12 1-4M-44 42L-27 56L-16 38M27 27L16 43L37 53M-68 80L-77 95M57 80L70 96" fill="none" stroke="#514148" strokeOpacity=".7" strokeWidth="6"/>
    <path d="M-70 86H67V106H-70Z" fill="#806b58" stroke="#d7c49c" strokeWidth="4"/>
   </g>
  </svg>

  <svg className="knowledge-layer knowledge-fountain" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.72)} aria-hidden="true">
   <g className="knowledge-dionysus">
    <ellipse cx="964" cy="775" rx="149" ry="26" fill="#17121d" opacity=".47"/>
    <path d="M860 640Q875 578 922 562L931 524H997L1008 563Q1054 584 1068 643L1086 763H842Z" fill="#492c43" stroke="#d5c19d" strokeWidth="5"/>
    <path d="M886 608Q961 650 1042 606M863 694Q961 725 1063 691" fill="none" stroke="#d1bb91" strokeOpacity=".52" strokeWidth="5"/>
    <path d="M926 550V511H1000V551" fill="#b79a68" stroke="#e9dcc0" strokeWidth="4"/>
    <path d="M922 504Q903 451 948 422Q1006 425 1002 496L980 541Q960 564 940 541Z" fill="#d0a079" stroke="#e9dcc0" strokeWidth="4"/>
    <path d="M918 475Q909 414 961 397Q1017 407 1007 473L990 489Q983 447 942 454Z" fill="#382932" stroke="#c6a674" strokeWidth="4"/>
    <path d="M919 433Q891 406 910 376Q939 393 939 424M944 415Q935 377 962 353Q984 383 966 418M977 421Q991 382 1024 382Q1023 415 988 433" fill="#72754a" stroke="#c1aa78" strokeWidth="4"/>
    <path d="M876 593Q836 622 830 672M1052 592Q1093 621 1102 670" fill="none" stroke="#d5c19d" strokeWidth="12" strokeLinecap="round"/>
    <path d="M1100 686L1132 512" stroke="#a27e4f" strokeWidth="8" strokeLinecap="round"/>
    <path d="M1130 514Q1096 492 1112 466Q1142 483 1138 505Q1167 481 1188 505Q1172 534 1138 536Z" fill="#72754a" stroke="#d0b77f" strokeWidth="4"/>
   </g>

   <g className="knowledge-fountain-rim">
    <ellipse cx="960" cy="813" rx="425" ry="116" fill="#211827" opacity=".48"/>
    <path d="M519 735Q960 632 1401 735L1370 813Q960 923 550 813Z" fill="url(#knowledge-marble)" stroke="#e9dcc0" strokeWidth="7"/>
    <ellipse cx="960" cy="736" rx="441" ry="111" fill="#b79a68" stroke="#ead9b5" strokeWidth="7"/>
    <ellipse cx="960" cy="737" rx="399" ry="83" fill="url(#knowledge-water)" stroke="#59444a" strokeWidth="8"/>
    <path d="M590 738Q780 682 960 729T1330 732" fill="none" stroke="#f0ddae" strokeOpacity=".77" strokeWidth="5"/>
    <path d="M666 755Q818 713 958 750T1265 746M724 780Q842 753 961 777T1193 776" fill="none" stroke="#e9dcc0" strokeOpacity=".45" strokeWidth="3"/>
    <ellipse cx="960" cy="846" rx="414" ry="76" fill="none" stroke="#c6a674" strokeOpacity=".7" strokeWidth="6"/>
    <path d="M622 823Q960 902 1298 823M657 851Q960 922 1263 851" fill="none" stroke="#d5bd8d" strokeOpacity=".45" strokeWidth="4"/>
   </g>

   <g className="knowledge-reflected-scenes">
    <g transform="translate(731 718)" opacity=".8">
     <path d="M-43 28Q-36-17-12-25L-7-38H12L18-24Q37-16 42 29Z" fill="#d7c49c" fillOpacity=".42" stroke="#f0dfbd" strokeOpacity=".72" strokeWidth="3"/>
     <ellipse cy="-51" rx="17" ry="21" fill="#e9dcc0" fillOpacity=".52" stroke="#f0dfbd" strokeOpacity=".8" strokeWidth="3"/>
     <path d="M-53-48Q-58-75-34-79Q-9-78-11-51L-20-42Q-28-63-48-57Z" fill="#492c43" fillOpacity=".8"/>
    </g>
    <g transform="translate(927 707)" opacity=".77">
     <path d="M-45 30Q-34-6-12-16L-6-34H14L21-14Q43-3 49 30Z" fill="#72754a" fillOpacity=".52" stroke="#e8d4a9" strokeOpacity=".75" strokeWidth="3"/>
     <ellipse cy="-47" rx="17" ry="21" fill="#e9dcc0" fillOpacity=".5" stroke="#f0dfbd" strokeOpacity=".8" strokeWidth="3"/>
     <path d="M-17-1Q-53-21-46-47M20-3Q50-27 53-51" fill="none" stroke="#f0dfbd" strokeWidth="4" strokeLinecap="round"/>
    </g>
    <g transform="translate(1127 721)" opacity=".8">
     <path d="M-30-31Q0-54 30-31L24 12Q18 32 0 43Q-19 31-24 12Z" fill="#d6bd8b" fillOpacity=".62" stroke="#f0dfbd" strokeWidth="3"/>
     <path d="M-17-4Q-9-13-3-4M4-4Q12-13 18-3M-14 17Q0 5 14 17" fill="none" stroke="#492c43" strokeWidth="3"/>
    </g>
    <g fill="#e9dcc0" fillOpacity=".72">
     <circle cx="823" cy="694" r="13"/><circle cx="846" cy="701" r="13"/><circle cx="835" cy="720" r="13"/>
     <circle cx="1040" cy="681" r="13"/><circle cx="1063" cy="689" r="13"/><circle cx="1052" cy="708" r="13"/>
    </g>
   </g>

   <g className="knowledge-waterlight" fill="#f3d9a0">
    {[[680,738,5],[756,714,4],[866,755,4],[984,714,5],[1093,757,4],[1217,725,4],[790,778,3],[1150,784,3]].map(([x,y,r],i)=><circle key={i} cx={x} cy={y} r={r}/>)}
   </g>
  </svg>
 </div>;
}

function PopularCulture({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.38}px,0)`});
 return <div className="exhibition-scene ex-popular-culture">
  <svg className="culture-layer culture-gallery" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.12)} aria-hidden="true">
   <defs>
    <linearGradient id="culture-wall" x2="0" y2="1"><stop stopColor="#211827"/><stop offset=".48" stopColor="#392c37"/><stop offset="1" stopColor="#725b4d"/></linearGradient>
    <linearGradient id="culture-floor" x2="0" y2="1"><stop stopColor="#826c58"/><stop offset=".4" stopColor="#493843"/><stop offset="1" stopColor="#211827"/></linearGradient>
    <linearGradient id="culture-marble" x1="0" x2="1"><stop stopColor="#55434a"/><stop offset=".35" stopColor="#e9dcc0"/><stop offset=".68" stopColor="#b79a68"/><stop offset="1" stopColor="#5a4648"/></linearGradient>
    <radialGradient id="culture-light"><stop stopColor="#f2d492" stopOpacity=".5"/><stop offset="1" stopColor="#b79a68" stopOpacity="0"/></radialGradient>
    <linearGradient id="culture-concert" x2="0" y2="1"><stop stopColor="#a65273" stopOpacity=".7"/><stop offset="1" stopColor="#492c43" stopOpacity="0"/></linearGradient>
   </defs>
   <rect width="1920" height="1080" fill="url(#culture-wall)"/>
   <ellipse cx="355" cy="454" rx="520" ry="468" fill="url(#culture-light)"/>
   <ellipse cx="964" cy="440" rx="500" ry="450" fill="url(#culture-light)" opacity=".55"/>
   <ellipse cx="1570" cy="460" rx="500" ry="470" fill="url(#culture-light)" opacity=".46"/>
   <path d="M0 761Q298 711 588 756T1090 749Q1390 706 1635 752T1920 728V1080H0Z" fill="url(#culture-floor)"/>
   <path d="M0 812Q313 758 615 806T1110 795Q1430 754 1684 796T1920 774M0 927Q327 854 644 907T1157 892Q1462 853 1717 893T1920 870M0 1050Q345 955 680 1017T1205 1000Q1502 964 1750 1002T1920 982" fill="none" stroke="#e9dcc0" strokeOpacity=".15" strokeWidth="4"/>
   <g fill="url(#culture-marble)" stroke="#d7c49c" strokeOpacity=".45" strokeWidth="4">
    {[116,300,484,1352,1536,1720].map(x=><g key={x}>
     <path d={`M${x} 117H${x+72}V755H${x}Z`}/>
     <path d={`M${x-13} 95H${x+85}V125H${x-13}ZM${x-20} 739H${x+92}V769H${x-20}Z`}/>
     <path d={`M${x+18} 147V717M${x+36} 147V717M${x+54} 147V717`} fill="none" stroke="#514148" strokeOpacity=".25" strokeWidth="4"/>
    </g>)}
   </g>
   <path d="M45 758V368A285 285 0 0 1 615 368V758M665 758V332A300 300 0 0 1 1265 332V758M1306 758V380A280 280 0 0 1 1866 380V758" fill="none" stroke="#c6a674" strokeOpacity=".53" strokeWidth="7"/>
   <path d="M76 758V375A254 254 0 0 1 584 375V758M696 758V340A269 269 0 0 1 1234 340V758M1337 758V387A249 249 0 0 1 1835 387V758" fill="none" stroke="#e9dcc0" strokeOpacity=".2" strokeWidth="3"/>
   <path d="M0 0H1920V1080H0Z" fill="url(#culture-light)" opacity=".12"/>
  </svg>

  <svg className="culture-layer culture-exhibits" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.42)} aria-hidden="true">
   <g className="culture-music">
    <path d="M35 165L417 610M226 115L464 611M527 148L449 608" stroke="#c49b78" strokeOpacity=".55" strokeWidth="9"/>
    <path d="M60 221L418 604M231 166L447 604M516 205L453 604" stroke="#a25176" strokeOpacity=".36" strokeWidth="42"/>
    <path d="M120 275Q272 147 430 280M88 337Q267 186 456 337M65 403Q265 234 472 400" fill="none" stroke="#e9c477" strokeOpacity=".55" strokeWidth="5"/>
    <g fill="#e2bb79" opacity=".8">
     <circle cx="142" cy="217" r="13"/><circle cx="205" cy="179" r="11"/><circle cx="293" cy="168" r="12"/><circle cx="373" cy="196" r="14"/><circle cx="448" cy="251" r="12"/>
    </g>
    <g fill="#211827" stroke="#d9c39c" strokeWidth="5">
     <path d="M158 671L176 526L204 483L228 527L242 672Z"/><circle cx="202" cy="455" r="27"/>
     <path d="M275 674L294 511L324 467L349 512L363 674Z"/><circle cx="321" cy="438" r="28"/>
     <path d="M389 679L405 539L432 502L454 540L468 679Z"/><circle cx="430" cy="476" r="25"/>
    </g>
    <g fill="#492c43">
     <path d="M0 714Q26 635 51 713Q78 614 106 711Q133 628 160 713Q188 624 215 712Q240 632 266 713Q298 612 326 712Q354 623 383 712Q413 632 442 710Q472 616 501 711Q534 628 564 713V770H0Z"/>
    </g>
    <g fill="#72754a" stroke="#c6a674" strokeWidth="3">
     <path d="M487 602Q451 571 466 537Q502 550 499 582Q524 554 548 577Q536 610 502 609Z"/>
     <path d="M531 650Q495 619 510 585Q546 598 543 630Q568 602 592 625Q580 658 546 657Z"/>
    </g>
   </g>

   <g className="culture-camp">
    <path d="M725 705Q936 648 1202 705" fill="none" stroke="#6b7049" strokeWidth="34"/>
    <path d="M721 702Q939 668 1194 703" fill="none" stroke="#b79a68" strokeOpacity=".7" strokeWidth="4"/>
    <g fill="#72754a" stroke="#c6a674" strokeWidth="5">
     <path d="M787 682L850 552L911 682Z"/><path d="M857 682L937 522L1016 682Z"/><path d="M1006 682L1065 563L1124 682Z"/>
    </g>
    <g fill="#211827" opacity=".9">
     <path d="M837 681L850 620L864 681ZM918 681L937 599L955 681ZM1053 681L1065 628L1078 681Z"/>
    </g>
    <path d="M960 684V504" stroke="#a27e4f" strokeWidth="10"/>
    <path d="M960 506Q913 480 930 438Q971 458 969 492Q1004 457 1034 483Q1010 523 970 522Z" fill="#72754a" stroke="#d0b77f" strokeWidth="4"/>
    <g className="culture-campfire">
     <path d="M939 715Q909 677 951 645Q943 681 978 686Q1006 650 1008 623Q1049 680 1011 715Z" fill="#b85e49" stroke="#e5c27e" strokeWidth="4"/>
     <path d="M963 711Q947 685 979 666Q974 692 993 695Q1010 677 1008 660Q1033 700 1005 713Z" fill="#e9bd73"/>
    </g>
    <g transform="translate(1135 565)">
     <path d="M-39-55Q0-83 39-55L31 31Q25 53 0 67Q-25 53-31 31Z" fill="#492c43" stroke="#d7c49c" strokeWidth="4"/>
     <path d="M-20-19Q-10-30-2-18M5-18Q15-29 23-17M-17 13Q0 3 17 13" fill="none" stroke="#e9dcc0" strokeWidth="4"/>
     <path d="M-42-55Q-29-84 0-82Q31-79 41-53" fill="none" stroke="#72754a" strokeWidth="13"/>
    </g>
    <path d="M800 716H1124" stroke="#d5c19d" strokeWidth="7"/>
   </g>

   <g className="culture-underworld">
    <path d="M1334 702Q1420 631 1510 692T1694 682Q1780 622 1874 704" fill="none" stroke="#6d394c" strokeWidth="34"/>
    <path d="M1320 721Q1460 669 1581 715T1865 711" fill="none" stroke="#b79a68" strokeOpacity=".55" strokeWidth="5"/>
    <path d="M1442 685Q1395 591 1451 469Q1484 416 1544 444Q1607 468 1604 559L1570 683Z" fill="#211827" stroke="#d7c49c" strokeWidth="6"/>
    <path d="M1448 557Q1521 590 1598 553M1464 622Q1526 647 1582 620" fill="none" stroke="#b79a68" strokeOpacity=".62" strokeWidth="5"/>
    <path d="M1488 476Q1483 416 1536 387Q1592 413 1575 473L1560 504Q1530 518 1503 497Z" fill="#d0a079" stroke="#e9dcc0" strokeWidth="4"/>
    <path d="M1484 445Q1492 383 1544 380Q1592 390 1585 448L1566 463Q1552 427 1510 432Z" fill="#342735" stroke="#c6a674" strokeWidth="4"/>
    <path d="M1503 397Q1480 357 1501 331Q1530 353 1527 387M1534 386Q1534 340 1564 318Q1583 357 1555 391M1563 393Q1582 355 1617 362Q1610 395 1573 405" fill="#72754a" stroke="#c6a674" strokeWidth="4"/>
    <path d="M1530 523L1508 636L1548 666L1582 632L1559 523" fill="#492c43" stroke="#d7c49c" strokeWidth="5"/>
    <path d="M1568 523L1635 454" stroke="#b79a68" strokeWidth="8"/>
    <path d="M1633 456Q1605 439 1619 414Q1646 428 1642 449Q1665 428 1687 446Q1673 474 1642 474Z" fill="#72754a" stroke="#c6a674" strokeWidth="4"/>
    <g transform="translate(1754 579)">
     <path d="M-45-57Q0-81 45-57L38 27Q31 54 0 69Q-31 54-38 27Z" fill="#a5534a" stroke="#e9dcc0" strokeWidth="5"/>
     <path d="M-21-19Q-10-31-3-18M6-18Q17-31 24-18M-19 16Q0 2 19 16" fill="none" stroke="#211827" strokeWidth="5"/>
     <path d="M-52-54Q-30-91 0-81Q31-92 52-52" fill="none" stroke="#b79a68" strokeWidth="8"/>
    </g>
    <g fill="#492c43" stroke="#c6a674" strokeWidth="3">
     <circle cx="1680" cy="496" r="13"/><circle cx="1704" cy="517" r="13"/><circle cx="1728" cy="538" r="13"/><circle cx="1690" cy="546" r="13"/>
    </g>
    <path d="M1340 464Q1400 406 1430 457M1795 423Q1850 391 1888 441" fill="none" stroke="#9d6559" strokeOpacity=".62" strokeWidth="12"/>
   </g>
  </svg>

  <svg className="culture-layer culture-route" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.78)} aria-hidden="true">
   <path d="M80 820C270 840 392 774 511 814S704 850 799 795S1009 754 1130 802S1340 850 1450 801S1690 769 1840 816" fill="none" stroke="#17121d" strokeOpacity=".55" strokeWidth="38" strokeLinecap="round"/>
   <path d="M80 808C270 828 392 762 511 802S704 838 799 783S1009 742 1130 790S1340 838 1450 789S1690 757 1840 804" fill="none" stroke="#b79a68" strokeWidth="6" strokeLinecap="round" strokeDasharray="2 18"/>
   <g fill="#e9dcc0" stroke="#b79a68" strokeWidth="7">
    <circle cx="284" cy="800" r="17"/><circle cx="972" cy="776" r="17"/><circle cx="1646" cy="778" r="17"/>
   </g>
   <g fill="#f1d8a1" opacity=".8">
    {[[186,322,5],[284,273,4],[396,326,4],[899,392,4],[1072,361,5],[1204,434,4],[1437,313,4],[1640,360,4],[1801,318,5],[589,770,4],[1260,793,3]].map(([x,y,r],i)=><circle key={i} cx={x} cy={y} r={r}/>)}
   </g>
   <g transform="translate(100 886)">
    <path d="M0 0Q-25-38-9-82L0-108L9-82Q25-38 0 0Z" fill="#a9784d" stroke="#e9dcc0" strokeWidth="4"/>
    <path d="M-42-89Q-50-123-22-132Q0-139 22-132Q50-123 42-89L34-33Q27-8 0 0Q-27-8-34-33Z" fill="none" stroke="#b79a68" strokeWidth="5"/>
    <path d="M-34-82H34M-29-55H29" stroke="#c6a674" strokeWidth="4"/>
   </g>
  </svg>
 </div>;
}

function ConclusionMural({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.38}px,0)`});
 return <div className="exhibition-scene ex-conclusion-mural">
  <svg className="conclusion-layer conclusion-temple" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.12)} aria-hidden="true">
   <defs>
    <linearGradient id="conclusion-wall" x2="0" y2="1"><stop stopColor="#211827"/><stop offset=".5" stopColor="#402d3c"/><stop offset="1" stopColor="#78624f"/></linearGradient>
    <linearGradient id="conclusion-stone" x1="0" x2="1"><stop stopColor="#5a4648"/><stop offset=".3" stopColor="#e9dcc0"/><stop offset=".55" stopColor="#b79a68"/><stop offset="1" stopColor="#57454a"/></linearGradient>
    <linearGradient id="conclusion-floor" x2="0" y2="1"><stop stopColor="#856f59"/><stop offset=".42" stopColor="#51404a"/><stop offset="1" stopColor="#211827"/></linearGradient>
    <radialGradient id="conclusion-aureole"><stop stopColor="#f2d794" stopOpacity=".78"/><stop offset=".45" stopColor="#c6a674" stopOpacity=".25"/><stop offset="1" stopColor="#b79a68" stopOpacity="0"/></radialGradient>
    <linearGradient id="conclusion-textile" x2="0" y2="1"><stop stopColor="#753b50"/><stop offset="1" stopColor="#392333"/></linearGradient>
   </defs>
   <rect width="1920" height="1080" fill="url(#conclusion-wall)"/>
   <ellipse cx="960" cy="485" rx="730" ry="540" fill="url(#conclusion-aureole)"/>
   <path d="M0 754Q302 700 594 746T1091 742Q1402 702 1654 741T1920 724V1080H0Z" fill="url(#conclusion-floor)"/>
   <path d="M0 793Q315 737 620 781T1116 775Q1430 739 1686 777T1920 762M0 911Q329 837 646 891T1156 878Q1471 842 1724 879T1920 865M0 1041Q348 941 679 1007T1204 987Q1512 951 1755 990T1920 975" fill="none" stroke="#e9dcc0" strokeOpacity=".16" strokeWidth="4"/>
   <g fill="url(#conclusion-stone)" stroke="#d7c49c" strokeOpacity=".55" strokeWidth="4">
    {[77,262,447,1400,1585,1770].map(x=><g key={x}>
     <path d={`M${x} 94H${x+72}V760H${x}Z`}/>
     <path d={`M${x-13} 70H${x+85}V104H${x-13}ZM${x-20} 744H${x+92}V778H${x-20}Z`}/>
     <path d={`M${x+17} 128V719M${x+36} 128V719M${x+55} 128V719`} fill="none" stroke="#514148" strokeOpacity=".28" strokeWidth="4"/>
    </g>)}
   </g>
   <path d="M568 777V391A392 392 0 0 1 1352 391V777" fill="#211827" fillOpacity=".53" stroke="url(#conclusion-stone)" strokeWidth="25"/>
   <path d="M603 772V398A357 357 0 0 1 1317 398V772" fill="none" stroke="#c6a674" strokeOpacity=".38" strokeWidth="7"/>
   <path d="M630 772V409A330 330 0 0 1 1290 409V772" fill="url(#conclusion-aureole)" opacity=".42"/>
   <path d="M500 759H1420V801H500ZM452 801H1468V836H452Z" fill="url(#conclusion-stone)" stroke="#d9c39c" strokeOpacity=".38" strokeWidth="5"/>
   <path d="M538 764H1382M484 817H1436" stroke="#f0ddba" strokeOpacity=".48" strokeWidth="4"/>
   <path d="M0 0H1920V1080H0Z" fill="url(#conclusion-aureole)" opacity=".08"/>
  </svg>

  <svg className="conclusion-layer conclusion-symbols" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.38)} aria-hidden="true">
   <g className="conclusion-vines" fill="none" strokeLinecap="round">
    <path d="M42 909Q233 815 221 655Q211 526 354 456Q449 410 484 271" stroke="#514331" strokeWidth="30"/>
    <path d="M1878 910Q1688 812 1703 649Q1715 522 1570 454Q1476 407 1440 270" stroke="#514331" strokeWidth="30"/>
    <path d="M178 701Q129 601 179 520M338 489Q302 384 361 322M1741 695Q1792 594 1741 511M1581 482Q1629 384 1575 319" stroke="#65503d" strokeWidth="15"/>
   </g>
   <g className="conclusion-leaves" fill="#72754a" stroke="#c6a674" strokeOpacity=".7" strokeWidth="4">
    {[
     'M174 531Q111 474 148 416Q214 449 195 500Q254 457 288 508Q253 562 190 540Z',
     'M343 365Q289 305 329 251Q386 284 369 335Q425 294 457 342Q420 392 360 374Z',
     'M434 496Q381 441 420 385Q476 416 459 467Q516 425 546 473Q509 521 449 505Z',
     'M1744 535Q1807 478 1770 420Q1704 453 1723 504Q1664 461 1630 512Q1665 566 1728 544Z',
     'M1575 366Q1629 306 1589 252Q1532 285 1549 336Q1493 295 1461 343Q1498 393 1558 375Z',
     'M1483 497Q1537 443 1498 387Q1442 417 1459 468Q1402 426 1372 474Q1409 523 1469 507Z'
    ].map((d,i)=><path key={i} d={d}/>)}
   </g>
   <g fill="#492c43" stroke="#c6a674" strokeWidth="3">
    {[[270,601],[295,624],[320,647],[288,660],[313,683],[338,706],[1649,604],[1674,627],[1699,650],[1667,663],[1692,686],[1717,709],[472,420],[497,443],[522,466],[1400,421],[1425,444],[1450,467]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="14"/>)}
   </g>
   <g className="conclusion-ritual-cup" transform="translate(568 714)">
    <path d="M-50-47H50L39 10Q31 42 0 48Q-31 42-39 10Z" fill="url(#conclusion-textile)" stroke="#e9dcc0" strokeWidth="6"/>
    <path d="M-37-28Q0-8 37-28M-30-4Q0 14 30-4" fill="none" stroke="#c6a674" strokeWidth="4"/>
    <path d="M0 49V91M-31 92H31" stroke="#d7c49c" strokeWidth="8" strokeLinecap="round"/>
    <path d="M-43-42Q0-24 43-42" fill="none" stroke="#f0d99c" strokeWidth="5"/>
   </g>
   <g className="conclusion-theatre-mask" transform="translate(1352 559)">
    <path d="M-59-78Q0-112 59-78L48 28Q38 66 0 89Q-38 66-48 28Z" fill="#a5534a" stroke="#e9dcc0" strokeWidth="6"/>
    <path d="M-30-25Q-18-43-6-24M10-24Q22-43 34-24M-28 25Q0 2 28 25" fill="none" stroke="#211827" strokeWidth="8" strokeLinecap="round"/>
    <path d="M-67-81Q-43-126 0-115Q43-126 67-81" fill="none" stroke="#b79a68" strokeWidth="8"/>
    <path d="M-70-68L-83-33M70-68L83-33" stroke="#c6a674" strokeWidth="5"/>
   </g>
   <g className="conclusion-ariadne-relief" opacity=".8" transform="translate(394 756)">
    <path d="M-58 45Q-52-43-6-63Q43-62 57 45Z" fill="url(#conclusion-textile)" stroke="#c6a674" strokeWidth="5"/>
    <path d="M-30-32Q-35-85 6-94Q44-84 34-34L21-14Q0-5-21-19Z" fill="#d0a079" stroke="#e9dcc0" strokeWidth="4"/>
    <path d="M-35-58Q-40-102 5-109Q48-103 43-57L29-47Q23-82-12-79Q-26-74-29-48Z" fill="#4a3435" stroke="#c6a674" strokeWidth="4"/>
    <path d="M-36-85Q-11-104 25-89M-31-78Q-28-61-39-45M37-77Q29-56 42-44" fill="none" stroke="#b79a68" strokeWidth="4"/>
    <path d="M-24-9Q0 1 24-9M-34 11Q0 24 34 11" fill="none" stroke="#d6c29d" strokeOpacity=".65" strokeWidth="4"/>
   </g>
   <g className="conclusion-frieze" fill="none" stroke="#c6a674" strokeOpacity=".5" strokeWidth="4">
    <path d="M587 249H1333M617 270H1303M618 744H1302"/>
    <path d="M645 234L667 256L689 234L711 256L733 234L755 256L777 234L799 256L821 234L843 256L865 234L887 256L909 234L931 256L953 234L975 256L997 234L1019 256L1041 234L1063 256L1085 234L1107 256L1129 234L1151 256L1173 234L1195 256L1217 234L1239 256L1261 234L1283 256"/>
   </g>
  </svg>

  <svg className="conclusion-layer conclusion-dionysus" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.72)} aria-hidden="true">
   <ellipse cx="960" cy="878" rx="202" ry="32" fill="#17121d" opacity=".46"/>
   <path d="M777 887H1143L1104 921H816Z" fill="#211827" stroke="#d7c49c" strokeOpacity=".5" strokeWidth="5"/>
   <path d="M813 853H1127V887H813Z" fill="url(#conclusion-stone)" stroke="#e9dcc0" strokeOpacity=".52" strokeWidth="5"/>
   <path d="M839 862H1101M836 878H1104" stroke="#f0dfbd" strokeOpacity=".45" strokeWidth="4"/>
   <g filter="url(#conclusion-figure-shadow)">
    <defs><filter id="conclusion-figure-shadow" x="-35%" y="-20%" width="170%" height="150%"><feDropShadow dx="0" dy="13" stdDeviation="13" floodColor="#15101a" floodOpacity=".42"/></filter></defs>
    <Figure x={960} y={715} scale={1.7} character="dionysus" tone="url(#conclusion-stone)"/>
   </g>
   <path d="M786 799Q735 730 752 650Q772 574 827 539" fill="none" stroke="#ded0b5" strokeOpacity=".55" strokeWidth="6"/>
   <path d="M1134 802Q1187 729 1169 650Q1151 575 1095 540" fill="none" stroke="#ded0b5" strokeOpacity=".55" strokeWidth="6"/>
   <g fill="#e9d29b" opacity=".8">
    {[[748,606,5],[795,506,4],[1148,505,5],[1190,615,4],[824,370,4],[1090,365,4],[681,733,4],[1238,731,4]].map(([x,y,r],i)=><circle key={i} cx={x} cy={y} r={r}/>)}
   </g>
  </svg>
 </div>;
}

function BibliographyArchive({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.38}px,0)`});
 return <div className="exhibition-scene ex-bibliography-archive">
  <svg className="archive-layer archive-architecture" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.1)} aria-hidden="true">
   <defs>
    <linearGradient id="archive-wall" x2="0" y2="1"><stop stopColor="#211827"/><stop offset=".5" stopColor="#40313b"/><stop offset="1" stopColor="#78624f"/></linearGradient>
    <linearGradient id="archive-stone" x1="0" x2="1"><stop stopColor="#574449"/><stop offset=".34" stopColor="#e9dcc0"/><stop offset=".66" stopColor="#b79a68"/><stop offset="1" stopColor="#574449"/></linearGradient>
    <linearGradient id="archive-floor" x2="0" y2="1"><stop stopColor="#786653"/><stop offset=".45" stopColor="#493943"/><stop offset="1" stopColor="#211827"/></linearGradient>
    <radialGradient id="archive-glow"><stop stopColor="#efd492" stopOpacity=".45"/><stop offset="1" stopColor="#b79a68" stopOpacity="0"/></radialGradient>
   </defs>
   <rect width="1920" height="1080" fill="url(#archive-wall)"/>
   <ellipse cx="604" cy="440" rx="620" ry="470" fill="url(#archive-glow)"/>
   <ellipse cx="1490" cy="430" rx="550" ry="460" fill="url(#archive-glow)" opacity=".6"/>
   <path d="M0 780Q310 718 600 764T1090 754Q1400 720 1640 757T1920 739V1080H0Z" fill="url(#archive-floor)"/>
   <path d="M0 819Q328 757 629 803T1111 789Q1437 755 1682 790T1920 775M0 939Q339 861 652 918T1156 899Q1478 861 1720 896T1920 883M0 1052Q354 953 681 1017T1208 997Q1518 965 1753 998T1920 987" fill="none" stroke="#e9dcc0" strokeOpacity=".14" strokeWidth="4"/>
   <g fill="#211827" fillOpacity=".45" stroke="url(#archive-stone)" strokeWidth="13">
    <path d="M45 742V296A254 254 0 0 1 553 296V742ZM659 742V222A300 300 0 0 1 1259 222V742ZM1360 742V285A265 265 0 0 1 1890 285V742Z"/>
   </g>
   <g fill="none" stroke="#c6a674" strokeOpacity=".4" strokeWidth="5">
    <path d="M82 735V305A217 217 0 0 1 516 305V735M698 735V232A261 261 0 0 1 1220 232V735M1398 735V293A228 228 0 0 1 1854 293V735"/>
    <path d="M102 405H496M718 340H1200M1418 395H1834M102 613H496M718 602H1200M1418 611H1834"/>
   </g>
   <g fill="url(#archive-stone)" stroke="#d7c49c" strokeOpacity=".45" strokeWidth="4">
    {[62,252,442,676,886,1096,1376,1570,1764].map(x=><g key={x}>
     <path d={`M${x} 85H${x+62}V750H${x}Z`}/>
     <path d={`M${x-12} 62H${x+74}V95H${x-12}ZM${x-18} 735H${x+80}V768H${x-18}Z`}/>
    </g>)}
   </g>
   <path d="M0 777H1920" stroke="#ddc99e" strokeOpacity=".34" strokeWidth="6"/>
   <path d="M0 0H1920V1080H0Z" fill="url(#archive-glow)" opacity=".12"/>
  </svg>

  <svg className="archive-layer archive-manuscripts" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.34)} aria-hidden="true">
   <g className="archive-scrolls">
    <g transform="translate(255 486) rotate(-7)">
     <path d="M-116-24Q-118-56-87-59H84Q118-56 116-24V26Q113 57 84 58H-86Q-118 55-116 26Z" fill="#c6a674" stroke="#f0dfbd" strokeWidth="5"/>
     <path d="M-92-31H87V31H-92Z" fill="#87745f" stroke="#4b3938" strokeWidth="4"/>
     <path d="M-69-16H64M-69 0H52M-69 16H76" stroke="#d9c39c" strokeOpacity=".7" strokeWidth="4"/>
     <circle cx="-98" cy="0" r="20" fill="#e9dcc0" stroke="#b79a68" strokeWidth="5"/><circle cx="98" cy="0" r="20" fill="#e9dcc0" stroke="#b79a68" strokeWidth="5"/>
    </g>
    <g transform="translate(478 663) rotate(8)">
     <path d="M-74-60H74V60H-74Z" fill="#8a724f" stroke="#e9dcc0" strokeWidth="5"/>
     <path d="M-52-38H52V38H-52Z" fill="#3f3038" stroke="#b79a68" strokeWidth="4"/>
     <path d="M-35-20H34M-35 0H40M-35 20H24" stroke="#d8c29a" strokeOpacity=".68" strokeWidth="4"/>
     <circle cx="-74" cy="-60" r="10" fill="#b79a68"/><circle cx="74" cy="60" r="10" fill="#b79a68"/>
    </g>
    <g transform="translate(1600 493) rotate(7)">
     <path d="M-99-31H99V31H-99Z" fill="#c6a674" stroke="#f0dfbd" strokeWidth="5"/>
     <path d="M-76-18H76V18H-76Z" fill="#756047" stroke="#4b3938" strokeWidth="4"/>
     <path d="M-56-7H50M-56 7H65" stroke="#e9dcc0" strokeOpacity=".72" strokeWidth="4"/>
     <circle cx="-98" cy="0" r="18" fill="#e9dcc0" stroke="#b79a68" strokeWidth="5"/><circle cx="98" cy="0" r="18" fill="#e9dcc0" stroke="#b79a68" strokeWidth="5"/>
    </g>
    <g transform="translate(1435 653) rotate(-6)">
     <path d="M-80-57H80V57H-80Z" fill="#825d4e" stroke="#e9dcc0" strokeWidth="5"/>
     <path d="M-57-37H57V37H-57Z" fill="#372b35" stroke="#b79a68" strokeWidth="4"/>
     <path d="M-38-17H38M-38 0H44M-38 17H28" stroke="#d7c49c" strokeOpacity=".72" strokeWidth="4"/>
    </g>
   </g>
   <g className="archive-vase-fragments">
    <path d="M1070 711Q1030 669 1042 605L1072 581L1101 605Q1114 669 1074 711Z" fill="#8e4d4a" stroke="#e9dcc0" strokeWidth="5"/>
    <path d="M1046 621H1098M1050 670H1094" stroke="#d1b479" strokeWidth="5"/>
    <path d="M1080 659Q1058 638 1067 613Q1090 628 1082 648Q1108 632 1123 651Q1104 675 1082 671Z" fill="#72754a" stroke="#d1b479" strokeWidth="3"/>
    <path d="M1142 715Q1119 675 1135 630L1158 606L1180 631Q1195 675 1172 715Z" fill="#492c43" stroke="#e9dcc0" strokeWidth="5"/>
    <path d="M1138 647Q1157 634 1178 647M1142 678Q1158 690 1175 678" fill="none" stroke="#d1b479" strokeWidth="4"/>
   </g>
   <g fill="#492c43" stroke="#c6a674" strokeWidth="3">
    {[[224,400],[246,416],[268,432],[1740,405],[1762,421],[1784,437],[1050,572],[1072,580],[1094,588]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="12"/>)}
   </g>
   <g fill="#e9d29b">
    {[[229,384,4],[474,594,4],[1598,448,4],[1445,591,4],[1110,584,4],[1167,591,4]].map(([x,y,r],i)=><circle key={i} cx={x} cy={y} r={r}/>)}
   </g>
  </svg>
 </div>;
}

function MaskInvitation({parallax}) {
 const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.38}px,0)`});
 return <div className="exhibition-scene ex-mask-invitation">
  <svg className="invitation-layer invitation-stage" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.1)} aria-hidden="true">
   <defs>
    <linearGradient id="invitation-wall" x2="0" y2="1"><stop stopColor="#211827"/><stop offset=".48" stopColor="#3c2b39"/><stop offset="1" stopColor="#755b4d"/></linearGradient>
    <linearGradient id="invitation-curtain" x2="0" y2="1"><stop stopColor="#78394e"/><stop offset=".55" stopColor="#522b42"/><stop offset="1" stopColor="#2d202e"/></linearGradient>
    <linearGradient id="invitation-stone" x1="0" x2="1"><stop stopColor="#5a4648"/><stop offset=".34" stopColor="#e9dcc0"/><stop offset=".66" stopColor="#b79a68"/><stop offset="1" stopColor="#57454a"/></linearGradient>
    <linearGradient id="invitation-floor" x2="0" y2="1"><stop stopColor="#806b56"/><stop offset=".44" stopColor="#493843"/><stop offset="1" stopColor="#211827"/></linearGradient>
    <radialGradient id="invitation-spotlight"><stop stopColor="#f4d891" stopOpacity=".84"/><stop offset=".38" stopColor="#d7b16e" stopOpacity=".35"/><stop offset="1" stopColor="#b79a68" stopOpacity="0"/></radialGradient>
   </defs>
   <rect width="1920" height="1080" fill="url(#invitation-wall)"/>
   <ellipse cx="1450" cy="500" rx="630" ry="595" fill="url(#invitation-spotlight)"/>
   <path d="M0 749Q320 691 610 739T1100 728Q1420 689 1650 727T1920 709V1080H0Z" fill="url(#invitation-floor)"/>
   <path d="M0 805Q321 744 626 790T1118 776Q1441 739 1686 774T1920 759M0 925Q337 849 648 907T1159 888Q1473 851 1723 884T1920 869M0 1046Q348 949 681 1011T1205 993Q1511 960 1754 994T1920 980" fill="none" stroke="#e9dcc0" strokeOpacity=".14" strokeWidth="4"/>
   <g fill="url(#invitation-stone)" stroke="#d7c49c" strokeOpacity=".48" strokeWidth="4">
    {[62,248,434,1448,1634,1820].map(x=><g key={x}>
     <path d={`M${x} 94H${x+72}V755H${x}Z`}/>
     <path d={`M${x-13} 70H${x+85}V104H${x-13}ZM${x-20} 739H${x+92}V773H${x-20}Z`}/>
    </g>)}
   </g>
   <path d="M565 760V372A395 395 0 0 1 1355 372V760" fill="#211827" fillOpacity=".53" stroke="url(#invitation-stone)" strokeWidth="24"/>
   <path d="M600 754V380A360 360 0 0 1 1320 380V754" fill="none" stroke="#c6a674" strokeOpacity=".43" strokeWidth="7"/>
   <path d="M631 751V392A329 329 0 0 1 1289 392V751" fill="#311f31" opacity=".3"/>
   <path d="M42 70Q115 193 74 395Q58 527 103 738H0V0H219Q126 54 42 70Z" fill="url(#invitation-curtain)"/>
   <path d="M1878 70Q1805 193 1846 395Q1862 527 1817 738H1920V0H1701Q1794 54 1878 70Z" fill="url(#invitation-curtain)"/>
   <path d="M36 8Q177 89 128 284M1884 8Q1743 89 1792 284" fill="none" stroke="#c6a674" strokeOpacity=".5" strokeWidth="8"/>
   <path d="M0 739H1920M0 770H1920" stroke="#d4bc8e" strokeOpacity=".44" strokeWidth="7"/>
   <g fill="none" stroke="#c6a674" strokeOpacity=".38" strokeWidth="5">
    <path d="M642 279H1278M668 301H1252"/>
    <path d="M690 265L715 290L740 265L765 290L790 265L815 290L840 265L865 290L890 265L915 290L940 265L965 290L990 265L1015 290L1040 265L1065 290L1090 265L1115 290L1140 265L1165 290L1190 265L1215 290L1240 265"/>
   </g>
  </svg>

  <svg className="invitation-layer invitation-masks" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.42)} aria-hidden="true">
   <g className="invitation-side-mask invitation-mask-sorrow" transform="translate(1010 727) rotate(-8)">
    <path d="M-91-123Q0-173 91-123L75 46Q61 112 0 145Q-61 112-75 46Z" fill="#92765b" stroke="#eddbb6" strokeWidth="8"/>
    <path d="M-48-43Q-28-63-8-38M12-38Q32-62 52-41M-41 41Q0 14 41 41" fill="none" stroke="#382832" strokeWidth="9" strokeLinecap="round"/>
    <path d="M-95-127Q-56-180 0-160Q56-180 95-127" fill="none" stroke="#b79a68" strokeWidth="11"/>
    <path d="M-68-87Q-42-108-27-86M68-87Q42-108 27-86" fill="none" stroke="#b79a68" strokeWidth="5"/>
   </g>
   <g className="invitation-side-mask invitation-mask-joy" transform="translate(1770 689) rotate(7)">
    <path d="M-77-103Q0-143 77-103L65 39Q52 94 0 119Q-52 94-65 39Z" fill="#a9544b" stroke="#eddbb6" strokeWidth="7"/>
    <path d="M-41-34Q-26-50-9-33M11-33Q28-50 43-34M-38 27Q0 71 38 27" fill="none" stroke="#2b202a" strokeWidth="8" strokeLinecap="round"/>
    <path d="M-79-105Q-47-153 0-139Q47-153 79-105" fill="none" stroke="#c6a674" strokeWidth="9"/>
    <path d="M-63-73L-81-46M63-73L81-46M-56-90L-69-108M56-90L69-108" stroke="#72754a" strokeWidth="6"/>
   </g>
   <g className="invitation-mask-olive" transform="translate(1322 838) rotate(-3)">
    <path d="M-65-84Q0-117 65-84L55 31Q45 80 0 101Q-45 80-55 31Z" fill="#d0bd9b" stroke="#f1dfbd" strokeWidth="6"/>
    <path d="M-34-28Q-23-40-9-27M9-27Q23-40 34-28M-30 30Q0 8 30 30" fill="none" stroke="#4b3540" strokeWidth="7" strokeLinecap="round"/>
    <path d="M-68-85Q-46-126 0-116Q46-126 68-85" fill="none" stroke="#72754a" strokeWidth="12"/>
    <g fill="#72754a" stroke="#c6a674" strokeWidth="3">
     <path d="M-46-81Q-68-106-56-124Q-32-109-40-88Q-22-113-4-96Q-16-75-41-77Z"/>
     <path d="M4-95Q-4-125 15-137Q31-117 20-96Q45-109 56-88Q39-70 16-82Z"/>
    </g>
   </g>
   <g className="invitation-mask-gold" transform="translate(1126 590) rotate(9)">
    <path d="M-56-73Q0-104 56-73L48 25Q39 66 0 85Q-39 66-48 25Z" fill="#492c43" stroke="#d9bd7a" strokeWidth="6"/>
    <path d="M-29-24Q-19-36-8-22M8-22Q19-36 29-24M-27 21Q0 3 27 21" fill="none" stroke="#efdcae" strokeWidth="6" strokeLinecap="round"/>
    <path d="M-58-74Q-34-109 0-100Q34-109 58-74" fill="none" stroke="#b79a68" strokeWidth="8"/>
    <path d="M0-102V-126M-23-93L-35-113M23-93L35-113" stroke="#b79a68" strokeWidth="5"/>
   </g>
   <g fill="#72754a" stroke="#c6a674" strokeWidth="3">
    <path d="M935 589Q908 560 923 534Q953 551 946 574Q970 550 992 570Q978 601 949 599Z"/>
    <path d="M1843 535Q1815 507 1831 481Q1860 498 1853 520Q1877 496 1899 516Q1885 547 1856 545Z"/>
   </g>
   <g fill="#492c43" stroke="#c6a674" strokeWidth="3">
    {[[948,618],[966,634],[984,650],[1872,568],[1890,584],[1908,600]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="11"/>)}
   </g>
  </svg>

  <svg className="invitation-layer invitation-feature" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.78)} aria-hidden="true">
   <ellipse cx="1516" cy="946" rx="222" ry="35" fill="#17121d" opacity=".48"/>
   <path d="M1358 934H1674L1644 972H1388Z" fill="#211827" stroke="#c6a674" strokeWidth="6"/>
   <path d="M1380 881H1652V934H1380Z" fill="url(#invitation-stone)" stroke="#e9dcc0" strokeWidth="6"/>
   <path d="M1402 897H1630M1400 918H1632" stroke="#f0dfbd" strokeOpacity=".55" strokeWidth="5"/>
   <g className="invitation-chosen-mask" transform="translate(1516 720)">
    <path d="M-105-145Q0-203 105-145L86 53Q70 130 0 168Q-70 130-86 53Z" fill="#d0bd9b" stroke="#f3e5c4" strokeWidth="9"/>
    <path d="M-55-52Q-33-76-11-49M12-49Q34-76 56-52" fill="none" stroke="#352831" strokeWidth="11" strokeLinecap="round"/>
    <path d="M-49 42Q0 4 49 42" fill="none" stroke="#492c43" strokeWidth="10" strokeLinecap="round"/>
    <path d="M-109-149Q-65-210 0-191Q65-210 109-149" fill="none" stroke="#b79a68" strokeWidth="13"/>
    <g fill="#72754a" stroke="#c6a674" strokeWidth="4">
     <path d="M-80-125Q-119-158-96-189Q-56-172-68-137Q-33-174-5-147Q-29-112-72-120Z"/>
     <path d="M5-151Q-10-197 22-218Q50-183 31-151Q70-181 94-147Q67-114 27-132Z"/>
    </g>
    <g fill="#492c43" stroke="#c6a674" strokeWidth="3">
     <circle cx="-50" cy="-177" r="13"/><circle cx="-28" cy="-188" r="13"/><circle cx="-7" cy="-197" r="13"/>
    </g>
   </g>
   <path d="M1424 573L1392 762" stroke="#a27e4f" strokeWidth="9" strokeLinecap="round"/>
   <path d="M1394 577Q1363 547 1378 515Q1412 535 1405 564Q1434 537 1462 561Q1444 599 1408 594Z" fill="#72754a" stroke="#d0b77f" strokeWidth="5"/>
   <path d="M1377 533Q1345 503 1361 472Q1395 492 1388 520Q1417 493 1445 517Q1427 555 1391 550Z" fill="#72754a" stroke="#d0b77f" strokeWidth="5"/>
   <g fill="#e9d29b">
    {[[1401,450,5],[1444,502,4],[1588,493,4],[1648,581,4],[1380,659,4],[1662,711,5],[1341,794,4]].map(([x,y,r],i)=><circle key={i} cx={x} cy={y} r={r}/>)}
   </g>
  </svg>
 </div>;
}

export default function ExhibitionScene({type,parallax}) {
  if(type==='symbols') return <SymbolsStillLife parallax={parallax}/>;
  if(type==='facets-mural') return <FacetsMural parallax={parallax}/>;
  if(type==='cover') return <CoverScene parallax={parallax}/>;
  if(type==='birth') return <BirthScene parallax={parallax}/>;
  if(type==='forest') return <NisaScene parallax={parallax}/>;
  if(type==='tree') return <FamilyMural parallax={parallax}/>;
  if(type==='festival') return <FestivalProcession parallax={parallax}/>;
  if(type==='society') return <SocietyCity parallax={parallax}/>;
  if(type==='ship') return <PirateMetamorphosis parallax={parallax}/>;
  if(type==='theatre') return <TheatrePanorama parallax={parallax}/>;
  if(type==='gold') return <MidasStory parallax={parallax}/>;
  if(type==='thunder') return <LycurgusPursuit parallax={parallax}/>;
  if(type==='ampelo') return <AmpelosMemory parallax={parallax}/>;
  if(type==='india') return <DionysusExpedition parallax={parallax}/>;
  if(type==='bacchae') return <PentheusTragedy parallax={parallax}/>;
  if(type==='bats') return <MinyasWeaving parallax={parallax}/>;
  if(type==='ariadne') return <AriadneNaxos parallax={parallax}/>;
  if(type==='underworld') return <DionysusUnderworld parallax={parallax}/>;
  if(type==='festival-polis') return <DionysianPolis parallax={parallax}/>;
  if(type==='maenad-thiasos') return <MaenadThiasos parallax={parallax}/>;
  if(type==='sanctuary-mysteries') return <SanctuaryMysteries parallax={parallax}/>;
  if(type==='ritual-meaning') return <RitualMeaning parallax={parallax}/>;
  if(type==='apollo-dionysus') return <ApolloDionysus parallax={parallax}/>;
  if(type==='nietzsche-tragedy') return <NietzscheTragedy parallax={parallax}/>;
  if(type==='freedom-limits') return <FreedomLimits parallax={parallax}/>;
  if(type==='ethical-reflections') return <EthicalReflections parallax={parallax}/>;
  if(type==='knowledge-fountain') return <KnowledgeFountain parallax={parallax}/>;
  if(type==='popular-culture') return <PopularCulture parallax={parallax}/>;
  if(type==='conclusion-mural') return <ConclusionMural parallax={parallax}/>;
  if(type==='bibliography-archive') return <BibliographyArchive parallax={parallax}/>;
  if(type==='mask-invitation') return <MaskInvitation parallax={parallax}/>;
 const p=(depth)=>({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.4}px,0)`});
 return <div className={`exhibition-scene ex-${type}`} aria-hidden="true">
  <svg className="ex-architecture ex-plane" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style={p(4)}>
   <defs><linearGradient id="ex-wall"><stop stopColor="#1b1523"/><stop offset=".55" stopColor="#392c37"/><stop offset="1" stopColor="#705b49"/></linearGradient><linearGradient id="ex-floor" x2="0" y2="1"><stop stopColor="#43343c"/><stop offset="1" stopColor="#15121c"/></linearGradient><radialGradient id="ex-ambient"><stop stopColor="#d7b77c" stopOpacity=".16"/><stop offset="1" stopColor="#d7b77c" stopOpacity="0"/></radialGradient></defs>
   <rect width="1600" height="900" fill="url(#ex-wall)"/><path d="M0 680H1600V900H0Z" fill="url(#ex-floor)"/>
   <path d="M0 680H1600M0 720H1600M0 785H1600M0 885H1600M1050 680L0 900M1120 680L550 900M1180 680L1050 900M1240 680L1510 900" fill="none" stroke="#d7bb8b" strokeOpacity=".12"/>
   <path d="M780 0V680L1600 900M0 668H780L1600 888" fill="none" stroke="#d7bb8b" strokeOpacity=".14" strokeWidth="2"/>
   <ellipse className="ex-ambient-light" cx="1220" cy="300" rx="650" ry="600" fill="url(#ex-ambient)"/>
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
