const ques=[
    {
        Question:"Q1:Which number should come next in this series? 25, 24, 22, 19, 15",
        a:"a:14",
        b:"b:5",
        c:"c:10",
        d:"d:0",
        ans:"ans3"

    },
    {
        
        Question:"Q2:Which one of the five is least like the other four?",
        a:"Cow ",
        b:"Tiger",
        c:"Snake",
        d:"Dog",
        ans:"ans3"

    },
    {
         
        Question:"Q3:If you rearrange the letters BARBIT,you would have the name of a:",
        a:"Ocean",
        b:"Country",
        c:"State",
        d:"Animal",
        ans:"ans4"
    },
    {
         
        Question:"Q4:Which one of the five is least like the other four?",
        a:"Potato",
        b:"Carrot",
        c:"Bean",
        d:"Apple",
        ans:"ans4"
    }
];


const iq=document.querySelector(".iq");
const soon=document.querySelector(".soon1");
const contact1=document.querySelector(".contact1");
const contact=document.querySelector(".contact");
const question=document.querySelector(".question");
const secondpage=document.querySelector(".questions");
const cont=document.querySelector(".cont");
const option1=document.querySelector(".opt1");
const option2=document.querySelector(".opt2");
const option3=document.querySelector(".opt3");
const option4=document.querySelector(".opt4");
const listques=document.querySelector(".uolist");
const correctopt=document.querySelector("#correct3");
const li=document.querySelector("li");
const answer=document.querySelectorAll(".option");
const showscore=document.querySelector(".score");
const quesansbut=document.querySelector(".quesansbut");
const Gloadbar=document.querySelector(".green");
const Rloadbar=document.querySelector(".red");
const value=document.querySelector(".value");


soon.addEventListener("click",()=>{
    alert("will be added soon");
});

iq.addEventListener("click" , ()=>{
    cont.style.display="none";
    contact1.style.display="block";
    // question.innerHTML=ques[0].Question;
    contact.style.display="none";
    secondpage.style.display="block";
    // option1.innerHTML=ques[0].a;
    // option2.innerHTML=ques[0].b;
    // option3.innerHTML=ques[0].c;
    // option4.innerHTML=ques[0].d;

    
});
let quescount =0;
let score=0;

const loadques= () =>{
    const listques = ques[quescount];
    question.innerHTML= listques.Question;
    option1.innerHTML = listques.a;
    option2.innerHTML = listques.b;
    option3.innerHTML = listques.c;
    option4.innerHTML = listques.d;

};

loadques();

const getcheckedanswer = () =>{

    let option;
    answer.forEach((currentanselement)=>{
       if(currentanselement.checked){
           option=currentanselement.id;
       }
    });
    return option ;


};

const deslectAll=()=>{

    answer.forEach((currentanselement)=>{
        currentanselement.checked=false
    })
};

// loadbar function 



contact1.addEventListener("click", ()=>{
    const checkedans= getcheckedanswer();  
    console.log(checkedans);

    if(checkedans===ques[quescount].ans){
        // here we can define score and load bar 

        score++;
        if(checkedans===ques[quescount].ans){
            Gloadbar.style.width=(score/4 )*100 +"%";
            value.style.textAlign="center";
            value.innerHTML=(score/4 )*100 +"%";
            
        }
        
       
        
        

        
    };
    quescount++;

    deslectAll();



    if(quescount<ques.length){
        loadques();
    }else{
        quesansbut.style.display="none"
        showscore.style.display="block";
        showscore.innerHTML=` <h1>Thanks For Submiting Your Response</h1>
        <h3>Your Score Is : ${score}/${ques.length}</h3>
        <button class"reset" onclick="location.reload()">Play Again</button>
        `;
    }
});
