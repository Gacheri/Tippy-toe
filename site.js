$( document ).ready(function() {
    $('.dropdown-item').on('click',function (){
      if($(this).attr('href')){
        alert('redirect to '+$(this).attr('href'));
        window.location.replace($(this).attr('href'));
        
         }
      
    });
  });

//   search-bar-modal
  $('#search-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })

//   counter
  let counter = 0;
  
  //declares a var. to store the counter being presented
  const number = document.getElementById('heading');
  
  //declares a var. to store the increase button and see if its clicked
  const buttonIncrease = document.getElementById("button+");
  buttonIncrease.onclick = function increase() {
      counter++;
      //represents the new counter value
      heading.innerHTML = counter;
  }

  //declares a var. to store the decrease button and see if its clicked
  const buttonDecrease = document.getElementById("button-");
  buttonDecrease.onclick = function decrease() {
      counter -= 1;
      //represents the new counter value
      heading.innerHTML = counter;
  }
