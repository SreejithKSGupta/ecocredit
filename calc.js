






    const sliders = document.querySelectorAll("input[type='range']");
  
  sliders.forEach(slider => {
    slider.addEventListener("input", () => {
      const value = slider.value;
      const id = slider.id;
      const output = document.getElementById(id + "Input");
      console.log(output);
      output.value = value;
    });
  });

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
    const flightValue = document.getElementById('cflight').value;
    const heavyElectronicsValue = document.getElementById('chelectronics').value;
    const lightElectronicsValue = document.getElementById('clelectronics').value;
    const clothesBoughtValue = document.getElementById('cclothes').value;
  
    // perform the necessary calculations
    const meatCarbon = meatValue * 7.61; // carbon footprint of meat per kg
    const dairyCarbon = dairyValue * 1.48; // carbon footprint of dairy per kg
    const fishCarbon = fishValue * 2.17; // carbon footprint of fish per kg
    const bikeCarbon = bikeValue * 21; // carbon footprint of biking per km
    const carCarbon = carValue * 271; // carbon footprint of driving per km
    const publicTransportCarbon = publicTransportValue * 75; // carbon footprint of public transport per km
    const electricVehicleCarbon = electricVehicleValue * 20; // carbon footprint of electric vehicle per km
    const flightCarbon = flightValue * 285; // carbon footprint of flying per km
    const heavyElectronicsCarbon = heavyElectronicsValue * 1.8; // carbon footprint of heavy electronics per hour of use
    const lightElectronicsCarbon = lightElectronicsValue * 0.06; // carbon footprint of light electronics per hour of use
    const clothesBoughtCarbon = clothesBoughtValue * 10; // carbon footprint of clothes per kg
  
    // calculate the total carbon footprint
    const totalCarbonFootprint = meatCarbon + dairyCarbon + fishCarbon + bikeCarbon + carCarbon + publicTransportCarbon + electricVehicleCarbon + flightCarbon + heavyElectronicsCarbon + lightElectronicsCarbon + clothesBoughtCarbon;
  
    // display the total carbon footprint in the HTML
    document.getElementById('carbonFootprintResult').innerHTML = `${totalCarbonFootprint.toFixed(2)} kg CO2e`;
         console.log(totalCarbonFootprint);  


}
  

