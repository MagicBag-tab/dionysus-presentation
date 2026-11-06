import React from 'react';

function GalleryArchitecture({move}) {
  return <svg className="museum-plane museum-backdrop" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(.55)}>
    <defs>
      <linearGradient id="gallery-wall" x2="1" y2="0">
        <stop stopColor="#211824"/>
        <stop offset=".48" stopColor="#342633"/>
        <stop offset="1" stopColor="#574343"/>
      </linearGradient>
      <linearGradient id="gallery-floor" x2="0" y2="1">
        <stop stopColor="#59474a"/>
        <stop offset=".3" stopColor="#44353e"/>
        <stop offset="1" stopColor="#1c1722"/>
      </linearGradient>
      <linearGradient id="gallery-panel" x2="0" y2="1">
        <stop stopColor="#30232f"/>
        <stop offset="1" stopColor="#201a25"/>
      </linearGradient>
      <radialGradient id="gallery-atmosphere">
        <stop stopColor="#c39b68" stopOpacity=".23"/>
        <stop offset=".55" stopColor="#83576a" stopOpacity=".08"/>
        <stop offset="1" stopColor="#332332" stopOpacity="0"/>
      </radialGradient>
      <pattern id="gallery-stone-veins" width="170" height="150" patternUnits="userSpaceOnUse">
        <path d="M4 0Q40 35 17 70T35 150M120 0Q93 41 130 77T111 150" fill="none" stroke="#e1cba5" strokeOpacity=".045" strokeWidth="2"/>
        <path d="M72 2L58 29M83 106L70 139" fill="none" stroke="#100d18" strokeOpacity=".12" strokeWidth="3"/>
      </pattern>
      <pattern id="gallery-key" width="48" height="24" patternUnits="userSpaceOnUse">
        <path d="M2 22V2H23V16H9V9H17M26 2H46V22H32V9H40V16" fill="none" stroke="#d3b77f" strokeOpacity=".58" strokeWidth="2"/>
      </pattern>
    </defs>
    <rect width="1920" height="1080" fill="url(#gallery-wall)"/>
    <path d="M0 0H840V770H0ZM1670 0H1920V770H1670Z" fill="url(#gallery-panel)" opacity=".74"/>
    <path d="M0 0H840V770H0ZM1670 0H1920V770H1670Z" fill="url(#gallery-stone-veins)"/>
    <path d="M0 760H1920V1080H0Z" fill="url(#gallery-floor)"/>
    <path d="M0 760H1920M0 812H1920M0 892H1920M0 1018H1920M0 1078H1920M860 760L0 1080M1010 760L470 1080M1190 760L1060 1080M1400 760L1710 1080M1600 760L1920 920" fill="none" stroke="#d0b890" strokeOpacity=".14" strokeWidth="2"/>
    <path d="M0 748H1920M0 758H1920" stroke="#d8bb83" strokeOpacity=".37" strokeWidth="3"/>
    <ellipse cx="1305" cy="480" rx="730" ry="640" fill="url(#gallery-atmosphere)"/>
    <path d="M104 170H668V684H104Z" fill="none" stroke="#aa8a63" strokeOpacity=".3" strokeWidth="4"/>
    <path d="M126 192H646V664H126Z" fill="none" stroke="#d6bc8e" strokeOpacity=".13" strokeWidth="2"/>
    <path d="M1750 174H1880V700H1750Z" fill="none" stroke="#c3a36e" strokeOpacity=".2" strokeWidth="3"/>
    <path d="M1772 198H1857V677H1772Z" fill="none" stroke="#e0c596" strokeOpacity=".12" strokeWidth="2"/>
    <rect x="134" y="214" width="506" height="24" fill="url(#gallery-key)" opacity=".58"/>
    <rect x="1770" y="214" width="84" height="24" fill="url(#gallery-key)" opacity=".45"/>
    <path d="M160 650H610M1760 658H1872" stroke="#c6a15b" strokeOpacity=".35" strokeWidth="3"/>
    <path d="M108 672H660V688H108ZM1744 679H1886V694H1744Z" fill="#8f775e" opacity=".55"/>
    <g className="gallery-wall-reliefs" opacity=".42">
      {[1788,1838].map((x,i)=><g key={x} transform={`translate(${x} ${385+i*115})`}>
        <circle r="39" fill="#302430" stroke="#b8996a" strokeWidth="3"/>
        <circle r="31" fill="none" stroke="#e0c798" strokeOpacity=".54" strokeWidth="2"/>
        <path d="M-19 8Q-15-16 0-19Q15-16 19 8ZM-12-5Q-11-25 0-27Q11-25 12-5" fill="#bba781" stroke="#e2cfad" strokeWidth="2"/>
        <path d="M-25 18H25" stroke="#d5bd90" strokeWidth="3"/>
      </g>)}
    </g>
    <path d="M0 0H1920V1080H0Z" fill="#281e2a" opacity=".08"/>
  </svg>;
}

