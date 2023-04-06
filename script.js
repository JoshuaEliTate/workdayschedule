// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var button = document.getElementsByClassName("saveBtn");
var today = dayjs();
var currentHour = today.format('HH')
$(function () {
toString(currentHour)

  $('#currentDay').text(today.format('MMM D, YYYY'));

  $('.row').each(function() {
    // Get the hour from the ID of the time block
    var hour = parseInt($(this).attr('id'));

    // Compare the hour to the current hour and apply the appropriate class
    if (hour < currentHour) {
      $(this).addClass('past');
      $(this).removeClass('present future')
      return
    } else if (hour === currentHour) {
      $(this).addClass('present');
      $(this).removeClass('past future')
      return
    } else if (hour > currentHour) {
      $(this).addClass('future');}
      $(this).removeClass('present past')
  });

  function saveComment(name, myParent) {
    var commentHour = parseInt($(this).attr('id'))
    var commentId = commentHour + 1
    var note = $(`#${commentId}`);
    console.log(note.val())
    var savedNote = {
      note: note.val()
    };
    localStorage.setItem(`savedNote${commentHour}`, JSON.stringify(savedNote));
  }

  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', saveComment, false);
  }

    function render() {
        var renderNote0 = JSON.parse(window.localStorage.getItem`savedNote20`)
        var renderNote1 = JSON.parse(window.localStorage.getItem`savedNote22`)
        var renderNote2 = JSON.parse(window.localStorage.getItem`savedNote24`)
        var renderNote3 = JSON.parse(window.localStorage.getItem`savedNote26`)
        var renderNote4 = JSON.parse(window.localStorage.getItem`savedNote28`)
        var renderNote5 = JSON.parse(window.localStorage.getItem`savedNote30`)
        var renderNote6 = JSON.parse(window.localStorage.getItem`savedNote32`)
        var renderNote7 = JSON.parse(window.localStorage.getItem`savedNote34`)
        var renderNote8 = JSON.parse(window.localStorage.getItem`savedNote36`)
        
        ifTrue(renderNote0, 21)
        ifTrue(renderNote1, 23)
        ifTrue(renderNote2, 25)
        ifTrue(renderNote3, 27)
        ifTrue(renderNote4, 29)
        ifTrue(renderNote5, 31)
        ifTrue(renderNote6, 33)
        ifTrue(renderNote7, 35)
        ifTrue(renderNote8, 37)
    }

    function ifTrue (noteRender, id) {
      if(noteRender !== null){
        document.getElementById(id).innerHTML = noteRender.note
      } else {
        return
      }
    }
    render()
  })
