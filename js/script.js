function clearstorage(){
    localStorage.clear();
}

function Submit(){
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
    var stock = document.getElementById("stocklist");
    var selected = stock.options[stock.selectedIndex].value;
    var durasi = document.getElementById("duration").value;
    var dur = document.getElementById("duration2");
    var durasi2 = dur.options[dur.selectedIndex].value;
    var banyaknya = document.getElementById("amount").value
    localStorage['stock'+localStorage.clickcount] = selected;
    localStorage['duration'+localStorage.clickcount] = durasi+" "+durasi2;
    localStorage['amount'+localStorage.clickcount]= banyaknya;

    if(document.getElementById("stocklist2") != null){
        var stock2 = document.getElementById("stocklist2");
        var selected2 = stock2.options[stock2.selectedIndex].value;
        localStorage['stock'+localStorage.clickcount] = selected+" "+selected2;
    }
    if(document.getElementById("stocklist3") != null){
        var stock3 = document.getElementById("stocklist3");
        var selected3 = stock3.options[stock3.selectedIndex].value;
        localStorage['stock'+localStorage.clickcount] = selected+" "+selected2+" "+selected3;
    }
    if(document.getElementById("stocklist4") != null){
        var stock4 = document.getElementById("stocklist4");
        var selected4 = stock4.options[stock4.selectedIndex].value;
        localStorage['stock'+localStorage.clickcount] = selected+" "+selected2+" "+selected3+" "+selected4;
    }
    if(document.getElementById("stocklist5") != null){
        var stock5 = document.getElementById("stocklist5");
        var selected5 = stock5.options[stock5.selectedIndex].value;
        localStorage['stock'+localStorage.clickcount] = selected+" "+selected2+" "+selected3+" "+selected4+" "+selected5;
    }

}

window.onload = function GenerateTable() {

    //Build an array containing Customer records.
    //this.console.log(tracking_num);

    var customers = new Array();
    
    if(this.localStorage.length > 3){
        customers.push(["Stock", "Duration", "Amount (HKD$)"]);
    }

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Investment Allocation",
            fontFamily: "Geneva",
            fontWeigt: "bold",
            fontSize:30,
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "\"HKD$\" ######",
            indexLabel: "{label} {y}",
            dataPoints: [
            ]
        }]
    });

    for(var i=0; i < localStorage.length ; i++){
        if(((i%3) == 0) && i != 0){
            customers.push([localStorage.getItem("stock"+(i/3)),localStorage.getItem("duration"+(i/3)), localStorage.getItem("amount"+(i/3))]);
            chart.options.data[0].dataPoints.push({y:localStorage.getItem("amount"+(i/3)),label:localStorage.getItem("stock"+(i/3)) });
        }
    }
    //var customers = new Array();

    //Create a HTML Table element.
    var table = document.createElement("table");
    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("th");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);

    chart.render();

}



