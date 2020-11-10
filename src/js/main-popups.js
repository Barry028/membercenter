///*** layer 彈窗調用 Skin ***///
layer.config({
    extend: 'myskin/style.css'
});

/// 照片上傳 UploadPhoto ///
$(".UploadPhoto").on("click", function() {
    layer.open({
        type: 1,
        anim: 5,
        area: ['90%', ''],
        title: ['上傳您的照片'],
        shadeClose: true,
        content: '\
        <section id="photoStep_1" class="mt-8">\
            <div class="container">\
                <div class="row">\
                    <div class="col-lg-6 col-sm-4">\
                        <div class="uploadPhoto-content">\
                            <h1 class="uploadPhoto-lt-title">上傳後照片將同步更新至您所有履歷</h1>\
                            <form class="file-upload mt-8" action="/file-upload" enctype="multipart/form-data">\
                                <img id="resultPhoto" src="img/img-profile-replace.svg" alt="大頭照">\
                                <input id="inputResultPhoto" type="file" class="input-file">\
                                <input id="inputPhoto" type="file" accept="image/jpeg, image/png" class="input-file">\
                            </form>\
                            <div class="uploadPhoto-btn-block">\
                                <label class="btn btn--secondary" for="inputPhoto">選擇照片</label>\
                                <button type="button" class="btn btn--light">刪除照片</button>\
                            </div>\
                            <p class="center text--lightgrey text--14">( 限PNG、JPG檔案 ； 建議尺寸 220x280 pixel )</p>\
                        </div>\
                    </div>\
                    <div class="col-lg-6 col-sm-8 uploadPhoto-separate">\
                        <div class="uploadPhoto-content">\
                            <h1 class="uploadPhoto-rt-title">掌握以下重點，<br>讓您的履歷更加分！</h1>\
                            <div class="uploadPhoto-rt-ltbox">\
                                <img src="img/img-profile-default.svg" alt="profile">\
                            </div>\
                            <div class="uploadPhoto-rt-rtbox">\
                                <div class="mt-4 mb-8">\
                                    <img src="img/icon-upload-check.svg" alt="check" class="check-img">\
                                    <span class="inline-block--middle">頭像清晰 / 正面</span>\
                                </div>\
                                <div class="mt-4 mb-8">\
                                    <img src="img/icon-upload-check.svg" alt="check" class="check-img">\
                                    <span class="inline-block--middle">臉部未被裁切</span>\
                                </div>\
                                <div class="mt-4 mb-8">\
                                    <img src="img/icon-upload-check.svg" alt="check" class="check-img">\
                                    <span class="inline-block--middle">本人獨照</span>\
                                </div>\
                            </div>\
                            <strong class="block text--16 text--danger mt-8">*** 切勿使用以下照片 ***</strong>\
                            <div class="er-img-block">\
                                <img src="img/img-profile-animal.png" alt="animal" class="er-img">\
                                <i class="fa fa-times text--16" aria-hidden="true"></i>\
                                <span>非人類照</span>\
                            </div>\
                            <div class="er-img-block">\
                                <img src="img/img-profile-couple.png" alt="couple" class="er-img">\
                                <i class="fa fa-times text--16" aria-hidden="true"></i>\
                                <span>團體照</span>\
                            </div>\
                            <div class="er-img-block">\
                                <img src="img/img-profile-blur.png" alt="blur" class="er-img">\
                                <i class="fa fa-times text--16" aria-hidden="true"></i>\
                                <span>照片模糊</span>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </section>\
        <section id="photoStep_2" class="mt-8">\
            <div class="container">\
                <div class="row">\
                    <div class="col-lg-12">\
                        <div class="user_photo_cropper">\
                            <div class="inner">\
                                <img src="" id="profilePhoto">\
                            </div>\
                            <p class="text--13 center mt-8 mb-8">滑鼠滾輪可縮放</p>\
                            <div class="center mb-8">\
                                <button type="button" id="leftRotate" class="btn btn--light btn--square--md" title="向左轉">\
                                    <span class="jb-li-undo"></span>\
                                </button>\
                                <button class="btn btn--secondary" id="btnRestore">重新裁切</button>\
                                <button type="button" id="rightRotate" class="btn btn--light btn--square--md" title="向右轉">\
                                    <span class="jb-li-redo"></span>\
                                </button>\
                            </div>\
                            <div class="align-right">\
                                <a class="text--14 mr-8" id="return">回上一步重選</a>\
                                <button class="btn btn--primary btn--md" id="crop">確定裁切</button>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </section>\
        <div class="container">\
            <div class="row">\
                <div class="col-lg-12">\
                    <div class="uploadPhoto-bt-txt center">違反照片上傳規定者，1111人力銀行得於任何時候、無需預先通知即自行移除該內容。</div>\
                </div>\
            </div>\
        </div>'
    });

    var initCropper = function(img, input) {
        var $image = img;
        var options = {
            dragMode: 'move',
            aspectRatio: 220 / 280,
            viewMode: 1,
            cropBoxMovable: false,
            cropBoxResizable: false,
        };
        // 回上一頁
        $("#return").click(function() {
            $("#photoStep_2").hide();
            $("#photoStep_1").show();
        });

        // 照片旋轉
        $("#rightRotate").click(function() {
            $image.cropper('rotate', 90);
        });

        $("#leftRotate").click(function() {
            $image.cropper('rotate', -90);
        });

        // 重新裁切
        $("#btnRestore").click(function(event) {
            $image.cropper('reset');
        });

        $image.cropper(options);

        var $inputImage = input;
        var uploadedImageURL;
        if (URL) {
            // 给input 添加監聽
            $inputImage.change(function() {
                var files = this.files;
                var allowed = ["jpg", "jpeg", "png"];
                var file;
                if (!$image.data('cropper')) {
                    return;
                }
                if (files && files.length) {
                    file = files[0];
                    if (file.size > 102400 * 100) {
                        alert("檔案大小超過 10MB 的限制了!");
                        return false;
                    }
                    // 判斷是否是圖像文件
                    if (/^image\/\w+$/.test(file.type)) {
                        // 如果URL已存在就先釋放
                        if (uploadedImageURL) {
                            URL.revokeObjectURL(uploadedImageURL);
                        }
                        uploadedImageURL = URL.createObjectURL(file);
                        $("#photoStep_1").hide();
                        $("#photoStep_2").show();
                        // 銷毀cropper後更改src屬性再重新創建cropper
                        $image.cropper('destroy').attr('src', uploadedImageURL).cropper(options);
                        $inputImage.val('');
                    } else {
                        alert('上傳檔案有誤，請換一張照片試試看!');
                    }
                }
            });
        } else {
            $inputImage.prop('disabled', true).addClass('disabled');
        }
    }
    // 確定裁切
    $("#crop").click(function() {
        var $image = $('#profilePhoto');
        var $target = $('#resultPhoto , #inputResultPhoto');
        $image.cropper('getCroppedCanvas', {
            // 裁剪後的長寬
            width: 220,
            height: 280
        }).toBlob(function(blob) {
            // 裁剪後將圖片放到指定標籤
            $target.attr('src', URL.createObjectURL(blob));
        });
        $("#photoStep_2").hide();
        $("#photoStep_1").show();
    });

    $(function() {
        initCropper($('#profilePhoto'), $('#inputPhoto'));
    });
    // 儲存此次設定
    $("#btnAExperience").click(function(event) {
        // 上傳檔案到server
        // var photo = $('#photo').cropper('getCroppedCanvas', {
        //     width: 220,
        //     height: 280
        // }).toDataURL('image/png');

        // $.ajax({
        //     url: '/path/to/upload', // 要上傳的地址
        //     method: "POST",
        //     data: {
        //         'imgData': photo
        //     },
        //     processData: false,
        //     contentType: false,
        //     success() {
        //         console.log('Upload success');
        //     },
        //     error() {
        //         console.log('Upload error');
        //     },
        // });
    });
});

