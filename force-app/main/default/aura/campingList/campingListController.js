({
    clickCreateItem : function(component, event, helper) {
       let validCamping = component.find("campingform").reduce(function(validSoFar, inputCmp) {
        inputCmp.showHelpMessageIfInvalid();
        return validSoFar && inputCmp.get("v.validity").valid;
       }, true);

       if(validCamping) {
        let newItem = component.get("v.newItem");
        let theCamping = component.get("v.items");
        let newcampingItem = JSON.parse(JSON.stringify(newItem));

        theCamping.push(newcampingItem) ;
        component.set("v.items", theCamping);
        component.set("v.newItem", {'sobjectType' : 'Camping_Item__c',
                                    'Name' : '',
                                    'Quantity__c' : '',
                                    'Price__C' : '',
                                    'Packed__C' : false});
       }
    }
})