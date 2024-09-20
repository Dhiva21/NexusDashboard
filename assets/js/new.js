var icon_show = document.querySelector(".icon_show");
var icon_not_show = document.querySelector(".icon_not_show");
var inputPass = document.querySelector("#enter-pass");
if (icon_not_show) {
  icon_not_show.addEventListener("click", function () {
    inputPass.type = "text";
    icon_show.classList.remove("d-none");
    this.classList.add("d-none");
  });
}
if (icon_show) {
  icon_show.addEventListener("click", function () {
    inputPass.type = "password";
    icon_not_show.classList.remove("d-none");
    icon_show.classList.add("d-none");
  });
}

$(document).ready(function () {
  $(".clockpicker").clockpicker({
    donetext: "Done",
  });

  $(".form-control-select2").select2();


// NSR Table
 var data3 = [
    [
      "Circle - K - Coastal Carolina",
      "1001",
      "23-01-2023",
      "1m Cloth Cable, 1M micro cable basic",
      "Pending",
      "John",
      "Customer1",
      "Done"
     ],
     [
      "Circle - K - Coastal Carolina",
      "1002",
      "23-01-2023",
      "1A Car Charger Bulk, 2 slot mini car bulk",
      "Approved",
      "Alex",
      "Customer2",
      "Done"
    ],
    [
      "Circle - K - Coastal Carolina",
      "1003",
      "23-02-2023",
      "1m Cloth Cable, 1M micro cable basic",
      "Pending",
      "Bob",
      "Customer3",
      "Done"
    ],
    [
      "Circle - K - Coastal Carolina",
      "1004",
      "12-02-2023",
      "1m Cloth Cable",
      "Approved",
      "Martin",
      "Customer4",
      "Done"
     ],
     [
      "Circle - K - Coastal Carolina",
      "1005",
      "13-04-2023",
      "1A Car Charger Bulk, 2 slot mini car bulk",
      "Pending",
      "John",
      "Customer5",
      "Done"
    ],
    
  ];
  var tableResarch3 = $("#nsrTable").DataTable({
    data: data3,
    columns: [
        { title: "Retailer", className: "text-left"},
      { title: "Request Id" },
        { title: "Requested Date" },
      { title: "Products" },
      { title: "Status" ,
        className: "text-center",
        width: 200,
        render: function (data, type, row, meta) {
          if (data === "Approved"){
             return ` <div> <p class="green_badge badge badgePos"> Approved </p> </div>`
          }
          else if(data === "Pending"){
            return ` <div> <p class="red_badge badge badgePos"> Pending </p> </div>` 
          }
         else{
          return ` <div> <p class="red_badge badge badgePos"> Reject </p> </div>` 
         }
        }

      },
      { title: "Approval By" },
      {
        title: "Requested By",
        className: "bgColorTable"

       },     
      {
        title: "Action",
        className: "text-center",
        width: 200,
        render: function (data, type, row, meta) {
          return (
            '<div class="dropdown dropDown">' +
            '<div class="dropTwo">' +
            '<button class="btn  showAction" type="button" id="dropdownMenuButton' +
            meta.row +
            '" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
            '<i class="fas fa-bars"></i>' +
            "</button>" +
            '<div class="dropdown-menu dropPos" aria-labelledby="dropdownMenuButton' +
            meta.row +
            '">' +
            '<a class="dropdown-item edit" id="edit" href="nsr.html"><span> <i class="fa-regular fa-pen-to-square mr-1"></i> </span>Edit</a>' +
            '<a class="dropdown-item duplicate" id="duplicate" href="nsr.html"><span> <i class="fa-regular fa-copy mr-1"></i> </span> Duplicate</a>' +
            '<a class="dropdown-item remove" id="remove" href="#"><span> <i class="fa-solid fa-trash mr-1"></i>  </span>Remove</a>' +
            "</div>" +
            "</div>" +
            "</div>"
          );
        },
      },
    ],
    scrollX: false,
    scrollCollapse: true,
    fixedColumns: {
      left: 1,
    },
    columnDefs: [
      {
        targets: 0,
        className: "dropdown_col text-left",
        width: 200,
      },
      {
        targets: 1,
        className: "text-center",
        width: 200,
      },
      {
        targets: 2,
        className: "text-center",
        width: 200,
      },
      {
        targets: 3,
        className: "text-center",
        width: 300,
      },
      {
        targets: 4,
        className: "text-center",
        width: 300,
      },
      {
        targets: 5,
        className: "text-center",
        width: 200,
      },
       {
        targets: 6,
        className: "text-center bgColorTable",
        width: 200,
      },
      
    ],
  });

//pcrTable

    var pcrdata = [
        [
           /* "1",*/
            "Circle - K - Coastal Carolina",
            "Novelty INC",
            "1m Cloth Cable, 1M micro cable basic",
            "$12.00",
            "$11.32",
            "$13.00",
            "$12.36",
            "06-14-2024",
            "06-13-2024",
            "$11.36",
            "$11.63",
            "Pending",
           /* "John",*/
            "Active"
            
        ],
        [
            /* "1",*/
            "Circle - K - Coastal Carolina",
            "Novelty INC",
            "1m Cloth Cable",
            "$12.00",
            "$11.32",
            "$13.00",
            "$12.36",
            "06-14-2024",
            "06-13-2024",
            "$11.36",
            "$11.63",
            "Approved",
           /* "John",*/
            "Active"

        ],
        [
            /* "1",*/
            "Circle - K - Coastal Carolina",
            "Novelty INC",
            "1M micro cable basic",
            "$12.00",
            "$11.32",
            "$13.00",
            "$12.36",
            "06-14-2024",
            "06-13-2024",
            "$11.36",
            "$11.63",
            "Approved",
            /*"John",*/
            "Active"

        ],
        [
            /* "1",*/
            "Circle - K - Coastal Carolina",
            "Novelty INC",
            "1A Car Charger Bulk, 2 slot mini car bulk",
            "$12.00",
            "$11.32",
            "$13.00",
            "$12.36",
            "06-14-2024",
            "06-13-2024",
            "$11.36",
            "$11.63",
            "Pending",
           /* "/*John",*/
            "Active"

        ],
        
       
      
    ];
    var tableResarchpcr = $("#pcrTable").DataTable({
        data: pcrdata,
        columns: [
           /* { title: "S.No" },*/
            { title: "Retailer", className: "text-left"},
            { title: "Vendor" },
            { title: "Product" },
            { title: "Old Retail Price"},
            { title: "Old Unit Price"},
            { title: "Requested Retail Price"},
            { title: "Request Unit Cost" },
            { title: "Request Start Date"},
            { title: "Date Submitted"},
            { title: "Approved Retail Price"},
            { title: "Approved Unit Cost" },
            { title: "Status",
              className: "text-center",
              width: 200,
              render: function (data, type, row, meta) {
                if (data === "Approved"){
                   return ` <div> <p class="green_badge badge badgePos"> Approved </p> </div>`
                }
                else if(data === "Pending"){
                  return ` <div> <p class="pending_badge badge badgePos"> Pending </p> </div>` 
                }
               else{
                return ` <div> <p class="red_badge badge badgePos"> Reject </p> </div>` 
               }
              }
             },            
           /* { title: "Approval by" }, */           
            {
                title: "Action",
                width: 100,
                render: function (data, type, row, meta) {
                    //var html = '';
                    //html = `<span <li><a class="feedback-link" >View Details</a></li> </span>`
                    //return html;
                    return (
                        '<div class="dropdown dropDown">' +
                        '<div class="dropTwo">' +
                        '<button class="btn  showAction" type="button" id="dropdownMenuButton' +
                        meta.row +
                        '" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                        '<i class="fas fa-bars"></i>' +
                        "</button>" +
                        '<div class="dropdown-menu dropPos" aria-labelledby="dropdownMenuButton' +
                        meta.row +
                        '">' +
                        '<a class="dropdown-item edit" id="edit" href="pcr.html"><span> <i class="fa-regular fa-pen-to-square mr-1"></i> </span>Edit</a>' +
                        '<a class="dropdown-item duplicate" id="duplicate" href="pcr.html"><span> <i class="fa-regular fa-copy mr-1"></i> </span> Duplicate</a>' +
                        '<a class="dropdown-item remove" id="remove" href="#"><span> <i class="fa-solid fa-trash mr-1"></i>  </span>Remove</a>' +
                        "</div>" +
                        "</div>" +
                        "</div>"
                    );
                },
            },
        ],
        scrollX: false,
        scrollCollapse: true,
        searching: true,
        fixedColumns: {
            left: 1,
        },
        columnDefs: [
            {
                targets: 0,
                className: "dropdown_col text-left",
                width: 200,
            },
            {
                targets: 1,
                className: "dropdown_col text-center",
                width: 200,
            }, {
                targets: 2,
                className: "dropdown_col text-center",
                width: 200,
            },
            {
                targets: 3,
                className: "dropdown_col text-center",
                width: 200,
            },
            {
                targets: 4,
                className: "dropdown_col text-center",
                width: 200,
            },
            {
                targets: 5,
                className: "dropdown_col text-center",
                width: 200,
            },
            {
                targets: 6,
                className: "dropdown_col text-center",
                width: 200,
            },
            {
                targets: 7,
                className: "dropdown_col text-center",
                width: 200,
            },
            {
                targets: 8,
                className: "dropdown_col text-center",
                width: 200,
            },
            {
                targets: 9,
                className: "dropdown_col text-center",
                width: 200,
            },
            {
                targets: 10,
                className: "dropdown_col text-center",
                width: 200,
            },
            {
                targets: 11,
                className: "dropdown_col text-center",
                width: 200,
            },
            
           
        ],
    });

    var data4 = [[
        "true",
        "Nexxus Group Fintech, LLC",
        "Caseys",
        "Thambaram",
        "chennai",
        "600221"
    ],
        [
            "true",
            " LLC",
            "Caseys",
            "Madurai",
            "Madurai",
            "627859"
        ],];
    var tableResarch4 = $("#avaibilityCountTable").DataTable({
    data: data4,
    columns: [
      { title: " " },
      { title: "Store" },
      { title: "State" },
      { title: "City" },
      { title: "Address" },
      { title: "Zip" },
     
    ],
    scrollX: false,
   scrollCollapse: true,
   searching: false,
    pagination: false,
    fixedColumns: {
      left: 1,
    },
    columnDefs: [
      {
        targets: 0,
        className: "dropdown_col text-center",
        width: 100,
        render: function(data, type, full, meta){
          return '<input type="checkbox" class="selectRow">';
      }
      },
      {
        targets: 1,
        className: "text-center",
        width: 200,
      },
      {
        targets: 2,
        className: "text-center",
        width: 200,
      },
      {
        targets: 3,
        className: "text-center",
        width: 200,
      },
      {
        targets: 4,
        className: "text-center",
        width: 200,
      },
      {
        targets: 5,
        className: "text-center",
        width: 200,
      },
     
    ],
 });

    var data5 = [
        [
           "true",
            "Nexxus Group Fintech, LLC",
            "Caseys",
            "Thambaram",
            "chennai",
            "600221"
        ],
        [
           "true",
            " LLC",
            "Caseys",
            "Madurai",
            "Madurai",
            "627859"
        ],
    ];
    var tableResarch5 = $("#selectCountTable").DataTable({
data: data5,
columns: [
  { title: " " },
  { title: "Store" },
  { title: "State" },
  { title: "City" },
  { title: "Address" },
  { title: "Zip" },
 
],
scrollX: false,
scrollCollapse: true,
searching: false,
pagination: false,
fixedColumns: {
  left: 1,
},
columnDefs: [
  {
    targets: 0,
    className: "dropdown_col text-center",
    width: 100,
    render: function(data, type, full, meta){
      return '<input type="checkbox" class="selectRow">';
  }
  },
  {
    targets: 1,
    className: "text-center",
    width: 200,
  },
  {
    targets: 2,
    className: "text-center",
    width: 200,
  },
  {
    targets: 3,
    className: "text-center",
    width: 200,
  },
  {
    targets: 4,
    className: "text-center",
    width: 200,
  },
  {
    targets: 5,
    className: "text-center",
    width: 200,
  },
 
],
});

    var count = [
        [
        "1m Cloth Cable, 1M micro cable basic",
        "1m Cloth Cable",
        "7654",
        "1mCloth",
        "Yes",
        "1m Cloth Cable",
        "$11.63"
        ],
        [
        "1m Cloth Cable, 1M micro cable basic",
        "1m Cloth Cable",
        "7654",
        "1mCloth",
        "Yes",
        "1m Cloth Cable",
        "$11.63"
        ],
        [
        "1m Cloth Cable, 1M micro cable basic",
        "1m Cloth Cable",
        "7654",
        "1mCloth",
        "Yes",
        "1m Cloth Cable",
        "$11.63"
        ],
    ];
    var productCountTable = $("#productCountTable").DataTable({
        data: count,
        columns: [
            { title: "Product Name" },
            { title: "Product Description" },
            { title: "UPC Code" },
            { title: "Product Type" },
            { title: "Delivery Frequency" },
            { title: "Retail" },
            { title: "Cost" },
           
        ],
        scrollX: false,
        scrollCollapse: true,
        searching: false,
        pagination: false,
        fixedColumns: {
            left: 1,
        },
        columnDefs: [
            {
                targets: 0,
                className: "dropdown_col text-left",
               
            },
            
        ],
    });

    var product = [
        [
        "Acquamarine Preserved Single Rose FF",
        "178",
        "AL",
        "HomeWood",
        "549 Brookwood Village ",
        "626457"
        ],
        [
            "Acquamarine Preserved Single Rose FF",
            "179",
            "AL",
            "Daphne",
            "4700 US Highway 280 ",
            "35463"
        ],
        [
            "Acquamarine Preserved Single Rose FF",
            "180",
            "AL",
            "Birmingham",
            "6900 US HWY 90 ",
            "62645"
        ],
    ];
    var productTable = $("#productTable").DataTable({
        data: product,
        columns: [
            { title: "Product Name" },
            { title: "Store" },
            { title: "State" },
            { title: "City" },
            { title: "Address" },
            { title: "Zip" },

        ],
        scrollX: false,
        scrollCollapse: true,
        searching: false,
        pagination: false,
        fixedColumns: {
            left: 1,
        },
        columnDefs: [
            {
                targets: 0,
                className: "dropdown_col text-left",
               
            },
            
        ],
    });

    var store = [
        [
        "Acquamarine Preserved Single Rose FF",
        "178",
        "AL",
        "HomeWood",
        "549 Brookwood Village ",
        "626457",
        "Reject"
        ],
        [
        " Single Rose FF",
        "198",
        "AL",
        "HomeWood",
        "550 Brookwood Village ",
        "627859",
        "Approved"
        ]
    ];
    var productStoreTable = $("#productStoreTable").DataTable({
        data: store,
        columns: [
            { title: "Product Name" },
            { title: "Store" },
            { title: "State" },
            { title: "City" },
            { title: "Address" },
            { title: "Zip" },
            { title: "Reason For Rejection" },

        ],
        scrollX: false,
        scrollCollapse: true,
        searching: false,
        pagination: false,
        fixedColumns: {
            left: 1,
        },
        columnDefs: [
            {
                targets: 0,
                className: "dropdown_col text-left",
               
            },

        ],
    });

    var price = [[
      
        "Atlanta FFL",
        "$12.00",
        "$12.00",
        "$12.00",
        "$12.00",
        "$12.00",
        "$12.00",
        "12-06-2024",
        "No",
        "12-06-2024",
        "12-06-2024",
    ]];
    var tableResarchprice = $("#PriceTable").DataTable({
        data: price,
        columns: [
          { title: "" },
            { title: "Description" },
            { title: "Old Retail" },
            { title: "Old Cost" },
            { title: "Old Margin" },
            { title: "New Retail" },
            { title: "New Cost" },
            { title: "New" },
            { title: "Start date" },
            { title: "Promotion" },
            { title: "End date" },
            

        ],
        scrollX: false,
        scrollCollapse: true,
        searching: false,
        pagination: false,
        fixedColumns: {
            left: 1,
        },
        columnDefs: [
          {
            targets: 0,
            className: "dropdown_col text-center",
            width: 100,
            render: function(data, type, full, meta){
              return '<input type="checkbox" class="selectRow">';
          }
          },
            //{
            //    targets: 1,
            //    className: "text-left",
            //    width: 200,
            //},
            //{
            //    targets: 2,
            //    className: "text-left",
            //    width: 200,
            //},
            //{
            //    targets: 3,
            //    className: "text-left",
            //    width: 300,
            //},
            //{
            //    targets: 4,
            //    className: "text-left",
            //    width: 300,
            //},
        ],
    });

    var request = [
        [
        "Atlanta FFL",
        "$12.00",
        "$12.00",
        "$12.00",
        "$12.00",
        "$12.00",
        "$12.00",
        "12-06-2024",
        "No",
        "12-06-2024"
        ],
        [
        " FFL",
        "$13.00",
        "$12.26",
        "$17.00",
        "$18.00",
        "$19.00",
        "$16.00",
        "13-06-2024",
        "No",
        "15-06-2024"
        ],
    ];
    var tableResarchrequest = $("#RequestTable").DataTable({
        data: request,
        columns: [
            { title: "Store Description" },
            { title: "Old Retail" },
            { title: "Old Cost" },
            { title: "Old Margin" },
            { title: "New Retail" },
            { title: "New Cost" },
            { title: "New" },
            { title: "Start date" },
            { title: "Promotion" },
            { title: "End date" },


        ],
        scrollX: false,
        scrollCollapse: false,
        
        fixedColumns: {
            left: 1,
        },
        columnDefs: [
            {
                targets: 0,
                className: "dropdown_col text-left",
                width: 200,
            },
            //{
            //    targets: 1,
            //    className: "text-left",
            //    width: 200,
            //},
            //{
            //    targets: 2,
            //    className: "text-left",
            //    width: 200,
            //},
            //{
            //    targets: 3,
            //    className: "text-left",
            //    width: 300,
            //},
            //{
            //    targets: 4,
            //    className: "text-left",
            //    width: 300,
            //},
        ],
    });

    var store = [
        [
        "1",
        "Nexxus Group Fintech, LLC",
        "Caseys",
        "Chennai",
        "600221"
        ],
        [
        "2",
        "LLC",
        "Caseys",
        "America",
        "600224"
        ],
    ];
    var tableResarchstore = $("#StoreTable").DataTable({
        data: store,
        columns: [
            { title: "" },
            { title: "Retailer" },
            { title: "Store#" },
            { title: "Store Location" },           
            { title: "Zip" },

        ],
        scrollX: false,
        scrollCollapse: true,
        searching: false,
        pagination: false,
        fixedColumns: {
            left: 1,
        },
        columnDefs: [
          {
            targets: 0,
            className: "dropdown_col text-center",
            width: 100,
            render: function(data, type, full, meta){
              return '<input type="checkbox" class="selectRow">';
          }
          },
            {
                targets: 1,
                className: "text-center",
                width: 200,
            },
            {
                targets: 2,
                className: "text-center",
                width: 200,
            },
            {
                targets: 3,
                className: "text-center",
                width: 300,
            },
            {
                targets: 4,
                className: "text-center",
                width: 300,
            },
        ],
    });

    var storecount = [
        [
            "1",
            "Nexxus Group Fintech, LLC",
            "Caseys",
            "Chennai",
            "600221"
        ],
        [
            "2",
            "LLC",
            "Caseys",
            "America",
            "600224"
        ],
    ];
    var tableResarchcount = $("#StoreCountTable").DataTable({
        data: storecount,
        columns: [
            { title: "" },
            { title: "Retailer" },
            { title: "Store#" },
            { title: "Store Location" },
            { title: "Zip" },

        ],
        scrollX: false,
        scrollCollapse: true,
        searching: false,
        pagination: false,
        fixedColumns: {
            left: 1,
        },
        columnDefs: [
          {
            targets: 0,
            className: "dropdown_col text-center",
            width: 100,
            render: function(data, type, full, meta){
              return '<input type="checkbox" class="selectRow">';
          }
          },
            {
                targets: 1,
                className: "text-center",
                width: 200,
            },
            {
                targets: 2,
                className: "text-center",
                width: 200,
            },
            {
                targets: 3,
                className: "text-center",
                width: 300,
            },
            {
                targets: 4,
                className: "text-center",
                width: 300,
            },
        ],
    });

    var Inboxdata = [
        [
        "1",
        "New Store Request",
        "Completed",
        "12-06-2024",
        ],
        [
        "2",
        "Price Change Request",
        "Rejected",
        "20-06-2024",
        ],
        [
        "3",
        "Usr Approval",
        "Completed",
        "12-06-2024",
        ],
        [
        "4",
        "PCR",
        "Pending",
        "14-06-2024",
        ],
        [
        "5",
        "NCR",
        "Completed",
        "13-06-2024",
        ],
        [
        "6",
        "New Store Request",
        "Completed",
        "12-06-2024",
        ],
        [
        "7",
        "Price Change Request",
        "Rejected",
        "20-06-2024",
        ],
        [
        "8",
        "Usr Approval",
        "Completed",
        "12-06-2024",
        ],
        [
        "9",
        "PCR",
        "Pending",
        "14-06-2024",
        ],
        [
        "10",
        "NCR",
        "Completed",
        "13-06-2024",
        ],
    ];
    var tableResarchinbox = $("#InboxTable").DataTable({
        data: Inboxdata,
        columns: [
            { title: "S.No" },
            { title: "Title" },
            { title: "Status"  ,
        className: "text-center",
        width: 200,
        render: function (data, type, row, meta) {
          if (data === "Completed"){
             return ` <div> <p class="green_badge badge badgePos"> Approved </p> </div>`
          }
          else if(data === "Pending"){
            return ` <div> <p class="red_badge badge badgePos"> Pending </p> </div>` 
          }
         else{
          return ` <div> <p class="red_badge badge badgePos"> Reject </p> </div>` 
         }
        }
             },
            { title: "Created Date" },
        ],
        scrollX: false,
        scrollCollapse: true,
        searching: true,
        pagination: false,
        fixedColumns: {
            left: 1,
        },
        columnDefs: [
            {
                targets: 0,
                className: "dropdown_col text-center",
                width: 200,
            },
            //{
            //    targets: 1,
            //    className: "text-center",
            //    width: 200,
            //},
            //{
            //    targets: 2,
            //    className: "text-center",
            //    width: 200,
            //},
            //{
            //    targets: 3,
            //    className: "text-center",
            //    width: 300,
            //},
            //{
            //    targets: 4,
            //    className: "text-center",
            //    width: 300,
            //},
        ],
    });
    
    var Userdata = [
        [
            "1",
            "Ellis",
            "Ellis",
            "Ellis@gmail.com",
            "Pending",
            "done"
        ],
        [
            "2",
            "Jonybrook",
            "Jony",
            "Jonybrook@gmail.com",
            "Reject",
            "done"
        ],
        [
            "3",
            "Angus",
            "Angusg",
            "Angus@gmail.com",
            "Approved",
            "done"
        ],
        [
            "4",
            "Winston",
            "Winston ",
            "Winston@gmail.com",
            "Reject",
            "done"
        ],
        [
            "4",
            "MichaleAnthony",
            "Michale ",
            "Michale@gmail.com",
            "Pending",
            "done"
        ],      
    ];
    var Usertables = $("#userTable").DataTable({
        data: Userdata,
        columns: [
            { title: "S.No" },
            { title: "UserName" },
            { title: "Name" },
            { title: "Email" },
            { title: "Approval Status",
              className: "text-center",
              width: 200,
              render: function (data, type, row, meta) {
                if (data === "Approved"){
                   return ` <div> <p class="green_badge badge badgePos"> Approved </p> </div>`
                }
                else if(data === "Pending"){
                  return ` <div> <p class="pending_badge badge badgePos"> Pending </p> </div>` 
                }
               else{
                return ` <div> <p class="red_badge badge badgePos"> Reject </p> </div>` 
               }
              }

             },
            {
                title: "Action",
                className: "text-center",
                width: 200,
                render: function (data, type, row, meta) {
                    //var html = '';
                    //html = `<span <li><a class="feedback-link" >View Details</a></li> </span>`
                    //return html;
                    return (
                        '<div class="dropdown dropDown">' +
                        '<div class="dropTwo">' +
                        '<button class="btn  showAction" type="button" id="dropdownMenuButton' +
                        meta.row +
                        '" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                        '<i class="fas fa-bars"></i>' +
                        "</button>" +
                        '<div class="dropdown-menu dropPos" aria-labelledby="dropdownMenuButton' +
                        meta.row +
                        '">' +
                        '<a class="dropdown-item edit" id="edit" href="#"><span> <i class="fa-regular fa-pen-to-square mr-1"></i> </span>Approve</a>' +
                        '<a class="dropdown-item duplicate" id="duplicate" href="#"><span> <i class="fa-regular fa-copy mr-1"></i> </span> Reject</a>' +
                       
                        "</div>" +
                        "</div>" +
                        "</div>"
                    );
                },
            },
        ],
        scrollX: false,
        scrollCollapse: false,
        searching: true,
        pagination: false,
        fixedColumns: {
            left: 1,
        },
        columnDefs: [
            {
                targets: 0,
                className: "dropdown_col text-center",
               
            },
           
        ],
    });
    
    var postdata = [
        [
            "1",
            "12342",
            "7-Eleven",
            "12-06-2024",
        ],
        [
            "2",
            "12435",
            "7-Eleven Horizon",
            "20-06-2024",
        ],
        [
            "3",
            "34521",
            "7-Eleven Canada",
            "12-06-2024",
        ],
        [
            "4",
            "34526",
            "Caseys",
            "14-06-2024",
        ],
        [
            "5",
            "45326",
            "Brookshire Grocery",
            "13-06-2024",
        ], [
            "6",
            "12342",
            "7-Eleven",
            "12-06-2024",
        ],
        [
            "7",
            "12435",
            "7-Eleven Horizon",
            "20-06-2024",
        ],
        [
            "8",
            "34521",
            "7-Eleven Canada",
            "12-06-2024",
        ],
        [
            "9",
            "34526",
            "Caseys",
            "14-06-2024",
        ],
        [
            "10",
            "45326",
            "Brookshire Grocery",
            "13-06-2024",
        ],
    ];
    var postedDates = $("#PostedDatesTable").DataTable({
        data: postdata,
        columns: [
            { title: "S.No" },
            { title: "Nexxus Retail ID" },
            { title: "Retailer" },
            { title: "Last Posted Dates" },           
        ],
        scrollX: false,
        scrollCollapse: true,
        searching: true,
        pagination: false,
        fixedColumns: {
            left: 1,
        },
        columnDefs: [
            {
                targets: 0,
                className: "dropdown_col text-center",
                width: 200,
            },
            
        ],
    });
    
    var zendata = [
        [
            "#12354",
            "New Price Request",
            "pass",
            "Customer1",
            "12-06-2024",
            "12-06-2024",
            "High",
            "Admin",
            "Admin"
           
        ],
        [
            "#12354",
            "New Store Request",
            "Pass",
            "Customer2",
            "13-06-2024",
            "14-06-2024",
            "Normal",
            "Admin",
            "Admin"
            
        ],[
            "#12354",
            "New Store Request",
            "Pass",
            "Customer3",
            "13-06-2024",
            "14-06-2024",
            "Normal",
            "Admin",
            "Admin"
            
        ],[
            "#12354",
            "New Store Request",
            "Pass",
            "Customer4",
            "13-06-2024",
            "14-06-2024",
            "Normal",
            "Admin",
            "Admin"
            
        ],[
            "#12354",
            "New Store Request",
            "Pass",
            "Customer5",
            "13-06-2024",
            "14-06-2024",
            "Normal",
            "Admin",
            "Admin"
            
        ],[
            "#12354",
            "New Store Request",
            "Pass",
            "Customer6",
            "13-06-2024",
            "14-06-2024",
            "Normal",
            "Admin",
            "Admin"
            
        ],[
            "#12354",
            "New Store Request",
            "Pass",
            "Customer7",
            "13-06-2024",
            "14-06-2024",
            "Normal",
            "Admin",
            "Admin"
            
        ],[
            "#12354",
            "New Store Request",
            "Pass",
            "Customer8",
            "13-06-2024",
            "14-06-2024",
            "Normal",
            "Admin",
            "Admin"
            
        ],[
            "#12354",
            "New Store Request",
            "Pass",
            "Customer9",
            "13-06-2024",
            "14-06-2024",
            "Normal",
            "Admin",
            "Admin"
            
        ],[
            "#12354",
            "New Store Request",
            "Pass",
            "Customer10",
            "13-06-2024",
            "14-06-2024",
            "Normal",
            "Admin",
            "Admin"
            
        ],
    ];
    var zendeskdata = $("#ZenDeskTable").DataTable({
        data: zendata,
        columns: [
            { title: "Ticket ID" },
            { title: "Subject" },
            { title: "Status",
              
             },
            { title: "Requester" },
            { title: "Created On" },
            { title: "Updated On" },
            { title: "Priority" },
            { title: "Assignee" },
            {
                title: "Action",
                className: "text-center",
                width: 200,
                render: function (data, type, row, meta) {
                    //var html = '';
                    //html = `<span <li><a class="feedback-link" >View Details</a></li> </span>`
                    //return html;
                    return (
                        '<div class="dropdown dropDown">' +
                        '<div class="dropTwo">' +
                        '<button class="btn  showAction" type="button" id="dropdownMenuButton' +
                        meta.row +
                        '" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                        '<i class="fas fa-bars"></i>' +
                        "</button>" +
                        '<div class="dropdown-menu dropPos" aria-labelledby="dropdownMenuButton' +
                        meta.row +
                        '">' +
                        '<a class="dropdown-item edit" id="edit" href="#"><span> <i class="fa-regular fa-pen-to-square mr-1"></i> </span>View Ticket</a>' +                       
                        "</div>" +
                        "</div>" +
                        "</div>"
                    );
                },
            },
           
        ],
        scrollX: false,
        scrollCollapse: true,
        searching: true,
        pagination: false,
        fixedColumns: {
            left: 1,
        },
        columnDefs: [
            {
                targets: 0,
                className: "dropdown_col text-center",
                width: 200,
            },

        ],
    });
    
    var newsdata = [
        [
            "Nexxus Group Fintech LLC",
            "12/06/2024   13/06/2024",
            "06 - 12 - 2024",
            "Customer1",
            "PUBLISHED",
            "SHOWING"
            
        ],
        [
            "Wawa - 10/06/2024 sales Issue",
            "13/06/2024   14/06/2024",
            "06 - 12 - 2024",
            "Customer2",
            "UNPUBLISHED",
            "SHOWING"
            
        ],
       [
            "New Store Request and Price change Notifications",
            "16/06/2024   17/06/2024",
            "NA",
            "Customer3",
            "UNPUBLISHED",
            "SHOWING"
            
        ],
        [
            "Rite Aid - Payment Pause",
            "18/06/2024   20/06/2024",
            "NA",
            "Customer4",
            "UNPUBLISHED",
            "SHOWING"
            
        ],
        [
            "Rite Aid - Payment Pause",
            "23/06/2024   24/06/2024",
            "NA",
            "Customer5",
            "UNPUBLISHED",
            "SHOWING"
            
        ],
       
    ];
    var newstabledata = $("#Newstable").DataTable({
        data: newsdata,
        columns: [
           
            { title: "News & Announcements", className: "text-Left"},
            { title: "Visible To/From" },
            { title: "Published On" },           
            { title: "Created by" },
            { title: "Status" ,
              className: "text-center",
              width: 200,
              render: function (data, type, row, meta) {
                if (data === "PUBLISHED"){
                   return ` <div> <p class="green_badge badge badgePos"> Approved </p> </div>`
                }
                else if(data === "UNPUBLISHED"){
                  return ` <div> <p class="red_badge badge badgePos"> Pending </p> </div>` 
                }
               else{
                return ` <div> <p class="red_badge badge badgePos"> Reject </p> </div>` 
               }
              }

            },
            {
                title: "Action",
                className: "text-center",
                width: 200,
                render: function (data, type, row, meta) {
                    //var html = '';
                    //html = `<span <li><a class="feedback-link" >View Details</a></li> </span>`
                    //return html;
                    return (
                        '<div class="dropdown dropDown">' +
                        '<div class="dropTwo">' +
                        '<button class="btn  showAction" type="button" id="dropdownMenuButton' +
                        meta.row +
                        '" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                        '<i class="fas fa-bars"></i>' +
                        "</button>" +
                        '<div class="dropdown-menu dropPos" aria-labelledby="dropdownMenuButton' +
                        meta.row +
                        '">' +
                        '<a class="dropdown-item edit" id="edit" href="addnews.html"><span> <i class="fa-regular fa-pen-to-square mr-1"></i> </span>View Story</a>' +
                        "</div>" +
                        "</div>" +
                        "</div>"
                    );
                },
            },

        ],
        scrollX: false,
        scrollCollapse: true,
        searching: true,
        pagination: false,
        fixedColumns: {
            left: 1,
        },
        columnDefs: [
            {
                targets: 0,
                className: "dropdown_col text-left",
                width: 200,
            },

        ],
    });

    var pricedata = [
      [
        "Sample File.xlsx",
        "2",
        "Vendor-123",
        "",
        "",
        "Approved",
        "Admin"
    ],
      
     
  ];
    var pricedata = $("#pricebookTable").DataTable({
      data: pricedata,
      columns: [
         
          { title: "File Name" },
          { title: "Of Issues" },
          { title: "Created by" },
          { title: "Approved by" },           
          { title: "Approved On" },
          { title: "Status" },
          {
              title: "Action",
              className: "text-center",
              width: 200,
              render: function (data, type, row, meta) {
                  //var html = '';
                  //html = `<span <li><a class="feedback-link" >View Details</a></li> </span>`
                  //return html;
                  return (
                      '<div class="dropdown dropDown">' +
                      '<div class="dropTwo">' +
                      '<button class="btn  showAction" type="button" id="dropdownMenuButton' +
                      meta.row +
                      '" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                      '<i class="fas fa-bars"></i>' +
                      "</button>" +
                      '<div class="dropdown-menu dropPos" aria-labelledby="dropdownMenuButton' +
                      meta.row +
                      '">' +
                      '<a class="dropdown-item edit" id="edit" href="#"><span> <i class="fa-regular fa-pen-to-square mr-1"></i> </span>View Story</a>' +
                      "</div>" +
                      "</div>" +
                      "</div>"
                  );
              },
          },

      ],
      scrollX: false,
      scrollCollapse: true,
      searching: true,
      pagination: false,
      fixedColumns: {
          left: 1,
      },
      columnDefs: [
          {
              targets: 0,
              className: "dropdown_col text-center",
              width: 200,
          },

      ],
  });

   var productTable1 = [
    [
      "Nexxus Group Fintech LLC",
      "11 - 12 - 2024",
      "Customer1",
      "PUBLISHED",
      "SHOWING",
      "Admin",
      "Nexxus Group Fintech LLC",
      "06 - 12 - 2024",
      "Customer1",
      "PUBLISHED",     
           "Pending",
           "SHOWING",
  ],
  [
    "Nexxus Group Fintech LLC",
    "06 - 12 - 2024",
    "Customer1",
    "PUBLISHED",
    "SHOWING",
    "Admin",
    "Nexxus Group Fintech LLC",
    "06 - 12 - 2024",
    "Customer7",
    "PUBLISHED",
      "Pending",
      "SHOWING",
],[
    "Nexxus Group Fintech LLC",
    "07 - 12 - 2024",
    "Customer6",
    "PUBLISHED",
    "SHOWING",
    "Admin",
    "Nexxus Group Fintech LLC",
    "06 - 12 - 2024",
    "Customer4",
    "PUBLISHED",
      "Pending",
      "SHOWING",
],[
    "Nexxus Group Fintech LLC",
    "06 - 12 - 2024",
    "Customer2",
    "PUBLISHED",
    "SHOWING",
    "Admin",
    "Nexxus Group Fintech LLC",
    "06 - 12 - 2024",
    "Customer6",
    "PUBLISHED",
      "Pending",
      "SHOWING",
],[
    "LLC",
    "06 - 12 - 2024",
    "Customer1",
    "PUBLISHED",
    "SHOWING",
    "Admin",
    "Nexxus Group Fintech LLC",
    "06 - 12 - 2024",
    "Customer5",
    "PUBLISHED",
      "Pending",
      "SHOWING",
],
   
];
   var productTable1 = $("#productTable1").DataTable({
    data: productTable1,
    columns: [
       
        { title: "Select" },
        { title: "Vendor Id" },
        { title: "Product Description" },           
        { title: "12 Digits UPC" },
        { title: "13 Digit ISBN / EAN" },
        { title: "Suggest Retail Price" },
        { title: "Wholesale Cost" },
        { title: "Stop Date" },
        { title: "Age Restricted Items?(Y / N)" },
        { title: "Age Restriction" },
        { title: "Status" },

              {
            title: "Action",
            className: "text-center",
            width: 200,
            render: function (data, type, row, meta) {
                //var html = '';
                //html = `<span <li><a class="feedback-link" >View Details</a></li> </span>`
                //return html;
                return (
                    '<div class="dropdown dropDown">' +
                    '<div class="dropTwo">' +
                    '<button class="btn  showAction" type="button" id="dropdownMenuButton' +
                    meta.row +
                    '" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                    '<i class="fas fa-bars"></i>' +
                    "</button>" +
                    '<div class="dropdown-menu dropPos" aria-labelledby="dropdownMenuButton' +
                    meta.row +
                    '">' +
                    '<a class="dropdown-item edit" id="edit" href="#"><span> <i class="fa-regular fa-pen-to-square mr-1"></i> </span>Edit</a>' +
                    '<a class="dropdown-item edit" id="edit" href="#"><span> <i class="fa-regular fa-pen-to-square mr-1"></i> </span>View </a>' +
                    '<a class="dropdown-item edit" id="edit" href="#"><span> <i class="fa-regular fa-pen-to-square mr-1"></i> </span>Delete</a>' +
                    "</div>" +
                    "</div>" +
                    "</div>"
                );
            },
        },

    ],
    scrollX: false,
    scrollCollapse: true,
    searching: true,
    pagination: false,
    fixedColumns: {
        left: 1,
    },
    columnDefs: [
        {
            targets: 0,
            className: "dropdown_col text-center",
            width: 200,
            render: function(data, type, full, meta){
              return '<input type="checkbox" class="selectRow" >';
          }
        },
        {
          targets: 1,
          className: "dropdown_col text-center",
          width: 200,
      },
      {
        targets: 2,
        className: "dropdown_col text-center",
        width: 200,
    },
    {
      targets: 3,
      className: "dropdown_col text-center",
      width: 200,
  },
  {
    targets: 4,
    className: "dropdown_col text-center",
    width: 200,
},
{
  targets: 5,
  className: "dropdown_col text-center",
  width: 200,
},
{
  targets: 6,
  className: "dropdown_col text-center",
  width: 200,
},{
  targets: 7,
  className: "dropdown_col text-center",
  width: 200,
},
{
  targets: 8,
  className: "dropdown_col text-center",
  width: 200,
},
{
  targets: 9,
  className: "dropdown_col text-center",
  width: 200,
},



    ],
});

   var storeTable = [
  [
    "Nexxus Group Fintech LLC",
    "06 - 12 - 2024",
    "Customer1",
    "PUBLISHED",
    "SHOWING",
    "Admin",
    "Nexxus Group Fintech LLC",
    "06 - 12 - 2024",
    "Customer1",
    "PUBLISHED",
    "Pending",
    "SHOWING",
],
[
  "Nexxus Group Fintech LLC",
  "06 - 12 - 2024",
  "Customer1",
  "PUBLISHED",
  "SHOWING",
  "Admin",
  "Nexxus Group Fintech LLC",
  "06 - 12 - 2024",
  "Customer1",
  "PUBLISHED",
  "Reject",
  "SHOWING",
],
 
];
   var storeTable = $("#storeTable").DataTable({
  data: storeTable,
  columns: [
     
      { title: "Select" },
      { title: "Vendor Id" },
      { title: "Product Description" },           
      { title: "12 Digits UPC" },
      { title: "13 Digit ISBN / EAN" },
      { title: "Suggest Retail Price" },
      { title: "Wholesale Cost" },
      { title: "Stop Date" },
      { title: "Age Restricted Items?(Y / N)" },
      { title: "Age Restriction" },
      { title: "Status" },

            {
          title: "Action",
          className: "text-center",
          width: 200,
          render: function (data, type, row, meta) {
              //var html = '';
              //html = `<span <li><a class="feedback-link" >View Details</a></li> </span>`
              //return html;
              return (
                  '<div class="dropdown dropDown">' +
                  '<div class="dropTwo">' +
                  '<button class="btn  showAction" type="button" id="dropdownMenuButton' +
                  meta.row +
                  '" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                  '<i class="fas fa-bars"></i>' +
                  "</button>" +
                  '<div class="dropdown-menu dropPos" aria-labelledby="dropdownMenuButton' +
                  meta.row +
                  '">' +
                  '<a class="dropdown-item edit" id="edit" href="#"><span> <i class="fa-regular fa-pen-to-square mr-1"></i> </span>Edit</a>' +
                  '<a class="dropdown-item edit" id="edit" href="#"><span> <i class="fa-regular fa-pen-to-square mr-1"></i> </span>View </a>' +
                  '<a class="dropdown-item edit" id="edit" href="#"><span> <i class="fa-regular fa-pen-to-square mr-1"></i> </span>Delete</a>' +
                  "</div>" +
                  "</div>" +
                  "</div>"
              );
          },
      },

  ],
  scrollX: false,
  scrollCollapse: true,
  searching: true,
  pagination: false,
  fixedColumns: {
      left: 1,
  },
  columnDefs: [
      {
          targets: 0,
          className: "dropdown_col text-center",
          width: 200,
          render: function(data, type, full, meta){
            return '<input type="checkbox" class="selectRow" >';
        }
      },
      {
        targets: 1,
        className: "dropdown_col text-center",
        width: 200,
    },
    {
      targets: 2,
      className: "dropdown_col text-center",
      width: 200,
  },
  {
    targets: 3,
    className: "dropdown_col text-center",
    width: 200,
},
{
  targets: 4,
  className: "dropdown_col text-center",
  width: 200,
},
{
targets: 5,
className: "dropdown_col text-center",
width: 200,
},
{
targets: 6,
className: "dropdown_col text-center",
width: 200,
},{
targets: 7,
className: "dropdown_col text-center",
width: 200,
},
{
targets: 8,
className: "dropdown_col text-center",
width: 200,
},
{
targets: 9,
className: "dropdown_col text-center",
width: 200,
},



  ],
});

   var exclusiveTable = [
  [
    "Nexxus Group Fintech LLC",
    "06 - 12 - 2024",
    "Customer1",
    "PUBLISHED",
    "SHOWING",
    "Admin",
    "Nexxus Group Fintech LLC",
    "06 - 12 - 2024",
    "Customer1",
    "PUBLISHED",
           "Pending",
           "SHOWING",
],[
    "Nexxus Group Fintech LLC",
    "06 - 12 - 2024",
    "Customer3",
    "PUBLISHED",
    "SHOWING",
    "Admin",
    "Nexxus Group Fintech LLC",
    "06 - 12 - 2024",
    "Customer3",
    "PUBLISHED",
           "Pending",
           "SHOWING",
],
[
  "Nexxus Group Fintech LLC",
  "06 - 12 - 2024",
  "Customer2",
  "PUBLISHED",
  "SHOWING",
  "Admin",
  "Nexxus Group Fintech LLC",
  "08 - 11 - 2024",
  "Customer6",
  "PUBLISHED",
    "Pending",
    "SHOWING",
],
 
];
   var exclusiveTable = $("#exclusiveTable").DataTable({
  data: exclusiveTable,
  columns: [
     
      { title: "Select" },
      { title: "Vendor Id" },
      { title: "Product Description" },           
      { title: "12 Digits UPC" },
      { title: "13 Digit ISBN / EAN" },
      { title: "Suggest Retail Price" },
      { title: "Wholesale Cost" },
      { title: "Stop Date" },
      { title: "Age Restricted Items?(Y / N)" },
      { title: "Age Restriction" },
      { title: "Status" },

            {
          title: "Action",
          className: "text-center",
          width: 200,
          render: function (data, type, row, meta) {
              //var html = '';
              //html = `<span <li><a class="feedback-link" >View Details</a></li> </span>`
              //return html;
              return (
                  '<div class="dropdown dropDown">' +
                  '<div class="dropTwo">' +
                  '<button class="btn  showAction" type="button" id="dropdownMenuButton' +
                  meta.row +
                  '" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                  '<i class="fas fa-bars"></i>' +
                  "</button>" +
                  '<div class="dropdown-menu dropPos" aria-labelledby="dropdownMenuButton' +
                  meta.row +
                  '">' +
                  '<a class="dropdown-item edit" id="edit" href="#"><span> <i class="fa-regular fa-pen-to-square mr-1"></i> </span>Edit</a>' +
                  '<a class="dropdown-item edit" id="edit" href="#"><span> <i class="fa-regular fa-pen-to-square mr-1"></i> </span>View </a>' +
                  '<a class="dropdown-item edit" id="edit" href="#"><span> <i class="fa-regular fa-pen-to-square mr-1"></i> </span>Delete</a>' +
                  "</div>" +
                  "</div>" +
                  "</div>"
              );
          },
      },

  ],
  scrollX: false,
  scrollCollapse: true,
  searching: true,
  pagination: false,
  fixedColumns: {
      left: 1,
  },
  columnDefs: [
      {
          targets: 0,
          className: "dropdown_col text-center",
          width: 200,
          render: function(data, type, full, meta){
            return '<input type="checkbox" class="selectRow" >';
        }
      },
      {
        targets: 1,
        className: "dropdown_col text-center",
        width: 200,
    },
    {
      targets: 2,
      className: "dropdown_col text-center",
      width: 200,
  },
  {
    targets: 3,
    className: "dropdown_col text-center",
    width: 200,
},
{
  targets: 4,
  className: "dropdown_col text-center",
  width: 200,
},
{
targets: 5,
className: "dropdown_col text-center",
width: 200,
},
{
targets: 6,
className: "dropdown_col text-center",
width: 200,
},{
targets: 7,
className: "dropdown_col text-center",
width: 200,
},
{
targets: 8,
className: "dropdown_col text-center",
width: 200,
},
{
targets: 9,
className: "dropdown_col text-center",
width: 200,
},



  ],
});

  var checkTableData = [
      [
          "Circle - K - Coastal Carolina",
          "1001",
          "23-01-2023",
          "1m Cloth Cable, 1M micro cable basic",
          "Pending",
          "John",
          "Customer1",
          "Done"
      ],
      [
          "Circle - K - Coastal Carolina",
          "1002",
          "23-01-2023",
          "1A Car Charger Bulk, 2 slot mini car bulk",
          "Approved",
          "Alex",
          "Customer2",
          "Done"
      ],
      [
          "Circle - K - Coastal Carolina",
          "1003",
          "23-02-2023",
          "1m Cloth Cable, 1M micro cable basic",
          "Pending",
          "Bob",
          "Customer3",
          "Done"
      ],
      [
          "Circle - K - Coastal Carolina",
          "1004",
          "12-02-2023",
          "1m Cloth Cable",
          "Approved",
          "Martin",
          "Customer4",
          "Done"
      ],
      [
          "Circle - K - Coastal Carolina",
          "1005",
          "13-04-2023",
          "1A Car Charger Bulk, 2 slot mini car bulk",
          "Pending",
          "John",
          "Customer5",
          "Done"
      ],

];
  var tableResarchCheck = $("#checkTable").DataTable({
  data: checkTableData,
      columns: [
          { title: "Retailer" },
          { title: "Request Id" },
          { title: "Requested Date" },
          { title: "Products" },
          { title: "Status" },
          { title: "Approval By" },
          { title: "Requested By" },
          {
              title: "Action",
              className: "text-center",
              width: 200,
              render: function (data, type, row, meta) {
                  return (
                      '<div class="dropdown dropDown">' +
                      '<div class="dropTwo">' +
                      '<button class="btn  showAction" type="button" id="dropdownMenuButton' +
                      meta.row +
                      '" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                      '<i class="fas fa-bars"></i>' +
                      "</button>" +
                      '<div class="dropdown-menu dropPos" aria-labelledby="dropdownMenuButton' +
                      meta.row +
                      '">' +
                      '<a class="dropdown-item edit" id="edit" href="#"><span> <i class="fa-regular fa-pen-to-square mr-1"></i> </span>Edit</a>' +
                      '<a class="dropdown-item duplicate" id="duplicate" href="#"><span> <i class="fa-regular fa-copy mr-1"></i> </span> Duplicate</a>' +
                      '<a class="dropdown-item remove" id="remove" href="#"><span> <i class="fa-solid fa-trash mr-1"></i>  </span>Remove</a>' +
                      "</div>" +
                      "</div>" +
                      "</div>"
                  );
              },
          },
      ],
  scrollX: false,
  scrollCollapse: true,
  fixedColumns: {
    left: 1,
  },
  columnDefs: [
    {
      targets: 0,
      className: "dropdown_col ",
      width: 200,
    },
    {
      targets: 1,
      className: "text-center",
      width: 200,
    },
    {
      targets: 2,
      className: "text-center",
      width: 200,
    },
    {
      targets: 3,
      className: "text-center",
      width: 300,
    },
    {
      targets: 4,
      className: "text-center",
      width: 300,
    },
    {
      targets: 5,
      className: "text-center",
      width: 200,
    },
  ],
});

  
  // NSR First Screen Drop-down Data table

  $('.selected-values').hide();
  $('.retailCost').hide();
  
var nsrCount1 = [
    [
        "false",
        "Half Dozen Plus FF",
        "Caseys",
        "Chennai",
        "600221",
        "Chennai",
    ],
    [
        "false",
        "LandMark",
        "Caseys2",
        "America3",
        "60022412",
        "Chennai2",
    ],
];

var tableResarchcount1 = $("#nsrCount1").DataTable({
    data: nsrCount1,
    columns: [
        { title: "" },
        { title: "Product Name" },
        { title: "Product Description" },
        { title: "UPC Code" },
        { title: "Product Type" },
        { title: "Delivery Freq" },
    ],
    scrollX: false,
    scrollCollapse: true,
    searching: false,
    pagination: false,
    fixedColumns: {
        left: 1,
    },
    columnDefs: [
        {
            targets: 0,
            className: "dropdown_col text-center",
            width: 100,
            render: function(data, type, full, meta){
                return `<input type="checkbox" class="selectRow" ${data === "true" ? "checked" : ""}>`;
            }
        },
        {
            targets: [1, 2, 3, 4],
            className: "text-center",
            width: 200,
        },
    ],
});

  
   var retailValues = ['1.1', '2.1', '3.1'];
   var costValues = ['1.1', '2.1', '3.1'];

        var selectedRowIndex = null;

     
     
  
var selectedValuesTable = $("#selectedValuesTable").DataTable({
  
    columns: [
        { title: "Product Name" },
        { title: "Product Description" },
        { title: "UPC Code" },
        { title: "Product Type" },
        { title: "Delivery Freq" },
        { 
            title: "Retails",
            render: function (data, type, row, meta) {
               
                return retailValues[meta.row];
            }
        },
        {
            title: "Cost",
            render: function (data, type, row, meta) {
                
                return costValues[meta.row];
            }
        }
    ],
    scrollX: false,
    scrollCollapse: true,
    searching: false,
    paging: false
});
  
  
  
        function updateData() {
            if (selectedRowIndex !== null) {
                const retail = $('#retail').val();
                const cost = $('#cost').val();
                
                retailValues[selectedRowIndex] = parseFloat(retail); 
                costValues[selectedRowIndex] = parseFloat(cost); 
                
                console.log("Updated Retails Value:", retailValues);
                console.log("Updated Cost Value:", costValues);
                
                selectedValuesTable.cell(selectedRowIndex, 5).data(retail).draw();
                selectedValuesTable.cell(selectedRowIndex, 6).data(cost).draw();
            } else {
                alert("No row selected");
            }
        }

        function removeData() {
            if (selectedRowIndex !== null) {
                retailValues[selectedRowIndex] = 0; 
                costValues[selectedRowIndex] = 0; 
                
                console.log("Updated Retails Value:", retailValues);
                console.log("Updated Cost Value:", costValues);
                
                selectedValuesTable.cell(selectedRowIndex, 5).data('0').draw();
                selectedValuesTable.cell(selectedRowIndex, 6).data('0').draw();
            } else {
                alert("No row selected");
            }
        }

        $('#update').on('click', updateData);
  $('#remove').on('click', removeData);
  

        $('#selectedValuesTable tbody').on('click', 'tr', function (e) {
    var row = $(this).closest('tr');
    $('#selectedValuesTable tbody tr').removeClass('tableActive');
    row.addClass('tableActive');

   
    selectedRowIndex = selectedValuesTable.row(row).index();

   
    const firstCell = row.find('td:nth-child(1)').text();
    const fifthCell = row.find('td:nth-child(6)').text();
    const sixthCell = row.find('td:nth-child(7)').text();

   
    $('#retail').val(fifthCell);
    $('#cost').val(sixthCell);

   
    $('.productTitle').text(firstCell);

    console.log("Row Index:", selectedRowIndex);
    console.log("First Cell:", firstCell);
    console.log("Fifth Cell:", fifthCell);
    console.log("Sixth Cell:", sixthCell);
});



  
  

  
  
$('#addProduct').on('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior

    // Get all checked checkboxes in tableResarchcount1
    var checkedRows = $('#nsrCount1 tbody .selectRow:checked');
  
    if (checkedRows.length > 0) {
        checkedRows.each(function() {
            var rowData = tableResarchcount1.row($(this).closest('tr')).data();

           
            var exists = selectedValuesTable.rows().data().toArray().some(function(existingRow) {
                return existingRow[0] === rowData[1]; 
            });

            if (!exists) {
          
                selectedValuesTable.row.add([
                    rowData[1], // Product Name
                    rowData[2], // Product Description
                    rowData[3], // UPC Code
                    rowData[4], // Product Type
                    rowData[5]  // Delivery Freq
                ]).draw(false);
            }
        });

        
      checkedRows.prop('checked', true);
       $('.selected-values').show();
  $('.retailCost').show();
      
    } else {
       $('.selected-values').hide();
  $('.retailCost').hide();
        console.warn("No rows selected in tableResarchcount1.");
       
    }
});

$('#addAll').on('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior

   
    $('#nsrCount1 tbody .selectRow').prop('checked', true);

   
    var allRows = tableResarchcount1.rows().data();

   
    allRows.each(function(rowData) {
       
        var exists = selectedValuesTable.rows().data().toArray().some(function(existingRow) {
            return existingRow[0] === rowData[1]; 
        });

        if (!exists) {
            selectedValuesTable.row.add([
                rowData[1], 
                rowData[2], 
                rowData[3], 
                rowData[4], 
                rowData[5] 
            ]).draw(false);
        }
    });

   
  $('#nsrCount1 tbody .selectRow').prop('checked', true);
   $('.selected-values').show();
  $('.retailCost').show();

  var retailNullValue = null; 
    $('#retail').val(retailNullValue);
    $('#cost').val(retailNullValue);
});


  
  $('.productTitleWork').on('click', function (e) {
    e.preventDefault();
    
   
    var checkedRows = $('#nsrCount1 tbody .selectRow:checked');   
    var allDataChanges = [];

  
    checkedRows.each(function(index, row) {       
        var dataChange = $(row).closest('tr').find('td:eq(1)').text().trim();
        allDataChanges.push(dataChange);
    });

   
    if (allDataChanges.length === 0) {
        allDataChanges.push("Please Select a Product");
    }

  
    $('.productTitle').text(allDataChanges.join(', '));
});

  
   $('#removeAll').on('click', function(e) {
    e.preventDefault();     
    selectedValuesTable.clear().draw();
     $('#nsrCount1 tbody .selectRow').prop('checked', false);
     $('.productTitle').text("Select Value");
      $('.selected-values').hide();
     $('.retailCost').hide();
 });
  
  

  
