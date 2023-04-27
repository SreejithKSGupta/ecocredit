






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


