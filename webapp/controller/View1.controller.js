sap.ui.define([
    "./App.controller"
   
],
function (Controller,JSONModel,MessageToast) {
    "use strict";

    return Controller.extend("cross.crossapp.controller.View1", {
        onInit: function () {
        },
        onComboBoxSelectionChange:function(oEvent){
            var ovalCombo=this.getView().byId("_IDGenComboBox1").getSelectedKey()
            var oRouter= this.getOwnerComponent().getRouter()
            oRouter.navTo("RouteView2",{
                cName:ovalCombo
            })


        }
    });
});
