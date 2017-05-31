var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  let calculatedTaxFinished = {};
  let tempSalesTaxRate = 0.0;
  let tempSum = 0;
  let tempTax = 0;
  let tempName = "";
  for (let i = 0; i < salesData.length; i++)
  {
    for (let j in salesData[i])
    {

      //create new Object and properties
      if (j === "name")
      {
        tempName = salesData[i][j];
        if (typeof calculatedTaxFinished[salesData[i][j]] == 'undefined')
          calculatedTaxFinished[salesData[i][j]] = {};
      }
      if (j === "province")
      {
        for (let tax in taxRates)
        {
          if (salesData[i][j] === tax)
            tempSalesTaxRate = taxRates[tax];
        }
      }

      if (j === "sales")
      {
        let sum = 0;
        for (let sale of salesData[i][j])
        {
          sum += sale;
        }
        tempSum = sum;
        tempTax = sum * tempSalesTaxRate;
      }
    }
    if (typeof calculatedTaxFinished[tempName]["TotalSales"] == 'undefined')
      calculatedTaxFinished[tempName]["TotalSales"] = tempSum;
    else
      calculatedTaxFinished[tempName]["TotalSales"] += tempSum;

    if (typeof calculatedTaxFinished[tempName]["TotalTax"] == 'undefined')
      calculatedTaxFinished[tempName]["TotalTax"] = tempTax;
    else
      calculatedTaxFinished[tempName]["TotalTax"] += tempTax;
  }

  console.log(calculatedTaxFinished);
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
