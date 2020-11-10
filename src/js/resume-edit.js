    var resumeUI = (function(window, jQuery) {
        if (!window.jQuery) {
            throw new Error("resumeUI requires jQuery")
        }

        var $ = window.jQuery;
        var _this = this;

        function autobiographyMagic() {
            $(".makeAutobiography").on("click", function() {
                var autobiography_magic = layer.open({
                    type: 1,
                    anim: 5,
                    skin: 'layer-magic',
                    area: ['90%', ''],
                    title: ['自傳魔法師'],
                    shadeClose: true,
                    closeBtn: 1,
                    content: '\
                <div class="magic-main">\
                    <div class="mask mg-bg-lt"></div>\
                    <div class="mask mg-bg-rb"></div>\
                    <div class="mask mg-bg-pop"></div>\
                    <div class="magic-logo align-center">\
                        <img src="img/logo-magic.svg" alt="magic-logo">\
                    </div>\
                    <div class="magic-content">\
                        <div class="magic-ctrl align-right">\
                            <p class="magic-bubble bubble--left">產生完自傳, 只會有一種選擇嗎?</p>\
                            <div class="magic-people center">\
                                <img src="img/guy-1.svg" alt="">\
                            </div>\
                            <p class="magic-bubble bubble--left">自傳的資料從哪裡來呢?</p>\
                            <div class="magic-people center">\
                                <img src="img/guy-3.svg" alt="">\
                            </div>\
                            <p class="magic-bubble bubble--left">產生出來的自傳 我可以再自己編輯嗎?</p>\
                            <div class="magic-people center">\
                                <img src="img/guy-5.svg" alt="">\
                            </div>\
                        </div>\
                        <div class="magic-ctrl align-left">\
                            <p class="magic-bubble bubble--right">會從目前填寫的履歷資料產生自傳唷！寫的越完整，自傳將越符合您的需求！</p>\
                            <div class="magic-people center">\
                                <img src="img/guy-2.svg" alt="">\
                            </div>\
                            <p class="magic-bubble bubble--right">會從目前填寫的履歷資料產生自傳唷！寫的越完整，自傳將越符合您的需求！</p>\
                            <div class="magic-people center">\
                                <img src="img/guy-4.svg" alt="">\
                            </div>\
                            <p class="magic-bubble bubble--right">當然可以！請務必再次自仔細檢查確保內容正確~</p>\
                            <div class="magic-people center">\
                                <img src="img/guy-6.svg" alt="">\
                            </div>\
                        </div>\
                    </div>\
                    <div class="magic-start align-center">\
                        <button type="submit" class="btn btn--cyan start-btn block text--16">開 始 產 生</button>\
                        <a href="#!" class="more">瞭解更多</a>\
                    </div>\
            </div>'
                });

                // 自傳魔法師 loading//
                $(".start-btn").on("click", function() {
                    layer.close(autobiography_magic); //關閉上一層
                    var star_button = layer.open({
                        type: 1,
                        anim: 5,
                        skin: 'layer-magic',
                        area: ['90%', ''],
                        title: ['自傳魔法師'],
                        shadeClose: true,
                        content: '\
                    <div class="magic-main">\
                        <div class="magic-logo center">\
                            <img src="img/logo-magic.svg" alt="magic-logo">\
                        </div>\
                        <div class="magic-img-peoples center pt-16">\
                            <img src="img/people.svg" alt="">\
                        </div>\
                        <p class="loading-text center">... 正在加入 個人資料 ...</p>\
                        <div class="loading"></div>\
                    </div>'
                    });
                });
            });
        }
        // 新增在校經歷
        function activitiesElm() {
            var el = [
                '<div class="resume-panel activities-panel">',
                '   <div class="resume-panel-title">',
                '       <span class="title">新增 1 筆在校經歷</span>',
                '       <a href="javascript:;" title="確定" class="btn btn--cyan btn--square">',
                '           <i class="icon-check" aria-hidden="true"></i>',
                '       </a>',
                '       <a href="javascript:;" title="刪除" class="btn btn--square btn--trash activities_del">',
                '           <i class="icon-icon-trash" aria-hidden="true"></i>',
                '       </a>',
                '   </div>',
                '   <div class="resume-panel-main activities-main">',
                '       <div class="form-group">',
                '           <label class="block text--14 mb-8">',
                '               <font class="text--danger">*</font>',
                '               <strong>社團名稱 / 班級幹部 / 學校名稱</strong>',
                '           </label>',
                '           <input type="text" name="" placeholder="請輸入社團名稱 / 班級幹部" value="" class="input--full">',
                '       </div>',
                '       <div class="form-group">',
                '           <label class="block text--14 mb-8">',
                '               <font class="text--danger">*</font>',
                '               <strong>職位 / 交換學生 / 遊學</strong>',
                '           </label>',
                '           <input type="text" name="" placeholder="請輸入職位" value="" class="input--full">',
                '        </div>',
                '        <div class="form-group">',
                '            <label class="block text--14 mb-8">',
                '                <font class="text--danger">*</font>',
                '                <strong>任職時間</strong>',
                '            </label>',
                '            <input type="text" name="" placeholder="" value="" class="input-small">',
                '            <font class="text--12 align-bottom mr-4 ml-4">年</font>',
                '            <input type="text" name="" placeholder="" value="" class="input-small">',
                '            <font class="text--12 align-bottom ml-4">個月</font>',
                '        </div>',
                '        <p class="text--12 text--grey">如您有作品集、照片、影音、文字等更多想分享的內容可上傳至「加分亮點」，讓您的履歷更豐富唷！</p>',
                '    </div>',
                '</div>'
            ].join('');
            return el;
        }


        function activitiesClick() {
            console.log('');
            $(".activities_add").click(function(event) {
                var $activities = $(this).parents(".activities-content");
                $(this).before(activitiesElm());
            });
        }

        // 新增雙主修
        function twoMajorElm() {
            var el = [
                '<div class="form-group two_major">',
                '   <label class="block text--14 mb-4">',
                '       <font class="text--danger">*</font>',
                '       <strong>科系名稱</strong>',
                '   </label>',
                '   <input type="text" name="" id="majorDes2" placeholder="請輸入科系名稱" value="會計資訊系" class="input-large">',
                '</div>',
                '<div class="form-group two_major">',
                '   <label class="block text--14 mb-4">',
                '       <font class="text--danger">*</font>',
                '       <strong>科系類別</strong>',
                '   </label>',
                '   <input type="text" name="" id="majorCht2" placeholder="請輸入科系類別" value="會計學類" class="input-large">',
                '</div>',
            ].join('');
            return el;
        }

        function majorClick() {
            console.log('呼叫majorClick');
            // 新增雙主修
            $(".major_add").click(function(event) {
                var $major = $(this).parents(".major-edit-content");
                $(this).addClass('hidden');
                $major.find(".major_del").removeClass('hidden');
                $(this).parents("p").before(twoMajorElm());
            });

            // 移除雙主修科目
            $(".major_del").click(function(event) {
                var $major = $(this).parents(".major-edit-content");
                $(this).addClass('hidden');
                $major.find(".major_add").removeClass('hidden');
                $major.find(".two_major").remove();
            });
        }

        // 新增語言能力
        function languageElm() {
            var el = [
                '<div class="resume-panel resume_block-edit language-edit">',
                '   <div class="resume-panel-title">',
                '       <span class="title">新增語言能力</span>',
                '   </div>',
                '   <div class="resume-panel-main cf">',
                '       <div class="inline-block--middle">',
                '           <font class="text--14">請選擇語言：</font>',
                '           <select name="" class="mr-8">',
                '               <option value="">葡萄牙文</option>',
                '               <option value="">英文</option>',
                '           </select>',
                '       </div>',
                '       <div class="language-group">',
                '           <div class="table-cell">',
                '               <div class="language-title">聽</div>',
                '           </div>',
                '           <div class="table-cell pl-24 pr-48" style="width: 100%">',
                '               <div class="slider-bar-radio language">',
                '                   <input type="radio" name="listening" id="listening1">',
                '                   <label for="listening1">不懂</label>',
                '                   <input type="radio" name="listening" id="listening2">',
                '                   <label for="listening2">略懂</label>',
                '                   <input type="radio" name="listening" id="listening3">',
                '                   <label for="listening3">中等</label>',
                '                   <input type="radio" name="listening" id="listening4">',
                '                   <label for="listening4">精通</label>',
                '               </div>',
                '           </div>',
                '       </div>',
                '       <div class="language-group">',
                '           <div class="table-cell">',
                '               <div class="language-title">說</div>',
                '           </div>',
                '           <div class="table-cell pl-24 pr-48" style="width: 100%">',
                '               <div class="slider-bar-radio language">',
                '                   <input type="radio" name="speaking" id="speaking1">',
                '                   <label for="speaking1">不懂</label>',
                '                   <input type="radio" name="speaking" id="speaking2">',
                '                   <label for="speaking2">略懂</label>',
                '                   <input type="radio" name="speaking" id="speaking3">',
                '                   <label for="speaking3">中等</label>',
                '                   <input type="radio" name="speaking" id="speaking4">',
                '                   <label for="speaking4">精通</label>',
                '               </div>',
                '           </div>',
                '       </div>',
                '       <div class="language-group">',
                '           <div class="table-cell">',
                '               <div class="language-title">讀</div>',
                '           </div>',
                '           <div class="table-cell pl-24 pr-48" style="width: 100%">',
                '               <div class="slider-bar-radio language">',
                '                   <input type="radio" name="reading" id="reading1">',
                '                   <label for="reading1">不懂</label>',
                '                   <input type="radio" name="reading" id="reading2">',
                '                   <label for="reading2">略懂</label>',
                '                   <input type="radio" name="reading" id="reading3">',
                '                   <label for="reading3">中等</label>',
                '                   <input type="radio" name="reading" id="reading4">',
                '                   <label for="reading4">精通</label>',
                '               </div>',
                '           </div>',
                '       </div>',
                '       <div class="language-group">',
                '           <div class="table-cell">',
                '               <div class="language-title">寫</div>',
                '           </div>',
                '           <div class="table-cell pl-24 pr-48" style="width: 100%">',
                '               <div class="slider-bar-radio language">',
                '                   <input type="radio" name="writing" id="writing1">',
                '                   <label for="writing1">不懂</label>',
                '                   <input type="radio" name="writing" id="writing2">',
                '                   <label for="writing2">略懂</label>',
                '                   <input type="radio" name="writing" id="writing3">',
                '                   <label for="writing3">中等</label>',
                '                   <input type="radio" name="writing" id="writing4">',
                '                   <label for="writing4">精通</label>',
                '               </div>',
                '           </div>',
                '       </div>',
                '   </div>',
                '   <div class="resume-panel-foot">',
                '       <a href="javascript:;" class="btn btn--square mr-8 language_canel"><i class="icon-close"></i></a>',
                '       <a href="javascript:;" class="btn btn--square btn--cyan"><i class="icon-check"></i></a>',
                '   </div>',
                '</div>'
            ].join('');
            return el;
        }

        function languageClick() {
            $(".language_add").click(function(event) {
                var $language = $(this).parent();
                $language.before(languageElm());
            });

        }

        // 新增方言能力
        function dialectElm() {
            var el = [
                '<div class="resume-panel resume_block-edit language-edit">',
                '    <div class="resume-panel-title">',
                '        <span class="title">新增方言能力</span>',
                '    </div>',
                '    <div class="resume-panel-main cf">',
                '        <div class="inline-block--middle">',
                '            <font class="text--14">請選擇語言：</font>',
                '            <select name="" class="mr-8">',
                '                <option value="">上海話</option>',
                '                <option value="">台語</option>',
                '            </select>',
                '        </div>',
                '        <div class="language-group">',
                '            <div class="table-cell">',
                '                <div class="dialect-title">能力</div>',
                '            </div>',
                '            <div class="table-cell pl-24 pr-48" style="width: 100%">',
                '               <div class="slider-bar-radio dialect">',
                '                   <input type="radio" name="dialect" id="dialect1">',
                '                   <label for="dialect1">略通</label>',
                '                   <input type="radio" name="dialect" id="dialect2">',
                '                   <label for="dialect2">普通</label>',
                '                   <input type="radio" name="dialect" id="dialect3">',
                '                   <label for="dialect3">精通</label>',
                '               </div>',
                '            </div>',
                '        </div>',
                '    </div>',
                '    <div class="resume-panel-foot">',
                '        <a href="javascript:;" class="btn btn--square mr-8"><i class="icon-close"></i></a>',
                '        <a href="javascript:;" class="btn btn--square btn--cyan"><i class="icon-check"></i></a>',
                '    </div>',
                '</div>'
            ].join('');
            return el;
        }

        function dialectClick() {
            $(".dialect_add").click(function(event) {
                var $dialect = $(this).parent();
                $dialect.before(dialectElm());
            });
        }
        // 產生日期選單
        function buildDate(type, y_min, y_max) {
            if (type == "y") {
                var year = '';
                var d = new Date();
                var dYear = d.getFullYear()
                for (ei = (dYear + y_max); ei > (dYear - y_min); ei--) {
                    year = year + '<option value="' + ei + '">西元' + ei + ' / 民國 ' + (ei - 1911) + ' 年</option>'
                }
                return year;
            } else if (type == "y_ASC") {
                var year = '';
                var d = new Date();
                var dYear = d.getFullYear();
                for (ei = dYear; ei <= (dYear + y_max); ei++) {
                    year = year + '<option value="' + ei + '">西元' + ei + ' / 民國 ' + (ei - 1911) + ' 年</option>'
                }
                return year;
            } else if (type == "m") {
                var month = '';
                for (mi = 1; mi <= 12; mi++) {
                    month = month + '<option value="' + mi + '">' + mi + ' 月</option>'
                }
                return month;
            } else if (type == "d") {
                var day = '';
                for (di = 1; di <= 31; di++) {
                    day = day + '<option value="' + di + '">' + di + ' 日</option>'
                }
                return day;
            }
        }

        return {
            // > Profile 聯絡方式 及 身分資料 儲存
            ProfileSave: function(block, lisenceArr, carArr) {
                var $block = block;

                block.find('.resume_block-edit').hide();
                jobBankUI.showHideRemoveElm($block.append(resumeElm.Profile("complate")), "show");
            },

            // > DriversLicenseSave 駕照車輛 儲存
            DriversLicenseSave: function(block, lisenceArr, carArr) {
                var $block = block;

                block.find('.resume_block-edit').hide();
                jobBankUI.showHideRemoveElm($block.append(resumeElm.DriversLicense("complate")), "show");

                // 機車
                // 小型車
                // 普通大貨車
                // 普通聯結車
                // 普通大客車
                // 生成交通工具ICON

                function licenseContent(driver) {
                    var driverImg = "";
                    switch (driver) {
                        case "1":
                            driverImg += "<img src=\"img/driver-icon-moto.svg\" alt=\"機車\">"
                            break;
                        case "2":
                            driverImg += "<img src=\"img/driver-icon-car.svg\" alt=\"小型車\">"
                            break;
                        case "3":
                            driverImg += "<img src=\"img/driver-icon-lorry.svg\" alt=\"普通大貨車\">"
                            break;
                        case "4":
                            driverImg += "<img src=\"img/driver-icon-trailer.svg\" alt=\"普通聯結車\">"
                            break;
                        case "5":
                            driverImg += "<img src=\"img/driver-icon-bus.svg\" alt=\"普通大客車\">"
                            break;
                        default:
                            break;
                    }
                    var el = [
                        '<div class="col-lg-6 col-md-12 license_content" data-type="' + driver + '">',
                        '    <div class="license-left inline-block--middle">',
                        '       ' + driverImg + '',
                        '    </div>',
                        '    <div class="license-right inline-block--middle">',
                        '    </div>',
                        '</div>'
                    ].join('');
                    return el;
                }

                // 交通工具細分類
                function lineElm(name, subtype) {
                    var el = [
                        '<ul class="license-item--complate" data-subtype="' + subtype + '">',
                        '<li class="license-item-title--complate inline-block--middle">',
                        '    <strong class="text--biscay">' + name + '</strong>',
                        '</li>',
                        '<li class="license-item-content--complate inline-block--middle">',
                        '<font class="text--12 text--lightgrey">持有</font>',
                        '&nbsp;',
                        '<strong class="text--grey have_txt"></strong>',
                        '</li>',
                        '</ul>'
                    ].join('');
                    return el;
                }

                // 判斷屬於哪一類交通工具
                function driverType(driver, lisenceArr, carArr) {
                    switch (driver) {
                        case "1":
                            if (lisenceArr.indexOf("1") > -1 || lisenceArr.indexOf("64") > -1 || lisenceArr.indexOf("128") > -1 || carArr.indexOf("1") > -1 || carArr.indexOf("64") > -1 || carArr.indexOf("128") > -1) {
                                console.log('d1');
                                return true;
                            }
                            break;
                        case "2":
                            if (lisenceArr.indexOf("2") > -1 || lisenceArr.indexOf("4") > -1 || carArr.indexOf("2") > -1 || carArr.indexOf("4") > -1) {
                                console.log('d2');
                                return true;
                            }
                            break;
                        case "3":
                            if (lisenceArr.indexOf("256") > -1 || lisenceArr.indexOf("8") > -1 || carArr.indexOf("256") > -1 || carArr.indexOf("8") > -1) {
                                console.log('d3');
                                return true;
                            }
                            break;
                        case "4":
                            if (lisenceArr.indexOf("1024") > -1 || lisenceArr.indexOf("32") > -1 || carArr.indexOf("1024") > -1 || carArr.indexOf("32") > -1) {
                                console.log('d4');
                                return true;
                            }
                            break;
                        case "5":
                            if (lisenceArr.indexOf("512") > -1 || lisenceArr.indexOf("16") > -1 || carArr.indexOf("512") > -1 || carArr.indexOf("16") > -1) {
                                console.log('d5');
                                return true;
                            }
                            break;
                        default:
                            break;
                    }
                }

                // 有啥
                function haveTxt(which) {
                    var txt = "";
                    if (which == 1) {
                        txt = "駕照";
                    } else if (which == 2) {
                        txt = "車輛";
                    } else {
                        txt = "駕照、車輛";
                    }
                    return txt;
                }

                function buildDriver(lisenceArr, carArr, type, typeName, code) {
                    $(".license_content").each(function(index, el) {
                        if ($(el).data('type') == type) {
                            $(el).find('.license-right').append(lineElm(typeName, code))
                        }
                    });

                    $(".license-item--complate").each(function(index, el) {
                        if ($(el).data('subtype') == code) {
                            if (lisenceArr.indexOf(code) > -1 && carArr.indexOf(code) == -1) {
                                $(el).find('.have_txt').text(haveTxt(1));
                            }
                            if (lisenceArr.indexOf(code) == -1 && carArr.indexOf(code) > -1) {
                                $(el).find('.have_txt').text(haveTxt(2));
                            }
                            if (lisenceArr.indexOf(code) > -1 && carArr.indexOf(code) > -1) {
                                $(el).find('.have_txt').text(haveTxt());
                            }
                        }

                    });

                }

                var $content = $block.find(".resume-panel-main");
                // 1 輕  型  機  車
                // 64 普通重型機車
                // 128 大型重機車
                if (driverType("1", lisenceArr, carArr)) {
                    $content.append(licenseContent("1"));

                    if (lisenceArr.indexOf("1") > -1 || carArr.indexOf("1") > -1) {
                        buildDriver(lisenceArr, carArr, "1", "輕  型  機  車", "1");
                    }
                    if (lisenceArr.indexOf("64") > -1 || carArr.indexOf("64") > -1) {
                        buildDriver(lisenceArr, carArr, "1", "普通重型機車", "64");
                    }
                    if (lisenceArr.indexOf("128") > -1 || carArr.indexOf("128") > -1) {
                        buildDriver(lisenceArr, carArr, "1", "大型重機車", "128");
                    }
                }
                // 2 普通小型車
                // 4 職業小型車
                if (driverType("2", lisenceArr, carArr)) {
                    $content.append(licenseContent("2"));

                    if (lisenceArr.indexOf("2") > -1 || carArr.indexOf("2") > -1) {
                        buildDriver(lisenceArr, carArr, "2", "普通小型車", "2");
                    }
                    if (lisenceArr.indexOf("4") > -1 || carArr.indexOf("4") > -1) {
                        buildDriver(lisenceArr, carArr, "2", "職業小型車", "4");
                    }
                }
                // 256 普通大貨車
                // 8 職業大貨車
                if (driverType("3", lisenceArr, carArr)) {
                    $content.append(licenseContent("3"));

                    if (lisenceArr.indexOf("256") > -1 || carArr.indexOf("256") > -1) {
                        buildDriver(lisenceArr, carArr, "3", "普通大貨車", "256");
                    }
                    if (lisenceArr.indexOf("8") > -1 || carArr.indexOf("8") > -1) {
                        buildDriver(lisenceArr, carArr, "3", "職業大貨車", "8");
                    }
                }
                // 1024 普通聯結車
                // 32 職業聯結車
                if (driverType("4", lisenceArr, carArr)) {
                    $content.append(licenseContent("4"));

                    if (lisenceArr.indexOf("1024") > -1 || carArr.indexOf("1024") > -1) {
                        buildDriver(lisenceArr, carArr, "4", "普通聯結車", "1024");
                    }
                    if (lisenceArr.indexOf("32") > -1 || carArr.indexOf("32") > -1) {
                        buildDriver(lisenceArr, carArr, "4", "職業聯結車", "32");
                    }
                }
                // 512 普通大客車
                // 16 職業大客車
                if (driverType("5", lisenceArr, carArr)) {
                    $content.append(licenseContent("5"));

                    if (lisenceArr.indexOf("512") > -1 || carArr.indexOf("512") > -1) {
                        buildDriver(lisenceArr, carArr, "5", "普通大客車", "512");
                    }
                    if (lisenceArr.indexOf("16") > -1 || carArr.indexOf("16") > -1) {
                        buildDriver(lisenceArr, carArr, "5", "職業大客車", "16");
                    }
                }
            },

            // > AcademicInfo 學歷資料 內容處理
            AcademicInfoCnt: function(callback) {
                var educationDateY = buildDate("y", 75, 6);
                var educationDateM = buildDate("m");

                // 就讀時間下拉選單
                $(".education_start-year").append(educationDateY);
                $(".education_start-month").append(educationDateM);

                // 畢業時間下拉選單
                $(".education_end-year").append(educationDateY);
                $(".education_end-month").append(educationDateM);

                // 夜間部/在職專班
                $("input[name=eduSystem]").click(function(event) {
                    var id = $(this).attr('id');
                    var ss = id.substr(-1);
                    console.log(id);
                    console.log(ss);
                    if (id == 'educationSystemN' + ss) {
                        if ($('#educationSystemV' + ss).prop("checked")) {
                            $('#educationSystemV' + ss).prop("checked", false);
                        }
                    }

                    if (id == 'educationSystemV' + ss) {
                        if ($('#educationSystemN' + ss).prop("checked")) {
                            $('#educationSystemN' + ss).prop("checked", false);
                        }
                    }
                });

                majorClick();
                activitiesClick();

                if ($.isFunction(callback)) {
                    callback($(this));
                }

                // 國籍選單
                $("#educationCountry").hide();
                $("input[name='educationDistrict']").change(function(event) {
                    if ($(this).val() == "1") {
                        $("#educationCountry").show();
                    } else {
                        $("#educationCountry").hide();
                    }
                });
            },

            // > AcademicInfoSave 學歷資料 儲存
            AcademicInfoSave: function(block, data) {
                console.log("data: " + JSON.parse(data));
                var data = JSON.parse(data);
                var $block = block;


                // resumeElm.EduTimeline(data);  資料代碼轉換在 resume-data-trans.js
                $block.find('.resume_block-edit').hide();
                jobBankUI.showHideRemoveElm($block.find('.resume-edit-content').append(resumeElm.AcademicInfo("addEdu")), "show");
                jobBankUI.showHideRemoveElm($block.find(".step-line").append(resumeElm.EduTimeline(data)), "show");


                // 滾動視窗到 Step-line 的位置
                var timelineOffset = $block.find(".step-line").offset();
                var body = $("html, body");
                body.stop().animate({
                    scrollTop: timelineOffset.top - 50
                }, 500);


                $(".js-addEdu").click(function(event) {
                    $(this).parents(".resume_block-add").remove();
                    $block.find(".resume-edit-content").append(resumeElm.AcademicInfo("editFrm"));
                    resumeUI.AcademicInfoCnt();
                });
            },

            // > Condition 應徵條件 內容處理
            ConditionCnt: function() {
                $("input[name='salaryType']").change(function(event) {
                    $(".salary_input").addClass('hidden');
                    $(".salary_link").addClass('hidden');
                    $(".salary_txt").addClass('hidden');
                    var thisVal = $(this).val();
                    switch (thisVal) {
                        case "2": //日薪
                        case "4": //時薪
                            $(".salary_input").removeClass('hidden');
                            $(".salary_txt").removeClass('hidden');
                            break;
                        case "1": //月薪
                            $(".salary_input").removeClass('hidden');
                            $(".salary_link").removeClass('hidden');
                            break;
                        case "8":
                            $(".salary_input").removeClass('hidden');
                            break;
                    }
                });


                var expireY, expireM, expireD;
                expireY = buildDate("y_ASC", 0, 3);
                expireM = buildDate("m");
                expireD = buildDate("d");
                $(".expire_year").append(expireY);
                $(".expire_month").append(expireM);
                $(".expire_day").append(expireD);

            },

            // > Condition 應徵條件 儲存
            ConditionSave: function(block, data) {
                console.trace("data: " + JSON.parse(data));

                var data = JSON.parse(data);
                var $block = block;

                // console.log(data.job_role);
                $block.find('.resume_block-edit').hide();
                $block.find('.resume-edit-title').append('<a href="" title="編輯資料" class="btn btn--secondary btn--sm"><i class="icon-icon-edit" aria-hidden="true"></i></a>');

                jobBankUI.showHideRemoveElm($block.find('.resume-edit-content').append(resumeElm.ConditionData(data)), "show");


                var elmOffset = $block.offset();
                var body = $("html, body");
                body.stop().animate({
                    scrollTop: elmOffset.top - 50
                }, 500);

            },
            // > JobTenure 工作總年資 內容處理
            JobTenureCnt: function() {
                // 工作總年資 內容處理
            },

            // > JobTenure 應徵條件 儲存
            JobTenureSave: function(block, data) {
                console.trace("data: " + JSON.parse(data));

                var data = JSON.parse(data);
                var $block = block;

                // console.log(data.job_role);
                $block.find('.resume_block-edit').hide();
                $block.find('.resume-edit-title').append('<a href="" title="編輯資料" class="btn btn--secondary btn--sm"><i class="icon-icon-edit" aria-hidden="true"></i></a>');

                jobBankUI.showHideRemoveElm($block.find('.resume-edit-content').append(resumeElm.JobTenureData(data)), "show");


                var elmOffset = $block.offset();
                var body = $("html, body");
                body.stop().animate({
                    scrollTop: elmOffset.top - 50
                }, 500);

            },

            // > WorkExperience 工作經歷 內容處理
            WorkExperienceCnt: function() {
                // 工作經歷 內容處理
            },

            // > WorkExperience 工作經歷 儲存
            WorkExperienceSave: function(block, data) {
                console.trace("data: " + JSON.parse(data));

                var data = JSON.parse(data);
                var $block = block;

                // console.log(data.job_role);
                $block.find('.resume_block-edit').hide();
                jobBankUI.showHideRemoveElm($block.find('.resume-edit-content').append(resumeElm.WorkExperience("addWek")), "show");
                jobBankUI.showHideRemoveElm($block.find(".work-experience-line").append(resumeElm.WorkExperienceData(data)), "show");


                // 滾動視窗到 work-experience-line 的位置
                var timelineOffset = $block.find(".work-experience-line").offset();
                var body = $("html, body");
                body.stop().animate({
                    scrollTop: timelineOffset.top - 50
                }, 500);


                $(".js-addWek").click(function(event) {
                    $(this).parents(".resume_block-add").remove();
                    $block.find(".resume-edit-content").append(resumeElm.WorkExperience("editFrm"));
                    resumeUI.AcademicInfoCnt();
                });


                var elmOffset = $block.offset();
                var body = $("html, body");
                body.stop().animate({
                    scrollTop: elmOffset.top - 50
                }, 500);

            },

            // > LanguageSkills 語言能力 內容處理
            LanguageSkillsCnt: function() {
                languageClick();
                dialectClick();
            },

            // > LanguageSkills 語言能力 儲存
            LanguageSkillsSave: function(block, data) {
                console.trace("data: " + JSON.parse(data));

                var data = JSON.parse(data);
                var $block = block;

                // console.log(data.job_role);
                $block.find('.resume_block-edit').hide();
                $block.find('.resume-edit-title').append('<a href="" title="編輯資料" class="btn btn--secondary btn--sm"><i class="icon-icon-edit" aria-hidden="true"></i></a>');

                jobBankUI.showHideRemoveElm($block.find('.resume-edit-content').append(resumeElm.LanguageSkillsData(data)), "show");


                var elmOffset = $block.offset();
                var body = $("html, body");
                body.stop().animate({
                    scrollTop: elmOffset.top - 50
                }, 500);

            },

            // > SkillCertificate 技能證照 內容處理
            SkillCertificateCnt: function() {

            },

            // > SkillCertificate 技能證照 儲存
            SkillCertificateSave: function(block, data) {
                console.trace("data: " + JSON.parse(data));

                var data = JSON.parse(data);
                var $block = block;

                // console.log(data.job_role);
                $block.find('.resume_block-edit').hide();
                $block.find('.resume-edit-title').append('<a href="" title="編輯資料" class="btn btn--secondary btn--sm"><i class="icon-icon-edit" aria-hidden="true"></i></a>');

                jobBankUI.showHideRemoveElm($block.find('.resume-edit-content').append(resumeElm.SkillCertificateData(data)), "show");


                var elmOffset = $block.offset();
                var body = $("html, body");
                body.stop().animate({
                    scrollTop: elmOffset.top - 50
                }, 500);

            },

            // > Autobiography 我的自傳 內容處理
            AutobiographyCnt: function() {
                // 自傳魔法師 makeAutobiography //
                console.log('autobiographyMagic');
                autobiographyMagic();
            },

            // > Autobiography 我的自傳 儲存
            AutobiographySave: function(block, data) {
                console.trace("data: " + JSON.parse(data));

                var data = JSON.parse(data);
                var $block = block;

                // console.log(data.job_role);
                $block.find('.edit_autobiography_ch').hide();

                jobBankUI.showHideRemoveElm($block.find('.resume-edit-content').append(resumeElm.AutobiographyData("ch")), "show");
                jobBankUI.showHideRemoveElm($block.find('.complate_autobiography_ch').after(resumeElm.Autobiography("addEnAbg")), "show");

                // jobBankUI.showHideRemoveElm($block.find('.resume-edit-content').append(resumeElm.AutobiographyData("en")), "show");

                var elmOffset = $block.offset();
                var body = $("html, body");
                body.stop().animate({
                    scrollTop: elmOffset.top - 50
                }, 500);
                $(".js-addEnAbg").click(function(event) {
                    $(this).parents(".resume_block-add").remove();
                    $block.find(".resume-edit-content").append(resumeElm.Autobiography("editFrm_en"));
                });
            },

            // > Autobiography 我的自傳 內容處理
            ReferenceCnt: function() {

            },

            // > Autobiography 我的自傳 儲存
            ReferenceSave: function(block, data) {
                console.trace("data: " + JSON.parse(data));

                var data = JSON.parse(data);
                var $block = block;

                // console.log(data.job_role);
                $block.find('.resume_block-edit').hide();

                jobBankUI.showHideRemoveElm($block.find('.resume_block-edit').after(resumeElm.ReferenceData(data)), "show");
                jobBankUI.showHideRemoveElm($block.find('.firRf').after(resumeElm.Reference("addRf")), "show");

                var elmOffset = $block.offset();
                var body = $("html, body");
                body.stop().animate({
                    scrollTop: elmOffset.top - 50
                }, 500);

                $(".js-addRf").click(function(event) {
                    $(this).parents(".resume_block-add").remove();
                    $block.find(".secRf").append(resumeElm.Reference("editFrm"));
                    resumeUI.ReferenceCnt();
                });


            }

        }

    }(window, jQuery));