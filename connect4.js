playerOne = prompt("Player One: Enter your name, You'll be Red")
playerTwo = prompt("Player Two: Enter your name, You'll be Blue")
currentPlayer = playerOne
turnMessage = ": it is your turn, please pick a column to drop your blue chip"
$('#message').text(playerOne + turnMessage)
PlayerOneTurn = true
colored = [5,5,5,5,5,5,5]
gameOn = true
function returnColor(row,col) {
    return $("table tr").eq(row).find('td').eq(col).css('background')
}

function colorMatchCheck(one,two,three,four){
  return (one===two && one===three && one===four && one !==  $('#dummy').css('background') && one !== undefined);
}

function horizontalWinCheck() {
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row,col+1) ,returnColor(row,col+2), returnColor(row,col+3))) {
        console.log('horiz');
        return true;
      }else {
        continue;
      }
    }
  }
}

function verticalWinCheck() {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 3; row++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col) ,returnColor(row+2,col), returnColor(row+3,col))) {
        console.log('vertical');
        return true;
      }else {
        continue;
      }
    }
  }
}

function diagonalWinCheck() {
  for (var col = 0; col < 5; col++) {
    for (var row = 0; row < 7; row++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col+1) ,returnColor(row+2,col+2), returnColor(row+3,col+3))) {
        console.log('diag');
        return true;
      }else if (colorMatchCheck(returnColor(row,col), returnColor(row-1,col+1) ,returnColor(row-2,col+2), returnColor(row-3,col+3))) {
        console.log('diag');
        return true;
      }else {
        continue;
      }
    }
  }
}

function gameEnd(winningPlayer) {
      $('h1').text(winningPlayer+" has won! \nRefresh your browser to play again!").css("fontSize", "50px")
      $('h2').remove()
}


function colorCell()
{
    if (gameOn)
    {
                row = $(this).parent().index()
        column = $(this).index();
        if (colored[column] >= 0)
        {
            row = colored[column]
            colored[column] -=1
            table = $("table tr");
            cell = table.eq(row).find('td').eq(column)
            if (PlayerOneTurn)
            {
                 $(cell).css('background', 'red')
                 PlayerOneTurn = false
                 currentPlayer = playerTwo
             }
            else
            {
                 $(cell).css('background', 'blue')
                 PlayerOneTurn = true
                 currentPlayer = playerOne
            }
        }
        if ( horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck() )
        {
            if (currentPlayer === playerOne)
            {winningPlayer = playerTwo}
            else
            {winningPlayer = playerOne}
            gameEnd(winningPlayer)
            gameOn = false
        }
        else
        {
            $('#message').text(currentPlayer + turnMessage)
        }

    }

}
$('table td').click(colorCell)