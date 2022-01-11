'use strict';


//cards array, all cards in uno deck (don't mutate)
const cardsconst = [
    {color: "red", type: "0", src: "cardpics/red0.png"},
    {color: "red", type: "1", src: "cardpics/red1.png"},
    {color: "red", type: "2", src: "cardpics/red2.png"},
    {color: "red", type: "3", src: "cardpics/red3.png"},
    {color: "red", type: "4", src: "cardpics/red4.png"},
    {color: "red", type: "5", src: "cardpics/red5.png"},
    {color: "red", type: "6", src: "cardpics/red6.png"},
    {color: "red", type: "7", src: "cardpics/red7.png"},
    {color: "red", type: "8", src: "cardpics/red8.png"},
    {color: "red", type: "9", src: "cardpics/red9.png"},
    {color: "red", type: "1", src: "cardpics/red1.png"},
    {color: "red", type: "2", src: "cardpics/red2.png"},
    {color: "red", type: "3", src: "cardpics/red3.png"},
    {color: "red", type: "4", src: "cardpics/red4.png"},
    {color: "red", type: "5", src: "cardpics/red5.png"},
    {color: "red", type: "6", src: "cardpics/red6.png"},
    {color: "red", type: "7", src: "cardpics/red7.png"},
    {color: "red", type: "8", src: "cardpics/red8.png"},
    {color: "red", type: "9", src: "cardpics/red9.png"},

    {color: "yellow", type: "0", src: "cardpics/yellow0.png"},
    {color: "yellow", type: "1", src: "cardpics/yellow1.png"},
    {color: "yellow", type: "2", src: "cardpics/yellow2.png"},
    {color: "yellow", type: "3", src: "cardpics/yellow3.png"},
    {color: "yellow", type: "4", src: "cardpics/yellow4.png"},
    {color: "yellow", type: "5", src: "cardpics/yellow5.png"},
    {color: "yellow", type: "6", src: "cardpics/yellow6.png"},
    {color: "yellow", type: "7", src: "cardpics/yellow7.png"},
    {color: "yellow", type: "8", src: "cardpics/yellow8.png"},
    {color: "yellow", type: "9", src: "cardpics/yellow9.png"},
    {color: "yellow", type: "1", src: "cardpics/yellow1.png"},
    {color: "yellow", type: "2", src: "cardpics/yellow2.png"},
    {color: "yellow", type: "3", src: "cardpics/yellow3.png"},
    {color: "yellow", type: "4", src: "cardpics/yellow4.png"},
    {color: "yellow", type: "5", src: "cardpics/yellow5.png"},
    {color: "yellow", type: "6", src: "cardpics/yellow6.png"},
    {color: "yellow", type: "7", src: "cardpics/yellow7.png"},
    {color: "yellow", type: "8", src: "cardpics/yellow8.png"},
    {color: "yellow", type: "9", src: "cardpics/yellow9.png"},

    {color: "green", type: "0", src: "cardpics/green0.png"},
    {color: "green", type: "1", src: "cardpics/green1.png"},
    {color: "green", type: "2", src: "cardpics/green2.png"},
    {color: "green", type: "3", src: "cardpics/green3.png"},
    {color: "green", type: "4", src: "cardpics/green4.png"},
    {color: "green", type: "5", src: "cardpics/green5.png"},
    {color: "green", type: "6", src: "cardpics/green6.png"},
    {color: "green", type: "7", src: "cardpics/green7.png"},
    {color: "green", type: "8", src: "cardpics/green8.png"},
    {color: "green", type: "9", src: "cardpics/green9.png"},
    {color: "green", type: "1", src: "cardpics/green1.png"},
    {color: "green", type: "2", src: "cardpics/green2.png"},
    {color: "green", type: "3", src: "cardpics/green3.png"},
    {color: "green", type: "4", src: "cardpics/green4.png"},
    {color: "green", type: "5", src: "cardpics/green5.png"},
    {color: "green", type: "6", src: "cardpics/green6.png"},
    {color: "green", type: "7", src: "cardpics/green7.png"},
    {color: "green", type: "8", src: "cardpics/green8.png"},
    {color: "green", type: "9", src: "cardpics/green9.png"},

    {color: "blue", type: "0", src: "cardpics/blue0.png"},
    {color: "blue", type: "1", src: "cardpics/blue1.png"},
    {color: "blue", type: "2", src: "cardpics/blue2.png"},
    {color: "blue", type: "3", src: "cardpics/blue3.png"},
    {color: "blue", type: "4", src: "cardpics/blue4.png"},
    {color: "blue", type: "5", src: "cardpics/blue5.png"},
    {color: "blue", type: "6", src: "cardpics/blue6.png"},
    {color: "blue", type: "7", src: "cardpics/blue7.png"},
    {color: "blue", type: "8", src: "cardpics/blue8.png"},
    {color: "blue", type: "9", src: "cardpics/blue9.png"},
    {color: "blue", type: "1", src: "cardpics/blue1.png"},
    {color: "blue", type: "2", src: "cardpics/blue2.png"},
    {color: "blue", type: "3", src: "cardpics/blue3.png"},
    {color: "blue", type: "4", src: "cardpics/blue4.png"},
    {color: "blue", type: "5", src: "cardpics/blue5.png"},
    {color: "blue", type: "6", src: "cardpics/blue6.png"},
    {color: "blue", type: "7", src: "cardpics/blue7.png"},
    {color: "blue", type: "8", src: "cardpics/blue8.png"},
    {color: "blue", type: "9", src: "cardpics/blue9.png"},

    {color: "red", type: "draw2", src: "cardpics/reddraw2.png"},
    {color: "red", type: "reverse", src: "cardpics/redreverse.png"},
    {color: "red", type: "skip", src: "cardpics/redskip.png"},
    {color: "red", type: "draw2", src: "cardpics/reddraw2.png"},
    {color: "red", type: "reverse", src: "cardpics/redreverse.png"},
    {color: "red", type: "skip", src: "cardpics/redskip.png"},

    {color: "yellow", type: "draw2", src: "cardpics/yellowdraw2.png"},
    {color: "yellow", type: "reverse", src: "cardpics/yellowreverse.png"},
    {color: "yellow", type: "skip", src: "cardpics/yellowskip.png"},
    {color: "yellow", type: "draw2", src: "cardpics/yellowdraw2.png"},
    {color: "yellow", type: "reverse", src: "cardpics/yellowreverse.png"},
    {color: "yellow", type: "skip", src: "cardpics/yellowskip.png"},

    {color: "green", type: "draw2", src: "cardpics/greendraw2.png"},
    {color: "green", type: "reverse", src: "cardpics/greenreverse.png"},
    {color: "green", type: "skip", src: "cardpics/greenskip.png"},
    {color: "green", type: "draw2", src: "cardpics/greendraw2.png"},
    {color: "green", type: "reverse", src: "cardpics/greenreverse.png"},
    {color: "green", type: "skip", src: "cardpics/greenskip.png"},

    {color: "blue", type: "draw2", src: "cardpics/bluedraw2.png"},
    {color: "blue", type: "reverse", src: "cardpics/bluereverse.png"},
    {color: "blue", type: "skip", src: "cardpics/blueskip.png"},
    {color: "blue", type: "draw2", src: "cardpics/bluedraw2.png"},
    {color: "blue", type: "reverse", src: "cardpics/bluereverse.png"},
    {color: "blue", type: "skip", src: "cardpics/blueskip.png"},

    {color: "none", type: "wild", src: "cardpics/wild.png"},
    {color: "none", type: "wild", src: "cardpics/wild.png"},
    {color: "none", type: "wild", src: "cardpics/wild.png"},
    {color: "none", type: "wild", src: "cardpics/wild.png"},
    {color: "none", type: "wild+4", src: "cardpics/wild+4.png"},
    {color: "none", type: "wild+4", src: "cardpics/wild+4.png"},
    {color: "none", type: "wild+4", src: "cardpics/wild+4.png"},
    {color: "none", type: "wild+4", src: "cardpics/wild+4.png"}
];

