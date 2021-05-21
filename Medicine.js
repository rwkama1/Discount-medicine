class Medicine
{
    constructor(pprice)
    {
        this.price=pprice;
    }
    total_with_discount=()=>
    {
     let discount=0;
     let total=0;
     discount=this.price*.35;
     total=this.price-discount;  
     return {total,discount}
    }
   
}
module.exports={Medicine}