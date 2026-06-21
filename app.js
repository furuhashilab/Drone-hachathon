const teams = [
  {
    id: "argentina", team: "Argentina", countryJa: "アルゼンチン", flag: "🇦🇷", city: "Buenos Aires", stadium: "Estadio Monumental", coords: [-58.4497385, -34.5452932], overview: { center: [-64, -34], zoom: 3.7 }, homeMatches: 7, venueCount: 2,
    fouls: 193, foulsPerMatch: 10.7, yellow: 25, red: 3, straightRed: 3, suspensions: 7, confidence: "B",
    players: "Enzo Fernández / Nicolás González / Nicolás Otamendi",
    title: "静かな接触、鋭い退場。",
    lead: "ファウル平均は最少。それでも、3枚のレッドはすべて一発退場だった。",
    narrative: "継続的に笛を鳴らされるチームではない。だが緊張が閾値を越えた瞬間、結果は決定的になった。量ではなく局面の鋭さが、アルゼンチンの輪郭をつくる。"
  },
  {
    id: "bolivia", team: "Bolivia", countryJa: "ボリビア", flag: "🇧🇴", city: "El Alto", stadium: "Estadio Municipal de El Alto", coords: [-68.2014454, -16.472623], overview: { center: [-64.7, -16.7], zoom: 4.5 }, homeMatches: 6, venueCount: 2,
    fouls: 220, foulsPerMatch: 12.2, yellow: 30, red: 4, straightRed: 4, suspensions: 9, confidence: "C",
    players: "Héctor Cuéllar / Roberto Fernández / José Sagredo / Lucas Chávez",
    title: "退場が、最も多い場所。",
    lead: "レッド4枚は10か国で最多。すべて直接退場として記録された。",
    narrative: "警告数より目を引くのは、退場に至る強い懲戒局面。ただし別のDiscipline表には追加の退場者があり、統一統計との不一致を残している。"
  },
  {
    id: "brazil", team: "Brazil", countryJa: "ブラジル", flag: "🇧🇷", city: "Rio de Janeiro", stadium: "Estádio do Maracanã", coords: [-43.2311861, -22.9121619], overview: { center: [-52.5, -10.5], zoom: 3.5 }, homeMatches: 2, venueCount: 7,
    fouls: 229, foulsPerMatch: 12.7, yellow: 40, red: 1, straightRed: 1, suspensions: 9, confidence: "B",
    players: "Joelinton",
    title: "黄色が、積もっていく。",
    lead: "イエロー40枚。退場よりも、試合ごとの警告が長い尾を引いた。",
    narrative: "一度の爆発ではなく、小さな摩擦の反復。出場停止者9人という数字は、蓄積した警告が次の試合へ影を落としていく構造を示す。"
  },
  {
    id: "chile", team: "Chile", countryJa: "チリ", flag: "🇨🇱", city: "Santiago", stadium: "Estadio Nacional Julio Martínez Prádanos", coords: [-70.6106181, -33.4643821], overview: { center: [-71, -32.5], zoom: 3.6 }, homeMatches: 6, venueCount: 2,
    fouls: 214, foulsPerMatch: 11.9, yellow: 39, red: 3, straightRed: 2, suspensions: 12, confidence: "B",
    players: "Víctor Méndez / Marcelino Núñez / Francisco Sierralta",
    title: "処分は、広く分布した。",
    lead: "出場停止者12人は予選最多。警告も退場も、一部の選手だけに留まらない。",
    narrative: "2枚の直接退場と、1件の2枚目イエロー。チリでは複数の種類の懲戒がチームの広い範囲へ波及した。"
  },
  {
    id: "colombia", team: "Colombia", countryJa: "コロンビア", flag: "🇨🇴", city: "Barranquilla", stadium: "Estadio Metropolitano Roberto Meléndez", coords: [-74.8005111, 10.9269548], overview: { center: [-74, 4.5], zoom: 4.4 }, homeMatches: 9, venueCount: 1,
    fouls: 254, foulsPerMatch: 14.1, yellow: 37, red: 1, straightRed: 0, suspensions: 9, confidence: "B",
    players: "Camilo Vargas（2枚目のイエロー）",
    title: "笛が、途切れない。",
    lead: "1試合14.1ファウルは予選最多。接触が90分を通して積み重なる。",
    narrative: "一発退場は0。コロンビアの熱は決定的な一瞬ではなく、プレーの連続のなかにある。総ファウルは約254回と推定される。"
  },
  {
    id: "ecuador", team: "Ecuador", countryJa: "エクアドル", flag: "🇪🇨", city: "Quito", stadium: "Estadio Rodrigo Paz Delgado", coords: [-78.4890768, -0.1077231], overview: { center: [-78.2, -1.4], zoom: 5 }, homeMatches: 6, venueCount: 2,
    fouls: 232, foulsPerMatch: 12.9, yellow: 23, red: 3, straightRed: 1, suspensions: 6, confidence: "B",
    players: "Alan Franco / Piero Hincapié / Moisés Caicedo",
    title: "黄色は少なく、赤は残る。",
    lead: "イエロー23枚は最少。それでもレッドは3枚を数えた。",
    narrative: "通常時の警告は少ない一方、退場局面だけが突出する。1件の直接退場と2件の黄赤が、少ない警告総数の奥にある。"
  },
  {
    id: "paraguay", team: "Paraguay", countryJa: "パラグアイ", flag: "🇵🇾", city: "Asunción", stadium: "Estadio Defensores del Chaco", coords: [-57.6574164, -25.2919551], overview: { center: [-58.3, -23.4], zoom: 4.7 }, homeMatches: 8, venueCount: 2,
    fouls: 247, foulsPerMatch: 13.7, yellow: 36, red: 1, straightRed: 1, suspensions: 10, confidence: "C",
    players: "Robert Rojas",
    title: "高頻度の接触、その余波。",
    lead: "ファウル平均13.7は2位。出場停止者も10人に達した。",
    narrative: "接触の多さと処分の広がりが同時に見える。ただしDiscipline表には統一統計外の退場記録があり、ボリビアと同じく信頼度をCとした。"
  },
  {
    id: "peru", team: "Peru", countryJa: "ペルー", flag: "🇵🇪", city: "Lima", stadium: "Estadio Nacional", coords: [-77.0338629, -12.0670682], overview: { center: [-75.2, -9.2], zoom: 4.3 }, homeMatches: 8, venueCount: 2,
    fouls: 232, foulsPerMatch: 12.9, yellow: 38, red: 1, straightRed: 0, suspensions: 9, confidence: "B",
    players: "Luis Advíncula（2枚目のイエロー）",
    title: "ピッチの外まで、懲戒は続く。",
    lead: "カードだけではない。VAR機材への行為、攻撃的行為も処分になった。",
    narrative: "38枚のイエローに加え、試合後・場外の出来事が出場停止へ接続した。笛の物語は、90分の終了と同時には終わらない。"
  },
  {
    id: "uruguay", team: "Uruguay", countryJa: "ウルグアイ", flag: "🇺🇾", city: "Montevideo", stadium: "Estadio Centenario", coords: [-56.1526841, -34.8945392], overview: { center: [-56, -32.8], zoom: 5.1 }, homeMatches: 9, venueCount: 1,
    fouls: 238, foulsPerMatch: 13.2, yellow: 38, red: 0, straightRed: 0, suspensions: 7, confidence: "B",
    players: "直接・黄赤退場なし",
    title: "高強度、しかし赤はゼロ。",
    lead: "ファウル平均13.2、イエロー38枚。それでも退場は回避した。",
    narrative: "強度の高さは、必ずしも退場を意味しない。ウルグアイは接触と警告を抱えながら、決定的な線を越えなかった唯一のチームだ。"
  },
  {
    id: "venezuela", team: "Venezuela", countryJa: "ベネズエラ", flag: "🇻🇪", city: "Maturín", stadium: "Estadio Monumental de Maturín", coords: [-63.224258, 9.71684], overview: { center: [-66, 7.1], zoom: 4.3 }, homeMatches: 9, venueCount: 1,
    fouls: 239, foulsPerMatch: 13.3, yellow: 42, red: 1, straightRed: 1, suspensions: 9, confidence: "B",
    players: "Alexander González",
    title: "42枚の、黄色い痕跡。",
    lead: "イエローカード42枚は予選最多。警告集中型の熱が地図に立ち上がる。",
    narrative: "退場は1枚。しかし警告は各試合をまたいで蓄積した。赤い一瞬より、黄色い反復がベネズエラの予選を特徴づける。"
  }
];

