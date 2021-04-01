import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const home = () => {
	return (
		<div className="home">
			<Navigation />
			<Logo />
			<Countries />
		</div>
	);
};

export default home;