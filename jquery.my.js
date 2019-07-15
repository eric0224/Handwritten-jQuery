(() => {
    // $(选择器)
    function $(selector) {
        return new Init(selector);
    };

    // 构造函数
    function Init(selector) {
        let dom = document.querySelectorAll(selector);
        for (let i = 0; i < dom.length; i++) {
            this[i] = dom[i];
        }
        this.length = dom.length;
    }

    // 封装遍历伪数组的方法
    Init.prototype.each = function (callback) {
        for (let i = 0; i < this.length; i++) {
            callback(i, this[i]);
        }
    }


    /**
     * 实现设置css样式及获取css样式
     */
    Init.prototype.css = function (property, value) {
        if (value == undefined) {
            return window.getComputedStyle(this[0])[property];
        } else {
            let arr = ['width', 'height', 'top', 'left'];
            this.each((i, e) => {
                if (arr.indexOf(property) === -1) {
                    e.style[property] = value;
                } else {
                    if (value.toString().indexOf('px') === -1) {
                        e.style[property] = value + 'px';
                    } else {
                        e.style[property] = value;
                    }
                }
            })
        }
        return this;
    }


    /** 
    *实现jq对象.removeClass功能  移除类名功能
    */
    Init.prototype.removeClass = function (className) {
        this.each((i, e) => {
            e.classList.remove(className);
        })
    }


    /** 
    *实现jq对象.addClass功能   增加类名功能
    */
    Init.prototype.addClass = function (className) {
        this.each((i, e) => {
            e.classList.add(className);
        })
    }


    /** 
    *实现jq对象.toggleClass功能   类名切换功能
    */
    Init.prototype.toggleClass = function (className) {
        this.each((i, e) => {
            e.classList.toggle(className);
        })

    }

    window.$ = $;
})();


$('.box').toggleClass('box');