//array/list for each players hands (need to create for all possible 8 players, even if they aren't all being used)
let hands =[[],[],[],[],[],[],[],[]];
let turn = 1;
let numplayers = 0;
let currentCard = null;

let reverse = false;
let skip = false;

//start game
function startCard(){
    if(numplayers<2){
        alert("Can't start with less than 2 players");
        return;
    }
    setTurn();

    let img = document.createElement('img');
    let index = Math.floor(Math.random() * 76);
    img.src=cardsconst[index].src;
    img.id="playedcardimg";
    currentCard = cardsconst[index];
    console.log(index);
    document.getElementById("playedcard").appendChild(img);
    document.getElementById("startcard").style.display="none";

    //remove displays of players who haven't been added
    const seats = document.getElementsByClassName("seat");
    for(var i =0; i<8; i++){
        if(hands[i].length<1){
            seats[i].style.display = "none";
        }
    }

}
document.getElementById("startcard").addEventListener("click", startCard, false);

//event handler for draw card (clicking on uno card)
let inp = document.createElement('input');
inp.type = "image";
inp.className = "playedcard";
inp.src="cardpics/unoback.png";
inp.alt="Submit";
inp.onclick=function(){
    addCard();
    setTurn();
}
inp.height=125;
inp.width=85;
document.getElementById("unoback").appendChild(inp);

