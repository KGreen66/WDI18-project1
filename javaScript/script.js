console.log('js is working')
$('button').on('click', function(){
    console.log($(this).siblings('.back').children('p.question').text())
})