const focusTeams = [...teams].sort((a, b) => a.fouls - b.fouls || a.team.localeCompare(b.team));

const foulStoryCopy = {
  argentina: {
    title: "最も少ない笛から始まる。",
    context: "公開平均10.7回を18試合に掛けた推定値。次のチリより約21回少なく、10か国の下端に位置する。ただし、この数だけでプレーの激しさや規律の良さを断定することはできない。"
  },
  chile: {
    title: "二百回を越える最初の地点。",
    context: "アルゼンチンから約21回増え、推定総数は214回。次のボリビアとの差は6回で、ここから各国の値がより近い間隔で並び始める。"
  },
  bolivia: {
    title: "低位群の上端、220回。",
    context: "チリより約6回多く、10か国平均の約230回よりは少ない。4枚のレッドなど懲戒の強さとは別に、接触の総量では下位側に位置する。"
  },
  brazil: {
    title: "大陸の中間帯へ。",
    context: "推定229回は10か国平均の約230回にほぼ重なる。ボリビアから9回増える一方、次のエクアドルとの差はわずか3回。"
  },
  ecuador: {
    title: "232回、同じ高さが現れる。",
    context: "ブラジルより約3回多く、ペルーとは推定232回で並ぶ。公開平均が小数第1位に丸められているため、同値でも実数には小さな差がある可能性がある。"
  },
  peru: {
    title: "同じ232回、次の輪郭へ。",
    context: "エクアドルと同じ推定値だが、これは丸められた平均12.9回からの計算。並び順は同率内の表示順であり、優劣を示すものではない。"
  },
  uruguay: {
    title: "平均を越えて、238回。",
    context: "同率のエクアドル・ペルーから約6回増え、10か国平均を上回る。次のベネズエラとはわずか1回差で、ほぼ同じ接触量の帯にいる。"
  },
  venezuela: {
    title: "一回差で続く、239回。",
    context: "ウルグアイとの差は推定1回。黄色カードの多さは補足情報として分け、ここでは18試合を通じたファウル総量だけを比較する。"
  },
  paraguay: {
    title: "高位帯へ、247回。",
    context: "ベネズエラから約8回増え、少ない順で9番目。統計ソース間で退場記録に不一致があるが、ファウル平均13.7回は統一ソースの値を使用している。"
  },
  colombia: {
    title: "最後に立つ、254回。",
    context: "1試合平均14.1回、推定総数254回で10か国最多。最少のアルゼンチンとの差は約61回あり、この物語全体のレンジを形づくる。"
  }
};

