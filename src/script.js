//////////////////////////////////
// GLOBAL ELEMENT
const stepSlides = document.querySelectorAll(".step-slide");
const flexSlide = document.querySelectorAll(".steps-slide");
const nextBtn = $(".btn-next-step");
const backBtn = $(".btn-back-step");
const stepNumberLine = document.querySelectorAll(".step-number-line");
const stepNumber = document.querySelectorAll(".step-number");
// FORM INPUTS STEP-1 ( NEED IT FOR SHOWING USER DATA TO THE INNTER FACE )
const userNameInput = $("input[name=userName]")[0];
const userEmailInput = $("input[name=email]")[0];
const userPhoneNumberInput = $("input[name=phoneNumber]")[0];
const userPortfolioInput = $("input[name=portfolio]")[0];
const userOption = $(".option__user");
// VALIDATION ELEMENT
const errMessage = $(".err-message");
// FORM-STEP-1 ELEMENTS
const inputsStep1 = document.querySelectorAll(".step-slide__input");
// FORM-STEP-2 ELEMENTS
const inputsStep2 = document.querySelectorAll(".radio-step2");
const labelsStep2 = document.querySelectorAll(
  ".step-slide__label-radio--step2"
);
// FORM-STEP-2 ELEMENTS
const inputsStep3 = document.querySelectorAll(".radio-step3");
const labelsStep3 = document.querySelectorAll(
  ".step-slide__label-radio--step3"
);

////////////////////////////
// VARIBALIES FOR SCRIPT
// FOR SLIDE FUNCTIONALITY
let currentSlide = 0;
// FOR STEPS VALIDATION
let isStep1Checked = false;
let isStep2Checked = false;
let isStep3Checked = false;

// FORM-VALIDATION STEP-1

// INPUT VALIDATION

const inputValidation = function (className, index, type) {
  if (type === "remove") {
    document
      .querySelector(".msg-err--" + className)
      .classList.add("msg-annimation");
    document.querySelector(".msg-err--" + className).textContent =
      "Fill your " + className;
    if (className === "email") {
      if (inputsStep1[index].value.length === 0) {
        document.querySelector(".msg-err--" + className).textContent =
          "Fill your email";
      } else if (!inputsStep1[index].value.includes("@")) {
        document.querySelector(".msg-err--" + className).textContent =
          "Your email should include '@'";
      }
    }
    inputsStep1[index].classList.add("input--err");
    inputsStep1[index].classList.remove("input--succeed");
    isStep1Checked = false;
  } else {
    inputsStep1[index].classList.remove(".input--err");
    inputsStep1[index].classList.add("input--succeed");
    document
      .querySelector(".msg-err--" + className)
      .classList.remove("msg-annimation");
    setTimeout(() => {
      document.querySelector(".msg-err--" + className).textContent = "";
    }, 300);
  }
};

const checkStep1 = function () {
  if (
    inputsStep1[0].value.length !== 0 &&
    inputsStep1[1].value.length !== 0 &&
    inputsStep1[2].value.length !== 0 &&
    inputsStep1[3].value.length !== 0 &&
    userEmailInput.value.includes("@")
  ) {
    isStep1Checked = true;
  } else {
    if (inputsStep1[0].value.length === 0) {
      inputValidation("name", 0, "remove");
    }

    if (
      inputsStep1[1].value.length === 0 ||
      inputsStep1[1].value.includes("@")
    ) {
      inputValidation("email", 1, "remove");
    }

    if (inputsStep1[2].value.length === 0) {
      inputValidation("phone", 2, "remove");
    }

    if (inputsStep1[3].value.length === 0) {
      inputValidation("portfolio", 3, "remove");
    }
  }
};

///////////////////////////////
// SELF VALIDATION INPUT STEP-1

userNameInput.addEventListener("change", function () {
  if (userNameInput.value.length === 0) {
    inputValidation("name", 0, "remove");
  } else {
    inputValidation("name", 0, "add");
  }
});

