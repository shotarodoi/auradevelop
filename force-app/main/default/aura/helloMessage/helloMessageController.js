({
	handleClick : function(component, event, helper) {

		//the button
		let btnClick = event.getSource(); 
		//the button's label
		let btnMessage = btnClick.get("v.label"); 
		//update our message
		component.set("v.message", btnMessage); 
	},

	handleClick2: function(component, event, helper) {
		let newMessage = event.getSource().get("v.label");
		console.log("handleClick2: Message: " + newMessage);
		component.set("v.message", newMessage);
	},

	handleClick3: function(component, event, helper) {
		component.set("v.message", event.getSource().get("v.label"));
	}
})