function GalleryColumns({move}) {
  return <svg className="museum-plane museum-columns" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(1.2)}>
    <defs>
      <linearGradient id="gallery-column-stone" x1="0" x2="1">
        <stop stopColor="#352a32"/>
        <stop offset=".18" stopColor="#9b8268"/>
        <stop offset=".38" stopColor="#d0b993"/>
        <stop offset=".62" stopColor="#766154"/>
        <stop offset=".84" stopColor="#b29a76"/>
        <stop offset="1" stopColor="#44353b"/>
      </linearGradient>
      <pattern id="gallery-flute" width="24" height="30" patternUnits="userSpaceOnUse">
        <path d="M5 0V30M19 0V30" stroke="#ead7b3" strokeOpacity=".19" strokeWidth="3"/>
        <path d="M0 0V30" stroke="#241d27" strokeOpacity=".25" strokeWidth="2"/>
      </pattern>
    </defs>
    {[{x:80,w:164,top:100},{x:1710,w:240,top:40}].map((column,i)=><g key={column.x} opacity={i?.78:.92}>
      <path d={`M${column.x-27} ${column.top+57}H${column.x+column.w+27}V${column.top+94}H${column.x-27}ZM${column.x-42} ${column.top+94}H${column.x+column.w+42}V${column.top+123}H${column.x-42}Z`} fill="url(#gallery-column-stone)" stroke="#e2cda5" strokeOpacity=".66" strokeWidth="3"/>
      <path d={`M${column.x} ${column.top+123}H${column.x+column.w}V780H${column.x}Z`} fill="url(#gallery-column-stone)" stroke="#d9c196" strokeWidth="3"/>
      <path d={`M${column.x} ${column.top+123}H${column.x+column.w}V780H${column.x}Z`} fill="url(#gallery-flute)"/>
      <path d={`M${column.x+15} ${column.top+132}V766M${column.x+column.w-15} ${column.top+132}V766`} stroke="#30242e" strokeOpacity=".5" strokeWidth="5"/>
      <path d={`M${column.x-42} 780H${column.x+column.w+42}V815H${column.x-42}ZM${column.x-55} 815H${column.x+column.w+55}V837H${column.x-55}Z`} fill="url(#gallery-column-stone)" stroke="#d9c196" strokeWidth="3"/>
      <path d={`M${column.x-33} ${column.top+71}Q${column.x+column.w/2} ${column.top+49} ${column.x+column.w+33} ${column.top+71}M${column.x-36} ${column.top+109}H${column.x+column.w+36}`} fill="none" stroke="#f0ddba" strokeOpacity=".62" strokeWidth="3"/>
      {[0,1,2,3,4].map(n=><path key={n} d={`M${column.x-22+n*16} ${column.top+67}l8-12 8 12`} fill="none" stroke="#d7bb84" strokeOpacity=".65" strokeWidth="2"/>)}
      <path d={`M${column.x-40} 840H${column.x+column.w+40}V858H${column.x-40}Z`} fill="#493b40" stroke="#c7aa78" strokeOpacity=".55" strokeWidth="2"/>
    </g>)}
    <path d="M255 126V748M1668 105V750" stroke="#c6a15b" strokeOpacity=".25" strokeWidth="3"/>
    <path d="M247 140H267M1659 119H1677" stroke="#e2cea8" strokeOpacity=".7" strokeWidth="5"/>
  </svg>;
}

