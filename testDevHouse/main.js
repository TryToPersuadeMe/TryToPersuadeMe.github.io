const callApi = (api, apiIndex) => {
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let work_days = [].slice(-1);
      let days_off = [];

      let arr = Object.entries(data[apiIndex].schedule).map((value, index, array) => {
        `${value[1].days_before_order}` > 1 ? (day = "days") : (day = "day");

        if (value[1].day_off) {
          days_off.push(value[0]);
          return `${value[0]} : day_off `;
        } else {
          work_days.push(value[0]);
          return `For ${work_days[0]} - finish : before ${value[1].order_before}, ${value[1].days_before_order}  ${day}`;
        }
      });

      let finalString = arr.map((value, index, array) => {
        return value.replace(/finish/gim, work_days.slice(-1)[0]);
      });

      return (uniqueSet = new Set(finalString));
    })
    .then((data) => {
      let dataArray = Array.from(data);
      for (let index = 0; index < dataArray.length; index++) {
        createElements(dataArray[index]);
      }
    });
};

let wrapper = document.querySelector(".wrapper");

/* create elements in HTML DOM */
const createElements = (element) => {
  let tagName = document.createElement("p");
  wrapper.appendChild(tagName);
  tagName.innerHTML = element;
};

const button = (api) => {
  let input = document.querySelector(".input");

  input.addEventListener("input", () => {
    wrapper.innerHTML = "";
    callApi(api, input.value);
  });
};

/* test */
button("http://api.dev.cakeiteasy.no/api/store/bakeries/?country_code=no");