/// 電子報訂閱 ePaper ///
$(".modal_epaper").on("click", function() {
    layer.open({
        type: 1,
        anim: 5,
        area: ['26rem', ''],
        title: ['訂閱電子報'],
        shadeClose: true,
        content: '\
            <h6 class="epaper-modal-title">電子報名稱<a href="javascript:;">試閱 »</a></h6>\
            <div class="epaper-modal-content">\
                <p><font>發送檔期：</font>不定期發行</p>\
                <p><font>內容提供：</font>1111人力銀行</p>\
                <p><font>發行內容：</font>1111人力銀行，針對一例一休特辦此報，掌握最新政府與民間最新1例1休資訊，為自己權利發聲。</p>\
            </div>'
    });
});

/// 收藏的職缺 & 收藏的公司 ///
// 新增分類 Add Category
$(".modal_collect_add_category").on("click", function() {
    layer.open({
        type: 1,
        anim: 5,
        area: ['24rem', ''],
        title: ['新增分類'],
        shadeClose: true,
        content: '\
            <div class="modal-content">\
                <p>新增分類：</p>\
                <form class="modal_form">\
                    <input type="text" value="" style="width: 100%;" placeholder="可輸入中英文，最長 8 個字">\
                </form>\
            </div>\
            <div class="modal-btn-box">\
                <a href="javascript:layer.close(layer.index);" class="btn btn--border--primary mr-8">取消</a>\
                <button type="submit" class="btn btn--primary ">確定新增</button>\
            </div>'
    });
});

// 編輯分類名稱 Edit Category
$(".modal_collect_edit_category").on("click", function() {
    layer.open({
        type: 1,
        anim: 5,
        area: ['24rem', ''],
        title: ['編輯分類名稱'],
        shadeClose: true,
        content: '\
        <div class="modal-content">\
            <p>分類：製造業</p>\
            <form class="modal_form">\
                <span class="text--grey">更名為：</span>\
                <input id="name" type="text" value="" style="width: 80%;" placeholder="可輸入中英文，最長 8 個字">\
            </form>\
        </div>\
        <div class="modal-btn-box">\
            <a href="javascript:layer.close(layer.index);" class="btn btn--border--primary  mr-8">取消</a>\
            <button type="submit" class="btn btn--primary " id="savaCollect">儲存設定</button>\
        </div>'
    });
    $('#savaCollect').click(function() {
        var val = $('#name').val();
        if (val === '') {
            parent.layer.msg('請填寫分類名稱');
            return;
        }
        parent.layer.close(index);
    });
});

// 刪除分類 Collect Delete
$(".modal_collect_delete_category").on("click", function() {
    layer.open({
        skin: 'layer-delete',
        type: 1,
        anim: 5,
        area: ['24rem', ''],
        title: ['確定要刪除此分類嗎？'],
        shadeClose: true,
        content: '\
        <div class="modal-content">\
            <p class="mb-4">您確定要刪除此分類嗎？</p>\
            <p class="text--danger small">已經被歸於此分類下的收藏 XX 會一起被刪除 (取消收藏)</p>\
        </div>\
        <div class="modal-btn-box">\
            <button type="submit" class="btn btn--danger mr-8">確定刪除</button>\
            <a href="javascript:layer.close(layer.index);" class="btn btn--border--danger">取消</a>\
        </div> '
    });
});

// 職缺備註 Remark
$(".modal_collect_job_remark").on("click", function() {
    layer.open({
        type: 1,
        anim: 5,
        area: ['30rem', ''],
        title: ['職務名稱'],
        shadeClose: true,
        content: '\
        <div class="modal-content">\
            <p class="mb-4">備註：</p>\
            <textarea class="collect-inputarea" name="Content"></textarea>\
            <p class="text-clac">輸入 0 字<font class="text--lightgrey">｜</font>還可以輸入 200 字</p>\
        </div>\
        <div class="modal-btn-box">\
            <a href="javascript:layer.close(layer.index);" class="btn btn--border--primary mr-8">取消</a>\
            <button type="submit" class="btn btn--primary">儲存設定</button>\
        </div>'
    });
});

// 多筆應徵 Apply Jobs
$(".modal_collect_apply_jobs").on("click", function() {
    layer.open({
        type: 1,
        anim: 5,
        area: ['24rem', ''],
        title: ['多筆應徵'],
        shadeClose: true,
        content: '\
        <div class="modal-content">\
            <p>您將同時應徵 X 筆職務，是否確定繼續？</p>\
        </div>\
        <div class="modal-btn-box">\
            <a href="javascript:layer.close(layer.index);" class="btn btn--border--primary mr-8">取消</a>\
            <button type="submit" class="btn btn--primary">確定繼續</button>\
        </div>'
    });
});

// 刪除收藏 Collect Delete
$(".modal_collect_delete").on("click", function() {
    layer.open({
        skin: 'layer-delete',
        type: 1,
        anim: 5,
        area: ['24rem', ''],
        title: ['確定要刪除收藏的 XX 嗎？'],
        shadeClose: true,
        content: '\
        <div class="modal-content">\
            <p>您確定要刪除收藏 X 筆的 XX 嗎？</p>\
        </div>\
        <div class="modal-btn-box">\
            <button type="submit" class="btn btn--danger mr-8">確定刪除</button>\
            <a href="javascript:layer.close(layer.index);" class="btn btn--border--danger">取消</a>\
        </div>'
    });
});

