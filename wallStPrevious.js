//-----------------------------JQuery DOM ELEMENTS and Variable Declarations---------------------------------------
const $startGameButton = $('#start-game');   
const $closeStartModalButton = $('#close-button'); 
const $modalBox = $('.modal-instructions');
const $stockSymbolsSection = $('.stock-symbol-section');
const $stockSymbols = $('.stock-symbols');
let marketMove;
let eventMove;
let StartingMoney = 100000;


class Probabilities {
    constructor(){
    this.overallMarketDownDayProbability = 25;
    }
    stockSpecificRandomDirection() {
        return Math.ceil(Math.random()*101);
    }
    //This method is used to determine overall market move
    marketPercentageMove () {
        let random4OverallMarketMove = Math.ceil(Math.random() * 101);
        console.log(random4OverallMarketMove);
        switch (true) {
            case random4OverallMarketMove === 1: marketMove = -.25;
            break;
            case random4OverallMarketMove === 2: marketMove = -.20;
            break;
            case random4OverallMarketMove === 3: marketMove = -.18;
            break;
            case random4OverallMarketMove === 4: marketMove = -.15;
            break;
            case random4OverallMarketMove === 5:  marketMove = -.13;
            break;
            case random4OverallMarketMove >= 6 && random4OverallMarketMove <= 10:  marketMove = -.10;
            break;
            case random4OverallMarketMove >= 11 && random4OverallMarketMove <= 15:  marketMove = -.05;
            break;
            case random4OverallMarketMove >= 16 && random4OverallMarketMove <= 20:  marketMove = -.02;
            break;
            case random4OverallMarketMove >= 21 && random4OverallMarketMove <= 25:  marketMove = -.01;
            break;
            case random4OverallMarketMove >= 26 && random4OverallMarketMove <= 80:  marketMove = .02;
            break;
            case random4OverallMarketMove >= 80 && random4OverallMarketMove <= 90:  marketMove = .03;
            break;
            case random4OverallMarketMove >= 90 && random4OverallMarketMove <= 95:  marketMove = .05;
            break;
            case random4OverallMarketMove >= 96 && random4OverallMarketMove <= 100:  marketMove = .10;
            break;
        }
        return marketMove;
    }
    // This method is used for stock specific or life events that will impact money 
    eventMove() {
        let randomEventMove = Math.ceil(Math.random() * 101);
        console.log(randomEventMove);
        switch (true) {
            case randomEventMove === 1: eventMove = -.50;
                break;
            case randomEventMove === 2: eventMove = -.25;
                break;
            case randomEventMove === 3: eventMove = -.20;
                break;
            case randomEventMove === 4: eventMove = -.15;
                break;
            case randomEventMove === 5:  eventMove = -.10;
                break;
            case randomEventMove >= 6 && randomEventMove <= 30:  eventMove = -.02;
                break;
            default: eventMove = 0;
                break
        }
        return eventMove;
    }
}
    
   
class Stocks extends Probabilities {
    constructor(name, symbol, beta, stockPrice, overallMarketDownDayProbability){
        super(name, symbol, beta, overallMarketDownDayProbability);
        this.name = name;
        this.symbol =symbol;
        this.beta = beta;
        this.price = stockPrice;
    }
    stockMoveWithMarket() {
        let stockMoveWithMarket = this.price * (this.beta * this.marketPercentageMove());
        console.log(stockMoveWithMarket);
        return stockMoveWithMarket;
    }
    specialEvents() {

    }  
}


class Player {
    constructor(name,stockChoice){
        this.name = name;
        this.money = StartingMoney;
        this.stockChoice = stockChoice;
        
    }
    sharesOwned() {
        let sharesOwned = this.money / (eval(this.stockChoice).price)
        return sharesOwned;
    }
    portfolioValue() {
        
    }
    greedyProbability() {
        
    }
}

const facebook = new Stocks('Facebook','FB', 1.19, 279.70);
const amazon = new Stocks('Amazon','AMZN', 1.2, 3162.58);
const apple = new Stocks('Apple','AAPL', 1.28, 122.25);
const netflix = new Stocks('Netflix','NFLX', .93, 498.31);
const google = new Stocks('Google','GOOGL', 1.0, 1823.76);
const starbucks = new Stocks('Starbucks','SBUX', .81, 102.28);
const generalMarket = new Probabilities();
const player1 = new Player('Player 1','amazon');
const player2 = new Player('Player 2','starbucks');






$(()=>{


    
    //------------------------------VARIABLES---------------------------------------------------

   
        
    //-----------------------------OBJECTS-----------------------------------------------------
  
    
    
    //------------------------EVENT HANDLERS-------------------------------------------------
        $startGameButton.on('click',() => {
            $modalBox.show();
            $stockSymbols.removeClass('not-active');
            const wolf = $('<img>').attr('id','wolf').attr('src',"https://media2.giphy.com/media/EJMyMO22UxP68/200.gif");
            //$('body').append(wolf);
        })
        
        $closeStartModalButton.on('click',() => {
            $modalBox.hide();
        })
        
        })
        
    

