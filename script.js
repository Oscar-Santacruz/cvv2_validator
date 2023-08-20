$(".button-class").click(function()
{   
    var select = $(this).attr("data-title"); 
                 $(".highlight").removeClass("highlight");
                 $(".highlight6digitos").removeClass("highlight6digitos");
                 $(".highlight4ultimos").removeClass("highlight4ultimos");
                 $(".front ." + select).addClass("highlight");
                })

$(".button6digitos-class").click(function()
{   
    var select = $(this).attr("data-title"); 
                    $(".highlight").removeClass("highlight");
                    $(".highlight4ultimos").removeClass("highlight4ultimos");
                    $(".front ." + select).addClass("highlight6digitos");
                })

$(".button4ultimos-class").click(function()
{   
    var select = $(this).attr("data-title"); 
                    $(".highlight").removeClass("highlight");
                    $(".highlight6digitos").removeClass("highlight4ultimos");
                    $(".front ." + select).addClass("highlight4ultimos");
                })

jackHarnerSig("light")