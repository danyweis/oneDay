var vm = new Vue({
  el: '#app',
  data: {
    weather: '',
    searchedCity: '',
    url: 'https://api.openweathermap.org/data/2.5/weather?q=',
    units: '&units=metric',
    key: '&appid=87ed9a66fdb379ba08f553e8d288eb52',
    icon: 'https://openweathermap.org/img/wn/',
    iconId: '',
    iconExt: '@4x.png',
    image: '',
    sunrise: '',
    sunset: '',
    tempImage: '',
  },
  methods: {
    getWeather: function () {
      if (this.searchedCity.length > 0) {
        fetch(this.url + this.searchedCity + this.units + this.key)
          .then((resp) => resp.json())
          .then((data) => this.weatherData(data))
          .catch((error) => console.error(error))
      }
    },
    weatherData: function (data) {
      this.iconId = ''
      this.weather = data
      console.log(this.weather)
      this.temp()
      this.iconId = this.weather.weather[0].icon
      this.imgIcon()
      this.sunrise = this.weather.sys.sunrise + this.weather.timezone
      this.sunset = this.weather.sys.sunset + this.weather.timezone
    },
    temp: function () {
      if (this.weather.main.temp >= 17) {
        this.tempImage = 'linear-gradient(45deg, #fff500, #fff50085, #fff500)'
      } else {
        this.tempImage = 'linear-gradient(45deg, #0077ff, #0077ff85, #0077ff00)'
      }
    },

    imgIcon: function () {
      this.image = this.icon + this.iconId + this.iconExt
    },
    emptyBox: function () {
      this.searchedCity = ''
    },

    windDirection: function () {
      if (this.weather.wind.deg >= 337.5 || this.weather.wind.deg < 22.5) {
        return 'N'
      } else if (
        this.weather.wind.deg >= 22.5 ||
        this.weather.wind.deg < 67.5
      ) {
        return 'NE'
      } else if (
        this.weather.wind.deg >= 67.5 ||
        this.weather.wind.deg < 112.5
      ) {
        return 'E'
      } else if (
        this.weather.wind.deg >= 112.5 ||
        this.weather.wind.deg < 157.5
      ) {
        return 'SE'
      } else if (
        this.weather.wind.deg >= 157.5 ||
        this.weather.wind.deg < 202.5
      ) {
        return 'S'
      } else if (
        this.weather.wind.deg >= 202.5 ||
        this.weather.wind.deg < 247.5
      ) {
        return 'SW'
      } else if (
        this.weather.wind.deg >= 247.5 ||
        this.weather.wind.deg < 292.5
      ) {
        return 'W'
      } else if (
        this.weather.wind.deg >= 292.5 ||
        this.weather.wind.deg < 337.5
      ) {
        return 'NW'
      }
    },

    suntime: function (data) {
      unixTimestamp = data

      // convert to milliseconds
      // and then create a new Date object
      dateObj = new Date(unixTimestamp * 1000)

      // Get hours from the timestamp
      hours = dateObj.getUTCHours()

      // Get minutes part from the timestamp
      minutes = dateObj.getUTCMinutes()

      // Get seconds part from the timestamp
      seconds = dateObj.getUTCSeconds()

      formattedTime =
        hours.toString().padStart(2, '0') +
        ':' +
        minutes.toString().padStart(2, '0') +
        ':' +
        seconds.toString().padStart(2, '0')

      return formattedTime
    },
  },
})
