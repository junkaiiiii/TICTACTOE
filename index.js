const boxes = document.querySelectorAll('.box');
const restartBtn = document.getElementById('btn');
const text = document.getElementById('gg');
let option=['','','','','','','','',''];
const winCondition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
let player = "X";
let runGame = true;


const startGame =() =>{
    boxes.forEach(box=>box.addEventListener('click',boxClicked))
    restartBtn.addEventListener('click',restartGame);
};

const boxClicked = (e) =>{
    const target = e.target.id;
    if (runGame){
        changeBox(e,target);
        checkWin()
        e.target.removeEventListener('click', boxClicked)
    }

};

const changeBox = (e,index) =>{
    option[index] = player
    e.target.textContent = player
    
};

const changePlayer = () =>{
    if (player =="X"){
        player = "O"
    }else{
        player ="X"
    }
    text.textContent = `${player}'s turn`
};


const checkWin = ()=>{
    let game = true;
    for(let i=0; i < winCondition.length ; i++){
        const condition = winCondition[i]
        const cellA = option[condition[0]]
        const cellB = option[condition[1]]
        const cellC = option[condition[2]]

        if (cellA=="" || cellB=="" || cellC=="") {
            continue
        }
        if(cellA==cellB && cellB==cellC && cellC!==""){
            game = false;
            break
        }
    }
    if (game==false){
        text.textContent=`${player} Won !`
        runGame = false;
    }
    else if(!option.includes('')){
        text.textContent=`Draw!!!`
        runGame = false;
    }
    else{
        changePlayer();
    }
}

const restartGame = () =>{
    player = 'X';
    option=['','','','','','','','',''];
    runGame = true;
    boxes.forEach(box => box.textContent="");
    text.textContent=`${player}'s turn`
    boxes.forEach(box=>box.addEventListener('click',boxClicked))
}

startGame()
