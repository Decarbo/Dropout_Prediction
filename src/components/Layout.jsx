import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
	return (
		<div>
			<Navbar />
			<main>
				<Outlet /> {/* renders the current route's component */}
			</main>
			<Footer />
		</div>
	);
}

export default Layout;