//add event listeners to add player buttons
let addbtns = document.getElementsByClassName("seat_btn");
Array.from(addbtns).forEach(function(button,index){
  button.addEventListener("click",function(){
    document.getElementById("seat"+(index+1)+"_btn").style.display="none";

    //adjusts player count
    numplayers ++;

    for(let i=0;i<7;++i){
        //default card select:
        let n = Math.floor(Math.random() * cardsconst.length);
        //special cards select, good for testing:
        // let n = Math.floor(Math.random()*30)+76;

        hands[index].push(cardsconst[n]);
        let img = document.createElement('input');
        img.type = "image";
        img.className = "card";
        img.src=cardsconst[n].src;
        img.alt="Submit";
        img.onclick=function(){
            if(turn!=(index+1)){
                return;
            }
            let playedcard = hands[index][i];
            if(validPlay(playedcard)){
                //   alert(cardColor+" "+cardType+" and "+currentCard.color+" "+currentCard.type);
                let p = document.getElementById("playedcardimg");
                p.parentNode.removeChild(p);
                let img = document.createElement('img');
                img.id = "playedcardimg";
                img.src=hands[index][i].src;
                document.getElementById("playedcard").appendChild(img);
                currentCard=hands[index][i];


                // hands[index].slice(i,(i+1));
                let imgbtns = document.getElementById("hand"+(index+1)).getElementsByClassName("card");
                for(let j=0;j<imgbtns.length;++j){
                    let sLen = hands[index][i].src.length;
                    let c = document.getElementById("hand"+(index+1)).getElementsByClassName("card")[j];
                    if(hands[index][i].src.localeCompare(c.src.substring(c.src.length-sLen))==0){
                        c.parentNode.removeChild(c);
                        console.log(hands);

                        //check for special cards
                        checkReverse(playedcard.type);
                        checkSkip(playedcard.type);
                        checkdraw2wild(playedcard.type);

                        let d = document.getElementById("hand"+(index+1)).getElementsByClassName("card");
                        if(d.length<1){
                          announceWinner(index+1);
                          return;
                        }

                        setTurn();
                        return;
                    }
                }
                
            }
            else{
                return;
            }
      };
      img.height=30;
      img.width=20;
      document.getElementById("hand"+(index+1)).appendChild(img);
    }
  })
})

