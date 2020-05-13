/*
 * @Descripttion: 
 * @version: 
 * @Author: wangziyang
 * @Date: 2020-05-04 14:49:11
 * @LastEditors: wangziyang
 * @LastEditTime: 2020-05-13 08:43:16
 */
window.onload = function() {
    var close_icon = document.querySelector
    (".J_cup .J_cup-right .close_icon");

    var J_cup_right = document.querySelector
    (".J_cup  .J_cup-right");

    close_icon.onclick = function () {
        J_cup_right.style.display = "none";
    };

    var lis = this.document.querySelectorAll(".conve-top-list li");
    this.console.log(lis);
    var selectTapNum = 3;

    for (var i = 0; i < selectTapNum; ++i) { // 因为只有3个 li 标签为选项卡功能
        var li = lis[i];

        li.onmouseover = function() {
            for (var j = 0; j < selectTapNum; ++j) {
                lis[j].className = "conve-item-" + (j + 1);
            }
            this.className = this.className + " selected";
        };
    }

}