// 移入分類 Move Category
$(".modal_collect_move_category").on("click", function() {
    layer.open({
        type: 1,
        anim: 5,
        area: ['24rem', ''],
        title: ['移入分類'],
        shadeClose: true,
        content: '\
        <div class="modal-content">\
            <p>請選擇移入的分類：</p>\
            <form class="modal_form">\
                <label for="op1" class="radio">\
                    <input type="radio" name="rdo" id="op1" class="hidden"/>\
                    <span class="label"></span>\
                    <font class="align-middle">分類名稱-1</font>\
                </label>\
                <div class="clear-fix"></div>\
                <label for="op2" class="radio">\
                    <input type="radio" name="rdo" id="op2" class="hidden"/>\
                    <span class="label"></span>\
                </label>\
                <input type="text" value="" style="width: 80%;" placeholder="可輸入中英文，最長 8 個字">\
            </form>\
        </div>\
        <div class="modal-btn-box">\
            <a href="javascript:layer.close(layer.index);" class="btn btn--border--primary mr-8">取消</a>\
            <button type="submit" class="btn btn--primary">儲存設定</button>\
        </div>'
    });
});

// 刪除已關閉 Delete Close
$(".modal_collect_delete_colse").on("click", function() {
    layer.open({
        skin: 'layer-delete',
        type: 1,
        anim: 5,
        area: ['24rem', ''],
        title: ['確定要刪除已關閉的 XX 嗎？'],
        content: '\
        <div class="modal-content">\
            <p>您確定要刪除 X 筆已關閉的 XX 嗎？</p>\
        </div>\
        <div class="modal-btn-box">\
            <button type="submit" class="btn btn--danger mr-8">確定刪除</button>\
            <a href="javascript:layer.close(layer.index);" class="btn btn--border--danger">取消</a>\
        </div>'
    });
});


/// 履歷總覽 ///
// 新增履歷 Add Resume
$(".modal_resume_add").on("click", function() {
    layer.open({
        type: 1,
        anim: 5,
        area: ['24rem', ''],
        title: ['新增履歷'],
        content: '\
            <div class="modal-content">\
                <form class="modal_form">\
                        <label class="w--25">履歷名稱：</label>\
                        <input class="w--75" type="text" value="" style="" placeholder="可輸入中英文，最長 8 個字">\
                    <p class="text--lightgrey text--13 align-right">為此份履歷命名，以方便管理多份履歷</p>\
                    <label>複製履歷：</label>\
                    <input type="radio" name="rdo" id="resume" class="radio-van-inp">\
                    <label for="resume" class="radio-van-lab">\
                        <i class="radio" aria-hidden="true"></i>\
                        <font class="align-middle text--black">獵頭履歷表</font>\
                    </label>\
                    <input type="radio" name="rdo" id="resume2" class="radio-van-inp">\
                    <label for="resume2" class="radio-van-lab">\
                        <i class="radio" aria-hidden="true"></i>\
                        <font class="align-middle text--black">獵頭履歷表</font>\
                    </label>\
                </form>\
                <font class="text--grey text--13">提醒您，完成履歷前請先確認是否已經設定了封鎖公司，以避免該公司看到您的履歷</font>\
            </div>\
            <div class="modal-btn-box">\
                <a href="javascript:layer.close(layer.index);" class="btn btn--border--primary mr-8">取消</a>\
                <a href="resume-edit.html" class="btn btn--primary">下一步</a>\
            </div>'
    });
});
// Resume Delete
$(".modal_resume_delete").on("click", function() {
    layer.open({
        skin: 'layer-delete',
        type: 1,
        anim: 5,
        area: ['24rem', ''],
        title: ['確定要刪除嗎？'],
        shadeClose: true,
        content: '\
        <div class="modal-content">\
            <p>確定要刪除「我的第一篇履歷」嗎？</p>\
        </div>\
        <div class="modal-btn-box">\
            <button type="submit" class="btn btn--danger  mr-8">刪除</button>\
            <a href="javascript:layer.close(layer.index);" class="btn btn--border--danger ">取消</a>\
        </div>'
    });
});

