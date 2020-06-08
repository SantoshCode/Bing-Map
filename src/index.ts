import { CustomMap } from "./CustomMap";
import User from "./User";
import Company from "./Company";

function GetMap() {
	const user = new User();
	const company = new Company();
	const customMap = new CustomMap("map");
	customMap.startMap();
	customMap.addMarker(user);
	customMap.addMarker(company);
}

window.addEventListener("load", function () {
	navigator.geolocation.getCurrentPosition(function (position) {
		GetMap();
	});
});
