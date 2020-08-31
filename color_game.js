
var col=[];
var i,j,k;
var gameOver;
var colours=[];
var blocks=document.querySelectorAll(".square");
var colorPicked;
var MainDisplay = document.querySelector("#headDisplay");
var newd = document.getElementById("new");
var ans = document.querySelector("#answer");
var headd = document.querySelector("#head");
var easyd = document.querySelector(".mode");
var hardd = document.querySelectorAll(".mode")[1];
var c=1;

function reset()
{

newd.textContent = "NEW COLORS";
ans.textContent = "";
headd.style.backgroundColor = "blue";
gameOver = false;
}

function randomg(n)
{
for(i=0;i<n;i++)
{
    col[i]=[];
for(j=0;j<3;j++)
{ 
    if(j!==2||i===0)
    col[i][j]=Math.floor(Math.random()*256);
    else
    {
        for(k=0;k<i;k++)
        {
            if(col[k][j-2]===col[i][j-2]&&col[k][j-1]===col[i][j-1])
            {do{
                col[i][j]=Math.floor(Math.random()*256);
            }
            while(col[i][j]===col[k][j])}
            else
            col[i][j]=Math.floor(Math.random()*256);
        }
    }
}
}

for(i=0;i<n;i++)
{
    colours[i] = "rgb("
    for(j=0;j<3;j++)
    {if(j!=2)
    colours[i] = colours[i] + col[i][j] + ", ";
    else
    colours[i] = colours[i] + col[i][j] + ")";}
}
}

function assign(n)
{
for(i=0;i<n;i++)
{
    blocks[i].style.backgroundColor=colours[i];
}

colorPicked = Math.floor(Math.random()*n);
MainDisplay.textContent = colours[colorPicked];
}

function clickblock(n)
{
for(i=0;i<n;i++)
blocks[i].addEventListener("click",function(){
    if(this.style.backgroundColor===colours[colorPicked]&&!gameOver)
    {
        ans.textContent = "Correct!"
        for(j=0;j<n;j++)
        blocks[j].style.backgroundColor = colours[colorPicked];
        headd.style.backgroundColor = colours[colorPicked];
        newd.textContent = "PLAY AGAIN";
        gameOver = true;
    }
    else if(!gameOver)
    {
        ans.textContent = "Try again";
        this.style.backgroundColor = "#232323";
    }
});
}

function init()
{
    reset();
    if(c===1)
    {randomg(6);
        assign(6);
        clickblock(6);}
    else
    {randomg(3);
    assign(3);
    clickblock(3);}
}

init();

newd.addEventListener("click",function(){
    init();
});

easyd.addEventListener("click",function(){
    c=0;
    for(i=3;i<6;i++)
    blocks[i].style.display = "none";
    easyd.classList.add("selected");
    hardd.classList.remove("selected");
    init();
});

hardd.addEventListener("click",function(){
    c=1;
    for(i=0;i<6;i++)
    blocks[i].style.display = "block";
    init();
    hardd.classList.add("selected");
    easyd.classList.remove("selected");
});


