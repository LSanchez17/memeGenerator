/* Started on April 11th, 2020
/  8pm-10pm
/  Continued April 12th, 2020
/  1130am-1pm    
/  Ended
/  actual logic ~1 hours, rest of time on CSS/HTML styling
*/
window.addEventListener('DOMContentLoaded', (e) => {
  main();
})

const main = () => {
  const form = document.querySelector('#memeform');
  const imageChoice = document.querySelector('#image');
  const topText = document.querySelector('#topText');
  const bottomText = document.querySelector('#bottomText');
  const memeArea = document.querySelector('#memeZone');
  
  //Handles meme generation
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let top = document.createElement('h1');
    top.id = 'topusertext';
    top.innerText = topText.value;
  
    let bottom = document.createElement('h1');
    bottom.id = 'bottomusertext';
    bottom.innerText = bottomText.value;
      
    let meme = document.createElement('img');
    meme.id = 'userimage';
    meme.src = imageChoice.value;  
  
    let deleteBttn = document.createElement('button');
    deleteBttn.id = 'delete';
    deleteBttn.innerText = 'Delete your meme';
    
    deleteBttn.addEventListener('click', (e) => {
      e.target.parentElement.remove();
    });

    let holdMemes = document.createElement('div');
    holdMemes.id = 'usermeme';
    //adds top text to meme div
    holdMemes.append(top);
    //adds image below top text, inside parent div
    holdMemes.appendChild(meme);
    //adds bottom text to meme div
    holdMemes.append(bottom)
    //appends this a delete button to remove the meme into the last node
    //of the parent div
    holdMemes.appendChild(deleteBttn);
    //appends this entire div as a child into the memearea div
    memeArea.appendChild(holdMemes);
  
    topText.value = '';
    bottomText.value = '';
    imageChoice.value = '';
  })  


}

