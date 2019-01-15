$(document).ready(function() {
    
    var iframeObj = $('#ifrArvore').contents();  
    setTimeout(function(){
         $( ".infraArvore", iframeObj ).css("background-image","url(/infra_js/arvore/line.gif)");
         $( "#divRelacionados", iframeObj ).find('label').prepend('<i class="fas fa-sync-alt newLink"></i>');
         $( "#seipp_tipo", iframeObj ).before('<label class="seipp_label"><i class="fas fa-info-circle newLink"></i> Tipo de processo</label>');
         $( "#seipp_interessados", iframeObj ).css('padding-left','0px').before('<label class="seipp_label"><i class="fas fa-users newLink"></i> Interessado(s)</label>');

        $( "#frmArvore", iframeObj ).find('img').each(function( index ) {
            var _this = $( this );
        	var src = _this.attr('src');
        	var title = _this.attr('title');
            //var titleLinkCheck = parent.getTitleLink(_this);
            var titleLinkCheck = '';

            if (src.indexOf('folder.gif') !== -1) {
        		_this.hide().closest('a').addClass('newLink tooltipInit').attr('title',titleLinkCheck).append('<i class="fas fa-folder"></i>');
            } else if (src.indexOf('folderopen.gif') !== -1) {
        		_this.hide().closest('a').addClass('newLink tooltipInit').attr('title',titleLinkCheck).append('<i class="fas fa-folder-open"></i>');
            } else if ( 
                    (src.indexOf('plusbottom.gif') !== -1) || 
                    (src.indexOf('plus.gif') !== -1) || 
                    (src.indexOf('minus.gif') !== -1) || 
                    (src.indexOf('minusbottom.gif') !== -1)
                ) {
                    var idPasta = _this.closest('a').attr('id').replace('ancjoin', '');
                    var nrPasta = idPasta.replace('PASTA','');
            		    _this.hide().closest('a').addClass('newLink tooltipInit folderControl').attr('title',titleLinkCheck).append('<i class="far fa-plus-square"></i>')
                		    .on("click", function () {
                		        parent.checkArvoreComplete("#div"+idPasta, iframeObj, "#anchorAGUARDE"+nrPasta);
                		        parent.checkFolderStatus(idPasta, iframeObj);
                            });
                        parent.checkFolderStatus(idPasta, iframeObj);
            } else if ( title == 'Copiar Documento' || parent.replaceStr(title) == parent.replaceStr('Copiar Número do Processo') ) {
            	$( this ).attr('src', parent.getImgIcons('copy')).addClass('newLink tooltipInit').attr('title',titleLinkCheck);
            } else if ( title == 'Copiar Link Interno para Processo/Documento') {
            	$( this ).attr('src', parent.getImgIcons('link')).addClass('newLink tooltipInit').attr('title',titleLinkCheck);
            }
        });
        parent.changeIconsArvore("#frmArvore", iframeObj);
    	parent.redimensionar();
    	parent.tooltipInit(iframeObj);
    	$('#divConsultarAndamento', iframeObj).find('a').append(' Consultar Andamento');
    });
    
});