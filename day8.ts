function drawRace(indices: number[], length: number): string {
    return indices
        .map((position, index) => {
            const offset = ' '.repeat(indices.length - index - 1); // Desplazamiento isométrico
            const track = Array.from({ length }, () => '~'); // Pista inicial con nieve
            const pos = position >= 0 ? position : length + position; // Calcular posición del reno
            if (pos >= 0 && pos < length) track[pos] = 'r'; // Colocar reno en la posición
            return `${offset}${track.join('')} /${index + 1}`; // Formar carril
        })
        .join('\n'); // Unir carriles con saltos de línea
}
