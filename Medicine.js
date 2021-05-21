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
module.exports={Medicine}