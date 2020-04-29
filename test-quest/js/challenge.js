const url = "http://api.dev.cakeiteasy.no/api/store/bakeries/?country_code=no";

const challenge = (method, link) => {
  fetch(link)
    .then((value) => value.json())
    .then((value) => {
      // get only schedule
      const arr = [];

      

      for (let index = 0; index < value.length; index++) {
        console.log(value[index]);
        
        arr.push(value[index].schedule);
      }


      // get only days
      const days = Object.keys(arr);
      const fltr = arr.filter((el) => el);

      // get another elements in days
      const info = [];
      for (const key in arr[0]) {
        if (fltr[0].hasOwnProperty(key)) {
          info.push(fltr[0][key]);
        }
      }

      // get schedule in the string format
      const getString = info.map((el, index) => {
        return `For ${days[index]} - ${el.day_off} : Before ${el.order_before},${el.days_before_order} day before`;
      });

      // Day off index in array
      const dayOff = [];
      for (let index = 0; index < getString.length; index++) {
        if (getString[index].match(/true/gm)) {
          dayOff.push(index);
        }
      }

      // Day off Change Name
      const changeDayOff = dayOff.map((el) => `${days[el]}: closed `);

      const workDays = getString.slice();
      for (let index = 0; index < dayOff.length; index++) {
        workDays.splice(dayOff[index]);
      }

      const splitString = [];
      for (let index = 0; index < workDays.length; index++) {
        const el = workDays[index].split(" : ");
        splitString.push(el[1]);
      }

      // Compare the second part of the strings and get ID of copies Days
      const copiesDays = [];
      for (let index = 0; index < splitString.length; index++) {
        if (splitString[index].includes(splitString[index + 1])) {
          copiesDays.push(index);
        }
      }

      const UniqueAndDayOff = [];

      for (let index = copiesDays.length; index < getString.length; index++) {
        UniqueAndDayOff.push(getString[index]);
      }

      console.log(UniqueAndDayOff);

      const getStringCopies = info.map((el, index) => {
        return `For ${days[index]} - ${days[dayOff[0]]} : Before ${
          el.order_before
        },${el.days_before_order} day before`;
      });

      console.log(dayOff);

      console.log(getStringCopies);
    });
};

challenge("get", url);
