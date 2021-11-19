import Link from "next/link";
import Head from "next/head";

export default function Error404() {
	return (
		<>
			<Head>
				<title>404 - Page Not Found</title>
			</Head>

			<div className="my-20 text-center">
				<img
					src="/images/are_you_sure_about_that.gif"
					alt="are_you_sure_about_that john cena image"
					className="mx-auto "
				/>
				
				<h1 className="text-4xl font-semibold my-3">
					<div>404</div>
					<div>Page Not Found</div>
				</h1>

				<Link href="/">
					<a className="link">Go to Home Page</a>
				</Link>
			</div>
		</>
	);
}
