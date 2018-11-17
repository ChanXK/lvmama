// window.onload = function () {

// }

// 移动端一般很少使用on添加事件 使用最新的方式addEventListener的方法
// 有些H5C3里面新增的事件 只能使用 addEventListener方法添加




window.addEventListener('resize', function () {
    // 4. 调用JS的初始化函数初始化swiper
    // var mySwiper = new Swiper('.swiper-container', {
    //     direction: 'horizontal', // 垂直切换选项
    //     loop: true, // 循环模式选项 会自动在轮播图所有图片容器的最前面和最后面多放一张  第一张就是最后一张 最后一张就是第一张
    //     //初始化自动轮播图 参数也是一个对象 
    //     autoplay: {
    //         delay: 3000, //间隔时间 
    //         stopOnLastSlide: false, //在最后一张是否要停止  如果开启loop模式无效
    //         disableOnInteraction: false, // 是否要当(交互的时候)滑动的时候禁用自动轮播图
    //     },
    //     // 如果需要分页器
    //     pagination: {
    //         el: '.swiper-pagination',
    //     },

    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            bulletElement : 'li',
        },

        // 如果需要前进后退按钮
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },

        // 如果需要滚动条
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    })
})