function GalleryNiche({move}) {
  return <svg className="museum-plane museum-niche" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(1.9)}>
    <defs>
      <linearGradient id="gallery-niche-stone" x1="0" x2="1">
        <stop stopColor="#4a3a3f"/>
        <stop offset=".18" stopColor="#d2bd97"/>
        <stop offset=".4" stopColor="#8c755f"/>
        <stop offset=".63" stopColor="#d8c49e"/>
        <stop offset=".84" stopColor="#8c755d"/>
        <stop offset="1" stopColor="#40343b"/>
      </linearGradient>
      <linearGradient id="gallery-niche-interior" x2="0" y2="1">
        <stop stopColor="#4b3546"/>
        <stop offset=".55" stopColor="#302333"/>
        <stop offset="1" stopColor="#241d29"/>
      </linearGradient>
      <radialGradient id="gallery-niche-light">
        <stop stopColor="#e9c98d" stopOpacity=".35"/>
        <stop offset=".56" stopColor="#c49b68" stopOpacity=".13"/>
        <stop offset="1" stopColor="#c49b68" stopOpacity="0"/>
      </radialGradient>
      <pattern id="gallery-niche-meander" width="46" height="22" patternUnits="userSpaceOnUse">
        <path d="M1 20V2H22V15H8V8H16M24 2H45V20H31V8H39V15" fill="none" stroke="#f0ddba" strokeOpacity=".65" strokeWidth="2"/>
      </pattern>
    </defs>
    <path d="M818 790V431A485 485 0 0 1 1788 431V790Z" fill="#16121d" opacity=".68" transform="translate(0 19)"/>
    <path d="M833 790V431A470 470 0 0 1 1773 431V790Z" fill="url(#gallery-niche-stone)" stroke="#ead7b4" strokeWidth="5"/>
    <path d="M882 790V435A420 420 0 0 1 1722 435V790Z" fill="url(#gallery-niche-interior)" stroke="#513e46" strokeWidth="8"/>
    <path d="M904 790V435A398 398 0 0 1 1700 435V790Z" fill="none" stroke="#d5bf92" strokeOpacity=".73" strokeWidth="4"/>
    <path d="M850 790V431A453 453 0 0 1 1756 431V790" fill="none" stroke="#45363d" strokeWidth="24"/>
    <path d="M835 790V431A468 468 0 0 1 1771 431V790" fill="none" stroke="#e2cca0" strokeOpacity=".84" strokeWidth="8"/>
    <path d="M869 790V433A434 434 0 0 1 1737 433V790" fill="none" stroke="#9e815c" strokeOpacity=".9" strokeWidth="5"/>
    <path d="M870 790V431A435 435 0 0 1 1740 431V790Z" fill="url(#gallery-niche-meander)" opacity=".28"/>
    <ellipse cx="1300" cy="431" rx="410" ry="440" fill="url(#gallery-niche-light)"/>
    <path d="M937 789V457A363 363 0 0 1 1663 457" fill="none" stroke="#f1ddb5" strokeOpacity=".22" strokeWidth="3"/>
    <path d="M932 762H1666M920 778H1678" stroke="#d9c39a" strokeOpacity=".5" strokeWidth="4"/>
    <g fill="#bba276" stroke="#ead8b7" strokeOpacity=".72" strokeWidth="2">
      {[[1300,206,1],[917,432,.65],[1683,432,.65]].map(([x,y,s],i)=><g key={i} transform={`translate(${x} ${y}) scale(${s})`}>
        <path d="M0-24Q6-7 24 0Q6 7 0 24Q-6 7-24 0Q-6-7 0-24Z"/>
        <circle r="5" fill="#6d394c"/>
      </g>)}
    </g>
    <g fill="none" stroke="#c5a36d" strokeWidth="4" opacity=".64">
      <path d="M916 615q28-43 55 0t55 0M1574 615q28-43 55 0t55 0"/>
      <path d="M964 634q18-28 36 0t36 0M1564 634q18-28 36 0t36 0"/>
      <path d="M1000 681q24-32 48 0t48 0M1512 681q24-32 48 0t48 0"/>
    </g>
    <path d="M852 752H1754V792H852Z" fill="url(#gallery-niche-stone)" stroke="#e5d1ab" strokeWidth="4"/>
    <rect x="886" y="761" width="834" height="22" fill="url(#gallery-niche-meander)" opacity=".76"/>
    <path d="M806 792H1800V814H806Z" fill="#59464a" stroke="#c9ae7f" strokeWidth="3"/>
    <path d="M830 815H1778" stroke="#d5bd90" strokeOpacity=".4" strokeWidth="3"/>
  </svg>;
}