userEmailInput.addEventListener("change", function () {
  if (userEmailInput.value.length === 0) {
    inputValidation("email", 1, "remove");
  } else if (!userEmailInput.value.includes("@")) {
    inputValidation("email", 1, "remove");
  } else {
    inputValidation("email", 1, "add");
  }
});

userPhoneNumberInput.addEventListener("change", function () {
  if (userPhoneNumberInput.value.length === 0) {
    inputValidation("phone", 2, "remove");
  } else {
    inputValidation("phone", 2, "add");
  }
});

userPortfolioInput.addEventListener("change", function () {
  if (userPortfolioInput.value.length === 0) {
    inputValidation("portfolio", 3, "remove");
  } else {
    inputValidation("portfolio", 3, "add");
  }
});

// FORM-VALIDATION STEP-2

const checkedStep2 = function () {
  // IF ONE LABEL CLICKED --> STEP-2 CHECKED
  // SELF LABEL VALIDATION
  for (const label of labelsStep2) {
    label.addEventListener("click", function () {
      isStep2Checked = true;
      errMessage[0].classList.add("hidden");
      labelsStep2.forEach((label) => {
        label.classList.remove("input--err");
      });
    });
  }

  // CHECK LABEL IF IS CHECKED IF SO --> STEP-2 CHECKED
  if (
    inputsStep2[0].checked ||
    inputsStep2[1].checked ||
    inputsStep2[2].checked ||
    inputsStep2[3].checked
  ) {
    isStep2Checked = true;
    labelsStep2.forEach((label) => {
      label.classList.remove("input--err");
    });
    // ELSE STEP 2 --> NOT CHECKED
  } else {
    isStep2Checked = false;
    errMessage[0].classList.remove("hidden");
    labelsStep2.forEach((label) => {
      label.classList.add("input--err");
    });
  }
};

// FORM-VALIDATION STEP-3
const checkedStep3 = function () {
  // IF ONE LABEL CLICKED --> STEP-2 CHECKED
  // SELF LABEL VALIDATION

  for (const label of labelsStep3) {
    label.addEventListener("click", function () {
      isStep3Checked = true;
      errMessage[1].classList.add("hidden");
      labelsStep3.forEach((label) => {
        label.classList.remove("input--err");
      });
    });
  }
  // CHECK LABEL IF IS CHECKED IF SO --> STEP-2 CHECKED
  if (
    inputsStep3[0].checked ||
    inputsStep3[1].checked ||
    inputsStep3[2].checked ||
    inputsStep3[3].checked
  ) {
    isStep3Checked = true;
    labelsStep3.forEach((label) => {
      label.classList.remove("input--err");
    });

    // ELSE STEP 2 --> NOT CHECKED
  } else {
    isStep3Checked = false;
    errMessage[1].classList.remove("hidden");
    labelsStep3.forEach((label) => {
      label.classList.add("input--err");
    });
  }
};

///////////////////////////////
// NEXT BTN FUNCTIONALITY

// SLIDENEXT FUNCTIONALITY

const slideFunctionNext = function (currSlide) {
  // LINE NUMBER ANNIMATION
  stepNumberLine[currSlide - 1].classList.remove("wait");
  stepNumberLine[currSlide - 1].classList.add("line--active");
  // NUMBER STEP BOX
  stepNumber[currSlide].classList.add("step-number--active");
  stepNumber[currSlide].classList.add("wait");
  // SLIDE ANNIMATION
  stepSlides.forEach((slide) => {
    slide.style.transform = `translateX(${100 * currSlide}% )`;
  });
};

// CLICKING FUCTIONALITY

