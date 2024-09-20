

var icon_show = document.querySelector('.icon_show');
var icon_not_show = document.querySelector('.icon_not_show');
var inputPass = document.querySelector('#enter-pass');
if(icon_not_show){
    icon_not_show.addEventListener('click', function(){
        inputPass.type='text';
        icon_show.classList.remove('d-none');
        this.classList.add('d-none');
    })
}
if(icon_show){
    icon_show.addEventListener('click', function(){
        inputPass.type='password';
        icon_not_show.classList.remove('d-none');
        icon_show.classList.add('d-none');
       
    })
}


$(document).ready(function(){

    $('.form-control-select2').select2();

    //Socres Table
    var data= [
        [ "Billy Bob","billybob@gmail.com", "12", "Alabama", "male", "1", "01/08/1980", "completed",  "Decatur", "35004","Court Street", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ],
        [
             "Mary May", "marymay@gmail.com", "14","Alaska", "female",  "2",  "14/05/1982","Pending", "Phoenix" ,"36925", "Creek Street", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
        [  "Smith Johnson", "crandall@comcast.net",   "42",  "Arizona", "male",  "5",     "22/05/1982",  "Overdue",  "Avondale", "85001" , "Congress Street", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
        [ "Williams Brown", "mwilson@att.net",   "42",  "Arkansas",   "male",   "8",   "22/05/1982",  "completed",  "Conway", "90001", "Dickson Street" , "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
        [ "Jones Miller","tangsh@me.com",   "42",  "California",   "male",   "1",   "22/05/1982",   "Overdue", "Culver City", "	06001" ,"Lombard Street" , "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
        [ "Brendon Philips","sblack@hotmail.com",   "15",  "Colorado",   "male",   "1",      "01/08/1980","Pending", "Colorado Springs", "81658", "Larimer Square", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ],
        [ "Margret Marmajuke","leakin@yahoo.com",   "16",  "Connecticut",   "female",   "5",      "31/01/1999","completed","Bristol", "40003", "Chapel Street" , "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
        [ "Leonard Mann","fwiles@me.com",   "12",  "Delaware",   "male",   "1",      "22/05/1982", "completed",  "New Castle" , "21930", "Second Street", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
        [ "Rodriguez Wilson","firstpr@msn.com",   "19",  "Florida",   "male",   "4",   "01/08/1980",   "Pending",   "Orlando", "63001", "Ocean Drive" , "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
        [ "Dennis Mcbride","bryam@live.com",   "10",  "Georgia",   "male",   "2",     "14/05/1982",   "Overdue", "Brunswick", "89883", "Peachtree Street" , "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
        [ "Martinez Anderson","satishr@msn.com",   "42",  "Idaho", "female",  "0",     "22/05/1982",  "Pending",  "Priest River" ,"08989", "Kahala Avenue", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
        [ "Thomas Jackson", "bonmots@icloud.com",   "",  "Indiana",   "male",   "1",    "01/08/1980" ,"Pending", "Jacksonville", "01001" , "Eighth Street ", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
        [  "Thompson Shaw","tjensen@gmail.com",   "16",  "Florida",   "male",   "5",     "31/01/1999", "completed","Miami", "65899", "Michigan Ave" , "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
        [  "Margret Queen", "tjensen@gmail.com",   "26",  "Colorado",   "female",   "15",     "31/01/1999", "Overdue","Montrose", "29001", "Bourbon Street" , "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
    ];
    var tableResarch = $('#customerTable').DataTable({
        "data":data,
       
        columns: [ //Define Table Columns
    { title: "Name"},
    { title: "Email" },
    { title: "Age"},
    { title: "State"},
    { title: "Gender"},
    { title: "Rank"},
    { title: "Date"},
    { title: "Status" },
    {title:"City"},
    {title:"Zip Code"},
    {title:"Street"},
    {title:"Message"},
],

    scrollX: true,
    scrollCollapse: true,
    fixedColumns:   {
        left: 1
    },
    'columnDefs': [
        
        {
            "targets": 0,
            "className": "dropdown_col",
            "width": "200",
        },
        {
            "targets": 2,
            "className": "text-center",
            "width": 400,
        },
        {
            "targets": 3,
            "className": "text-center",
        },
        {
            "targets": 4,
            "className": "text-center",
        },
        {
            "targets": 5,
            "className": "text-center",
        },
        {
            "targets": 7, // your case first column
            "className": "span_badge",
            "render":function(data, type){
                var count = 0;
                return (
                    
                    `<span class='badge badge_div'> ${data} </span>`
                   
                )
            
                
                }
           

        },
        
        {
            "targets": 9,
            "className": "text-center",
        }
    ],
    'rowCallback': function(row, data, index){
        if(data[7] === 'completed'){
            $(row).find('td:eq(7)').find('span').addClass('green_badge');
        }
        if(data[7] === 'Pending'){
            $(row).find('td:eq(7)').find('span').addClass('blue_badge');
        }
        if(data[7] === 'Overdue'){
            $(row).find('td:eq(7)').find('span').addClass('red_badge');
        }
       
      }
    });
 
    $('input.toggle-vis').on('change', function (e) {
        e.preventDefault();

        // Get the column API object
        var column = tableResarch.column($(this).attr('data-column'));

        // Toggle the visibility
        column.visible(!column.visible());
    });

    $('.form-control-select2').select2();
    //vishva start
    //Socres Table 
    var data = [
        ["BLS", "11/01/2023", "10:00AM", "06:00PM", "SRM", "DOCTORS", "aa", "aa", "aa", "01/08/2023", "11:00AM", "01:00PM"],
        ["BEHAVIOURAL TRAINING", "11/01/2023", "10:00AM", "06:00PM", "SRM", "DOCTORS", "aa", "aa", "aa", "01/08/2023", "11:00PM", "01:00PM"],

    ];
    var tableschedule = $('#scheduleTable').DataTable({
        "data": data,

        columns: [ //Define Table Columns
            { title: "Topic Category" },
            /*{ title: "Topic" },*/
            //{ title: "Session No" },
            { title: "Date" },
            { title: "Start time" },
            { title: "End time" },
            { title: "Venue" },
            { title: "Doctor" },
            { title: "Admin" },
            { title: "Nurse" },
            { title: "Pharamedical" },
            { title: "Actual Date" },
            { title: "Actual Start time" },
            { title: "Actual End time" },

        ],


        scrollX: true,
        scrollCollapse: true,
        fixedColumns: {
            left: 1
        },
        'columnDefs': [

            {
                "targets": 0,
                "className": "dropdown_col",
                "width": "200",
            },
            {
                "targets": 2,
                "className": "text-center",


            },
            {
                "targets": 3,
                "className": "text-center",
            },
            {
                "targets": 4,
                "className": "text-center",
            },
            {
                "targets": 5,
                "className": "text-center",
            },
            {
                "targets": 6,
                "className": "text-center",
            },
            {
                "targets": 7,
                "className": "text-center",
            },
            {
                "targets": 8,
                "className": "text-center",
            },
            {
                "targets": 9,
                "className": "text-center",
            },
            {
                "targets": 10,
                "className": "text-center",
            },
            {
                "targets": 11,
                "className": "text-center",
            },
            //{
            //    "targets": 12,
            //    "className": "text-center",
            //},
            //{
            //    "targets": 13,
            //    "className": "text-center",
            //},


        ],

    });
    $('#scheduleTable tbody').on('click', 'tr', function () {
        console.log('td')
        $('#modal_popup').modal('show');
    });



    $('input.toggle-vis').on('change', function (e) {
        e.preventDefault();

        // Get the column API object
        var column = tableschedule.column($(this).attr('data-column'));

        // Toggle the visibility
        column.visible(!column.visible());
    });
    //vishva end

    $('#customerTable tbody').on('click', 'tr', function () {
        console.log('td')
        $('#modal_popup').modal('show');
    });



    $('.form-control-select2').select2();

    //Socres Table
    var data = [
        ["MOCK DRILL", "BLS", "BLS", "01/01/2023", "01/01/2023", "Active"],
        ["DEPARTMENTAL TRAINING", "BLS", "OCCUPATIONAL HEALTH HAZARD", "01/01/2023", "01/01/2023", "Inactive"],
        ["BEHAVIOURAL TRAINING", "BLS", "LIVE FIRE DEMO", "01/01/2023", "01/01/2023", "Active"],
        ["MOCK DRILL", "BLS", "BLS", "01/01/2023", "01/01/2023", "Active"],
        ["DEPARTMENTAL TRAINING", "BLS", "OCCUPATIONAL HEALTH HAZARD", "01/01/2023", "01/01/2023", "Inactive"],
        ["BEHAVIOURAL TRAINING", "BLS", "LIVE FIRE DEMO", "01/01/2023", "01/01/2023", "Active"],
        ["DEPARTMENTAL TRAINING", "BLS", "OCCUPATIONAL HEALTH HAZARD", "01/01/2023", "01/01/2023", "Inactive"],
        ["MOCK DRILL", "BLS", "BLS", "01/01/2023", "01/01/2023", "Active"],
        ["DEPARTMENTAL TRAINING", "BLS", "OCCUPATIONAL HEALTH HAZARD", "01/01/2023", "01/01/2023", "Inactive"],
        ["MOCK DRILL", "BLS", "BLS", "01/01/2023", "01/01/2023", "Active"],
        ["BEHAVIOURAL TRAINING", "BLS", "LIVE FIRE DEMO", "01/01/2023", "01/01/2023", "Active"],
        ["DEPARTMENTAL TRAINING", "BLS", "OCCUPATIONAL HEALTH HAZARD", "01/01/2023", "01/01/2023", "Inactive"],
    ];
    var tableTopic = $('#topicTable').DataTable({
        "data": data,

        columns: [ //Define Table Columns
            { title: "Topic Category" },
            { title: "Topic" },
            { title: "Topic Description" },
            { title: "Valid From" },
            { title: "Valid To" },
            { title: "Status" },

        ],

        scrollX: true,
        scrollCollapse: true,
        fixedColumns: {
            left: 1
        },
        'columnDefs': [

            {
                "targets": 0,
                "className": "dropdown_col",
                "width": "200",
            },
            {
                "targets": 2,
                "className": "text-left",
                "width": 300,
            },
            {
                "targets": 3,
                "className": "text-center",
            },
            {
                "targets": 4,
                "className": "text-center",
            },
            {
                "targets": 5,
                "className": "text-center",
            },
            {
                "targets": 5, // your case first column
                "className": "span_badge",
                "render": function (data, type) {
                    var count = 0;
                    return (

                        `<span class='badge badge_div'> ${data} </span>`

                    )


                }


            },


        ],
        'rowCallback': function (row, data, index) {
            if (data[5] === 'Active') {
                $(row).find('td:eq(5)').find('span').addClass('green_badge');
            }

            if (data[5] === 'Inactive') {
                $(row).find('td:eq(5)').find('span').addClass('red_badge');
            }

        }
    });
    $('input.toggle-vis').on('change', function (e) {
        e.preventDefault();

        // Get the column API object
        var column = tableTopic.column($(this).attr('data-column'));

        // Toggle the visibility
        column.visible(!column.visible());
    });


    $('input.toggle-vis').on('change', function (e) {
        e.preventDefault();

        // Get the column API object
        var column = tableResarch.column($(this).attr('data-column'));

        // Toggle the visibility
        column.visible(!column.visible());
    });

    $('.dropdown a').click(function (e) {
        $(this).next('.dropdown-menu').addClass('show');
    });
    //$('.dropdown_link').click(function(e){
    //    e.stopPropagation();
    //    console.log('a clicked')
    //    $(this).next('.dropdown-menu').toggle();
    //    $('.fa_chrvon').html('<i class="fa-light fa-chevron-down ml-2"></i>');
    //    if($(this).next('div').hasClass('show')){
    //        $(this).find('.spanFa').html('<i class="fa-light fa-chevron-up ml-2"></i>');
    //    }
    //})
    $('.multiselect-filtering').multiselect({
        enableFiltering: true,
        enableCaseInsensitiveFiltering: true
    });
    $('.multiselect').click(function () {
        $('.multiselect-container').show();

    })
    var badge_div = $('.badge_div').text();
    var badge_div_p = $('.badge_div');

    console.log(badge_div)

    $('#topicTable tbody').on('click', 'tr', function () {
        console.log('td')
        $('#modal_popup').modal('show');
    });
    //vishva end


    //*Emima Start
    //Topic Report Table
    var data = [
        ["1", "1", "EVACUATION TRAINING", "10-11-2022", "1.30 PM", "3.30 PM", "Hospital Seminar Hall - Ground Floor ", "2", "47", "15", "4", "68"],
        ["2", "2", "EVACUATION TRAINING", "12-11-2022", "1.30 PM", "3.30 PM", "Hospital Seminar Hall - Ground Floor ", "", "10", "8", "2", "20"],

    ];
    var tableTrainer = $('#reportTable').DataTable({
        "data": data,

        columns: [ //Define Table Columns
            { title: "S.No" },
            { title: "Session No" },
            { title: "Name of Topic" },
            { title: "Date" },
            { title: "Start Time" },
            { title: "End Time" },
            { title: "Room" },
            { title: "Doctor" },
            { title: "Admin" },
            { title: "Nurse" },
            { title: "Paramedical" },
            { title: "Total Participants" },
        ],

        scrollX: true,
        scrollCollapse: true,
        fixedColumns: {
            left: 1
        },
        'columnDefs': [

            {
                "targets": 0,
                "className": "dropdown_col",
                "width": "200",
            },
            {
                "targets": 2,
                "className": "text-center",
                "width": 400,
            },
            {
                "targets": 3,
                "className": "text-center",
            },
            {
                "targets": 4,
                "className": "text-center",
            },
            {
                "targets": 5,
                "className": "text-center",
            },
            
            {
                "targets": 6,
                "className": "text-center",
            },
            {
                "targets": 7,
                "className": "text-center",
            },
            {
                "targets": 8,
                "className": "text-center",
            },
            {
                "targets": 9,
                "className": "text-center",
            },
             {
                "targets": 10,
                "className": "text-center",
            },
              {
                "targets": 11,
                "className": "text-center",
            }
           
        ],
    });

    $('input.toggle-vis').on('change', function (e) {
        e.preventDefault();

        // Get the column API object
        var column = tableReport.column($(this).attr('data-column'));

        // Toggle the visibility
        column.visible(!column.visible());
    });
   
    //Topic Trainer Table
    var data = [
        ["1", "Kishore", "EVACUATION TRAINING", "10-11-2022", "1.30 PM", "3.30 PM", "Hospital Seminar Hall - Ground Floor ", "2", "47", "15", "4", "68"],
        ["2", "Kishore", "EVACUATION TRAINING", "12-11-2022", "1.30 PM", "3.30 PM", "Hospital Seminar Hall - Ground Floor ", "", "10", "8", "2", "20"],

    ];
    var tableTrainer = $('#trainerTable').DataTable({
        "data": data,

        columns: [ //Define Table Columns
            { title: "S.No" },
            { title: "Trainer Name" },
            { title: "Topic Name" },
            { title: "Date" },
            { title: "Start Time" },
            { title: "End Time" },
            { title: "Room" },
            { title: "Doctor" },
            { title: "Admin" },
            { title: "Nurse" },
            { title: "Paramedical" },
            { title: "Total Participants" },
        ],

        scrollX: true,
        scrollCollapse: true,
        fixedColumns: {
            left: 1
        },
        'columnDefs': [

            {
                "targets": 0,
                "className": "dropdown_col",
                "width": "200",
            },
            {
                "targets": 2,
                "className": "text-center",
                "width": 400,
            },
            {
                "targets": 3,
                "className": "text-center",
            },
            {
                "targets": 4,
                "className": "text-center",
            },
            {
                "targets": 5,
                "className": "text-center",
            },

            {
                "targets": 6,
                "className": "text-center",
            },
            {
                "targets": 7,
                "className": "text-center",
            },
            {
                "targets": 8,
                "className": "text-center",
            },
            {
                "targets": 9,
                "className": "text-center",
            },
            {
                "targets": 10,
                "className": "text-center",
            },
            {
                "targets": 11,
                "className": "text-center",
            }

        ],
    });

    $('input.toggle-vis').on('change', function (e) {
        e.preventDefault();

        // Get the column API object
        var column = tableTrainer.column($(this).attr('data-column'));

        // Toggle the visibility
        column.visible(!column.visible());
    });
    //Topic Trainer Table
    var data = [
        ["1", "Gopi", "EVACUATION TRAINING", "10-11-2022", "1.30 PM", "3.30 PM", "Hospital Seminar Hall - Ground Floor "],
        ["2", "Gopi", "EVACUATION TRAINING", "12-11-2022", "1.30 PM", "3.30 PM", "Hospital Seminar Hall - Ground Floor "],

    ];
    var tableTrainer = $('#traineeTable').DataTable({
        "data": data,

        columns: [ //Define Table Columns
            { title: "S.No" },
            { title: "Trainer Name" },
            { title: "Topic Name" },
            { title: "Date" },
            { title: "Start Time" },
            { title: "End Time" },
            { title: "Room" },
        ],

        scrollX: true,
        scrollCollapse: true,
        fixedColumns: {
            left: 1
        },
        'columnDefs': [

            {
                "targets": 0,
                "className": "dropdown_col",
                "width": "200",
            },
            {
                "targets": 2,
                "className": "text-center",
                "width": 400,
            },
            {
                "targets": 3,
                "className": "text-center",
            },
            {
                "targets": 4,
                "className": "text-center",
            },
            {
                "targets": 5,
                "className": "text-center",
            },

            {
                "targets": 6,
                "className": "text-center",
            }
            
        ],
    });

    $('input.toggle-vis').on('change', function (e) {
        e.preventDefault();

        // Get the column API object
        var column = tableTrainee.column($(this).attr('data-column'));

        // Toggle the visibility
        column.visible(!column.visible());
    });
    //*Emima End
    $('.dropdown a').click(function(e){
        $(this).next('.dropdown-menu').addClass('show');
    });
    // $('.dropdown_link').click(function(e){
    //     e.stopPropagation();
    //     console.log('a clicked')
    //     $(this).next('.dropdown-menu').toggle();
    //     $('.fa_chrvon').html('<i class="fa-light fa-chevron-down ml-2"></i>');
    //     if($(this).next('div').hasClass('show')){
    //         $(this).find('.spanFa').html('<i class="fa-light fa-chevron-up ml-2"></i>');
    //     }
    // })
    $('.multiselect-filtering').multiselect({
        enableFiltering: true,
        enableCaseInsensitiveFiltering: true
    });
    $('.multiselect').click(function(){
        $('.multiselect-container').show();
       
    })
    var badge_div = $('.badge_div').text();
    var badge_div_p = $('.badge_div');
    
    console.log(badge_div)
    
    $('#customerTable tbody').on('click', 'tr', function () {
        console.log('td')
        $('#modal_popup').modal('show');
    });

    $('.daterange-single').daterangepicker({
        parentEl: '.content-inner',
        singleDatePicker: true
    });
    
    $('.closeBoxDialog').click(function () {
        $('.modal').modal('hide');
    });

   $('.header-elements-toggle').click(function(){
        $('.sidebar').toggleClass('sidebar-expand-e');
        $('.sidebar').toggleClass('sidebar-main-resized');
   })
   $('.toast').toast('hide');
   $('.notif_icon').click(function () {
        $('#modal_notif').modal('show');
    });
    $('.mark_all_read').click(function(){
        $('.modal_notif').find('.notification_div').removeClass('notread');
        $('.round_alert').hide();
        $(this).hide();
        $('.toast').toast('show');
    });

    $('#sweet_success').click(function(e){
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Save it!'
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success')
            //   Swal.fire(
            //     'Saved!',
            //     'Your file has been saved...',
            //     'success'
            //   )
            }
          })
    })
   
});

$(document).on("click", function(event){
    var trigger = $(".dropdown");
    if(trigger !== event.target && !trigger.has(event.target).length){
        $('.dropdown').find('.dropdown-menu').removeClass('show');
        $(trigger).children('a').find('.spanFa').html('<i class="fa-light fa-chevron-down ml-2"></i>');
    }
    
    var triggerMulti = $('.multiselect-native-select');
    if(triggerMulti !== event.target && !triggerMulti.has(event.target).length){
        $('.multiselect-container').hide();
       
    }
});

