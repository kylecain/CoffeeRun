(function (window){
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]'
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var CheckList = App.CheckList;

    var myTruck = new Truck('ncc-1701', new DataStore());
    var checklist = new CheckList(CHECKLIST_SELECTOR)
    checklist.addClickHandler(myTruck.deliverOrder.bind(myTruck))
    window.myTruck = myTruck;

    var formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(function(data) {
        myTruck.createOrder.call(myTruck, data);
        checklist.addRow.call(checklist, data);
    });

    console.log(formHandler);
})(window);