nextBtn.click(function () {
  // CALLING STEP 1 VALIDATION
  checkStep1();
  // CHECK THE MAX SLIDE
  if (currentSlide < stepSlides.length) {
    // CHECK STEP 1 VALIDATION
    if (isStep1Checked) {
      // HIDE THE BACK BTN IF STEP 1 IS CHECKED
      backBtn[0].classList.remove("btn-invisible");
      // FOR SLIDE LOGIC
      if (currentSlide < 1) {
        currentSlide++;
        slideFunctionNext(currentSlide);
        return false;
      } else {
        // CALL STEP 2 VALIDATION
        checkedStep2();
      }
      // CHECK STEP 2 VALIDATION

      if (isStep2Checked) {
        // FOR SLIDE LOGIC
        if (currentSlide < 2) {
          currentSlide++;
          slideFunctionNext(currentSlide);
          return false;
        } else {
          // CALL STEP 23 VALIDATION
          checkedStep3();
        }
        // CHECK STEP 3 VALIDATION
        if (isStep3Checked) {
          // FOR SLIDE LOGIC
          if (currentSlide < 3) {
            currentSlide++;
            slideFunctionNext(currentSlide);
            showOptionUser();
            return false;
          } else {
            // SHOW THANK YOU PAGE
            currentSlide++;
            stepSlides.forEach((slide) => {
              slide.style.transform = `translateX(${100 * currentSlide}% )`;
            });
            const [fName] = userDataObject.name;
            $(".thank-you-page").removeClass("thank-you-page--hidden");
            $(".btn-start").removeClass("hidden");
            $(".step-number-box").addClass("transparent");
            $(".border-bottom").addClass("transparent");
            $(".btn-back-step").addClass("transparent");
            $(".btn-next-step").addClass("hidden");
            $(".than-you-page__user-name").text(fName);
          }
        }
      }
    }
  }
});

///////////////////////////////
// BACK STEP BTN

// CLICKING FUCTIONALITY
backBtn.click(function () {
  // CHECK THE MIN SLIDE
  if (currentSlide > 0) {
    // SHOW BACK BTN IF IT NOT THE STEP 1
    if (currentSlide === 1) {
      backBtn[0].classList.add("btn-invisible");
    }

    // LINE NUMBER ANNIMATION
    stepNumberLine[currentSlide - 1].classList.add("wait");
    stepNumberLine[currentSlide - 1].classList.remove("line--active");

    // NUMBER-CIRCLE ANNIMATION
    stepNumber[currentSlide].classList.remove("step-number--active");
    stepNumber[currentSlide].classList.remove("wait");
    stepNumber[currentSlide].classList.add("dont-wait");

    // SLIDE ANNIMATION
    currentSlide--;
    stepSlides.forEach((slide) => {
      slide.style.transform = `translateX(${107 * currentSlide}% )`;
    });
  }
});

/////////////////////////////////////////////////////
// USER DATE FUNCTIONALITY

// CREATE USER DATA OBJECT
const userDataObject = {
  name: [],
  email: "",
  phoneNumber: "",
  portfolio: "",
  level: "",
  challenge: "",
};

// WRITE USER DATA IN STEP REVIEW
const showOptionUser = function () {
  const [fName, lName] = userDataObject.name;

  $(".option__user--name").text(fName + " " + lName);
  $(".option__user--email").text(userDataObject.email);
  $(".option__user--phoneNumber").text(userDataObject.phoneNumber);
  $(".option__user--portfolio").text(userDataObject.portfolio);
  $(".option__user--level").text(userDataObject.level);
  $(".option__user--challenge").text(userDataObject.challenge);
};

// GET USER DATA

userNameInput.addEventListener("change", function () {
  const [firstName, lastName] = $(this).val().split(" ");
  const firstNameCap = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  const lastNameCap = lastName
    ? lastName.charAt(0).toUpperCase() + lastName.slice(1)
    : "";
  userDataObject.name = [];
  userDataObject.name.push(firstNameCap, lastNameCap);
});
userEmailInput.addEventListener("change", function () {
  userDataObject.email = $(this).val();
});

userPhoneNumberInput.addEventListener("change", function () {
  userDataObject.phoneNumber = $(this).val();
});

userPortfolioInput.addEventListener("change", function () {
  userDataObject.portfolio = $(this).val();
});

for (const input of inputsStep3) {
  input.addEventListener("click", function () {
    userDataObject.challenge = $(this).val();
  });
}

for (const input of inputsStep2) {
  input.addEventListener("click", function () {
    userDataObject.level = $(this).val();
  });
}
