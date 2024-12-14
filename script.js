let timer;
let timeLeft = 0;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const endSound = document.getElementById('endSound');
const exerciseSelect = document.getElementById('exerciseSelect');
const notification = document.getElementById('notification');

// Время для каждого упражнения в секундах
const exerciseTimes = {
    pullups: 30,
    pushups: 20,
    squats: 60,
    twists: 90,
    plank: 120,
    neckStretch: 30,
    hipStretch: 30,
    calfStretch: 60,
    legStretch: 120,
    shoulderStretch: 30
};

startButton.addEventListener('click', startTimer);

function startTimer() {
    startButton.disabled = true; // Отключаем кнопку во время работы таймера
    const selectedExercise = exerciseSelect.value;
    timeLeft = exerciseTimes[selectedExercise]; // Получаем время для выбранного упражнения
    updateTimerDisplay();
    notification.style.display = 'none'; // Скрываем уведомление

    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timer);
            endSound.play(); // Воспроизводим звук по окончании времени
            notification.textContent = `Упражнение "${exerciseSelect.options[exerciseSelect.selectedIndex].text}" завершено!`; // Уведомление о завершении
            notification.style.display = 'block'; // Показываем уведомление
            startButton.disabled = false; // Включаем кнопку снова
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
