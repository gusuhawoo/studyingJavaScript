// Conditional Statement
// switch
// if else if else if else if ... else
let day = 6;
let dayName;

if (day === 0) {
  dayName = 'Monday';
} else if (day === 1) {
  dayName = 'Tuesday';
} else if (day === 2) {
  dayName = 'Wednesday';
} else if (day === 3) {
  dayName = 'Thursday';
} else if (day === 4) {
  dayName = 'Friday';
} else if (day === 5) {
  dayName = 'Saturday';
} else if (day === 6) {
  dayName = 'Sunday';
}

switch (day) {
  case 0:
    dayName = 'Monday';
    break;
  case 1:
    dayName = 'Tuesday';
    break;
  case 2:
    dayName = 'Wednesday';
    break;
  case 3:
    dayName = 'Thursday';
    break;
  case 4:
    dayName = 'Friday';
    break;
  case 5:
    dayName = 'Saturday';
    break;
  case 6:
    dayName = 'Sunday';
    break;
}
