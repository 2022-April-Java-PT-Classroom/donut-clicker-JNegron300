const container = (document.querySelector('.container').innerText = 'mmmmmmmmm doughnuts.... ahhhhhhh!');

  class DonutClicker {
    constructor(Clicks, AutoClicker2X, AutoClicker5X, AutoClicker10X) {
      this.Clicks = Clicks;
      this.AutoClicker2X = AutoClicker2X;
      this.AutoClicker5X = AutoClicker5X;
      this.AutoClicker10X = AutoClicker10X;
  }
  }
  function Click() {
    this.Clicks += 1;
  }

  function autoclickincrease() {
    this.Clicks = 10 * 2;
  }
  let Clicks = 0;
  let AutoClicker2X = 0;
  
  let donutCounter = document.querySelector('.donutCounter');
  let donutDisplay = document.querySelector('.donutDisplay');

  let autoclickerDisplay = document.querySelector('.autoClicker');
  let bAutoClicker = document.querySelector('.buyAutoClicker');

  donutCounter.addEventListener("click",()=>{
      Clicks++;
      showNumberDonuts();
  }) ;
  function showNumberDonuts(){
      donutDisplay.innerHTML = Clicks;
      autoclickerDisplay.innerHTML = AutoClicker2X;
  };
  
  showNumberDonuts();


  bAutoClicker.addEventListener("click",()=>{
    if(Clicks >= 10 && 1 > AutoClicker2X){
      Clicks -= 10;
      AutoClicker2X++;
      setInterval(() => {
        document.getElementById("pic").click();
    },2000);
    } else if (1 <= AutoClicker2X && 20 <= Clicks  ){
      Clicks -= 20 ;
      AutoClicker2X++;
      setInterval(() => {
        document.getElementById("pic").click();
    },1000);
    }
  });

