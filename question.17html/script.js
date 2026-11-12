function checkEligibility() {

    // Get input values
    var age = Number(document.getElementById("age").value);
    var attendance = Number(document.getElementById("attendance").value);
    var marks = Number(document.getElementById("marks").value);

    // Validate input
    if (
        document.getElementById("age").value === "" ||
        document.getElementById("attendance").value === "" ||
        document.getElementById("marks").value === "" ||
        age < 0 ||
        attendance < 0 || attendance > 100 ||
        marks < 0 || marks > 100
    ) {
        alert("Please enter valid details.");
        return;
    }

    // Check eligibility
    if (age >= 18 && attendance >= 75 && marks >= 40) {

        alert("Congratulations! You are eligible.");

        document.getElementById("result").innerHTML =
            "You are Eligible for Examination/Admission.";

    }
    else {

        alert("Sorry! You are not eligible.");

        document.getElementById("result").innerHTML =
            "You are Not Eligible for Examination/Admission.";

    }
}