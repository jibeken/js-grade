let grade = prompt ("Enter your grade:");
if (grade >= 85 && grade <= 100){
    alert("Excelent!")
} else if (grade >= 65 && grade <= 84) {
    alert(`It is Good!`);
} else if (grade >= 50 && grade <= 64) {
    alert(`It is Average!`);
} else if (grade >= 0 && grade < 50) {
    alert(`You failed the subject :( . Idi uchis' shegol`);
} else {
    alert("Enter a valid number between 0 and 100.");
}