const { default: validator } = require("validator")

function Validator(formSelector) {
    var formRules = {}

    /**
     * Quy ước tạo rules:
     * - Nếu có lỗi, thì return 'error message"
     * - Không có lỗi, return undefined
     */

    //Lấy ra element trong DOM theo "formSelector"
    var formElement = document.querySelector(formSelector)

    //Chỉ sử lý khi có element trong DOM


}