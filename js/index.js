const gradeForm = document.getElementById('gradeForm');
const resultSection = document.getElementById('resultSection');

// Event Listener for Form Submission
gradeForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Stop page refresh

    // checkValidity() verifies all 'required' and 'min/max' constraints
    if (!gradeForm.checkValidity()) {
        event.stopPropagation();
        gradeForm.classList.add('was-validated');
    } else {
        calculateGrade();
    }
});

function calculateGrade() {
    // 1. Get Values
    const m1 = parseFloat(document.getElementById('sub1').value);
    const m2 = parseFloat(document.getElementById('sub2').value);
    const m3 = parseFloat(document.getElementById('sub3').value);
    const m4 = parseFloat(document.getElementById('sub4').value);
    const m5 = parseFloat(document.getElementById('sub5').value);

    // 2. Arithmetic (Total and Average)
    const total = m1 + m2 + m3 + m4 + m5;
    const average = total / 5;

    // 3. Grade Logic
    let grade = "";
    let colorClass = "";

    if (average >= 90) { grade = "A"; colorClass = "bg-success-subtle text-success border-success"; }
    else if (average >= 75) { grade = "B"; colorClass = "bg-primary-subtle text-primary border-primary"; }
    else if (average >= 60) { grade = "C"; colorClass = "bg-warning-subtle text-warning border-warning"; }
    else if (average >= 40) { grade = "D"; colorClass = "bg-secondary-subtle text-secondary border-secondary"; }
    else { grade = "Fail"; colorClass = "bg-danger-subtle text-danger border-danger"; }

    // 4. Update UI
    resultSection.classList.remove('d-none');
    document.getElementById('displayTotal').innerText = total;
    document.getElementById('displayAvg').innerText = average.toFixed(1) + "%";
    document.getElementById('displayGrade').innerText = grade;
    document.getElementById('gradeBox').className = "p-3 rounded-4 border shadow-sm " + colorClass;
}

// Reset Function
function resetForm() {
    gradeForm.reset(); // Clears all inputs
    gradeForm.classList.remove('was-validated'); // Removes red/green borders
    resultSection.classList.add('d-none'); // Hides the result cards
}
