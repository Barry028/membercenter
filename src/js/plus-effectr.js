var plusEffectr = (function(window, jQuery) {
    if (!window.jQuery) {
        throw new Error("plusEffectr requires jQuery")
    }
    var $ = window.jQuery;
    var _this = this;

    return {
        // 加分亮點 - 版型內容 //
        versionElm: function(version, hasData) {
            var $el = "";
            var el = "";
            var isComplete = hasData ? "complete" : '';

            if (version == 1) {
                $el = $("<article>", {
                    "class": "row version_wrap version_wrap-ver1" + isComplete + ""
                });
                el += "<div class=\"col-lg-12 vc-col\" data-col=\"1\">";
                el += "    <div class=\"version_container-row vc-row\" data-row=\"1\">";
                el += "        <div class=\"version_block\"></div>";
                el += "    </div>";
                if (!hasData) {
                    el += "<div class=\"version_container-row\">";
                    el += "    <div class=\"version_block add\">";
                    el += "        <button class=\"btn--add--block add-block\">";
                    el += "            <span class=\"inner\"></span>";
                    el += "        </button>";
                    el += "    </div>";
                    el += "</div>";
                }
                el += "</div>";
                $el.append(el);

            } else if (version == 2) {
                $el = $("<article>", {
                    "class": "row version_wrap version_wrap-ver2" + isComplete + ""
                });
                el += "<div class=\"col-lg-12 vc-col\" data-col=\"2\">";
                el += "    <div class=\"version_container-row vc-row version_container-hd\" data-row=\"1\">";
                el += "        <div class=\"version_block\"></div>";
                el += "    </div>";
                el += "    <div class=\"version_container-row vc-row version_container-bd\" data-row=\"2\">";
                el += "        <div class=\"version_block\"></div>";
                el += "    </div>";
                if (!hasData) {
                    el += "<div class=\"version_container-row\">";
                    el += "    <div class=\"version_block add\">";
                    el += "        <button class=\"btn--add--block add-block\">";
                    el += "            <span class=\"inner\"></span>";
                    el += "        </button>";
                    el += "    </div>";
                    el += "</div>";
                }
                el += "</div>";
                $el.append(el);

            } else if (version == 3) {
                $el = $("<article>", {
                    "class": "row version_wrap version_wrap-ver3" + isComplete + ""
                });
                el += "<div class=\"col-lg-4 col-sm-6 col-xs-12 vc-col\" data-col=\"1\">";
                el += "    <div class=\"version_container-row vc-row version_container-hd\" data-row=\"1\">";
                el += "        <div class=\"version_block\"></div>";
                el += "    </div>";
                el += "    <div class=\"version_container-row vc-row version_container-bd\" data-row=\"2\">";
                el += "        <div class=\"version_block\"></div>";
                el += "    </div>";
                if (!hasData) {
                    el += "<div class=\"version_container-row\">";
                    el += "    <div class=\"version_block add\">";
                    el += "        <button class=\"btn--add--block add-block\">";
                    el += "            <span class=\"inner\"></span>";
                    el += "        </button>";
                    el += "    </div>";
                    el += "</div>";
                }
                el += "</div>";
                el += "<div class=\"col-lg-8 col-sm-6 col-xs-12 vc-col\" data-col=\"2\">";
                el += "    <div class=\"version_container-row vc-row version_container-hd\" data-row=\"1\">";
                el += "        <div class=\"version_block\"></div>";
                el += "    </div>";
                el += "    <div class=\"version_container-row vc-row version_container-bd\" data-row=\"2\">";
                el += "        <div class=\"version_block\"></div>";
                el += "    </div>";
                if (!hasData) {
                    el += "<div class=\"version_container-row\">";
                    el += "    <div class=\"version_block add\">";
                    el += "        <button class=\"btn--add--block add-block\">";
                    el += "            <span class=\"inner\"></span>";
                    el += "        </button>";
                    el += "    </div>";
                    el += "</div>";
                }
                el += "</div>";

                $el.append(el);

            } else if (version == 4) {
                $el = $("<article>", {
                    "class": "row version_wrap version_wrap-ver5" + isComplete + ""
                });
                el += "<div class=\"col-lg-6 col-xs-12 vc-col\" data-col=\"1\">";
                el += "    <div class=\"version_container-row vc-row version_container-hd\" data-row=\"1\">";
                el += "        <div class=\"version_block\"></div>";
                el += "    </div>";
                el += "    <div class=\"version_container-row vc-row version_container-bd\" data-row=\"2\">";
                el += "        <div class=\"version_block\"></div>";
                el += "    </div>";
                if (!hasData) {
                    el += "<div class=\"version_container-row\">";
                    el += "    <div class=\"version_block add\">";
                    el += "        <button class=\"btn--add--block add-block\">";
                    el += "            <span class=\"inner\"></span>";
                    el += "        </button>";
                    el += "    </div>";
                    el += "</div>";
                }
                el += "</div>";
                el += "<div class=\"col-lg-6 col-xs-12 vc-col\" data-col=\"2\">";
                el += "    <div class=\"version_container-row vc-row version_container-hd\" data-row=\"1\">";
                el += "        <div class=\"version_block\"></div>";
                el += "    </div>";
                el += "    <div class=\"version_container-row vc-row version_container-bd\" data-row=\"2\">";
                el += "        <div class=\"version_block\"></div>";
                el += "    </div>";
                if (!hasData) {
                    el += "<div class=\"version_container-row\">";
                    el += "    <div class=\"version_block add\">";
                    el += "        <button class=\"btn--add--block add-block\">";
                    el += "            <span class=\"inner\"></span>";
                    el += "        </button>";
                    el += "    </div>";
                    el += "</div>";
                }
                el += "</div>";

                $el.append(el);

            } else if (version == 5) {
                $el = $("<article>", {
                    "class": "row version_wrap version_wrap-ver4" + isComplete + ""
                });
                el += "<div class=\"col-lg-4 col-xs-12 vc-col\" data-col=\"1\">";
                el += "    <div class=\"version_container-row vc-row version_container-hd\" data-row=\"1\">";
                el += "        <div class=\"version_block\"></div>";
                el += "    </div>";
                el += "    <div class=\"version_container-row vc-row version_container-bd\" data-row=\"2\">";
                el += "        <div class=\"version_block\"></div>";
                el += "    </div>";
                if (!hasData) {
                    el += "<div class=\"version_container-row\">";
                    el += "    <div class=\"version_block add\">";
                    el += "        <button class=\"btn--add--block add-block\">";
                    el += "            <span class=\"inner\"></span>";
                    el += "        </button>";
                    el += "    </div>";
                    el += "</div>";
                }
                el += "</div>";
                el += "<div class=\"col-lg-4 col-xs-12 vc-col\" data-col=\"2\">";
                el += "    <div class=\"version_container-row vc-row version_container-hd\" data-row=\"1\">";
                el += "        <div class=\"version_block\"></div>";
                el += "    </div>";
                el += "    <div class=\"version_container-row vc-row version_container-bd\" data-row=\"2\">";
                el += "        <div class=\"version_block\"></div>";
                el += "    </div>";
                if (!hasData) {
                    el += "<div class=\"version_container-row\">";
                    el += "    <div class=\"version_block add\">";
                    el += "        <button class=\"btn--add--block add-block\">";
                    el += "            <span class=\"inner\"></span>";
                    el += "        </button>";
                    el += "    </div>";
                    el += "</div>";
                }
                el += "</div>";
                el += "<div class=\"col-lg-4 col-xs-12 vc-col\" data-col=\"3\">";
                el += "    <div class=\"version_container-row vc-row version_container-hd\" data-row=\"1\">";
                el += "        <div class=\"version_block\"></div>";
                el += "    </div>";
                el += "    <div class=\"version_container-row vc-row version_container-bd\" data-row=\"2\">";
                el += "        <div class=\"version_block\"></div>";
                el += "    </div>";
                if (!hasData) {
                    el += "<div class=\"version_container-row\">";
                    el += "    <div class=\"version_block add\">";
                    el += "        <button class=\"btn--add--block add-block\">";
                    el += "            <span class=\"inner\"></span>";
                    el += "        </button>";
                    el += "    </div>";
                    el += "</div>";
                }
                el += "</div>";

                $el.append(el);

            }
            return $el;
        },

        // 版型選擇 - 編輯區塊 //
        version: function() {

            var $editContainer = $(".version_edit-container");
            var verNum;

            function btnEdit(appendEl, id) {
                appendEl.append($("<button data-id=\"" + id + "\" class=\"btn btn--grey btn--edit\">編輯區塊</button>"));
            }

            // 編輯區塊的選項，標題、副標題、內文等等。
            function editorToolElm() {
                var $el = $("<div>", {
                    "class": "editor_tool"
                });
                var el = "";
                el += "<div class=\"editor_tool_list\">";
                el += "    <ul class=\"cf\">";
                el += "        <li class=\"editor_tool_item\">";
                el += "            <button class=\"editor_tool-btn\" data-act=\"title\">";
                el += "                <span class=\"icon_wrap\"><i class=\"icon-h1\"></i></span>";
                el += "                <span class=\"txt\">標題</span>";
                el += "            </button>";
                el += "        </li>";
                el += "        <li class=\"editor_tool_item\">";
                el += "            <button class=\"editor_tool-btn\" data-act=\"subtitle\">";
                el += "                <span class=\"icon_wrap\"><i class=\"icon-h2\"></i></span>";
                el += "                <span class=\"txt\">副標題</span>";
                el += "            </button>";
                el += "        </li>";
                el += "        <li class=\"editor_tool_item\">";
                el += "            <button class=\"editor_tool-btn\" data-act=\"content\">";
                el += "                <span class=\"icon_wrap\"><i class=\"icon-content\"></i></span>";
                el += "                <span class=\"txt\">內文</span>";
                el += "            </button>";
                el += "        </li>";
                el += "        <li class=\"editor_tool_item\">";
                el += "            <button class=\"editor_tool-btn\" data-act=\"link\">";
                el += "                <span class=\"icon_wrap\"><i class=\"icon-link1\"></i></span>";
                el += "                <span class=\"txt\">連結</span>";
                el += "            </button>";
                el += "        </li>";
                el += "        <li class=\"editor_tool_item\">";
                el += "            <button class=\"editor_tool-btn\" data-act=\"pic\">";
                el += "                <span class=\"icon_wrap\"><i class=\"icon-image1\"></i></span>";
                el += "                <span class=\"txt\">圖片</span>";
                el += "            </button>";
                el += "        </li>";
                el += "        <li class=\"editor_tool_item\">";
                el += "            <button class=\"editor_tool-btn\" data-act=\"annex\">";
                el += "                <span class=\"icon_wrap\"><i class=\"icon-attachment\"></i></span>";
                el += "                <span class=\"txt\">附件</span>";
                el += "            </button>";
                el += "        </li>";
                el += "    </ul>";
                el += "    <p class=\"text--yellow\">崁入線上檔案</p>";
                el += "    <ul class=\"cf\">";
                el += "        <li class=\"editor_tool_item\">";
                el += "            <button class=\"editor_tool-btn\" data-act=\"briefing\">";
                el += "                <span class=\"icon_wrap\"><i class=\"icon-presentation\"></i></span>";
                el += "                <span class=\"txt\">簡報</span>";
                el += "            </button>";
                el += "        </li>";
                el += "        <li class=\"editor_tool_item\">";
                el += "            <button class=\"editor_tool-btn\" data-act=\"video\">";
                el += "                <span class=\"icon_wrap\"><i class=\"icon-video\"></i></span>";
                el += "                <span class=\"txt\">影片</span>";
                el += "            </button>";
                el += "        </li>";
                el += "    </ul>";
                el += "</div>";

                $el.append(el);
                return $el;
            }

            // 標題文字類型的編輯框
            function cusCntTextElm(id, type, placeholder) {
                var el = "";
                var $el = $("<div>", {
                    "class": "cus_cnt cus_cnt-" + type + " cus_cnt_text"
                });
                el += "<section class=\"cus_cnt-bd\">";
                el += "    <div class=\"cus_cnt-txt_tool cf\">";
                el += "        <ul class=\"txt_align left\">";
                el += "            <li class=\"txt_tool txt_align-left active\" data-align=\"left\">";
                el += "                <button class=\"txt_tool-btn\">";
                el += "                    <i class=\"icon-align-left\"></i>";
                el += "                </button>";
                el += "            </li>";
                el += "            <li class=\"txt_tool txt_align-center\" data-align=\"center\">";
                el += "                <button class=\"txt_tool-btn\">";
                el += "                    <i class=\"icon-align-center\"></i>";
                el += "                </button>";
                el += "            </li>";
                el += "            <li class=\"txt_tool txt_align-right\" data-align=\"right\">";
                el += "                <button class=\"txt_tool-btn\">";
                el += "                    <i class=\"icon-align-right\"></i>";
                el += "                </button>";
                el += "            </li>";
                el += "        </ul>";
                el += "    </div>";
                el += "    <div class=\"cus_cnt-field cus_cnt-" + type + "-field js-edit\">";
                el += "        <input type=\"text\" id=\"" + type + "Field-" + id + "\" class=\"cus_cnt-" + type + "-input\" placeholder=\"" + placeholder + "\">";
                el += "        <label class=\"bt-line\"></label>";
                el += "    </div>";
                el += "</section>";
                el += "<section class=\"cus_cnt-ft\">";
                el += "    <button class=\"btn-cuscnt btn-cuscnt-cancel\">取消</button>";
                el += "    <button class=\"btn-cuscnt btn-cuscnt-save\">儲存</button>";
                el += "</section>";

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
                    $el = $("<div>", {
                        "class": "cus_cnt cus_cnt-content cus_cnt_text"
                    });
                    el += "<section class=\"cus_cnt-bd\">";
                    el += "    <div class=\"cus_cnt-txt_tool cf\">";
                    el += "        <ul class=\"txt_align left\">";
                    el += "            <li class=\"txt_tool txt_align-left active\" data-align=\"left\">";
                    el += "                <button class=\"txt_tool-btn\">";
                    el += "                    <i class=\"icon-align-left\"></i>";
                    el += "                </button>";
                    el += "            </li>";
                    el += "            <li class=\"txt_tool txt_align-center\" data-align=\"center\">";
                    el += "                <button class=\"txt_tool-btn\">";
                    el += "                    <i class=\"icon-align-center\"></i>";
                    el += "                </button>";
                    el += "            </li>";
                    el += "            <li class=\"txt_tool txt_align-right\" data-align=\"right\">";
                    el += "                <button class=\"txt_tool-btn\">";
                    el += "                    <i class=\"icon-align-right\"></i>";
                    el += "                </button>";
                    el += "            </li>";
                    el += "        </ul>";
                    el += "    </div>";
                    el += "    <div class=\"cus_cnt-field cus_cnt-content-field js-edit\">";
                    el += "        <textarea name=\"\" id=\"" + type + "Field-" + id + "\" class=\"cus_cnt-content-input\" placeholder=\"請輸入內文\"></textarea>";
                    el += "        <label class=\"bt-line\"></label>";
                    el += "    </div>";
                    el += "</section>";
                    el += "<section class=\"cus_cnt-ft\">";
                    el += "    <button class=\"btn-cuscnt btn-cuscnt-cancel\">取消</button>";
                    el += "    <button class=\"btn-cuscnt btn-cuscnt-save\">儲存</button>";
                    el += "</section>";
                    $el.append(el);
                    return $el;
                }
                // 連結
                else if (act == "link") {
                    $el = $("<div>", {
                        "class": "cus_cnt cus_cnt-link"
                    });
                    el += "<section class=\"cus_cnt-bd\">";
                    el += "    <div class=\"cus_cnt-field cus_cnt-link-addlink js-edit\">";
                    el += "        <div class=\"cus_cnt-field_group\">";
                    el += "                <div class=\"table-cell cus_cnt-link-label\">";
                    el += "                    <label for=\"linkUrl\" class=\"cus_cnt-field_group-label\">";
                    el += "                        <i class=\"icon-link\"></i>";
                    el += "                        <span>連結網址</span>";
                    el += "                    </label>";
                    el += "                </div>";
                    el += "                <div class=\"table-cell cus_cnt-link-input\">";
                    el += "                    <input type=\"text\" id=\"linkUrl\" class=\"cus_cnt-field_group-input\" placeholder=\"請輸入連結網址\">";
                    el += "                </div>";
                    el += "        </div>";
                    el += "    </div>";
                    el += "    <div class=\"cus_cnt-field cus_cnt-link-addtxt js-edit\">";
                    el += "        <div class=\"cus_cnt-field_group\">";
                    el += "                <div class=\"table-cell cus_cnt-link-label\">";
                    el += "                    <label for=\"linkTxt\" class=\"cus_cnt-field_group-label\">";
                    el += "                        <i class=\"icon-pl-txt\"></i>";
                    el += "                        <span>按鈕文字</span>";
                    el += "                    </label>";
                    el += "                </div>";
                    el += "                <div class=\"table-cell cus_cnt-link-input\">";
                    el += "                    <input type=\"text\" id=\"linkTxt\" class=\"cus_cnt-field_group-input\" placeholder=\"請輸入按鈕文字\">";
                    el += "                </div>";
                    el += "        </div>";
                    el += "    </div>";
                    el += "    <div class=\"cus_cnt-field cus_cnt-link-addtxt js-edit\">";
                    el += "        <div class=\"cus_cnt-field_group\">";
                    el += "                <div class=\"table-cell cus_cnt-link-label\">";
                    el += "                    <label for=\"linkColor\" class=\"cus_cnt-field_group-label\">";
                    el += "                        <i class=\"icon-pl-palette\"></i>";
                    el += "                        <span>按鈕顏色</span>";
                    el += "                    </label>";
                    el += "                </div>";
                    el += "                <div class=\"table-cell cus_cnt-link-input\">";
                    el += "                    <div class=\"cus_cnt-link-color\">";
                    el += "                        <ul class=\"cf\">";
                    el += "                            <li class=\"cus_cnt-link-color_item color-blue active\" data-color=\"blue\"></li>";
                    el += "                            <li class=\"cus_cnt-link-color_item color-green\" data-color=\"green\"></li>";
                    el += "                            <li class=\"cus_cnt-link-color_item color-red\" data-color=\"red\"></li>";
                    el += "                            <li class=\"cus_cnt-link-color_item color-orange\" data-color=\"orange\"></li>";
                    el += "                            <li class=\"cus_cnt-link-color_item color-purple\" data-color=\"purple\"></li>";
                    el += "                        </ul>";
                    el += "                    </div>";
                    el += "                </div>";
                    el += "        </div>";
                    el += "    </div>";
                    el += "</section>";
                    el += "<section class=\"cus_cnt-ft\">";
                    el += "    <button class=\"btn-cuscnt btn-cuscnt-cancel\">取消</button>";
                    el += "    <button class=\"btn-cuscnt btn-cuscnt-save\">儲存</button>";
                    el += "</section>";

                    $el.append(el);
                    return $el;
                }
                // 圖片
                else if (act == "pic") {
                    $el = $("<div>", {
                        "class": "cus_cnt cus_cnt-pic"
                    });
                    el += "<section class=\"cus_cnt-hd\">";
                    el += "    <div class=\"cus_cnt-pic-upload\">";
                    el += "        <div class=\"inner\">";
                    el += "            <i class=\"icon-outbox\"></i>";
                    el += "            <span class=\"txt\">上傳圖片</span>";
                    el += "        </div>";
                    el += "    </div>";
                    el += "</section>";
                    el += "<section class=\"cus_cnt-ft\">";
                    el += "    <button class=\"btn-cuscnt btn-cuscnt-cancel\">取消</button>";
                    el += "    <button class=\"btn-cuscnt btn-cuscnt-save\">儲存</button>";
                    el += "</section>";

                    $el.append(el);
                    return $el;
                }
                // 附件
                else if (act == "annex") {
                    $el = $("<div>", {
                        "class": "cus_cnt cus_cnt-annex"
                    });
                    el += "<section class=\"cus_cnt-hd\">";
                    el += "    <div class=\"cus_cnt-annex-upload\">";
                    el += "        <div class=\"inner\">";
                    el += "            <span class=\"icon_wrap\">";
                    el += "                <i class=\"icon-outbox\"></i>";
                    el += "            </span>";
                    el += "            <span class=\"txt\">上傳附件</span>";
                    el += "        </div>";
                    el += "    </div>";
                    el += "</section>";
                    el += "<section class=\"cus_cnt-ft\">";
                    el += "    <button class=\"btn-cuscnt btn-cuscnt-cancel\">取消</button>";
                    el += "    <button class=\"btn-cuscnt btn-cuscnt-save\">儲存</button>";
                    el += "</section>";

                    $el.append(el);
                    return $el;
                }
                // 影片
                else if (act == "video") {
                    $el = $("<div>", {
                        "class": "cus_cnt cus_cnt-video"
                    });
                    el += "<section class=\"cus_cnt-hd\">";
                    el += "    <div class=\"cus_cnt-video-cover\">";
                    el += "        <div class=\"inner\">";
                    el += "            <i class=\"icon-outbox\"></i>";
                    el += "            <span class=\"txt\">支持 YouTube 視頻</span>";
                    el += "        </div>";
                    el += "    </div>";
                    el += "</section>";
                    el += "<section class=\"cus_cnt-bd\">";
                    el += "    <div class=\"cus_cnt-field cus_cnt-video-addlink js-edit\">";
                    el += "        <div class=\"cus_cnt-field_group\">";
                    el += "                <div class=\"table-cell cus_cnt-video-label\">";
                    el += "                    <label for=\"videoLink\" class=\"cus_cnt-field_group-label\">";
                    el += "                        <i class=\"icon-link\"></i>";
                    el += "                    </label>";
                    el += "                </div>";
                    el += "                <div class=\"table-cell cus_cnt-video-input\">";
                    el += "                    <input type=\"text\" id=\"videoLink\" class=\"cus_cnt-field_group-input\" placeholder=\"請輸入影片網址\">";
                    el += "                </div>";
                    el += "        </div>";
                    el += "    </div>";
                    el += "</section>";
                    el += "<section class=\"cus_cnt-ft\">";
                    el += "    <button class=\"btn-cuscnt btn-cuscnt-cancel\">取消</button>";
                    el += "    <button class=\"btn-cuscnt btn-cuscnt-save\">儲存</button>";
                    el += "</section>";

                    $el.append(el);
                    return $el;
                } else {
                    return 0;
                }
            }

            function popupUploadElm(id) {
                var $el = $("<div>", {
                    "class": "popup popup_upload"
                });
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
                el += "                            <div class=\"drop_txt\">將文件拖至此處</div>";
                el += "                            <p class=\"or_txt\">或</p>";
                el += "                        </div>";
                el += "                        <div class=\"preview_file\">";
                el += "                            <div class=\"pic\"><img src=\"\" alt=\"\"></div>";
                el += "                        </div>";
                el += "                        <div class=\"upload_file\">";
                el += "                            <label for=\"upload-\" class=\"btn upload_file-label\">選擇檔案</label>";
                el += "                            <input type=\"file\" name=\"file\" id=\"upload-\" class=\"upload_file-input\">";
                el += "                        </div>";
                el += "                    </form>";
                el += "                    <p class=\"or_txt\">或</p>";
                el += "                    <div class=\"file_url\">";
                el += "                        <input type=\"text\" name=\"\" id=\"fileUrl\" class=\"file_url-input\" placeholder=\"輸入文件網址\">";
                el += "                        <button class=\"btn btn--primary file_url-btn\">確定</button>";
                el += "                    </div>";
                el += "                    <p class=\"exp\">接受檔案類型： pdf, doc, xls, ppt 檔案上限為 10 MB</p>";
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

                getRowLen: function(block) {
                    if (verNum == 1 || verNum == 3 || verNum == 4 || verNum == 5) {
                        var VCrow = block.parents(".vc-col").find('.vc-row').length;
                    } else if (verNum == 2) {
                        var VCrow = block.parents(".version_container").find('.vc-row').length;
                    }

                    return VCrow;
                },

                setBlockId: function(block, version) {
                    if (verNum == 1 || verNum == 3 || verNum == 4 || verNum == 5) {
                        var row = block.parents(".vc-row").data('row');
                        var col = block.parents(".vc-col").data('col');
                        block.attr('id', version + "-" + row + "-" + col);
                    } else if (verNum == 2) {
                        var row = block.parents(".vc-row").data('row');
                        block.attr('id', version + "-" + row + "-1");
                    }
                },


                // >>> plus-effectr.version.editUpdate
                editUpdate: function(version) {
                    var _ = this;
                    verNum = version;
                    $editContainer.append(plusEffectr.versionElm(verNum));
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
                // >>> plus-effectr.version.select
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
                        axis: "x"
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
                // >>> plus-effectr.version.showEditTool
                showEditTool: function(state) {
                    var _ = this;
                    var $btn;
                    if (state == "init") {
                        $btn = $(".btn--edit");
                    } else if ($(state).length) {
                        $btn = $(state).find('.btn--edit');
                    } else if (state == "add-block") {
                        $btn = $("." + state);
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
                // >>> plus-effectr.version.customContent
                customContent: function(block, id) {
                    var _ = this;
                    $(".editor_tool-btn").click(function(event) {
                        var act = $(this).data('act');
                        // TODO:附件、簡報
                        // if (act == "annex" || act == "briefing") {
                        //     return 0;
                        // }
                        var $block = block;
                        $block.attr('data-type', act);
                        var $block = $(this).parents(".version_block");
                        var id = $block.attr('id');

                        $(".version_block").removeClass('js-showEditTool');

                        // 移除"編輯區塊"的工具提示框
                        jobBankUI.showHideRemoveElm($block.find(".editor_tool"), "hidden");

                        // SHOW 自訂內容的編輯框等等
                        if ($block.hasClass('add')) {
                            var rowLen = _.getRowLen($block);
                            var $addblock = $("<div/>", {
                                "class": "version_block editing",
                                "data-type": act
                            });
                            $block.parent(".version_container-row")
                                .before($("<div/>", {
                                        "class": "version_container-row vc-row js-add",
                                        "data-row": ++rowLen
                                    })
                                    .append($addblock)
                                );
                            _.setBlockId($addblock, verNum);
                            var aid = $addblock.attr('id');
                            $addblock.append(cusCntElm(aid, act));
                            $addblock.find(".btn-cuscnt").click(function(event) {
                                $(this).parent(".cus_cnt-field").addClass('js-edit');
                            });
                            _.cusCntControll($addblock, act);

                        } else {
                            // 移除"編輯區塊"的按鈕
                            $block.addClass('editing').find('.btn--edit').remove();
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

                // >>> plus-effectr.version.cusCntControll
                cusCntControll: function(block, act) {
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
                        var align = "left"; //default
                        var $txtAlign = $block.find(".txt_align .txt_tool");

                        $block.find(".txt_align .txt_tool-btn").click(function(event) {
                            var $this = $(this);
                            $txtAlign.removeClass('active');
                            $this.parent(".txt_tool").addClass('active');
                            align = $this.parent(".txt_tool").data('align');
                            var inputcnt = $this.closest('.cus_cnt-txt_tool').next('.cus_cnt-field').find('input[id*="Field"] , textarea[id*="Field"]');

                            if (inputcnt.hasClass('align-left')) {
                                inputcnt.removeClass('align-left').addClass('align-' + align);
                            } else if (inputcnt.hasClass('align-center')) {
                                inputcnt.removeClass('align-center').addClass('align-' + align);
                            } else if (inputcnt.hasClass('align-right')) {
                                inputcnt.removeClass('align-right').addClass('align-' + align);
                            } else {
                                inputcnt.addClass('align-' + align);
                            }
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
                            } else {

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
                                            img.onload = function() {
                                                var imgWidth = this.width,
                                                    imgHeight = this.height;
                                                // 上傳圖片的寬高
                                                if (imgWidth > imgHeight && imgWidth > 300) {
                                                    imgWidth = 300;
                                                    imgHeight = Math.ceil(300 * this.height / this.width);
                                                } else if (imgWidth < imgHeight && imgHeight > 289) {
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
                                        form_data.append('file', input.files[0]);
                                    } else {}
                                    $(".err_txt").text("");
                                } else {
                                    $(".err_txt").text("檔案格式不正確!!");
                                }
                            });

                            $(".file_url-btn").click(function(event) {
                                close($el);
                                // console.log(form_data);
                                // for (var pair of form_data.entries()) {
                                //     console.log(pair[0] + ',' + pair[1]);
                                // }
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

                            function previewFile(src, alt) {
                                $imgPreview = $("<img/>", {
                                    "src": src,
                                    "alt": alt
                                });
                                $imgPreview2 = $("<img/>", {
                                    "src": src,
                                    "alt": alt
                                });
                                console.log(src);

                                $(".preview_file").show();
                                $(".preview_file .pic").html('').append($imgPreview);
                                $upload.addClass('view');
                                $upload.next(".cus_cnt-pic-preview").remove();
                                $upload.after($("<div>", {
                                    "class": "cus_cnt-pic-preview"
                                }).append($imgPreview2));
                            }
                        });
                        // 按下"儲存"按鈕
                        $block.find(".btn-cuscnt-save").click(function(event) {
                            _.cusCntPicSave($block, id, act, cus_cnt_data, blockObj, cntObj);
                        });
                    }
                    // 附件
                    else if (act == "annex") {

                    }
                    // 簡報
                    else if (act == "briefing") {

                    }
                    // 影片
                    else if (act == "video") {
                        // youtube thumbnail
                        // 自動擷取 Youtube 縮圖
                        var youtube_id = "";
                        $block.find('.cus_cnt-field_group-input').blur(function(event) {
                            var url = $(this).val();
                            var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
                            var match = url.match(regExp);
                            var thumbnail = "";
                            if (match && match[7].length == 11) {
                                // b1.src='https://img.youtube.com/vi/' + match[7] + '/0.jpg';
                                // b2.src='https://img.youtube.com/vi/' + match[7] + '/1.jpg';
                                // b3.src='https://img.youtube.com/vi/' + match[7] + '/2.jpg';
                                // b4.src='https://img.youtube.com/vi/' + match[7] + '/3.jpg';
                                // thumbnail='https://img.youtube.com/vi/' + match[7] + '/hqdefault.jpg';
                                // thumbnail='https://img.youtube.com/vi/' + match[7] + '/mqdefault.jpg';
                                thumbnail = 'https://img.youtube.com/vi/' + match[7] + '/maxresdefault.jpg';

                                youtube_id = match[7];
                            }
                            $block.find('.cus_cnt-video-cover').append($("<img>", {
                                "src": thumbnail
                            }));
                            console.log(thumbnail);
                        });

                        // 按下"儲存"按鈕
                        $block.find(".btn-cuscnt-save").click(function(event) {
                            _.cusCntVideoSave($block, id, act, cus_cnt_data, blockObj, cntObj, youtube_id);
                        });
                    }
                },

                // 儲存(區塊-標題、副標題、內文)
                // >>> jobBankUI.version.cusCntTextSave
                cusCntTextSave: function(block, id, act, cus_cnt_data, blockObj, cntObj, align) {
                    var _ = this;
                    // 取值
                    var txt = block.find("#" + act + "Field-" + id).val();

                    var errMsg, $focusInp = $("#" + act + "Field-" + id);
                    if (act == "title") {
                        errMsg = "請輸入標題";
                    } else if (act == "subtitle") {
                        errMsg = "請輸入副標題";
                    } else if (act == "content") {
                        errMsg = "請輸入內文";
                    }
                    if (txt == '') {
                        $focusInp.focus();
                        memberCenter.Toast(errMsg, 'error', 1000);
                        return 0;
                    }

                    // block.find('.btn-cuscnt-save').attr('disabled', true);

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

                cusCntTextView: function(block, cntObj) {
                    var txt = cntObj.txt;
                    var align = cntObj.align;

                    block.removeClass("editing").addClass('view');

                    block.find('.cus_cnt-field').append($("<div class=\"cus_cnt_data align-" + align + "\">" + txt + "</div>"));

                    block.find(".cus_cnt_data").click(function(event) {
                        this.remove();
                        block.removeClass("view").addClass('editing');
                    });
                },

                // 儲存(區塊-連結)
                // >>> plus-effectr.version.cntCntLinkSave
                cntCntLinkSave: function(block, id, act, cus_cnt_data, blockObj, cntObj, color) {
                    var _ = this;
                    var url = block.find('#linkUrl').val();
                    var txt = block.find("#linkTxt").val();
                    if (url == "") {
                        block.find('#linkUrl').focus();
                        memberCenter.Toast("請輸入連結網址", 'error', 1000);
                        return 0;
                    }
                    if (txt == "") {
                        block.find('#linkTxt').focus();
                        memberCenter.Toast("請輸入按鈕文字", 'error', 1000);
                        return 0;
                    }
                    // block.find('.btn-cuscnt-save').attr('disabled', true);
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

                cntCntLinkView: function(block, cntObj) {
                    var url, txt, color;
                    url = cntObj.url;
                    txt = cntObj.txt;
                    color = cntObj.color;
                    block.removeClass("editing").addClass('view');

                    var el = "";
                    el += "<div class=\"cus_cnt cus_cnt-link cus_cnt_view\">";
                    el += "    <i class=\"icon-icon-edit\"></i>";
                    el += "    <div class=\"cus_cnt-link-view color-" + color + "\">";
                    el += "        <a href=\"" + url + "\" class=\"link-txt\" target=\"_blank\">" + txt + "</a>";
                    el += "    </div>";
                    el += "</div>";

                    block.find(".cus_cnt-link").hide();
                    jobBankUI.showHideRemoveElm(block.append($(el)), "show");

                    block.find(".cus_cnt-link.cus_cnt_view").click(function(event) {
                        this.remove();
                        block.find('.cus_cnt-link').show();
                        block.removeClass("view").addClass('editing');
                    });

                },

                // 儲存(區塊-圖片)
                // >>> plus-effectr.version.cusCntPicSave
                cusCntPicSave: function(block, id, act, cus_cnt_data, blockObj, cntObj) {
                    var _ = this;
                    var src = block.find('img').attr('src');
                    var img = block.find('.cus_cnt-pic-preview')
                    if (src == "") {
                        memberCenter.Toast("請上傳圖片", error, 1000);
                        return 0;
                    }
                    // block.find('.btn-cuscnt-save').attr('disabled', true);
                    cntObj.file_src = src;

                    blockObj.cnt.push(cntObj);
                    cus_cnt_data.push(blockObj);
                    // 自訂內容之DATA (JSON 格式)
                    var tempDataStr = JSON.stringify(cus_cnt_data);
                    console.log(tempDataStr);
                    _.setTempData(block, tempDataStr);
                    _.cntCntPicView(block, cntObj);
                },

                cntCntPicView: function(block, cntObj) {
                    var file_src = cntObj.file_src;
                    var url = cntObj.url;
                    var txt = cntObj.txt;
                    block.removeClass("editing").addClass('view');

                    var el = "";
                    el += " <div class=\"cus_cnt cus_cnt-pic cus_cnt_view\">";
                    el += "    <i class=\"icon-icon-edit\"></i>";
                    el += "    <figure class=\"cus_cnt-pic-figure\">";
                    el += "        <div class=\"cus_cnt-pic-preview\">";
                    el += "            <img src=\"" + file_src + "\" alt=\"" + txt + "\">";
                    el += "        </div>";
                    el += "    </figure>";
                    el += " </div>";

                    block.find(".cus_cnt-pic").hide();
                    jobBankUI.showHideRemoveElm(block.append($(el)), "show");

                    block.find(".cus_cnt-pic.cus_cnt_view").click(function(event) {
                        this.remove();
                        block.find('.cus_cnt.cus_cnt-pic').show();
                        block.removeClass("view").addClass('editing');
                    });

                },

                // 儲存(區塊-附件)
                // >>> plus-effectr.version.cusCntAnnexSave
                cusCntAnnexSave: function(block, id, act, cus_cnt_data, blockObj, cntObj, align) {},

                cusCntAnnexView: function(block, id, act, cus_cnt_data, blockObj, cntObj, align) {},

                // 儲存(區塊-簡報)
                // >>> plus-effectr.version.cusCntAnnexSave
                cusCnttBriefinSave: function(block, id, act, cus_cnt_data, blockObj, cntObj, align) {},

                cusCnttBriefinView: function(block, id, act, cus_cnt_data, blockObj, cntObj, align) {},

                // 儲存(區塊-影片)
                // >>> plus-effectr.version.cusCntVideoSave
                cusCntVideoSave: function(block, id, act, cus_cnt_data, blockObj, cntObj, youtube_id) {
                    var _ = this;
                    cntObj.youtube_id = youtube_id;

                    blockObj.cnt.push(cntObj);
                    cus_cnt_data.push(blockObj);
                    // 自訂內容之DATA (JSON 格式)
                    var tempDataStr = JSON.stringify(cus_cnt_data);
                    console.log(tempDataStr);
                    _.setTempData(block, tempDataStr);
                    _.cusCntVideoView(block, cntObj);
                },

                cusCntVideoView: function(block, cntObj) {

                    block.removeClass("editing").addClass('view');

                    var el = "";
                    el += "<div class=\"cus_cnt cus_cnt_view cus_cnt-video\">";
                    el += "    <i class=\"icon-icon-edit\"></i>";
                    el += "    <div class=\"cus_cnt-video-cover\">";
                    el += "        <iframe src=\"https://www.youtube.com/embed/" + cntObj.youtube_id + "\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"\"></iframe>";
                    el += "    </div>";
                    el += "</div>";

                    block.find(".cus_cnt-video").hide();
                    jobBankUI.showHideRemoveElm(block.append($(el)), "show");

                    block.find(".cus_cnt-video.cus_cnt_view").click(function(event) {
                        this.remove();
                        block.removeClass("view").addClass('editing').find('.cus_cnt.cus_cnt-video').show();
                    });

                },

                // >>> plus-effectr.version.setTempData
                setTempData: function(block, tempDataStr) {
                    var $input = $("<input>", {
                        "type": "hidden"
                    });
                    if (block.has("input.cusCntValue")) {
                        block.find('input.cusCntValue').remove();
                    }
                    // 插入input.cusCntValue 並去掉字串:"["和"]"
                    block.append($input.attr('class', "cusCntValue").val(tempDataStr.substring(1, tempDataStr.length - 1)));
                },

                // 按下"取消"按鈕
                // >>> plus-effectr.version.cusCntCancelClick
                cusCntCancelClick: function() {
                    var _ = this;
                    $(".btn-cuscnt-cancel").click(function(event) {
                        var self = $(this);
                        var $block = self.parents(".version_block");
                        var $row = self.parents(".vc-row");
                        var $vccol;
                        var col;
                        $block.attr('data-type', '');
                        // if (verNum == 2) {
                        //     $vccol = self.parents(".version_wrap");
                        //     col = 1;
                        //     return;
                        // }
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
                                    $vcrow.eq(i - 1).attr('data-row', i).find('.version_block').attr('id', verNum + "-" + i + "-" + col);
                                    // console.log($vcrow.eq(i));
                                }
                            }, 500);
                        });
                    });
                }

            }
        },

        /**
         * -------------------------------------------------------------------------------------
         * >> jobBankUI.plusEffectComplete 版型完成
         */
        plusEffectComplete: function() {
            function picElm(id, file_src, url, txt) {
                var el = "";
                el += "<div class=\"cus_cnt cus_cnt-pic cus_cnt_view\">";
                if (url == "") {
                    el += "    <div class=\"inner\">";
                } else {
                    el += "    <a href=\"" + url + "\" target=\"_blank\" class=\"inner\">";
                }
                el += [
                    "<figure class=\"cus_cnt-pic-figure\">",
                    "    <div class=\"cus_cnt-pic-preview\">",
                    "        <img src=\"" + file_src + "\" alt=\"" + txt + "\">",
                    "    </div>",
                    "    <figcaption class=\"cus_cnt-pic-figcaption\">" + txt + "</figcaption>",
                    "</figure>",
                ].join('');
                if (url == "") {
                    el += "    </div>";
                } else {
                    el += "    </a>";
                }
                el += "</div>";

                return el;
            }

            function titleElm(id, txt, align) {
                var el = "\
                        <div class=\"cus_cnt cus_cnt_view cus_cnt-title cus_cnt_text\">\
                            <div class=\"inner\">\
                                <div class=\"cus_cnt-field cus_cnt-title-field js-edit\">\
                                    <div class=\"cus_cnt_data align-" + align + "\">" + txt + "</div>\
                                </div>\
                            </div>\
                        </div>";
                return el;
            }

            function subtitleElm(id, txt, align) {
                var el = "";
                el += "<div class=\"cus_cnt cus_cnt_view cus_cnt-subtitle cus_cnt_text\">";
                el += "    <div class=\"inner\">";
                el += "        <div class=\"cus_cnt-field cus_cnt-subtitle-field js-edit\">";
                el += "            <div class=\"cus_cnt_data align-" + align + "\">" + txt + "</div>";
                el += "        </div>";
                el += "    </div>";
                el += "</div>";
                return el;
            }

            function contentElm(id, txt, align) {
                var el = "";
                el += "<div class=\"cus_cnt cus_cnt-content cus_cnt_text\">";
                el += "    <div class=\"inner\">";
                el += "        <div class=\"cus_cnt-field cus_cnt-content-field js-edit\">";
                el += "            <div class=\"cus_cnt_data align-" + align + "\">" + txt + "</div>";
                el += "        </div>";
                el += "    </div>";
                el += "</div>";
                return el;
            }

            function videoElm(id, yt_id) {
                var el = [
                    '<div class="cus_cnt cus_cnt_view cus_cnt-video">',
                    '    <div class="inner">',
                    '        <div class="cus_cnt-video-cover">',
                    '            <iframe src="https://www.youtube.com/embed/' + yt_id + '" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    '        </div>',
                    '    </div>',
                    '</div>'
                ].join('');
                return el;
            }

            function linkElm(id, url, txt, color) {
                var el = [
                    '<div class="cus_cnt cus_cnt-link cus_cnt_view">',
                    '    <div class="inner">',
                    '        <div class="cus_cnt-link-view color-' + color + '">',
                    '            <a href="' + url + '" class="link-txt" target="_blank">' + txt + '</a>',
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
                    for (var i = 0; i < data.length; i++) {
                        if (id == data[i].pos) {
                            var type = data[i].type;
                            block.attr('data-type', type);

                            var cnt = data[i].cnt[0];

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
                        }
                    }
                }
            }
        }
    }
}(window, jQuery));