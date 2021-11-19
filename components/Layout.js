import Head from "next/head";
// import Navbar from "./Navbar";

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Othello Game :)</title>
				<link rel="icon" href="/favicon.png" />
			</Head>

			{/* <Navbar /> */}

			<main>
				{children}
			</main>
		</>
	);
};

export default Layout;
