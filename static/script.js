//static/script.cs

// 예시용 학생 데이터 (실제 배포시엔 백엔드 연동)
let studentData = [];

// JSON 파일 불러오기
fetch('/static/studentData.json')
  .then(response => response.json())
  .then(data => {
    studentData = data;
  })
  .catch(error => {
    console.error('데이터 로드 실패:', error);
  });

// 요소 가져오기
const form = document.getElementById("searchForm");
const resultBox = document.getElementById("result");
const googleIdSpan = document.getElementById("googleId");
const googlePwSpan = document.getElementById("googlePw");

// 검색 로직
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const studentId = document.getElementById("studentId").value.trim();
  const studentName = document.getElementById("studentName").value.trim();

  const student = studentData.find(
    s => s["학번"] === studentId && s["이름"] === studentName
  );

  if (student) {
    googleIdSpan.textContent = student["구글ID"];
    googlePwSpan.textContent = student["비밀번호"];
    resultBox.style.display = "block";
  } else {
    googleIdSpan.textContent = "찾을 수 없습니다.";
    googlePwSpan.textContent = "입력 정보를 다시 확인해주세요.";
    resultBox.style.display = "block";
  }
});