function DionysusBust({move}) {
  return <svg className="museum-plane museum-bust" viewBox="0 0 640 720" preserveAspectRatio="xMidYMax meet" style={move(2.8)} role="presentation">
    <defs>
      <linearGradient id="gallery-marble" x1="0" y1=".15" x2="1" y2=".75">
        <stop stopColor="#f4e7cc"/>
        <stop offset=".2" stopColor="#baaa8c"/>
        <stop offset=".43" stopColor="#e7d9bb"/>
        <stop offset=".7" stopColor="#9e8d77"/>
        <stop offset=".88" stopColor="#d5c4a4"/>
        <stop offset="1" stopColor="#635654"/>
      </linearGradient>
      <linearGradient id="gallery-hair" x1="0" x2="1" y2="1">
        <stop stopColor="#dfcfac"/>
        <stop offset=".32" stopColor="#93836d"/>
        <stop offset=".62" stopColor="#d5c4a3"/>
        <stop offset="1" stopColor="#71615a"/>
      </linearGradient>
      <linearGradient id="gallery-drape" x1="0" x2="1">
        <stop stopColor="#593247"/>
        <stop offset=".38" stopColor="#8b5360"/>
        <stop offset=".68" stopColor="#4a2d42"/>
        <stop offset="1" stopColor="#2b2332"/>
      </linearGradient>
      <radialGradient id="gallery-face-light" cx=".28" cy=".2">
        <stop stopColor="#fff5dc" stopOpacity=".65"/>
        <stop offset=".7" stopColor="#d8c5a2" stopOpacity=".08"/>
        <stop offset="1" stopColor="#4d4040" stopOpacity=".26"/>
      </radialGradient>
      <pattern id="gallery-marble-grain" width="120" height="130" patternUnits="userSpaceOnUse">
        <path d="M6 0Q40 28 20 62T33 130M104 0Q84 36 109 71T98 130" fill="none" stroke="#fff4d8" strokeOpacity=".14" strokeWidth="2"/>
        <path d="M64 5L54 28M66 91L57 120" stroke="#574947" strokeOpacity=".12" strokeWidth="3"/>
      </pattern>
    </defs>
    <ellipse cx="320" cy="696" rx="244" ry="17" fill="#140f19" opacity=".46"/>
    <ellipse cx="320" cy="334" rx="275" ry="333" fill="#caa16c" opacity=".07"/>
    <path d="M127 636Q133 555 181 522Q222 492 260 492H384Q431 506 465 539Q503 578 514 636L530 671H107Z" fill="url(#gallery-marble)" stroke="#f0dfc0" strokeOpacity=".76" strokeWidth="5"/>
    <path d="M139 632Q156 567 207 544Q245 526 270 531L298 586L280 668H112Z" fill="url(#gallery-drape)" stroke="#d9c394" strokeWidth="4"/>
    <path d="M502 632Q479 566 434 544Q398 526 371 531L343 586L361 668H528Z" fill="#6f4653" stroke="#d9c394" strokeWidth="4"/>
    <path d="M205 547Q253 576 285 670M431 547Q389 579 357 670M253 534Q291 570 306 620M392 535Q357 570 344 620" fill="none" stroke="#f0dfbd" strokeOpacity=".75" strokeWidth="6"/>
    <path d="M218 566Q252 612 250 666M411 565Q384 613 390 666M282 579Q300 620 299 670M355 579Q337 620 338 670" fill="none" stroke="#352534" strokeOpacity=".46" strokeWidth="4"/>
    <path d="M250 503Q266 457 267 411H375Q373 460 397 507L376 556Q326 577 273 552Z" fill="url(#gallery-marble)" stroke="#ebd9b8" strokeWidth="4"/>
    <path d="M276 473Q319 493 369 470M270 495Q318 520 382 493" fill="none" stroke="#76665a" strokeOpacity=".38" strokeWidth="4"/>
    <path d="M217 282Q207 201 239 150Q269 105 326 108Q384 108 410 151Q439 206 419 286L399 382Q375 433 325 446Q276 440 244 391Z" fill="url(#gallery-marble)" stroke="#f6e5c4" strokeWidth="5"/>
    <path d="M222 273Q206 252 195 280Q191 315 226 330M415 270Q434 249 447 278Q450 313 411 332" fill="url(#gallery-marble)" stroke="#d7c39f" strokeWidth="4"/>
    <path d="M219 271Q217 219 237 177Q268 125 326 129Q384 126 411 177Q431 224 418 282L402 326Q395 263 381 227Q363 203 338 195Q303 220 266 209Q248 233 240 287L232 330Z" fill="url(#gallery-hair)" stroke="#ead8b6" strokeWidth="4"/>
    <path d="M229 180Q207 214 223 258Q234 270 240 242M251 145Q231 174 244 207Q258 222 268 194M277 130Q254 156 267 185Q282 198 296 168M308 127Q288 150 303 179Q319 191 331 159M345 130Q330 152 344 178Q361 189 370 160M379 145Q364 169 380 199Q396 210 403 183M413 190Q429 228 412 266Q401 277 397 249" fill="none" stroke="#685951" strokeOpacity=".86" strokeWidth="10" strokeLinecap="round"/>
    <path d="M238 176Q252 165 260 181M268 146Q283 137 291 153M303 144Q317 135 326 151M343 145Q356 137 364 154M379 174Q390 164 398 180M229 222Q242 212 251 227M397 220Q408 211 416 226" fill="none" stroke="#f2e3c5" strokeOpacity=".78" strokeWidth="5" strokeLinecap="round"/>
    <path d="M245 268Q268 251 291 266M354 266Q379 250 401 268" fill="none" stroke="#65544d" strokeWidth="7" strokeLinecap="round"/>
    <path d="M251 279Q269 271 289 279M355 279Q376 271 394 279" fill="none" stroke="#f3e5c9" strokeWidth="5" strokeLinecap="round"/>
    <path d="M256 289Q270 284 286 289M360 289Q375 284 390 289" fill="none" stroke="#42383a" strokeWidth="4" strokeLinecap="round"/>
    <ellipse cx="273" cy="290" rx="4" ry="3" fill="#382f31"/>
    <ellipse cx="374" cy="290" rx="4" ry="3" fill="#382f31"/>
    <path d="M323 286L312 331Q318 339 330 335M302 353Q322 361 343 352" fill="none" stroke="#766256" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M293 365Q322 379 351 363" fill="none" stroke="#f7e9ca" strokeWidth="7" strokeLinecap="round"/>
    <path d="M256 393Q279 416 322 417Q367 414 391 390" fill="none" stroke="#8c7868" strokeOpacity=".55" strokeWidth="5"/>
    <path d="M227 206Q247 187 268 203Q291 216 320 198Q347 216 373 201Q394 187 411 208" fill="none" stroke="#816548" strokeWidth="8"/>
    {[[224,201,-40],[241,183,-25],[260,174,-10],[280,169,4],[301,167,15],[324,169,-8],[347,170,11],[369,178,22],[390,190,38],[413,207,54],[236,217,-50],[267,204,-25],[298,202,-8],[342,204,12],[374,209,35],[402,225,48]].map(([x,y,r],i)=><g key={i} transform={`translate(${x} ${y}) rotate(${r})`}>
      <path d="M0 0Q-16-8-12-27Q2-20 7-39Q18-21 29-27Q30-8 0 0Z" fill={i%3===0?'#69764d':'#7c8152'} stroke="#d8c28e" strokeWidth="2"/>
      <path d="M0 0L9-34M8-15L-3-24" fill="none" stroke="#ebd8a8" strokeOpacity=".74" strokeWidth="2"/>
    </g>)}
    {[[247,195],[269,183],[293,177],[319,177],[345,181],[369,189],[395,204]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="5.5" fill={i%2?'#773a4b':'#a18652'} stroke="#ead49d" strokeWidth="2"/>)}
    <path d="M204 616Q320 646 437 616" fill="none" stroke="#e8d5b3" strokeOpacity=".7" strokeWidth="4"/>
    <path d="M111 670H530V691H111Z" fill="url(#gallery-marble)" stroke="#e7d4b1" strokeWidth="4"/>
    <path d="M111 670H530V691H111Z" fill="url(#gallery-marble-grain)" opacity=".5"/>
    <path d="M126 681H516" stroke="#6e5a53" strokeOpacity=".45" strokeWidth="2"/>
    <path d="M135 602Q164 620 190 603M456 603Q483 619 507 601" fill="none" stroke="#87905d" strokeWidth="4"/>
    <rect x="96" y="100" width="448" height="600" fill="url(#gallery-marble-grain)" opacity=".3" pointerEvents="none"/>
  </svg>;
}

