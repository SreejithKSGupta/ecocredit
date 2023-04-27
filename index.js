homeslider();
addbtns();
document.getElementById('homepage').style.display = "flex";



function homeslider(){
    var slider = document.getElementById("hsliderimg");
    var i = 2;
    setInterval(function(){
        slider.src ='src/slider/carboncredit'+i+'.webp';
        i++;
        if(i == 5){
            i = 1;
        }
    }, 2000);
}


function addbtns(){
    document.getElementById("navbtnhome").addEventListener("click", function(){switchtopage("homepage")});
    document.getElementById("navbtnknow").addEventListener("click", function(){switchtopage("knowpage")});
    document.getElementById("navbtnprof").addEventListener("click", function(){switchtopage("Profile")});
    document.getElementById("NGOlistCTAbtn").addEventListener("click", function(){switchtopage("ngopage")});
    document.getElementById("homeCFP").addEventListener("click", function(){switchtopage("CFPcalculcpage")});
}


function switchtopage(page){
    console.log(page);
   var pages = document.getElementsByClassName('pageItem');
 for(var i = 0; i < pages.length; i++){
        pages[i].style.display = "none";
    }
      document.getElementById(page).style.display = "flex";
}