const overviewStats = [
  { value: "2,298", label: "推定ファウル" },
  { value: "12.8", label: "全体 / 試合" },
  { value: "193", label: "最少" },
  { value: "254", label: "最多" }
];

const scenes = [
  {
    tag: "PROLOGUE",
    title: "笛は、どこで熱くなったか。",
    lead: "2026ワールドカップ南米予選。10か国を、推定ファウル数の少ない順に巡る。",
    body: "各国18試合の公開平均から推定した総ファウルを、一本の3D柱で比較します。カードと出場停止は順位に混ぜず、会場ポップアップの補足情報として表示します。",
    venue: "SOUTH AMERICA / 10 MAIN VENUES",
    stats: overviewStats,
    badge: "10 TEAMS",
    note: "全18節・全代表18試合",
    camera: { center: [-61.5, -18.3], zoom: 3.15, pitch: 49, bearing: -17 }
  },
  ...focusTeams.map((team, index) => ({
    tag: `${String(index + 1).padStart(2, "0")} / 10 · LOW → HIGH`,
    title: foulStoryCopy[team.id].title,
    lead: `${team.team}の推定総ファウルは約${team.fouls}回。1試合平均${team.foulsPerMatch.toFixed(1)}回。`,
    body: foulStoryCopy[team.id].context,
    venue: `${team.stadium} · ${team.city}`,
    stats: [
      { value: `≈${team.fouls}`, label: "推定総ファウル" },
      { value: team.foulsPerMatch.toFixed(1), label: "1試合平均" },
      { value: `${index + 1}/10`, label: "少ない順ランキング" }
    ],
    badge: `FOUL RANK ${index + 1} / 10`,
    note: `1試合平均 ${team.foulsPerMatch.toFixed(1)} · ${team.stadium}`,
    camera: {
      center: team.coords,
      zoom: index === 1 || index === 4 || index === 5 ? 15.3 : 15.05,
      pitch: 63 + (index % 3) * 3,
      bearing: [-28, 31, -16, 24, -34, 18, -23, 29, -15, 27][index]
    },
    team
  })),
  {
    tag: "FINALE",
    title: "61回の幅を、旅した。",
    lead: "193回から254回まで。少ない順に並べると、大陸の接触量に勾配が現れる。",
    body: "この差は国民性や情熱の順位ではなく、審判が記録したファウルの発生量です。カードや退場は別の軸としてポップアップに残し、単一のランキングへ混在させていません。",
    venue: "SOUTH AMERICA / 22 QUALIFIER VENUES",
    stats: overviewStats,
    badge: "12 SCENES",
    note: "次のループで、物語は再び南米へ",
    camera: { center: [-63.5, -20], zoom: 3.05, pitch: 52, bearing: 14 }
  }
];

const SCENE_DURATION = 22000;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let currentScene = 0;
let isPlaying = !prefersReducedMotion;
let elapsed = 0;
let previousFrame = performance.now();
let popupTimer = null;
let storyPopup = null;
let markers = [];
let mapReady = false;
let cameraTimers = [];

