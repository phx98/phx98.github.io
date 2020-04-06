$('.carousel').carousel({
  interval: false
})
$('#lasttop').click(function () {
  var timer = setInterval(function (e) {
    var y = document.documentElement.scrollTop
    window.scrollTo(0, y - 20)
    if (y == 0) {
      clearInterval(timer)
    }
  }, 5)
})
// 第七部分的
$('.sevencontent .vb').focusin(function () {
  $(this).css({
    outline: '#bfdeff 3px solid',
  })
})
$('.sevencontent .vb').focusout(function () {
  $(this).css({
    outline: 'none',
  })
})
$('.sevencontent #sub').focusin(function () {
  $(this).css({
    outline: 'none',
  })
})


$('#about').click(function () {
  var timer = setInterval(function (e) {
    var y = document.documentElement.scrollTop
    window.scrollTo(0, y + 20)
    // console.log($('.middlecotent')[0].clientHeight)
    var x =$(document).find('.content').offset().top
    if (y >= x ) {
      clearInterval(timer)
    }
  }, 5)
})
$('#gallery').click(function () {
  var timer = setInterval(function (e) {
    var y = document.documentElement.scrollTop
    window.scrollTo(0, y + 20)
    var x =$(document).find('.fivecontent').offset().top
    if (y >= x ) {
      clearInterval(timer)
    }
  }, 5)
})
$('#contact').click(function () {
  var timer = setInterval(function (e) {
    var y = document.documentElement.scrollTop
    window.scrollTo(0, y + 20)
    var x =$(document).find('.lasttop').offset().top
    if (y >= x ) {
      clearInterval(timer)
    }
  }, 5)
})
//下半部内容
$('.butcontent a').click(function(){
  var timer = setInterval(function (e) {
    var y = document.documentElement.scrollTop
    window.scrollTo(0, y - 20)
    if (y == 0) {
      clearInterval(timer)
    }
  }, 5)
})