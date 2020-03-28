import { TweenLite, TweenMax  } from 'gsap';

const dom = document.querySelector('body');





// const currentQuiz = dom.querySelector('#current-quiz')
// const quizImg = dom.querySelector('.quiz-img');
// const quizTitle = dom.querySelector('.quiz-title');

//Values Holder
const qOne = dom.querySelector('#opt-one');
const qTwo = dom.querySelector('#opt-two');
const qThree = dom.querySelector('#opt-three');
const qFour = dom.querySelector('#opt-four');
const qFive = dom.querySelector('#opt-five');
const qSix = dom.querySelector('#opt-six');
const qSeven = dom.querySelector('#opt-seven');
const qEight = dom.querySelector('#opt-eight');
const qNine = dom.querySelector('#opt-nine');
// const qTen = dom.querySelector('#opt-ten');
// const qEleven = dom.querySelector('#opt-eleven');
// const qTwelve = dom.querySelector('#opt-twelve');
// const qThirteen = dom.querySelector('#opt-thirteen');


// //Store Options

// window.addEventListener('DOMContentLoaded', () => {


//     dom.querySelectorAll('.q-opt').forEach((questionOptions) => {
//         questionOptions.addEventListener('click', (e) => {
//             e.preventDefault()
//             //@Go Two
//             if (currentQuiz.innerHTML == 1) {
//                 quizImg.src = '/assets/img/age.svg';
//                 currentQuiz.innerHTML = '2'
//                 quizTitle.innerHTML = 'How old are you?';
    
//                 dom.querySelector('.q-one').classList.add('hidden')
//                 dom.querySelector('.q-two').classList.remove('hidden')
//                 qOne.innerHTML = e.target.querySelector('span').innerHTML;
//                 //@ Go Three
//             } else if (currentQuiz.innerHTML == 2) {
//                 quizImg.src = '/assets/img/map.svg';
//                 currentQuiz.innerHTML = '3'
//                 quizTitle.innerHTML = 'Where do you live?';
    
//                 dom.querySelector('.q-two').classList.add('hidden')
//                 dom.querySelector('.q-three').classList.remove('hidden')
//                 qTwo.innerHTML = e.target.querySelector('span').innerHTML;
//                 //@ Go Four
//             } else if (currentQuiz.innerHTML == 3) {
//                 quizImg.src = '/assets/img/health.svg';
//                 currentQuiz.innerHTML = '4'
//                 quizTitle.innerHTML = 'How physically healthy are you?';
    
//                 dom.querySelector('.q-three').classList.add('hidden')
//                 dom.querySelector('.q-four').classList.remove('hidden')
//                 qThree.innerHTML = e.target.querySelector('span').innerHTML;
//                 //@ Go Five
//             } else if (currentQuiz.innerHTML == 4) {
//                 quizImg.src = '/assets/img/parents.svg';
//                 currentQuiz.innerHTML = '5'
//                 quizTitle.innerHTML = 'Enter the number of the adults in your household';
    
//                 dom.querySelector('.q-four').classList.add('hidden')
//                 dom.querySelector('.q-five').classList.remove('hidden')
//                 qFour.innerHTML = e.target.querySelector('span').innerHTML;
//             } else if (currentQuiz.innerHTML == 13) {
//                 qThirteen.innerHTML = e.target.querySelector('span').innerHTML;

//                 dom.querySelector('.content').classList.add('hidden')
//                 dom.querySelector('.q-thirteen').classList.add('hidden')
//                 dom.querySelector('.results-wrapper').classList.remove('hidden')

//                 dom.querySelector('.white-h').style.display = 'none'
//                 dom.querySelector('.hooray').classList.remove('hidden')
//                 dom.querySelector('#procceed').style.display = 'none'
//                 calculateRolls()

//             }
    
    
    
//             //Animate el 
//             animateEl()
//         })
//     })


//     //@Forms 
//     //@01 Go Six
//     dom.querySelector('#to-six').addEventListener('click', (e) => {
//         if (dom.querySelector('#adults').value != '') {
//             qFive.innerHTML = dom.querySelector('#adults').value;
       
//             quizImg.src = '/assets/img/child.svg';
//             currentQuiz.innerHTML = '6'
//             quizTitle.innerHTML = 'Enter the number of children in your household';
    
//             dom.querySelector('.q-five').classList.add('hidden')
//             dom.querySelector('.q-six').classList.remove('hidden')
//         }
//         animateEl()
//     })
//        //@02 Go Seven
//        dom.querySelector('#to-seven').addEventListener('click', (e) => {
//         if (dom.querySelector('#child').value != '') {
//             qSix.innerHTML = dom.querySelector('#child').value;
       
//             quizImg.src = '/assets/img/washroom.svg';
//             currentQuiz.innerHTML = '7'
//             quizTitle.innerHTML = 'How many toilet visits a day in your household?';
    
//             dom.querySelector('.q-six').classList.add('hidden')
//             dom.querySelector('.q-seven').classList.remove('hidden')
//         }
//         animateEl()
//        })
    
