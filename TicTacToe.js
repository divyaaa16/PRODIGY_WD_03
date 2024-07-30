let boxes=document.querySelectorAll(".box");//access boxes

let resetBtn=document.querySelector("#reset");//access reset button

let newGameBtn=document.querySelector("#new-btn");
let msgContainer =document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");
let chance=document.querySelector("#chance");
let count=0;
let turnO=true;//player X, or,player O 
let excited=document.querySelector(".excited");
let sad=document.querySelector(".sad");



//winning patterns
//2D array
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetGame=()=>{
    turnO=true;
    count = 0;
    enableBoxes();   
    msgContainer.classList.add("hide");
   
   }
   

boxes.forEach((box)=>{
    box.addEventListener("click" ,()=>{
       
// console.log("box was clicked");
chance.style.display ="none";
if(turnO){//player o ki turn
    
    box.innerText="O";
    box.style.color="blue";
    turnO=false;

}
else{
  
    box.innerText="X";
    box.style.color="purple";
    turnO=true;
}


box.disabled=true;//------even if we again click the same box its balue will not change
count++;
// checkWinner();

 let isWinner=checkWinner();
 
    if (count === 9 && !isWinner) {
        gameDraw();
      }

    });
});

const gameDraw = () => {
    msg.innerText = `Oops !...Game was a Draw.`;
    sad.setAttribute("style","display:block");
    msgContainer.classList.remove("hide");
    disableBoxes();
    excited.setAttribute("style","display:none");

   
  };

const disableBoxes=()=>{
for(let box of boxes){
    box.disabled=true;
}//to disable all the boxes when the winner is announced
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
  

msg.innerText=`Congratulations winner is player  ${winner} `;
msgContainer.classList.remove("hide");
disableBoxes();

sad.setAttribute("style","display:none");



}
const checkWinner=()=>{
    for(let pattern of winPatterns){
     let pos1Val=boxes[pattern[0]].innerText;
     let pos2Val=boxes[pattern[1]].innerText;
     let pos3Val=boxes[pattern[2]].innerText;

     if(pos1Val !="" && pos2Val !="" &&pos3Val !=""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
           console.log("winner" ,pos1Val);
           showWinner(pos1Val);
           return true;
        }
        
     }

    }
    
};
 newGameBtn.addEventListener("click" ,resetGame);
 resetBtn.addEventListener("click" ,resetGame);















