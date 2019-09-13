var floatAge, floatDays, floatMonths, intWeeks, intFortnights;
     floatAge = parseFloat(prompt("Enter your inital age"));
     floatDays = parseFloat(floatAge*365.25).toFixed(2);
     floatMonths = parseFloat(floatAge*12).toFixed(2);
     intWeeks = parseInt(floatDays/7).toFixed(2);
     intFortnights = parseInt(floatDays/14).toFixed(2);
     alert("Current Age in years=" + floatAge);
     alert("Current Age in months=" + floatMonths);
     alert("Current Age in weeks=" + intWeeks);
     alert("Current Age in fortnights=" + intFortnights);
     