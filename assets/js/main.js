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

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
