document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  
  const email = document.querySelector("#email").value;
  const pass = document.querySelector("#pass").value;

  console.log(email)
  console.log(pass)

  //almacenar data
  const userData = {
    email: email,
    pass: pass,
  }

  console.log(userData)

  const emailRegex = /@gmail\.com$/;
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  if(!emailRegex.test(email)){
    alert("El correo debe tener la extension @gmail.com")
  }
  if(!passRegex.test(pass)){
    alert("La contraseña debe tener como minimo 8 caracteres y 1 mayuscula, ademas de un signo especial")
  }
})