const els = {
  card: document.querySelector(".story-card"),
  sceneNumber: document.querySelector("#sceneNumber"),
  sceneTag: document.querySelector("#sceneTag"),
  title: document.querySelector("#sceneTitle"),
  lead: document.querySelector("#sceneLead"),
  body: document.querySelector("#sceneBody"),
  venue: document.querySelector("#venueName"),
  stats: document.querySelector("#statGrid"),
  foulScale: document.querySelector("#foulScale"),
  foulScaleBar: document.querySelector("#foulScaleBar"),
  foulScaleValue: document.querySelector("#foulScaleValue"),
  foulRank: document.querySelector("#foulRank"),
  badge: document.querySelector("#confidenceBadge"),
  note: document.querySelector("#sceneNote"),
  timelineLabel: document.querySelector("#timelineLabel"),
  timeLeft: document.querySelector("#timeLeft"),
  progress: document.querySelector("#timelineProgress"),
  timeline: document.querySelector(".timeline"),
  play: document.querySelector("#playButton"),
  prev: document.querySelector("#prevButton"),
  next: document.querySelector("#nextButton"),
  info: document.querySelector("#infoPanel"),
  infoButton: document.querySelector("#infoButton"),
  closeInfo: document.querySelector("#closeInfo"),
  hint: document.querySelector("#soundlessHint"),
  brand: document.querySelector(".brand"),
  countryIntro: document.querySelector("#countryIntro"),
  countryIntroStep: document.querySelector("#countryIntroStep"),
  countryIntroFlag: document.querySelector("#countryIntroFlag"),
  countryIntroName: document.querySelector("#countryIntroName"),
  countryIntroNameJa: document.querySelector("#countryIntroNameJa"),
  countryIntroMeta: document.querySelector("#countryIntroMeta"),
  disciplinePanel: document.querySelector("#disciplinePanel"),
  legend: document.querySelector(".legend"),
  loading: document.querySelector("#loadingScreen")
};

const map = new maplibregl.Map({
  container: "map",
  style: "https://tiles.openfreemap.org/styles/liberty",
  center: scenes[0].camera.center,
  zoom: scenes[0].camera.zoom,
  pitch: scenes[0].camera.pitch,
  bearing: scenes[0].camera.bearing,
  attributionControl: false,
  antialias: true,
  renderWorldCopies: false,
  maxPitch: 80
});

map.addControl(new maplibregl.AttributionControl({ compact: true }), "bottom-right");

function squarePolygon(center, xOffset, yOffset, size) {
  const [x, y] = center;
  const cx = x + xOffset;
  const cy = y + yOffset;
  return [[
    [cx - size, cy - size], [cx + size, cy - size],
    [cx + size, cy + size], [cx - size, cy + size],
    [cx - size, cy - size]
  ]];
}

function pointFromMeters(center, east, north) {
  const latitudeRadians = center[1] * Math.PI / 180;
  return [
    center[0] + east / (111320 * Math.cos(latitudeRadians)),
    center[1] + north / 110540
  ];
}

function ellipsePath(center, eastRadius, northRadius, reverse = false) {
  const points = Array.from({ length: 65 }, (_, index) => {
    const angle = (Math.PI * 2 * index) / 64;
    return pointFromMeters(center, Math.sin(angle) * eastRadius, Math.cos(angle) * northRadius);
  });
  return reverse ? points.reverse() : points;
}

function stadiumRing(center, outerEast, outerNorth, innerEast, innerNorth) {
  return [
    ellipsePath(center, outerEast, outerNorth),
    ellipsePath(center, innerEast, innerNorth, true)
  ];
}

function pitchPolygon(center) {
  const corners = [
    pointFromMeters(center, -34, -52.5),
    pointFromMeters(center, 34, -52.5),
    pointFromMeters(center, 34, 52.5),
    pointFromMeters(center, -34, 52.5)
  ];
  corners.push(corners[0]);
  return [corners];
}

function makeStadiumGeoJSON() {
  const tiers = [
    { tier: "lower", outer: [152, 112], inner: [112, 75], base: 0, height: 17, color: "#303742" },
    { tier: "upper", outer: [138, 99], inner: [106, 68], base: 17, height: 35, color: "#6d7580" },
    { tier: "rim", outer: [136, 97], inner: [111, 73], base: 35, height: 43, color: "#9ba2aa" }
  ];
  return {
    type: "FeatureCollection",
    features: teams.flatMap(team => tiers.map(tier => ({
      type: "Feature",
      properties: { team: team.id, ...tier },
      geometry: {
        type: "Polygon",
        coordinates: stadiumRing(team.coords, ...tier.outer, ...tier.inner)
      }
    })))
  };
}

function makePitchGeoJSON() {
  return {
    type: "FeatureCollection",
    features: teams.map(team => ({
      type: "Feature",
      properties: { team: team.id },
      geometry: { type: "Polygon", coordinates: pitchPolygon(team.coords) }
    }))
  };
}

function makePulseGeoJSON() {
  return {
    type: "FeatureCollection",
    features: teams.map(team => ({
      type: "Feature",
      properties: {
        team: team.id,
        metric: "fouls",
        fouls: team.fouls,
        height: Math.round(80 + (team.fouls - 193) * 3.8)
      },
      geometry: { type: "Polygon", coordinates: squarePolygon(team.coords, 0.0025, 0, 0.00054) }
    }))
  };
}

function addBuildingLayer() {
  const style = map.getStyle();
  if (!style?.layers || style.layers.some(layer => layer.type === "fill-extrusion" && /building/i.test(layer.id))) return;
  if (!map.getSource("openmaptiles")) return;
  const labelLayer = style.layers.find(layer => layer.type === "symbol" && layer.layout?.["text-field"]);
  map.addLayer({
    id: "story-3d-buildings",
    type: "fill-extrusion",
    source: "openmaptiles",
    "source-layer": "building",
    minzoom: 12,
    paint: {
      "fill-extrusion-color": ["interpolate", ["linear"], ["get", "render_height"], 0, "#39404b", 80, "#69717c"],
      "fill-extrusion-height": ["coalesce", ["get", "render_height"], ["get", "height"], 8],
      "fill-extrusion-base": ["coalesce", ["get", "render_min_height"], 0],
      "fill-extrusion-opacity": 0.72
    }
  }, labelLayer?.id);
}

