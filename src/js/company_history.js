function block() {
	document.getElementById('block').style.display = 'inline-block';
}
//=====控制刪除按鈕排序和計數=============/
var sortdeleteArray = [];
$('sortdelete').addEventListener('click', function(event) {
	var sortdeleteInput = document.getElementsByName('del');
	//console.log(sortdeleteInput);
	var tar = event.target || event.srcElement;
	//console.log(tar.nodeName);
	//console.log(tar.name);

	//解決label標籤觸發兩次點擊事件的bug
	if (tar.nodeName.toLowerCase() == 'label') {
		return;
	}
	if (tar.name == 'del') {
		for (var i = 0; i < sortdeleteInput.length; i++) {
			sortdeleteInput[i].removeAttribute('disabled');
		}
		if (tar.nodeName.toLowerCase() == 'input') {
			if (tar.checked == true) {
				sortdeleteArray.push(tar.value); //已選擇項目push進數組
			} else if (tar.checked == false) {
				sortdeleteArray.removeByValue(tar.value); //選擇後又刪除的項目也從數組中移除
				getSibling(getSibling(tar)).innerHTML = '<div class="checkbox-text"><div class="text-delete">刪除</div></div>';
			} else {}
		} else {}


		//計數
		$('totaldelete').innerHTML = sortdeleteArray.length;
		//添加順序
		for (var i = 0; i < sortdeleteInput.length; i++) {
			var loca = sortdeleteArray.indexOf(sortdeleteInput[i].value);

			if (loca != -1) {
				var orderSpan = getSibling(getSibling(sortdeleteInput[i]));
				orderSpan.innerHTML = '<div class="checkbox-text"><div class="text-delete">已選</div>' + '<span class="num-red">(</span>' + (loca + 1) + '<span class="num-red">)</span></div>';
			} else {}
		}
	}
	//console.log(sortdeleteArray);
});

function $(id) {
	return document.getElementById(id);
}

//從數組刪除指定值元素
Array.prototype.removeByValue = function(val) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == val) {
			this.splice(i, 1);
			break;
		}
	}
}
//事件監聽
// function addEvent(obj,event,fn){
// 	if(obj.attachEvent){
// 		obj.attachEvent('on'+event,fn);
// 	}else{
// 		obj.addEventListener(event,fn,false);
// 	}
// }

//獲取兄弟節點
function getSibling(node) {
	var n = node.nextSibling;
	while (n && n.nodeType != 1) { //
		n = n.nextSibling;
	}
	return n;
}

//=====刪除按鈕排序和計數 End=============/