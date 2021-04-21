

function move(healthy, pclass) {
    let elid = document.getElementById(`${healthy}`);   
    let width = 0;
    let phealth = classes.hero[pclass].health;
    let pmaxhealth = classes.hero[pclass].maxHealth;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        elid.style.width = phealth/pmaxhealth * 100 + '%'; 
        var num = width * 1/10;
        num = num.toFixed(0)
      }
    }
  };

  function mmove(healthy, pclass) {
    let elid = document.getElementById(`${healthy}`);   
    let width = 0;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        elid.style.width = (classes.villian[pclass].health/classes.villian[pclass].maxHealth) * 100 + '%'; 
        var num = width * 1/10;
        num = num.toFixed(0)
      }
    }
  }