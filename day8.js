/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
    let race = [];
  
    for (let i = 0; i < indices.length; i++) {
      let pos = indices[i];
      let track = new Array(length).fill('~');
      
      if (pos >= 0) {
        track[pos] = 'r';  // Positive position: from the start
      } else {
        track[length + pos] = 'r';  // Negative position: from the end
      }
      
      // Join the track and add the lane number
      race.push(track.join('') + ` /${i + 1}`);
    }
  
    // Reverse the race array to create the isometric view
    return race.reverse().join('\n');
  }
  
  // Ejemplos de prueba
  console.log(drawRace([0, 5, -3], 10));
  console.log(drawRace([2, -1, 0, 5], 8));
  console.log(drawRace([3, 7, -2], 12));
  