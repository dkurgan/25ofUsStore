"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (data) {
    return ("\n    <h3>\u041F\u0440\u0438\u0432\u0435\u0442 \u0431\u0438\u0437\u043D\u0435\u0441\u0432\u0443\u043C\u0430\u043D, \u0443 \u0442\u0435\u0431\u044F \u0442\u0443\u0442 \u0437\u0430\u043A\u0430\u0437</h3>\n    <p>\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0448\u043C\u043E\u0442\u043E\u043A: " + data.items.length + "</p>\n    <hr>\n    <p>\u0417\u0430\u043A\u0430\u0437 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439:</p>\n        " + items(data.items) + "\n    <hr>\n    <p>\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u044B: </p>\n    " + items(data.newSize) + "\n    <hr>\n    <p>\u0422\u0438\u043F \u0434\u043E\u0441\u0442\u0430\u0432\u043E\u0447\u043A\u0438: " + data.delivery.delType + " " + (data.delivery.delType === 'Курьер' ?
        "<br/>\u041F\u0440\u0438\u043C\u0435\u0440\u043D\u043E: " + data.delivery.cost + " \u0440\u0443\u0431\u043B\u044F\u0441\u0438\u043A\u043E\u0432" : '') + "</p>\n    <hr>\n    <p>\u0418\u043D\u0444\u0430 \u043F\u043E \u0447\u0435\u043B\u0438\u043A\u0441\u0443: </p>\n    " + orderDetails(data.order) + "\n    <hr>\n    <p>\u041A\u043E\u043C\u043C\u0435\u043D\u0442 \u043A \u0437\u0430\u043A\u0430\u0437\u0443: </p>\n    " + data.order.comment + "\n    <hr>\n    <br/>\n    <span>(c)2020 Danek in da Hauz</span>\n    ");
});
function items(items) {
    var html = items.map(function (item) {
        return ("<li>\n            <span>\u0418\u043C\u044F \u0430\u0439\u0442\u0435\u043C\u0430: " + item['title'] + "</span> <br/>\n            <span>\u0420\u0430\u0437\u043C\u0435\u0440 \u0438\u0442\u0430\u043C\u0430: " + item['size'] + "</span>\n            </li>\n            ");
    });
    return "<ul>" + html + "</ul>";
}
function orderDetails(info) {
    return ("\n        <span>\u0424\u0418O: " + info['firstName'] + " " + info['secondName'] + "</span> <br/>\n        <span>\u0410\u0434\u0440\u0435\u0441: " + info['postIndex'] + " " + info['postAdress'] + "</span> <br/>\n        <span>\u0414\u043E\u043F \u0438\u043D\u0444\u0430:</span>\n        <ul>\n            <li>email: " + info['email'] + "</li>\n            <li>\u043C\u0430\u0431\u0438\u043B\u043A\u0430: " + info['mobile'] + "</li>\n        </ul>\n        ");
}