function addStoryLayers() {
  const firstLabel = map.getStyle().layers.find(layer => layer.type === "symbol" && layer.layout?.["text-field"]);
  const routeCoordinates = focusTeams.map(team => team.coords);

  map.addSource("satellite-imagery", {
    type: "raster",
    tiles: ["https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"],
    tileSize: 256,
    attribution: "Imagery © Esri, Maxar, Earthstar Geographics, and the GIS User Community"
  });
  map.addLayer({
    id: "satellite-country-overview",
    type: "raster",
    source: "satellite-imagery",
    layout: { visibility: "none" },
    paint: {
      "raster-opacity": 0,
      "raster-opacity-transition": { duration: 650, delay: 0 },
      "raster-saturation": -0.18,
      "raster-contrast": 0.1
    }
  });

  map.addSource("country-boundaries", {
    type: "geojson",
    data: window.CONMEBOL_COUNTRIES
  });
  map.addLayer({
    id: "active-country-fill",
    type: "fill",
    source: "country-boundaries",
    filter: ["==", ["get", "team"], "__none__"],
    paint: { "fill-color": "#ffd84d", "fill-opacity": 0.2 }
  });
  map.addLayer({
    id: "active-country-glow",
    type: "line",
    source: "country-boundaries",
    filter: ["==", ["get", "team"], "__none__"],
    paint: { "line-color": "#ffd84d", "line-width": 9, "line-opacity": 0.48, "line-blur": 7 }
  });
  map.addLayer({
    id: "active-country-border",
    type: "line",
    source: "country-boundaries",
    filter: ["==", ["get", "team"], "__none__"],
    paint: { "line-color": "#fff08a", "line-width": 2.2, "line-opacity": 1 }
  });

  map.addSource("qualifying-route", {
    type: "geojson",
    data: { type: "Feature", properties: {}, geometry: { type: "LineString", coordinates: routeCoordinates } }
  });
  map.addLayer({
    id: "qualifying-route-glow",
    type: "line",
    source: "qualifying-route",
    paint: { "line-color": "#ffd84d", "line-width": ["interpolate", ["linear"], ["zoom"], 3, 1, 10, 2.5], "line-opacity": 0.18, "line-blur": 2 }
  }, firstLabel?.id);
  map.addLayer({
    id: "qualifying-route-dash",
    type: "line",
    source: "qualifying-route",
    paint: { "line-color": "#f2f1e8", "line-width": 1, "line-opacity": 0.34, "line-dasharray": [2, 4] }
  }, firstLabel?.id);

  map.addSource("stadium-pitches", { type: "geojson", data: makePitchGeoJSON() });
  map.addLayer({
    id: "stadium-pitch-fill",
    type: "fill",
    source: "stadium-pitches",
    minzoom: 10,
    paint: { "fill-color": "#23705d", "fill-opacity": 0.92 }
  }, firstLabel?.id);
  map.addLayer({
    id: "stadium-pitch-line",
    type: "line",
    source: "stadium-pitches",
    minzoom: 10,
    paint: { "line-color": "#d8eee5", "line-width": 1.5, "line-opacity": 0.9 }
  }, firstLabel?.id);

  map.addSource("stadium-models", { type: "geojson", data: makeStadiumGeoJSON() });
  map.addLayer({
    id: "stadium-bowls",
    type: "fill-extrusion",
    source: "stadium-models",
    minzoom: 10,
    paint: {
      "fill-extrusion-color": ["get", "color"],
      "fill-extrusion-height": ["get", "height"],
      "fill-extrusion-base": ["get", "base"],
      "fill-extrusion-opacity": 0.9,
      "fill-extrusion-vertical-gradient": true
    }
  }, firstLabel?.id);
  map.addLayer({
    id: "active-stadium-bowls",
    type: "fill-extrusion",
    source: "stadium-models",
    minzoom: 10,
    filter: ["==", ["get", "team"], "__none__"],
    paint: {
      "fill-extrusion-color": [
        "match", ["get", "tier"],
        "lower", "#354554",
        "upper", "#9da8b2",
        "rim", "#ffd84d",
        "#6d7580"
      ],
      "fill-extrusion-height": ["get", "height"],
      "fill-extrusion-base": ["get", "base"],
      "fill-extrusion-opacity": 0.98,
      "fill-extrusion-vertical-gradient": true
    }
  }, firstLabel?.id);

  map.addSource("data-pulses", { type: "geojson", data: makePulseGeoJSON() });
  map.addLayer({
    id: "data-pulse-columns",
    type: "fill-extrusion",
    source: "data-pulses",
    paint: {
      "fill-extrusion-color": ["interpolate", ["linear"], ["get", "fouls"], 193, "#f2f1e8", 224, "#ffd84d", 254, "#ff4f45"],
      "fill-extrusion-height": ["get", "height"],
      "fill-extrusion-base": 0,
      "fill-extrusion-opacity": 0.78,
      "fill-extrusion-vertical-gradient": true
    }
  }, firstLabel?.id);
  map.addLayer({
    id: "active-pulse-columns",
    type: "fill-extrusion",
    source: "data-pulses",
    filter: ["==", ["get", "team"], "__none__"],
    paint: {
      "fill-extrusion-color": ["interpolate", ["linear"], ["get", "fouls"], 193, "#f2f1e8", 224, "#ffd84d", 254, "#ff4f45"],
      "fill-extrusion-height": ["*", ["get", "height"], 1.12],
      "fill-extrusion-base": 0,
      "fill-extrusion-opacity": 0.98,
      "fill-extrusion-vertical-gradient": true
    }
  }, firstLabel?.id);
}

