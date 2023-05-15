const charImg = document.getElementById('1');

/**
 * reproduction of the pronunciation of a letter
 */
function soundClick(id) {

  setTimeout(function() {
    
    let audio = new Audio();

    audio.src = 'sound/' + id + '.mp3';
    audio.autoplay = true;
  
  }, 700);

}

/**
 * reproduction of the word "letter"
 */
function soundClickChar() {

  let audioChar = new Audio();
  audioChar.src = 'sound/char.mp3';
  audioChar.autoplay = true;

}

/**
 * creating a table with images
 */
function addTable() {
  
  let table = document.querySelector('#table');
  let nameImg = 1;
  
  for (let i = 0; i < 5; i++) {

    
    let tr = document.createElement('tr');
    
    for (let i = 1; i < 8; i++) {
      
      let td = document.createElement('td');
      
      tr.appendChild(td);
      
      let newElement = document.createElement('img');
      
      newElement.src = 'images/' + nameImg + '.jpg';
      newElement.id = nameImg;
      newElement.style.width = '80%';
      newElement.style.height = '80%';
      td.appendChild(newElement);

      nameImg++;

      if (nameImg > 33) {
        
        break;

      }
    
	}
  
  table.appendChild(tr);

  }

}

/**
 * handle the event
 */
function clickHandler() {

  let chars = document.querySelectorAll('img');

  for(let i = 0; i < chars.length; i++) {

    chars[i].addEventListener('mousedown', function(e) {

      let idImg = e.target.id;
      e.target.style.transform = 'scale(1.5)';

      chars[i].addEventListener('mouseup', function(e) {

        soundClick(idImg);
  
      });

      chars[i].addEventListener('mouseout', function(e) {

        e.target.style.transform = '';
  
      });
      
      soundClickChar();

    });
    
  }

}

/**
 * script initialization
 */
function init() {
  
  addTable();

  clickHandler();
    
}

init();