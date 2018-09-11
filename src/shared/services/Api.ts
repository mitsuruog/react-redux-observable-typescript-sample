import "rxjs/add/observable/from";

const getWeather = async (lat: number, lon: number) => {
  const data = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=49f8541c5e9d0758175574596d1f532e`)).json();
  return data;
};

export {
  getWeather,
};
