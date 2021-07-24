export const format_data = (data,name) => {
    let finalData = {
        name: name,
        labels: [],
        datasets: [
          {
          
            label: "Price",
            data: [],
            backgroundColor: "rgba(140, 7, 249, 0.8)",
            borderColor: "rgba(140, 7, 249, 0.2)",
            fill: false
          },{
           
            label: "Lows",
            data: [],
            backgroundColor: "rgba(252, 55, 91, 0.8)",
            borderColor: "rgba(252, 55, 91, 0.2)",
            fill: false
          },
          {
            
           
            label: "Highs",
            data: [],
            backgroundColor: "rgba(37, 252, 95, 0.8)",
            borderColor: "rgba(37, 252, 95, 0.2)",
            fill: false
          }
        ]
      };
      
      //convert dates from timestamp to mm/dd/yy format
      let dates = data.map((val) => {
        const ts = val[0];
        let date = new Date(ts * 1000);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
    
        let final = `${month}-${day}-${year}`;
        return final;
      });
      
      //coinbase API returns multiple price values, we want the ending price for that day
      let prices = data.map((val) => {
        return val[4];
      });

      let lows = data.map((val) => {
        return val[1]
      })
      let highs = data.map((val) => {
        return val[2]
      })
    
      //reverse price array so it is in chronological order
      prices.reverse();
      lows.reverse();
      
      //do same for dates
      dates.reverse();
    
      //set data labels as the date array for ChartJS
      finalData.labels = dates.slice(200,500);
    
      //price array will be used as dataset for ChartJS
      finalData.datasets[0].data = prices;
      finalData.datasets[1].data = lows;
      finalData.datasets[2].data = highs;
  
      return finalData;
}