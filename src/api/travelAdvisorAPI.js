import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
        params: {lon: 'lng',lat: 'lat',},
        headers: {
          'X-RapidAPI-Key': 'process.env.REACT_APP_RAPID_API_WEATHER_API_KEY',
          'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
        }
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

// import axios from "axios";

// const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
// const options = {


// export const getPlacesData = async (sw,ne) => {
//     try{
//         const { data: {data}} = await axios.get(URL, options);
//         params: {
//             bl_latitude:sw.lat,
//             tr_latitude: ne.lat,
//             bl_longitude: sw.lng,
//             tr_longitude: ne.lng,
//           },
//           headers: {
//             'X-RapidAPI-Key': '973a8bbf53msh291c75e706fb56bp172a1ejsn71cb602f5fc0',
//             'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//           }
//         };
//         return data;

//     }catch (error)
//     {
//         console.log(error)
              
//     }
// }