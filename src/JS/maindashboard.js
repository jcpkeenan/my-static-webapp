$(document).ready(function() {
    // Fix for navbar toggler on mobile
    $('.navbar-toggler').on('click', function() {
        $('#navbarSupportedContent').toggleClass('show');
    });
    
    getDashboardData();
});

async function getDashboardData(){
    const token = getJwtToken();
    
    if (!token) {
        console.log('User not authenticated');
        // Redirect to login or show error
    }
}

function openOverAllEnergy() {
    $("#energystarscoremodal").modal('show');
}

function closeOverAllEnergy() {
    $("#energystarscoremodal").modal('hide');        
}

function openwatersavingmodal() {
    $("#watersavingmodal").modal('show');
}

function closewatersavingmodal() {
    $("#watersavingmodal").modal('hide');        
}
function openhighwatermodal() {
    $("#HighWaterModal").modal('show');

    const checkbox = document.getElementById('property3Checkbox');
    checkbox.checked = true;
}

function closehighwatermodal() {
    $("#HighWaterModal").modal('hide');        
}
function openhighenergymodal() {
    $("#HighEnergyModal").modal('show');

    const checkbox = document.getElementById('property1Checkbox');
    checkbox.checked = true;
}

function closehighenergymodal() {
    $("#HighEnergyModal").modal('hide');        
}

function setSelectedProperties(){
    // Get all checkboxes with the class "property-checkbox"
    const checkboxes = document.querySelectorAll('.property-checkbox');
    
    // Array to store the selected properties' data
    let selectedProperties = [];

    // Loop through each checkbox and check if it is checked
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            // Get the property info from the data-attribute and add to the array
            selectedProperties.push(checkbox.getAttribute('data-property'));
        }
    });

    // If selected properties exist, store the data in localStorage
    if (selectedProperties.length > 0) {
        localStorage.setItem('selectedProperties', JSON.stringify(selectedProperties));
        // Redirect to the dashboard details page
        window.location.href = 'dashboarddetails1.html';
    } else {
        // Optionally show an alert if no properties are selected
        alert('Please select at least one property.');
    }
}

// Get the "Go to Dashboard" button
const goToDashboardButton = document.getElementById('goToDashboardButton');

// Add event listener to the "Go to Dashboard" button
goToDashboardButton.addEventListener('click', function(event) {
    // Prevent the default action of the link
    event.preventDefault();
    
    // Get all checkboxes with the class "property-checkbox"
    const checkboxes = document.querySelectorAll('.property-checkbox');
    
    // Array to store the selected properties' data
    let selectedProperties = [];

    // Loop through each checkbox and check if it is checked
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            // Get the property info from the data-attribute and add to the array
            selectedProperties.push(checkbox.getAttribute('data-property'));
        }
    });

    // If selected properties exist, store the data in localStorage
    if (selectedProperties.length > 0) {
        localStorage.setItem('selectedProperties', JSON.stringify(selectedProperties));
        // Redirect to the dashboard details page
        window.location.href = 'dashboarddetails1.html';
    } else {
        // Optionally show an alert if no properties are selected
        alert('Please select at least one property.');
    }
});


const selectAllCheckbox = document.getElementById('selectAllCheckbox');

    selectAllCheckbox.addEventListener('change', function() {


    const propertyCheckboxes = document.querySelectorAll('.property-checkbox');
    
    propertyCheckboxes.forEach(function(checkbox) {
        checkbox.checked = selectAllCheckbox.checked;
    });
});



function updateMetrics(address, energyStar, eui, wui, ghg, energySavings, waterSavings) {
document.getElementById('energy-star').innerText = energyStar;
document.getElementById('eui').innerText = eui + ' kBTU/sqft';
document.getElementById('wui').innerText = wui + ' gal/sqft';
document.getElementById('ghg').innerText = ghg + ' tons';
document.getElementById('energy-savings').innerText = energySavings;
document.getElementById('water-savings').innerText = waterSavings;
}

function selectProperty(propertyId, address, energyStar, eui, wui, ghg, energySavings, waterSavings) {
// Remove 'selected' class from all properties
document.querySelectorAll('.property').forEach(function(el) {
    el.classList.remove('selected');
});

// Add 'selected' class to the clicked property
document.getElementById(propertyId).classList.add('selected');

// Update metrics
updateMetrics(address, energyStar, eui, wui, ghg, energySavings, waterSavings);
}

function toggleValue(elementId, value1, value2) {
const element = document.getElementById(elementId);
element.innerText = element.innerText === value1 ? value2 : value1;
}

// Pie Chart for Energy Sources
// put label inside the pichart and removed legend.
//find a way to put a dollar sing in the data.
//also keep a tooltip where it shows the percentage.
//water use intensity new category gallons per square ft

const ctx = document.getElementById('energyPieChart').getContext('2d');
var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
        labels: ['Natural Gas', 'Oil', 'Electric'],
        datasets: [{
            data: [40, 30, 30],
            backgroundColor: ['#ff9999', '#66b3ff', '#99ff99'],
            hoverBackgroundColor: ['#fc5858', '#178afc', '#3afc3a'],
        }]
    },
    options: {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        // Customizing the tooltip to show percentage
                        let total = tooltipItem.chart.data.datasets[0].data.reduce((acc, value) => acc + value, 0);
                        let currentValue = tooltipItem.raw;
                        let percentage = (currentValue / total * 100).toFixed(2) + '%';
                        return tooltipItem.label + ': ' + percentage;
                    }
                }
            },
            datalabels: {
                formatter: function(value, context) {
                    // Calculate percentage for each section
                    let total = context.dataset.data.reduce((acc, val) => acc + val, 0);
                    let percentage = ((value / total) * 100).toFixed(2) + '%';
                    
                    // Return static label along with the percentage
                    return context.chart.data.labels[context.dataIndex] + ': ' + percentage;
                },
                color: '#fff',
                font: {
                    weight: 'bold',
                    size: 16
                },
                anchor: 'center', 
                align: 'center',
            }
        }
    }
    });