//關閉履歷 Resume Close
$(".modal_resume_close").on("click", function() {
    var resume_close = layer.open({
        type: 1,
        anim: 5,
        area: ['24rem', ''],
        title: ['關閉履歷仍可主動應徵'],
        shadeClose: true,
        closeBtn: 1,
        content: '\
        <div class="modal-content">\
            <p class="mb-4">確定要關閉「我的第一篇履歷」嗎？</p>\
            <span class="text--lightgrey blcok">履歷表關閉後，公司將無法搜尋到您的履歷，不過您仍可主動投遞履歷爭取面試機會！</span>\
            <p class="align-right mt-8">\
                <input class="checkbox-van-inp" id="match" type="checkbox">\
                <label class="checkbox-van-lab" for="match">\
                    <i class="checkbox" aria-hidden="true"></i>\
                    <font class="align-middle text--13">關閉此履歷的配對信件</font>\
                </label>\
            </p>\
        </div>\
        <div class="modal-btn-box">\
            <a href="javascript:layer.close(layer.index);" class="btn btn--border--primary  mr-8" onclick="layer.closeAll();">取消</a>\
            <button type="submit" class="btn btn--primary  survey_stepOne">關閉履歷</button>\
        </div>'
    });
    // 問卷選擇
    $(".survey_stepOne").on("click", function() {
        layer.close(resume_close); //關閉上一層
        var survey_stepOne = layer.open({
            type: 1,
            anim: 5,
            area: ['20rem', ''],
            title: ['關閉履歷 - 問卷統計'],
            closeBtn: 1,
            content: '\
            <div class="modal-content center">\
                <p class="mb-16">請問您目前找到工作了嗎？</p>\
                <div class="choose_survey">\
                    <div>\
                        <input type="radio" id="find" name="findJob" value="survey_stepTwo_notYet">\
                        <label for="find" class="btn btn--border--primary btn-survey-md mb-8 ">還沒找到工作</label>\
                    </div>\
                    <div>\
                        <input type="radio" id="found" name="findJob" value="survey_stepTwo_found">\
                        <label for="found" class="btn btn--border--primary btn-survey-md mb-8">已經找到工作了</label>\
                    </div>\
                    <div>\
                        <input type="radio" id="find-no" name="findJob" value="survey_stepTwo_temporary">\
                        <label for="find-no" class="btn btn--border--primary btn-survey-md mb-8">暫時不找工作</label>\
                    </div>\
                </div>\
            </div>\
            <div class="modal-btn-box center">\
                <button type="submit" class="btn btn--primary btn-next">下一步</button>\
            </div>'
        });
        //在下一步加入指定元素
        $('input:radio').change(function() {
            var findJob = $("input[name='findJob']:checked").val();
            $(".modal-btn-box button").removeClass();
            $(".modal-btn-box button").off("click");
            $(".modal-btn-box button").addClass("btn btn--primary btn-next");
            $(".modal-btn-box button").addClass(findJob);

            //問卷統計 - 還沒找到工作
            $(".survey_stepTwo_notYet").on("click", function() {
                layer.close(survey_stepOne); //關閉上一層
                var survey_stepTwo_notYet = layer.open({
                    type: 1,
                    anim: 5,
                    area: ['39rem', ''],
                    fixed: false, //不固定
                    title: ['關閉履歷 - 問卷統計 - 還沒找到工作'],
                    shadeClose: true,
                    closeBtn: 1,
                    content: '\
                    <div class="survey_content">\
                        <p class="mb-16"><strong>感謝您，請協助我們瞭解關閉履歷的原因：</strong></p>\
                        <div class="choose_survey">\
                            <input type="radio" id="close_reason_1" name="close_reason" value="close_reason_1">\
                            <label for="close_reason_1" class="clre btn btn--border--primary btn-survey-lg mb-8">還沒有完成履歷</label>\
                            <input type="radio" id="close_reason_2" name="close_reason" value="close_reason_2">\
                            <label for="close_reason_2" class="clre btn btn--border--primary btn-survey-lg mb-8">有另一份履歷，這份先關閉</label>\
                            <input type="radio" id="close_reason_3" name="close_reason" value="close_reason_3">\
                            <label for="close_reason_3" class="clre btn btn--border--primary btn-survey-lg mb-8">有廠商一直打擾</label>\
                            <input type="radio" id="close_reason_4" name="close_reason" value="close_reason_4">\
                            <label for="close_reason_4" class="clre btn btn--border--primary btn-survey-lg mb-8">只想被自己有興趣的廠商瀏覽</label>\
                            <input type="radio" id="close_reason_5" name="close_reason" value="close_reason_5">\
                            <label for="close_reason_5" class="clre btn btn--border--primary btn-survey-lg mb-8">找不到合適的工作</label>\
                            <input type="radio" id="close_reason_6" name="close_reason" value="close_reason_6">\
                            <label for="close_reason_6" class="clre btn btn--border--primary btn-survey-lg mb-8">不想要收到配對信</label>\
                            <input type="radio" id="close_reason_7" name="close_reason" value="close_reason_7">\
                            <label for="close_reason_7" class="btn btn--border--primary btn-survey-lg mb-8">其他原因，先關閉履歷<br>\
                                <input class="close_reason_others self-input-chk" placeholder="請填入文字" type="text" value="">\
                            </label>\
                        </div>\
                    </div>\
                    <div class="modal-btn-box center">\
                        <button type="submit" class="btn btn--primary btn-next">下一步</button>\
                    </div>'
                });
                //控制其他原因填寫顯示
                $("#close_reason_7").click(function() {
                    $(".close_reason_others").show();
                });
                $(".clre").click(function() {
                    $(".close_reason_others").hide();
                });
                //在下一步加入指定元素
                $('input:radio').change(function() {
                    var close_reason = $("input[name='close_reason']:checked").val();
                    $(".modal-btn-box button").removeClass();
                    $(".modal-btn-box button").off("click");
                    $(".modal-btn-box button").addClass("btn btn--primary btn-next");
                    $(".modal-btn-box button").addClass(close_reason);

                    $(".close_reason_1").on("click", function() {
                        layer.close(survey_stepTwo_notYet); //關閉上一層
                        var close_reason_1 = layer.open({
                            type: 2,
                            anim: 5,
                            area: ['40rem', '45rem'],
                            fixed: false, //不固定
                            title: ['關閉履歷 - 問卷統計 - 還沒有完成履歷'],
                            shadeClose: true,
                            closeBtn: 1,
                            content: 'close_reason_1.html'
                        });
                    });
                    $(".close_reason_2").on("click", function() {
                        layer.close(survey_stepTwo_notYet); //關閉上一層
                        var close_reason_2 = layer.open({
                            type: 2,
                            anim: 5,
                            area: ['40rem', '45rem'],
                            fixed: false, //不固定
                            title: ['關閉履歷 - 問卷統計 - 有另一份履歷，這份先關閉'],
                            shadeClose: true,
                            closeBtn: 1,
                            content: 'close_reason_2.html'
                        });
                    });
                    $(".close_reason_3").on("click", function() {
                        layer.close(survey_stepTwo_notYet); //關閉上一層
                        var close_reason_3 = layer.open({
                            type: 2,
                            anim: 5,
                            area: ['40rem', '45rem'],
                            fixed: false, //不固定
                            title: ['關閉履歷 - 問卷統計 - 有廠商一直打擾'],
                            shadeClose: true,
                            closeBtn: 1,
                            content: 'close_reason_3.html'
                        });
                    });
                    $(".close_reason_4").on("click", function() {
                        layer.close(survey_stepTwo_notYet); //關閉上一層
                        var close_reason_4 = layer.open({
                            type: 2,
                            anim: 5,
                            area: ['40rem', '45rem'],
                            fixed: false, //不固定
                            title: ['關閉履歷 - 問卷統計 - 只想被自己有興趣的廠商瀏覽'],
                            shadeClose: true,
                            closeBtn: 1,
                            content: 'close_reason_4.html'
                        });
                    });
                    $(".close_reason_5").on("click", function() {
                        layer.close(survey_stepTwo_notYet); //關閉上一層
                        var close_reason_5 = layer.open({
                            type: 2,
                            anim: 5,
                            area: ['40rem', '45rem'],
                            fixed: false, //不固定
                            title: ['關閉履歷 - 問卷統計 - 找不到合適的工作'],
                            shadeClose: true,
                            closeBtn: 1,
                            content: 'close_reason_5.html'
                        });
                    });
                    $(".close_reason_6").on("click", function() {
                        layer.close(survey_stepTwo_notYet); //關閉上一層
                        var close_reason_6 = layer.open({
                            type: 2,
                            anim: 5,
                            area: ['40rem', '45rem'],
                            fixed: false, //不固定
                            title: ['關閉履歷 - 問卷統計 - 不想要收到配對信'],
                            shadeClose: true,
                            closeBtn: 1,
                            content: 'close_reason_6.html'
                        });
                    });
                    $(".close_reason_7").on("click", function() {
                        layer.close(survey_stepTwo_notYet); //關閉上一層
                        var close_reason_7 = layer.open({
                            type: 2,
                            anim: 5,
                            area: ['40rem', '45rem'],
                            fixed: false, //不固定
                            title: ['關閉履歷 - 問卷統計 - 其他原因，先關閉履歷'],
                            shadeClose: true,
                            closeBtn: 1,
                            content: 'close_reason_7.html'
                        });
                    });
                });
            });
            //問卷統計 - 已經找到工作了
            $(".survey_stepTwo_found").on("click", function() {
                layer.close(survey_stepOne); //關閉上一層
                var survey_stepTwo_found = layer.open({
                    type: 1,
                    anim: 5,
                    area: ['24rem', ''],
                    fixed: false, //不固定
                    title: ['關閉履歷 - 問卷統計 - 已經找到工作了'],
                    shadeClose: true,
                    closeBtn: 1,
                    content: '\
                    <div class="modal-content center">\
                        <p class="mb-16"><strong>感謝您，請協助我們瞭解關閉履歷的原因：</strong></p>\
                        <div class="choose_survey">\
                            <div>\
                                <input type="radio" id="pipeline-1111" name="pipeline" value="survey_step3_1111">\
                                <label for="pipeline-1111" class="btn btn--border--primary btn-survey-xlg mb-8">透過 1111 找到適合的工作</label>\
                            </div>\
                            <div>\
                                <input type="radio" id="pipeline-other" name="pipeline" value="survey_step3_other">\
                                <label for="pipeline-other" class="btn btn--border--primary btn-survey-xlg mb-8">透過其他管道找到適合的工作</label>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="modal-btn-box center">\
                        <button type="submit" class="btn btn--primary btn-next">下一步</button>\
                    </div>'
                });
                //在下一步加入指定元素
                $('input:radio').change(function() {
                    var pipeline = $("input[name='pipeline']:checked").val();
                    $(".modal-btn-box button").removeClass();
                    $(".modal-btn-box button").off("click");
                    $(".modal-btn-box button").addClass("btn btn--primary btn-next");
                    $(".modal-btn-box button").addClass(pipeline);

                    $(".survey_step3_1111").on("click", function() {
                        layer.close(survey_stepTwo_found); //關閉上一層
                        var survey_step3_1111 = layer.open({
                            type: 2,
                            anim: 5,
                            area: ['40rem', '45rem'],
                            fixed: false, //不固定
                            title: ['關閉履歷 - 問卷統計 - 透過 1111 找到適合的工作'],
                            shadeClose: true,
                            closeBtn: 1,
                            content: 'survey_step3_1111.html'
                        });
                    });
                    $(".survey_step3_other").on("click", function() {
                        layer.close(survey_stepTwo_found); //關閉上一層
                        var survey_step3_other = layer.open({
                            type: 2,
                            anim: 5,
                            area: ['40rem', '45rem'],
                            fixed: false, //不固定
                            title: ['關閉履歷 - 問卷統計 - 透過其他管道找到適合的工作'],
                            shadeClose: true,
                            closeBtn: 1,
                            content: 'survey_step3_other.html'
                        });
                    });
                });
            });
            //問卷統計 - 暫時不找工作
            $(".survey_stepTwo_temporary").on("click", function() {
                layer.close(survey_stepOne); //關閉上一層
                var survey_stepTwo_temporary = layer.open({
                    type: 2,
                    anim: 5,
                    area: ['40rem', '45rem'],
                    fixed: false, //不固定
                    title: ['關閉履歷 - 問卷統計 - 暫時不找工作'],
                    shadeClose: true,
                    closeBtn: 1,
                    content: 'survey_stepTwo_temporary.html'
                });
            });
        });
    });
});
// Resume Open
$(".modal_resume_open").on("click", function() {
    layer.open({
        type: 1,
        anim: 5,
        area: ['24rem', ''],
        title: ['開啟履歷'],
        content: '\
        <div class="modal-content">\
            <p class="mb-4">履歷表開啟後，系統於特定時間，自動將您的履歷資料推薦至符合條件之公司。用以提高您的面試機會！</p>\
            <p class="push-right mt-8">\
                <input class="checkbox-van-inp" id="match" type="checkbox" checked>\
                <label class="checkbox-van-lab" for="match">\
                    <i class="checkbox" aria-hidden="true"></i>\
                    <font class="align-middle text--13">開啟此履歷的配對信件</font>\
                </label>\
            </p>\
            <div class="clear-fix"></div>\
        </div>\
        <div class="modal-btn-box">\
            <a href="javascript:layer.close(layer.index);" class="btn btn--border--primary mr-8">取消</a>\
            <button type="submit" class="btn btn--primary">開啟履歷</button>\
        </div>'
    });
});
// Resume Open the same
$(".modal_resume_open_congenial").on("click", function() {
    layer.open({
        type: 1,
        anim: 5,
        area: ['30rem', ''],
        title: ['開啟履歷'],
        content: '\
        <div class="modal-content">\
            <p class="text--grey">相同性質的履歷一次僅可開啟一份，請選擇您要開啟的履歷：</p>\
            <form class="modal_form">\
                <label for="op1" class="radio block">\
                    <input type="radio" name="rdo" id="op1" class="hidden">\
                    <span class="label"></span>\
                    <font class="align-middle text--black">獵頭履歷表</font> - \
                    <span class="align-middle text--lightgrey">上次編輯時間：2019/07/05 18:15</span>\
                    <p class="resume-caption">全職 / 行政人員、餐飲人員、行政人員、餐飲人員</p>\
                </label>\
                <div class="clear-fix"></div>\
                <label for="op2" class="radio mt-8 block">\
                    <input type="radio" name="rdo" id="op2" class="hidden">\
                    <span class="label"></span>\
                    <font class="align-middle text--black">獵頭履歷表-2</font> - \
                    <span class="align-middle text--lightgrey">上次編輯時間：2019/07/05 18:15</span>\
                    <p class="resume-caption">全職 / 行政人員、餐飲人員、行政人員、餐飲人員</p>\
                </label>\
            </form>\
            <p class="mt-16 mb-8 text--grey">履歷表開啟後，系統於特定時間，自動將您的履歷資料推薦至符合條件之公司。用以提高您的面試機會！</p>\
            <p class="align-right mt-8">\
                <input class="checkbox-van-inp" id="match" type="checkbox" checked>\
                <label class="checkbox-van-lab" for="match">\
                    <i class="checkbox" aria-hidden="true"></i>\
                    <font class="align-middle text--13">開啟此履歷的配對信件</font>\
                </label>\
            </p>\
        </div>\
        <div class="modal-btn-box">\
            <a href="javascript:layer.close(layer.index);" class="btn btn--border--primary mr-8">取消</a>\
            <button type="submit" class="btn btn--primary">開啟履歷</button>\
        </div>'
    });
});