function addMarkers() {
  markers = teams.map(team => {
    const element = document.createElement("button");
    element.className = "country-marker";
    element.type = "button";
    element.setAttribute("aria-label", `${team.team}・${team.stadium}のシーンへ`);
    element.addEventListener("click", event => {
      event.stopPropagation();
      goToScene(focusTeams.indexOf(team) + 1, true);
    });
    const marker = new maplibregl.Marker({ element, anchor: "center" }).setLngLat(team.coords).addTo(map);
    return { team, element, marker };
  });
}

function popupHtml(team) {
  return `<p class="popup-team">03 · DISCIPLINE · ${team.team.toUpperCase()}</p>
    <strong class="popup-title">補足情報</strong>
    <div class="discipline-grid">
      <div class="discipline-card is-yellow" aria-label="イエローカード ${team.yellow}枚">
        <i class="discipline-symbol"></i><strong>${team.yellow}</strong><span>YELLOW</span><small>警告</small>
      </div>
      <div class="discipline-card is-red" aria-label="レッドカード ${team.red}枚">
        <i class="discipline-symbol"></i><strong>${team.red}</strong><span>RED</span><small>退場</small>
      </div>
      <div class="discipline-card is-suspension" aria-label="出場停止者 ${team.suspensions}人">
        <i class="discipline-symbol">Ⅱ</i><strong>${team.suspensions}</strong><span>SUSPENDED</span><small>出場停止者</small>
      </div>
    </div>
    <div class="popup-venue"><span>${team.stadium}</span><b>CONFIDENCE ${team.confidence}</b></div>`;
}

function showPopup(team) {
  storyPopup?.remove();
  els.disciplinePanel.innerHTML = popupHtml(team);
  els.disciplinePanel.classList.add("is-visible");
  els.disciplinePanel.setAttribute("aria-hidden", "false");
  els.legend.classList.add("is-suppressed");
  storyPopup = {
    remove() {
      els.disciplinePanel.classList.remove("is-visible");
      els.disciplinePanel.setAttribute("aria-hidden", "true");
      els.legend.classList.remove("is-suppressed");
      storyPopup = null;
    }
  };
}

function updatePlayButton() {
  els.play.setAttribute("aria-pressed", String(isPlaying));
  els.play.setAttribute("aria-label", isPlaying ? "一時停止" : "再生");
  els.play.innerHTML = `<span class="${isPlaying ? "pause-icon" : "play-icon"}" aria-hidden="true"></span>`;
  document.querySelector(".topbar-meta > span").lastChild.textContent = isPlaying ? " AUTOPILOT" : " PAUSED";
}

function updateStory(scene, index) {
  els.sceneNumber.textContent = `SCENE ${String(index + 1).padStart(2, "0")} / ${String(scenes.length).padStart(2, "0")}`;
  els.sceneTag.textContent = scene.tag;
  els.title.textContent = scene.title;
  els.lead.textContent = scene.lead;
  els.body.textContent = scene.body;
  els.venue.textContent = scene.venue;
  els.badge.textContent = scene.badge;
  els.note.textContent = scene.note;
  els.timelineLabel.textContent = `${String(index + 1).padStart(2, "0")} — ${scene.tag.split("·")[0].trim()}`;
  els.stats.innerHTML = scene.stats.map(stat => `<div class="stat"><strong>${stat.value}</strong><small>${stat.label}</small></div>`).join("");
  const isCountryFocus = Boolean(scene.team);
  els.stats.classList.toggle("is-foul-only", isCountryFocus);
  els.foulScale.hidden = !isCountryFocus;
  if (isCountryFocus) {
    const rank = focusTeams.indexOf(scene.team) + 1;
    const rangePosition = 10 + ((scene.team.fouls - 193) / (254 - 193)) * 90;
    els.foulScaleBar.style.width = `${rangePosition}%`;
    els.foulScaleValue.textContent = `≈${scene.team.fouls}`;
    els.foulScaleValue.style.left = `${Math.min(92, Math.max(10, rangePosition))}%`;
    els.foulRank.textContent = `RANK ${rank} / 10`;
  } else {
    els.foulScaleBar.style.width = "0%";
    els.foulScaleValue.textContent = "";
    els.foulRank.textContent = "";
  }
}

