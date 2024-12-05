// KF Panda Search
const charIn = document.getElementById("charName");
const charQuote = document.getElementById("charQuote");
const charImg = document.getElementById("img");
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //Input
  let name = document.getElementById("charIn").value.toLowerCase();
  // If statements - Test the input
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    charIn.innerHTML = "Po";
    charQuote.innerHTML = "Buddy, I am the Dragon Warrior!";
    charImg.src = "img/po.png";
  } else if (name === "tigress" || name === "master tigress") {
    charIn.innerHTML = "Tigress";
    charQuote.innerHTML = "That was hardcore!";
    charImg.src = "img/tigress.png";
  } else if (name === "mantis") {
    charIn.innerHTML = "Mantis";
    charQuote.innerHTML = "Fear the Bug!";
    charImg.src = "img/mantis.png";
  } else if (name === "monkey") {
    charIn.innerHTML = "Monkey";
    charQuote.innerHTML = "We should hang out!";
    charImg.src = "img/monkey.png";
  } else if (name === "viper") {
    charIn.innerHTML = "Viper";
    charQuote.innerHTML = "I don't need to bite to fight!";
    charImg.src = "img/viper.png";
  } else if (name === "crane") {
    charIn.innerHTML = "Crane";
    charQuote.innerHTML = "Wings of Justice!";
    charImg.src = "img/crane.png";
  } else if (name === "oogway" || name === "master oogway") {
    charIn.innerHTML = "Master Oogway";
    charQuote.innerHTML =
      "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present!";
    charImg.src = "img/oogway.png";
  } else if (name === "croc" || name === "crocodile") {
    charIn.innerHTML = "Croc";
    charQuote.innerHTML = "The only hero in this town is a dead one!";
    charImg.src = "img/croc.png";
  } else if (name === "shifu") {
    charIn.innerHTML = "Shifu";
    charQuote.innerHTML =
      "Before the battle of the fist comes the battle of the mind!";
    charImg.src = "img/shifu.png";
  } else if (name === "kai") {
    charIn.innerHTML = "Kai";
    charQuote.innerHTML = "You must be the Dragon Warrior!";
    charImg.src = "img/kai.png";
  } else if (name === "mr ping" || name === "ping") {
    charIn.innerHTML = "Mr Ping";
    charQuote.innerHTML =
      "There is no secret ingredient. Don't have to. To make something special, you just believe it's special.";
    charImg.src = "img/mr-ping.png";
  } else if (name === "shen") {
    charIn.innerHTML = "Shen";
    charQuote.innerHTML =
      "Search the farthest villages. Find more metal! China will be mine";
    charImg.src = "img/shen.png";
  } else if (name === "tai lung" || name === "tai") {
    charIn.innerHTML = "Tai Lung ";
    charQuote.innerHTML =
      "So that is his name: Po... Finally, a worthy opponent! Our battle will be legendary!";
    charImg.src = "img/tai-lung.png";
  } else if (name === "boss wolf" || name === "wolf") {
    charIn.innerHTML = "Boss Wolf";
    charQuote.innerHTML =
      "It's almost done, Lord Shen, but we've run out of metal.";
    charImg.src = "img/boss-wolf.png";
  } else if (name === "soothsayer" || name === "sooth") {
    charIn.innerHTML = "Soothsayer";
    charQuote.innerHTML =
      "Your story may not have such a happy beginning, but that doesn't make you who you are. It is the rest of your story, who you choose to be.";
    charImg.src = "img/soothsayer.png";
  } else if (name === "ox" || name === "storming ox") {
    charIn.innerHTML = "Storming Ox";
    charQuote.innerHTML = "You insolent fool!";
    charImg.src = "img/storming-ox.png";
  } else {
    charIn.innerHTML = "??????";
    charQuote.innerHTML = "-------------";
    charImg.src = "img/question-mark.png";
  }
}
let body = document.getElementById("body");
document.getElementById("theme-btn").addEventListener("click", clickedTheme);
function clickedTheme() {
  //Input
  let theme = document.getElementById("theme-in").value.toLowerCase();
  if (theme === "black" || theme === "dark") {
    body.style.background = "rgba(0,0,0,0.7)";
    document.getElementById("h11").style.color = "rgb(255,255,255)";
    document.getElementById("charName").style.color = "white";
    document.getElementById("charQuote").style.color = "white";
  } else if (theme === "light" || theme === "white" || theme === "bright") {
    body.style.background = "rgba(255,255,255,0.7)";
    document.getElementById("h11").style.color = "rgb(0,0,0)";
    document.getElementById("charName").style.color = "black";
    document.getElementById("charQuote").style.color = "black";
  } else if (theme === "random" || theme === "rand") {
    let x = Math.random() * 254 + 1;
    x = Math.floor(x);
    let g = Math.random() * 254 + 1;
    g = Math.floor(g);
    let b = Math.random() * 254 + 1;
    b = Math.floor(b);
    document.getElementById("body").style.background =
      "rgb( " + x + ", " + g + ", " + b + ")";
    let a = Math.random() * 254 + 1;
    a = Math.floor(a);
    let = e = Math.random() * 254 + 1;
    e = Math.floor(e);
    let c = Math.random() * 254 + 1;
    c = Math.floor(c);
    document.getElementById("h11").style.color =
      "rgb( " + a + ", " + e + ", " + c + ")";
    document.getElementById("charName").style.color =
      "rgb( " + a + ", " + e + ", " + c + ")";
    document.getElementById("charQuote").style.color =
      "rgb( " + a + ", " + e + ", " + c + ")";
  }
}
