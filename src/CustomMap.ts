//instructions to every other class
// on how they can be an argument to 'addMarker'
//as long as the class has location property it could be of Mappable type
export interface Mappable {
	location: {
		lat: number;
		lng: number;
	};
	markerContent(): string;
}

export class CustomMap {
	private bingMap: Microsoft.Maps.Map;
	divId: string;
	constructor(divId: string) {
		this.divId = divId;
	}
	startMap(): void {
		this.bingMap = new Microsoft.Maps.Map(
			document.getElementById(this.divId),
			{
				credentials:
					"Anq7xs-Qy_Pyu9AxPGek8DgEWKALCvzC5YkXT0E16ZogDf0UT-W1rpBuDIAvC4sA",
			}
		);
		this.bingMap.setView({
			zoom: 1,
			center: new Microsoft.Maps.Location(0, 0),
		});
	}

	addMarker(mappable: Mappable): void {
		const pin = new Microsoft.Maps.Pushpin(
			new Microsoft.Maps.Location(
				mappable.location.lat,
				mappable.location.lng
			),
			null
		);
		Microsoft.Maps.Events.addHandler(pin, "click", () => {
			const infoBox = new Microsoft.Maps.Infobox(pin.getLocation(), {
				htmlContent: mappable.markerContent(),
				visible: false,
			});
			infoBox.setMap(this.bingMap);
			infoBox.setOptions({ visible: true });
		});
		this.bingMap.entities.push(pin);
	}
}
