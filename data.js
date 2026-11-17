
// Part A : 영화 데이터 배열 4개

const titles = [
    "스파이더맨: 브랜드 뉴 데이",
    "스파이더맨",
    "스파이더맨: 홈커밍",
    "어메이징 스파이더맨",
    "스파이더맨: 뉴 유니버스",
    "극장판 치이카와: 인어 섬의 비밀",
    "암살자(들)",
    "실낙원",
    "타짜: 벨제붑의 노래",
    "클레이페이스"
];

const ratings = [
    8.2, 7.4, 7.3, 6.8, 8.2,
    7.4, 7.2, 7.2, 7.0, 7.5
];

const years = [
    2026, 2002, 2017, 2012, 2018,
    2026, 2026, 2026, 2026, 2026
];

const audiences = [
    0, 0, 0, 0, 0,
    2268267, 3382053, 112191, 2006483, 84196
];


// Part B : 영화 객체 10건

const movies = [
    {
        title: "스파이더맨: 브랜드 뉴 데이",
        year: 2026,
        date: "2026-07-29",
        rating: 8.2,
        audience: 0,
        poster: "/8mLepBa5l591xFidRpn65xV7hb4.jpg",
        type: "mine",
        rank: null
    },
    {
        title: "스파이더맨",
        year: 2002,
        date: "2002-05-01",
        rating: 7.4,
        audience: 0,
        poster: "/4xOhtzXGt0if74dTmS4qtizFelX.jpg",
        type: "mine",
        rank: null
    },
    {
        title: "스파이더맨: 홈커밍",
        year: 2017,
        date: "2017-07-05",
        rating: 7.3,
        audience: 0,
        poster: "/hjki9weYYVABvkpZbX5jBOmKXXv.jpg",
        type: "mine",
        rank: null
    },
    {
        title: "어메이징 스파이더맨",
        year: 2012,
        date: "2012-06-23",
        rating: 6.8,
        audience: 0,
        poster: "/a1Kup5VnmxjAHnsT3Sz7RtrC9UU.jpg",
        type: "mine",
        rank: null
    },
    {
        title: "스파이더맨: 뉴 유니버스",
        year: 2018,
        date: "2018-12-06",
        rating: 8.2,
        audience: 0,
        poster: "/d9V6Q9vpVpmaca7vwSUbCajtDb3.jpg",
        type: "mine",
        rank: null
    },
    {
        title: "극장판 치이카와: 인어 섬의 비밀",
        year: 2026,
        date: "2026-09-30",
        rating: 7.4,
        audience: 2268267,
        poster: "/5TMyytCI5Pfc9c1eNsljiCdiB05.jpg",
        type: "boxoffice",
        rank: 1
    },
    {
        title: "암살자(들)",
        year: 2026,
        date: "2026-09-23",
        rating: 7.2,
        audience: 3382053,
        poster: "/c55ijsOdntj6P25vDwHLdgsBpmV.jpg",
        type: "boxoffice",
        rank: 2
    },
    {
        title: "실낙원",
        year: 2026,
        date: "2026-10-21",
        rating: 7.2,
        audience: 112191,
        poster: "/wkm9BQLok7U2KihcCspCa663Qse.jpg",
        type: "boxoffice",
        rank: 3
    },
    {
        title: "타짜: 벨제붑의 노래",
        year: 2026,
        date: "2026-09-23",
        rating: 7.0,
        audience: 2006483,
        poster: "/ueigb5zra1tj6FTK9yhh2P33P9B.jpg",
        type: "boxoffice",
        rank: 4
    },
    {
        title: "클레이페이스",
        year: 2026,
        date: "2026-10-21",
        rating: 7.5,
        audience: 84196,
        poster: "/LSGpoSAlitss0KOvVakkeUToZo.jpg",
        type: "boxoffice",
        rank: 5
    }
];
