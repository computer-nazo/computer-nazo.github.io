function Login() {
  const UserName = document.getElementById("UserName").value;
  const UserPwd = document.getElementById("UserPwd").value;
  const ErrorMsg = document.getElementById("ErrorMsg");
  if (UserName === "sadako4444" && UserPwd === "sdkadminsadako4444") {
    window.location.href="https://computer-nazo.github.io/nazo/sadako/homepage/login/correct/admin.html";
  } else {
    ErrorMsg.textContent = 'ユーザー名またはパスワードが違います';
  }
}