function setStoryRevealPhase(phase, scene) {
  els.card.classList.remove("phase-graph", "phase-support", "phase-background");
  els.card.classList.add(`phase-${phase}`);
  if (!scene.team) return;
  const phaseLabels = {
    graph: "02 · FOUL GRAPH",
    support: "03 · DISCIPLINE",
    background: "04 · CONTEXT"
  };
  els.sceneTag.textContent = phaseLabels[phase];
}

function hideCountryIntro() {
  els.countryIntro.classList.remove("is-visible", "is-departing", "is-boundary");
  els.countryIntro.setAttribute("aria-hidden", "true");
  markers.forEach(item => item.element.classList.remove("is-intro-hidden"));
}

function setCountryBoundaryFilter(teamId) {
  ["active-country-fill", "active-country-glow", "active-country-border"].forEach(layerId => {
    map.setFilter(layerId, ["==", ["get", "team"], teamId]);
  });
}

function showCountryAerial(team) {
  map.setLayoutProperty("satellite-country-overview", "visibility", "visible");
  map.setPaintProperty("satellite-country-overview", "raster-opacity", 0.94);
  setCountryBoundaryFilter(team.id);
}

function hideCountryAerial(immediate = false) {
  if (!mapReady) return;
  map.setPaintProperty("satellite-country-overview", "raster-opacity", 0);
  setCountryBoundaryFilter("__none__");
  if (immediate) {
    map.setLayoutProperty("satellite-country-overview", "visibility", "none");
  } else {
    scheduleCameraStep(() => map.setLayoutProperty("satellite-country-overview", "visibility", "none"), 700);
  }
}

function clearCameraSequence(stopMap = true) {
  cameraTimers.forEach(timer => window.clearTimeout(timer));
  cameraTimers = [];
  clearTimeout(popupTimer);
  if (mapReady) {
    hideCountryAerial(true);
    if (stopMap) map.stop();
  }
  hideCountryIntro();
}

function scheduleCameraStep(callback, delay) {
  const timer = window.setTimeout(callback, delay);
  cameraTimers.push(timer);
  return timer;
}

function showCountryBoundary(team) {
  const rank = focusTeams.indexOf(team) + 1;
  els.countryIntroStep.textContent = "00 · BORDER SCAN";
  els.countryIntroFlag.textContent = team.flag;
  els.countryIntroFlag.setAttribute("aria-label", `${team.countryJa}の国旗`);
  els.countryIntroName.textContent = team.team.toUpperCase();
  els.countryIntroNameJa.textContent = team.countryJa;
  els.countryIntroMeta.textContent = `COUNTRY ${String(rank).padStart(2, "0")} / 10 · SOUTH AMERICA`;
  els.countryIntro.classList.remove("is-departing");
  els.countryIntro.classList.add("is-visible", "is-boundary");
  els.countryIntro.setAttribute("aria-hidden", "false");
  markers.forEach(item => item.element.classList.add("is-intro-hidden"));
  showCountryAerial(team);
}

function revealCountryName(team) {
  const rank = focusTeams.indexOf(team) + 1;
  els.countryIntroStep.textContent = `01 · COUNTRY · ${String(rank).padStart(2, "0")} / 10`;
  els.countryIntro.classList.remove("is-boundary");
}

function runCountryCameraSequence(scene, fromUser) {
  const team = scene.team;
  showCountryBoundary(team);

  map.flyTo({
    center: team.overview.center,
    zoom: team.overview.zoom,
    pitch: 0,
    bearing: 0,
    duration: prefersReducedMotion ? 0 : 2400,
    essential: true,
    padding: { left: 0, right: 0, top: 0, bottom: 0 },
    curve: 1.25
  });

  scheduleCameraStep(() => revealCountryName(team), prefersReducedMotion ? 600 : 3000);

  const overviewHold = prefersReducedMotion ? 1200 : 6200;
  scheduleCameraStep(() => {
    els.countryIntroStep.textContent = `APPROACHING · ${team.city.toUpperCase()}`;
    els.countryIntro.classList.add("is-departing");
    hideCountryAerial();
    map.flyTo({
      center: team.coords,
      zoom: 8.6,
      pitch: 32,
      bearing: scene.camera.bearing + 70,
      duration: prefersReducedMotion ? 0 : 2300,
      essential: true,
      padding: { left: 0, right: 0, top: 0, bottom: 0 },
      curve: 1.55
    });
  }, overviewHold);

  const finalApproach = prefersReducedMotion ? 1700 : 8500;
  scheduleCameraStep(() => {
    els.countryIntroStep.textContent = `FINAL APPROACH · ${team.stadium.toUpperCase()}`;
    map.flyTo({
      ...scene.camera,
      duration: prefersReducedMotion ? 0 : (fromUser ? 3300 : 3900),
      essential: true,
      padding: window.innerWidth > 760 ? { left: 300, right: 20, top: 30, bottom: 20 } : { left: 0, right: 0, top: 0, bottom: 200 },
      curve: 1.28
    });
  }, finalApproach);

  scheduleCameraStep(() => {
    hideCountryIntro();
    setStoryRevealPhase("graph", scene);
  }, prefersReducedMotion ? 1600 : 7200);

  popupTimer = scheduleCameraStep(() => {
    setStoryRevealPhase("support", scene);
    showPopup(team);
  }, prefersReducedMotion ? 3000 : 12800);

  scheduleCameraStep(() => {
    setStoryRevealPhase("background", scene);
  }, prefersReducedMotion ? 4000 : 16800);
}

