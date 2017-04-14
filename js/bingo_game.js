var x_map = {} ;
var y_map = {} ;

function CheckBingo(x,y)
{
	for ( i = 0 ; i < size_bingotable ; i ++ )
	{
		if ( table_bingotable.rows[i].cells[y].bgColor != "green" && table_bingotable.rows[i].cells[y].bgColor != "red" )
			break ;
		if ( i == size_bingotable - 1 )
		{
			for ( j = 0 ; j < size_bingotable ; j ++ )
				table_bingotable.rows[j].cells[y].bgColor = "red" ;
		}
	}
	for ( i = 0 ; i < size_bingotable ; i ++ )
	{
		if ( table_bingotable.rows[x].cells[i].bgColor != "green" && table_bingotable.rows[x].cells[i].bgColor != "red" )
			break ;
		if ( i == size_bingotable - 1  )
		{
			for ( j = 0 ; j < size_bingotable ; j ++ )
				table_bingotable.rows[x].cells[j].bgColor = "red" ;
		}
	}
	if ( x == y )
	{
		for ( i = 0 ; i < size_bingotable ; i ++ )
		{
			if ( table_bingotable.rows[i].cells[i].bgColor != "green" && table_bingotable.rows[i].cells[i].bgColor != "red" )
				break ;
			if ( i == size_bingotable - 1  )
			{
				for ( j = 0 ; j < size_bingotable ; j ++ )
					table_bingotable.rows[j].cells[j].bgColor = "red" ;
			}
		}
	}
	else if ( x + y == size_bingotable -1 )
	{
		for ( i = 0 ; i < size_bingotable ; i ++ )
		{
			if ( table_bingotable.rows[i].cells[size_bingotable-1-i].bgColor != "green" && table_bingotable.rows[i].cells[size_bingotable-1-i].bgColor != "red" )
				break ;
			if ( i == size_bingotable -1  )
			{
				for ( j = 0 ; j < size_bingotable ; j ++ )
					table_bingotable.rows[j].cells[size_bingotable-1-j].bgColor = "red" ;
			}
		}
	}
}

function Call(call)
{
	try{
		if ( call in x_map )
		{
			var x = x_map[call] ;
			var y = y_map[call] ;
			if ( table_bingotable.rows[x].cells[y].bgColor != "red" )
			{
				table_bingotable.rows[x].cells[y].bgColor = "green" ;
				CheckBingo(x,y) ;
			}
		}
	}catch (e)
	{
		;
	}
}

function Confirm_game(){
	for ( i = 0 ; i < 4 ; i ++ )
	{
		for ( j = 0 ; j < 4 ; j ++ )
		{
			try{
				x_map[table_bingotable.rows[i].cells[j].childNodes[0].id] = i ;
				y_map[table_bingotable.rows[i].cells[j].childNodes[0].id] = j ;
			}catch(e)
			{
				;
			}
		}
	}
}