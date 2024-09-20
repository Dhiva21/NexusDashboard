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

  // Add Users
  var data = [
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
  ];

  var tableResarch = $("#addUserTable").DataTable({
    data: data,
    columns: [
      { title: "Name" },
      { title: "Roles" },
      { title: "Email" },
      { title: "Effective From" },
      { title: "Effective To" },
      { title: "History" },
      { title: "Status" },
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
    fixedColumns: { left: 1 },
    columnDefs: [
      { targets: 0, className: "dropdown_col text-center", width: 200 },
      { targets: 1, className: "text-center", width: 200 },
      { targets: 2, className: "text-center", width: 200 },
      { targets: 3, className: "text-center", width: 200 },
      { targets: 4, className: "text-center", width: 200 },
      {
        targets: 5,
        className: "text-center",
        width: 100,
        render: function (data) {
          // Tooltip content
          var userId = "User Id: 12423";
          var timestamp = "TimeStamp : 114134 ";
          var action = "Action : 144";
          var ip = "IP: 14";
          var outCome = "Outcome : 1412";
          var details = "Details :";
          var tooltipContent =
            `${userId}\n` +
            `${timestamp}\n` +
            `${action}\n` +
            `${ip}\n` +
            `${outCome}\n` +
            `${details}`;

          return `<div class="ml-2 history "  data-toggle="tooltip" title="${tooltipContent}" data-html="false">    <i class="fa-regular fa-clock"></i></div>`;
        },
      },
      { targets: 6, className: "text-center", width: 200 },
    ],
  });

  // External User
  var data1 = [
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
  ];
  var tableResarch1 = $("#externalTable").DataTable({
    data: data1,
    columns: [
      { title: "Name" },
      { title: "Roles" },
      { title: "Email" },
      { title: "Effective From" },
      { title: "Effective To" },
      { title: "History" },
      { title: "Status" },
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
        className: "dropdown_col text-center",
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
        width: 100, // Change the width to 100
        render: function (data) {
          // Tooltip content
          var userId = "User Id: 12423";
          var timestamp = "TimeStamp : 114134 ";
          var action = "Action : 144";
          var ip = "IP: 14";
          var outCome = "Outcome : 1412";
          var details = "Details :";
          var tooltipContent =
            `${userId}\n` +
            `${timestamp}\n` +
            `${action}\n` +
            `${ip}\n` +
            `${outCome}\n` +
            `${details}`;

          return `<span class="ml-2 history" data-toggle="tooltip" title="${tooltipContent}" data-html="false">    <i class="fa-regular fa-clock"></i></span>`;
        },
      },
      {
        targets: 5,
        className: "text-center",
        width: 100, // Change the width to 100
        render: function (data) {
          // Tooltip content
          var userId = "User Id: 12423";
          var timestamp = "TimeStamp : 114134 ";
          var action = "Action : 144";
          var ip = "IP: 14";
          var outCome = "Outcome : 1412";
          var details = "Details :";
          var tooltipContent =
            `${userId}\n` +
            `${timestamp}\n` +
            `${action}\n` +
            `${ip}\n` +
            `${outCome}\n` +
            `${details}`;

          return `<span class="ml-2" data-toggle="tooltip" title="${tooltipContent}" data-html="false">    <i class="fa-regular fa-clock"></i></span>`;
        },
      },

      {
        targets: 6,
        className: "text-center",
        width: 200,
      },
    ],
  });
  // $('[data-toggle="tooltip"]').tooltip();

  //   Roles Table
  var data2 = [
    [
      "Rajesh",
      "Finops Manager",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "",
      "Active",
      "Done",
    ],
  ];
  var tableResarch2 = $("#rolesTable").DataTable({
    data: data2,
    columns: [
      { title: "Roles" },
      { title: "Screen" },
      { title: "Created By" },
      { title: "User" },
      { title: "History" },
      { title: "Status" },
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
        className: "dropdown_col text-center",
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
        width: 400,
      },
      {
        targets: 3,
        className: "text-center",
        width: 400,
      },
      {
        targets: 4,
        className: "text-center",
        width: 100, // Change the width to 100
        render: function (data) {
          // Tooltip content
          var userId = "User Id: 12423";
          var timestamp = "TimeStamp : 114134 ";
          var action = "Action : 144";
          var ip = "IP: 14";
          var outCome = "Outcome : 1412";
          var details = "Details :";
          var tooltipContent =
            `${userId}\n` +
            `${timestamp}\n` +
            `${action}\n` +
            `${ip}\n` +
            `${outCome}\n` +
            `${details}`;

          return `<span class="ml-2 history" data-toggle="tooltip" title="${tooltipContent}" data-html="false">    <i class="fa-regular fa-clock"></i></span>`;
        },
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

  //   Screen Table
  var data3 = [
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "Active",
      "Done",
    ],
    [
      "Rajesh",
      "Finops Manager",
      "rajesh@123@gmail.com",
      "23-01-2023 00:00",
      "24-01-2023 00:00",
      "Active",
      "Done",
    ],
  ];
  var tableResarch3 = $("#screenTable").DataTable({
    data: data3,
    columns: [
      { title: "Screen" },
      { title: "Permission" },
      { title: "Screen Type" },
      { title: "Parent" },
      { title: "Status" },
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
        className: "dropdown_col text-center",
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

  //  Permission Table
  var data4 = [
    ["Finops Manager", "Active", "Done"],
    ["Finops Manager", "Active", "Done"],
    ["Finops Manager", "Active", "Done"],
    ["Finops Manager", "Active", "Done"],
    ["Finops Manager", "Active", "Done"],
    ["Finops Manager", "Active", "Done"],
    ["Finops Manager", "Active", "Done"],
    ["Finops Manager", "Active", "Done"],
    ["Finops Manager", "Active", "Done"],
    ["Finops Manager", "Active", "Done"],
  ];
  var tableResarch4 = $("#permissionTable").DataTable({
    data: data4,
    columns: [
      { title: "Permission" },
      { title: "Status" },
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
        className: "dropdown_col text-center",
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
    ],
  });

  //  Role Form Table
  // var data5 = [
  //   ["Client Info", true, false, true, true, false, true],
  //   ["Client Info", true, true, false, true, true, false],
  //   ["Client Info", true, false, true, true, false, true],
  //   ["Client Info", true, false, true, false, true, false],
  // ];

  // var tableResarch5 = $("#roleForm").DataTable({
  //   data: data5,
  //   columns: [
  //     { title: "Screen" },
  //     { title: "View" },
  //     { title: "Create" },
  //     { title: "Edit" },
  //     { title: "Delete" },
  //     { title: "Upload" },
  //     { title: "Download" },
  //   ],
  //   scrollX: false,
  //   scrollCollapse: true,
  //   fixedColumns: {
  //     left: 1,
  //   },
  //   columnDefs: [
  //     {
  //       targets: "_all", // Apply to all columns
  //       className: "text-center",
  //       render: function (data, type, row, meta) {
  //         // Check if the column index is not the first one
  //         if (meta.col !== 0) {
  //           // Check if the data is true
  //           if (data) {
  //             return '<input class=" formCheckModify" type="checkbox" checked >';
  //           } else {
  //             return '<input type="checkbox" >';
  //           }
  //         } else {
  //           return data; // Return the data for the first column as is
  //         }
  //       },
  //     },
  //   ],
  // });
  // Version -1
  // var data5 = [
  //   {
  //     Client: "Client 1",

  //     Info: [
  //       {
  //         Screen: "Client Info",
  //         View: true,
  //         Create: false,
  //         Edit: true,
  //         Delete: true,
  //         Upload: false,
  //         Download: true,
  //       },
  //       {
  //         Screen: "Client Info2",
  //         View: true,
  //         Create: false,
  //         Edit: true,
  //         Delete: true,
  //         Upload: false,
  //         Download: true,
  //       },
  //     ],

  //     Info1: {
  //       Screen: "Client Info",
  //       View: true,
  //       Create: false,
  //       Edit: true,
  //       Delete: true,
  //       Upload: false,
  //       Download: true,
  //     },
  //     Info2: {
  //       Screen: "Client Info",
  //       View: true,
  //       Create: false,
  //       Edit: true,
  //       Delete: true,
  //       Upload: false,
  //       Download: true,
  //     },
  //   },
  //   {
  //     Client: "Client 2",
  //     Info: {
  //       Screen: "Client Info",
  //       View: true,
  //       Create: false,
  //       Edit: true,
  //       Delete: true,
  //       Upload: false,
  //       Download: true,
  //     },
  //   },
  //   {
  //     Client: "Client 3",
  //     Info: {
  //       Screen: "Client Info",
  //       View: true,
  //       Create: false,
  //       Edit: true,
  //       Delete: true,
  //       Upload: false,
  //       Download: true,
  //     },
  //   },
  //   // Add more data as needed
  // ];

  // var tableResarch5 = $("#roleForm").DataTable({
  //   data: data5,
  //   // columns: [{ data: "Client", title: "Client" }],
  //   columns: [
  //     { data: "Client", title: "Screen", className: "text-center", width: 200 },
  //     { data: "View", title: "View", className: "text-center", width: 200 },
  //     { data: "Create", title: "Create", className: "text-center", width: 200 },
  //     { data: "Edit", title: "Edit", className: "text-center", width: 200 },
  //     { data: "Delete", title: "Delete", className: "text-center", width: 200 },
  //     { data: "Upload", title: "Upload", className: "text-center", width: 200 },
  //     {
  //       data: "Download",
  //       title: "Download",
  //       className: "text-center",
  //       width: 200,
  //     },
  //   ],
  //   order: [[1, "asc"]], // Sort by Client column
  //   rowGroup: {
  //     dataSrc: "Client", // Group by Client
  //   },
  //   scrollX: false,
  //   scrollCollapse: true,
  //   fixedColumns: {
  //     left: 1,
  //   },
  // });

  // $("#roleForm tbody").on("click", "td", function () {
  //   var tr = $(this).closest("tr");
  //   var row = tableResarch5.row(tr);

  //   if (row.child.isShown()) {
  //     // This row is already open - close it
  //     row.child.hide();
  //     tr.removeClass("shown");
  //   } else {
  //     // Open this row
  //     var clientInfo = row.data().Info;

  //     // Build the child row HTML dynamically

  //     for (let i = 0; i < data5.length; i++) {
  //       var clientInfoHtml =
  //         '<table class="child-table">' +
  //         "<tbody>" +
  //         `<tr class="tableInner">` +
  //         `<td class="tableTitle">` +
  //         clientInfo.Screen +
  //         "</td>" +
  //         '<td><input type="checkbox" ' +
  //         (clientInfo.View ? "checked" : "") +
  //         " ></td>" +
  //         '<td><input type="checkbox" ' +
  //         (clientInfo.Create ? "checked" : "") +
  //         " ></td>" +
  //         '<td><input type="checkbox" ' +
  //         (clientInfo.Edit ? "checked" : "") +
  //         " ></td>" +
  //         '<td><input type="checkbox" ' +
  //         (clientInfo.Delete ? "checked" : "") +
  //         " ></td>" +
  //         '<td><input type="checkbox" ' +
  //         (clientInfo.Upload ? "checked" : "") +
  //         " ></td>" +
  //         '<td><input type="checkbox" ' +
  //         (clientInfo.Download ? "checked" : "") +
  //         " ></td>" +
  //         "</tr>" +
  //         "</tbody>" +
  //         "</table>";
  //       console.log(i);
  //     }

  //     // Add the child row and show it
  //     row.child(clientInfoHtml).show();
  //     tr.addClass("shown");
  //   }
  // });

  //  version - 2

  // var data5 = [
  //   {
  //     Client: "Client 1",
  //     Info: {
  //       Screen: "Client Info",
  //       View: true,
  //       Create: false,
  //       Edit: true,
  //       Delete: true,
  //       Upload: false,
  //       Download: true,
  //     },
  //   },
  //   {
  //     Client: "Client 2",
  //     Info: {
  //       Screen: "Client Info",
  //       View: true,
  //       Create: false,
  //       Edit: true,
  //       Delete: true,
  //       Upload: false,
  //       Download: true,
  //     },
  //   },
  //   // Add more data as needed
  // ];

  // var tableResarch5 = $("#roleForm").DataTable({
  //   data: data5,
  //   columns: [
  //     { data: "Client", title: "Screen", className: "text-center", width: 200 },
  //     {
  //       data: "Info.View",
  //       title: "View",
  //       className: "text-center",
  //       width: 200,
  //     },
  //     {
  //       data: "Info.Create",
  //       title: "Create",
  //       className: "text-center",
  //       width: 200,
  //     },
  //     {
  //       data: "Info.Edit",
  //       title: "Edit",
  //       className: "text-center",
  //       width: 200,
  //     },
  //     {
  //       data: "Info.Delete",
  //       title: "Delete",
  //       className: "text-center",
  //       width: 200,
  //     },
  //     {
  //       data: "Info.Upload",
  //       title: "Upload",
  //       className: "text-center",
  //       width: 200,
  //     },
  //     {
  //       data: "Info.Download",
  //       title: "Download",
  //       className: "text-center",
  //       width: 200,
  //     },
  //   ],
  //   order: [[1, "asc"]], // Sort by View column
  //   rowGroup: {
  //     dataSrc: "Client", // Group by Client
  //   },
  //   scrollX: false,
  //   scrollCollapse: true,
  //   fixedColumns: {
  //     left: 1,
  //   },
  // });

  // $("#roleForm tbody").on("click", "td", function () {
  //   var tr = $(this).closest("tr");
  //   var row = tableResarch5.row(tr);

  //   if (row.child.isShown()) {
  //     // This row is already open - close it
  //     row.child.hide();
  //     tr.removeClass("shown");
  //   } else {
  //     // Open this row
  //     var clientInfo = row.data().Info;

  //     // Build the child row HTML dynamically
  //     var clientInfoHtml =
  //       '<table class="child-table">' +
  //       "<tbody>" +
  //       `<tr class="tableInner">` +
  //       "<td>" +
  //       clientInfo.Screen +
  //       "</td>" +
  //       '<td><input type="checkbox" ' +
  //       (clientInfo.View ? "checked" : "") +
  //       " ></td>" +
  //       '<td><input type="checkbox" ' +
  //       (clientInfo.Create ? "checked" : "") +
  //       " ></td>" +
  //       '<td><input type="checkbox" ' +
  //       (clientInfo.Edit ? "checked" : "") +
  //       " ></td>" +
  //       '<td><input type="checkbox" ' +
  //       (clientInfo.Delete ? "checked" : "") +
  //       " ></td>" +
  //       '<td><input type="checkbox" ' +
  //       (clientInfo.Upload ? "checked" : "") +
  //       " ></td>" +
  //       '<td><input type="checkbox" ' +
  //       (clientInfo.Download ? "checked" : "") +
  //       " ></td>" +
  //       "</tr>" +
  //       "</tbody>" +
  //       "</table>";

  //     // Add the child row and show it
  //     row.child(clientInfoHtml).show();
  //     tr.addClass("shown");
  //   }
  // });
  // version -3
  var data5 = [
    {
        Screen: "Client 1",
        Info: [
            {
                title: "1",
                Screen: "Client Info",
                Info: [
                    {
                        title: "1.1",
                        Screen: "Client Info 1.1",
                        View: true,
                        Create: false,
                        Edit: true,
                        Delete: true,
                        Upload: false,
                        Download: true,
                        Info: [
                            {
                                title: "1.1.1",
                                Screen: "Client Info 1.1.1",
                                View: true,
                                Create: false,
                                Edit: true,
                                Delete: true,
                                Upload: false,
                                Download: true,
                            },
                        ],
                    },
                    {
                        title: "1.2",
                        Screen: "Client Info 1.2",
                        View: true,
                        Create: false,
                        Edit: true,
                        Delete: true,
                        Upload: false,
                        Download: true,
                    },
                ],
            },
            {
                Screen: "Client Info2",
                View: true,
                Create: false,
                Edit: true,
                Delete: true,
                Upload: false,
                Download: true,
            },
            {
                title: "1",
                Screen: "Client Info 3",
                View: true,
                Create: false,
                Edit: true,
                Delete: true,
                Upload: false,
                Download: true,
            },
        ],
    },
    {
        Screen: "Client 2",
        Info: [
            {
                Screen: "Client Info",
                View: true,
                Create: false,
                Edit: true,
                Delete: true,
                Upload: false,
                Download: true,
            },
            {
                Screen: "Client Info2",
                View: true,
                Create: false,
                Edit: true,
                Delete: true,
                Upload: false,
                Download: true,
            },
        ],
    },
    {
        Screen: "Client 3",
        Info: [
            {
                Screen: "Client Info",
                View: true,
                Create: false,
                Edit: true,
                Delete: true,
                Upload: false,
                Download: true,
            },
            {
                Screen: "Client Info2",
                View: true,
                Create: false,
                Edit: true,
                Delete: true,
                Upload: false,
                Download: true,
            },
        ],
    },
    // Add more data as needed
];

var tableResarch5 = $("#roleForm").DataTable({
    data: data5,
    columns: [
        {
            data: "Screen",
            title: "Screen",
            className: "dropDownIcon",
            width: 200,
        },
        {
            data: "View",
            title: "View",
            className: "text-center",
            width: 200,
            render: function (data, type, row) {
                return row.Info ? '' : `<input type="checkbox" ${data ? "checked" : ""} >`;
            },
        },
        {
            data: "Create",
            title: "Create",
            className: "text-center",
            width: 200,
            render: function (data, type, row) {
                return row.Info ? '' : `<input type="checkbox" ${data ? "checked" : ""} >`;
            },
        },
        {
            data: "Edit",
            title: "Edit",
            className: "text-center",
            width: 200,
            render: function (data, type, row) {
                return row.Info ? '' : `<input type="checkbox" ${data ? "checked" : ""} >`;
            },
        },
        {
            data: "Delete",
            title: "Delete",
            className: "text-center",
            width: 200,
            render: function (data, type, row) {
                return row.Info ? '' : `<input type="checkbox" ${data ? "checked" : ""} >`;
            },
        },
        {
            data: "Upload",
            title: "Upload",
            className: "text-center",
            width: 200,
            render: function (data, type, row) {
                return row.Info ? '' : `<input type="checkbox" ${data ? "checked" : ""} >`;
            },
        },
        {
            data: "Download",
            title: "Download",
            className: "text-center",
            width: 200,
            render: function (data, type, row) {
                return row.Info ? '' : `<input type="checkbox" ${data ? "checked" : ""}>`;
            },
        },
    ],
    order: [[0, "asc"]], // Sort by Screen column
});

$("#roleForm tbody").on("click", "td.dropDownIcon", function () {
    var tr = $(this).closest("tr");
    var row = tableResarch5.row(tr);

    if (row.child.isShown()) {
        row.child.hide();
        tr.removeClass("shown");
    } else {
        var rowData = row.data();
        if (rowData && rowData.Info) {
            var clientInfoHtml = buildChildTable(rowData.Info);
            row.child(clientInfoHtml).show();
            tr.addClass("shown");

            // Attach click event to new child rows
            row.child().find('td.screenTitle').on('click', function () {
                var nestedTr = $(this).closest('tr');
                var nestedData = $(this).data('nested-data');
                toggleNestedRow(nestedTr, nestedData);
            });
        } else {
            console.error("rowData or rowData.Info is undefined:", rowData);
        }
    }
});

function buildChildTable(infoArray) {
    var html = '<table class="child-table"><tbody>';
    infoArray.forEach(function (info) {
        html += buildRowHtml(info);

        if (info.Info && Array.isArray(info.Info)) {
            html += buildNestedTable(info.Info);
        }
    });
    html += "</tbody></table>";
    return html;
}

function buildRowHtml(info, rowClass = "tableInner") {
    var hasSubInfo = info.Info && Array.isArray(info.Info) && info.Info.length > 0;
    var downIcon = hasSubInfo ? ' <span class="downIcon dropDownIcon"></span>' : '';
    return `
        <tr class="${rowClass}">
            <td class="screenTitle" data-nested-data='${JSON.stringify(info)}'>${info.Screen}${downIcon}</td>
            ${!hasSubInfo ? renderCheckbox(info, "View") : ''}
            ${!hasSubInfo ? renderCheckbox(info, "Create") : ''}
            ${!hasSubInfo ? renderCheckbox(info, "Edit") : ''}
            ${!hasSubInfo ? renderCheckbox(info, "Delete") : ''}
            ${!hasSubInfo ? renderCheckbox(info, "Upload") : ''}
            ${!hasSubInfo ? renderCheckbox(info, "Download") : ''}
        </tr>`;
}

function renderCheckbox(info, type) {
    return `<td><input type="checkbox" ${info[type] ? "checked" : ""} ></td>`;
}

function buildNestedTable(nestedArray) {
    var html = '<tr class="nestedRow" style="display:none;"><td colspan="7"><table class="child-table"><tbody>';
    nestedArray.forEach(function (nestedInfo) {
        html += buildRowHtml(nestedInfo, "sub-tableInner");
    });
    html += "</tbody></table></td></tr>";
    return html;
}

function toggleNestedRow(tr, nestedData) {
    if (tr.next('.nestedRow').length) {
        tr.next('.nestedRow').toggle();
    } else if (nestedData && nestedData.Info) {
        var nestedHtml = buildNestedTable(nestedData.Info);
        tr.after(nestedHtml);
        tr.next('.nestedRow').find('td.screenTitle').on('click', function () {
            var subNestedTr = $(this).closest('tr');
            var subNestedData = $(this).data('nested-data');
            toggleNestedRow(subNestedTr, subNestedData);
        });
    }
}






  // document
  //   .querySelector(".dropDownIcon")
  //   .addEventListener("click", function () {
  //     this.classList.toggle("up");
  //   });

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
    var column3 = tableResarch3.column($(this).attr("data-column"));
    column3.visible(!column3.visible());
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

  //$(".edit").on("click", function () {
  //  console.log("td");
  //  $("#modal_popup").modal("show");
  //});

  $(".duplicate").on("click", function () {
    console.log("td");
    $("#modal_popup").modal("show");
  });
  $(".history").on("click", function () {
    console.log("td");
    $(".history1").modal("show");
  });

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
