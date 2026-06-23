# 2026年FIFAワールドカップ南米予選

## CONMEBOL「笛の熱量」データ収集依頼

## 目的

2026年FIFAワールドカップ南米予選（CONMEBOL）を対象に、国別の「笛の熱量」を可視化するためのデータを収集する。

このプロジェクトの目的は、得点や順位ではなく、ファウル・カード・退場・出場停止といった「笛が鳴った瞬間」に注目し、南米サッカー特有の激しさ、球際の強度、勝利への執着、情熱を3Dストーリーマップで表現することである。

「ファウル数から見る情熱の可視化」ではなく、より広く「笛の数から見る南米予選の情熱の可視化」として扱う。

そのため、総ファウル数が完全に取得できない場合でも、カード数・退場数・出場停止者数を、試合の激しさや緊張感を表す代替指標として使用する。

---

## 対象大会

* 2026年FIFAワールドカップ南米予選
* CONMEBOL予選

---

## 対象国

以下の10か国を対象とする。

* Argentina
* Bolivia
* Brazil
* Chile
* Colombia
* Ecuador
* Paraguay
* Peru
* Uruguay
* Venezuela

---

## 回収したいデータ項目

各国について、可能な限り以下の項目を回収する。

1. 試合数
2. 総ファウル数
3. 1試合平均ファウル数
4. イエローカード総数
5. レッドカード総数
6. 一発退場数
7. 出場停止者数
8. 出場停止の理由

   * 累積イエロー
   * レッドカード
   * 黄赤
   * その他
9. 可能であれば、選手別のカード・出場停止情報
10. データの出典URL

---

## データ取得の優先順位

総ファウル数が国別にまとまっていない場合は、以下の優先順位で代替する。

### 第一優先

国別の総ファウル数、1試合平均ファウル数

### 第二優先

試合ごとのファウル数を集計した国別ファウル数

### 第三優先

国別のイエローカード数、レッドカード数、出場停止者数

### 第四優先

出場停止リストやDiscipline情報から確認できる、国別の警告・退場傾向

---

## 表形式の出力例

| 国         | 試合数 | 総ファウル数 | 1試合平均ファウル数 | イエロー |  レッド | 一発退場 | 出場停止者数 | 主な出場停止理由 | 出典 |
| --------- | --: | -----: | ---------: | ---: | ---: | ---: | -----: | -------- | -- |
| Argentina |  18 |   null |       null | null | null | null |   null |          |    |
| Bolivia   |  18 |   null |       null | null | null | null |   null |          |    |
| Brazil    |  18 |   null |       null | null | null | null |   null |          |    |
| Chile     |  18 |   null |       null | null | null | null |   null |          |    |
| Colombia  |  18 |   null |       null | null | null | null |   null |          |    |
| Ecuador   |  18 |   null |       null | null | null | null |   null |          |    |
| Paraguay  |  18 |   null |       null | null | null | null |   null |          |    |
| Peru      |  18 |   null |       null | null | null | null |   null |          |    |
| Uruguay   |  18 |   null |       null | null | null | null |   null |          |    |
| Venezuela |  18 |   null |       null | null | null | null |   null |          |    |

---

## JavaScript形式の出力例

地図上で使用するため、以下の形式でも出力する。

```js
const conmebolWhistleData = [
  {
    team: "Argentina",
    matches: 18,
    fouls: null,
    foulsPerMatch: null,
    yellowCards: null,
    redCards: null,
    straightRedCards: null,
    suspensions: null,
    suspensionReasons: "",
    source: "",
    narrative: ""
  },
  {
    team: "Bolivia",
    matches: 18,
    fouls: null,
    foulsPerMatch: null,
    yellowCards: null,
    redCards: null,
    straightRedCards: null,
    suspensions: null,
    suspensionReasons: "",
    source: "",
    narrative: ""
  },
  {
    team: "Brazil",
    matches: 18,
    fouls: null,
    foulsPerMatch: null,
    yellowCards: null,
    redCards: null,
    straightRedCards: null,
    suspensions: null,
    suspensionReasons: "",
    source: "",
    narrative: ""
  },
  {
    team: "Chile",
    matches: 18,
    fouls: null,
    foulsPerMatch: null,
    yellowCards: null,
    redCards: null,
    straightRedCards: null,
    suspensions: null,
    suspensionReasons: "",
    source: "",
    narrative: ""
  },
  {
    team: "Colombia",
    matches: 18,
    fouls: null,
    foulsPerMatch: null,
    yellowCards: null,
    redCards: null,
    straightRedCards: null,
    suspensions: null,
    suspensionReasons: "",
    source: "",
    narrative: ""
  },
  {
    team: "Ecuador",
    matches: 18,
    fouls: null,
    foulsPerMatch: null,
    yellowCards: null,
    redCards: null,
    straightRedCards: null,
    suspensions: null,
    suspensionReasons: "",
    source: "",
    narrative: ""
  },
  {
    team: "Paraguay",
    matches: 18,
    fouls: null,
    foulsPerMatch: null,
    yellowCards: null,
    redCards: null,
    straightRedCards: null,
    suspensions: null,
    suspensionReasons: "",
    source: "",
    narrative: ""
  },
  {
    team: "Peru",
    matches: 18,
    fouls: null,
    foulsPerMatch: null,
    yellowCards: null,
    redCards: null,
    straightRedCards: null,
    suspensions: null,
    suspensionReasons: "",
    source: "",
    narrative: ""
  },
  {
    team: "Uruguay",
    matches: 18,
    fouls: null,
    foulsPerMatch: null,
    yellowCards: null,
    redCards: null,
    straightRedCards: null,
    suspensions: null,
    suspensionReasons: "",
    source: "",
    narrative: ""
  },
  {
    team: "Venezuela",
    matches: 18,
    fouls: null,
    foulsPerMatch: null,
    yellowCards: null,
    redCards: null,
    straightRedCards: null,
    suspensions: null,
    suspensionReasons: "",
    source: "",
    narrative: ""
  }
];
```

---

## 信頼度分類

取得できたデータは、以下の3段階で信頼度を分類する。

| 信頼度 | 内容                    |
| --- | --------------------- |
| A   | 公式または信頼できる統計サイトで確認できた |
| B   | 複数の公開情報から推定・集計した      |
| C   | 一部未確認、または代替指標として使用    |

---

## 備考

このデータは、3Dストーリーマップ上で各国の「笛の熱量」を表現するために使用する。

ファウル数が取得できる場合は主要指標として使用し、取得できない場合はイエローカード数、レッドカード数、一発退場数、出場停止者数を代替指標として扱う。

最終的には、各国の数値データに加えて、以下のような短いナラティブも付与する。

例：

> Uruguayはカードと退場の多さから、球際の激しさと勝利への執着が強く表れるチームである。

> Brazilはファウル数だけでなく、警告数や出場停止者数からも予選の緊張感が読み取れる。

> Argentinaは試合運びの安定感とともに、重要局面での強度の高さが「笛の熱量」として現れる。
