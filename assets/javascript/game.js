$( document ).ready(function(){
    var Random = Math.floor(Math.random()*101+19)    // Selects a random number to be shown at the start of the game
   
    $('#randomNumber').text(Random)    // Appending random number to the randomNumber id in html 
    
    var crystal1 = Math.floor(Math.random()*11+1)     // create 4 random number for each crsytal
    var crystal2 = Math.floor(Math.random()*11+1)
    var crystal3 = Math.floor(Math.random()*11+1)
    var crystal4 = Math.floor(Math.random()*11+1)
    
    
    
    var userTotal= 0   //variable for user's total
    var wins= 0        // wins counter
    var losses = 0     // losses counter
    var message = " "   // result message
    
  $('#numberWins').text(wins)       // showing value on html page
  $('#numberLosses').text(losses)
  

  
  
    $('#one').on ('click', function(){                   // on click event on crystal1
      userTotal = userTotal + crystal1
      $('#userTotal').text(userTotal)
          if (userTotal == Random){
            winner()
          }
          else if ( userTotal > Random){
            loser()
          }   
    })  
    $('#two').on ('click', function(){                 // on click event on crystal2
      userTotal = userTotal + crystal2
      $('#userTotal').text(userTotal) 
          if (userTotal == Random){
            winner()
          }
          else if ( userTotal > Random){
            loser()
          } 
    })  
    $('#three').on ('click', function(){               // on click event on crystal3
      userTotal = userTotal + crystal3
      $('#userTotal').text(userTotal)
            if (userTotal == Random){
              
            winner()
          }
          else if ( userTotal > Random){

            loser()
          } 
    })  
    $('#four').on ('click', function(){                // on click event on crystal4
      userTotal = userTotal + crystal4
      $('#userTotal').text(userTotal) 
            if (userTotal == Random){
            winner()
          }
          else if ( userTotal > Random){
            loser()
          }
    }) 
    
    function reset(){                                  // resting the function after user wins or losses
        Random=Math.floor(Math.random()*101+19)
        $('#randomNumber').text(Random)
        crystal1= Math.floor(Math.random()*11+1)
        crystal2= Math.floor(Math.random()*11+1)
        crystal3= Math.floor(Math.random()*11+1)
        crystal4= Math.floor(Math.random()*11+1)
        userTotal= 0
        $('#userTotal').text(userTotal)
        // $('#message').text(message)
        } 

  function winner(){
  alert("You won!")
    wins++ 
    $('#numberWins').text(wins)
    // $("#message").text("You Won")
    reset()
  }
  
  function loser(){
  alert ("You lose!")
    losses++
    $('#numberLosses').text(losses)
    // $("#message").text("You Lost")
    reset()
  }

  }) 