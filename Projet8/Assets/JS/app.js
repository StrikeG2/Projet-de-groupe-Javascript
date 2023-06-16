let sliders = document.querySelectorAll("input[type='range']");

sliders.forEach(function(slider) {
  slider.addEventListener("input", calculPourboire);
});

let saisieMontant = document.getElementById("montant");

saisieMontant.addEventListener("change", calculPourboire);

function calculPourboire() {
  let montant = parseInt(saisieMontant.value);
  
  if (isNaN(montant) || montant < 0) {
    alert("Veuillez entrer un montant valide supérieur ou égal à 0.");
    return; // Stoppe l'exécution de la fonction
  }
  
  let pourcentage = document.getElementById("tip").value;
  let nombreGens = document.getElementById("nombreGens").value;

  saisieMontant.value = montant;

  let totalPourboire = parseInt((montant * (pourcentage / 100)));
  let total = parseInt((montant + totalPourboire));
  let pourboirePersonne = (totalPourboire / nombreGens);

  //Affichage de tous les résultats correspondants
  document.getElementById("pourboire").textContent = totalPourboire + " fcfa";
  document.getElementById("total").textContent = total + " fcfa";
  document.getElementById("pourcentage").textContent = pourcentage + "%";
  document.getElementById("split-num").textContent = nombreGens;
  document.getElementById("pourboire-personne").textContent = pourboirePersonne + " fcfa";
}

calculPourboire();