function GalleryPedestal({move}) {
  return <svg className="museum-plane museum-pedestal" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(3.2)}>
    <defs>
      <linearGradient id="gallery-pedestal-stone" x1="0" x2="1">
        <stop stopColor="#504148"/>
        <stop offset=".19" stopColor="#c7b18b"/>
        <stop offset=".5" stopColor="#786658"/>
        <stop offset=".79" stopColor="#bda47b"/>
        <stop offset="1" stopColor="#45383d"/>
      </linearGradient>
      <pattern id="gallery-pedestal-key" width="42" height="20" patternUnits="userSpaceOnUse">
        <path d="M1 18V2H20V14H7V7H14M22 2H41V18H28V7H35V14" fill="none" stroke="#e6d2a7" strokeOpacity=".7" strokeWidth="2"/>
      </pattern>
    </defs>
    <ellipse cx="1300" cy="1010" rx="386" ry="39" fill="#100b18" opacity=".52"/>
    <path d="M1010 788H1590L1550 835H1050Z" fill="url(#gallery-pedestal-stone)" stroke="#f0dfbd" strokeWidth="4"/>
    <path d="M1050 835H1550L1517 874H1083Z" fill="#725e54" stroke="#d6bf94" strokeWidth="3"/>
    <path d="M1083 874H1517V1000H1100Z" fill="url(#gallery-pedestal-stone)" stroke="#e5d2af" strokeWidth="4"/>
    <path d="M1517 874H1550L1590 905V994L1517 1000Z" fill="#514248" stroke="#c8ad83" strokeWidth="3"/>
    <path d="M1110 893H1486V980H1110Z" fill="none" stroke="#d3b170" strokeWidth="4"/>
    <path d="M1122 904H1474V969H1122Z" fill="none" stroke="#f1dfbd" strokeOpacity=".52" strokeWidth="2"/>
    <rect x="1124" y="913" width="348" height="18" fill="url(#gallery-pedestal-key)" opacity=".68"/>
    <path d="M1142 946Q1205 909 1268 946Q1330 909 1393 946Q1430 963 1460 943" fill="none" stroke="#788154" strokeWidth="5"/>
    <path d="M1227 949Q1256 927 1287 949Q1316 927 1345 949" fill="none" stroke="#d0b47b" strokeWidth="3"/>
    <circle cx="1300" cy="949" r="13" fill="#542d42" stroke="#d8bf8c" strokeWidth="3"/>
    <path d="M1096 1000H1521V1026H1096Z" fill="#4a3b40" stroke="#c7ad82" strokeWidth="3"/>
    <path d="M1063 1026H1553L1580 1052H1037Z" fill="url(#gallery-pedestal-stone)" stroke="#e8d6b3" strokeWidth="4"/>
    <path d="M1050 1053H1565V1069H1050Z" fill="#514248" stroke="#c3a87c" strokeWidth="3"/>
    <path d="M1025 1070H1590" stroke="#e2cda5" strokeOpacity=".55" strokeWidth="4"/>
    <path d="M1036 800H1562" stroke="#fff0d0" strokeOpacity=".42" strokeWidth="2"/>
  </svg>;
}

