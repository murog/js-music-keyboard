
// $('li').click(function(event){
//   console.log('Got a click on an <li> element!');
//   $(this).toggleClass('blue');
//   console.log(this);
// });

const click = function click(id) {
  console.log('im in click');
  const letter = id.substring(id.length-1)
  const audioElement = $(`#${letter}Audio`)[0];

  $(`${id}`).click(function(event) {
    console.log(`got a click on ${id}`);
    audioElement.load();
    audioElement.play();
    // audioElement = $(`${id}`)
  });
  $('body').keydown(function(event) {
    if (event.key === letter) {
      audioElement.load();
      audioElement.play();
    }
  });
};

const getNotes = function getNotes() {
  const notes = $('.instrument')[0].children;
  const classes = [];
  const formattedClasses = []
  for (let i=0; i<notes.length; i++) {
    classes.push(`${notes[i].className}`);
  }
  for (let i=0; i<classes.length; i++) {
    formattedClasses.push(classes[i].replace(/\s/g, '.'));
  }
  formattedClasses.forEach((note) => {
    click(`.${note}`);
  });

}

$(document).ready(function() {
  click('.note.c');
  getNotes();
  // $('.note.c').click(function() {
  //   console.log('got a click on this');
  // });
  console.log('im ready');
});
