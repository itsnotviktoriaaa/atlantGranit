$(document).ready(function () {

    (function () {

        let burger = $('.burger');
        let burgerMenu = $('.burger-menu');
        let burgerMenuTextCancel = $('.burger-menu-text-cancel');

        burger.on('click', function () {
            burgerMenu.removeClass('closeBurgerMenu');
            burgerMenu.addClass('openBurgerMenu');
        });

        burgerMenuTextCancel.on('click', function () {
            burgerMenu.removeClass('openBurgerMenu');
            burgerMenu.addClass('closeBurgerMenu');
        });

        let burgerMenuItemServices = $('.burger-menu-item-services');

        burgerMenuItemServices.on('click', function() {
            $('#product-services')[0].scrollIntoView({behavior: "smooth"});
            burgerMenu.removeClass('openBurgerMenu');
        });

        let allProductsServicesLi = $('.all-products-services-li');

        allProductsServicesLi.on('click', function() {
            $('#product-services')[0].scrollIntoView({behavior: "smooth"});
        });

        let footerItemCheap = $('.footer-item-cheap');
        footerItemCheap.on('click', function() {
            $('#product-cheap')[0].scrollIntoView({behavior: "smooth"});
        });

        let footerItemSingle = $('.footer-item-single');
        footerItemSingle.on('click', function() {
            $('#product-single')[0].scrollIntoView({behavior: "smooth"});
        });

        let footerItemCatalogLi = $('.footer-item-catalog-li');
        footerItemCatalogLi.on('click', function() {
            $('.header-wrapper')[0].scrollIntoView({behavior: "smooth"});
        });

        let takeInfoFromUserWrapper = $('.takeInfoFromUser-wrapper');
        let takeInfoFromUserImg = $('.takeInfoFromUser-img');

        takeInfoFromUserImg.on('click', () => {
            takeInfoFromUserWrapper.toggleClass('takeInfoFromUserWrapperOpen');
        });

        let btnKnowPrice = $('#btn-know-price');

        btnKnowPrice.on('click', () => {
            takeInfoFromUserWrapper.toggleClass('takeInfoFromUserWrapperOpen');
        });

        let btnCallAll = document.getElementsByClassName('btn-call');

        for (let i = 0; i < btnCallAll.length; i++) {
            btnCallAll[i].onclick =  function() {
                takeInfoFromUserWrapper.toggleClass('takeInfoFromUserWrapperOpen');
            }
        }

        let forCatalogPop = $('.forCatalogPop');
        let popCommon = $('.pop-common');

        forCatalogPop.on('click', function (event) {
            event.stopPropagation();
            popCommon.toggleClass('popOpen');
        });

        document.addEventListener('click', function() {
            popCommon.removeClass('popOpen');
        });

        let catalogPopItemCheap = $('.catalog-pop-item-cheap');

        catalogPopItemCheap.on('click', function() {
            $('#product-cheap')[0].scrollIntoView({behavior: "smooth"});
        });

        let catalogPopItemSingle = $('.catalog-pop-item-single');

        catalogPopItemSingle.on('click', function() {
            $('#product-single')[0].scrollIntoView({behavior: "smooth"});
        });

        let catalogPopItemPars = $('.catalog-pop-item-pars');

        catalogPopItemPars.on('click', function() {
            $('#product-pars')[0].scrollIntoView({behavior: "smooth"});
        });

        let catalogPopItemKrest = $('.catalog-pop-item-krest');

        catalogPopItemKrest.on('click', function() {
            $('#product-krest')[0].scrollIntoView({behavior: "smooth"});
        });

        let catalogPopItemExclusive = $('.catalog-pop-item-exclusive');

        catalogPopItemExclusive.on('click', function() {
            $('#product-exclusive')[0].scrollIntoView({behavior: "smooth"});
        });



        let cheapMonument1btn = $('.cheap-monument-btn1');
        let cheapMonument1block = $('.cheap-monument1');
        let cheapMonumentCancel = $('.info-product-cancel');

        for (let i = 0; i < cheapMonument1btn.length; i++) {
            cheapMonument1btn.eq(i).click(function() {
                cheapMonument1block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            cheapMonument1block.css('display', 'none');
        });


        let singleMonument1btn = $('.single-monument-btn1');
        let singleMonument1block = $('.single-monument1');

        for (let i = 0; i < singleMonument1btn.length; i++) {
            singleMonument1btn.eq(i).click(function() {
                singleMonument1block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            singleMonument1block.css('display', 'none');
        });


        let singleMonument2btn = $('.single-monument-btn2');
        let singleMonument2block = $('.single-monument2');

        for (let i = 0; i < singleMonument2btn.length; i++) {
            singleMonument2btn.eq(i).click(function() {
                singleMonument2block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            singleMonument2block.css('display', 'none');
        });


        let singleMonument3btn = $('.single-monument-btn3');
        let singleMonument3block = $('.single-monument3');

        for (let i = 0; i < singleMonument3btn.length; i++) {
            singleMonument3btn.eq(i).click(function() {
                singleMonument3block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            singleMonument3block.css('display', 'none');
        });

        let singleMonument4btn = $('.single-monument-btn4');
        let singleMonument4block = $('.single-monument4');

        for (let i = 0; i < singleMonument4btn.length; i++) {
            singleMonument4btn.eq(i).click(function() {
                singleMonument4block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            singleMonument4block.css('display', 'none');
        });


        let parsMonument1btn = $('.pars-monument-btn1');
        let parsMonument1block = $('.pars-monument1');

        for (let i = 0; i < parsMonument1btn.length; i++) {
            parsMonument1btn.eq(i).click(function() {
                parsMonument1block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            parsMonument1block.css('display', 'none');
        });

        let parsMonument2btn = $('.pars-monument-btn2');
        let parsMonument2block = $('.pars-monument2');

        for (let i = 0; i < parsMonument2btn.length; i++) {
            parsMonument2btn.eq(i).click(function() {
                parsMonument2block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            parsMonument2block.css('display', 'none');
        });

        let parsMonument3btn = $('.pars-monument-btn3');
        let parsMonument3block = $('.pars-monument3');

        for (let i = 0; i < parsMonument3btn.length; i++) {
            parsMonument3btn.eq(i).click(function() {
                parsMonument3block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            parsMonument3block.css('display', 'none');
        });

        let krestMonument1btn = $('.krest-monument-btn1');
        let krestMonument1block = $('.krest-monument1');

        for (let i = 0; i < krestMonument1btn.length; i++) {
            krestMonument1btn.eq(i).click(function() {
                krestMonument1block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            krestMonument1block.css('display', 'none');
        });

        let krestMonument2btn = $('.krest-monument-btn2');
        let krestMonument2block = $('.krest-monument2');

        for (let i = 0; i < krestMonument2btn.length; i++) {
            krestMonument2btn.eq(i).click(function() {
                krestMonument2block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            krestMonument2block.css('display', 'none');
        });

        let exclusiveMonument1btn = $('.exclusive-monument-btn1');
        let exclusiveMonument1block = $('.exclusive-monument1');

        for (let i = 0; i < exclusiveMonument1btn.length; i++) {
            exclusiveMonument1btn.eq(i).click(function() {
                exclusiveMonument1block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            exclusiveMonument1block.css('display', 'none');
        });

        let exclusiveMonument2btn = $('.exclusive-monument-btn2');
        let exclusiveMonument2block = $('.exclusive-monument2');

        for (let i = 0; i < exclusiveMonument2btn.length; i++) {
            exclusiveMonument2btn.eq(i).click(function() {
                exclusiveMonument2block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            exclusiveMonument2block.css('display', 'none');
        });

        let ogradaGranit1btn = $('.ograda-granit-btn1');
        let ogradaGranit1block = $('.ograda-granit1');

        for (let i = 0; i < ogradaGranit1btn.length; i++) {
            ogradaGranit1btn.eq(i).click(function() {
                ogradaGranit1block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            ogradaGranit1block.css('display', 'none');
        });

        let ogradaGranit2btn = $('.ograda-granit-btn2');
        let ogradaGranit2block = $('.ograda-granit2');

        for (let i = 0; i < ogradaGranit2btn.length; i++) {
            ogradaGranit2btn.eq(i).click(function() {
                ogradaGranit2block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            ogradaGranit2block.css('display', 'none');
        });

        let ogradaGranit3btn = $('.ograda-granit-btn3');
        let ogradaGranit3block = $('.ograda-granit3');

        for (let i = 0; i < ogradaGranit3btn.length; i++) {
            ogradaGranit3btn.eq(i).click(function() {
                ogradaGranit3block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            ogradaGranit3block.css('display', 'none');
        });

        let ogradaGranit4btn = $('.ograda-granit-btn4');
        let ogradaGranit4block = $('.ograda-granit4');

        for (let i = 0; i < ogradaGranit4btn.length; i++) {
            ogradaGranit4btn.eq(i).click(function() {
                ogradaGranit4block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            ogradaGranit4block.css('display', 'none');
        });

        let ogradaKovan1btn = $('.ograda-kovan-btn1');
        let ogradaKovan1block = $('.ograda-kovan1');

        for (let i = 0; i < ogradaKovan1btn.length; i++) {
            ogradaKovan1btn.eq(i).click(function() {
                ogradaKovan1block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            ogradaKovan1block.css('display', 'none');
        });

        let skameyka1btn = $('.skameyka-btn1');
        let skameyka1block = $('.skameyka1');

        for (let i = 0; i < skameyka1btn.length; i++) {
            skameyka1btn.eq(i).click(function() {
                skameyka1block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            skameyka1block.css('display', 'none');
        });

        let skameyka2btn = $('.skameyka-btn2');
        let skameyka2block = $('.skameyka2');

        for (let i = 0; i < skameyka2btn.length; i++) {
            skameyka2btn.eq(i).click(function() {
                skameyka2block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            skameyka2block.css('display', 'none');
        });

        let skameyka3btn = $('.skameyka-btn3');
        let skameyka3block = $('.skameyka3');

        for (let i = 0; i < skameyka3btn.length; i++) {
            skameyka3btn.eq(i).click(function() {
                skameyka3block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            skameyka3block.css('display', 'none');
        });

        let lampada1btn = $('.lampada-btn1');
        let lampada1block = $('.lampada1');

        for (let i = 0; i < lampada1btn.length; i++) {
            lampada1btn.eq(i).click(function() {
                lampada1block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            lampada1block.css('display', 'none');
        });

        let lampada2btn = $('.lampada-btn2');
        let lampada2block = $('.lampada2');

        for (let i = 0; i < lampada2btn.length; i++) {
            lampada2btn.eq(i).click(function() {
                lampada2block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            lampada2block.css('display', 'none');
        });

        let vaza1btn = $('.vaza-btn1');
        let vaza1block = $('.vaza1');

        for (let i = 0; i < vaza1btn.length; i++) {
            vaza1btn.eq(i).click(function() {
                vaza1block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            vaza1block.css('display', 'none');
        });

        let vaza2btn = $('.vaza-btn2');
        let vaza2block = $('.vaza2');

        for (let i = 0; i < vaza2btn.length; i++) {
            vaza2btn.eq(i).click(function() {
                vaza2block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            vaza2block.css('display', 'none');
        });

        let vaza3btn = $('.vaza-btn3');
        let vaza3block = $('.vaza3');

        for (let i = 0; i < vaza3btn.length; i++) {
            vaza3btn.eq(i).click(function() {
                vaza3block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            vaza3block.css('display', 'none');
        });

        let vaza4btn = $('.vaza-btn4');
        let vaza4block = $('.vaza4');

        for (let i = 0; i < vaza4btn.length; i++) {
            vaza4btn.eq(i).click(function() {
                vaza4block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            vaza4block.css('display', 'none');
        });

        let ramka1btn = $('.ramka-btn1');
        let ramka1block = $('.ramka1');

        for (let i = 0; i < ramka1btn.length; i++) {
            ramka1btn.eq(i).click(function() {
                ramka1block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            ramka1block.css('display', 'none');
        });

        let ramka2btn = $('.ramka-btn2');
        let ramka2block = $('.ramka2');

        for (let i = 0; i < ramka2btn.length; i++) {
            ramka2btn.eq(i).click(function() {
                ramka2block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            ramka2block.css('display', 'none');
        });

        let btnFormMain1 = $('#form-input-main-btn1');
        let nameInputForm1 = $('#name1');
        let telInputForm1 = $('#tel1');
        let nameError1 = $('.nameError1');
        let telError1 = $('.telError1');
        let agreeCheck1 = document.getElementById('agree-check1');

        btnFormMain1.on('click', function () {
            nameError1.hide();
            telError1.hide();
            nameInputForm1.css('border', '1px solid #D0D0D0');
            telInputForm1.css('border', '1px solid #D0D0D0');
            validation1();
        });

        function validation1() {
            if (!nameInputForm1.val().match(/[a-zA-Zа-яёА-ЯЁ]+\s*/g)) {
                nameInputForm1.css('border', '1px solid red');
                nameError1.show();
            } else if (!telInputForm1.val().match(/\d+\s*/g)) {
                telInputForm1.css('border', '1px solid red');
                telError1.show();
            } else if (!agreeCheck1.checked) {
                alert('Вы не приняли соглашение по обработке данных');
            } else {
                alert('Информация заполнена верно и в этот момент отправляется на сервер');
            }
        }

    })();

});