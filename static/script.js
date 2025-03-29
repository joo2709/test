//static/script.cs

// 예시용 학생 데이터 (실제 배포시엔 백엔드 연동)
const studentData = [
  { id: "202301", name: "김민수", googleId: "kms2023@school.edu", googlePw: "pass1234" },
  { id: "202302", name: "이수현", googleId: "lsh2023@school.edu", googlePw: "abcde5678" },
  { id: "202303", name: "박지은", googleId: "pje2023@school.edu", googlePw: "pw2023xyz" }
];

// 폼과 요소 참조
const form = document.getElementById("searchForm");
const resultBox = document.getElementById("result");
const googleIdSpan = document.getElementById("googleId");
const googlePwSpan = document.getElementById("googlePw");

// 이벤트 리스너 등록
form.addEventListener("submit", function (e) {
  e.preventDefault(); // 새로고침 방지

  const studentId = document.getElementById("studentId").value.trim();
  const studentName = document.getElementById("studentName").value.trim();

  // 검색
  const student = studentData.find(
    s => s.id === studentId && s.name === studentName
  );

  if (student) {
    // 결과 표시
    googleIdSpan.textContent = student.googleId;
    googlePwSpan.textContent = student.googlePw;
    resultBox.style.display = "block";
  } else {
    // 결과 없음 처리
    googleIdSpan.textContent = "찾을 수 없습니다.";
    googlePwSpan.textContent = "입력 정보를 다시 확인해주세요.";
    resultBox.style.display = "block";
  }
});
