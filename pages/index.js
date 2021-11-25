import { Component } from 'react'
import Head from "next/head";

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

	render() {
		return (
			<>
				<Head>
					<title>Othello Game</title>
				</Head>
				
				<div className="container ">

					<div className="my-1 text-xl text-center ">
						{this.state.turn.toUpperCase()} to play
					</div>
					
					{/*  */}

					<div className="grid grid-cols-8 mx-auto bg-green-500   w-64 h-64    md:w-[32rem] md:h-[32rem]  ">
						{this.state.board.map((rowval, rowindex) => {
							return(
								rowval.map((colval, colindex) => {
									let bg_color = "";
									let printval = `${colval} - [${rowindex}][${colindex}]`;
				
									if(colval === "black") {
										bg_color = "bg-black";
									} else if(colval === "white") {
										bg_color = "bg-white";
									} else if(colval == "blank") {
										bg_color = "bg-transparent"
									} else {
										bg_color = "bg-red-500"
									}
				
									return(
										<div
											key={colindex} className={"grid cursor-pointer border-green-600   w-[2rem] h-[2rem] border-[1px]    md:w-[4rem] md:h-[4rem] md:border-2 "}
											onClick={() => {
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

											}}
											title={printval}
										>
											<div className={"rounded-full w-[90%] h-[90%] m-auto  " + bg_color}>{/* circle */}</div>
										</div>
									)
								})
							)
						})}
					</div>
				</div>
			</>
		);
	}
}
