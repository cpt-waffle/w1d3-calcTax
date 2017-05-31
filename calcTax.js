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
  let calculatedTaxedObjects = [];

  //loop through array
  for (let i = 0; i < salesData.length; i++)
  {
    //Empty object that will re initialized everytime as a new object
    let calculatedCompany = {};
    let tempSalesTaxRate = 0.0;
    let Notfound = true

    //loop through each attribute of each element in the array
    for (let j in salesData[i])
    {
      if (j === "name")
        calculatedCompany[j] = salesData[i][j];

      //Find the correct Tax rate
      if (j === "province")
      {
        //loop through salesTaxRates
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
        calculatedCompany["totalSales"] = sum;
        calculatedCompany["totalTaxes"] = sum * tempSalesTaxRate;
      }
    }

    //check if the object that just been created and made
    //exists inside the array already, and if it does merge
    //and discard
    for (let k = 0; k < calculatedTaxedObjects.length; k++)
    {
      if (calculatedTaxedObjects[k]["name"] === calculatedCompany["name"])
      {
        Notfound = false;
        calculatedTaxedObjects[k].totalSales += calculatedCompany.totalSales;
        calculatedTaxedObjects[k].totalTaxes += calculatedCompany.totalTaxes;
        k = calculatedTaxedObjects.length;
      }
    }
    if (Notfound)
      calculatedTaxedObjects.push(calculatedCompany);
  }

  // console.log("THE NEW ARRAY THATS GOING TO BE SEND");


  console.log(calculatedTaxedObjects);


}

//console.log(companySalesData);
var results = calculateSalesTax(companySalesData, salesTaxRates);




/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/