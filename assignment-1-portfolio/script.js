(function () {
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (!form || !status) {
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    status.hidden = false;
    status.textContent =
      "This form is a front-end demo, so nothing was sent and nothing was stored. " +
      "Connect a form service or your own backend to make it deliver messages.";
    status.focus();
  });
})();
