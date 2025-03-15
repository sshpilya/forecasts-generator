
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const predictions = [
    "Сегодня будет оличный день!",
    "Не забудь очки, день будет солнечный!",
    "Скоро ты встретишь свою любовь.",
    "Обдумай все ещё разок.",
    "Сделай то, что так давно плнируешь!"
  ]

  function getRandomPrediction() {
    return predictions[getRandomNumber(0, predictions.length - 1)];
}

  const button = document.querySelector(".forecast-btn"); 
  const currentTitle = document.querySelector(".current-forecast h1"); 
  const currentProbability = document.querySelector(".current-forecast p"); 
  const forecastsContainer = document.querySelector(".forecasts"); 
  const template = document.getElementById("forecast-item"); 
  
  button.addEventListener("click", function () {
    const prediction = getRandomPrediction(); 
    const probability = getRandomNumber(0, 100) + "%"; 
    currentTitle.textContent = prediction;
    currentProbability.textContent = `Вероятность: ${probability}`;

    const forecastItem = template.content.cloneNode(true);
    forecastItem.querySelector("h3").textContent = prediction;
    forecastItem.querySelector("p").textContent = `Вероятность: ${probability}`;

    forecastsContainer.prepend(forecastItem); 
})

/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
