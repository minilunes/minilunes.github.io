window.onload = () => {

    const appearanceButton3 = document.getElementById('appearanceAction3');
    const appearanceButton4 = document.getElementById('appearanceAction4');
    const defaults = document.getElementById('default');
    const basic = document.getElementById('basic');

    appearanceButton3.onclick = () => {
        disableStylesheet(defaults);
        enableStylesheet(basic);
    }

    appearanceButton4.onclick = () => {
        disableStylesheet(basic);
        enableStylesheet(defaults);
    }

}

function enableStylesheet (node) {
    node.rel = 'stylesheet';
  }
  
function disableStylesheet (node) {
    node.rel = 'alternate stylesheet';
}