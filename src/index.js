import { TweenLite, TweenMax  } from 'gsap';

const dom = document.querySelector('body');


//Values Holder


    const qOne = dom.querySelector('#opt-one span');
const qTwo = dom.querySelector('#opt-two  span');
const qThree = dom.querySelector('#opt-three  span');
const qFour = dom.querySelector('#opt-four  span');
const qFive = dom.querySelector('#opt-five  span');
const qSix = dom.querySelector('#opt-six  span');
const qSeven = dom.querySelector('#opt-seven  span');
const qEight = dom.querySelector('#opt-eight  span');








dom.querySelector('.tweet').addEventListener('click', (e) => {
    e.preventDefault()

    var url = 'www.pandemicbuying.com';
    var text = "Pandemic Buying! How much stuff should you store?";
    window.open('http://twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');

})






// String padding without ECMA6
String.prototype.paddingLeft = function (paddingValue) {
    return String(paddingValue + this).slice(-paddingValue.length);
};


function calculate() {

        const adultVal = dom.querySelector('#adults').value;
        const childrenVal = dom.querySelector('#children').value;
        const weeksVal = dom.querySelector('#weeks').value;
      
      
      
    


    // default input values
    let inputs = {
        adults: adultVal,
        children: childrenVal,
        weeks: weeksVal
    }
    
    // counters
    let people = 0.0,
        period = 0.0,
        water  = 0.0;

    // results
    let food = {
    }
    
    // children eat less food
    people  = inputs.adults   * 1.0;
    people += inputs.children * 0.65;
    
    // children need as much water as adults
    water   = inputs.adults   * 2.0;
    water  += inputs.children * 2.0;
    
    // weeks, no modifier
    period  = inputs.weeks    * 1.0;
    
    // required food, divided by 2.205 (LBS to KG)
    food.grain  = Math.ceil(people * period * 7.692 / 2.205);
    food.beans  = Math.ceil(people * period * 1.154 / 2.205);
    food.dairy  = Math.ceil(people * period * 0.576 / 2.205);
    food.sugar  = Math.ceil(people * period * 1.154 / 2.205);
    food.leaven = Math.ceil(people * period * 0.115 / 2.205);
    food.salt   = Math.ceil(people * period * 0.115 / 2.205);
    food.fat    = Math.ceil(people * period * 0.577 / 2.205);
    
    // required water, 1 week or 2-weeks of minimum recommended supply,
    // multiplied by 3.785 (GAL TO L)
    if (period < 2) {
        food.water = Math.ceil(water * 7.0  * 3.785);
    } else {
        food.water = Math.ceil(water * 14.0 * 3.785);
    }

    
    console.log("How Much Do You Need to Store?\n");
    console.log("Always rotate your stored food into your normal diet,\nusing up the oldest products first. This will save you\na lot of money and prevent waste.\n");
    
    console.log("Recommended Basic Food Storage Amounts\n");
    console.log("Each category below gives you a variety of choices and\na total weight. You should store the items you like to\neat and know how to use. Weights (except fats) are for\ndry or dehydrated foods.\n");

    let padding = "    ";
    console.log("Grain  :", food.grain.toString().paddingLeft(padding),  "kg", "(wheat, white rice, oats, corn, barley, pasta, etc.)");
    console.log("Beans  :", food.beans.toString().paddingLeft(padding),  "kg", "(dried beans, split peas, lentils, nuts, etc.)");
    console.log("Dairy  :", food.dairy.toString().paddingLeft(padding),  "kg", "(powdered milk, cheese powder, canned cheese, etc.)");
    console.log("Sugar  :", food.sugar.toString().paddingLeft(padding),  "kg", "(white sugar, brown sugar, syrup, molasses, honey, etc.)");
    console.log("Leaven :", food.leaven.toString().paddingLeft(padding), "kg", "(yeast, baking powder, powdered eggs, etc.)");
    console.log("Salt   :", food.salt.toString().paddingLeft(padding),   "kg", "(table salt, sea salt, soy sauce, bouillon, etc.)");
    console.log("Fat    :", food.fat.toString().paddingLeft(padding), "kg", "(vegetable oils, shortening, canned butter, etc.)");
    
     qOne.innerHTML = `${food.grain.toString().paddingLeft(padding)}  kg (wheat, white rice, oats, corn, barley, pasta, etc.)`;
     qTwo.innerHTML = `${food.beans.toString().paddingLeft(padding)}  kg (dried beans, split peas, lentils, nuts, etc.)`;
     qThree.innerHTML = `${food.dairy.toString().paddingLeft(padding)}  kg (powdered milk, cheese powder, canned cheese, etc.)`;
     qFour.innerHTML = `${food.sugar.toString().paddingLeft(padding)}  kg (white sugar, brown sugar, syrup, molasses, honey, etc.)`;
     qFive.innerHTML = `${food.leaven.toString().paddingLeft(padding)} kg (yeast, baking powder, powdered eggs, etc.)`;
     qSix.innerHTML = `${food.salt.toString().paddingLeft(padding)}   kg (table salt, sea salt, soy sauce, bouillon, etc.)`;
     qSeven.innerHTML = `${food.fat.toString().paddingLeft(padding)}    kg (vegetable oils, shortening, canned butter, etc.)`;
     qEight.innerHTML = `${food.water.toString().paddingLeft(padding)} L`;

    console.log();
    console.log("NOTE: The amount of water shown is a 1-week or 2-week\nof minimum recommended supply. It is rarely practical\nto store more. We suggest that you store this amount\nand supplement kit with a good water filter or water\npurification kit.\n");


    dom.querySelector('.result').style.display = 'block'
   

   
}



//@Call
dom.querySelector('#calc').addEventListener('click', (e) => {
    e.preventDefault()
    
    calculate();
})
//@ Clear Calc
dom.querySelector('#clear-calc').addEventListener('click', (e) => {
    e.preventDefault()
    dom.querySelector('.result').style.display = 'none'

})
    



//@Bring Food
dom.querySelectorAll('.--trig-food-calc').forEach((foodCalc) => {
    foodCalc.addEventListener('click', (e) => {
        e.preventDefault()
        TweenMax.to('.wrapper-v', .5, { x: '0%' })
        TweenMax.to('#root', .5, {x: '130%'})

        dom.querySelector('#take-it').style.display = 'none'
        dom.querySelector('#bring-it').style.display = 'block'
    })
})


//@Bring back paper
dom.querySelectorAll('.--trig-paper-calc').forEach((foodCalc) => {
    foodCalc.addEventListener('click', (e) => {
        e.preventDefault()
        TweenMax.to('.wrapper-v', .5, { x: '-130%' })
        TweenMax.to('#root', .5, {x: '0%'})

        dom.querySelector('#take-it').style.display = 'block'
        dom.querySelector('#bring-it').style.display = 'none'
    })
})

//@Menu

dom.querySelector('.menu').addEventListener('click', (e) => {
    e.preventDefault()

    TweenMax.to('.mobile-nav', .2, {y: '0%'})
})

dom.querySelectorAll('.mobile-nav span, .mobile-nav a').forEach((mobLinks) => {
    mobLinks.addEventListener('click', () => {
        TweenMax.to('.mobile-nav', .2, {y: '-100%'})
    })
})