//           //@03 Go Eight
//           dom.querySelector('#to-eight').addEventListener('click', (e) => {
//             if (dom.querySelector('#toilet').value != '') {
//                 qSeven.innerHTML = dom.querySelector('#toilet').value;
           
//                 quizImg.src = '/assets/img/mealeat.svg';
//                 currentQuiz.innerHTML = '8'
//                 quizTitle.innerHTML = 'How many meals are eaten in a day in your household?';
        
//                 dom.querySelector('.q-seven').classList.add('hidden')
//                 dom.querySelector('.q-eight').classList.remove('hidden')
//             }
//             animateEl()
//           })
//           //@04 Go Nine
//           dom.querySelector('#to-nine').addEventListener('click', (e) => {
//             if (dom.querySelector('#mealseat').value != '') {
//                 /* Pre */
//                 qEight.innerHTML = dom.querySelector('#mealseat').value;
           
//                 /* Post */
//                 quizImg.src = '/assets/img/water.svg';
//                 currentQuiz.innerHTML = '9'
//                 quizTitle.innerHTML = 'How many water bottles are drunken in a day in your household?';
        
//                 dom.querySelector('.q-eight').classList.add('hidden')
//                 dom.querySelector('.q-nine').classList.remove('hidden')
//             }
//             animateEl()
//           })
//        //@05 Go Ten
//        dom.querySelector('#to-ten').addEventListener('click', (e) => {
//         if (dom.querySelector('#waterdrink').value != '') {
//             /* Pre */
//             qNine.innerHTML = dom.querySelector('#waterdrink').value;
       
//             /* Post */
//             quizImg.src = '/assets/img/pasta.svg';
//             currentQuiz.innerHTML = '10'
//             quizTitle.innerHTML = 'Enter the number of week’s food supply you wish to store?';
    
//             dom.querySelector('.q-nine').classList.add('hidden')
//             dom.querySelector('.q-ten').classList.remove('hidden')
//         }
//         animateEl()
//        })
//        //@06 Go Nine
//        dom.querySelector('#to-eleven').addEventListener('click', (e) => {
//         if (dom.querySelector('#weeksfood').value != '') {
//             /* Pre */
//             qTen.innerHTML = dom.querySelector('#weeksfood').value;
       
//             /* Post */
//             quizImg.src = '/assets/img/water.svg';
//             currentQuiz.innerHTML = '11'
//             quizTitle.innerHTML = 'Enter the number of week’s water supply you wish to store?';
    
//             dom.querySelector('.q-ten').classList.add('hidden')
//             dom.querySelector('.q-eleven').classList.remove('hidden')
//         }
//         animateEl()
//        })
    
//         //@07 Go Nine
//         dom.querySelector('#to-twelve').addEventListener('click', (e) => {
//         if (dom.querySelector('#weekswater').value != '') {
//             /* Pre */
//             qEleven.innerHTML = dom.querySelector('#weekswater').value;
        
//             /* Post */
//             quizImg.src = '/assets/img/toiletpaper.svg';
//             currentQuiz.innerHTML = '12'
//             quizTitle.innerHTML = 'Enter the number of week’s toilet paper supply you wish to store?';
    
//             dom.querySelector('.q-eleven').classList.add('hidden')
//             dom.querySelector('.q-twelve').classList.remove('hidden')
//         }
//         animateEl()
//     })

//         //@07 Go Nine
//         dom.querySelector('#to-thirteen').addEventListener('click', (e) => {
//             if (dom.querySelector('#weekspaper').value != '') {
//                 /* Pre */
//                 qTwelve.innerHTML = dom.querySelector('#weekspaper').value;
            
//                 /* Post */
//                 quizImg.src = '/assets/img/sword.svg';
//                 currentQuiz.innerHTML = '13'
//                 quizTitle.innerHTML = 'What is your favorite weapon?';
        
//                 dom.querySelector('.q-twelve').classList.add('hidden')
//                 dom.querySelector('.q-thirteen').classList.remove('hidden')
//             }
//             animateEl()
//         })



// }) //End EventListener




// dom.querySelector('#restart').addEventListener('click', () => {
//     location.reload()
// })


// const animateEl = () => {
//     TweenMax.from('.quiz-img', .3, { y: 30, opacity: 0, delay: .3 });
//     TweenMax.from('.quiz-title', .3, { y: 30, opacity: 0 , delay: .4});
//     TweenMax.from('.options', .4, { y: 20, opacity: 0, delay: .3 });
// }