function GalleryVines({move}) {
  const leaves = [[74,938,-36,1.15],[172,1004,26,.86],[1816,934,27,1.13],[1872,804,-34,.82],[1782,296,31,.64],[106,356,-19,.58]];
  const grapes = [[154,972,.76],[1810,952,.8],[1845,335,.55]];
  return <svg className="museum-plane museum-foreground" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={move(4.4)}>
    <defs>
      <linearGradient id="gallery-leaf" x2="1" y2="1"><stop stopColor="#9b9661"/><stop offset=".48" stopColor="#67724c"/><stop offset="1" stopColor="#303d32"/></linearGradient>
      <radialGradient id="gallery-grape"><stop stopColor="#9b5b69"/><stop offset=".6" stopColor="#66364c"/><stop offset="1" stopColor="#382337"/></radialGradient>
    </defs>
    <g fill="none" stroke="#68724c" strokeWidth="8" strokeLinecap="round">
      <path d="M-32 1087Q108 991 87 884T160 732Q219 630 171 531"/>
      <path d="M-10 1014Q124 964 206 878T278 775"/>
      <path d="M1962 1080Q1820 1013 1855 908T1790 764Q1730 682 1800 581"/>
      <path d="M1951 822Q1842 751 1880 640T1835 458Q1801 369 1865 291"/>
      <path d="M1770 346Q1838 389 1874 445"/>
      <path d="M179 1063Q230 1002 292 988"/>
    </g>
    {leaves.map(([x,y,r,s],i)=><g key={i} className="museum-vine-leaf" transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      <path d="M0 0Q-48-34-37-82Q-6-71 0-116Q29-77 52-96Q58-40 0 0Z" fill="url(#gallery-leaf)" stroke="#d5bd86" strokeOpacity=".64" strokeWidth="2"/>
      <path d="M0 0Q-3-48 0-106M0-46L-27-72M1-65L31-83" fill="none" stroke="#e1ca95" strokeOpacity=".62" strokeWidth="2"/>
    </g>)}
    {grapes.map(([x,y,s],i)=><g key={i} transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M0-72Q22-98 45-85M5-70Q-10-88-32-82" fill="none" stroke="#87905d" strokeWidth="6"/>
      {[[0,0],[24,8],[-22,11],[10,30],[-12,36],[0,59]].map(([cx,cy],j)=><circle key={j} cx={cx} cy={cy} r="17" fill="url(#gallery-grape)" stroke="#c8a772" strokeOpacity=".66" strokeWidth="2"/>)}
      <path d="M-7 2Q-1-3 5-1M17 10Q23 5 28 7" fill="none" stroke="#edcea0" strokeOpacity=".54" strokeWidth="2"/>
    </g>)}
  </svg>;
}

export default function GalleryScene({parallax}) {
  const move = depth => ({transform:`translate3d(${parallax.x*depth}px,${parallax.y*depth*.35}px,0)`});
  return <div className="museum-scene" aria-hidden="true">
    <GalleryArchitecture move={move}/>
    <GalleryColumns move={move}/>
    <GalleryNiche move={move}/>
    <DionysusBust move={move}/>
    <GalleryPedestal move={move}/>
    <GalleryVines move={move}/>
    <div className="museum-vignette"/>
  </div>;
}
