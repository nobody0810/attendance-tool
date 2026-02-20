function calculate() {

    let total = document.getElementById("total").value;
    let attended = document.getElementById("attended").value;

    total = Number(total);
    attended = Number(attended);

    if (total === 0) {
        document.getElementById("result").innerText =
            "Total classes cannot be zero.";
        return;
    }

    let percentage = (attended / total) * 100;

    document.getElementById("result").innerText =
        "Your Attendance: " + percentage.toFixed(2) + "%";

}
