

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
        ["1", "Hospital Seminar Hall,Ground Floor", "Hall", "15", "Kattankulathur", "Notting", "Ac", "35004", "Just ....."],
        ["2", "Orthopaedics Seminar Hall", "Hall", "16", "Vadapalani",  "Notting", "NonAc", "35004", "Just ....."],
        ["3", "4th Floor Simulation Lab", "Lab", "25", "Trichy",  "Completed", "Ac", "35004", "Just ....."],
        ["4", "Demo Hall - 2, Pharmacology Dept", "Hall", "55", "Ramapuram",  "Free", "Ac", "35004", "Just ....."],
        ["5", "Hospital Seminar Hall,Ground Floor", "Hall", "65", "Kattankulathur",  "Completed", "Ac", "35004", "Just ....."],
        ["6", "Anaesthesiology seminar hall", "Hall", "25", "Vadapalani",  "Notting", "Billow", "35004", "Just ....."],
        ["7", "4th Floor Simulation Lab", "Lab", "65", "Trichy", "Clean Hospital", "Billow", "35004", "Just ....."],
        ["8", "Radiology Seminar Hall - Groung Floor", "Hall", "85", "Ramapuram",  "Clean Clean Hospital Clean", "Ac", "35004", "Just ....."],
        ["9", "Hospital Seminar Hall,Ground Floor", "Hall", "85", "Kattankulathur", "Nice", "Ac", "35004", "Just ....."],
        ["10", "4th Floor Simulation Lab", "Lab", "85", "vadapalani",  "Easy", "Ac", "35004", "Just ....."],
    ];
    var tableResarch = $('#venueTable').DataTable({
        "data":data,
       
        columns: [ //Define Table Columns

            { title: "S.No" },
            { title: "Room Name" },                                                 
            { title: "Room Type" },
            { title: "Room Capacity" },
            { title: "Room Location" },          
            { title: "Room Description"},           
            { title: "Room Equipment" },           
            { title:"Room Incharge Number"},
            { title: "Action" },
  
],

    scrollX: true,
    scrollCollapse: true,
    fixedColumns:   {
        left: 1
    },
    'columnDefs': [

        {
            "targets": 2,
            "className": "text-center",
            "width": 400,
        },
        {
            "targets": 3,
            "className": "text-center",
            "width": 400,
        },
        
      
        {
            "targets": 7,
            "className": "text-center",
            "width": 400,
        },
        {
            "targets":8, // your case first column
            "className": "span_badge",
            "render":function(data, type){
                var count = 0;
                return (
                    
                    `<span class='badge badge_div'> ${data} </span>`
                   
                )
            
                
                }
           

        },
        
        {
            "targets": 8,
            "className": "text-center",
        }
    ],
    'rowCallback': function(row, data, index){
        if(data[8] === 'completed'){
            $(row).find('td:eq(7)').find('span').addClass('green_badge');
        }
        if(data[8] === 'Pending'){
            $(row).find('td:eq(7)').find('span').addClass('blue_badge');
        }
        if(data[8] === 'Overdue'){
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
    
    $('#venueTable tbody').on('click', 'tr', function () {
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
var img_uploaded = document.querySelector('.trianeeImg');
var delete_img = document.querySelector('.delete_img');
window.addEventListener('load', function () {
    document.querySelector('.img_upload').addEventListener('change', function () {
        if (this.files && this.files[0]) {
            var img = document.querySelector('.trianeeImg');
            img.onload = () => {
                URL.revokeObjectURL(img.src);
            }

            img.src = URL.createObjectURL(this.files[0]);

            delete_img.classList.remove('d-none');
        }
    });
});
if (delete_img) {
    delete_img.addEventListener('click', function () {
        img_uploaded.setAttribute('src', './assets/images/placeholder_img.jpg');
        this.classList.add('d-none')
    })
}