// $('#selectedValuesTable tbody').on('click', function (e) {
   
//   const target1 = e.target;
//   // console.log(target1);
  
//     const closest = $(target1).closest("tr");

 
//     const firstCell = closest.find('td:nth-child(1)').text();
//     const fifthCell = closest.find('td:nth-child(6)').text();
//     const sixthCell = closest.find('td:nth-child(7)').text();
    

//     console.log(Number(fifthCell), Number(sixthCell));

   
//     $('#retail').val(fifthCell);
//     $('#cost').val(sixthCell);


//     $('.productTitle').text(firstCell);
// });




 
// NSR First Screen Drop-down Data table
  
  
  
  
  
  
  
  
  
  
  

// NSR Table
  $(".dropDownIcon").on("click", function () {
    $(this).toggleClass("up");
  });
 
  $("input.toggle-vis").on("change", function (e) {
    e.preventDefault();

    // Get the column API add User object
    var column = tableResarch.column($(this).attr("data-column"));
    column.visible(!column.visible());
    // Get the column API external User object
    var column1 = tableResarch1.column($(this).attr("data-column"));
    column1.visible(!column1.visible());
    // Get the column API roles object
    var column2 = tableResarch2.column($(this).attr("data-column"));
    column2.visible(!column2.visible());
    // Get the column API screen object
    var nsrTableColumn = tableResarch3.column($(this).attr("data-column"));
    nsrTableColumn.visible(!nsrTableColumn.visible());
    // Get the column API permission object
    var column4 = tableResarch4.column($(this).attr("data-column"));
    column4.visible(!column4.visible());
    // Get the column API roleForm object
    var column5 = tableResarch5.column($(this).attr("data-column"));
    column5.visible(!column5.visible());
    // Toggle the visibility
  });

  //    SCreen form Change Btn
  // $("#assignPermission").change(function () {
  //   var selectedOption = $(this).find(":selected").text();
  //   $("#actionButton").text(selectedOption);
  // });
  $(".dropdown a").click(function (e) {
    $(this).next(".dropdown-menu").addClass("show");
  });

  $(".multiselect-filtering").multiselect({
    enableFiltering: true,
    enableCaseInsensitiveFiltering: true,
  });
  $(".multiselect").click(function () {
    $(".multiselect-container").show();
  });

  // $("#addUserTable tbody").on(
  //   "click",
  //   "tr td:not(:last-child):not(.balance)",
  //   function () {
  //     console.log("td");
  //     $("#modal_popup").modal("show");
  //   }
  // );
  $("#addUserTable tbody").on(
    "click",
    "tr td:lt(5):not(.balance)",
    function () {
      console.log("td");
      $("#modal_popup").modal("show");
    }
  );

  // $(".addSidebtn1").on("click", function () {
  //   console.log("td");
  //   $("#addUserModal").modal("show");
  // });

  $("#externalTable tbody").on(
    "click",
    "tr td:lt(5):not(.balance)",
    function () {
      console.log("td");
      $("#externalUserModal").modal("show");
    }
  );
  $("#rolesTable tbody").on("click", "tr td:lt(4):not(.balance)", function () {
    console.log("td");
    window.location.href = "roleform.html";
  });

  $("#screenTable tbody").on(
    "click",
    "tr td:not(:last-child):not(.balance)",
    function () {
      console.log("td");
      $("#modal_popup").modal("show");
    }
  );
  $("#permissionTable tbody").on(
    "click",
    "tr td:not(:last-child):not(.balance)",
    function () {
      console.log("td");
      $("#modal_popup").modal("show");
    }
  );
  $(".addUserEdit").on("click", function () {
    console.log("td");
    $("#modal_popup").modal("show");
  });
  $(".screenEdit").on("click", function () {
    console.log("td");
    $("#modal_popup").modal("show");
  });

  $(".edit").on("click", function () {
    console.log("td");
    $("#modal_popup").modal("show");
  });

  $(".duplicate").on("click", function () {
    console.log("td");
    $("#modal_popup").modal("show");
  });
  $(".history").on("click", function () {
    console.log("td");
    $(".history1").modal("show");
  });

  // New Modal
  $(".updateFile").on("click", function () {
    console.log("td");
    $("#modal_popup").modal("show");
  });

 $(".notificationBtn").on('click',()=>{
   $(".notificatinShow").show();

 })












  $(".daterange-single").daterangepicker({
    parentEl: ".content-inner",
    singleDatePicker: true,
  });

  $(".closeBoxDialog").click(function () {
    $(".modal").modal("hide");
  });
  $(".cancelDialgue").click(function () {
    $(".offCanvasWidth").offcanvas("hide");
  });

  $(".header-elements-toggle").click(function () {
    $(".sidebar").toggleClass("sidebar-expand-e");
    $(".sidebar").toggleClass("sidebar-main-resized");
  });
  $(".toast").toast("hide");
  $(".notif_icon").click(function () {
    $("#modal_notif").modal("show");
  });
  $(".mark_all_read").click(function () {
    $(".modal_notif").find(".notification_div").removeClass("notread");
    $(".round_alert").hide();
    $(this).hide();
    $(".toast").toast("show");
  });

  $("#sweet_success").click(function (e) {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Save it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        //   Swal.fire(
        //     'Saved!',
        //     'Your file has been saved...',
        //     'success'
        //   )
      }
    });
  });
  $(".remove").click(function (e) {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2e6793",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  });

  $(".nav-item").on("click", ".nav-link", function () {
    // Remove "active" class from any other active item
    $(".nav-item .nav-link").removeClass("active");

    // Add "active" class to the clicked item
    $(this).addClass("active");
  });






  $('.navModify').on('click', function() {
    // Remove 'active' class from all nav items
    $('.navModify').removeClass('navBg');
    // Add 'active' class to the clicked nav item
    $(this).closest('.navModify').addClass('navBg');
  });



  document.querySelectorAll('.navBg').forEach(link => {
    console.log('navBg');
      link.addEventListener('click', function() {
        document.querySelectorAll('.navBg').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
      });
    });



});

$(document).on("click", function (event) {
  var trigger = $(".dropdown");
  if (trigger !== event.target && !trigger.has(event.target).length) {
    $(".dropdown").find(".dropdown-menu").removeClass("show");
    $(trigger)
      .children("a")
      .find(".spanFa")
      .html('<i class="fa-light fa-chevron-down ml-2"></i>');
  }

  var triggerMulti = $(".multiselect-native-select");
  if (triggerMulti !== event.target && !triggerMulti.has(event.target).length) {
    $(".multiselect-container").hide();
  }
});

$(document).on("click", ".showAction", function () {
  $(".dropPos").not($(this).next(".dropPos")).removeClass("show");
  $(this).next(".dropPos").toggleClass("show");
});

// Hide dropdown when clicking outside
$(document).on("click", function (e) {
  if (!$(e.target).closest(".dropDown").length) {
    $(".dropPos").removeClass("show");
  }
});

// Prevent dropdown from closing when clicking inside
$(".dropPos").on("click", function (e) {
  e.stopPropagation();
});
