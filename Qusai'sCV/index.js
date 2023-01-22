const sidebarItems = document.getElementById("sidbarComponents");
const contentArea = document.getElementById("contentArea");


const sidebarElements =
    [{
        "barName": "About Me",
        "iconD": "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    },
    {
        "barName": "Resume",
        "iconD": "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
    },

    {
        "barName": "Contacts",
        "iconD": "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
    },
    {
        "barName": "Why I Learn React?",
        "iconD": "M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
    }
    ]

function renderSideBarItem() {
    // renderSideBarItem(sidebarElements[1].barName, sidebarElements[1].iconD);
    let listItems = '';
    for (const iterator of sidebarElements) {
        listItems += `
        <div onclick="swticher('${iterator.barName}')"  class="sidebar-items">
        <div  >
            <svg
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width="40 "
                height="40"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="${iterator.iconD}"
                ></path>
            </svg> 
        </div>
        <p>${iterator.barName}</p>
    </div>
        `
    }

    sidebarItems.innerHTML = listItems;
}
renderSideBarItem();

function AboutMe() {
    let contet =
        `
       <div class="fz-mid"> 
             <p > 
           I'm Qusai, from Palestine, lives in a town called Aqraba near Nablus.
            </br>
           I've done a lot of things inside and out side the tech area, but mainly I'm a Node Js back-end developer,
           beside programing I was involved in business and I raise fund twice, and I've got 3 sweet faliurs.
           </br>
           now a days I'm looking for job beside working on macro-start to stay one's hand to improve my skills.
           </br>
           I've never been in official company but I got consultation and reviews so I can boldly describe my level between the junior and mid.
           </br>
           </p>
           <p>you are welcome to visit </p>
           <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Aqraba&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies-online.net"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">google maps iframe options</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>
      
           </div>
           `


    contentArea.innerHTML = contet;
}

function Resume() {
    let contet =
        `
            <div class="fz-mid"> 
            <p> 
            <span class="boldandBlue">Education:</span> B.S. Computer Information Systems An-Najah National University 2013 - 2018
            </br> </br>
            <span class="boldandBlue">Technical Skills & Experience:</span> 
            </br>
            <ul> </ul>

            <span class="skillName" > Java (university)</span></br>
            <ul>
            <li>Practiced object oriented, data structure, design patterns and problem-solving using Java</li>
            <li>JavaFXM - scene builder</li>
            </ul>
            
            <span class="skillName" >  NodeJs - Express (3 mid projects) (university)</span></br>    
            <ul>
                <li> Building restful APIS using Express framework</li>
                <li>Building entities & queries using Mongoose ODM.</li>
                <li>Doing basic test using super test & chai.</li>
                <li>Documentation using swagger </li>
                <li>Building features like Email, File & Images Uploads </li>
            </ul>  
         
            <span class="skillName" >Python3: used for problem Solving</span></br> </br>    

            <span class="skillName" >PHP- Laravel (small project)</span></br> </br>    

            <span class="skillName" >Databases</span></br>    
            <ul>
            <li>Good knowledge of SQL(MySQL)</li>
            <li>Knowledge of noSQL(MongoDB)</li>
            <li>Building entities using ORMs(MongoDB)</li>  
            </ul>
            <span class="skillName" >React:</span> I've build-coustmize simpe pages using react</br> </br>   
            <span class="skillName" >Dealing with simple Server like (Heroku-Netlfy)</span></br> </br>    
            <span class="skillName" >Tools: GitHub-VsCode-PostMan</span></br> </br>    
            <span class="skillName" >Professional Fluency in English</span></br> </br>    

        
           </p>

           </div>
        `
    contentArea.innerHTML = contet;
}
function Contacts() {
    let contet =
        `
                  <span class="boldandBlue" > Click to redirect/copy </span> 
           <div class="contacts">
            <img src="icons/gmail.png" onclick="copyText()">
            <img src="icons/github.png"   onclick="redirect('https://github.com/qusaitamersaleh')">
            <img src="icons/linkedin.png" onclick="redirect('https://www.linkedin.com/in/qusai-tamer-82a1b6128/')">
            <img src="icons/twitter.png"  onclick="redirect('https://twitter.com/tamer_qusai')">
            </div>
            <span id="notfyTextCopied" > text copied </span> 
        `
    contentArea.innerHTML = contet;
}
function WhyILearnReact() {
    let contet =
        `
        <div class="fz-mid"> 
        <span class="boldandBlue">Why I want to Learn React ?</span>
        <ol>
        <li>Looking for fullstack job</li>
        <li>to under stand people who do front as a back-end developer</li>
        <li>Why React not Angular ? because I want to be MERN stack developer not MEAN stack </li>  
        </ol>
        </div>
        `
    contentArea.innerHTML = contet;
}

function swticher(barName) {
    console.log(barName)
    if (barName === "About Me")
        AboutMe()
    else if (barName === "Resume")
        Resume()
    else if (barName === "Contacts")
        Contacts()
    else if (barName === "Why I Learn React?")
        WhyILearnReact()
}

function copyText() {
    var text = "Qusai.tamer@gmail.com";
    navigator.clipboard.writeText(text).then(function() {
        document.getElementById("notfyTextCopied").style.visibility = "visible";
    }, function(err) {
      console.error('Failed to copy text: ', err);
    });
  }
  function redirect(url) {
    location.href = url;
  }