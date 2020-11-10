// 控制投遞狀態開合

$('.dropdown-btn').on('click', function(event) {
    var _this = $(this);
    event.preventDefault();
    _this.find('p.drop-down-time i').toggleClass('jb-db-chevron-up jb-db-chevron-down');
    _this.parents('li').find('.record-menu-list').slideToggle(300);
});

// 取消全部預約 Cancel AllReservation
$(".modal_cancel_All").on("click", function() {
    layer.open({
        skin: 'layer-delete',
        type: 1,
        anim: 5,
        area: ['24rem', ''],
        title: ['確定要取消全部預約嗎？'],
        shadeClose: true,
        content: '\
        <div class="modal-content">\
            <p>您確定要取消全部預約嗎？</p>\
        </div>\
        <div class="modal-btn-box">\
            <button type="submit" class="btn btn--red btn--md mr-8">確定</button>\
            <a href="#!" class="btn btn--border--red btn--md">取消</a>\
        </div>'
    });
});

// 取消已選取預約 Deselect
$(".modal_deselect").on("click", function() {
    layer.open({
        skin: 'layer-delete',
        type: 1,
        anim: 5,
        area: ['24rem', ''],
        title: ['確定要取消已選取預約嗎？'],
        shadeClose: true,
        content: '\
        <div class="modal-content">\
            <p>您確定要取消已選取預約嗎？</p> \
        </div>\
        <div class="modal-btn-box">\
            <button type="submit" class="btn btn--red btn--md mr-8">確定</button>\
            <a href="#!" class="btn btn--border--red btn--md">取消</a>\
        </div>'
    });
});

// 刪除全部紀錄 Delete Allrecord
$(".modal_delete_allrecord").on("click", function() {
    layer.open({
        skin: 'layer-delete',
        type: 1,
        anim: 5,
        area: ['24rem', ''],
        title: ['確定要刪除全部紀錄嗎？'],
        shadeClose: true,
        content: '\
        <div class="modal-content">\
            <p>您確定要刪除全部紀錄嗎？</p>\
        </div>\
        <div class="modal-btn-box">\
            <button type="submit" class="btn btn--red btn--md mr-8">確定刪除</button>\
            <a href="#!" class="btn btn--border--red btn--md">取消</a>\
        </div>'
    });
});

// 刪除已選取紀錄 Deselect record
$(".modal_deselect_record").on("click", function() {
    layer.open({
        skin: 'layer-delete',
        type: 1,
        anim: 5,
        area: ['24rem', ''],
        title: ['確定要刪除已選取紀錄嗎？'],
        shadeClose: true,
        content: '\
        <div class="modal-content">\
            <p>您確定要刪除已選取紀錄嗎？</p>\
        </div>\
        <div class="modal-btn-box">\
            <button type="submit" class="btn btn--red btn--md mr-8">確定刪除</button>\
            <a href="#!" class="btn btn--border--red btn--md">取消</a>\
        </div>'
    });
});