const calculateRolls = () => {
    let standardDays = 60;

    let household = parseInt(qFive.innerHTML,) + parseInt(qSix.innerHTML);
    let visit = standardDays / parseInt(qSeven.innerHTML); //Visti To Toilet
    let visitAndPeople = household / visit;
    let toiletPaperTobeStored = parseInt(qTwelve.innerHTML);
    let waterDrunkDaily = parseInt(qNine.innerHTML);
    let waterStore = parseInt(qEleven.innerHTML)

    let estimateToiletPaperNeed = toiletPaperTobeStored / visitAndPeople;
    let estimateWaterNeeded = waterStore / waterDrunkDaily; 

    let suggestWaterNeeded = waterDrunkDaily * household * 7;
    
    
    dom.querySelector('.colored-h').style.display = 'none'
    //@Rolls
    dom.querySelector('#rolls-stored').innerHTML = toiletPaperTobeStored;
    if (Math.trunc(estimateToiletPaperNeed) == 'Infinity' || estimateToiletPaperNeed == 'Infinity' ) {
        dom.querySelector('#rolls-days').innerHTML = '0'
    } else {
        dom.querySelector('#rolls-days').innerHTML = Math.trunc(estimateToiletPaperNeed);

    }

    //@Water
    dom.querySelector('#water-stored').innerHTML = waterStore;
    dom.querySelector('#water-days').innerHTML = Math.trunc(estimateWaterNeeded)

    //@Suggest water
    // dom.querySelector('#waterDrunk').innerHTML = waterDrunkDaily;
    // dom.querySelector('#suggestWater').innerHTML = Math.trunc(suggestWaterNeeded)

}



dom.querySelector('.tweet').addEventListener('click', (e) => {
    e.preventDefault()

    var url = 'www.pandemicbuying.com';
    var text = "Pandemic Buying! How much stuff should you store?";
    window.open('http://twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');

})


//@Calculate Cost of Stuff
dom.querySelector('.--trig-est').addEventListener('click', () => {
    TweenMax.to('.app', .3, { x: '0%' })
})

dom.querySelector('.close-est').addEventListener('click', () => {
    TweenMax.to('.app', .3, { x: '100%' })
})



// String padding without ECMA6
String.prototype.paddingLeft = function (paddingValue) {
    return String(paddingValue + this).slice(-paddingValue.length);
};


function calculate() {

        let standardDays = 60;
        const adultVal = dom.querySelector('#adults').value;
        const childrenVal = dom.querySelector('#children').value;
        const weeksVal = dom.querySelector('#weeks').value;
        const toiletVisit = dom.querySelector('#toilet').value;
        const rolls = dom.querySelector('#rolls').value;

    //@Rolls
        let household = parseInt(adultVal) + parseInt(childrenVal);
        let visit = standardDays / parseInt(toiletVisit); //Visti To Toilet
        let visitAndPeople = household / visit;
        let toiletPaperTobeStored = parseInt(rolls);
        let estimateToiletPaperNeed = toiletPaperTobeStored / visitAndPeople;
        qNine.innerHTML = `Toilet Rolls: ${rolls} that will last ${Math.trunc(estimateToiletPaperNeed)} days`;
    


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
    
     qOne.innerHTML = `Grain: ${food.grain.toString().paddingLeft(padding)}  kg (wheat, white rice, oats, corn, barley, pasta, etc.)`;
     qTwo.innerHTML = `Beans  : ${food.beans.toString().paddingLeft(padding)}  kg (dried beans, split peas, lentils, nuts, etc.)`;
     qThree.innerHTML = `Dairy  : ${food.dairy.toString().paddingLeft(padding)}  kg (powdered milk, cheese powder, canned cheese, etc.)`;
     qFour.innerHTML = `Sugar  : ${food.sugar.toString().paddingLeft(padding)}  kg (white sugar, brown sugar, syrup, molasses, honey, etc.)`;
     qFive.innerHTML = `Leaven : ${food.leaven.toString().paddingLeft(padding)} kg (yeast, baking powder, powdered eggs, etc.)`;
     qSix.innerHTML = `Salt   : ${food.salt.toString().paddingLeft(padding)}   kg (table salt, sea salt, soy sauce, bouillon, etc.)`;
     qSeven.innerHTML = `Fat    : ${food.fat.toString().paddingLeft(padding)}    kg (vegetable oils, shortening, canned butter, etc.)`;
     qEight.innerHTML = `Water  : ${food.water.toString().paddingLeft(padding)} L`;

    console.log();
    console.log("NOTE: The amount of water shown is a 1-week or 2-week\nof minimum recommended supply. It is rarely practical\nto store more. We suggest that you store this amount\nand supplement kit with a good water filter or water\npurification kit.\n");


    dom.querySelector('#notee').innerHTML = 'Each category below gives you a variety of choices and a total weight. You should store the items you like to eat and know how to use. (Weights except fats) are for dry or dehydrated foods.';
    dom.querySelector('#note').innerHTML = 'NOTE: The amount of water shown is an estimate of the given week(s). It is rarely practical to store more. We suggest that you store this amount and supplement kit with a good water filter or water purification kit.';

    dom.querySelector('.result').style.display = 'block'
}


//@Call
dom.querySelector('#calc').addEventListener('click', (e) => {
    e.preventDefault()
    
    calculate();
})





