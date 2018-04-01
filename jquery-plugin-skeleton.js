import $ from 'jquery'

const jqueryPluginSkeleton = (($) => {

    const NAME  = 'jqueryPluginSkeleton';
    const DATA_KEY  = 'jits.jqueryPluginSkeleton';

    class jqueryPluginSkeleton {

        constructor(element, params) {
            this._element = element;
            this._params = params;
            this.setEvents();
        };

        setEvents(){
            let self = this;
            $('.badge', this._element).click(function(e){
                self.click($(e.target));
            });
        }

        click($badge) {
            if($badge.hasClass(this._params.selectedClass)){
                $badge.addClass(this._params.defaultClass)
                      .removeClass(this._params.selectedClass);
            }else{
                $badge.addClass(this._params.selectedClass)
                      .removeClass(this._params.defaultClass);
            }
            this.loadItems();
        }

        loadItems(){
            console.log('Load at:' + $(this._element).data('url'));
        }

        // Static
        static _jQueryInterface(config) {
            const defauts  =
                {
                    selectedClass: "badge-primary",
                    defaultClass: "badge-disabled",
                };
            let params = $.extend(defauts, config);
            return this.each(function () {
                const $element = $(this);
                let data = $element.data(DATA_KEY);
                if (!data) {
                    data = new badgeFilters(this, params);
                    $element.data(DATA_KEY, data);
                }

                if (config === 'click') {
                    data[config]()
                }
            })
        }
    }

    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME]             = jqueryPluginSkeleton._jQueryInterface;
    $.fn[NAME].Constructor = jqueryPluginSkeleton;
    $.fn[NAME].noConflict  = function () {
        $.fn[NAME] = JQUERY_NO_CONFLICT
        return jqueryPluginSkeleton._jQueryInterface
    };
    return jqueryPluginSkeleton;
})($);

export default jqueryPluginSkeleton