const submit = document.querySelector(".contact__button");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("formValues", JSON.stringify(store()));

  alert("form submitted");
});

function store() {
  let inputName = document.querySelector(".txt").value;
  let inputEmail = document.querySelector(".mail").value;
  let inputNumber = +document.querySelector(".nmbr").value;
  let inputReason = document.querySelector(".txtar").value;

  const formValues = {
    inputName: inputName,
    inputEmail: inputEmail,
    inputNumber: inputNumber,
    inputReason: inputReason,
  };

  return formValues;
}

const take = document.getElementById("txttype");

let typewriter = new Typewriter(take, {
  loop: true,
  delay: 55,
});
let arr = ["Developer", "Coder", "Content-Writer", "Speaker"];
for (let i = 0; i < arr.length; i++) {
  let s = arr[i];
  s.toString();

  typewriter
    .pauseFor(500)
    .typeString(s)
    .pauseFor(500)
    .deleteChars(15)
    .pauseFor(800)
    .start();
}