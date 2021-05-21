# Discount medicine

## Description

Calculate the discount and the amount to pay for a medicine

## Solution

```Javascript

class Medicine
{
    constructor(pprice)
    {
        this.price=pprice;
    }
 total_with_discount=(discount)=>
    {

     let total=0;
     let calcdiscount=0;
     calcdiscount=discount/100;
     discount=this.price*calcdiscount;
     total=this.price-discount;  
     return {total,discount}
    }
   
}

```
## Usage

```Javascript

 let Medicine=require("./Medicine").Medicine;

let medicine=new Medicine(10.06);
let calc=medicine.total_with_discount(35);
console.log("The medicine discount is: "+calc.discount);
console.log("                                              ");
console.log("The total to pay is: "+calc.total);


```