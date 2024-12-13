function lightMode() {
  localStorage.setItem("mode", "light");
  checkMode()
}

function darkMode() {
  localStorage.setItem("mode", "dark");
  checkMode()
}

var body = document.getElementById('body')

function checkMode() {
  var currentMode = localStorage.getItem("mode");
  
  console.log(body)
  if (currentMode === "dark") {
    body.className = "darkBody";
  } else {
    body.className = "lightBody";
  }
}

function setByDefault() {
  var checkModeState = localStorage.getItem("mode");
  if (checkModeState === null) {
    localStorage.setItem("mode" , "light");
    checkMode();
  } else {
    checkMode();
  }
}

window.onload = setByDefault();


// let saved_user={};
// function signup(){
//     var user_name=document.getElementById('username')
//     var user_email=document.getElementById('email')
//     var user_password=document.getElementById('password') 
//     // console.log(`User Name:${user_name.value}`)
// }

// saved_user={
//     name:user_name.value,
//     email:user_email.value,
//     password:user_password.value,

// }
// function login(){
//     var login_user_email=document.getElementById('email')
//     var login_user_password=document.getElementById('password')
//     if(saved_user.email===login_user_email.value&&saved_user.password===login_user_password.value)
//         {
//         window.location.assign("welcomescreen.html")
//     } 
// }

let saved_user = {}; 

function signup() {
    var user_name = document.getElementById('username').value;
    var user_email = document.getElementById('email').value;
    var user_password = document.getElementById('password').value;

    // Save user details into the global `saved_user` object
    saved_user = {
        name: user_name,
        email: user_email,
        password: user_password,
    };
    alert("Signup successful!");

    
}



function login() {
    var login_user_email = document.getElementById('email').value;
    var login_user_password = document.getElementById('password').value;

    // Compare login credentials with the saved user data
    if (
        saved_user.email === login_user_email &&saved_user.password === login_user_password
    ) {
        alert("Login successful!");
        window.location.assign("welcomescreen.html");
        document.getElementById("welcomeuser").innerHTML = localStorage.getItem('username'); 
    } else {
        alert("Invalid email or password!");
        
    }
}   


// redirectto quiz subject2
function course_join(){
    window.location.assign("coursesscreen.html")
}

function start(){
    window.location.assign("main-screen.html")
}





var htmlQuiz = [
    {
      question: "HTML Stands for ?",
      option1: "Hypertext",
      option2: "Markup",
      option3: "HyperSuperText",
      option4: "HyperText Markup Language",
      answer: "HyperText Markup Language",
    },
    {
      question: "Which Element used to bold text in HTML?",
      option1: "img",
      option2: "h1",
      option3: "strong",
      option4: "p",
      answer: "strong",
    },
    {
      question: "Which Element used for Image in HTML?",
      option1: "span",
      option2: "div",
      option3: "image",
      option4: "img",
      answer: "img",
    },
    {
      question: "Which tag is used to create a hyperlink in HTML?",
      option1: "link",
      option2: "a",
      option3: "hyperlink",
      option4: "url",
      answer: "a",
    },
  ];
  
  var question = document.getElementById("question");
  var label1 = document.getElementById("label1");
  var label2 = document.getElementById("label2");
  var label3 = document.getElementById("label3");
  var label4 = document.getElementById("label4");
  
  var option1 = document.getElementById("option1");
  var option2 = document.getElementById("option2");
  var option3 = document.getElementById("option3");
  var option4 = document.getElementById("option4");
  
  var quizOptions = document.getElementsByName("quizOption");
  
  
  var quizWindow = document.getElementById('quizWindow')
  var resultWindow = document.getElementById('resultWindow')
  var announcement = document.getElementById('announce')
  var percentageSpace = document.getElementById('percentageShow')
  var totalQuestions = document.getElementById('totalQue')
  var correctQuestion = document.getElementById('correctQue')
  
  var questionCount = 0;
  var score = 0;
  
  function renderQuestion() {
    // question
    question.innerHTML = htmlQuiz[questionCount].question;
    // labels , that shows in DOM
    label1.innerHTML = htmlQuiz[questionCount].option1;
    label2.innerHTML = htmlQuiz[questionCount].option2;
    label3.innerHTML = htmlQuiz[questionCount].option3;
    label4.innerHTML = htmlQuiz[questionCount].option4;
    // Radio Values
    option1.value = htmlQuiz[questionCount].option1;
    option2.value = htmlQuiz[questionCount].option2;
    option3.value = htmlQuiz[questionCount].option3;
    option4.value = htmlQuiz[questionCount].option4;
  }
  
  function deSelect() {
    for (var i = 0; i < quizOptions.length; i++) {
      quizOptions[i].checked = false;
    }
  }
  
  function next() {
    var radioChecked = false;
    for (var i = 0; i < quizOptions.length; i++) {
      // If value is checked
      if (quizOptions[i].checked) {
        radioChecked = true;
  
        // so check that selected option is equal to answer so increment the score
        if (quizOptions[i].value === htmlQuiz[questionCount].answer) {
          score++;
        }
      }
    }

    // if no option selected ( if block )
    if (!radioChecked) {
      Swal.fire({
        title: "No Option Selected",
        text: "Please Select Any Option",
        icon: "error",
      });
    } else {
      // radio checked = true
  
      if (questionCount < htmlQuiz.length - 1) {
        questionCount++;
        deSelect();
        renderQuestion();
        // submitbutton.style.display= 'none'
      } else {
        nextbutton.style.display = 'none'
        //  showResult()
        submitbutton.style.display= 'block'
      }
    }
  }
  
  function showResult() {
    // quizWindow.style.display = 'none'
    // resultWindow.style.display = 'block'
   
    window.location.assign("result.html")

      var percentage = Math.round(score / htmlQuiz.length * 100)
      var resultStatus = ''
      if(percentage < 70) {
          resultStatus = ' You are Failed ! Better Luck Next Time'
          announcement.className = 'redText'
      } else {
          resultStatus = 'Congratulations ! You are Passed'
          announcement.className = 'greenText'
      }
  
      announcement.innerHTML = resultStatus
      totalQuestions.innerHTML = htmlQuiz.length
      correctQuestion.innerHTML = score 
      percentageSpace.innerHTML = `${percentage} %`

     
  }
  
  window.onload = renderQuestion();



  function backtohome(){
    window.location.assign("welcomescreen.html")
  }
  
  // function submit(){
  //   window.location.assign("result.html")

  // }


  // function lightMode() { 
  //   localStorage.setItem("mode", "light");
  //   checkMode()
  // }
  
  // function darkMode() {
  //   localStorage.setItem("mode", "dark");
  //   checkMode()
  // }

  // var body= document.getElementById('body')
  // function checkmode(){
  //   var currentmode=localStorage.getItem("mode");
  //   if(currentmode==="dark"){
  //     body.className="darkbody"
      
  //   }
  //   else{
  //     body.className="lightbody"
  //   }
  // }



  // function bydefault(){
  //   var modestatus=localStorage.getItem('mode');
  //   if(modestatus=== null){
  //     localStorage.setItem("mode" , "light");
  //     checkmode();
  //     }
  //     else{
  //       checkMode();
  //     }
  // }

  // window.onload = setByDefault();



  