  <div id="chart_div"></div>
  
 <script src="https://www.gstatic.com/charts/loader.js"></script>
    <script>
      google.charts.load('43', {'packages':['bar']});
      
      google.charts.setOnLoadCallback(drawChart);
   
      function drawChart() {
          var data = google.visualization.arrayToDataTable([
            ['Year', 'Sales', 'Expenses'],
            ['2013',  1000,      400],
            ['2014',  1170,      460],
            ['2015',  660,       1120],
            ['2016',  1030,      540]
          ]);
  
          var options = {
            title: 'Company Performance',
            hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
  
          var chart = new google.charts.Bar(document.getElementById('chart_div'));
          chart.draw(data, options);
        }
    </script>