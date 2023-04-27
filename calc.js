 const sliders = document.querySelectorAll("input[type='range']");  
  sliders.forEach(slider => {
    slider.addEventListener("input", () => {
      const value = slider.value;
      const id = slider.id;
      const output = document.getElementById(id + "Input");
      output.value = value;
    });
  });
  var CFP;

  const checkbtn = document.getElementById("cfindfp");
    checkbtn.addEventListener("click", calculateCarbonFootprint);

  function calculateCarbonFootprint() {
    // get the values of the input fields
    const meatValue = document.getElementById('cmeat').value;
    const dairyValue = document.getElementById('cdairy').value;
    const fishValue = document.getElementById('cfish').value;
    const bikeValue = document.getElementById('cbike').value;
    const carValue = document.getElementById('ccar').value;
    const publicTransportValue = document.getElementById('cptransport').value;
    const electricVehicleValue = document.getElementById('cevehicle').value;
    const heavyElectronicsValue = document.getElementById('chelectronics').value;
    const lightElectronicsValue = document.getElementById('clelectronics').value;
    const clothesBoughtValue = document.getElementById('cclothes').value;
    const regionValue = document.getElementById('cregions').value;
    const familyMembersValue = document.getElementById('cfamily').value;
    console.log(familyMembersValue);
    var regionMultiplier = 0;

    if(familyMembersValue==-1){
     familyMembersValue=1;
    }

// region multiplier
       switch(regionValue) {
        case "North-America":
            regionMultiplier=1.3;
            break;
        case "South-America":
            regionMultiplier=1.2;
            break;
        case "Europe":
            regionMultiplier=1.4;
            break;
        case "Africa":
            regionMultiplier=1.1;
            break;
        case "Asia":
            regionMultiplier=1.0;
            break;
        case "Oceania":
            regionMultiplier=1.5;
            break;
        default:
            alert("Please select a region");
            return;
    }
  
    // perform the necessary calculations
    const meatCarbon = meatValue *60*regionMultiplier; // carbon footprint of meat per kg
    const dairyCarbon = dairyValue * 1.48*30*regionMultiplier; // carbon footprint of dairy per kg
    const fishCarbon = fishValue * 2.17*regionMultiplier; // carbon footprint of fish per kg
    const bikeCarbon = bikeValue * 2.4*regionMultiplier; // carbon footprint of biking per km
    const carCarbon = carValue * 7.2*regionMultiplier; // carbon footprint of driving per km
    const publicTransportCarbon =1.2* publicTransportValue *regionMultiplier; // carbon footprint of public transport per km
    const electricVehicleCarbon =1.8* electricVehicleValue *regionMultiplier; // carbon footprint of electric vehicle per km
    const heavyElectronicsCarbon = heavyElectronicsValue * 1.8*6*regionMultiplier; // carbon footprint of heavy electronics per hour of use
    const lightElectronicsCarbon = lightElectronicsValue * 0.06*6*regionMultiplier; // carbon footprint of light electronics per hour of use
    const clothesBoughtCarbon = clothesBoughtValue * 10*regionMultiplier; // carbon footprint of clothes per kg
  
    // calculate the total carbon footprint
    const personalcost=meatCarbon + dairyCarbon + fishCarbon + bikeCarbon + carCarbon 
    const familycost=publicTransportCarbon + electricVehicleCarbon + heavyElectronicsCarbon + lightElectronicsCarbon + clothesBoughtCarbon;
    const totalCarbonFootprint = (personalcost+familycost)/familyMembersValue;
    CFP=totalCarbonFootprint.toFixed(2);
    // display the total carbon footprint in the HTML
    document.getElementById('carbonFootprintResult').innerHTML = `${totalCarbonFootprint.toFixed(2)} kg CO2e`;

}
  

