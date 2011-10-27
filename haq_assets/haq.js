$(document).ready(function () {
    
    window.DEBUG = true;

    window.guardedItems = {};
    window.guardingItems = {};

    $('.item[guardingItem]').each(function(index, e) {
        var that = $(this);

        var guardE = $('input[name="'+that.attr('guardingItem')+'"]:checked');
        
        var desiredValue = that.attr('showIfValueIs');

        if (guardE && desiredValue) {
            if (guardE.val() == desiredValue) {
                that.show();
            } else {
                that.hide();
            }
            
            var radioEs = $('input[name="'+that.attr('guardingItem')+'"]');

         
            radioEs.change(function () {
                var me = $(this);
                if (desiredValue == me.val()) {
                    that.slideDown();
                    that.fadeIn();
                } else {
                    that.slideUp('fast');
                }
            });
        }

    });

    $('[emptyValue]').each(function(index, e) {
        var that = $(this);

        var emptyValue = that.attr('emptyValue');
        
        var on_focus =  function() {
            var me = $(this);

            me.val('');
            me.removeClass('empty');
            me.unbind('focus');
        }

        if (that.val() == '' || that.val() == emptyValue) {
            that.val(emptyValue);
            that.addClass('empty');

            that.bind('focus', on_focus);

        }


        that.bind('blur', function() {
            var me = $(this);

            if (me.val() == '' || me.val() == emptyValue) {

                me.val(emptyValue);                    
                me.addClass('empty');

                me.bind('focus', on_focus);

            }
        });       
    });


});
