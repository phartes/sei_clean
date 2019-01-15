$(document).ready(function() {

    var iframeObj = $('#ifrVisualizacao').contents();
    
    parent.changeImgToLink(parent.arrayIconsUrl2, iframeObj);
    parent.insertIconToButton(parent.arrayIconsName, iframeObj);
    parent.changeInputToButton(parent.arrayInputButton, iframeObj);

    $('#divArvoreAcoes', iframeObj).find('img').each(function( index ) {
    	var _this = $( this );
    	var alt = _this.attr('alt');
    	var src = _this.attr('src');

        $.each(parent.arrayIconsUrl, function( key, value ) {
            if ( src.indexOf(value.url) !== -1 ) {
        		_this.closest('a').addClass('iconMenuNew tooltipInit').attr('title',alt).html('<i alt="'+alt+'" class="'+value.icontype+' fa-'+value.icon+'"></i>');
            }
        });
    });
    
    parent.tooltipInit(iframeObj);

});