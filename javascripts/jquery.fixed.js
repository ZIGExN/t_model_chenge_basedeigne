/* ===================================================================

JavaScript Information

File name  :  jquery.fixed.js
Style info :  スクロール時固定ヘッダー（汎用バージョン）
jquery var :  v1.8.1 ~ v1.11.0 (2014.5現在)

=================================================================== */

(function($, window){
  var $win = $(window);

  /**
   * .zFixedHeader(header)
   * 対象エレメント内で、headerで指定された要素を固定配置します。
   *
   * @param header 固定配置するヘッダーのDOMもしくはjQueryセレクタ
   * @returns {jQuery}
   */
  $.fn.zFixedHeader = function(header) {
    var $header = $(header);

    return this.each(function(){
      var $wrapper = $(this);

      $(function(){
        // on ready
        $win.
          on('scroll', function(){
            var contWidth       = $wrapper.width(), //コンテナの横幅
                contHeight      = $wrapper.height(),//コンテナの高さ
                offset          = $wrapper.offset(),//コンテナの位置
                scrollTop       = $win.scrollTop(), //ウィンドウの座標0
                headerHeight    = $header.height(); //固定バーの高さ

            if (scrollTop > offset.top) {
              // 対象コンテナより下にスクロールされている場合
              $wrapper.css({paddingTop: headerHeight});
              $header.css({width: contWidth});

              if (scrollTop > (offset.top + contHeight)) {
                $header.css({
                  position    : 'absolute',
                  top         : '',
                  bottom      : '0'
                });
              } else {
                $header.css({
                  position   : 'fixed',
                  top        : '0',
                  bottom     : ''
                });
              }
            } else {
              // スクロール位置が対象コンテナより上の場合
              $wrapper.css({paddingTop: '0'});
              $header.css({
                position    : 'relative',
                top         : '',
                bottom      : ''
              });
            }
          }).
          trigger('scroll');
      });
    });
  };

  // デフォルトのクラス名でプラグインを初期化します。
  $(function(){
    // on ready
    $('.js_fixed_wrapper').each(function(){
      var $wrapper = $(this);
      var $bar = $wrapper.find('.js_fixed_bar');
      $wrapper.zFixedHeader($bar);
    });
  });
})(jQuery, this);
