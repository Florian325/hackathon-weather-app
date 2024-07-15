export function getWeatherDescription(code: number): string {
    const weatherDescriptions: { [key: number]: string } = {
        0: "Klarer Himmel",
        1: "Überwiegend klar",
        2: "Teilweise bewölkt",
        3: "Bedeckt",
        45: "Nebel",
        48: "Rauhreifnebel",
        51: "Nieselregen: Leichte Intensität",
        53: "Nieselregen: Mäßige Intensität",
        55: "Nieselregen: Starke Intensität",
        56: "Gefrierender Nieselregen: Leichte Intensität",
        57: "Gefrierender Nieselregen: Starke Intensität",
        61: "Regen: Leichte Intensität",
        63: "Regen: Mäßige Intensität",
        65: "Regen: Starke Intensität",
        66: "Gefrierender Regen: Leichte Intensität",
        67: "Gefrierender Regen: Starke Intensität",
        71: "Schneefall: Leichte Intensität",
        73: "Schneefall: Mäßige Intensität",
        75: "Schneefall: Starke Intensität",
        77: "Schneekörner",
        80: "Regenschauer: Leichte Intensität",
        81: "Regenschauer: Mäßige Intensität",
        82: "Regenschauer: Heftige Intensität",
        85: "Schneeschauer: Leichte Intensität",
        86: "Schneeschauer: Starke Intensität",
        95: "Gewitter: Leichte oder mäßige Intensität",
        96: "Gewitter mit leichtem Hagel",
        99: "Gewitter mit starkem Hagel",
    }

    return weatherDescriptions[code] || "Unbekannter Wettercode"
}
