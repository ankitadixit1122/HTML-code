let test_str = "Hello World";
str =test_str.split(" ").join("");
count_occur( str);
function count_occur( str )
    {
    
    for( let i = 0 ;i < str.length ;i++)
    { 
        let count = 0;
        for( let j = 0 ;j < str.length ;j++)
        {
          if( str[i].toUpperCase() == str[j].toUpperCase() && i > j  )
          {
            break;
          }
          if( str[i].toUpperCase() == str[j].toUpperCase() )
          {
            count++;
          }
        }
        if( count > 0)
        console.log(`${str[i].toUpperCase()} occurs ${count} times`);
      }
    
    }