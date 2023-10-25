

function SalesTotals(sales){
    let updatedSalesItems = 
    sales.map(sale=>
      {let {original,stock,discount=0.0} = sale;
      sale['sale'] = original - original * discount;
      sale['total'] = sale.sale*sale.stock;
      return sale;
    });
    return updatedSalesItems;
  }

  const sales = [ 
    { item: 'PS4 Pro', stock: 3, original: 399.99 }, 
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 }, 
    { item: 'Nintendo Switch', stock: 4, original: 299.99 }, 
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 }, 
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 } 
  ]; 
  let updatedSalesItems = SalesTotals(sales);
  console.log(updatedSalesItems);
  




  