$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#mycarousel").children("#carouselButton").removeClass("btn-danger");
            $("#mycarousel").children("#carouselButton").addClass("btn-success");
            $("#carouselButton").children("span").addClass('fa-play');

        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#mycarousel").children("#carouselButton").removeClass("btn-success");
            $("#mycarousel").children("#carouselButton").addClass("btn-danger");
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
    //Assigment 4: Task 2
    $("#ReserveTableButton").click(function () {
        $('#ReserveModal').modal('toggle');
    });
    //Assigment 4: Task 3
    $("#LoginButtom").click(function () {
        $('#LoginModal').modal('toggle');
    });
});