/// 帳號資料 ///
//  會員資料 - Fb Unsync
$(".modal_fb_unsync").on("click", function() {
    layer.open({
        type: 1,
        anim: 5,
        area: ['24rem', ''],
        title: ['取消同步Facebook帳號'],
        shadeClose: true,
        content: '\
        <div class="modal-content">\
            <p>解除連接後，您將無法使用FB帳號登入！</p>\
        </div>\
        <div class="modal-btn-box">\
            <a href="javascript:layer.close(layer.index);" class="btn btn--border--primary  mr-8">取消</a>\
            <button type="submit" class="btn btn--primary ">確認</button>\
        </div>'
    });
});
//  會員資料 - inelegance
$(".modal_inelegance").on("click", function() {
    layer.open({
        type: 1,
        anim: 5,
        area: ['24rem', ''],
        title: ['含有不雅文字'],
        shadeClose: true,
        content: '\
        <div class="modal-content">\
            <p>您輸入的內容含有不雅文字<font class="text--danger">【○ ○ ○ 、X X X】</font>請移除後重新儲存！</p>\
        </div>\
        <div class="modal-btn-box">\
            <button type="submit" class="btn btn--primary">關閉</button>\
        </div>'
    });
});
//  會員資料 - Name Edit - 1
$(".modal_NameEdit_1").on("click", function() {
    layer.open({
        type: 1,
        anim: 5,
        area: ['24rem', ''],
        title: ['確定要修改姓名？'],
        shadeClose: true,
        content: '\
        <div class="modal-content">\
            <p>姓名僅可自行變更一次，請輸入您的真實姓名，下次修改，需待一個工作天由人工審核後才可完成變更！</p>\
        </div>\
        <div class="modal-btn-box">\
            <a href="javascript:layer.close(layer.index);" class="btn btn--border--primary layui-layer-close1 mr-8">取消</a>\
            <button type="submit" class="btn btn--primary ">確認編輯</button>\
        </div>'
    });
});
//  會員資料 - Name Edit - 2
$(".modal_NameEdit_2").on("click", function() {
    layer.open({
        type: 1,
        anim: 5,
        area: ['24rem', ''],
        title: ['確定要修改姓名？'],
        shadeClose: true,
        content: '\
        <div class="modal-content">\
            <p>修改姓名後，資料將進行人工審核(約1個工作天，不含例假日)審核通過後，新姓名才會出現於您的履歷中！</p>\
        </div>\
        <div class="modal-btn-box">\
            <a href="javascript:layer.close(layer.index);" class="btn btn--border--primary mr-8">取消</a>\
            <button type="submit" class="btn btn--primary">確認編輯</button>\
        </div>'
    });
});

