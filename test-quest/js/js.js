// -----------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------
// ======================================================================================================================================================
// ===================================================== Global settings =============================================================================

// How many COLUMNS FOR CITIES  would u like to create?
let locationsQuantity = 0;

const countLoc = (column) => {
  // Create wrapper for ul <-- div > ul -->
  for (let index = 0; index < column / 2; index++) {
    const ulBox = document.createElement("div");
    const ulBoxParrent = document.querySelector(".location__row");
    ulBox.classList.add("row", "location__box");
    ulBoxParrent.append(ulBox);
  }

  // Create ul for li with names of the cities <--Ul > li -->
  for (let el = 0; el < column; el++) {
    const createCityUl = document.createElement("ul");
    const arrColumns = document.getElementsByClassName("location__box");
    createCityUl.classList.add("location__column");

    arrColumns[el % arrColumns.length].append(createCityUl);
  }
};
countLoc(locationsQuantity);

// -----------------------------------------------------------------------------------------------------------------------------------------------------

// How many SLIDES  would u like to create?
let slidesQuantity = 4;

for (let index = 0; index < slidesQuantity; index++) {
  const createSlide = document.createElement("div");
  createSlide.classList.add("slider__slide");
  document.querySelector(".slider").append(createSlide);
}

// ===================================================== Global settings =============================================================================
// ======================================================================================================================================================
// -----------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------
// ======================================================================================================================================================
// ===================================================== <!-- API with Slider--> =============================================================================

//
const bakeriesList = (method, url) => {
  fetch(url)
    .then((value) => value.json())
    // get imges. Filt them
    .then((value) => {
      //  new arr-1 with filter with RegExp for 1. value.name.include("test/Test") + 2. start with lovercase word + 3. include digit
      const arr = value.filter((el) => {
        if (
          typeof el.picture == "number" &&
          !el.name.match(/Test|test|^[a-z]|\d/gm)
        ) {
          return el;
        }
      });

      // new arr-2 for only 1 word in all value whice is true IMG but includes "Test" in the value.name.
      const arrNoTest = value.filter((el) => {
        if (el.name.match(/Test\sbak.{0,20}\s.{0,20}/gm)) {
          return el;
        }
      });

      //  arr-1 join arr-2
      const arrResponse = arr.concat(arrNoTest).map((el) => el.picture);

      // I know It's wrong way, but I cant group this img with another false imges
      const fakeIMG = arrResponse.findIndex((el) => el === 5452);
      arrResponse.splice(fakeIMG, 1);

      return arrResponse;
    })
    // Slider. Show Images. Event listeners on click
    .then((value) => {
      const arrSlides = document.getElementsByClassName("slider__slide");

      // It count's index of arrSlides("slider__slide") per click ( we work with the array don't forget)
      let wrapperIndex = -1;

      // It count's index of div.img(value.length) per click  ( we work with the array don't forget)
      let valueIndex = -1;

      // click function. It's like a slider with lazy download because It's only change img src=URL and doesnt change the DOM
      const clickArrow = () => {
        // count + 1 per index of arrSlides erevery click
        wrapperIndex = wrapperIndex + 1;

        // We have only 4 div.style.backgroundIMG = "URL"
        const checkDivLength = () => {
          if (wrapperIndex > slidesQuantity - 1) {
            return (wrapperIndex = 0);
          }
        };
        checkDivLength();

        // U can click more times than value.length. This function exclude this issue with empty slide and makes our slider infinity
        const checkValueLength = () => {
          if (valueIndex >= value.length) {
            return (valueIndex = 0);
          } else if (valueIndex < 0) {
            return (valueIndex = value.length - 1);
          }
        };
        checkValueLength();

        const event = () => {
          arrSlides[wrapperIndex].style.backgroundImage =
            `url` +
            `${`(http://api.dev.cakeiteasy.no/api/store/images/${value[valueIndex]}/?size=small_url&compress_type=web)`}`;
        };
        event();
      };

      const plus = () => {
        valueIndex = valueIndex + 1;
        clickArrow();
      };

      const minus = () => {
        valueIndex = valueIndex - 1;
        clickArrow();
      };

      // It show's slides when user open web-page
      for (let index = 0; index < slidesQuantity; index++) {
        plus();
      }

      const arrowNext = document
        .querySelector(".slider__arrow_next")
        .addEventListener("click", plus);

      const arrowPrev = document
        .querySelector(".slider__arrow_prev")
        .addEventListener("click", minus);
    });
};

// ===================================================== <!-- API with Slider--> =============================================================================
// ======================================================================================================================================================
// -----------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------
// ======================================================================================================================================================
// ===================================================== <!-- API with cities--> =============================================================================

// API link for connect to LIST OF CITIES
const locations =
  "http://api.dev.cakeiteasy.no/api/store/cities/?country_code=no&most_popular=true";

// function for get LIST OF CITIES with AJAX request
const getLocations = (method, url) => {
  const arrColumns = document.getElementsByClassName("location__column");

  // get LOCATIONS API
  fetch(url)
    .then((value) => value.json())
    // filtering value(name) from the cities object
    .then((value) => value.map((index) => index.name))
    .then((value) => {
      value.forEach((post, i) => {
        const li = document.createElement("li");
        li.classList.add("location__city", "text", "text_bold");
        li.innerText = post;
        arrColumns[i % arrColumns.length].append(li);
      });
    });
};

getLocations("get", locations);

const bakeries =
  "http://api.dev.cakeiteasy.no/api/store/bakeries/?country_code=no";
bakeriesList("get", bakeries);

// ===================================================== <!-- API with cities--> =============================================================================
// ======================================================================================================================================================
// -----------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------
// ======================================================================================================================================================
// ===================================================== <!-- Other--> =============================================================================

// Make IMG background. U can ad this IMG from DDOM. Just USE class="ibg" for img-WRAPPER
const ibg = () => {
  const ibg = document.getElementsByClassName("ibg");
  for (let index = 0; index < ibg.length; index++) {
    if (ibg[index].querySelector("img")) {
      ibg[index].style.backgroundImage =
        "url(" + ibg[index].querySelector("img").getAttribute("src") + ")";
    }
  }
};
ibg();

// ===================================================== <!-- Other--> =============================================================================
// ======================================================================================================================================================
// -----------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------
