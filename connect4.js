playerOne = prompt("Player One: Enter your name, You'll be Red")
playerTwo = prompt("Player Two: Enter your name, You'll be Blue")
currentPlayer = playerOne
turnMessage = ": it is your turn, please pick a column to drop your blue chip"
$('#message').text(playerOne + turnMessage)
PlayerOneTurn = 1
colored = [5,5,5,5,5,5,5]
function colorCell()
{


        row = $(this).parent().index()
        column = $(this).index();
        if (colored[column] >= 0)
        {
            row = colored[column]
            colored[column] -=1
            table = $("table tr");
            cell = $(table).eq(row).find('td').eq(column)
            if (PlayerOneTurn === 1)
            {
                 $(cell).css('background', 'red')
                 PlayerOneTurn = 0
                 currentPlayer = playerTwo
             }
            else
            {
                 $(cell).css('background', 'blue')
                 PlayerOneTurn = 1
                 currentPlayer = playerOne
        }
        }
        $('#message').text(currentPlayer + turnMessage)
}
$('table td').click(colorCell)