// 會員資料 - Mobile Verification
$(".modal_mobile_verification").on("click", function() {
    layer.open({
        type: 1,
        anim: 5,
        area: ['30rem', ''],
        title: ['變更手機號碼'],
        content: '\
        <div class="modal-content verification">\
            <p class="center text--biscay">-- 需重新完成驗證才可變更手機號碼 --</p>\
            <div class="mt-16">\
                <span class="text--grey">目前手機號碼</span>\
                <span class="text--16 ml-16">0912345678</span>\
            </div>\
            <div class="mt-8">\
                <span class="text--grey">新手機號碼</span>\
                <input type="tel" class="ml-24" id="" value="" maxlength="15" placeholder="請輸入您的手機號碼">\
            </div>\
            <div class="mt-8">\
                <span class="text--grey">驗證碼</span>\
                <input type="text" class="ml-52" id="" value="" maxlength="15" placeholder="請輸入驗證碼">\
                <a href="#!" class="btn btn--apply verification-btn">取得驗證碼</a>\
            </div>\
            <div class="mt-8">\
                <span class="text--grey">驗證碼</span>\
                <input type="text" class="ml-52" id="" value="ABC-" maxlength="15" placeholder="請輸入驗證碼">\
                <a href="#!" class="btn btn--lightgrey verification-btn">4:15後可重新發送</a>\
            </div>\
            <p class="mt-8 ml-100 text--danger">您尚未輸入驗證碼！</p>\
            <p class="mt-8 ml-100 text--grey">驗證碼已發送至 0987654321</p>\
        </div>\
        <div class="modal-btn-box">\
            <a href="javascript:layer.close(layer.index);" class="btn btn--border--primary mr-8">取消</a>\
            <button type="submit" class="btn btn--primary ">確認編輯</button>\
        </div>'
    });
});

/// 守約會員 ///
// 守約 - Positive log
$(".modal_positive_log").on("click", function() {
    layer.open({
        type: 1,
        anim: 5,
        area: ['30rem', ''],
        title: ['失約回覆紀錄'],
        content: '\
        <div class="modal-content missing">\
            <div class="missing-header">\
                <strong class="text--biscay block mb-4">第一次失約</strong>\
                <dl>\
                    <dt>懲處方式：</dt>\
                    <dd>口頭警告，<br/>移除守約會員標章三個月 (2019/08/15-2019/11/15)</dd>\
                </dl>\
            </div>\
            <div class="missing-content">\
                <strong class="text--biscay block mb-4">處理紀錄</strong>\
                <dl>\
                    <dt>公司名稱：</dt>\
                    <dd>全球華人股份有限公司</dd>\
                </dl>\
                <dl>\
                    <dt>職務名稱：</dt>\
                    <dd>教育產業研究員</dd>\
                </dl>\
                <dl>\
                    <dt>失約問題：</dt>\
                    <dd>到職三日內(含第三日)，無故曠職</dd>\
                </dl>\
                <dl>\
                    <dt>失約時間：</dt>\
                    <dd>2019/08/15 15:30</dd>\
                </dl>\
                <div class="push-right">\
                    <span class="text--lightgrey">問題回報日期：2019/08/15</span>\
                </div>\
                <div class="clear-fix"></div>\
                <hr>\
                <dl>\
                    <dt>您的回覆：</dt>\
                    <dd>已與廠商改約面試日期，廠商記錯時間。</dd>\
                </dl>\
                <dl>\
                    <dt>聯絡時間：</dt>\
                    <dd>2019/08/15 18:00</dd>\
                </dl>\
                <dl>\
                    <dt>聯絡窗口：</dt>\
                    <dd>陳先生</dd>\
                </dl>\
                <dl>\
                    <dt>原　　因：</dt>\
                    <dd>記錯約定時間，記錯約定時間，記錯約定時間，記錯約定時間，記錯約定時間，記錯約定時間，記錯約定時間，記錯約定時間，記錯約定時間，記錯約定時間，記錯約定時間，記錯約定時間，記錯約定時間，記錯約定時間</dd>\
                </dl>\
                <div class="push-right">\
                    <span class="text--lightgrey">回覆日期：2019/08/15</span>\
                </div>\
                <div class="clear-fix"></div>\
                <hr>\
                <p>1111人力銀行專人與您電話連繫後結果：<br /><strong>已與本人確認此次失約屬實</strong></p>\
                <div class="push-right">\
                    <span class="text--lightgrey">電訪日期：2019/08/15</span>\
                </div>\
                <div class="clear-fix"></div>\
            </div>\
        </div>'
    });
});

