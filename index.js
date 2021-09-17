let mainColorLocal=localStorage.getItem("maincolr");
let listColor=document.querySelectorAll(".list-color li");
let checkRomambackgroud=true;
if(mainColorLocal!==null){
    document.documentElement.style.setProperty("--main-color",mainColorLocal);
    
    listColor.forEach((item)=>{
        item.classList.remove("active");
        if(mainColorLocal==item.getAttribute("data-color")){
            item.classList.add("active");
        }
    });
}
let bgopationloc=localStorage.getItem("bg-opation");


if(bgopationloc!==null)
{
    if(bgopationloc=="true")
        {
           checkRomambackgroud=true;
        }
        else
        {

            checkRomambackgroud=false;
        }
   
        document.querySelectorAll(".list-opation li").forEach((i)=>{
            i.classList.remove("active");
        });

        if(bgopationloc=="true")
        {
            document.querySelector(".list-opation .yes").classList.add("active");
        }
        else
        {
            document.querySelector(".list-opation .no").classList.add("active");
        }
}


const linksNav=document.querySelectorAll(".list-items li a");

// add class active any element
function addClassActive(arr,classNa)
{
    
    arr.forEach((item)=>{
        
        item.addEventListener("click",()=>{
        removeClassActive(arr,classNa);
         item.classList.add(classNa);

         //opation chanage bg
         ////////////////////

         if( item.getAttribute("data-op")=="yes"){
            //run function background
            checkRomambackgroud=true;
            changebackground();
            localStorage.setItem("bg-opation",true);

        }
        else
        {
            checkRomambackgroud=false;
            clearInterval(intervalBackgroun);
            localStorage.setItem("bg-opation",false);
        }


         ////////////////
        });
    });
}

// Remove class active any element
function removeClassActive(arr,classNa)
{
    arr.forEach((item)=>{
        item.classList.remove(classNa);
    });
}

addClassActive(linksNav,"active");

window.onscroll=()=>{
    const navBar=document.getElementById("nav-bar");
  if(window.pageYOffset>=150)
  {
     
     navBar.classList.remove("header-nav")
     navBar.classList.add("nav");
  }
  else {
    navBar.classList.remove("nav");
    navBar.classList.add("header-nav")
  }

  // section skills
let allSkills=document.querySelectorAll(".box-skills-naspa span");
let skill=document.querySelector(".our-skills");

  let skillsOffTop = skill.offsetTop;
  let outerHeight = skill.offsetHeight;
  let widinnerHeight= window.innerHeight;
  let winscrolTop =window.pageYOffset;
  let boxSkillsw=document.querySelectorAll(".box-skills-w span");
  if(winscrolTop > (skillsOffTop + outerHeight - widinnerHeight))
  {
    let i=0;
      allSkills.forEach((sp)=>{
          
          sp.style.width=sp.getAttribute("data-w");
          boxSkillsw[i].textContent=sp.getAttribute("data-w");
          i++;
      })
  }
  

}

let btnSitting=document.querySelector(".box-icon i");
btnSitting.addEventListener("click",()=>{
    const boxOpen=document.querySelector(".box-stting");
    btnSitting.classList.toggle("fa-spin");
    boxOpen.classList.toggle("box-open");

});
// select color
// let listColor=document.querySelectorAll(".list-color li");
listColor.forEach((li)=>{
    li.addEventListener("click",()=>{
        addClassActive(listColor,"active");
       document.documentElement.style.setProperty("--main-color",li.getAttribute("data-color"));
       localStorage.setItem("maincolr",li.getAttribute("data-color"));
    });
});

// change background rondom

let hearBackground=document.querySelector(".hear-content");
let arrImages=["images/background/background1.webp","images/background/background2.webp","images/background/background3.webp"];
let intervalBackgroun;
function changebackground(){

  if(checkRomambackgroud===true){
    intervalBackgroun= setInterval(()=>{
        let numberRondom=Math.floor(Math.random() * arrImages.length);
        hearBackground.style.backgroundImage=`url(${arrImages[numberRondom]})`;
     },2000);
  }
}

var arrOpationBg=document.querySelectorAll(".list-opation li");
addClassActive(arrOpationBg,"active");


//  section gallery

let allImagesGallery=document.querySelectorAll(".gallery-box-img img");
allImagesGallery.forEach((img)=>{
    img.addEventListener("click",()=>{
        
        let overly=document.createElement("div")
        overly.className="overlay";

        document.body.appendChild(overly);

        let boxImage=document.createElement("div");
        boxImage.className="box-image-overlay";

        if(img.alt !==null){
            let headerImage=document.createElement("h2");
            headerImage.className="our-skills-title";
            let textheader=document.createTextNode(img.alt);
            headerImage.appendChild(textheader);
            boxImage.appendChild(headerImage);
        }
        

        let popupImage=document.createElement("img");
        popupImage.src=img.src;

        boxImage.appendChild(popupImage);

        document.body.appendChild(boxImage);

        let closeBtn=document.createElement("span");
        closeBtn.className="close";
        let textBtn=document.createTextNode("X");
        closeBtn.appendChild(textBtn);
        boxImage.appendChild(closeBtn);

    });
});

document.addEventListener("click",(e)=>{
    if(e.target.className =="close")
    {
       e.target.parentNode.remove();
       document.querySelector(".overlay").remove();
    }
})

let allpoltes=document.querySelectorAll(".bottls-box .boltes");
addClassActive(allpoltes,"active");

function scrollintview(arr){
    arr.forEach((p)=>{
        p.addEventListener("click",(e)=>{
    
            e.preventDefault();
            document.querySelector(e.target.dataset.pol).scrollIntoView({
                behavior:"smooth"
            })
        });
    })
}
scrollintview(linksNav);
scrollintview(allpoltes);

let allbulltesOPation=document.querySelectorAll(".list-bullets li");
let bulletsContent=document.querySelector(".bottls-box");
allbulltesOPation.forEach((li)=>{
    li.addEventListener("click",(e)=>{
        if(e.target.dataset.bullets==="yes"){
            bulletsContent.style.display="block";
            addClassActive(allbulltesOPation,"active");
            localStorage.setItem("b-opation","block");
        }
        else{
            bulletsContent.style.display="none";
            addClassActive(allbulltesOPation,"active");
            localStorage.setItem("b-opation","none");


        }
    })
})

let getopationbullts=localStorage.getItem("b-opation");

if(getopationbullts !==null){
  if(getopationbullts==="block"){
    bulletsContent.style.display="block";
    removeClassActive(allbulltesOPation,"active");
   document.querySelector(".list-bullets li.yes").classList.add("active");
 }
 else{
    bulletsContent.style.display="none";
    removeClassActive(allbulltesOPation,"active");
    document.querySelector(".list-bullets li.no").classList.add("active");
   
 }
}
let clearLocalStorage=document.querySelector(".btn-clear");
clearLocalStorage.addEventListener("click",(e)=>{
    localStorage.clear();
    window.location.reload();
})

let btnToggle=document.querySelector(".btn-togle");
let navBarContainer=document.querySelector(".list-items");

btnToggle.addEventListener("click",(e)=>{
    navBarContainer.classList.toggle("open");
})