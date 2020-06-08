import faker from "faker";
import { Mappable } from "./CustomMap";

export default class Company implements Mappable {
	comapanyName: string;
	catchPhrase: string;
	location: {
		lat: number;
		lng: number;
	};
	constructor() {
		this.comapanyName = faker.company.companyName();
		this.catchPhrase = faker.company.catchPhrase();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		};
	}
	markerContent() {
		return `
      <div>
        <h1>Company Name: ${this.comapanyName}</h1>
        <h3>Catch Phrase: ${this.catchPhrase}</h3>
      </div>
    `;
	}
}
