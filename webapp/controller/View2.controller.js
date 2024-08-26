sap.ui.define([
    "./App.controller",
     "sap/ui/model/FilterOperator",
    "sap/ui/model/Filter"
   
],
function (Controller,FilterOperator,Filter) {
    "use strict";

    return Controller.extend("cross.crossapp.controller.View2", {
        onInit: function () {
            var oRouter=this.getOwnerComponent().getRouter()
            oRouter.getRoute("RouteView2").attachPatternMatched(this._routePaternMatch,this)
        },
        _routePaternMatch:function(oEvent){
            var operand1= oEvent.mParameters.arguments.cName
            var otab=this.getView().byId("yourTable")
            var oBinding=otab.getBinding("items")
            var oFitler= new Filter("CompanyName", FilterOperator.EQ,operand1)
            oBinding.filter([oFitler])
        }

      
    });
});
