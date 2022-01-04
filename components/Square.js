import { Component } from "react";
import PropTypes from "prop-types";

export default class Square extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const _colval = this.props.colval;

		let bg_color = "";
		let cursor = " cursor-not-allowed ";
		const printval = `${_colval} - [${this.props.rowindex}][${this.props.colindex}]`;

		if (_colval === "black") bg_color = "bg-black";
		else if (_colval === "white") bg_color = "bg-white";
		else if (_colval == "-----") {
			bg_color = "bg-transparent";
			cursor = " cursor-pointer ";
		} else bg_color = "bg-red-500";

		return (
			<div
				className={
					"grid border-[#059669]   w-[2rem] h-[2rem] border-[1px]    md:w-[4rem] md:h-[4rem] md:border-2 " +
					cursor
				}
				onClick={this.props.squareOnClick}
				title={printval}
			>
				<div
					className={
						"rounded-full w-[90%] h-[90%] m-auto " + " " + bg_color
					}
				>
					{/* circle */}
				</div>
			</div>
		);
	}
}

Square.propTypes = {
	squareOnClick: PropTypes.func,

	colval: PropTypes.string,

	rowindex: PropTypes.number,
	colindex: PropTypes.number,
};
