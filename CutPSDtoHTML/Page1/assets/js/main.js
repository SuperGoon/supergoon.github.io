$('ul a').click(function() {
    let name_step = $(this).data('step')
    let posY = ('.'+name_step).offsetY()
    $('.'+name_step).offsetY()
})