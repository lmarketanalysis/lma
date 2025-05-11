document.getElementById("formular").addEventListener("submit", function (e) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const nachricht = document.getElementById("nachricht").value;
  
    if (name && email && nachricht) {
      document.getElementById("check").textContent = "Vielen Dank für deine Nachricht!";
    } 
    else {
      document.getElementById("check").textContent = "Bitte alle Felder ausfüllen.";
      e.preventDefault();
    }
});