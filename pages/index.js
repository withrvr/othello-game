import { useState } from "react";
import Head from "next/head";


export default function Home() {

	const [turn, setTurn] = useState("white");

	const [board, setBoard] = useState([
		["blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", ],
		["blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", ],
		["blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", ],
		["blank", "blank", "blank", "white", "black", "blank", "blank", "blank", ],
		["blank", "blank", "blank", "black", "white", "blank", "blank", "blank", ],
		["blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", ],
		["blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", ],
		["blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", ],
	]);

	return (	

		<>
			<Head>
				<title>Othello Game</title>
			</Head>
			
			<div className="container text-center ">

				<div className="my-1 text-xl ">
					{turn.toUpperCase()} to play
				</div>
				
				<div className="grid grid-cols-8 bg-green-500 border-4 border-green-600">
					{board.map((rowval, rowindex) => {
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
										key={colindex} className={"cursor-pointer p-8 border-4 border-green-600 " + bg_color}
										onClick={() => {

											let _board = [...board];
												
											if( _board[rowindex][colindex] === "blank") {

												// filling with whtie or blank coins
												_board[rowindex][colindex] = turn;
												setBoard(_board);

												// chnaging coin color ( turn )
												if(turn === 'white') {
													setTurn('black');
												}
												else if (turn === 'black') {
													setTurn('white');
												}

											}

										}}
										title={printval}
									></div>
								)
							})
						)
					})}
				</div>
			</div>
		</>
	);
}
