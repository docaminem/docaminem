let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`[onclick="showSection('${sectionId}')"]`).classList.add('active');
}

function changeMonth(direction) {
    currentMonth += direction;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    updateCalendar();
}

function updateCalendar() {
    const calendarBody = document.querySelector('.calendar-body');
    calendarBody.innerHTML = '';
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();

    for (let i = 0; i < firstDay; i++) {
        calendarBody.innerHTML += '<div></div>';
    }

    for (let day = 1; day <= daysInMonth; day++) {
        calendarBody.innerHTML += `<div>${day}</div>`;
    }

    document.getElementById('current-month-year').innerText = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' });
}

function adjustWeight(change) {
    const currentWeightElement = document.getElementById('current-weight');
    let currentWeight = parseFloat(currentWeightElement.innerText);
    currentWeight += change;
    currentWeightElement.innerText = `${currentWeight} kg`;
}

function addWorkout() {
    const workoutList = document.querySelector('.workout-list');
    const newWorkout = document.createElement('div');
    newWorkout.classList.add('workout-item');
    newWorkout.innerHTML = `
        <input type="checkbox">
        <span>Nouvel exercice</span>
        <button onclick="startRestTimer()">Démarrer le chrono de repos</button>
    `;
    workoutList.appendChild(newWorkout);
}

let restTimer;
let restTime = 60; // Temps de repos en secondes

function startRestTimer() {
    restTime = 60; // Réinitialiser le temps de repos
    const restTimerDisplay = document.createElement('p');
    restTimerDisplay.id = 'restTimerDisplay';
    restTimerDisplay.innerText = `Temps de repos: ${restTime}s`;
    document.body.appendChild(restTimerDisplay);

    restTimer = setInterval(updateRestTimer, 1000);
}

function updateRestTimer() {
    const restTimerDisplay = document.getElementById('restTimerDisplay');
    if (restTime <= 0) {
        clearInterval(restTimer);
        restTimerDisplay.innerText = "Temps de repos terminé!";
    } else {
        restTime--;
        restTimerDisplay.innerText = `Temps de repos: ${restTime}s`;
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    updateCalendar();
    showSection('dashboard');
});
