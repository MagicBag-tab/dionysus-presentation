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

export default function ExhibitionScene({type,parallax}) {
 if(type==='symbols') return <SymbolsStillLife parallax={parallax}/>;
 if(type==='facets-mural') return <FacetsMural parallax={parallax}/>;
 if(type==='cover') return <CoverScene parallax={parallax}/>;
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
