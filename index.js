homeslider();
addbtns();



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
    document.getElementById("navbtnhome").addEventListener("click", function(){console.log("home")});
    document.getElementById("navbtnknow").addEventListener("click", function(){console.log("knowledge base")});
    document.getElementById("navbtnprof").addEventListener("click", function(){console.log("Profile")});
    document.getElementById("NGOlistCTAbtn").addEventListener("click", function(){console.log("NGO list")});
    document.getElementById("homeCFP").addEventListener("click", function(){console.log("Calculate Carbon Credit")});
}


function switchtopage(page){
      document.getElementById("content").innerHTML = "";
        document.getElementById("content").innerHTML = page;
}