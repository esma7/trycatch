
// new Task
// asagidaki arraydan isdifade ederek main.js  ve index.js yaradin
// index.js icinde newArray i daxil edin main.js de ele bir function qurun ki
// name ve arrayi parametr olaraq verdikde hemin namenin city ve streetini 
// versin eger name olan objectin icinde city ve ya street yoxdusa
//  error versin logda 


const getData = (arr, name)=>{
    arr.filter((item)=>{
        if(item.name == name){
            try {               

                if((item.address.city && item.address.street)){

                    console.log(item.address.city);
                } else{
                    throw new Error("City ve ya street yoxdur");
                    
                }
            } catch (error) {
                console.log(error.message);
                
            }          
            
        }
    })
}



export default getData