// 守約 - Missing Alerts
$(".modal_missing_alerts").on("click", function() {
    layer.open({
        skin: 'layer-negative',
        type: 1,
        anim: 5,
        area: ['30rem', ''],
        title: ['失約成立通知'],
        content: '\
        <div class="modal-content missing">\
            <div class="missing-header miss">\
                <span><a href="#!">公司名稱公司名稱</a> 反映您於 2019/08/10 失約。<br />1111人力銀行專人多次欲與您電訪未接；故「第一次失約成立」<br /><font class="text--negative">如廠商回報內容與事實不符，請盡速來電1111人力銀行，將有專人協助您處理。</font>\
                </span>\
            </div>\
            <div class="missing-content">\
                <p>提醒您！<br />如您已答應公司「面試邀約」、「到職邀約」，但當日臨時有事無法前往，請務必提前並主動連繫公司取消邀約。<br />避免失約懲處影響您的求職權益！</p>\
                <hr>\
                <p class="text--negative">注意！ 第二次失約，將停權您的求職帳號一個月，<br />永久不得申請守約會員，為保障您的求職權益，請珍惜個人信用。</p>\
            </div>\
        </div>\
        <div class="modal-btn-box">\
            <a href="javascript:;" target="_parents" class="btn btn--negative">查詢失約紀錄</a>\
        </div>'
    });
});

// 守約 - Many Missing
$(".modal_many_missing").on("click", function() {
    layer.open({
        skin: 'layer-negative',
        type: 1,
        anim: 5,
        area: ['30rem', ''],
        title: ['多次失約提醒'],
        content: '\
        <div class="modal-content missing">\
            <div class="missing-header miss">\
                <strong class="text--negative">注意！您已累積N次失約紀錄！</strong>\
            </div>\
            <div class="missing-content">\
                <p>如您已答應公司「面試邀約」、「到職邀約」，但當日臨時有事無法前往，請務必提前並主動連繫公司取消邀約。</p>\
                <hr>\
                <p>提醒您！多次失約且經查證屬實者，<br/>1111人力銀行得<strong>「永久關閉履歷表」</strong>及<strong>「拒絕使用網站登錄」</strong>等求職功能服務。<br/>請珍惜個人信用評價。</p>\
            </div>\
        </div>\
        <div class="modal-btn-box">\
            <a href="javascript:;" target="_parents" class="btn btn--negative ">查詢失約紀錄</a>\
        </div>'
    });
});

/// 封鎖產業及公司 ///
// 封鎖 - Modal Add Blockade
$(".modal_add_blockade").on("click", function() {
    layer.open({
        type: 1,
        anim: 5,
        area: ['80%', ''],
        title: ['新增封鎖公司'],
        shadeClose: true,
        content: '\
        <div class="modal-content">\
            <div class="search-block center">\
                <p class="mb-8">請輸入封鎖關鍵字或完整統編 (查詢統編：<a href="https://findbiz.nat.gov.tw/fts/query/QueryBar/queryInit.do" target="_blank">經濟部</a>、<a href="https://www.etax.nat.gov.tw/etwmain/front/ETW113W1_2" target="_blank">財政部</a>)</p>\
                <form id="" action="" method="">\
                    <input type="text" name="" value="" placeholder="請輸入欲封鎖的關鍵字詞" class="input-error">\
                    <button type="submit" value="搜尋" class="btn btn--primary"><i class="icon-search pr-8"></i>搜尋</button>\
                </form>\
            </div>\
            <hr>\
            <div class="search-content center margin-16">\
                <!-- 搜尋成功 -->\
                <!-- <p class="mb-8">您設定的關鍵字為<font class="text--danger">兩班家有限公司</font>，共有 <font class="text--danger">1</font> 筆符合的公司</p><div class="result-hd">- 點擊<font class="text--danger">"封鎖公司"</font>封鎖單筆公司或點擊<font class="text--danger">"全部封鎖"</font>封鎖全部資料 -</div><div class="search-result"><ul><li><a href="#!">兩班家有限公司</a></li><li><span>餐廳／餐館</span></li><li><span>新北市汐止區</span></li><li><a href="#!" class="btn btn--border--primary btn--sm">封鎖公司</a></li></ul></div> -->\
                <!-- 搜尋關鍵字失敗 -->\
                <!-- <p class="mb-16">您設定的關鍵字為<font class="text--danger">兩班家有限公司</font>，共有 <font class="text--danger">0</font> 筆符合的公司</p><div class="result-hd">- 點擊<font class="text--danger">"封鎖公司"</font>封鎖單筆公司或點擊<font class="text--danger">"全部封鎖"</font>封鎖全部資料 -</div><div class="search-result align-left"><p class="mt-16 text--danger"><strong>可能有以下情況：</strong></p><span>● 該公司尚未開放徵才。</span><br/><span>● 您仍可對關鍵字「<font class="text--lightgrey">兩班家有限公司</font>」進行封鎖，待該公司開放徵才後，即無法查詢您的履歷。</span><br/><span>● 建議您可更換關鍵字 (公司名/品牌名) 重新比對。</span></div> -->\
                <!-- 搜尋統編失敗 -->\
                <p class="mb-16">您設定的統一編號為<font class="text--danger">11111111</font>，共有 <font class="text--danger">0</font> 筆符合的公司</p>\
                <div class="result-hd">- 點擊<font class="text--danger">"封鎖公司"</font>封鎖單筆公司或點擊<font class="text--danger">"全部封鎖"</font>封鎖全部資料 -</div>\
                <div class="search-result align-left">\
                    <p class="mt-16 text--danger"><strong>可能有以下情況：</strong></p>\
                    <span>● 該公司於註冊時「未登錄公司統編」或「尚未開放徵才」。</span><br/>\
                    <span>● 您仍可對統編「<font class="text--lightgrey">16776111</font>」進行封鎖，待該公司開放徵才後，即無法查詢您的履歷。</span><br/>\
                    <span>● 建議您可使用「公司關鍵字」搜尋，同時封鎖該公司的統編及公司名稱。</span>\
                </div>\
            </div>\
            <div class="search-qa">\
                <ul>\
                    <li>\
                        <p class="text--biscay mb-4">- 為什麼搜尋不到要封鎖的公司呢？</p>\
                        <span class="text--grey ml-8">該公司於註冊時「未登錄公司統編」或「尚未開放徵才」您仍可對該公司「統編」及「關鍵字」進行封鎖，待該公司開放徵才後，即無法查詢您的履歷。</span>\
                    </li>\
                    <li>\
                        <p class="text--biscay">- 封鎖大型集團或金控公司時？</p>\
                        <span class="text--grey ml-8">EX：不好金控/不好人壽/不好投顧/不好證券/不好保險，於關鍵字您只需封鎖"不好"並點擊下方「全部封鎖」，即可封鎖所有名稱包含"不好"的公司；若同集團下有不同公司名，需另設關鍵字封鎖。</span>\
                    </li>\
                    <li>\
                        <p class="text--biscay">- 封鎖特定產業時？</p>\
                        <span class="text--grey ml-8">EX：想封鎖保險、銀行、人壽….，可至<a href="#!">封鎖產業設定</a>封鎖，更能完整封鎖該產業，確保您不被打擾。</span>\
                    </li>\
                    <li>\
                        <p class="text--biscay">- 前東家負責人開了好多間公司，我可以只封鎖負責人或人資的名子嗎？</p>\
                        <span class="text--grey ml-8">封鎖關鍵字僅限於公司名稱，輸入負責人或人資的名子，是無法封鎖的。</span>\
                    </li>\
                    <li>\
                        <p class="text--biscay">- 品牌名及公司名，該選擇哪個關鍵字封鎖呢？</p>\
                        <span class="text--grey ml-8">徵才廠商於註冊時皆登記公司名，建議您可同時封鎖公司及品牌，更能確保履歷不被搜尋到。</span>\
                    </li>\
                </ul>\
            </div>\
        </div>\
        <div class="modal-btn-box">\
            <a href="javascript:layer.close(layer.index);" class="btn btn--border--primary mr-8">取消</a>\
            <a href="javascript:;" class="btn btn--primary">全部封鎖</a>\
        </div>'
    });
});

