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
        <ul>
            <li>Développé couché : 4 séries de 8-12 répétitions</li>
            <li>Écarté couché : 3 séries de 10-12 répétitions</li>
            <li>Pompes : 3 séries de 10-15 répétitions</li>
            <li>Dips : 3 séries de 10-15 répétitions</li>
            <li>Extension des triceps : 3 séries de 10-12 répétitions</li>
        </ul>
        <h3>Mercredi (Dos et Biceps)</h3>
        <ul>
            <li>Tirage horizontal : 4 séries de 8-12 répétitions</li>
            <li>Tirage vertical : 3 séries de 10-12 répétitions</li>
            <li>Rameur : 3 séries de 10-12 répétitions</li>
            <li>Curl biceps : 3 séries de 10-12 répétitions</li>
            <li>Curl marteau : 3 séries de 10-12 répétitions</li>
        </ul>
        <h3>Vendredi (Épaules et Abdominaux)</h3>
        <ul>
            <li>Développé militaire : 4 séries de 8-12 répétitions</li>
            <li>Élévations latérales : 3 séries de 10-12 répétitions</li>
            <li>Élévations frontales : 3 séries de 10-12 répétitions</li>
            <li>Élévations arrière : 3 séries de 10-12 répétitions</li>
            <li>Shrugs : 3 séries de 10-12 répétitions</li>
            <li>Crunch : 3 séries de 15-20 répétitions</li>
            <li>Planche : 3 séries de 30-60 secondes</li>
            <li>Leg raises : 3 séries de 15-20 répétitions</li>
            <li>Russian twists : 3 séries de 15-20 répétitions</li>
        </ul>
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

// Appel des fonctions pour afficher les plans au chargement de la page
window.onload = function() {
    displayWorkoutPlan();
    displayNutritionPlan();
};
