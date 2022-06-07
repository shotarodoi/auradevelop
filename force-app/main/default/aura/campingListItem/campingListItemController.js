({
	/**packItem1: function(componet, event, helper) {
        componet.set("v.message1", event.getSource().get("v.label"));
        console.log("v.message1" + event.getSource().get("v.label"));
    },
    
    packItem2: function(componet, event, helper) {
        componet.set("v.message2", event.getSource().get("v.label"));
        console.log("v.message2" + event.getSource().get("v.label"));
    },
    
    packItem3: function(componet, event, helper) {
        componet.set("v.message3", event.getSource().get("v.label"));
        console.log("v.message3" + event.getSource().get("v.label"));
    },**/
    
    packItem: function(componet, event, helper) {
        componet.set("v.item.Packed__c", true);
        var btnClicked = event.getSource();
        btnClicked.set("v.disabled", true);
    }
})