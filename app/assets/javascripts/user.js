$(document).ready(function () {

    var priceAmount = 0;


    $('input[name="auto"]').click(function () {
        checkingThings('auto')

    })
    $('input[name="gas"]').click(function () {
        checkingThings('gas')
    })
    $('input[name="cit"]').click(function () {
        checkingThings('cit')
    })
    $('input[name="mon"]').click(function () {
        checkingThings('mon')
    })

    var checkingThings = function (names) {
        var autos = $('input[name="'+ names + '"]:checked');
        if(autos.length >0){
            var resultString = names  + autos.length + " checked <br/>";
            autos.each(function () {
                resultString+=$(this).val() + "<br/>";
                checkPrice($(this).val());

            })
            $('#div'+names).html(resultString).css('background-color','azure');
        } else {
            $('#div'+names).html("Nothing is checked");
        }
    }
    var checkPrice = function (mark) {
            switch(mark){
                case 'ZAZ':
                    priceAmount+=255;
                    break;
                case 'BMW':
                    priceAmount+=500;
                    break;
                case 'MAN':
                    priceAmount+=600;
                    break;
                default:

            }
            $('#resPrice').html("TotalPrice is:" + priceAmount);
    }
})


/*




---------ChecjBox(work with checkboxes params----------
$(document).ready(function () {
    $('#c1').click(function () {
        var resul1 = $('input[type="checkbox"]:checked');
       if (resul1.length >0) {
           var resultString = resul1.length + "checkboxes checked <br/>";
           resul1.each(function () {
                resultString+=$(this).val()+ "<br/>";
           })
           $('#div1').html(resultString + " is checked");

       } else {
           $('#div1').html("Nothing is checked");
       }

    })
})

----------CheckBox(work with values)-----------------
$(document).ready(function () {
    $('#c1').click(function () {
        var resul1 = $('input[type="radio"]:checked');
       if (resul1.length >0) {
           $('#div1').html(resul1.val() + " is checked");
       } else {
           $('#div1').html("Nothing is checked");
       }

    })
})


----------Atribute selector---------------
$(document).ready(function () {
    $('#hw').click(function () {
        $('[style="color: green"]').css('background','blue');
    })
})
-----------element selector---------------
$(document).ready(function () {
    $('#hw').click(function () {
        $('table tr').each(function () {
            alert($(this).html());
        })
    })
})
$(window).on('load', function () {
    alert(('Window loaded'));
})

$(document).ready(function () {
    alert('Dom loaded');

})
*/