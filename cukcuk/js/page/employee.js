$(document).ready(function () {
    // alert(1);
    initEvent();
})

/***************************** 
* Tạo các event cho các element
* Author: hoangquynh (05/09/2022)
*/
function initEvent() {
    try {
        // Hiện form khi nhấn button thêm nhân viên
        $(".addEmployee").click(function () {
            $("#empDetail").css("display", "flex");
            // Focus ô đầu tiên
            $("#employee-info__id").focus();
        })
        // Ẩn form khi nhấn button close
        $(".form-btn-close").click(function () {
            $(this).parent().closest('.modal').css("display", "none");
        })
        // Ẩn dialog khi nhấn button close
        $("html").on("click",".dialog__button",function () {
            $(this).parent().closest('.dialog').css("display", "none");
        })
        // Cất dữ liệu khi nhấn button Save
        $("#btn-save").click(function () {
            saveData();
        });;
        // Ẩn form khi nhấn button Hủy
        $(".action__close").click(function () {
            $(this).parent().closest(".modal").css("display", "none");
        })
        //Lập trình phím tắt cho form
        $("#empDetail").keydown(function (e) {
            const key = e.keyCode;
            //Kiểm tra số
            // if(((key<48 || (key >57 && key <96) || key>105)) && key!=8 )
            // {
            //     e.preventDefault();
            // }
            if (key == MISAEmun.keyCode.Enter) {
                $("#btn-save").trigger("click");
            }
        });
    }
    catch (error) {
        console.log(error);
    }
}
/***************************** 
* Tạo các event cho các element
* Author: hoangquynh (05/09/2022)
*/
function saveData() {
    try {
        // Valifate dữ liệu:
        //1. Các thông tin bắt buộc nhập
        const empCode = $("#employee-info__id").val();
        const empName = $("#employee-info__name").val();
        let error = [];
        if (!empCode) {
            error.push(MISAResource.ErrorValidate.EmployeeCodeNotEmpty.VI);
        }
        if (!empName) {
            error.push(MISAResource.ErrorValidate.EmployeeNameNotEmpty.VI);
        }
        if(error.length > 0) {
            common.showErrorDialog(error);
        }
        //2. Các thông tin đúng định dạng

        //3. Thông tin ngày tháng hợp lệ

        //4. Khác
    } catch (error) {

    }
}

function showErrorDialog(msgError) {
    //Cập nhật nội dung câu cảnh báo
    var dialogBody = $("#dglDialog3 .dialog__body");
    //1 xóa nội dung thông báo cũ:
    dialogBody.empty();
    //2 cập nhật nội dung thông báo
    dialogBody.append(msgError);
    //Hiển thị thông báo
    $("#dglDialog3").show();
}