import { TweenLite, TweenMax  } from 'gsap';

const dom = document.querySelector('body');

const currentQuiz = dom.querySelector('#current-quiz')
const quizImg = dom.querySelector('.quiz-img');
const quizTitle = dom.querySelector('.quiz-title');

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
const qTen = dom.querySelector('#opt-ten');
const qEleven = dom.querySelector('#opt-eleven');
const qTwelve = dom.querySelector('#opt-twelve');
const qThirteen = dom.querySelector('#opt-thirteen');


//Store Options

window.addEventListener('DOMContentLoaded', () => {


    dom.querySelectorAll('.q-opt').forEach((questionOptions) => {
        questionOptions.addEventListener('click', (e) => {
            e.preventDefault()
            //@Go Two
            if (currentQuiz.innerHTML == 1) {
                quizImg.src = '/assets/img/age.svg';
                currentQuiz.innerHTML = '2'
                quizTitle.innerHTML = 'How old are you?';
    
                dom.querySelector('.q-one').classList.add('hidden')
                dom.querySelector('.q-two').classList.remove('hidden')
                qOne.innerHTML = e.target.querySelector('span').innerHTML;
                //@ Go Three
            } else if (currentQuiz.innerHTML == 2) {
                quizImg.src = '/assets/img/map.svg';
                currentQuiz.innerHTML = '3'
                quizTitle.innerHTML = 'Where do you live?';
    
                dom.querySelector('.q-two').classList.add('hidden')
                dom.querySelector('.q-three').classList.remove('hidden')
                qTwo.innerHTML = e.target.querySelector('span').innerHTML;
                //@ Go Four
            } else if (currentQuiz.innerHTML == 3) {
                quizImg.src = '/assets/img/health.svg';
                currentQuiz.innerHTML = '4'
                quizTitle.innerHTML = 'How physically healthy are you?';
    
                dom.querySelector('.q-three').classList.add('hidden')
                dom.querySelector('.q-four').classList.remove('hidden')
                qThree.innerHTML = e.target.querySelector('span').innerHTML;
                //@ Go Five
            } else if (currentQuiz.innerHTML == 4) {
                quizImg.src = '/assets/img/parents.svg';
                currentQuiz.innerHTML = '5'
                quizTitle.innerHTML = 'Enter the number of the adults in your household';
    
                dom.querySelector('.q-four').classList.add('hidden')
                dom.querySelector('.q-five').classList.remove('hidden')
                qFour.innerHTML = e.target.querySelector('span').innerHTML;
            } else if (currentQuiz.innerHTML == 13) {
                qThirteen.innerHTML = e.target.querySelector('span').innerHTML;

                dom.querySelector('.content').classList.add('hidden')
                dom.querySelector('.q-thirteen').classList.add('hidden')
                dom.querySelector('.results-wrapper').classList.remove('hidden')

                dom.querySelector('.white-h').style.display = 'none'
                dom.querySelector('.hooray').classList.remove('hidden')
                dom.querySelector('#procceed').style.display = 'none'
                calculate()

            }
    
    
    
            //Animate el 
            animateEl()
        })
    })


    //@Forms 
    //@01 Go Six
    dom.querySelector('#to-six').addEventListener('click', (e) => {
        if (dom.querySelector('#adults').value != '') {
            qFive.innerHTML = dom.querySelector('#adults').value;
       
            quizImg.src = '/assets/img/child.svg';
            currentQuiz.innerHTML = '6'
            quizTitle.innerHTML = 'Enter the number of children in your household';
    
            dom.querySelector('.q-five').classList.add('hidden')
            dom.querySelector('.q-six').classList.remove('hidden')
        }
        animateEl()
    })
       //@02 Go Seven
       dom.querySelector('#to-seven').addEventListener('click', (e) => {
        if (dom.querySelector('#child').value != '') {
            qSix.innerHTML = dom.querySelector('#child').value;
       
            quizImg.src = '/assets/img/washroom.svg';
            currentQuiz.innerHTML = '7'
            quizTitle.innerHTML = 'How many toilet visits a day in your household?';
    
            dom.querySelector('.q-six').classList.add('hidden')
            dom.querySelector('.q-seven').classList.remove('hidden')
        }
        animateEl()
       })
    
          //@03 Go Eight
          dom.querySelector('#to-eight').addEventListener('click', (e) => {
            if (dom.querySelector('#toilet').value != '') {
                qSeven.innerHTML = dom.querySelector('#toilet').value;
           
                quizImg.src = '/assets/img/mealeat.svg';
                currentQuiz.innerHTML = '8'
                quizTitle.innerHTML = 'How many meals are eaten in a day in your household?';
        
                dom.querySelector('.q-seven').classList.add('hidden')
                dom.querySelector('.q-eight').classList.remove('hidden')
            }
            animateEl()
          })
          //@04 Go Nine
          dom.querySelector('#to-nine').addEventListener('click', (e) => {
            if (dom.querySelector('#mealseat').value != '') {
                /* Pre */
                qEight.innerHTML = dom.querySelector('#mealseat').value;
           
                /* Post */
                quizImg.src = '/assets/img/water.svg';
                currentQuiz.innerHTML = '9'
                quizTitle.innerHTML = 'How many water bottles are drunken in a day in your household?';
        
                dom.querySelector('.q-eight').classList.add('hidden')
                dom.querySelector('.q-nine').classList.remove('hidden')
            }
            animateEl()
          })
       //@05 Go Ten
       dom.querySelector('#to-ten').addEventListener('click', (e) => {
        if (dom.querySelector('#waterdrink').value != '') {
            /* Pre */
            qNine.innerHTML = dom.querySelector('#waterdrink').value;
       
            /* Post */
            quizImg.src = '/assets/img/pasta.svg';
            currentQuiz.innerHTML = '10'
            quizTitle.innerHTML = 'Enter the number of week’s food supply you wish to store?';
    
            dom.querySelector('.q-nine').classList.add('hidden')
            dom.querySelector('.q-ten').classList.remove('hidden')
        }
        animateEl()
       })
       //@06 Go Nine
       dom.querySelector('#to-eleven').addEventListener('click', (e) => {
        if (dom.querySelector('#weeksfood').value != '') {
            /* Pre */
            qTen.innerHTML = dom.querySelector('#weeksfood').value;
       
            /* Post */
            quizImg.src = '/assets/img/water.svg';
            currentQuiz.innerHTML = '11'
            quizTitle.innerHTML = 'Enter the number of week’s water supply you wish to store?';
    
            dom.querySelector('.q-ten').classList.add('hidden')
            dom.querySelector('.q-eleven').classList.remove('hidden')
        }
        animateEl()
       })
    
        //@07 Go Nine
        dom.querySelector('#to-twelve').addEventListener('click', (e) => {
        if (dom.querySelector('#weekswater').value != '') {
            /* Pre */
            qEleven.innerHTML = dom.querySelector('#weekswater').value;
        
            /* Post */
            quizImg.src = '/assets/img/toiletpaper.svg';
            currentQuiz.innerHTML = '12'
            quizTitle.innerHTML = 'Enter the number of week’s toilet paper supply you wish to store?';
    
            dom.querySelector('.q-eleven').classList.add('hidden')
            dom.querySelector('.q-twelve').classList.remove('hidden')
        }
        animateEl()
    })

        //@07 Go Nine
        dom.querySelector('#to-thirteen').addEventListener('click', (e) => {
            if (dom.querySelector('#weekspaper').value != '') {
                /* Pre */
                qTwelve.innerHTML = dom.querySelector('#weekspaper').value;
            
                /* Post */
                quizImg.src = '/assets/img/sword.svg';
                currentQuiz.innerHTML = '13'
                quizTitle.innerHTML = 'What is your favorite weapon?';
        
                dom.querySelector('.q-twelve').classList.add('hidden')
                dom.querySelector('.q-thirteen').classList.remove('hidden')
            }
            animateEl()
        })



}) //End EventListener




dom.querySelector('#restart').addEventListener('click', () => {
    location.reload()
})


const animateEl = () => {
    TweenMax.from('.quiz-img', .3, { y: 30, opacity: 0, delay: .1 });
    TweenMax.from('.quiz-title', .3, { y: 30, opacity: 0 , delay: .2});
    TweenMax.from('.options', .4, { y: 20, opacity: 0, delay: .1 });
}




const calculate = () => {
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
