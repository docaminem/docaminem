// Fonction pour calculer les calories quotidiennes
function calculateCalories() {
    const weight = document.getElementById('weight').value;
    const bmr = 88.362 + (13.397 * weight) + (4.799 * 180) - (5.677 * 41);
    const tdee = bmr * 1.2;
    const caloriesToLoseWeight = tdee - 500;
    document.getElementById('caloriesResult').innerText = `Vous devez consommer environ ${caloriesToLoseWeight.toFixed(0)} kcal par jour pour perdre du poids.`;
}

// Fonction pour afficher le programme de musculation
function displayWorkoutPlan() {
    const workoutPlan = `
        <h3>Lundi (Poitrine et Triceps)</h3>
        <div class="exercise"><input type="checkbox" id="ex1"> Développé couché : 4 séries de 8-12 répétitions</div>
        <div class="exercise"><input type="checkbox" id="ex2"> Écarté couché : 3 séries de 10-12 répétitions</div>
        <div class="exercise"><input type="checkbox" id="ex3"> Pompes : 3 séries de 10-15 répétitions</div>
        <div class="exercise"><input type="checkbox" id="ex4"> Dips : 3 séries de 10-15 répétitions</div>
        <div class="exercise"><input type="checkbox" id="ex5"> Extension des triceps : 3 séries de 10-12 répétitions</div>
        <h3>Mercredi (Dos et Biceps)</h3>
        <div class="exercise"><input type="checkbox" id="ex6"> Tirage horizontal : 4 séries de 8-12 répétitions</div>
        <div class="exercise"><input type="checkbox" id="ex7"> Tirage vertical : 3 séries de 10-12 répétitions</div>
        <div class="exercise"><input type="checkbox" id="ex8"> Rameur : 3 séries de 10-12 répétitions</div>
        <div class="exercise"><input type="checkbox" id="ex9"> Curl biceps : 3 séries de 10-12 répétitions</div>
        <div class="exercise"><input type="checkbox" id="ex10"> Curl marteau : 3 séries de 10-12 répétitions</div>
        <h3>Vendredi (Épaules et Abdominaux)</h3>
        <div class="exercise"><input type="checkbox" id="ex11"> Développé militaire : 4 séries de 8-12 répétitions</div>
        <div class="exercise"><input type="checkbox" id="ex12"> Élévations latérales : 3 séries de 10-12 répétitions</div>
        <div class="exercise"><input type="checkbox" id="ex13"> Élévations frontales : 3 séries de 10-12 répétitions</div>
        <div class="exercise"><input type="checkbox" id="ex14"> Élévations arrière : 3 séries de 10-12 répétitions</div>
        <div class="exercise"><input type="checkbox" id="ex15"> Shrugs : 3 séries de 10-12 répétitions</div>
        <div class="exercise"><input type="checkbox" id="ex16"> Crunch : 3 séries de 15-20 répétitions</div>
        <div class="exercise"><input type="checkbox" id="ex17"> Planche : 3 séries de 30-60 secondes</div>
        <div class="exercise"><input type="checkbox" id="ex18"> Leg raises : 3 séries de 15-20 répétitions</div>
        <div class="exercise"><input type="checkbox" id="ex19"> Russian twists : 3 séries de 15-20 répétitions</div>
    `;
    document.getElementById('workoutPlan').innerHTML = workoutPlan;
}

// Fonction pour afficher le programme de nutrition
function displayNutritionPlan() {
    const nutritionPlan = `
        <h3>Lundi</h3>
        <p><strong>Petit-déjeuner :</strong> 2 œufs, 1 tranche de pain complet, 1 banane, 1 yaourt nature</p>
        <p><strong>Déjeuner :</strong> 150g de poulet grillé, 100g de couscous, 100g de carottes râpées, 1 cuillère à soupe d'huile d'olive</p>
        <p><strong>Collation :</strong> 1 pomme, 10 amandes</p>
        <h3>Mardi</h3>
        <p><strong>Petit-déjeuner :</strong> 1 bol de flocons d'avoine avec du lait, 1 poignée de dattes</p>
        <p><strong>Déjeuner :</strong> 150g de dinde, 100g de lentilles, 100g de tomates</p>
        <p><strong>Collation :</strong> 1 orange, 10 noix</p>
        <h3>Mercredi</h3>
        <p><strong>Petit-déjeuner :</strong> 2 tranches de pain complet, 2 cuillères à soupe de beurre de cacahuète, 1 banane</p>
        <p><strong>Déjeuner :</strong> 150g de bœuf maigre, 100g de riz basmati, 100g de courgettes</p>
        <p><strong>Collation :</strong> 1 poire, 10 noisettes</p>
        <h3>Jeudi</h3>
        <p><strong>Petit-déjeuner :</strong> 1 smoothie (banane, épinards, lait, protéines en poudre)</p>
        <p><strong>Déjeuner :</strong> 150g de poulet, 100g de pois chiches, 100g de tomates cerises</p>
        <p><strong>Collation :</strong> 1 pêche, 10 amandes</p>
        <h3>Vendredi</h3>
        <p><strong>Petit-déjeuner :</strong> 2 œufs, 1 tranche de pain complet, 1 avocat</p>
        <p><strong>Déjeuner :</strong> 150g de dinde, 100g de lentilles, 100g de courgettes</p>
        <p><strong>Collation :</strong> 1 pomme, 10 noix</p>
        <h3>Samedi</h3>
        <p><strong>Petit-déjeuner :</strong> 1 bol de flocons d'avoine avec du lait, 1 poignée de dattes</p>
        <p><strong>Déjeuner :</strong> 150g de bœuf maigre, 100g de riz basmati, 100g de carottes râpées</p>
        <p><strong>Collation :</strong> 1 orange, 10 amandes</p>
        <h3>Dimanche</h3>
        <p><strong>Petit-déjeuner :</strong> 2 tranches de pain complet, 2 cuillères à soupe de beurre de cacahuète, 1 banane</p>
        <p><strong>Déjeuner :</strong> 150g de poulet, 100g de pois chiches, 100g de tomates cerises</p>
        <p><strong>Collation :</strong> 1 pêche, 10 noisettes</p>
    `;
    document.getElementById('nutritionPlan').innerHTML = nutritionPlan;
}

// Fonction pour démarrer le chronomètre de repos
let restTimer;
let restTime = 60; // Temps de repos en secondes

function startRestTimer() {
    restTime = 60; // Réinitialiser le temps de repos
    document.getElementById('startRestTimer').disabled = true;
    restTimer = setInterval(updateRestTimer, 1000);
}

function updateRestTimer() {
    if (restTime <= 0) {
        clearInterval(restTimer);
        document.getElementById('restTimerDisplay').innerText = "Temps de repos terminé!";
        document.getElementById('startRestTimer').disabled = false;
    } else {
        restTime--;
        document.getElementById('restTimerDisplay').innerText = `Temps de repos: ${restTime}s`;
    }
}

// Appel des fonctions pour afficher les plans au chargement de la page
window.onload = function() {
    displayWorkoutPlan();
    displayNutritionPlan();
};
