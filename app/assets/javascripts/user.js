

/*


--- Slice and split strings

--- NaN - Not a Number

---Numbers

MATH FUNCTIONS
    Math.            <- will appear list

---Variable scopes(local vs global variables, same as C++)


---Functions

var aCounter = "Noober";

function sayHello(thing){
    alert("Hello, " + thing);
}

sayHello(aCounter);


---breaking the loop
for (i = 0; i < 15; i++){


    if(i === 5 || i === 3){
        continue;                  // scip out it
    }
    console.log(i);

    if(i === 7){
        break;
    }


}
    document.write("I brake the loop...");


----- count elem my tagName

var divs = document.getElementsByTagName("div");

for (i = 0; i < divs.length; i++){
    console.log("this is link number:" + i);

}
    document.write("Over and over, and ober...");

----For loop
for (age = 5; age < 15; age++){
    console.log("Your age is less than 10");

}
    document.write("Over and over, and ober...");



----while loop

var age = 5;

while(age < 10){
    console.log("Your age is less than 10");
}
    document.write("Over and over, and ober...");

--
var youLikeMeat = true;

if(youLikeMeat){

    document.write("Here's the meaty menu..");
} else if {
    alert('Noobs eat vegetables');
};

    Write to document and console:
    Chrome <- inspect

----
    Basic math functions( same as c++)

----
    selecting elements.
  document.getElementById('idnmae')       <--- select element in DOM

-----------------------------------------------------------------------------------------
/* JavaScript




$(document).ready(function () {
    alert('Hi');
    $('#divHeight').slider();

});


/*


---79 jQuery multiple sliders, slide() fuction(width,height, opacity of image) ( HOME FIX)


HTML--
<div id="divHeight"></div><br/>
<div id="divWidth"></div><br/>
<div id="divOpacity"></div><br/>
<div id="divDimensions"></div><br/>
<%= image_tag('1.jpg', id: 'myImg', style: 'width: 100px; height: 100px') %>



---71 Calling live web service using jQuery Ajax
cite: http://openweathermap.org/current
$('#buttonSearch').click(function(){
        var requestData = $('#txtCity').val() + ',' + $('#txtContry').val();
        var resultElement = $('#divauto');

        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather',
            method: 'get',
            data: { q: requestData },
            dataType: 'json',
            success: function(data) {
                resultElement.html('Weather' + data.weather[0].main );
            }
        });
    });
    HTML file---
    <table>
  <tr>
    <td>City:</td>
    <td><input type="text" id="txtCity"></td>
  </tr>
  <tr>
    <td>Country:</td>
    <td><input type="text" id="txtContry"></td>
  </tr>
</table>
<input type="button" value="Search Weather" id="buttonSearch">
<br/><br/>
<div id="divResult1"></div>


---70 jQuery. Load data on page scroll using jQuery(HM)



----69 jQuery. Difference between window height and document height
  - $(window).height() - returns the hieght of the browser window(what you see)
  - $(document).height() - returns height of HTML document(includes below and above visible areas)
  - $(window).scrollTop() - returns the current vertical position of the scroll bar.
    var floatingDivPosition = floatingDiv.position();
       $(window).scroll(function(){
            var scrollBarPosition = $(window).scrollTop();
            if(scrollBarPosition >= floatingDivPosition.top)
            {
                floatingDiv.css({
                    'position' : 'fixed',
                    'top' : 5
                })
            }
            else
            {
                floatingDiv.css({
                    'position' : 'relative',
                    'top' : 0
                })
            }
            floatingDiv.html(
                'Window height = ' + $(window).height() + 'Document height = ' + $(document).height()  +
                'vertical scroll bar position = ' + scrollBarPosition
            )

            if(scrollBarPosition == $(document).height() - $(window).height()){
                floatingDiv.html('You have reached bottom of the page');
            }

       });




----54 jQuery  .load(url[,data][complete]) - AJAX(asynchronous JS and XML), allows parts of the page to be reload without reloading entire page
    //W


---53  jQuery floating div(keeps floating beside u as you scroll down)
--jQuery
var floatingDiv =  $('#divFloating');
       var floatingDivPosition = floatingDiv.position();
       $(window).scroll(function(){
            var scrollBarPosition = $(window).scrollTop();
            if(scrollBarPosition >= floatingDivPosition.top)
            {
                floatingDiv.css({
                    'position' : 'fixed',
                    'top' : 5
                })
            }
            else
            {
                floatingDiv.css({
                    'position' : 'relative',
                    'top' : 0
                })
            }

       });
--- HTML
<table align="center" border="1" style="border-collapse: collapse;">
  <tr>
    <td style="width: 500px; vertical-align: top">
      Main content
    </td>
    <td style="width: 150px; vertical-align: top">
      Side Panel
      <br/>
      <br/>
      <div id="divFloating" style="background-color: silver; height: 150px; width: 150px">
        FLOATING DIV
      </div>
    </td>
  </tr>
</table>



---52 Increase decrease font size using jquery
------Can be used to every attribute in the Page
$('#sizeIncrease').click(function(){
                sizeManipulator('increase');
            })
            $('#sizeDecrease').click(function(){
                sizeManipulator('decrease');
            })
            $('#sizeNormal').click(function(){
                sizeManipulator('normal');
            })


    function sizeManipulator(flag){
            var divElement = $('#divauto');
            var currentSize = parseInt(divElement.css('font-size'));


            if (flag == 'increase') {
                currentSize += 3;
            } else if (flag == 'decrease') {
                currentSize -=3;
            } else {
                currentSize = 16;
            };

            divElement.css('font-size', currentSize);
    }


---51 jQuery show/hide password(toggle password)
---Simple
 $('#chkbox').click(function(){
        $('#psfield').attr('type', $(this).is(':checked') ? 'text' : 'password');

    })


----50 Optimize jQuery prgoress bar
----short version using step

    $('#c1').click(function(){
        animateProgressBar($('#ddSelectPercentage').val());
   });

    function animateProgressBar(currentPercentage)
    {
        $('#divauto2').animate({
            'width' : ((500 * currentPercentage) / 100)
        }, {
            duration: 2000,
            step : function(now, tween) {                // 'now' - the value animation is currently at
                                                        // 'tween' - the value animation will end at
                $('#divauto2').text(Math.ceil((now / 500) * 100) + ' %');
            }
        })
    }

--------long version
var previousPercentage = 0;
    var currentPercentage = 0;

    function animateProgressBar(previousPercentage,currentPercentage)
    {
        $('#divauto2').animate({
            'width' : ((500 * currentPercentage) / 100)
        }, 3000);

        if(previousPercentage > currentPercentage)             //when roll back it adds 1;
            currentPercentage -= 1;

        $({ counter: previousPercentage }).animate({
            counter: currentPercentage
        }, {
            duration: 3000,
            step : function(){
                $('#divauto2').text(Math.ceil(this.counter) + ' %');
            }
            })
    }
    $('#c1').click(function(){
        previousPercentage = currentPercentage;
        currentPercentage = $('#ddSelectPercentage').val();
        animateProgressBar(previousPercentage, currentPercentage);
   });


----49 jQuery simple progress bar
function animateProgressBar(percentageCompleted)
    {
        $('#divauto2').animate({
            'width' : ((500 * percentageCompleted) / 100)
        }, 3000);

        $({ counter: 1 }).animate({                       //JSON object that animates on itself
            counter: percentageCompleted                   // bassed on percetages that we give
        }, {
            duration: 3000,
            step : function(){                              // adds '%' into div
                $('#divauto2').text(Math.ceil(this.counter) + ' %'); //Math.ceil - to integer
            }
            })
    }
    $('#c1').click(function(){
        var percentages = $('#ddSelectPercentage').val();
        animateProgressBar(percentages);
    });


HTML - two divs one in another
.divauto{
    background-color: grey;
    height: 20px;
    width: 500px;
    padding: 5px;
}
.divaut2{
    background-color: red;
    height: 19px;
    width: 0px;
    color: white;
    text-align: center;
}



------48 jQuery animation Queue(queue function)------------
---To use animations in parallel use queue: false

        $('#divauto')
        .animate({ 'width' : 500}, {duration: 1500, queue: false})
        .animate({ 'padding' : 20},{duration: 1500, queue: false})
        .animate({ 'font-size' : 50},{duration: 1500, queue: false})
        .animate({ 'border-width' : 10},{duration: 1500, queue: false})
        .animate({ 'opacity' : 1},{duration: 1500, queue: false})

---Queue(очередь анимации) length
$('#c1').click(function(){

        $.fx.off = $('#chkbox').is(':checked'); // Turns off animation if checkbox is ':checked'

        $('#divauto')
        .animate({ 'width' : 500},1500)
        .queue(function(){
            console.log('Queue calls = ' + $(this).queue('fx').length); //allows to count how many animations WAITS to be executed
                                                                        after 1 animation it'll stop. 'fx' is the name of default queue
            $(this).dequeue(); // dequeue method allows to continue animation
        })
        .animate({ 'padding' : 20},1500)
        .animate({ 'font-size' : 50},1500)
        .animate({ 'border-width' : 10},1500)
        .animate({ 'opacity' : 1},1500)

        $('#divauto2')
        .animate({ 'width' : 500},1500)
        .animate({ 'padding' : 20},1500)
        .animate({ 'font-size' : 50},1500)
        .animate({ 'border-width' : 10},1500)
        .animate({ 'opacity' : 1},1500)
    });
---Two elements are begin move together(became bigger/smaller/change color, etc. HM required)
   > One method after another
   $('#c1').click(function(){
        $('#divauto')
        .animate({ 'width' : 500},1500)
        .animate({ 'padding' : 20},1500)
        .animate({ 'font-size' : 50},1500)
        .animate({ 'border-width' : 10},1500)
        .animate({ 'opacity' : 1},1500)

        $('#divauto')
        .animate({ 'width' : 500},1500)
        .animate({ 'padding' : 20},1500)
        .animate({ 'font-size' : 50},1500)
        .animate({ 'border-width' : 10},1500)
        .animate({ 'opacity' : 1},1500)
    });


---47 Animate function----
---moving cube
$('#c1').click(function(){
        $('#myImg').animate({
            'left' : 500
        }).animate({
            'top' : 500
        }).animate({
            'left' : 150
        }).animate({
            'top' : 150
        })
    });
---Image slowly increases when mouse is out and decreases when it's not in it
$('#myImg').on({
        mouseover : function(){
            $(this).animate({
                'height' : 440,
                'width'  : 400
            },1000, 'linear', animationComplete);
        },
        mouseout : function(){
          $(this).animate({
                'height' : 100,
                'width'  : 100
            },3000);
        }
    })

    function animationComplete(){
        alert('Animation is complete.')
    }



syntax -> .animate({'font-size' : '50'},2000)
---slowly gets bigger---
$('#c1').click(function(){

        $('#divauto').animate({
            'font-size' : 50
        },2000);

       })

--------46 Slideshow with thumbnails MOOOVING IMAGES---
var imagesUrls = new Array();
       var intervalId;
       var btnStart = $('#c1');
       var btnStop = $('#c2');

       $('#cont2 img').each(function(){
        imagesUrls.push($(this).attr('src'));
       });

       function setImg(){

        var mainImgElement = $('#mainImg');
        var currentImageUrl = mainImgElement.attr('src');
        var currentImageIndex = $.inArray(currentImageUrl,imagesUrls);
        if(currentImageIndex == (imagesUrls.length - 1))
        {
            currentImageIndex = -1;
        }
        mainImgElement.attr('src', imagesUrls[currentImageIndex+1]);
       }

       btnStart.click(function(){
            intervalId = setInterval(setImg,1500);
            $(this).attr('disabled','disabled');
            btnStop.removeAttr('disabled');
       })
       btnStop.click(function(){
            clearInterval(intervalId);
            $(this).attr('disabled','disabled');
            btnStart.removeAttr('disabled');
            })


--------45 Optimize Image galery JQuery for performance(change width,
e)
---Added HTML
Select effect : <select id="imgEffect">
  <option value="Fade">Fade</option>
  <option value="Slide">Slide</option>
</select>
Time in seconds : <select id="imgDuration">
  <option value="0.5">0.5</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  </select>
<input type="button" id="c1" value="Enlarge">
<input type="button" id="c2" value="Shrink">
<br/>
<br/>

----jQyery
$('#cont2').on({
        mouseover: function(){
            $(this).css({
                'cursor' : 'pointer',
                'border-color' : 'red'
            });
        },
        mouseout: function(){
            $(this).css({
                'cursor' : 'default',
                'border-color' : 'grey'
            });
        },
        click: function(){
            var imgSrc = $(this).attr('src');
            var effect = $('#imgEffect').val();
            var duration = $('#imgDuration').val() * 1000;
            mImg = $('#mainImg');
            if( effect == 'Fade'){
            mImg.fadeOut(duration, function(){
              $(this).attr('src', imgSrc);
            }).fadeIn(duration);
            }
            else {
                mImg.slideUp(duration, function(){
              $(this).attr('src', imgSrc);
            }).slideDown(duration);
            }
        }
   }, 'img');

       var mainImgElement = $('#mainImg');
       var height = parseInt(mainImgElement.attr('height'));
       var width = parseInt(mainImgElement.attr('width'));

       $('#c1').click(function(){
        height += 100;
        width += 100;
        mainImgElement.animate({
            'height': height,
            'width' : width
        })
       })

       $('#c2').click(function(){
        height -= 100;
        width -= 100;
        mainImgElement.animate({
            'height': height,
            'width' : width
        })
       })






-----------44 Image galery jQuery(Homework create it yourself----------

----jQuery
$('#cont2 img').on({
        mouseover: function(){
            $(this).css({
                'cursor' : 'pointer',
                'border-color' : 'red'
            });
        },
        mouseout: function(){
            $(this).css({
                'cursor' : 'default',
                'border-color' : 'grey'
            });
        },
        click: function(){
            var imgSrc = $(this).attr('src');
            $('#mainImg').attr('src', imgSrc);
        }

       });

---html+css
<%= image_tag('11.png', id: 'mainImg', class: 'bigImg') %>
<br/>
<div id="cont2">
  <%= image_tag('1.jpg', class: 'imgStyle') %>
  <%= image_tag('11.png', class: 'imgStyle') %>
  <%= image_tag('12.jpg', class: 'imgStyle') %>
  <%= image_tag('13.jpg', class: 'imgStyle') %>
  <%= image_tag('14.jpg', class: 'imgStyle') %>
</div>
.bigImg {
    height: 500px;
    width: 540px;
    border: 2px solid grey;
}
.imgStyle{
    height: 100px;
    width: 100px;
    border: 3px solid grey;
}
.cont2 {
    border: 1px
}

------------43 jQuery scroll event--------
<div id="resPrice" style="height: 200px; width: 200px; border: 1px solid black; overflow: scroll;">
css -> display: none; -invisible; -> display: inline; -> visible
*overflow: scroll; <- is used to put your text into a box with scroll bar.
-------------------Detection if you scroll up or down-----
var lastScrollTop = 0;
        $('#resPrice').scroll(function(){
            var currentScrollPosition = $(this).scrollTop();
            if(currentScrollPosition > lastScrollTop){
                $('#divauto').text("You scroll down");
            }
            else{
                $('#divauto').text("You scroll up");
            }
            lastScrollTop = currentScrollPosition;
        })
-------
$('#resPrice').scroll(function(){
            $('#scrollev').css('display','inline').fadeOut(500);
        })
-----How many times scroll event is handled:--
var count =0;
        $('#resPrice').scroll(function(){
            $('#scrollev').css('display','inline').fadeOut(1500);
            $('#divauto').text(count +=1);
        })


------------- 42Prevent browser default actions(right mouth click )----------


----Preventing hyperLink default
$('#myHlink').on('click', function(e){
        e.preventDefault();
        $('#divauto').append('Hyperlink is desibled');

    });


----Preventing right click default
 $(this).on('contextmenu', function(e){
        e.preventDefault();
        $('#divauto').append('Right click on this document is disabled.');

    });

------------41 jQuery how to check if event is already bound(prevent from using once again)
 $('#c1').on('click',function () {
        alert('Hello noober');
    })
    $('#c1').on('click',function () {
        alert('Hello noober');
    })
    $('#c1').on('click',function () {
        alert('Hello noober');
    })

    $('#c1').off('click').on('click', function () {
        alert('Hello noober');
    });



-------------40 Execute event only once----------
 $('input[type="button"]').one({
        mouseover: function () {
            $(this).css('background-color','green');
        },
        mouseout: function () {
            $(this).css('background-color','grey');
        },
        click: function () {
            alert('Button is clocked');
        }

    })


-------------39 .live() function(shorter, better choice for delegation -----
deprecated from jQuery 1.7 and higher,

----------38 jQuery event delegation------
>> attach a single event listener to a parent element.
jQuery 1.7 or higher version, prefer to use (.off method insted of undelegate).


----------37 Add event handler to dynamically created element----------
---Better apperence(memory saved, fadeOut through <ul>---
$('ul').on('click','li',function () {
        $(this).fadeOut(500);
    })
    $('#c1').on('click',function () {
       $('#ulList').append('<li>New List Item</li>');

    });

---fadeOut new elements---
$('li').click(function () {
        $(this).fadeOut(500);
    })
    $('#c1').on('click',function () {
        var newItem = $('<li> New item.</li>').click(function () {
            $(this).fadeOut(500);
        });
        $('#ulList').append(newItem);

    });

----simple add and fade elements(dynamically added will not fadeOut----
 $('li').click(function () {
        $(this).fadeOut(500);
    })
    $('#c1').on('click',function () {
        var newItem = '<li> New item.</li>';
    $('#ulList').append('<li> new list item </li>')

    });


--------------36 Passing data into event handler(functions, JSON)-----
 $('#c1').on('click', {
        firstname: 'Alex',
        lastname: 'Malovichko'
    },sayHello);


    function sayHello(event) {
        alert('Hello superPro: ' + event.data.firstname + event.data.lastname);
    };
---simple Function
$('#c1').on('click',sayHello);
    function sayHello() {
        alert('Hello guys!');
    }

-------------- 35 -Dynamic buttons effects----------------
--- 'on' with JSON object-----
$('#c1').on({
     click: function (event) {
         $('#divauto').html('Button is clicked at X = ' + event.pageX + ',Y= ' + event.pageY +
             ',event: ' + event.type);
     },
     mouseover: function () {
         $('#c1').addClass('ButtonCls');
     },
     mouseout: function () {
        $('#c1').removeClass('ButtonCls');
     }
    });
    $('#c2').click(function () {
        $('#c1').off('mouseover');
    });

---- 'on' method------
 $('#c1').on('click mouseover mouseout',function (event) {
     if( event.type == 'click') {
         $('#divauto').html('Button is clicked at X = ' + event.pageX + ',Y= ' + event.pageY +
             ',event: ' + event.type);
     }
     else if( event.type == 'mouseover'){
         $('#c1').addClass('ButtonCls');
     }
     else if( event.type == 'mouseout'){
         $('#c1').removeClass('ButtonCls');
         $('#divauto').html('');
     }
 })
    $('#c2').click(function () {
        $('#c1').off('mouseover');
    });


----'bind' method-----------
$('#c1').bind('click mouseover mouseout',function (event) {
     if( event.type == 'click') {
         $('#divauto').html('Button is clicked at X = ' + event.pageX + ',Y= ' + event.pageY +
             ',event: ' + event.type);
     }
     else if( event.type == 'mouseover'){
         $('#c1').addClass('ButtonCls');
     }
     else if( event.type == 'mouseout'){
         $('#c1').removeClass('ButtonCls');
         $('#divauto').html('');
     }
 })

 -----unbinds---------
 $('#c2').click(function () {
        $('#c1').unbind();
    });





------------WhichButton is clicked-------
$('#c1').mouseup(function (event) {
     var whichButton = '';
     switch (event.which) {
         case 1: whichButton = "Left Button clicked"; break;
         case 2: whichButton = "Middle Button clicked"; break;
         case 3: whichButton = "Right Button clicked"; break;
         default: whichButton = "Invalid Button clicked"; break;
     }
     $('#divauto').html(whichButton);
 })



----------EVent object----------
 $('#c1').click(function (event) {
    getData(event);
 }).mouseover(function (event) {
     getData(event);
 }).mouseout(function (event) {
     getData(event);
 });


    function getData(event) {
        var eventData = 'Event type: ' + event.type + '<br/>' +
            'Event x: ' + event.pageX + '<br/>' +
            'Event y: ' + event.pageY + '<br/>' +
            'Event target element: ' + event.target.type + '<br/>' +
            'Event element tag name: ' + event.target.tagName;
        $('#divauto').html(eventData);
    }
----
//displays mouse position when cliced.
$('#c1').click(function (event) {
     var eventData = 'Event type: ' + event.type + '<br/>' +
         'Event x: ' + event.pageX + '<br/>' +
         'Event y: ' + event.pageY + '<br/>' +
         'Event target element: ' + event.target.type + '<br/>' +
         'Event element tag name: ' + event.target.tagName;
        $('#divauto').html(eventData);
 })




-----------------Mouse events-------------
---Hover function  <- especially used for mousein and mouseout, receive 2 functions
$('img[class="imag"]').hover(function () {

     $('#'+ getDiv($(this))).fadeIn(500);
 }, function () {

     $('#'+ getDiv($(this))).fadeOut(500);
 });

    function getDiv (imgIcon) {
        var imagId = $(imgIcon).attr('id');
        return imagId.replace('img','div');
           }




-------
$('img[class="imag"]').mouseover(function () {

     $('#'+ getDiv($(this))).fadeIn(500);
 }).mouseout(function () {

     $('#'+ getDiv($(this))).fadeOut(500);
 })

    function getDiv (imgIcon) {
        var imagId = $(imgIcon).attr('id');
        return imagId.replace('img','div');
    }


----
$(document).ready(function () {
 $('img[class="imag"]').mouseover(function () {
     var imagId = $(this).attr('id');
     var divId = imagId.replace('img','div');
     $('#'+ divId).fadeIn(500);
 }).mouseout(function () {
     var imagId = $(this).attr('id');
     var divId = imagId.replace('img','div');
     $('#'+ divId).fadeOut(500);

 })

})

----
$(document).ready(function () {
 $('#imgFirst').mouseover(function () {
     $('#divFirst').fadeIn(500);
 }).mouseout(function () {
     $('#divFirst').fadeOut(500);
 })

})

----------------Change events---------------
------input texarea/textfield change events-----
Use clssName to choose all needed inputs/textAreaas/RadioButtons
$(document).ready(function () {
    var result = '';
    $('.inputReq').change(function () {
        if(result == '')
        {
            result = $(this).val();
        }
        else
        {
            result+= ', ' + $(this).val();
        }
        $('#divauto').html(result);
    })
})
----
$('#ddCelect').change(function () {
        var selectedValue = $(this).val();
        if(selectedValue == 'select')
            selectedValue = 'Please choose value';

        $('#divauto').html(selectedValue);
    })



---------defferencer between each and map methods-----------
 var intArray = [1,2,3,4,5];

   function functionA(index, element) {
       return element *5;
   }

   function functionB (element, index) {
       return element *5;
   }
   var result1 = $.each(intArray,functionA);
   var result2 = $.map(intArray,functionB);

   $('#divauto').html(result1);
   $('#resPrice').html(result2);








-------------map------

$(document).ready(function () {

    $('li').each(function (index, element) {
        return $(element).text();
    }).get().join('|');
})


// each to array
var result = [];

    $('li').each(function (index, element) {
        result.push($(element).text());
    })

    $('#divauto').html(result);

})


--------------each and $.each functions differences----------
JsObject




Array ----------
.each - for dom elements.
// $.each for arrays and JS objects;
$(document).ready(function () {
    var result = '';
    var intArray = [100,200,300,400];
    $.each(intArray, function (index, element) {
        result+= 'Index= ' + index + ', Value= ' + element + '<br/>';
    })

    $('#divauto').html(result);

})







-------------------JSON (parse method) - JSON to string and back------
 var jsonString = '[{"firstname":"Noober","lastname":"volod","salary":1500},{"firstname":"Pudge","lastname":"volod","salary":1200}]'
    var employeesJSON = JSON.parse(jsonString);
    var result = '';
    $.each(employeesJSON, function (i,item) {
        result += 'First Name = ' + item.firstname + "<br/>"
        result += 'Last Name = ' + item.lastname + "<br/>"
    });
    $('#divauto').html(result);


----------------JSON nested objects-----------
var emploeyy = {

        "noob" : {
        "firstname"
    :
        "Noober",
            "lastname"
    :
        "volod",
            "salary"
    :
        1500
    },
    "snoob" : {
        "firstname"
    :
        "Pudge",
            "lastname"
    :
        "volod",
            "salary"
    :
        1200
    }
};

    alert(emploeyy.noob.firstname);





---------------JSON array---------

var emploeyy = [{
        "firstname" : "Noober",
        "lastname" : "volod",
        "salary" : 1500
    }, {
        "firstname" : "Pudge",
        "lastname" : "volod",
        "salary" : 1200
        }
    ]
    alert(emploeyy[0].firstname);
    alert(emploeyy[1].salary);






-----------selection Multipart----------
$('#sList').change(function () {
        var selectedList = $('#sList option:selected')
            if (selectedList.length > 0) {
            var resultString ='';
            selectedList.each( function () {

                resultString+= "Selected: val - " + $(this).val() + " text - " + $(this).text() + "<br/>";

            })
                $('#resPrice').html(resultString);
            }
    })
    <select id="sList" multiple="multiple">
  <option value="tr">Toronto</option>
  <option value="ha">Haifa</option>
  <option value="is">Israel</option>
  <option value="ki">Kiev</option>
  <option value="ms">Moscow</option>
</select>




-----------checkbox text-----------


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
                resultString+=$(this).val() + "--" + $('label[for="cb-'+ $(this).val()+ '"]').text() + "<br/>";

            })
            $('#div'+names).html(resultString).css('background-color','azure');
        } else {
            $('#div'+names).html("");
        }
    }


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
