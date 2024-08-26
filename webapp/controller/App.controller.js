sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel", 
        "sap/m/MessageToast" 
    ],
    function(BaseController,JSONModel,MessageToast) {
      "use strict";
  
      return BaseController.extend("cross.crossapp.controller.App", {
        onInit: function () {
          // var oMdl1= new sap.ui.model.odata.v2.ODataModel(/sap/opu/odata/iwbep/GWSAMPLE_BASIC/)
          var getService = this.getOwnerComponent().getModel();
          var sUrl = getService.sServiceUrl;
          var url = sUrl + "/BusinessPartnerSet";

          $.ajax({
              url: url,
              type: "GET",
              dataType: "json", // Corrected dataType
              success: function(response, status, xhr) {
                  if (response && response.d && response.d.results) {
                      var result = response.d.results;

                      const uniqueArray = result.filter((item, index, self) => 
                          index === self.findIndex((t) => (
                              t.CompanyName === item.CompanyName
                          ))
                      );
                      // var uniqueResult = [];
                      // var uniqueCompName = new Set();

                      // result.forEach(item => {
                      //     if (!uniqueCompName.has(item.CompanyName)) {
                      //         uniqueCompName.add(item.CompanyName); // Add the CompanyName to the set
                      //         uniqueResult.push(item); // Push the item to the uniqueResult array
                      //     }
                      // });
                    
                      var nejson = new JSONModel({ uniqueArray }); // Ensure data structure consistency
                      this.getView().setModel(nejson, "danModel"); 
                      var oMdl=this.getView().getModel("danModel")
                      var nejson1=new JSONModel(response)
                      this.getView().setModel(nejson1, "danModel1")
                  }
              }.bind(this),
              error: function(error) {
                  MessageToast.show("Error fetching data: " + error.statusText); // Corrected usage
              }
          });

      }
      });
    }
  );
  