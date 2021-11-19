import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="bg-cyan-500 mb-3">
			<div className="container flex gap-2 py-2 justify-center">
				<Link href="/">
					<a className="my-auto">
						<img src="/favicon.png" alt="logo" width={45} />
					</a>
				</Link>
				<div className="my-auto text-2xl">
					<Link href="/">
						<a className="my-auto">Othello Game</a>
					</Link>
				</div>
			</div>
		</nav>
	);
}
