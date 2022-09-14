/* Instructions

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/

function humanReadable(seconds) {
  let HH = 0;
  let MM = 0;
  let SS = 0;

  if (seconds / 3600 >= 1) {
    HH = Math.floor(seconds / 3600);
    seconds = Math.floor(seconds % 3600);
  }

  if (seconds / 60 >= 1) {
    MM = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
  }

  SS = seconds;

  if (HH < 10) {
    HH = "0" + `${HH}`;
  }

  if (MM < 10) {
    MM = "0" + `${MM}`;
  }

  if (SS < 10) {
    SS = "0" + `${SS}`;
  }

  return `${HH}:${MM}:${SS}`;
}
