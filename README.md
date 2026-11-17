1번 호출 formatNumber("1234567")                 결과 '1,234,567'
2번 호출 average(movies).toFixed(1)              결과 '7.4'
3번 호출 best(movies).title                      결과 '스파이더맨: 브랜드 뉴 데이'
4번 호출 sortBy(movies, "rating", true)[0].title 결과 '스파이더맨: 브랜드 뉴 데이'
5번 호출 filterByRating(movies, 8).length        결과 2
6번 호출 search(movies, " 스파 ").length         결과 5
7번 호출 yearsSince("2014-11-06")                결과 12
8번 호출 movies[0].title                         결과 '스파이더맨: 브랜드 뉴 데이'
