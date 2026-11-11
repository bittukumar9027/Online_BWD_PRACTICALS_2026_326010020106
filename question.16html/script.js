function calculateResult() {

    // Accept marks
    var m1 = Number(document.getElementById("sub1").value);
    var m2 = Number(document.getElementById("sub2").value);
    var m3 = Number(document.getElementById("sub3").value);
    var m4 = Number(document.getElementById("sub4").value);
    var m5 = Number(document.getElementById("sub5").value);

    var marks = [m1, m2, m3, m4, m5];

    // Validate marks
    var inputs = ["sub1", "sub2", "sub3", "sub4", "sub5"];

    for (var i = 0; i < inputs.length; i++) {
        var value = document.getElementById(inputs[i]).value;

        if (value === "" || marks[i] < 0 || marks[i] > 100) {
            document.getElementById("result").innerHTML =
                "Please enter marks between 0 and 100.";
            return;
        }
    }

    // Calculate total and percentage
    var total = m1 + m2 + m3 + m4 + m5;
    var percentage = total / 5;

    // Calculate grade
    var grade;

    if (marks.some(mark => mark < 33)) {
        grade = "Fail";
    }
    else if (percentage >= 90) {
        grade = "A+";
    }
    else if (percentage >= 80) {
        grade = "A";
    }
    else if (percentage >= 70) {
        grade = "B";
    }
    else if (percentage >= 60) {
        grade = "C";
    }
    else if (percentage >= 50) {
        grade = "D";
    }
    else {
        grade = "E";
    }

    // Display result
    document.getElementById("result").innerHTML =
        "<h3>Student Result</h3>" +
        "Total Marks: " + total + " / 500<br>" +
        "Percentage: " + percentage.toFixed(2) + "%<br>" +
        "Grade: " + grade;
}