$("body").addClass("overflow-y-hidden");
$(function(){
    $("body").removeClass("overflow-y-hidden");
    $(".spinner").addClass("hidden");
    $(".show-navigation").click(function(){
        $(".drawer-navigation").animate(
            {
                width : "250px",
                padding: '1rem'
            }
        );
    });
    $(".close-btn").click(function(){
        $(".drawer-navigation").animate(
            {
                width : "0px",
                padding: '0px'
            }
        );
    });

$(".navbar-link").click(function(){
    let ref = $(this).attr('href');
    console.log($(ref).offset().top);
    $('html,body').animate({
        scrollTop: `${$(ref).offset().top}px`,
    },1000)
})

$(".accordion-title").click(function(){
    $(this).parent().siblings().children(".accordion-content").slideUp(1000);
    $(this).next().slideToggle(1000)
})

function countDown (){
    let now = new Date();
    let partyDate = new Date(2022,12,28);
    let waitingTime = partyDate.getTime() - now.getTime();
    let seconds = Math.floor(waitingTime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24 - 30);
    seconds = seconds % 60
    minutes = minutes % 60
    hours = hours % 24

$("#Days").text(days + " d")
$("#Hours").text(hours + " h")
$("#Minutes").text(minutes + " m")
$("#Seconds").text(seconds + " s")

setTimeout(countDown,1000)

}
countDown()
$("#message").keyup(function(){
    let inputLen = $(this).val().length;
    $("#remain span").text(100 - inputLen)
})
})