//adds a card to the player's hands[] array
function addCard(){
    let n = Math.floor(Math.random() * cardsconst.length);
    hands[turn-1].push(cardsconst[n]);
    //index of new card
    let i = hands[turn-1].length-1;
    let img = document.createElement('input');
    img.type = "image";
    img.className = "card";
    img.src=cardsconst[n].src;
    img.alt="Submit";
    let t=turn;

    //event listener for new card
    img.onclick=function(){
      // console.log(hands[turn-1][i].color);
      if(turn!=t){
        return;
      }
        let playedcard = hands[turn-1][i];
        if(validPlay(playedcard)){
            // alert(cardColor+" "+cardType+" and "+currentCard.color+" "+currentCard.type);
            let p = document.getElementById("playedcardimg");   // Get the <ul> element with id="myList"
            p.parentNode.removeChild(p);
            let img = document.createElement('img');
            img.id = "playedcardimg";
            img.src=hands[turn-1][i].src;
            document.getElementById("playedcard").appendChild(img);
            currentCard=hands[turn-1][i];

            // hands[index].slice(imgIdx,(imgIdx+1));
            let imgbtns = document.getElementById("hand"+(turn)).getElementsByClassName("card");
            for(let j=0;j<imgbtns.length;++j){
                let sLen = hands[turn-1][i].src.length;
                let c = document.getElementById("hand"+(turn)).getElementsByClassName("card")[j];
                if(hands[turn-1][i].src.localeCompare(c.src.substring(c.src.length-sLen))==0){
                    c.parentNode.removeChild(c);

                    //check for special cards
                    checkReverse(playedcard.type);
                    checkSkip(playedcard.type);
                    checkdraw2wild(playedcard.type);

                    let d = document.getElementById("hand"+(turn)).getElementsByClassName("card");
                    if(d.length<1){
                      announceWinner(turn);
                      return;
                    }

                    setTurn();
                    return;
                }
            }
        }
        else{
            return;
        }
        // incrementTurn();
        // setTurn();
    };
    img.height=30;
    img.width=20;
    document.getElementById("hand"+(turn)).appendChild(img);
}

function validPlay(playedcard){
    if(playedcard.type.localeCompare(currentCard.type)==0 || playedcard.color.localeCompare(currentCard.color)==0 || currentCard.color.localeCompare("none")==0
    || playedcard.color.localeCompare("none") == 0){
        return true;
    }
    console.log("not a valid card");
    return false;
}

function checkReverse(cardType){
    //if card is reverse, flip the reverse variable used in incrementCard()
    if(cardType.localeCompare("reverse")==0){
        reverse = !reverse;
    }
}

function checkSkip(cardType){
    if(cardType.localeCompare("skip")==0){
        skip = true;
        console.log("skip");
    }
}

function checkdraw2wild(cardType){
    if(cardType.localeCompare("draw2")==0){
        setTurn();
        alert("Draw 2 player "+turn);
        addCard();
        addCard();
        console.log("should be player "+turn+"'s turn")
    }

    //wild cards
    if(cardType.localeCompare("wild")==0){
        console.log("should be player "+turn+"'s turn");
    }
    if(cardType.localeCompare("wild+4")==0){
        setTurn();
        alert("Draw 4 player "+turn);
        addCard();
        addCard();
        addCard();
        addCard();
        console.log("should be player "+turn+"'s turn")
    }
}

//increments turn to next player's index, taking into account reverse and wrapping around
function incrementTurn(){
    if(!reverse){
        console.log("turn: "+turn);
        if(turn>7){
            turn=1;
        }
        else{
           turn++; 
        }
    }
    else{
        if(turn<2){
            turn=8;
        }
        else{
            turn--;
        }
    }
    for(var i =0; i<8; i++){
      if(hands[i].length>=1 && i!=(turn-1)){
        document.getElementById("hand"+(i+1)).style.display = "none";
      }
    }
    document.getElementById("hand"+(turn)).style.display = "block";
}

function setTurn(){
    incrementTurn();
    const playerlabels = document.getElementsByClassName("playername");
    for(var i =0; i<playerlabels.length; i++){
        //first, removes green turn box from all, then adds it after while loops
        playerlabels[i].classList.remove("currentturn");
    }
    //keeps incrementing "turn" index until player with a hand is reached
    while(hands[turn-1].length<1){
        incrementTurn();
    }

    //if card was a skip (set by checkSkip), incrementTurn until the next player with cards in their hand, 
    //incrementTurn to skip them, then repeat to reach the next player
    if(skip){
        while(hands[turn-1].length<1){
            incrementTurn();
        }
        incrementTurn();
        while(hands[turn-1].length<1){
            incrementTurn();
        }
        skip = false;
    }

    //add indicator for whose turn it is
    playerlabels[turn-1].classList.add("currentturn");
    console.log("Player "+turn+"'s turn");
}

function announceWinner(turn){
  let d = document.createElement("div");
  d.innerHTML += "<p>Player "+turn+" wins!</p>";
  document.getElementById("winner").appendChild(d);
  document.getElementById("winner").style.display = "block";
}


//how to access cards array
const cardvar = cards.find(c => c.color=="red" && c.type=="skip");
console.log(cardvar.src);