// 封鎖 - Modal View Blockade
$(".modal_view_blockade").on("click", function() {
    layer.open({
        type: 1,
        anim: 5,
        area: ['80%', ''],
        title: ['即時封鎖公司名單'],
        shadeClose: true,
        content: '\
        <div class="modal-content">\
            <div class="search-content center">\
                <p class="mb-8 mr-8 align-right"> 目前共有<font class="text--danger"> 2 </font>間公司符合此條件</p>\
                <div class="result-hd">關鍵字：<font class="text--danger">12345有限公司</font></div>\
                <div class="search-result">\
                    <ul>\
                        <li>\
                            <a href="#!">兩班家有限公司</a>\
                        </li>\
                        <li>\
                            <span>餐廳／餐館</span>\
                        </li>\
                        <li>\
                            <span>新北市汐止區</span>\
                        </li>\
                    </ul>\
                </div>\
            </div>\
        </div>\
        <div class="modal-btn-box">\
            <a href="javascript:layer.close(layer.index);" class="btn btn--primary ">關閉</a>\
        </div>'
    });
});

/// 配對工作 ///
// 配對 - 新增配對工作 Matchset Add
$(".modal_matchset_add").on("click", function() {
    layer.open({
        type: 1,
        anim: 5,
        area: ['30rem', ''],
        title: ['新增配對工作'],
        shadeClose: true,
        content: '\
        <div class="modal-content">\
            <form class="modal_form">\
                <p class="mb-4">配對工作名稱：<input type="text" value="" style="width: 70%;" placeholder="請輸入配對工作名稱"></p>\
                <p>配對條件來源：\
                    <select>\
                        <option value="">空白配對工作</option>\
                        <option disabled="disabled">------------- 複製 -------------</option>\
                        <option value="">履歷 - 我的第1份履歷</option>\
                        <option value="">履歷 - 我的第2份履歷</option>\
                        <option value="">配對 - 我的第1份配對</option>\
                    </select>\
                </p>\
            </form>\
        </div>\
        <div class="modal-btn-box">\
            <a href="javascript:layer.close(layer.index);" class="btn btn--border--primary mr-8">取消</a>\
            <button type="submit" class="btn btn--primary ">下 一 步</button>\
        </div>'
    });
});

// 配對 - 配對接受設定 Matchset Setting
$(".modal_matchset_setting").on("click", function() {
    layer.open({
        type: 1,
        anim: 5,
        title: ['履歷 1 配對 - 配對通報接收設定'],
        shadeClose: true,
        content: '\
        <div class="modal-content">\
            <form class="modal_form">\
                <p>請選擇寄送方式：\
                    <select class="ml-8">\
                        <option value="">每日寄送</option>\
                        <option value="">每週寄送</option>\
                    </select>\
                </p>\
                <input class="checkbox-van-inp" id="matchset1" type="checkbox">\
                <label class="checkbox-van-lab" for="matchset1">\
                    <i class="checkbox" aria-hidden="true"></i>\
                    <span class="modal_epaper">當日沒有新職缺時,不要寄給我</span>\
                </label>\
            </form>\
        </div>\
        <div class="modal-btn-box">\
            <a href="javascript:layer.close(layer.index);" class="btn btn--border--primary mr-8">取消</a>\
            <button type="submit" class="btn btn--primary">確認編輯</button>\
        </div>'
    });
});

// 配對 - 刪除配對 Matchset Delete
$(".modal_matchset_delete").on("click", function() {
    layer.open({
        skin: 'layer-delete',
        type: 1,
        anim: 5,
        area: ['24rem', ''],
        title: ['確定要刪除嗎？'],
        shadeClose: true,
        content: '\
        <div class="modal-content">\
            <p>確定要刪除「自訂 2 配對」嗎？</p>\
        </div>\
        <div class="modal-btn-box">\
            <button type="submit" class="btn btn--danger mr-8">確定刪除</button>\
            <a href="javascript:layer.close(layer.index);" class="btn btn--border--danger">取消</a>\
        </div>'
    });
});

// 履歷 - 請選擇社團經歷應對的學歷資料
$(".modal_academic_sync").on("click", function() {
    layer.open({
        skin: 'layer-negative',
        type: 1,
        anim: 5,
        area: ['24rem', ''],
        title: ['請選擇社團經歷應對的學歷資料！'],
        content: '\
            <div class="modal-content">\
                <p class="text--danger text--13 center">您尚有未選擇應對學歷的社團經歷</p>\
                <ul class="academic-list">\
                    <li>\
                    ● 班級幹部 / 班長 <font class="text--lightgrey">(1年1個月)</font>\
                    <p class="mt-8">\
                        <select name="">\
                            <option value="">德明財經科技大學</option>\
                        </select>\
                    </p>\
                    <a href="javascript:;" title="刪除學歷" class="btn btn--sm mr-8">\
                        <i class="icon-icon-trash" aria-hidden="true"></i>\
                        <span>刪除</span>\
                    </a>\
                    </li>\
                    <li>\
                    ● 班級幹部 / 班長 <font class="text--lightgrey">(1年1個月)</font>\
                    <p class="mt-8">\
                        <select name="">\
                            <option value="">德明財經科技大學</option>\
                        </select>\
                    </p>\
                    <a href="#!" title="刪除學歷" class="btn btn--sm mr-8">\
                        <i class="icon-icon-trash" aria-hidden="true"></i>\
                        <span>刪除</span>\
                    </a>\
                    </li>\
                </ul>\
            </div>\
            <div class="modal-btn-box">\
                <a href="javascript:layer.close(layer.index);" class="btn btn--border--negative  mr-8">取消</a>\
                <button type="submit" class="btn btn--negative ">確定</button>\
            </div>'
    });
});