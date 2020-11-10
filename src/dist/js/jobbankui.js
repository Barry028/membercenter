/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 * https://codepen.io/gapcode/pen/vEJNZN?editors=0010
 */
function detectIE() {
    var ua = window.navigator.userAgent;

    // Test values; Uncomment to check result …

    // IE 10
    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

    // IE 11
    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

    // Edge 12 (Spartan)
    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

    // Edge 13
    // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}
// return new Promise(function(resolve) {
//   setTimeout(function() {

//   } , 300);
// });
var jobBankUI = (function(window, jQuery) {
    if (!window.jQuery) { throw new Error("jobBankUI requires jQuery") }


    var $ = window.jQuery;
    var _this = this;


    return {
        init: function() {
            this.receiveCheck().init();

            var WHAT = navigator.userAgent;
            console.log(WHAT);
            var userAgent = WHAT.toLowerCase();

            // 若是IE，則加上class
            if (detectIE()) {
                // alert()
                $("html").addClass('ie ie' + detectIE());
            }
        },

        tooltip: function() {

        },

        /**
         * -------------------------------------------------------------------------------------
         * >> jobBankUI.receiveCheck 是否接收新職缺通知的check動作
         */
        receiveCheck: function() {
            var $wrap = $(".receive_wrap");
            var checkClassName = "js-checked";
            return {
                init: function() {
                    $(".receive_checkbox").each(function(index, el) {
                        if ($(el).prop("checked") == true) {
                            $(this).parent($wrap).addClass(checkClassName);
                        }
                    });
                },
                check: function(callback) {

                    $(".receive_checkbox").change(function(event) {
                        var corp_name = $(this).parents("li.collect_corp-item").data('corp');
                        if ($(this).prop("checked") == true) {
                            $(this).parent($wrap).addClass(checkClassName);
                            jobBankUI.notice("您已開啟 " + corp_name + " 新職缺通知。");
                        } else {
                            $(this).parent($wrap).removeClass(checkClassName);
                            jobBankUI.notice("您已關閉 " + corp_name + " 新職缺通知。");
                        }

                        if ($.isFunction(callback)) {
                            callback($(this));
                        }
                    });
                }
            }
        },

        /**
         * -------------------------------------------------------------------------------------
         * >> jobBankUI.notice 通知彈出
         */
        notice: function(txt) {
            var noticeEl = $('<div/>', { 'class': 'notice_wrap' });
            $("body").append(noticeEl);

            var cntEl = "";
            cntEl += "<span class=\"notice-icon\"><i class=\"fa fa-exclamation-circle\"></i></span>";
            cntEl += "<span class=\"notice-txt\">" + txt + "</span>";
            noticeEl.append(cntEl);

            TweenMax.fromTo(noticeEl, 1, {
                delay: 150,
                right: '-100%'
            }, {
                right: '0',
                onComplete: function() {
                    setTimeout(function() {
                        TweenMax.fromTo(noticeEl, 3, {
                            right: '0'
                        }, {
                            right: '-100%',
                            onComplete: function() {
                                noticeEl.remove();
                            }
                        });
                    }, 3000)
                }
            });
        },

        /**
         * -------------------------------------------------------------------------------------
         * >> jobBankUI.navHighlight 側邊欄高亮
         */
        navHighlight: function(lv1Index, lv2Index) {
            $(".menu-list > li").removeClass('active open');
            $('.menu-list-header').removeClass('open');
            $('.menu-list-header .arrow').removeClass('show');
            $('.sub-menu-list').addClass('hidden');
            $('.sub-menu-list li').removeClass('active');
            // $('.menu-list-header').next(".sub-menu-list");
            $item = $(".menu-list > li").eq(lv1Index);
            $list_header = $item.find('.menu-list-header');
            $sub_list = $list_header.next(".sub-menu-list");
            $item.addClass('active open');
            $list_header.addClass('open').find('.arrow').addClass('show');
            $sub_list.slideToggle();
            // $sub_list.removeClass('hidden');
            $sub_list.find('li').eq(lv2Index).addClass('active');
        },


        /**
         * -------------------------------------------------------------------------------------
         * >> jobBankUI.popupRemark 備註視窗
         */
        popupRemark: function() {

            return {
                open: function(title, id, name, cnt, callback) {
                    var $el = $("<div>", { "class": "popup popup_remark" });

                    elCnt = "";
                    elCnt += "  <div class=\"popup_wrap\">";
                    elCnt += "    <div class=\"popup_bg\"></div>";
                    elCnt += "    <div class=\"popup_container\">";
                    elCnt += "      <div class=\"popup_content\">";
                    elCnt += "        <div class=\"popup_content-hd\">" + title + "</div>";
                    elCnt += "        <div class=\"popup_content-bd\">";
                    elCnt += "          <label for=\"" + id + "\" class=\"popup_content-label\">備註:</label>";
                    elCnt += "          <div class=\"popup_content-field\">";
                    elCnt += "            <textarea name=\"\" id=\"" + id + "\" class=\"popup_textarea\">" + cnt + "</textarea>";
                    elCnt += "            <p class=\"\">輸入 <span id=\"" + id + "_len\">0</span> 字｜還可以輸入 <span id=\"" + id + "_max\"></span> 字</p>";
                    elCnt += "          </div>";
                    elCnt += "        </div>";
                    elCnt += "        <div class=\"popup_content-ft\">";
                    elCnt += "          <button type=\"button\" class=\"popup_btn confirm-cancel\">取消</button>";
                    elCnt += "          <button type=\"button\" class=\"popup_btn confirm-yes\">儲存</button>";
                    elCnt += "        </div>";
                    elCnt += "      </div>";
                    elCnt += "    </div>";
                    elCnt += "  </div>";


                    $el.append(elCnt);
                    $("body").prepend($el);

                    TweenMax.fromTo($el, 0.3, {
                        opacity: '0'
                    }, {
                        opacity: '1'
                    });

                    $(".confirm-cancel").click(function(event) {
                        console.log('cancel');
                        jobBankUI.popupRemark().close($el);
                    });


                    $(".confirm-yes").click(function(event) {
                        if ($.isFunction(callback)) {
                            callback(id);
                        }
                        // close_confirm($el);
                    });

                    // $("#" + id).keydown(function(event) {
                    //     var len = $(this).val().length;
                    //     $("#" + id + "_len").text(len);
                    // });

                    // var options = {
                    //     'maxCharacterSize': 200,
                    //     'originalStyle': 'originalDisplayInfo',
                    //     'warningStyle': 'warningDisplayInfo',
                    //     'warningNumber': 100,
                    //     'displayFormat': '已輸入 #input 字 | 還可以輸入 #left 字'
                    // };
                    // $("#" + id).textareaCount(options);

                    var text_max = 200;
                    $('#'+id+'_max').text(text_max);

                    $('#'+id).keyup(function() {
                        var text_length = $(this).val().trim().length;
                        var text_remaining = text_max - text_length;
                        $('#'+id+'_len').text(text_length);
                        $('#'+id+'_max').text(text_remaining);
                    });


                },

                close: function(el) {
                    TweenMax.fromTo(el, 0.3, {
                        opacity: '1'
                    }, {
                        opacity: '0',
                        onComplete: function() {
                            el.find(".popup_textarea").val("");
                            el.remove();
                        }
                    });
                }
            }

        },

        /**
         * -------------------------------------------------------------------------------------
         * >> jobBankUI.textareaCount 字數
         */
        textareaCount: function(id, max) {
            var text_max = max;
            $('#'+id+'_max').text(text_max);

            $('#'+id).keyup(function() {
                var text_length = $(this).val().trim().length;
                var text_remaining = text_max - text_length;
                $('#'+id+'_len').text(text_length);
                $('#'+id+'_max').text(text_remaining);
            });
        },

        /**
         * -------------------------------------------------------------------------------------
         * >> jobBankUI.showHideRemoveElm 元素的顯示與隱藏之動態，隱藏後移除該元素
         */
        // 
        showHideRemoveElm: function(targetElm, action) {
            if (action == "show") {
                TweenMax.fromTo(targetElm, 0.3, {
                    opacity: '0'
                }, {
                    opacity: '1'
                });
            } else if (action == "hidden") {
                TweenMax.fromTo(targetElm, 0.3, {
                    opacity: '1'
                }, {
                    opacity: '0',
                    onComplete: function() {
                        targetElm.remove();
                    }
                });
            }
        },

        /**
         * -------------------------------------------------------------------------------------
         * >> jobBankUI.versionElm 版型的 element
         */
        versionElm:function(version, hasData) {
            var $el = "";
            var el = "";
            var isComplete = hasData ? " complete" : '';

            if (version == 1) {
                $el = $("<article>", { "class": "version_wrap version_wrap-ver1"+isComplete+"" });
                el += "    <section class=\"inner version_container\">";
                el += "        <div class=\"row cf\">";
                el += "            <div class=\"version_container-left vc-col\" data-col=\"1\">";
                el += "                <div class=\"version_container-row vc-row\" data-row=\"1\">";
                el += "                    <div class=\"version_block\"></div>";
                el += "                </div>";
                if (!hasData) {
                el += "                <div class=\"version_container-row\">";
                el += "                    <div class=\"version_block add\"><button class=\"btn btn-add add-block\"><span class=\"inner\"></span></button></div>";
                el += "                </div>";
                }
                el += "            </div>";
                el += "            <div class=\"version_container-right vc-col\" data-col=\"2\">";
                el += "                <div class=\"version_container-row vc-row\" data-row=\"1\">";
                el += "                    <div class=\"version_block\"></div>";
                el += "                </div>";
                if (!hasData) {
                el += "                <div class=\"version_container-row\">";
                el += "                    <div class=\"version_block add\"><button class=\"btn btn-add add-block\"><span class=\"inner\"></span></button></div>";
                el += "                </div>";
                }
                el += "            </div>";
                el += "        </div>";
                el += "    </section>";

                $el.append(el);
            } else if (version == 2) {
                $el = $("<article>", { "class": "version_wrap version_wrap-ver2"+isComplete+"" });
                el += "    <section class=\"inner version_container\">";
                el += "        <div class=\" version_container-hd vc-row\" data-row=\"1\">";
                // el += "            <div class=\"col-lg-12\">";
                el += "                <div class=\"version_block\"></div>";
                // el += "            </div>";
                el += "        </div>";
                el += "        <div class=\" version_container-bd vc-row\" data-row=\"2\">";
                // el += "            <div class=\"col-lg-12\">";
                el += "                <div class=\"version_block\"></div>";
                // el += "            </div>";
                el += "        </div>";
                if (!hasData) {
                el += "        <div class=\" version_container-row\">";
                // el += "            <div class=\"col-lg-12\">";
                el += "                <div class=\"version_block add\"><button class=\"btn btn-add add-block\"><span class=\"inner\"></span></button></div>";
                // el += "            </div>";
                el += "        </div>";
                }
                el += "    </section>";

                $el.append(el);
            } else if (version == 3) {
                $el = $("<article>", { "class": "version_wrap version_wrap-ver3"+isComplete+"" });
                el += "    <section class=\"inner version_container \">";
                el += "        <div class=\"row \">";
                el += "            <div class=\"col-lg-4 version_container-col vc-col\" data-col=\"1\">";
                el += "                <div class=\"version_container-row1 vc-row\" data-row=\"1\">";
                el += "                    <div class=\"version_block\"> </div>";
                el += "                </div>";
                el += "                <div class=\"version_container-row vc-row\" data-row=\"2\">";
                el += "                    <div class=\"version_block\"></div>";
                el += "                </div>";
                if (!hasData) {
                el += "                <div class=\"version_container-row\">";
                el += "                    <div class=\"version_block add\"><button class=\"btn btn-add add-block\"><span class=\"inner\"></span></button></div>";
                el += "                </div>";
                }
                el += "            </div>";
                el += "            <div class=\"col-lg-4 version_container-col vc-col\" data-col=\"2\">";
                el += "                <div class=\"version_container-row1 vc-row\" data-row=\"1\">";
                el += "                    <div class=\"version_block\"> </div>";
                el += "                </div>";
                el += "                <div class=\"version_container-row vc-row\" data-row=\"2\">";
                el += "                    <div class=\"version_block\"></div>";
                el += "                </div>";
                if (!hasData) {
                el += "                <div class=\"version_container-row\">";
                el += "                    <div class=\"version_block add\"><button class=\"btn btn-add add-block\"><span class=\"inner\"></span></button></div>";
                el += "                </div>";
                }
                el += "            </div>";
                el += "            <div class=\"col-lg-4 version_container-col vc-col\" data-col=\"3\">";
                el += "                <div class=\"version_container-row1 vc-row\" data-row=\"1\">";
                el += "                    <div class=\"version_block\"> </div>";
                el += "                </div>";
                el += "                <div class=\"version_container-row vc-row\" data-row=\"2\">";
                el += "                    <div class=\"version_block\"></div>";
                el += "                </div>";
                if (!hasData) {
                el += "                <div class=\"version_container-row\">";
                el += "                    <div class=\"version_block add\"><button class=\"btn btn-add add-block\"><span class=\"inner\"></span></button></div>";
                el += "                </div>";
                }
                el += "            </div>";
                el += "        </div>";

                el += "    </section>";

                $el.append(el);
            }

            return $el;
        },

        /**
         * -------------------------------------------------------------------------------------
         * >> jobBankUI.version 版型選擇，編輯區塊
         */
        version: function() {

            var $editContainer = $(".version_edit-container");
            var verNum;

            function btnEdit(appendEl, id) {
                appendEl.append($("<button data-id=\"" + id + "\" class=\"btn btn-edit\">編輯區塊</button>"));
            }

            // 編輯區塊的選項，標題、副標題、內文等等。
            function editorToolElm() {
                var $el = $("<div>", { "class": "editor_tool" });
                var el = "";
                // el += "<div class=\"editor_tool\" id=\"\">";
                el += "    <div class=\"editor_tool_list\">";
                el += "        <ul class=\"cf\">";
                el += "            <li class=\"editor_tool_item\">";
                el += "                <button class=\"editor_tool-btn\" data-act=\"title\">";
                el += "                    <span class=\"icon_wrap\"><i class=\"icon-h1\"></i></span>";
                el += "                    <span class=\"txt\">標題</span>";
                el += "                </button>";
                el += "            </li>";
                el += "            <li class=\"editor_tool_item\">";
                el += "                <button class=\"editor_tool-btn\" data-act=\"subtitle\">";
                el += "                    <span class=\"icon_wrap\"><i class=\"icon-h2\"></i></span>";
                el += "                    <span class=\"txt\">副標題</span>";
                el += "                </button>";
                el += "            </li>";
                el += "            <li class=\"editor_tool_item\">";
                el += "                <button class=\"editor_tool-btn\" data-act=\"content\">";
                el += "                    <span class=\"icon_wrap\"><i class=\"icon-content\"></i></span>";
                el += "                    <span class=\"txt\">內文</span>";
                el += "                </button>";
                el += "            </li>";
                el += "            <li class=\"editor_tool_item\">";
                el += "                <button class=\"editor_tool-btn\" data-act=\"link\">";
                el += "                    <span class=\"icon_wrap\"><i class=\"icon-link1\"></i></span>";
                el += "                    <span class=\"txt\">連結</span>";
                el += "                </button>";
                el += "            </li>";
                el += "            <li class=\"editor_tool_item e_pic\">";
                el += "                <button class=\"editor_tool-btn\" data-act=\"pic\">";
                el += "                    <span class=\"icon_wrap\"><i class=\"icon-image1\"></i></span>";
                el += "                    <span class=\"txt\">圖片</span>";
                el += "                </button>";
                el += "            </li>";
                el += "            <li class=\"editor_tool_item\">";
                el += "                <button class=\"editor_tool-btn\" data-act=\"annex\">";
                el += "                    <span class=\"icon_wrap\"><i class=\"icon-attachment\"></i></span>";
                el += "                    <span class=\"txt\">附件</span>";
                el += "                </button>";
                el += "            </li>";
                el += "        </ul>";
                el += "        <p class=\"text--white\">崁入線上檔案</p>";
                el += "        <ul class=\"cf\">";
                el += "            <li class=\"editor_tool_item\">";
                el += "                <button class=\"editor_tool-btn\" data-act=\"briefing\">";
                el += "                    <span class=\"icon_wrap\"><i class=\"icon-presentation\"></i></span>";
                el += "                    <span class=\"txt\">簡報</span>";
                el += "                </button>";
                el += "            </li>";
                el += "            <li class=\"editor_tool_item\">";
                el += "                <button class=\"editor_tool-btn\" data-act=\"video\">";
                el += "                    <span class=\"icon_wrap\"><i class=\"icon-video\"></i></span>";
                el += "                    <span class=\"txt\">影片</span>";
                el += "                </button>";
                el += "            </li>";
                el += "        </ul>";
                el += "    </div>";
                // el += "</div>";
                $el.append(el);

                return $el;

            }

            // 文字類型的編輯框
            function cusCntTextElm(id, type, placeholder) {
                var el = "";

                var $el = $("<div>", { "class": "cus_cnt cus_cnt-" + type + " cus_cnt_text" });
                el += "<div class=\"inner\">";
                el += "    <section class=\"cus_cnt-bd\">";
                el += "        <div class=\"cus_cnt-txt_tool cf\">";
                el += "            <div class=\"left txt_align\">";
                el += "                <ul class=\"cf\">";
                el += "                    <li class=\"txt_tool txt_align-left active\" data-align=\"left\">";
                el += "                        <button class=\"txt_tool-btn\"><i class=\"icon-align-left\"></i></button>";
                el += "                    </li>";
                el += "                    <li class=\"txt_tool txt_align-center\" data-align=\"center\">";
                el += "                        <button class=\"txt_tool-btn\"><i class=\"icon-align-center\"></i></button>";
                el += "                    </li>";
                el += "                    <li class=\"txt_tool txt_align-right\" data-align=\"right\">";
                el += "                        <button class=\"txt_tool-btn\"><i class=\"icon-align-right\"></i></button>";
                el += "                    </li>";
                el += "                </ul>";
                el += "            </div>";
                el += "            <div class=\"right txt_ctrl\">";
                el += "                <ul class=\"cf\">";
                el += "                    <li class=\"txt_tool txt_ctrl-move\">";
                el += "                        <button class=\"txt_tool-btn\"><i class=\"icon-move\"></i></button>";
                el += "                    </li>";
                el += "                    <li class=\"txt_tool txt_ctrl-delete\">";
                el += "                        <button class=\"txt_tool-btn\"><i class=\"icon-icon-trash\"></i></button>";
                el += "                    </li>";
                el += "                </ul>";
                el += "            </div>";
                el += "        </div>";
                el += "        <div class=\"cus_cnt-field cus_cnt-" + type + "-field js-edit\">";
                el += "            <input type=\"text\" id=\"" + type + "Field-"+id+"\" class=\"cus_cnt-" + type + "-input\" placeholder=\"" + placeholder + "\">";
                el += "        </div>";
                el += "    </section>";
                el += "    <section class=\"cus_cnt-ft\">";
                el += "        <button class=\"btn-cuscnt btn-cuscnt-cancel\">取消</button>";
                el += "        <button class=\"btn-cuscnt btn-cuscnt-save\">儲存</button>";
                el += "    </section>";
                el += "</div>";
                $el.append(el);
                return $el;
            }

            // 各區塊元素
            function cusCntElm(id, act) {
                var type = act;
                var $el, el = "";

                // 標題
                if (act == "title") {
                    return cusCntTextElm(id, "title", "請輸入標題");
                }
                // 副標題
                else if (act == "subtitle") {
                    return cusCntTextElm(id, "subtitle", "請輸入副標題");
                }
                // 內文
                else if (act == "content") {
                    $el = $("<div>", { "class": "cus_cnt cus_cnt-content cus_cnt_text" });

                    el += "<div class=\"inner\">";
                    el += "    <section class=\"cus_cnt-bd\">";
                    el += "        <div class=\"cus_cnt-txt_tool cf\">";
                    el += "            <div class=\"left txt_align\">";
                    el += "                <ul class=\"cf\">";
                    el += "                    <li class=\"txt_tool txt_align-left\" data-align=\"left\">";
                    el += "                        <button class=\"txt_tool-btn\"><i class=\"icon-align-left\"></i></button>";
                    el += "                    </li>";
                    el += "                    <li class=\"txt_tool txt_align-center\" data-align=\"center\">";
                    el += "                        <button class=\"txt_tool-btn\"><i class=\"icon-align-center\"></i></button>";
                    el += "                    </li>";
                    el += "                    <li class=\"txt_tool txt_align-right\" data-align=\"right\">";
                    el += "                        <button class=\"txt_tool-btn\"><i class=\"icon-align-right\"></i></button>";
                    el += "                    </li>";
                    el += "                </ul>";
                    el += "            </div>";
                    el += "            <div class=\"right txt_ctrl\">";
                    el += "                <ul class=\"cf\">";
                    el += "                    <li class=\"txt_tool txt_ctrl-move\">";
                    el += "                        <button class=\"txt_tool-btn\"><i class=\"icon-move\"></i></button>";
                    el += "                    </li>";
                    el += "                    <li class=\"txt_tool txt_ctrl-delete\">";
                    el += "                        <button class=\"txt_tool-btn\"><i class=\"icon-icon-trash\"></i></button>";
                    el += "                    </li>";
                    el += "                </ul>";
                    el += "            </div>";
                    el += "        </div>";
                    el += "        <div class=\"cus_cnt-field cus_cnt-content-field js-edit\">";
                    el += "            <textarea name=\"\" id=\""+type+"Field-"+id+"\" class=\"cus_cnt-content-input\" placeholder=\"請輸入內文\"></textarea>";
                    el += "        </div>";
                    el += "    </section>";
                    el += "    <section class=\"cus_cnt-ft\">";
                    el += "        <button class=\"btn-cuscnt btn-cuscnt-cancel\">取消</button>";
                    el += "        <button class=\"btn-cuscnt btn-cuscnt-save\">儲存</button>";
                    el += "    </section>";
                    el += "</div>";

                    $el.append(el);
                    return $el;
                }
                // 連結
                else if (act == "link"){
                    // .cus_cnt.cus_cnt-link>.inner>((section.cus_cnt-bd>(.cus_cnt-field.cus_cnt-link-addlink.js-edit>.cus_cnt-field_group>.inner-table>(.inner-tablecell.cus_cnt-link-label>label.cus_cnt-field_group-label[for="linkUrl"]{連結網址})+(.inner-tablecell.cus_cnt-link-input>input#linkUrl.cus_cnt-field_group-input[type="text"placeholder="請輸入連結網址"]))+(.cus_cnt-field.cus_cnt-link-addlink.js-edit>.cus_cnt-field_group>.inner-table>(.inner-tablecell.cus_cnt-link-label>label.cus_cnt-field_group-label[for="linkTxt"]{按鈕文字})+(.inner-tablecell.cus_cnt-link-input>input#linkTxt.cus_cnt-field_group-input[type="text"placeholder="請輸入按鈕文字"]))+(.cus_cnt-field.cus_cnt-link-addlink.js-edit>.cus_cnt-field_group>.inner-table>(.inner-tablecell.cus_cnt-link-label>label.cus_cnt-field_group-label[for="linkTxt"]{按鈕文字})+(.inner-tablecell.cus_cnt-link-input>.cus_cnt-link-color>ul.cf>(li.color_item.color-blue.active[data-color="blue"]+li.color_item.color-green[data-color="green"]+li.color_item.color-red[data-color="red"]+li.color_item.color-orange[data-color="orange"]+li.color_item.color-purple[data-color="purple"]+)))+)+(section.cus_cnt-ft>(button.btn-cuscnt.btn-cuscnt-cancel{取消}+button.btn-cuscnt.btn-cuscnt-save{儲存})))
                    $el = $("<div>", { "class": "cus_cnt cus_cnt-link" });

                    el += "<div class=\"inner\">";
                    el += "    <section class=\"cus_cnt-hd\">";
                    el += "        <div class=\"cus_cnt-link-upload\"></div>";
                    el += "    </section>";
                    el += "    <section class=\"cus_cnt-bd\">";
                    el += "        <div class=\"cus_cnt-field cus_cnt-link-addlink js-edit\">";
                    el += "            <div class=\"cus_cnt-field_group\">";
                    el += "                <div class=\"inner-table\">";
                    el += "                    <div class=\"inner-tablecell cus_cnt-link-label\"><label for=\"linkUrl\" class=\"cus_cnt-field_group-label\"><i class=\"icon-link\"></i>連結網址</label></div>";
                    el += "                    <div class=\"inner-tablecell cus_cnt-link-input\"><input type=\"text\" id=\"linkUrl\" class=\"cus_cnt-field_group-input\" placeholder=\"請輸入連結網址\"></div>";
                    el += "                </div>";
                    el += "            </div>";
                    el += "        </div>";
                    el += "        <div class=\"cus_cnt-field cus_cnt-link-addtxt js-edit\">";
                    el += "            <div class=\"cus_cnt-field_group\">";
                    el += "                <div class=\"inner-table\">";
                    el += "                    <div class=\"inner-tablecell cus_cnt-link-label\"><label for=\"linkTxt\" class=\"cus_cnt-field_group-label\"><i class=\"icon-description\"></i>按鈕文字</label></div>";
                    el += "                    <div class=\"inner-tablecell cus_cnt-link-input\"><input type=\"text\" id=\"linkTxt\" class=\"cus_cnt-field_group-input\" placeholder=\"請輸入按鈕文字\"></div>";
                    el += "                </div>";
                    el += "            </div>";
                    el += "        </div>";
                    el += "        <div class=\"cus_cnt-field cus_cnt-link-addtxt js-edit\">";
                    el += "            <div class=\"cus_cnt-field_group\">";
                    el += "                <div class=\"inner-table\">";
                    el += "                    <div class=\"inner-tablecell cus_cnt-link-label\"><label for=\"linkColor\" class=\"cus_cnt-field_group-label\"><i class=\"icon-link\"></i>按鈕顏色</label></div>";
                    el += "                    <div class=\"inner-tablecell cus_cnt-link-input\">";
                    el += "                        <div class=\"cus_cnt-link-color\">";
                    el += "                            <ul class=\"cf\">";
                    el += "                                <li class=\"cus_cnt-link-color_item color-blue active\" data-color=\"blue\"></li>";
                    el += "                                <li class=\"cus_cnt-link-color_item color-green\" data-color=\"green\"></li>";
                    el += "                                <li class=\"cus_cnt-link-color_item color-red\" data-color=\"red\"></li>";
                    el += "                                <li class=\"cus_cnt-link-color_item color-orange\" data-color=\"orange\"></li>";
                    el += "                                <li class=\"cus_cnt-link-color_item color-purple\" data-color=\"purple\"></li>";
                    el += "                            </ul>";
                    el += "                        </div>";
                    el += "                    </div>";
                    el += "                </div>";
                    el += "            </div>";
                    el += "        </div>";
                    el += "    </section>";
                    el += "    <section class=\"cus_cnt-ft\"><button class=\"btn-cuscnt btn-cuscnt-cancel\">取消</button><button class=\"btn-cuscnt btn-cuscnt-save\">儲存</button></section>";
                    el += "</div>";

                    $el.append(el);
                    return $el;
                }
                // 圖片
                else if (act == "pic") {
                    // .cus_cnt.cus_cnt-pic>.inner>(section.cus_cnt-hd>.cus_cnt-pic-upload)+(section.cus_cnt-bd>(.cus_cnt-field.cus_cnt-pic-addlink>(button.btn-cuscnt.btn-cuscnt-addcnt{新增連結}+.cus_cnt-field_group>.inner-table>(.inner-tablecell.cus_cnt-pic-label>label.cus_cnt-field_group-label[for="picLink"]{連結網址})+(.inner-tablecell.cus_cnt-pic-input>input#picLink.cus_cnt-field_group-input[type="text" placeholder="請輸入連結網址"])))+(.cus_cnt-field.cus_cnt-pic-addtxt>button.btn-cuscnt.btn-cuscnt-addcnt{新增描述文字}+(.cus_cnt-field_group>.inner-table>(.inner-tablecell.cus_cnt-pic-label>label.cus_cnt-field_group-label[for="picTxt"]{描述文字})+(.inner-tablecell.cus_cnt-pic-input>input#picTxt.cus_cnt-field_group-input[type="text" placeholder="請輸入描述文字"]))))+(section.cus_cnt-ft>(button.btn-cuscnt.btn-cuscnt-cancel{取消}+button.btn-cuscnt.btn-cuscnt-save{儲存}))
                    $el = $("<div>", { "class": "cus_cnt cus_cnt-pic" });
                    el += "    <div class=\"inner\">";
                    el += "        <section class=\"cus_cnt-hd\">";
                    el += "            <div class=\"cus_cnt-pic-upload\">";
                    el += "                <div class=\"inner center\">";
                    el += "                    <span class=\"icon_wrap\"><i class=\"icon-outbox\"></i></span>";
                    el += "                    <span class=\"txt\">上傳圖片</span>";
                    el += "                </div>";
                    el += "            </div>";
                    el += "        </section>";
                    el += "        <section class=\"cus_cnt-bd\">";
                    el += "            <div class=\"cus_cnt-field cus_cnt-pic-addlink\">";
                    el += "                <button class=\"btn-cuscnt btn-cuscnt-addcnt\"><i class=\"icon-link\"></i>新增連結</button>";
                    el += "                <div class=\"cus_cnt-field_group\">";
                    el += "                    <div class=\"inner-table\">";
                    el += "                        <div class=\"inner-tablecell cus_cnt-pic-label\">";
                    el += "                            <label for=\"picLink\" class=\"cus_cnt-field_group-label\"><i class=\"icon-link\"></i>連結網址</label>";
                    el += "                        </div>";
                    el += "                        <div class=\"inner-tablecell cus_cnt-pic-input\">";
                    el += "                            <input type=\"text\" id=\"picLink\" class=\"cus_cnt-field_group-input\" placeholder=\"請輸入連結網址\">";
                    el += "                        </div>";
                    el += "                    </div>";
                    el += "                </div>";
                    el += "            </div>";
                    el += "            <div class=\"cus_cnt-field cus_cnt-pic-addtxt\">";
                    el += "                <button class=\"btn-cuscnt btn-cuscnt-addcnt\"><i class=\"icon-description\"></i>新增描述文字</button>";
                    el += "                <div class=\"cus_cnt-field_group\">";
                    el += "                    <div class=\"inner-table\">";
                    el += "                        <div class=\"inner-tablecell cus_cnt-pic-label\">";
                    el += "                            <label for=\"picTxt\" class=\"cus_cnt-field_group-label\"><i class=\"icon-description\"></i>描述文字</label>";
                    el += "                        </div>";
                    el += "                        <div class=\"inner-tablecell cus_cnt-pic-input\">";
                    el += "                            <input type=\"text\" id=\"picTxt\" class=\"cus_cnt-field_group-input\" placeholder=\"請輸入描述文字\">";
                    el += "                        </div>";
                    el += "                    </div>";
                    el += "                </div>";
                    el += "            </div>";
                    el += "        </section>";
                    el += "        <section class=\"cus_cnt-ft\">";
                    el += "            <button class=\"btn-cuscnt btn-cuscnt-cancel\">取消</button>";
                    el += "            <button class=\"btn-cuscnt btn-cuscnt-save\">儲存</button>";
                    el += "        </section>";
                    el += "    </div>";
                    $el.append(el);
                    return $el;
                }
                // 影片
                else if (act == "video") {
                    $el = $("<div>", { "class": "cus_cnt cus_cnt-video" });
                    el += "<div class=\"inner\">";
                    el += "    <div class=\"cus_cnt-hd\">";
                    el += "        <div class=\"cus_cnt-video-cover\"><span class=\"txt\">支持 YouTube 視頻</span></div>";
                    el += "    </div>";
                    el += "    <div class=\"cus_cnt-bd\">";
                    el += "        <div class=\"cus_cnt-field cus_cnt-video-addlink js-edit\">";
                    el += "            <div class=\"cus_cnt-field_group\">";
                    el += "                <div class=\"inner-table\">";
                    el += "                    <div class=\"inner-tablecell cus_cnt-video-label\" style=\"width:25px;\">";
                    el += "                        <label for=\"videoLink\" class=\"cus_cnt-field_group-label\"><i class=\"icon-link\"></i>&nbsp;</label>";
                    el += "                    </div>";
                    el += "                    <div class=\"inner-tablecell cus_cnt-video-input\">";
                    el += "                        <input type=\"text\" id=\"videoLink\" class=\"cus_cnt-field_group-input\" placeholder=\"請輸入影片網址\">";
                    el += "                    </div>";
                    el += "                </div>";
                    el += "            </div>";
                    el += "        </div>";
                    el += "    </div>";
                    el += "    <div class=\"cus_cnt-ft\">";
                    el += "        <button class=\"btn-cuscnt btn-cuscnt-cancel\">取消</button>";
                    el += "        <button class=\"btn-cuscnt btn-cuscnt-save\">儲存</button>";
                    el += "    </div>";
                    el += "</div>";
                    $el.append(el);
                    return $el;
                } else {
                    return 0;
                }
            }

            function popupUploadElm (id) {
                var $el = $("<div>", {"class": "popup popup_upload"});
                var el = "";
                el += "<div class=\"popup_wrap\">";
                el += "    <div class=\"popup_bg\"></div>";
                el += "    <div class=\"popup_container\">";
                el += "        <div class=\"popup_content\">";
                el += "            <div class=\"popup_content-hd\">";
                el += "                <h2 class=\"popup-title\">上傳新圖片</h2>";
                el += "                <div class=\"popup-close\"></div>";
                el += "            </div>";
                el += "            <div class=\"popup_content-bd\">";
                el += "                <div class=\"inner align-center drop_wrap\">";
                el += "                    <form enctype=\"multipart/form-data\" id=\"uploadFile1\" class=\"upload_file_1\">";
                el += "                        <div class=\"dropDrag\">";
                el += "                            <div class=\"drop_txt\">將圖片拖至此處</div>";
                el += "                            <div class=\"or_txt\">或</div>";
                el += "                        </div>";
                el += "                        <div class=\"preview_file\">";
                el += "                            <div class=\"pic\"><img src=\"\" alt=\"\"></div>";
                el += "                        </div>";
                el += "                        <div class=\"upload_file\">";
                el += "                            <label for=\"upload-\" class=\"form-control upload_file-label\">選擇檔案</label>";
                el += "                            <input type=\"file\" name=\"file\" id=\"upload-\" class=\"upload_file-input\">";
                el += "                        </div>";
                el += "                    </form>";
                el += "                    <div class=\"or_txt\">或</div>";
                el += "                    <div class=\"file_url\">";
                el += "                        <input type=\"text\" name=\"\" id=\"fileUrl\" class=\"file_url-input\" placeholder=\"輸入圖片網址\">";
                el += "                        <button class=\"file_url-btn btn btn--primary\">確定</button>";
                el += "                    </div>";
                el += "                    <p class=\"exp\">接受檔案類型： gif, jpeg, png, bmp, ico, svg　檔案上限為 10 MB</p>";
                el += "                </div>";
                el += "            </div>";
                el += "        </div>";
                el += "    </div>";
                el += "</div>";
                $el.append(el);
                return $el;
            }


            return {
                init: function() {
                    var _ = this;
                    // console.log($editContainer);
                    _.editUpdate(1);
                    _.select();
                },

                getRowLen: function(block){
                    if (verNum == 1 || verNum == 3) {
                        var VCrow = block.parents(".vc-col").find('.vc-row').length;
                    }
                    else if (verNum == 2) {
                        var VCrow = block.parents(".version_container").find('.vc-row').length;
                    }

                    return VCrow;
                },

                setBlockId: function(block, version){
                    if (verNum == 1 || verNum == 3) {
                        var row = block.parents(".vc-row").data('row');
                        var col = block.parents(".vc-col").data('col');
                        block.attr('id', version + "-" + row + "-" + col);
                    }
                    else if (verNum == 2) {
                        var row = block.parents(".vc-row").data('row');
                        block.attr('id', version + "-" + row + "-1");
                    }
                },


                // >>> jobBankUI.version.editUpdate
                editUpdate: function(version) {
                    var _ = this;
                    verNum = version;
                    $editContainer.append(jobBankUI.versionElm(verNum));
                    $block = $editContainer.find('.version_block:not(.add)');
                    var blockLen = $block.length;

                    $block.each(function(index, el) {
                        _.setBlockId($(el), verNum);
                        // 沒有內容，就加上"編輯區塊"的按鈕
                        if (!$(el).has('.cus_cnt').length) {
                            btnEdit($(el), $(el).attr('id'));
                        }

                    });

                    _.showEditTool("init");
                    _.showEditTool("add-block");
                },

                // 選擇版型，給總寬
                // >>> jobBankUI.version.select
                select: function() {
                    var _ = this;
                    var $selectItem = $(".version_select_item");
                    var selectItemLen = $(".version_select_item").length;
                    // var item_w = $(".version_select_item").outerWidth();
                    var item_w = 0;
                    for (var i = 0; i < selectItemLen; i++) {
                        item_w = item_w + $selectItem.eq(i).outerWidth();
                    }

                    $(".version_select_list ul").width(item_w + 16 * selectItemLen);

                    $(".version_select_list").mCustomScrollbar({
                        axis:"x"
                    });


                    $selectItem.click(function(event) {
                        var thisVer = $(this).data('version');

                        if (!$(this).hasClass('js-active')) {
                            $selectItem.removeClass("js-active");
                            $(this).addClass('js-active');

                            TweenMax.fromTo($editContainer.children(".version_wrap"), 0.3, {
                                opacity: '1'
                            }, {
                                opacity: '0',
                                onComplete: function() {
                                    $editContainer.children(".version_wrap").remove();
                                    _.editUpdate(thisVer);
                                }
                            });
                        }
                    });
                },

                // 按下「編輯區塊」後，開關 編輯選項
                // >>> jobBankUI.version.showEditTool
                showEditTool: function(state) {
                    var _ = this;
                    var $btn;
                    if (state == "init") {
                        $btn = $(".btn-edit");
                    }
                    else if ($(state).length) {
                        $btn = $(state).find('.btn-edit');
                    }
                    else if (state == "add-block") {
                        $btn = $("."+state);
                    }

                    $btn.click(function(event) {
                        var self = $(this);
                        var id = self.data('id');
                        var $block = self.parent(".version_block");

                        if (!$block.hasClass('js-showEditTool')) {
                            $(".version_block").removeClass('js-showEditTool');
                            jobBankUI.showHideRemoveElm($(".editor_tool"), "hidden");

                            $block.addClass('js-showEditTool');
                            self.after(editorToolElm());
                            jobBankUI.showHideRemoveElm(self.next(".editor_tool"), "show");
                            _.customContent($block, id);
                        } else {
                            $block.removeClass('js-showEditTool');
                            jobBankUI.showHideRemoveElm(self.next(".editor_tool"), "hidden");
                        }
                    });
                },

                // 自訂內容編輯框
                // >>> jobBankUI.version.customContent
                customContent: function(block, id) {
                    var _ = this;
                    $(".editor_tool-btn").click(function(event) {
                        var act = $(this).data('act');
                        // TODO:附件、簡報
                        if (act == "annex" || act == "briefing") {
                            return 0;
                        }
                        var $block = block;
                        $block.attr('data-type', act);
                        // var $block = $(this).parents(".version_block");
                        var id = $block.attr('id');

                        $(".version_block").removeClass('js-showEditTool');

                        // 移除"編輯區塊"的工具提示框
                        jobBankUI.showHideRemoveElm($block.find(".editor_tool"), "hidden");

                        // SHOW 自訂內容的編輯框等等
                        if ($block.hasClass('add')) {
                            var rowLen = _.getRowLen($block);
                            var $addblock = $("<div/>", {"class": "version_block editing", "data-type": act});
                            $block.parent(".version_container-row")
                            .before($("<div/>", {"class":"version_container-row vc-row js-add", "data-row": ++rowLen})
                                    .append($addblock)
                                    );
                            _.setBlockId($addblock, verNum);
                            var aid = $addblock.attr('id');
                            $addblock.append(cusCntElm(aid, act));
                            $addblock.find(".btn-cuscnt").click(function(event) {
                                $(this).parent(".cus_cnt-field").addClass('js-edit');
                            });
                            _.cusCntControll($addblock, act);

                        }
                        else {
                            // 移除"編輯區塊"的按鈕
                            $block.addClass('editing').find('.btn-edit').remove();
                            $block.append(cusCntElm(id, act));
                            $block.find(".btn-cuscnt").click(function(event) {
                                $(this).parent(".cus_cnt-field").addClass('js-edit');
                            });
                            _.cusCntControll($block, act);
                        }

                        // 取消
                        _.cusCntCancelClick();
                    });
                },

                // >>> jobBankUI.version.cusCntControll
                cusCntControll: function(block, act){
                    var _ = this;

                    var $block = block;
                    var id = $block.attr('id');
                    // var act = $block.data('type');
                    var cus_cnt_data = new Array();
                    var blockObj = new Object(); // 區塊DATA
                    var cntObj = new Object(); // 內容(依區塊不同而不同)

                    var pos = id;
                    var type = act;
                    blockObj.pos = pos;
                    blockObj.type = type;
                    blockObj.cnt = new Array();

                    // 標題、副標題、內文
                    if (act == "title" || act == "subtitle" || act == "content") {
                        var align = "left";  //default
                        var $txtAlign = $block.find(".txt_align .txt_tool");
                        $block.find(".txt_align .txt_tool-btn").click(function(event) {
                            $txtAlign.removeClass('active');
                            $(this).parent(".txt_tool").addClass('active');
                            align = $(this).parent(".txt_tool").data('align');
                        });
                        // 按下"儲存"按鈕
                        $block.find(".btn-cuscnt-save").click(function(event) {
                            // var $block = $(this).parents(".version_block");
                            _.cusCntTextSave($block, id, act, cus_cnt_data, blockObj, cntObj, align);
                        });
                    }
                    // 連結
                    else if (act == "link") {
                        var color = "blue"; // default
                        var $colorItem = $block.find(".cus_cnt-link-color_item");
                        // 選擇顏色
                        $colorItem.click(function(event) {
                            $colorItem.removeClass('active');
                            $(this).addClass('active');
                            color = $(this).data('color');
                        });

                        // 按下"儲存"按鈕
                        $block.find(".btn-cuscnt-save").click(function(event) {
                            _.cntCntLinkSave($block, id, act, cus_cnt_data, blockObj, cntObj, color);
                        });
                    }
                    // 圖片
                    else if (act == "pic") {
                        var $upload = $block.find('.cus_cnt-pic-upload');
                        var file_name;
                        $upload.click(function(event) {
                            var $el = popupUploadElm(id);
                            $("body").prepend($el);
                            TweenMax.fromTo($el, 0.3, {
                                opacity: '0'
                            }, {
                                opacity: '1'
                            });



                            var $form = $("#uploadFile1");
                            var $dropWrap = $(".drop_wrap");
                            var form_data;
                            var isAdvancedUpload = function() {
                              var div = document.createElement('div');
                              return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
                            }();

                            if (!isAdvancedUpload) {
                                $(".dropDrag").hide();
                            }
                            else {

                                // 拖曳上傳
                                var droppedFiles = false;

                                $dropWrap.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
                                  e.preventDefault();
                                  e.stopPropagation();
                                })
                                .on('dragover dragenter', function() {
                                  $dropWrap.addClass('is-dragover');
                                })
                                .on('dragleave dragend drop', function() {
                                  $dropWrap.removeClass('is-dragover');
                                })
                                .on('drop', function(e) {
                                    droppedFiles = e.originalEvent.dataTransfer.files;
                                    console.log(droppedFiles[0]);

                                    var reader = new FileReader();
                                    var img = new Image();

                                    reader.onload = function(e) {

                                        img.src = e.target.result;
                                        img.onload = function () {
                                            var imgWidth = this.width,
                                                imgHeight = this.height;
                                            // 上傳圖片的寬高
                                            if(imgWidth > imgHeight && imgWidth > 300){
                                                imgWidth = 300;
                                                imgHeight = Math.ceil(300 * this.height / this.width);
                                            }else if(imgWidth < imgHeight && imgHeight > 289){
                                                // imgWidth = Math.ceil(289 * this.width / this.height);
                                                // imgHeight = 289;
                                            }

                                            var canvas = document.createElement("canvas"),
                                            ctx = canvas.getContext('2d');
                                            canvas.width = imgWidth;
                                            canvas.height = imgHeight;
                                            // if(Orientation && Orientation != 1){
                                            //     switch(Orientation){
                                            //         case 6:     // 旋转90度
                                            //             canvas.width = imgHeight;
                                            //             canvas.height = imgWidth;
                                            //             ctx.rotate(Math.PI / 2);
                                            //             // (0,-imgHeight) 从旋转原理图那里获得的起始点
                                            //             ctx.drawImage(this, 0, -imgHeight, imgWidth, imgHeight);
                                            //             break;
                                            //         case 3:     // 旋转180度
                                            //             ctx.rotate(Math.PI);
                                            //             ctx.drawImage(this, -imgWidth, -imgHeight, imgWidth, imgHeight);
                                            //             break;
                                            //         case 8:     // 旋转-90度
                                            //             canvas.width = imgHeight;
                                            //             canvas.height = imgWidth;
                                            //             ctx.rotate(3 * Math.PI / 2);
                                            //             ctx.drawImage(this, -imgWidth, 0, imgWidth, imgHeight);
                                            //             break;
                                            //     }
                                            // }else{
                                                ctx.drawImage(this, 0, 0, imgWidth, imgHeight);
                                            // }
                                            name = droppedFiles[0].name;
                                            previewFile(canvas.toDataURL(), name);

                                        }
                                        // $('.file_upload-preview').append(img);
                                    }
                                    reader.readAsDataURL(droppedFiles[0]);

                                    form_data = new FormData();
                                    form_data.append('file', droppedFiles[0]);
                                });
                            }

                            // input 上傳
                            $("#upload-").change(function(event) {
                                var input = this;
                                var allowed = ["jpg", "jpeg", "png", "gif", "bmp", "ico", "svg"];
                                var found = false;

                                console.log(input);
                                allowed.forEach(function(extension) {
                                    if (input.files[0].type.match('image/' + extension)) {
                                        found = true;
                                    }
                                })

                                if (found) {
                                    if (input.files && input.files[0]) {
                                        console.log(input.files);
                                        var reader = new FileReader();

                                        reader.onload = function(e) {
                                            var img_preview = e.target.result;
                                            name = input.files[0].name;
                                            previewFile(img_preview, name);

                                        }

                                        reader.readAsDataURL(input.files[0]);
                                        form_data = new FormData();
                                        form_data.append('file',input.files[0]);
                                    }
                                    else {
                                    }
                                    $(".err_txt").text("");
                                }
                                else {
                                    $(".err_txt").text("檔案格式不正確!!");
                                }
                            });

                            // $(".file_url-btn").click(function(event) {
                            //     close($el);
                            //     // console.log(form_data);
                            //     for (var pair of form_data.entries()) {
                            //         console.log(pair[0]+ ', ' + pair[1]); 
                            //     }
                            // });
                            function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

                            function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

                            function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

                            $(".file_url-btn").click(function (event) {
                              close($el); // console.log(form_data);

                              var _iterator = _createForOfIteratorHelper(form_data.entries()),
                                  _step;

                              try {
                                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                                  var pair = _step.value;
                                  console.log(pair[0] + ', ' + pair[1]);
                                }
                              } catch (err) {
                                _iterator.e(err);
                              } finally {
                                _iterator.f();
                              }
                            });


                            $(".popup-close").click(function(event) {
                                close($el);
                            });

                            function close(el) {
                                TweenMax.fromTo(el, 0.3, {
                                    opacity: '1'
                                }, {
                                    opacity: '0',
                                    onComplete: function() {
                                        el.remove();
                                    }
                                });
                            }

                            function previewFile(src, alt){
                                $imgPreview = $("<img/>", {"src": src, "alt": alt});
                                $imgPreview2 = $("<img/>", {"src": src, "alt": alt});
                                console.log(src);

                                $(".preview_file").show();
                                $(".preview_file .pic").html('').append($imgPreview);
                                $upload.next(".cus_cnt-pic-preview").remove();
                                $upload.after($("<div>", {"class":"cus_cnt-pic-preview"}).append($imgPreview2));
                            }
                        });
                        // 按下"儲存"按鈕
                        $block.find(".btn-cuscnt-save").click(function(event) {
                            _.cusCntPicSave($block, id, act, cus_cnt_data, blockObj, cntObj);
                        });
                    }
                    // 影片
                    else if (act == "video"){
                        // youtube thumbnail
                        // 自動擷取youtube縮圖
                        var youtube_id = "";
                        $block.find('.cus_cnt-field_group-input').blur(function(event) {
                            var url = $(this).val();
                            var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
                            var match = url.match(regExp);
                            var thumbnail = "";
                            if (match&&match[7].length==11){
                              // b1.src='https://img.youtube.com/vi/' + match[7] + '/0.jpg';
                              // b2.src='https://img.youtube.com/vi/' + match[7] + '/1.jpg';
                              // b3.src='https://img.youtube.com/vi/' + match[7] + '/2.jpg';
                              // b4.src='https://img.youtube.com/vi/' + match[7] + '/3.jpg';
                              // thumbnail='https://img.youtube.com/vi/' + match[7] + '/hqdefault.jpg';
                              // thumbnail='https://img.youtube.com/vi/' + match[7] + '/mqdefault.jpg';
                              thumbnail='https://img.youtube.com/vi/' + match[7] + '/maxresdefault.jpg';

                              youtube_id = match[7];
                            }
                            $block.find('.cus_cnt-video-cover').append($("<img>", {"src":thumbnail}));
                            console.log(thumbnail);
                        });

                        // 按下"儲存"按鈕
                        $block.find(".btn-cuscnt-save").click(function(event) {
                            _.cntCntVideoSave($block, id, act, cus_cnt_data, blockObj, cntObj, youtube_id);
                        });
                    }
                    else if (act == "annex") {

                    }
                },

                // 儲存(區塊-標題、副標題、內文)
                // >>> jobBankUI.version.cusCntTextSave
                cusCntTextSave: function (block, id, act, cus_cnt_data, blockObj, cntObj, align) {
                    var _ = this;
                    // 取值
                    var txt = block.find("#"+act+"Field-"+id).val();

                    var errMsg, $focusInp = $("#"+act+"Field-"+id);
                    if (act == "title") {
                        errMsg = "請輸入標題";
                    }
                    else if (act == "subtitle") {
                        errMsg = "請輸入副標題";
                    }
                    else if (act == "content") {
                        errMsg = "請輸入內文";
                    }
                    if (txt == '') {
                        $focusInp.focus();
                        jobBankUI.notice(errMsg);
                        return 0;
                    }

                    block.find('.btn-cuscnt-save').attr('disabled', true);

                    cntObj.txt = txt;
                    cntObj.align = align;

                    blockObj.cnt.push(cntObj);
                    cus_cnt_data.push(blockObj);

                    // 自訂內容之DATA (JSON 格式)
                    var tempDataStr = JSON.stringify(cus_cnt_data);
                    console.log(tempDataStr);
                    _.setTempData(block, tempDataStr);
                    _.cusCntTextView(block, cntObj);
                },

                // 儲存後顯示畫面
                // >>> jobBankUI.version.cusCntTextView
                cusCntTextView: function(block, cntObj){
                    var txt = cntObj.txt;
                    var align = cntObj.align;
                    block.removeClass("editing").addClass('view');
                    block.find('.cus_cnt-field input').hide();
                    block.find('.cus_cnt-field textarea').hide();
                    block.find('.cus_cnt-field').append($("<div class=\"cus_cnt_data align-"+align+"\">"+txt+"</div>"));
                    jobBankUI.showHideRemoveElm(block.find('.cus_cnt-ft'), "hidden");
                    jobBankUI.showHideRemoveElm(block.find('.cus_cnt-txt_tool'), "hidden");
                },

                // 儲存(區塊-連結)
                // >>> jobBankUI.version.cntCntLinkSave
                cntCntLinkSave: function(block, id, act, cus_cnt_data, blockObj, cntObj, color){
                    var _ = this;
                    var url = block.find('#linkUrl').val();
                    var txt = block.find("#linkTxt").val();
                    if (url == "") {
                        block.find('#linkUrl').focus();
                        jobBankUI.notice("請輸入連結網址");
                        return 0;
                    }
                    if (txt == "") {
                        block.find('#linkTxt').focus();
                        jobBankUI.notice("請輸入按鈕文字");
                        return 0;
                    }
                    block.find('.btn-cuscnt-save').attr('disabled', true);

                    cntObj.url = url;
                    cntObj.txt = txt;
                    cntObj.color = color;

                    blockObj.cnt.push(cntObj);
                    cus_cnt_data.push(blockObj);
                    // 自訂內容之DATA (JSON 格式)
                    var tempDataStr = JSON.stringify(cus_cnt_data);
                    console.log(tempDataStr);
                    _.setTempData(block, tempDataStr);
                    _.cntCntLinkView(block, cntObj);
                },

                cntCntLinkView: function(block, cntObj){
                    var url, txt, color;
                    url = cntObj.url;
                    txt = cntObj.txt;
                    color = cntObj.color;
                    block.removeClass("editing").addClass('view');

                    var el = "";
                    el += "<div class=\"cus_cnt cus_cnt-link cus_cnt_view\">";
                    el += "    <div class=\"inner\">";
                    el += "        <div class=\"cus_cnt-link-view color-"+color+"\">";
                    el += "            <a href=\""+url+"\" class=\"link-txt\" target=\"_blank\">"+txt+"</a>";
                    el += "        </div>";
                    el += "    </div>";
                    el += "</div>";

                    block.find(".cus_cnt-link").hide();
                    jobBankUI.showHideRemoveElm(block.append($(el)), "show");
                },

                // 儲存(區塊-圖片)
                // >>> jobBankUI.version.cusCntPicSave
                cusCntPicSave: function(block, id, act, cus_cnt_data, blockObj, cntObj) {
                    var _ = this;
                    var url = block.find('#picLink').val();
                    var txt = block.find("#picTxt").val();
                    var src = block.find('img').attr('src');
                    if (src == "") {
                        jobBankUI.notice("請上傳圖片");
                        return 0;
                    }
                    block.find('.btn-cuscnt-save').attr('disabled', true);

                    cntObj.file_src = src;
                    cntObj.url = url;
                    cntObj.txt = txt;

                    blockObj.cnt.push(cntObj);
                    cus_cnt_data.push(blockObj);
                    // 自訂內容之DATA (JSON 格式)
                    var tempDataStr = JSON.stringify(cus_cnt_data);
                    console.log(tempDataStr);
                    _.setTempData(block, tempDataStr);
                    _.cntCntPicView(block, cntObj);
                },

                cntCntPicView: function(block, cntObj){
                    var file_src = cntObj.file_src;
                    var url = cntObj.url;
                    var txt = cntObj.txt;
                    block.removeClass("editing").addClass('view');

                    var el = "";
                    el += "<div class=\"cus_cnt cus_cnt-pic cus_cnt_view\">";
                    el += "    <a href=\""+url+"\" target=\"_blank\" class=\"inner\">";
                    el += "        <figure class=\"cus_cnt-pic-figure\">";
                    el += "            <div class=\"cus_cnt-pic-preview\">";
                    el += "                <img src=\""+file_src+"\" alt=\""+txt+"\">";
                    el += "            </div>";
                    el += "            <figcaption class=\"cus_cnt-pic-figcaption\">"+txt+"</figcaption>";
                    el += "        </figure>";
                    el += "    </a>";
                    el += "</div>";
                    block.find(".cus_cnt-pic").hide();
                    jobBankUI.showHideRemoveElm(block.append($(el)), "show");

                },

                cntCntVideoSave: function(block, id, act, cus_cnt_data, blockObj, cntObj, youtube_id) {
                    var _ = this;
                    cntObj.youtube_id = youtube_id;

                    blockObj.cnt.push(cntObj);
                    cus_cnt_data.push(blockObj);
                    // 自訂內容之DATA (JSON 格式)
                    var tempDataStr = JSON.stringify(cus_cnt_data);
                    console.log(tempDataStr);
                    _.setTempData(block, tempDataStr);
                    _.cntCntVideoView(block, cntObj);
                },

                cntCntVideoView: function(block, cntObj){
                    var el = "";
                    el += "<div class=\"cus_cnt cus_cnt_view cus_cnt-video\">";
                    el += "    <div class=\"inner\">";
                    el += "        <div class=\"cus_cnt-video-cover\">";
                    el += "            <iframe src=\"https://www.youtube.com/embed/"+cntObj.youtube_id+"\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"\"></iframe>";
                    el += "        </div>";
                    el += "    </div>";
                    el += "</div>";
                    block.find(".cus_cnt-video").hide();
                    jobBankUI.showHideRemoveElm(block.append($(el)), "show");
                },

                // >>> jobBankUI.version.setTempData
                setTempData: function(block, tempDataStr){
                    var $input = $("<input>", { "type": "hidden" });
                    if (block.has("input.cusCntValue")) {
                        block.find('input.cusCntValue').remove();
                    }
                    // 插入input.cusCntValue 並去掉字串:"["和"]"
                    block.append($input.attr('class', "cusCntValue").val(tempDataStr.substring(1, tempDataStr.length-1)));
                },

                // 按下"取消"按鈕
                // >>> jobBankUI.version.cusCntCancelClick
                cusCntCancelClick: function(){
                    var _ = this;
                    $(".btn-cuscnt-cancel").click(function(event) {
                        var self = $(this);
                        var $block = self.parents(".version_block");
                        var $row = self.parents(".vc-row");
                        var $vccol;
                        var col;
                        $block.attr('data-type', '');
                        if (verNum == 2) {
                            $vccol = self.parents(".version_container");
                            col = 1;
                            return;
                        }
                        // else {
                            $vccol = self.parents(".vc-col");
                            col = $vccol.data('col');
                        // }

                        if ($row.hasClass('js-add')) {
                            jobBankUI.showHideRemoveElm($row, "hidden");
                            return;
                        }
                        // else {
                            jobBankUI.showHideRemoveElm($block.find('.cus_cnt'), "hidden");
                            btnEdit($block, $block.attr('id'));
                            _.showEditTool($block);
                            $block.removeClass('editing js-showEditTool');
                        // }

                        // console.log(_.getRowLen($block));
                        console.log(verNum);

                        return new Promise(function(resolve) {
                          setTimeout(function() {
                            var $vcrow = $vccol.find(".vc-row");
                            var rowLen = $vcrow.length;
                            // console.log($vcrow);
                            console.log(rowLen);
                            for (var i = 1; i <= rowLen; i++) {
                                $vcrow.eq(i-1).attr('data-row', i).find('.version_block').attr('id', verNum + "-" + i + "-" + col);
                                // console.log($vcrow.eq(i));
                            }
                          } , 500);
                        });
                    });
                },



                addBlockBar: function() {

                }

            }
        },

        /**
         * -------------------------------------------------------------------------------------
         * >> jobBankUI.plusEffectComplete 版型完成
         */
        plusEffectComplete: function(){
            function picElm(id, file_src, url, txt){
                var el = "";
                el += "<div class=\"cus_cnt cus_cnt-pic cus_cnt_view\">";
                if (url == "") {
                el += "    <div class=\"inner\">";
                }
                else {
                el += "    <a href=\""+url+"\" target=\"_blank\" class=\"inner\">";
                }
                el += [
                    "<figure class=\"cus_cnt-pic-figure\">",
                    "    <div class=\"cus_cnt-pic-preview\">",
                    "        <img src=\""+file_src+"\" alt=\""+txt+"\">",
                    "    </div>",
                    "    <figcaption class=\"cus_cnt-pic-figcaption\">"+txt+"</figcaption>",
                    "</figure>",
                ].join('');
                if (url == "") {
                el += "    </div>";
                }else{
                el += "    </a>";
                }
                el += "</div>";


                return el;
            }

            function titleElm(id, txt, align){
                var el = "\
                        <div class=\"cus_cnt cus_cnt_view cus_cnt-title cus_cnt_text\">\
                            <div class=\"inner\">\
                                <div class=\"cus_cnt-field cus_cnt-title-field js-edit\">\
                                    <div class=\"cus_cnt_data align-"+align+"\">"+txt+"</div>\
                                </div>\
                            </div>\
                        </div>";
                return el;
            }
            function subtitleElm(id, txt, align){
                var el = "";
                el += "<div class=\"cus_cnt cus_cnt_view cus_cnt-subtitle cus_cnt_text\">";
                el += "    <div class=\"inner\">";
                el += "        <div class=\"cus_cnt-field cus_cnt-subtitle-field js-edit\">";
                el += "            <div class=\"cus_cnt_data align-"+align+"\">"+txt+"</div>";
                el += "        </div>";
                el += "    </div>";
                el += "</div>";
                return el;
            }
            function contentElm(id, txt, align){
                var el = "";
                el += "<div class=\"cus_cnt cus_cnt-content cus_cnt_text\">";
                el += "    <div class=\"inner\">";
                el += "        <div class=\"cus_cnt-field cus_cnt-content-field js-edit\">";
                el += "            <div class=\"cus_cnt_data align-"+align+"\">"+txt+"</div>";
                el += "        </div>";
                el += "    </div>";
                el += "</div>";
                return el;
            }
            function videoElm(id, yt_id){
                var el = [
                    '<div class="cus_cnt cus_cnt_view cus_cnt-video">',
                    '    <div class="inner">',
                    '        <div class="cus_cnt-video-cover">',
                    '            <iframe src="https://www.youtube.com/embed/'+yt_id+'" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    '        </div>',
                    '    </div>',
                    '</div>'
                ].join('');
                return el;
            }

            function linkElm(id, url, txt, color){
                var el = [
                    '<div class="cus_cnt cus_cnt-link cus_cnt_view">',
                    '    <div class="inner">',
                    '        <div class="cus_cnt-link-view color-'+color+'">',
                    '            <a href="'+url+'" class="link-txt" target="_blank">'+txt+'</a>',
                    '        </div>',
                    '    </div>',
                    '</div>'
                ].join('');
                return el;
            }
            return {
                // >>> jobBankUI.versionComplete.showData
                showData: function(block, id, data) {
                    var pos = data.filter(function(o) {
                        return o.pos === id;
                    });

                    var type = pos[0].type;
                    var cnt = pos[0].cnt[0];
                    block.attr("data-type", type);

                    switch (type) {
                        case "pic":
                            block.append(picElm(id, cnt.file_src, cnt.url, cnt.txt));
                            break;
                        case "title":
                            block.append(titleElm(id, cnt.txt, cnt.align));
                            break;
                        case "subtitle":
                            block.append(subtitleElm(id, cnt.txt, cnt.align));
                            break;
                        case "content":
                            block.append(contentElm(id, cnt.txt, cnt.align));
                            break;
                        case "video":
                            block.append(videoElm(id, cnt.youtube_id));
                            break;
                        case "link":
                            block.append(linkElm(id, cnt.url, cnt.txt, cnt.color));
                            break;
                    }
                    // for (var i = 0; i < data.length; i++) {
                    //     if (id == data[i].pos) {
                    //         var type = data[i].type;
                    //         block.attr('data-type', type);

                    //         var cnt = data[i].cnt[0];

                    //         switch (type) {
                    //             case "pic":
                    //                 block.append(picElm(id, cnt.file_src, cnt.url, cnt.txt));
                    //                 break;
                    //             case "title":
                    //                 block.append(titleElm(id, cnt.txt, cnt.align));
                    //                 break;
                    //             case "subtitle":
                    //                 block.append(subtitleElm(id, cnt.txt, cnt.align));
                    //                 break;
                    //             case "content":
                    //                 block.append(contentElm(id, cnt.txt, cnt.align));
                    //                 break;
                    //             case "video":
                    //                 block.append(videoElm(id, cnt.youtube_id));
                    //                 break;
                    //             case "link":
                    //                 block.append(linkElm(id, cnt.url, cnt.txt, cnt.color));
                    //                 break;
                    //         }
                    //     }
                    // }
                }
            }
        }
    }
}(window, jQuery));




$(function() {

});
