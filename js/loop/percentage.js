const percentage = 101;

if (percentage >= 80 && percentage <= 100) {
    console.log("Grade A");
} 
else if (percentage >= 60 && percentage < 80) {
    console.log("Grade B");
} 
else if (percentage >= 45 && percentage < 60) {
    console.log("Grade C");
} 
else if (percentage >= 33 && percentage < 45) {
    console.log("Grade d");
} 
else if (percentage >= 0 && percentage < 33) {
    console.log("Grade e");
} 
else {
    console.log("invalid");
}