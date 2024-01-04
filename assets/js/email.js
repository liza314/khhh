function SendMail() {
  var body = document.getElementById("Message").value;
  var SubjectLine = document.getElementById("Subject").value;
  window.location.href =
    "mailto:lijaf26@gmail.com?subject=" + SubjectLine + "&body=" + body;
}
