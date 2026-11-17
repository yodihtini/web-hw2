
// ===== Part A =====

// A1 : 평균 평점
let sumA = 0;

for (let i = 0; i < ratings.length; i++) {
    sumA += ratings[i];
}

let averageA = sumA / ratings.length;
console.log("A1 평균 평점:", averageA);


// A2 : 최고 평점 영화
let maxA = 0;

for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[maxA]) {
        maxA = i;
    }
}

console.log("A2 최고 평점:", titles[maxA], ratings[maxA]);


// A3 : 8점 이상인 영화 수
let countA = 0;

for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] >= 8) {
        countA++;
    }
}

console.log("A3 8점 이상:", countA + "편");


// A4 : 연도대별 영화 수
let count2020A = 0;
let count2010A = 0;
let count2000A = 0;
let countBeforeA = 0;

for (let i = 0; i < years.length; i++) {
    const decade = years[i] - (years[i] % 10);

    switch (decade) {
        case 2020:
            count2020A++;
            break;

        case 2010:
            count2010A++;
            break;

        case 2000:
            count2000A++;
            break;

        default:
            countBeforeA++;
    }
}

console.log(
    "A4 2020년대", count2020A + "편,",
    "2010년대", count2010A + "편,",
    "2000년대", count2000A + "편,",
    "그 이전", countBeforeA + "편"
);


// A5 : 누적 관객 100만 이상인 영화
let bigA = "";

for (let i = 0; i < audiences.length; i++) {
    if (audiences[i] >= 1000000) {
        bigA += titles[i] + " ";
    }
}

if (bigA === "") {
    bigA = "없음";
}

console.log("A5 관객 100만 이상:", bigA);


// ===== Part B =====


// average : 배열 ⇒ 평균 평점
function average(list) {
    return averageBy(list, "rating");
}


// best : 배열 ⇒ 최고 평점 객체
function best(list) {
    let bestMovie = list[0];

    for (let i = 1; i < list.length; i++) {
        if (list[i].rating > bestMovie.rating) {
            bestMovie = list[i];
        }
    }

    return bestMovie;
}


// filterByRating : 배열, 최소 평점 ⇒ 새 배열
function filterByRating(list, min) {
    return list.filter(function(movie) {
        return movie.rating >= min;
    });
}


// sortBy : 배열, 정렬 기준, 내림차순 여부 ⇒ 새 배열
function sortBy(list, key, desc) {
    const sign = desc ? -1 : 1;

    return [...list].sort(function(a, b) {
        if (typeof a[key] === "string") {
            return sign * a[key].localeCompare(b[key]);
        } else {
            return sign * (a[key] - b[key]);
        }
    });
}


// search : 배열, 검색어 ⇒ 새 배열
function search(list, keyword) {
    const word = keyword.trim().toLowerCase();

    return list.filter(function(movie) {
        return movie.title.toLowerCase().includes(word);
    });
}


// formatNumber : 숫자 ⇒ 천 단위 쉼표가 있는 문자열
function formatNumber(n) {
    return Number(n).toLocaleString("ko-KR");
}


// yearsSince : 날짜 문자열 ⇒ 현재 연도와의 차이
function yearsSince(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();

    return now.getFullYear() - date.getFullYear();
}


// Part B 결과 출력
const bestMovie = best(movies);
const audienceTop = sortBy(movies, "audience", true)[0];

document.getElementById("out").textContent =
    "전체 영화 " + movies.length + "편의 평균 평점: " +
    average(movies).toFixed(1) + "점\n" +

    "최고 평점 영화: " + bestMovie.title +
    " (" + bestMovie.rating + "점, 개봉한 지 " +
    yearsSince(bestMovie.date) + "년)\n" +

    "관객 수 1위 영화: " + audienceTop.title +
    " (누적 " + formatNumber(audienceTop.audience) + "명)";


// ===== Part C =====


// getList : TMDB 응답 객체 ⇒ 영화 배열
function getList(data) {
    return data.results;
}


// averageBy : 배열, 키 이름 ⇒ 해당 값의 평균
function averageBy(list, key) {
    let sum = 0;

    for (let i = 0; i < list.length; i++) {
        sum += list[i][key];
    }

    return sum / list.length;
}


// C1 : TMDB 응답 정보
console.log(
    "C1 페이지:", TMDB.page,
    "/", TMDB.total_pages,
    "전체 영화:", TMDB.total_results,
    "이번 응답:", getList(TMDB).length + "편"
);


// C2 : 상영작 평균 평점
console.log(
    "C2 상영작 평균 평점:",
    averageBy(getList(TMDB), "vote_average").toFixed(1)
);


// C3 : 평점 상위 5편
console.log("C3 평점 상위 5편");

console.table(
    sortBy(getList(TMDB), "vote_average", true).slice(0, 5),
    ["title", "release_date", "vote_average"]
);


// C4 : 제목 검색 결과
console.log(
    "C4 제목 검색 결과:",
    search(getList(TMDB), "The").length + "편"
);
