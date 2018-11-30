const getWeather = (lat: number, lon: number) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=49f8541c5e9d0758175574596d1f532e`)
    .then(response => response.json());
};

export {
  getWeather,
};
