# 실습과제 #2 : 영화 데이터를 자바스크립트로 
- 이름 / 학번 :김재호 2651016
- 사이트 주소 : https://yodihtini.github.io/web-hw2/
- 사용한 API : TMDB (영화 정보, now_playing 응답), KOBIS 일별 박스오피스 (기준일 2026-10-26)
## 구현 항목 체크 
- [o ] (요구사항 1~6의 번호와 제목을 그대로 옮겨 적고 체크, 보너스는 이름과 캡처 파일명)
- [o ] 1. Part A
- [o ] 2. Part B 함수 7개
- [o ] 3. Part C 응답 구조
- [o ] 4. 출력
- [o ] 5. 코드 품질
- [o ] 6. 제출 형식
## 자가 테스트 표 (2~8번도 Step 4의 표대로 이어 적기) 
| 번호 | 호출 | 기대 결과 | 실제 결과 | 
|---|---|---|---| 
| 1 | formatNumber("1234567") | '1,234,567' | | 
| 2 | average(movies).toFixed(1) | '7.4' | | 
| 3 | best(movies).title | '스파이더맨: 브랜드 뉴 데이' | | 
| 4 | sortBy(movies, "rating", true)[0].title | '스파이더맨: 브랜드 뉴 데이' | | 
| 5 | filterByRating(movies, 8).length | 2 | | 
| 6 | search(movies, " 스파 ").length | 5 | | 
| 7 | yearsSince("2014-11-06") | 12 | | 
| 8 | movies[0].title | '스파이더맨: 브랜드 뉴 데이' | | 
## 어려웠던 점 3가지와 해결 
app.js의 Part B작성, 해결
app.js의 Part B의 sortBy if문 작성, 해결
app.js의 Part C작성, 해결
## 참고한 자료 (교재 절, MDN 페이지 제목, 검색어) 
## 생성형 AI 사용 내역 (없으면 "없음") 
- 질문 요지 : 없음
- 답변 요약 : 없음
- 채택 여부 : 없음

