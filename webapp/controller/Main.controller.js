sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "../js/Common",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
    "sap/ui/core/routing/HashChanger",
    'sap/m/Token',
    'sap/m/ColumnListItem',
    'sap/m/Label',
    "../js/TableValueHelp",
    "../js/TableFilter",
    'jquery.sap.global',
    "../js/SmartFilterCustomControl",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,MessageBox,Common,Filter,FilterOperator,HashChanger,Token,ColumnListItem,Label,TableValueHelp,TableFilter,jQuery,SmartFilterCustomControl) {
        "use strict";

        var me;
        var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "MM/dd/yyyy" });
        var sapDateFormat = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "YYYY-MM-dd" });
        var sapDateFormat2 = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "yyyyMMdd" });

        return Controller.extend("zuipurallow.controller.Main", {
            onInit: function () {
                me = this;
                SmartFilterCustomControl.setSmartFilterModel(this);
            },
            //******************************************* */
            // Smart Filter
            //******************************************* */

            setSmartFilterModel: function () {
                var oModel = this.getOwnerComponent().getModel("ZVB_3DERP_PURALLOW_FILTER_CDS");               
                var oSmartFilter = this.getView().byId("smartFilterBar");
                oSmartFilter.setModel(oModel);
            },

            beforeVariantFetch: function(oEvent) {
                SmartFilterCustomControl.beforeVariantFetch(this);
            },

            afterVariantLoad: function(oEvent) {
                SmartFilterCustomControl.afterVariantLoad(this);
            },

            clearSmartFilters: function(oEvent) {
                SmartFilterCustomControl.clearSmartFilters(this);
            }  
        });
    });
