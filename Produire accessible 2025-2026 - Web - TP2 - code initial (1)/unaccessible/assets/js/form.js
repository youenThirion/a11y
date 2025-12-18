(() => {
  "use strict";
  const submitQuizz = document.getElementById("submitQuizz");
  // Fetch the form to apply custom Bootstrap validation styles to and prevent submission if not valid
  const form = document.querySelector(".needs-validation");
  // Listen to submit event
  form.addEventListener(
    "submit",
    (event) => {
      // Prevent form submission if form is not valid
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
  });
})();
