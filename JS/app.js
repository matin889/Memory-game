let playerOne;
let playerTwo;
const gameArea = document.getElementById('game-area');

// let card = document.createElement('div');
//     card.id = 'icon-holder';
//     gameArea.append(card);
//     console.log(card);

let cars = ['car1', 'car2', 'car3', 'car4', 'car5', 'car6', 'car7', 'car8', 'car9', 'car10', 'car11', 'car12','car1', 'car2', 'car3', 'car4', 'car5', 'car6', 'car7', 'car8', 'car9', 'car10', 'car11', 'car12'];
let lock = ['lock', 'lock', 'lock', 'lock', 'lock', 'lock', 'lock', 'lock', 'lock', 'lock', 'lock', 'lock','lock', 'lock', 'lock', 'lock', 'lock', 'lock', 'lock', 'lock', 'lock', 'lock', 'lock', 'lock']    

    for(let i = 0; i < 24; i++) {
        let card = document.createElement('div');
        card.classList.add('icon-holder');
        card.id = cars[i];
        gameArea.append(card);
        // console.log(card);
        let showImage = document.createElement('img');
        showImage.id = cars[i];
        showImage.classList.add('back');
        showImage.src = 'image/' + cars[i] + '.png';
        card.appendChild(showImage);
        let hideImage = document.createElement('img');
        hideImage.id = lock[i];
        hideImage.classList.add('front');
        hideImage.src = 'image/' + lock[i] + '.png';
        card.appendChild(hideImage);
       
    }
    
        let cards = document.querySelectorAll('.icon-holder');
        // console.log(cards);
        let hasFlippedCard = false;
        let lockBoard = false;
        let firstCard, secondCard;
        cards.forEach(card => card.addEventListener('click', flipcard));
        function flipcard() 
        {   if(lockBoard) return;
            if(this === firstCard) return;
            this.classList.toggle('flip');
            if(!hasFlippedCard) {
                hasFlippedCard = true;
                firstCard = this;
            } else {
                hasFlippedCard = false;
                secondCard = this;
                checkMatching();
            }
        }

        function checkMatching () 
        {   let cardsMatched = firstCard.id === secondCard.id;
            cardsMatched ? matchCards() : unmatchCards();
            // if(firstCard.id === secondCard.id) {
            //     matchCards();
            // } else {
            //     unmatchCards();
            // } 
        }

        function matchCards() 
        {
            firstCard.removeEventListener('click', flipcard);
            secondCard.removeEventListener('click', flipcard);
            resetBoard()
        }

        function unmatchCards() 
        {   lockBoard = true;
            setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
            }, 1500);
        }

        function resetBoard() {
            [hasFlippedCard, lockBoard] = [false, false];
            [firstCard, secondCard] = [null, null];
        }

        (function shuffle() 
        {
            cards.forEach(card => {
                let randomCards = Math.floor(Math.random() * 24);
                card.style.order = randomCards;
            })
        })();