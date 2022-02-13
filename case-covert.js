// case-convert toLowerCase and toUppercase

const anthem = "amar sonar bangla ami tomai valobasi";
const search = "valo";

//toLowercase

const userInput = "blackPink";
const savedUserName = "blackPink";
if (userInput.toLocaleLowerCase() == savedUserName.toLocaleLowerCase()) {
  console.log("user-exists");
}

// toUpperCase
const userInput2 = "blackWhite";
const savedUserName2 = "blackWhite";
if (userInput2.toLocaleUpperCase() == savedUserName2.toLocaleUpperCase()) {
  console.log("user-Big");
}
