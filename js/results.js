// Fetch data
function fetchData() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "salary.php",
            type: "GET",
            dataType: "json",
            success: function(data) {
                console.log(data);
                resolve(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
                reject(new Error('Failed to fetch data'));
            }
        });
    });
}

// Function to display the results
function displayResults(industryData) {
    const industry = localStorage.getItem("industry");
    const userSalary = parseFloat(localStorage.getItem("expectedSalary"));
    let averageSalary = 0.00;
    for(let index in industryData){
        if(industryData[index][1]==industry){
            averageSalary = parseFloat(industryData[index][12].replace(/,/g, ''));
        }
    }
    // Fill in the HTML elements with appropriate data
    document.getElementById("industry-display").textContent = industry;
    document.getElementById("expected-salary-display").textContent = `${userSalary.toFixed(2)}`;
    document.getElementById("average-salary-display").textContent = `${averageSalary.toFixed(2)}`;
    document.getElementById("difference-display").textContent = `${Math.abs((userSalary - averageSalary)).toFixed(2)}`;

    let feedbackElement = document.getElementById("feedback");
    if (userSalary > averageSalary) {
        feedbackElement.textContent = "Your expected salary is above the industry average! Maybe you need to reconsider your choice if you want to satisfy with your future salary.";
        feedbackElement.style.color = "red";
    } else if (userSalary < averageSalary) {
        feedbackElement.textContent = "Your expected salary is below the industry average. Which means you kinda underestimated your choice of industry. You could get higher paid if you make good efforts to learn skills in that area of specialty.";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "Your expected salary matches the industry average! It appears you understand your future career. You've made a great choice! Nothing to worry about.";
        feedbackElement.style.color = "blue";
    }
}

// Call functions on page load
window.onload = async function() {
    try {
        let industryData = await fetchData();
        console.log(industryData);
        displayResults(industryData);
    } catch (error) {
        console.error('Error:', error.message);
    }
};