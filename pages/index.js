import { Component } from 'react'
import Head from "next/head";
import Square from '../components/Square';

export default class Testing extends Component {
	constructor(props) {
        super(props);

        this.state = {
			turn: "white",
			board: [
				["blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", ],
				["blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", ],
				["blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", ],
				["blank", "blank", "blank", "white", "black", "blank", "blank", "blank", ],
				["blank", "blank", "blank", "black", "white", "blank", "blank", "blank", ],
				["blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", ],
				["blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", ],
				["blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", ],
			],
		}
    }

	squareOnClick = (rowindex, colindex) => {
		if( this.state.board[rowindex][colindex] === "blank") {
			
			let _board = [...this.state.board];
			let _turn = this.state.turn;

			// filling with opposite color
			_board[rowindex][colindex] = _turn;

			// changing coin color ( turn )
			this.setState({
				turn: ( _turn === "black" ? "white" : "black" ), // opposite_color
				board: _board,
			});
		}

	}

	render() {
		return (
			<>
				<Head>
					<title>Othello Game</title>
				</Head>
				
				<div className="container ">

					<div className="my-3 text-xl text-center ">
						{this.state.turn.toUpperCase()} to play
					</div>
					
					{/*  */}

					<div className="grid grid-cols-8 mx-auto bg-green-500   w-64 h-64    md:w-[32rem] md:h-[32rem]  ">
						{this.state.board.map((rowval, rowindex) => {
							return(
								rowval.map((colval, colindex) => {
									return(
										<Square
											key={colindex}

											squareOnClick={() => this.squareOnClick(rowindex, colindex)}

											colval={colval}
											
											rowindex={rowindex}
											colindex={colindex}
										/>
									);
								})
							)
						})}
					</div>

					<button className="bg-blue-600 text-white hover:bg-blue-700 px-2 py-3 rounded-lg border-4 border-white active:border-blue-300     block mx-auto my-3" onClick={() => {
						this.setState({
							turn: "white",
							board: [
								["blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", ],
								["blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", ],
								["blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", ],
								["blank", "blank", "blank", "white", "black", "blank", "blank", "blank", ],
								["blank", "blank", "blank", "black", "white", "blank", "blank", "blank", ],
								["blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", ],
								["blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", ],
								["blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", ],
							],
						});
					}}>
						Restart Game
					</button>
				</div>
			</>
		);
	}
}
