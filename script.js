        const gameBoard = document.querySelector('.game-board');
        const numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
        let flippedCards = [];
        let matchedCards = [];
        let canFlip = true;
        let check=0;

        function init(){
            const gameBoard=document.querySelector('.game-board');
            numbers.sort(()=>Math.random()-0.5)
            numbers.forEach(number=>{
                const card=createCard(number);
                gameBoard.append(card);
            })
            
        }
        init();

        function createCard(number){
            const card=document.createElement('div');
            card.classList.add('card')
            card.dataset.number=number;
            card.textContent="?"
            card.addEventListener('click',flipCard);
            // card.addEventListener('click',style);
            return card;

        }


        function flipCard(){
            if(!canFlip || flipCard.length>=2 || this.classList.contains('flipped') || matchedCards.includes(this)) return;
            this.textContent=this.dataset.number;
            this.classList.add('flipped');
            flippedCards.push(this);
            check++;
            document.getElementById('count').innerHTML="Check Count : "+Math.floor(check/2);
           // console.log(check+" "+Math.floor(check/2))
            if(flippedCards.length===2) checkMatch();


        }
      //  console.log(flippedCards)
        function checkMatch(){
            canFlip=false;
            setTimeout(()=>{
                const cardOne=flippedCards[0];
            const cardTwo=flippedCards[1];
            if(cardOne.dataset.number===cardTwo.dataset.number){
                matchedCards.push(cardOne);
                matchedCards.push(cardTwo);
                if(matchedCards.length==numbers.length){
                    alert('Congratulations !!! You Won the Game');
                    init();
                }

            }else{
               cardOne.textContent="?";
               cardTwo.textContent="?";
               cardOne.classList.remove('flipped');
               cardTwo.classList.remove('flipped');

            }
            flippedCards=[];
            canFlip=true;

            },1000)
          
      
            


        }

