var common = {
    /**
     * Show error
     * Author: Hoangquynh (05/09/2022)
     * @param {Array} msgErrors 
     */
    showErrorDialog(msgError) {
        try {
            //Khai báo html của dialog
            let dialogHTML = $(`        
            <div id="dglDialog3" class="dialog">
                <div class="dialog__content">
                    <div class="dialog__button dialog__button--close form-btn-close">
                        <i class="fas fa-times"></i>
                    </div>
                    <div class="dialog__header">Thông báo</div>
                    <div class="dialog__body">
                    </div>
                    <div class="dialog__footer">
                        <div class="dialog__button dialog__button--success btn btn--primary">Đồng ý</div>
                    </div>
                </div>
            </div>`);
            //build nội dung của dialog
            var dialogBody = $(dialogHTML).find('.dialog__body');
            // Append các nội dung thông báo mới:
            if(msgError){
                for (const msg of msgError) {
                    let text = `<div>${msg}</div>`;
                    dialogBody.append(text);
                }
            }
            //Hiện nội dung thông báo
            // $(dialogHTML).css("display", "block");
            $('body').append(dialogHTML);
        } catch (error) {
            console.log(error);
        }
    }
}