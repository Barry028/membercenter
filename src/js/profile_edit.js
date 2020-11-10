$(function() {
    function hideAndShow(hideEl, showEl) {
        var duration = 0.3;
        TweenLite.to(showEl, duration, {
            height: 0,
            opacity: 1
        });

        TweenMax.to(hideEl, duration, {
            css: {
                opacity: 0
            },
            onComplete: function() {
                hideEl.css({
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)'
                });
                TweenMax.to(showEl, duration, {
                    css: {
                        position: 'inherit',
                        top: 'inherit',
                        y: 0,
                        display: 'block',
                        opacity: 1
                    },
                    onComplete: function() {
                        hideEl.hide();
                    }
                });
                TweenLite.set(showEl, {
                    height: "auto"
                });
                TweenLite.from(showEl, duration, {
                    height: 0
                });
            }
        });
    }
    // 按下編輯ICON後，顯示輸入框
    $(".edit_vaule_input-ctrl, .edit_vaule_input").click(function(e) {
        e.preventDefault();
        var $ProfileInfoValue = $(this).parents(".profile-info-value");
        var $text = $ProfileInfoValue.children('.edit_vaule');
        var $input = $ProfileInfoValue.children('.edit_vaule_open');
        var valueId = $ProfileInfoValue.attr('id');

        $ProfileInfoValue.addClass('js-openEditor');

        // 將原本的文字帶入輸入框
        var oriVal = $text.find('.edit_vaule_input').text();
        $("#" + valueId + "Inp").val(oriVal);

        // 住家號碼
        if (valueId == "valueCHouse") {
            oriValArr = oriVal.split('-');
            var oriZip = oriValArr[0];
            var oriNum = oriValArr[1];
            $("#" + valueId + "Zip").val(oriZip);
            $("#" + valueId + "Num").val(oriNum);
        }

        // 地址
        if (valueId == "valueCAddr") {
            var oriAddrCounty = $text.find('.county').text();
            var oriAddrTxt = $text.find('.txt').text();

            $("#" + valueId + "County").val(oriAddrCounty);
            $("#" + valueId + "Txt").val(oriAddrTxt);
        }

        // 隱藏文字，顯示輸入框
        hideAndShow($text, $input);
    });

    // 儲存
    $(".edit_save").click(function(event) {
        var $ProfileInfoValue = $(this).parents(".profile-info-value");
        var $text = $ProfileInfoValue.children('.edit_vaule');
        var $input = $ProfileInfoValue.children('.edit_vaule_open');
        var valueId = $ProfileInfoValue.attr('id');
        console.log(valueId);
        hideAndShow($input, $text);
        switch (valueId) {
            // 住家號碼
            case 'valueCHouse':
                var ZipVal = $("#" + valueId + "Zip").val();
                var NumVal = $("#" + valueId + "Num").val();
                console.log(ZipVal);
                console.log(NumVal);
                if (nameVal != '') {
                    // 用ajax的方式，傳資料到database
                    $.ajax({
                            // url: '/path/to/file',   << API檔
                            // type: 'POST',
                            // data: {id: 'profile_number', field: valueId, val: nameVal},
                        })
                        .done(function(data) {
                            $ProfileInfoValue.removeClass('js-openEditor');
                            $text.find('.edit_vaule_input').text(nameVal)
                            hideAndShow($input, $text);
                        })
                        .fail(function(err) {
                            console.log(err);
                        });
                } else {
                    // jobBankUI.notice("")
                }
                break;
                // case ''
            default:
                var nameVal = $("#" + valueId + "Inp").val();
                console.log(nameVal);
                if (nameVal != '') {
                    // 用ajax的方式，傳資料到database
                    $.ajax({
                            // url: '/path/to/file',   << API檔
                            // type: 'POST',
                            // data: {id: '履歷編號', field: 哪個欄位, val: 值},
                            // data: {id: 'profile_number', field: valueId, val: nameVal},
                        })
                        .done(function(data) {
                            $ProfileInfoValue.removeClass('js-openEditor');
                            $text.find('.edit_vaule_input').text(nameVal)
                            hideAndShow($input, $text);
                        })
                        .fail(function(err) {
                            console.log(err);
                        });
                } else {
                    // jobBankUI.notice("")
                }
        }
    });

    // 取消
    $(".edit_cancel").click(function(event) {
        var $ProfileInfoValue = $(this).parents(".profile-info-value");
        var $text = $ProfileInfoValue.children('.edit_vaule');
        var $input = $ProfileInfoValue.children('.edit_vaule_open');
        $ProfileInfoValue.removeClass('js-openEditor');
        hideAndShow($input, $text);
    });
});