import Square from './Square';

export default function Board({ xIsNext, squares, onPlay }) {
	// Create a variable to store the winner
	const winner = calculateWinner(squares);

	// Create a variable to store the status
	let status;

	// Update the status based on the winner
	if (winner) {
		status = `Winner: ${winner}`;
	} else {
		status = `Next player: ${xIsNext ? 'X' : 'O'}`;
	}

	// Create a function to handle the click event
	function handleClick(i) {
		// If there is a winner or a square is clicked, return
		if (squares[i] || calculateWinner(squares)) {
			return;
		}

		// Create a copy of the squares
		const nextSquares = squares.slice();

		// Update the copy of the squares with the value of the square
		nextSquares[i] = xIsNext ? 'X' : 'O';

		// Call the onPlay function with the updated copy of the squares
		onPlay(nextSquares);
	}

	return (
		<>
			<div className="status">{status}</div>
			<div className="board-row">
				<Square value={squares[0]} onSquareClick={() => handleClick(0)} />
				<Square value={squares[1]} onSquareClick={() => handleClick(1)} />
				<Square value={squares[2]} onSquareClick={() => handleClick(2)} />
			</div>
			<div className="board-row">
				<Square value={squares[3]} onSquareClick={() => handleClick(3)} />
				<Square value={squares[4]} onSquareClick={() => handleClick(4)} />
				<Square value={squares[5]} onSquareClick={() => handleClick(5)} />
			</div>
			<div className="board-row">
				<Square value={squares[6]} onSquareClick={() => handleClick(6)} />
				<Square value={squares[7]} onSquareClick={() => handleClick(7)} />
				<Square value={squares[8]} onSquareClick={() => handleClick(8)} />
			</div>
		</>
	);
}

// This function checks if there is a winner in a tic tac toe game
// It takes in an array of squares, and checks them against a list of winning combinations
// If there is a winner, it returns the winner, otherwise it returns null
function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];

		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}

	return null;
}
