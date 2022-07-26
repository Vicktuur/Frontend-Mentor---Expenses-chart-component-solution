let xValues = ["mon", "tue", "wed", "thu", "fri", "sat","sun"];
let yValues = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];
let barColors = [                  
    "hsl(10, 79%, 65%)",                    
    "hsl(10, 79%, 65%)",
    "hsl(186, 34%, 60%)",                    
    "hsl(10, 79%, 65%)",                    
    "hsl(10, 79%, 65%)",                    
    "hsl(10, 79%, 65%)",                    
    "hsl(10, 79%, 65%)",                    
    "hsl(10, 79%, 65%)",                    
];

new Chart("barChart",{
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        legend: {display: false},
        title: {
            display: false,
            text: "Spending - Last 7 days"
        }
    }
});
