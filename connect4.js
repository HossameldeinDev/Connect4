// playerOne = prompt("Player One: Enter your name, You'll be blue")
// playerTwo = prompt("Player Two: Enter your name, You'll be Red")
playerOne = "Hussam"
playerTwo = "Mostafa"
turnMessage = ": it is your turn, please pick a column to drop your blue chip"
$('#message').text(playerOne + turnMessage)
PlayerOneTurn = 1
function colorCell()
{
        
        row = $(this).parent().index()
        column = $(this).index();
        table = $("table tr");
        cell = $(table).eq(row).find('td').eq(column)
        if (PlayerOneTurn === 1)
        {
            $(cell).css('background', 'red')
            PlayerOneTurn = 0
        }
        else
        {
          $(cell).css('background', 'blue')
            PlayerOneTurn = 1
        }
}
$('table td').click(colorCell)