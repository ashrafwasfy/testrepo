$(document).ready(function () {


    $('body').css('paddingTop', $('.navbar').innerHeight());

    $('.navbar li a').click(function (e) {
        e.preventDefault();
        $('html, body').animate({

            scrollTop: $("#" + $(this).data('scroll')).offset().top + 1
        }, 2000);

    });
    // Add Active Class On Navbar Link abd Remove from Siblings
    $('.navbar li').click(function () {

        // $(this).addClass('active').siblings().removeClass('active')

        //$(this).addClass('active').parent().siblings().find('a').removeClass('active')

        // $('navbar li a').removeClass('active')
        // $(this).addClass('active')
    });


    $('.navbar li').click(function () {

        $(this).addClass('active').siblings().removeClass('active')



        // $('navbar a').removeClass('active')
        // $(this).addClass('active')
    });



    $(window).scroll(function () {
        // Scroll To Top
        var scrollToTop = $('.scroll-to-top')
        if ($(window).scrollTop() > 1000) {
            if (scrollToTop.is(':hidden')) {
                scrollToTop.fadeIn(400)
            }
        } else {
            scrollToTop.fadeOut(400)
        }
        // End Scroll To Top

        //Sync NavBar Links With Sections
        $('.block').each(function () {
            if ($(window).scrollTop() > $(this).offset().top) {
                var blockID = $(this).attr('id');
                $('.navbar a').removeClass('active');
                $('ul li a[data-scroll="' + blockID + '"]').addClass('active');
            }
        });
    });


    // Click On Scroll To Top To Go Up
    $('.scroll-to-top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    })

    // PopoUp
    $('.show-popup').click(function () {
        $($(this).data('popup')).fadeIn()
    })


    $('.popup').click(function () {
        $(this).fadeOut(1000);
    })

    $('.popup .inner').click(function (e) {
        e.stopPropagation()
    })

    $('.popup .close').click(function (e) {
        e.preventDefault()
        $(this).parentsUntil('.popup').parent().fadeOut(1000);
    })

    $(document).keydown(function (e) {

        if (e.keyCode == 27) { // Hide Popup With Escape Key
            $('.popup').fadeOut(1000);
        }

    })


    // Buttons With Effects
    $('.from-left, .border-left').hover(function () {
        $(this).find('span').eq(0).animate({
            width: '100%'
        }, 400)

    }, function () {
        $(this).find('span').eq(0).animate({
            width: 0
        }, 400)
    })

    $('.from-top, .border-top').hover(function () {
        $(this).find('span').eq(0).animate({
            height: '100%'
        }, 400)

    }, function () {
        $(this).find('span').eq(0).animate({
            height: 0
        }, 400)
    })

    // $('.border-top').hover(function() {
    //     $(this).find('span').eq(0).animate({
    //         height: '100%'
    //     },400)

    // }, function() {
    //     $(this).find('span').eq(0).animate({
    //         height: 0
    //     },400)
    // })

    // $('.border-left').hover(function() {
    //     $(this).find('span').eq(0).animate({
    //         width: '100%'
    //     },400)

    // }, function() {
    //     $(this).find('span').eq(0).animate({
    //         width: 0
    //     },400)
    // })

    // Bounce Button Effects Function
    function bounceElement(selector, times, distance, speed) {
        for (var i = 0; i < times; i++) {
            $(selector).animate({
                top: '-=' + distance

            }, speed).animate({
                top: '+=' + distance
            }, speed)
        }
    }



    $('.bounce-one').on('click', function () {
        bounceElement($(this), 2, 6, 400)
    })
    $('.bounce-two').on('click', function () {
        bounceElement($(this), 5, 10, 500)
    })
    $('.bounce-three').on('click', function () {
        bounceElement($(this), 10, 4, 200)
    })

    // End Bounce Button Effecs

    // Animated Progress
    $(".animated-progress span").each(function () {

        $(this).animate({
            width: $(this).attr('data-progress') + '%'
        }, 2000, function () {

            $(this).text($(this).attr('data-progress') + '%')
        })
    })


    // Fixed Menu
    $(".fixed-menu .icon-cog").on('click', function () {

        $(this).parent('.fixed-menu').toggleClass('is-visible')
        if ($(this).parent('.fixed-menu').hasClass('is-visible')) {
            $(this).parent('.fixed-menu').animate({
                left: 0
            }, 1000)
            $('body').animate({
                paddingLeft: '220px'
            }, 1000)
        } else {
            $(this).parent('.fixed-menu').animate({
                left: '-220px'
            }, 1000)
            $('body').animate({
                paddingLeft: 0
            }, 1000)
        }
    });

    // Change Colors
    $('.Change-colors li').on('click', function () {

        $('body').attr('data-default-color', $(this).data('color'))
    })


    // Thumbnail Gallery
    var numOfThumbnails = $('.thumbnails').children().length,
        marginBetweenThumbNails = '0.5',
        TotalMarginBetweenThumnails = (numOfThumbnails - 1) * marginBetweenThumbNails,
        thumbnailWidth = (100 - TotalMarginBetweenThumnails) / numOfThumbnails
    console.log(thumbnailWidth)

    $('.thumsnails img').css({
        'width': thumbnailWidth + '%',
        'margin-right': marginBetweenThumbNails + '%'

    })

    $('.thumbnails img').on('click', function () {

        $(this).addClass('selected').siblings().removeClass('selected')
        $('.master-img img').hide().attr('src', $(this).attr('src')).fadeIn(500)
    })

    // Thumbnail Gallery icon-chevron-right
    $('.master-img .icon-chevron-right').on('click', function () {
        if ($('.thumbnails .selected').is(':last-child')) {
            $('.thumbnails img').eq(0).click()
        } else {
            $('.thumbnails .selected').next().click()
        }

    })
    $('.master-img .icon-chevron-left').on('click', function () {
        if ($('.thumbnails .selected').is(':first-child')) {
            $('.thumbnails img:last').click()
        } else {
            $('.thumbnails .selected').prev().click()
        }
    })

    // Start Products (Toggle Products Descriptions)
    $('.products .product i, .items .item i').on('click', function () {
        $(this).toggleClass('icon-plus icon-minus').next('p').slideToggle()

        // $(this).next('p').slideToggle()
    })
    // End Products

    // Switch List & Grid View



    $('.view-options i').on('click', function () {

        $(this).addClass('active').siblings().removeClass('active')

        $('.items').removeClass('grid-view list-view').addClass($(this).data('class'))

    })
    // End Switch List & Grid View


    // Error Message Effect
    $('.error-message').each(function () {

        $(this).animate({
            right: 0


        }, 1000, function () {

            $(this).delay(3000).fadeOut(2000)
        })
    })
    // End Error Message Effect

    /*
    // Our Form
    // Practical Example
    */

    // Hide PlaceHolder on Foucus & Restore on Blur
    var placeAttr = ""
    $('[placeholder]').focus(function () {
        placeAttr = $(this).attr('placeholder');
        $(this).attr('placeholder', '')

    }).blur(function () {
        $(this).attr('placeholder', placeAttr)
    })

    // Show Message when Field Is Empty

    $("[required]").blur(function () {

        if ($(this).val() == '') {
            $(this).next('span').fadeIn(500).delay(2000).fadeOut(2000)
        }
    })

    // Add Astrisk to All Required Fields
    $('<span class="astrisk">*</span>').insertBefore(':input[required]');

    // Customize the Astrisk With jQuery
    $('.astrisk').parent('div').css('position', 'relative')

    $('.astrisk').each(function () {
        $(this).css({
            'position': 'absolute',
            'top': 13,
            'left': $(this).parent('div').find(':input').innerWidth() - 20,
            'color': '#F00',
            'font-weight': 'bold'
        })
    })
    console.log($(this).parent('div').find(':input').innerWidth())

    // Customize The Input Field
    $('.our-form input[type="file"]').wrap('<div class="custom-file"></div>')
    $('.custom-file').prepend('<span>Upload Your File</span>')
    $('.custom-file').append('<i class="icon-upload-alt icon-1x skin-color"></i>')

    $('.our-form input[type="file"]').change(function () {
        $(this).prev('span').text($(this).val())
        console.log($(this).val())
    })

    //Detect Unicode of Keyboard Keys
    $('.detect-unicode').on('keyup', function (e) {
        var keyBoardKey = e.keyCode || e.which
        $('.unicode').text('The UniCode For The Key You Pressed Is: ' + keyBoardKey)
    })


    // Change Input Direction Depend on The Language

    $('.auto-direction').on('keyup', function (e) {
        if ($(this).val().charCodeAt(0) < 200) { // It Means that is English Language 
            $(this).css('direction', 'ltr')
        } else {
            $(this).css('direction', 'rtl')
        }
    })
    // var english = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    //     text ='',
    //     arabic = 'ابتثجحخدذرزسشصضطظعغفقكلمنهوى',
    //     arabictext =''

    // for (var i= 0; i< arabic.length; i++) {
    //     arabictext += arabic.charCodeAt(i) + '<br>'
    // }
    // $('.arabic').html(arabictext)



    // for (var i= 0; i< english.length; i++) {
    //     text += english.charCodeAt(i) + '<br>'
    // }
    // $('.english').html(text)

    // Convert Input Value To Tags
    $('.add-tags').on('keyup', function (e) {
        var keyBoardKey = e.keyCode || e.which
        if (keyBoardKey === 188) { // You Pressed Comma Now
            var thisVal = $(this).val().slice(0, -1) // All String till Comma
            $('.tags').append('<span class="tag-span"><i class="icon-remove-sign"></i>' + thisVal + '</span>')
            $(this).val('')
        }
    })
    // Rmove Tag On Click
    $('.tags').on('click', '.tag-span i', function () {

        $(this).parent('.tag-span').fadeOut(900)
    })

    // Trim Paragraph Text characters
    function trimText(selector, maxLength) {
        $(selector).each(function () {
            if ($(this).text().length > maxLength) {
                var trimmedText = $(this).text().substr(0, maxLength) + " ..."
                $(this).text(trimmedText)
            }
        })
    }

    trimText('.trimmed-texts .p-one', 100)
    trimText('.trimmed-texts .p-two', 200)
    trimText('.trimmed-texts .p-three', 300)

    // Adjust Elements Height To Be The Same
    var maxHeight = 0

    // Loop On elements You Want To Adjust Height
    $('.same-height div').each(function () {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height()
        }
    })
    $('.same-height div').height(maxHeight)

    // Shuffle Cards
    var zIndexValue = 0
    $('.cards .card').on('click', function () {
        $(this).animate({
            left: '20%',
            marginTop: 30

        }, 400, function () {
            zIndexValue--
            $(this).css('z-index', zIndexValue)

        }).animate({
            left: $(this).css('left'),
            marginTop: 0

        }, 400)

    })

    // Create Blink Warning
    blinkWarning();

    function blinkWarning() {
        $('.blink-warning').fadeOut(1000, function () {
            $(this).fadeIn(1000)
            blinkWarning()
        })
    }


    // ToDo List 
    var newTask = $('.task-input')

    $('.add-task').on('submit', function (e) {
        e.preventDefault()
        if (newTask.val() != '') {
            $('<li>' + newTask.val() + '</li>').appendTo('.tasks')
            newTask.val('')
        }
    })

    $('.tasks').on('click', 'li', function () {
        $(this).css('text-decoration', 'line-through').delay(200).fadeOut(400, function () {
            $(this).remove()
        })
    })

    //Type Write Effects
    var theText = $('.typer').data('text'),
        theTextLength = theText.length,
        n = 0,
        theTyper = setInterval(function () {
            $('.typer').each(function () {
                $(this).html($(this).html() + theText[n])
            })
            n += 1
            if (n >= theTextLength) {
                clearInterval(theTyper)
            }
        }, 70)

    // Calculate Table Cell Values
    var theSummary = 0
    $('.price').each(function () {
        // console.log(typeof($(this).val()))
        console.log($(this).text())
        //     // if (typeof myVar === 'string'
        //  if (typeof (parseInt($(this).text()) != 'string')) {
        theSummary += parseInt($(this).text())
        // }
    })
    $('.the-total').text(theSummary)

    // Dynamic Tabs
    $('.tabs-list li').on('click', function () {

        $(this).addClass('active').siblings().removeClass('active')
        $('.content-list > div').hide()
        $($(this).data('content')).fadeIn()
        // console.log($(this).data('content'))
    })

    // Switch Tabs View
    $('.switch-tabs').on('click', function () {
        $(this).next('.dynamic-tabs').toggleClass('left-tabs')
    })


    // Start Email Suggest Box
    var emailProviders = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'mail.ru'],
        finalString = ''

    $('.email-suggest').on('keyup', function () {
        finalString = '' // Reset Variable

        if (!$(this).next().is('.suggest-box')) {
            $('<ul class="suggest-box"></ul>').insertAfter($(this))
        }

        for (var i = 0; i < emailProviders.length; i++) {
            finalString += '<li>' + $(this).val() + '@' + emailProviders[i] + '</li>'
        }
        $('.suggest-box').html(finalString);
    })

    $('body').on('click', '.suggest-box li', function() {
        $('.email-suggest').val($(this).text())
        $(this).parent().fadeOut(300).remove()
    })
    // End Email Suggest Box

    // Auto Change Content
    // Self Invoked Function بتشتغل بدون أى call
    // (function autoChange() {
    //     $('.ticker-list .active').each(function () {
    //         if (!$(this).is(':last-child')) {
    //             $(this).delay(1000).fadeOut(1000, function () {
    //                 $(this).removeClass('active').next().addClass('active').fadeIn()
    //                 autoChange()
    //             })
    //         } else {
    //             $(this).delay(1000).fadeOut(1000, function () {
    //                 $(this).removeClass('active')

    //                 $('.ticker-list li').eq(0).addClass('active').fadeIn()
    //                 autoChange()
    //             })
    //         }
    //     })
    // }())



});
