var citiesByState = {
    goa:["panaji"],
    andhra: ["vizag","rajahmundry","vijayawada"],
    telangana: ["warangal","bhadrachalam","hyd"],
    kerala: ["kochi","Kanpur"],
   
    tamilnadu:["chennai","pondi","koyembade","coimbatoor"]
    }

    
    function makeSubmenu(value) {
            if(value.length==0) document.getElementById("citySelect").innerHTML = "<option></option>";
            else {
                 var citiesOptions = "";
                 for(cityId in citiesByState[value]) {
                 citiesOptions+="<option>"+citiesByState[value][cityId]+"</option>";
                //  console.log(citiesByState[value][cityId]);
                //  console.log(citiesOptions+="<option>"+citiesByState[value][cityId]+"</option>")
                }
            document.getElementById("citySelect").innerHTML = citiesOptions;
           }
    }




    function displaySelected() { 
        var country = document.getElementById("countrySelect").value;
        var city = document.getElementById("citySelect").value;
        alert(country+"\n"+city);
    }
    function resetSelection() {
    document.getElementById("countrySelect").selectedIndex = 0;
    document.getElementById("citySelect").innerHTML = 0;
    }