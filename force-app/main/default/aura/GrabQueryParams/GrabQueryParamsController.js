({
   // When a flow executes this component, it calls the invoke method
   invoke : function(component, event, helper) {
      
      var sPageURL = decodeURIComponent(window.location.search.substring(1)); //You get the whole decoded URL of the page.
      var sURLVariables = sPageURL.split('&'); //Split by & so that you get the key value pairs separately in a list
      var sParameterName;
      var i;
       
       //console.log(sPageURL);
       //console.log(sURLVariables);
       
       for (i = 0; i < sURLVariables.length; i++) {
           sParameterName = sURLVariables[i].split('='); //to split the key from the value.
           
           //console.log(sParameterName[0]);
           
           if (sParameterName[0] === 'varName') { //lets say you are looking for param name - firstName
               component.set("v.varName", sParameterName[1]);
               console.log(component.get("v.varName"));
           }
       }
   }
})