function goToScene(index, fromUser = false) {
  clearCameraSequence();
  currentScene = (index + scenes.length) % scenes.length;
  elapsed = 0;
  previousFrame = performance.now();
  clearTimeout(popupTimer);
  storyPopup?.remove();
  const scene = scenes[currentScene];
  setStoryRevealPhase(scene.team ? "graph" : "background", scene);

  els.card.classList.add("is-changing");
  window.setTimeout(() => {
    updateStory(scene, currentScene);
    els.card.classList.remove("is-changing");
  }, 260);

  if (mapReady) {
    map.setFilter("active-pulse-columns", ["==", ["get", "team"], scene.team?.id ?? "__none__"]);
    map.setFilter("active-stadium-bowls", ["==", ["get", "team"], scene.team?.id ?? "__none__"]);
    markers.forEach(item => item.element.classList.toggle("is-active", item.team === scene.team));
    if (scene.team) {
      runCountryCameraSequence(scene, fromUser);
    } else {
      map.flyTo({
        ...scene.camera,
        duration: prefersReducedMotion ? 0 : (fromUser ? 3300 : 4800),
        essential: true,
        padding: window.innerWidth > 760 ? { left: 300, right: 20, top: 30, bottom: 20 } : { left: 0, right: 0, top: 0, bottom: 200 },
        curve: 1.35
      });
    }
  }
  history.replaceState(null, "", `#scene-${currentScene + 1}`);
}

function togglePlayback(force) {
  isPlaying = typeof force === "boolean" ? force : !isPlaying;
  previousFrame = performance.now();
  updatePlayButton();
}

function animationLoop(now) {
  const delta = Math.min(now - previousFrame, 100);
  previousFrame = now;
  if (isPlaying && mapReady && !els.info.classList.contains("is-open")) {
    elapsed += delta;
    if (elapsed >= SCENE_DURATION) goToScene(currentScene + 1);
  }
  const percent = Math.min(100, (elapsed / SCENE_DURATION) * 100);
  els.progress.style.width = `${percent}%`;
  els.timeline.setAttribute("aria-valuenow", String(Math.round(percent)));
  els.timeLeft.textContent = String(Math.max(0, Math.ceil((SCENE_DURATION - elapsed) / 1000))).padStart(2, "0");
  requestAnimationFrame(animationLoop);
}

function setInfo(open) {
  els.info.classList.toggle("is-open", open);
  els.info.setAttribute("aria-hidden", String(!open));
  els.infoButton.setAttribute("aria-expanded", String(open));
  if (open) els.closeInfo.focus();
}

map.on("load", () => {
  addBuildingLayer();
  addStoryLayers();
  addMarkers();
  mapReady = true;
  els.loading.classList.add("is-hidden");

  const hashScene = Number(location.hash.replace("#scene-", "")) - 1;
  const initialScene = Number.isInteger(hashScene) && hashScene >= 0 && hashScene < scenes.length ? hashScene : 0;
  goToScene(initialScene);
});

map.on("error", event => {
  console.warn("Map rendering warning:", event.error?.message ?? event);
});

map.on("dragstart", event => {
  if (event.originalEvent) {
    clearCameraSequence(false);
    togglePlayback(false);
  }
});
map.on("rotatestart", event => {
  if (event.originalEvent) {
    clearCameraSequence(false);
    togglePlayback(false);
  }
});

els.prev.addEventListener("click", () => goToScene(currentScene - 1, true));
els.next.addEventListener("click", () => goToScene(currentScene + 1, true));
els.play.addEventListener("click", () => togglePlayback());
els.hint.addEventListener("click", () => togglePlayback());
els.brand.addEventListener("click", event => {
  event.preventDefault();
  goToScene(0, true);
});
els.infoButton.addEventListener("click", () => setInfo(!els.info.classList.contains("is-open")));
els.closeInfo.addEventListener("click", () => setInfo(false));
document.addEventListener("keydown", event => {
  if (event.key === "ArrowLeft") goToScene(currentScene - 1, true);
  if (event.key === "ArrowRight") goToScene(currentScene + 1, true);
  if (event.key === " ") { event.preventDefault(); togglePlayback(); }
  if (event.key === "Escape") setInfo(false);
});

updateStory(scenes[0], 0);
updatePlayButton();
requestAnimationFrame(animationLoop);
