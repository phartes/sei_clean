(function (a) {
    a.fn.replaceTagName = function (f) {
        var g = [],
            h = this.length;
        while (h--) {
            var k = document.createElement(f),
                b = this[h],
                d = b.attributes;
            for (var c = d.length - 1; c >= 0; c--) {
                var j = d[c];
                k.setAttribute(j.name, j.value)
            }
            k.innerHTML = b.innerHTML;
            a(b).after(k).remove();
            g[h - 1] = k
        }
        return a(g)
    }
})(window.jQuery);

function getImgIcons(nameIcon) {
    if ( nameIcon == 'copy' ) {
        return "data:image/gif;base64,R0lGODlhDwARANUsALXg/bbh/aLZ/YHM/JbV/OT0/oPN/H/L/L3k/X7L/O74/vv+/6nc/Y3R/JHT/Nnv/sPm/avd/a/e/ZTU/ITO/K3e/ev3/pfV/N7y/rji/YDM/PT7/4fP/H7L/Pr9/47S/J/Y/LPg/YLM/JTU/MDl/azd/bLg/YrQ/JnV/KPZ/XzK/P///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY2MDNFOTZGMEJEMjExRTk5QkNGQ0NGMkUwODk3MzdFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY2MDNFOTcwMEJEMjExRTk5QkNGQ0NGMkUwODk3MzdFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjYwM0U5NkQwQkQyMTFFOTlCQ0ZDQ0YyRTA4OTczN0UiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjYwM0U5NkUwQkQyMTFFOTlCQ0ZDQ0YyRTA4OTczN0UiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAsACwAAAAADwARAAAGhUCWUBhKGY2lwnDI6JyeBpXo8FiyRqiVFqBSNA5KUiDAyW5VHoWodFG5VeZV4K0SqCSLBVa7sgQAAAZ2Jlp7fHwnKSqEK4aHK4mLhXGHkYyOlYqXlIiak49allogFCWmpxEaFZIrGA4iIgMqHbAELKyHGyoISwMEJMDBGSoQSwgddG8fVkEAOw==";
    } else if ( nameIcon == 'minus' ) {
        return "data:image/gif;base64,R0lGODlhDQANAMQZAJeXl6Kiotzc3K+vr7m5udra2u/v7/X19ZGRkZKSko2NjcLCwr29vfz8/NHR0enp6aurq9XV1bi4uMnJyaamppSUlLKysoiIiP///////wAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVDNDNFOTc0MEJENDExRTk5QkNGQ0NGMkUwODk3MzdFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVDNDNFOTc1MEJENDExRTk5QkNGQ0NGMkUwODk3MzdFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjYwM0U5NzUwQkQyMTFFOTlCQ0ZDQ0YyRTA4OTczN0UiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjYwM0U5NzYwQkQyMTFFOTlCQ0ZDQ0YyRTA4OTczN0UiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAZACwAAAAADQANAAAFQmA2QGRZElkSWGzbIssVYXRdU5Js77i+37lI40EsGjC9iODCbFaQwYNjSi1Afb/rLKvlQhWWiXg8BjAygIp6vQ5kQgA7";
    } else if ( nameIcon == 'plus' ) {
        return "data:image/gif;base64,R0lGODlhDQANANUgANHR0cXFxaKiopeXl/f397m5ucbGxtzc3K2treDg4MvLy+/v7/z8/K+vr729vcLCwo2NjZKSkpGRkYmJidra2vX19enp6aurq9XV1bi4uKamppSUlLKyssnJyYiIiP///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY2MDNFOTczMEJEMjExRTk5QkNGQ0NGMkUwODk3MzdFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY2MDNFOTc0MEJEMjExRTk5QkNGQ0NGMkUwODk3MzdFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjYwM0U5NzEwQkQyMTFFOTlCQ0ZDQ0YyRTA4OTczN0UiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjYwM0U5NzIwQkQyMTFFOTlCQ0ZDQ0YyRTA4OTczN0UiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAgACwAAAAADQANAAAGWkBQ40IsFgugiIDDbDYlDw/mQ61WNRlptTMhXLNTasBT+UoZFkvBk7AsPljpwUOvb+DgCgCA8CgAFHhaYmRmYR8GhVRxhwQWVlgQHB2UlZUDDiADG5ydnQIgQQA7";
    } else if ( nameIcon == 'link' ) {
        return "data:image/gif;base64,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";
    }
}
function replaceStr(text) {
    return ( (text != "" && typeof text != 'undefined') ) ? text.replace(/[^a-zA-Z ]/g, "") : '';
    //return text.replace(/[^a-zA-Z ]/g, "");
}
function removeLines(text) {
    return text.replace(/(\r\n\t|\n|\r\t)/gm, " ").trim();
}
function getTitleLink(_this) {
	var title = _this.attr('title');
	var titleCheck = ( (title != "" && typeof title != 'undefined') ) ? title : '';
	var titleLink = _this.closest('a').attr('title');
	var titleLinkCheck = ( (titleLink != "" && typeof titleLink != 'undefined') ) ? titleLink : titleCheck;
	return titleLinkCheck;
}
function checkArvoreComplete(ObjArvore, iframeObj, ObjFind, TimeOut = 3000) {
  if (TimeOut <= 0) { return; }
  setTimeout(function () {
    if ( $(ObjArvore, iframeObj).find(ObjFind).length != 0) {
      checkArvoreComplete(ObjArvore, iframeObj, ObjFind, TimeOut - 100);
    } else {
      changeIconsArvore(ObjArvore, iframeObj);
    }
  }, 100);
}
function changeIconsArvore(ObjArvore, iframeObj) {
    $(ObjArvore, iframeObj).find('img').each(function( index ) {
        var _this = $( this );
    	var src = _this.attr('src');
    	//var titleLinkCheck = getTitleLink(_this);
    	var titleLinkCheck = '';
    	var title = _this.attr('title');

        $.each(parent.arrayIconsUrl, function( key, value ) {
            if ( src.indexOf(value.url) !== -1 ) {
        		_this.closest('a').addClass('newLink tooltipInit').attr('title',titleLinkCheck).html('<i class="'+value.icontype+' fa-'+value.icon+' '+value.color+'Color"></i>');
            }
        });

        if ( title == 'Copiar Documento' || replaceStr(title) == replaceStr('Copiar Número do Processo') ) {
        	$( this ).attr('src',getImgIcons('copy')).addClass('newLink tooltipInit').attr('title',titleLinkCheck);
        } else if ( title == 'Copiar Link Interno para Processo/Documento') {
        	$( this ).attr('src',getImgIcons('link')).addClass('newLink tooltipInit').attr('title',titleLinkCheck);
        }
    });
}
function checkFolderStatus(idAnchor, iframeObj) {
    if ( $('#div'+idAnchor, iframeObj).is(':visible') ) {
        $('#ancjoin'+idAnchor, iframeObj).find('i').attr('class','far fa-minus-square');
        $('#anchorImg'+idAnchor, iframeObj).find('i').attr('class','fas fa-folder-open');
    } else {
        $('#ancjoin'+idAnchor, iframeObj).find('i').attr('class','far fa-plus-square');
        $('#anchorImg'+idAnchor, iframeObj).find('i').attr('class','fas fa-folder');
    }
}
function tooltipInit(iframeObj) {
    $('.tooltipInit', iframeObj).each(function( index ) {
    	var _this = $( this );
    	var alt = _this.attr('title');
    	if (alt != "" && typeof alt != 'undefined') {
    	    var tooltipOver = "return infraTooltipMostrar('"+removeLines(alt)+"')";
            var tooltipOut = "return infraTooltipOcultar()";
            _this.attr('onmouseover',tooltipOver).attr('onmouseout',tooltipOut).removeAttr('title');
    	}
    });
}
function fixDivComandos() {
	var $cache = $('#frmProcedimentoControlar').find('#divComandos');
	if ($(window).scrollTop() > 150) {
        $cache.css({
            'position': 'fixed',
            'margin': '0',
            'background-color': '#fafafa',
            'top': '0'
        });
	} else {
        $cache.css({
            'position': 'absolute',
            'margin': '1em 0',
            'background-color': 'transparent',
            'top': 'auto'
        });
	}
}
$(window).scroll(fixDivComandos);
fixDivComandos();

function changeInputToButton(arrayInputButton, iframeObj) {
    $('input[type=submit], input[type=button]', iframeObj).each(function( index ) {
        var _this = $( this );
        var valInput = _this.val();
        $.each(arrayInputButton, function( key, value ) {
            if ( replaceStr(valInput) == replaceStr(value.text) ) {
                _this.addClass('newButton inputButton').replaceTagName("button");
            }
        });
    });
    insertInputToButton(arrayInputButton, iframeObj);
}
function insertInputToButton(arrayInputButton, iframeObj) {
    $('.inputButton', iframeObj).each(function( index ) {
        var _this = $( this );
        var valInput = _this.val();
        $.each(arrayInputButton, function( key, value ) {
            if ( replaceStr(valInput) == replaceStr(value.text) ) {
                _this.html('<i class="fas fa-'+value.icon+'"></i>'+value.text).addClass(value.addclass);
            }
        });
    });
}
var arrayInputButton = [{
        text: 'Limpar filtro', icon: 'eraser', addclass: 'buttonFilterCleanNew' },{
        text: 'Filtrar tabela', icon: 'filter', addclass: 'buttonFilterNew' },{
        text: 'Pesquisar', icon: 'search', addclass: 'buttonSearchNew'
    }];
changeInputToButton(arrayInputButton);

function RemoverFiltroPesquisa($tabela) {
    if ($tabela.attr("data-filtro") != undefined) {
      parent.removerFiltroTabela($tabela, $tabela.find('tbody>tr[class^="infraTr"]'), "PorPesquisa");
    }
}
$('.buttonFilterNew').each(function( index ) {
    $(this).on("click", function () {
        var tabelaObj = $(this).closest('.infraAreaTabela').find('table');
        RemoverFiltroPesquisa(tabelaObj);
        tabelaObj.find(".tablesorter-filter-row").removeClass("hideme");
    });
});
$('.buttonFilterCleanNew').each(function( index ) {
    $(this).on("click", function () {
        var tabelaObj = $(this).closest('.infraAreaTabela').find('table');
        RemoverFiltroPesquisa(tabelaObj);
        tabelaObj.trigger('filterReset');
    });
});

function changeImgToLink(arrayIconsUrl, iframeObj) {
    $('img', iframeObj).each(function( index ) {
        var _this = $( this );
        var srcButton = _this.attr('src');
        $.each(arrayIconsUrl, function( key, value ) {
            if ( srcButton.indexOf(value.url) !== -1 ) {
                _this.addClass('newLink imgLink').replaceTagName("a");
            }
        });
    });
    insertIconToLink(arrayIconsUrl, iframeObj);
}
function insertIconToLink(arrayIconsUrl, iframeObj) {
    $('.imgLink', iframeObj).each(function( index ) {
        var _this = $( this );
        var srcButton = _this.attr('src');
        $.each(arrayIconsUrl, function( key, value ) {
            if ( srcButton.indexOf(value.url) !== -1 ) {
                _this.html('<i class="'+value.icontype+' fa-'+value.icon+' '+value.color+'Color"></i>');
            }
        });
    });
}
var arrayIconsUrl2 = [{
        url: '/menos.gif', icon: 'minus-circle', icontype: 'fas', color: 'vermelho' },{
        url: '/mais.gif', icon: 'plus-circle', icontype: 'fas', color: 'verde' },{
        url: '/remover.gif', icon: 'times', icontype: 'fas' },{
        url: '/lupa.gif', icon: 'search', icontype: 'fas' },{
        url: '/seta_acima_select.gif', icon: 'arrow-circle-up', icontype: 'fas' },{
        url: '/seta_abaixo_select.gif', icon: 'arrow-circle-down', icontype: 'fas' },{
        url: '/alterar.gif', icon: 'edit', icontype: 'fas' },{
        url: '/grupo.gif', icon: 'users', icontype: 'fas' },{
        url: '/calendario.gif', icon: 'calendar-alt', icontype: 'fas'
    }];
var arrayIconsUrl = [{
        url: '/sei_documento_interno.gif', icon: 'file', icontype: 'fas' },{
        url: '/sei_assinar_pequeno.gif', icon: 'pen-alt', icontype: 'fas' },{
        url: '/sei_acompanhamento_especial_pequeno.png', icon: 'eye', icontype: 'fas' },{
        url: '/procedimento_anexado.gif', icon: 'paperclip', icontype: 'fas' },{
        url: '/pdf.gif', icon: 'file-pdf', icontype: 'fas' },{
        url: '/zip.gif', icon: 'file-archive', icontype: 'fas' },{
        url: '/sei_chave_restrito.gif', icon: 'key', icontype: 'fas' },{
        url: '/sei_assinar_pequeno_nao_bloqueado.gif', icon: 'pen-alt fa-pen-alt-free', icontype: 'fas' },{
        url: '/sei_autenticar_pequeno.gif', icon: 'award', icontype: 'fas' },{
        url: '/menos.gif', icon: 'minus-circle', icontype: 'fas' },{
        url: '/mais.gif', icon: 'plus-circle', icontype: 'fas' },{
        url: '/procedimento.gif', icon: 'scroll', icontype: 'fas' },{
        url: '/sei_ciencia_pequeno.gif', icon: 'thumbs-up', icontype: 'fas' },{
        url: '/email.gif', icon: 'envelope', icontype: 'fas' },{
        //url: '/folderopen.gif', icon: 'folder-open', icontype: 'fas' },{
        //url: '/folder.gif', icon: 'folder', icontype: 'fas' },{
		url: '/sei_incluir_documento.gif', icon: 'file', icontype: 'far' },{
        url: '/sei_gerar_processo_relacionado.gif', icon: 'sync-alt', icontype: 'fas' },{
        url: '/sei_consultar_alterar_protocolo.gif', icon: 'edit', icontype: 'fas' },{
        url: '/sei_acompanhamento_especial.gif', icon: 'eye', icontype: 'far' },{
        url: '/sei_ciencia.gif', icon: 'thumbs-up', icontype: 'far' },{
        url: '/sei_duplicar_procedimento.gif', icon: 'copy', icontype: 'far' },{
        url: '/sei_email.gif', icon: 'envelope', icontype: 'far' },{
        url: '/sei_relacionados.png', icon: 'retweet', icontype: 'fas' },{
        url: '/sei_anexar_processo.gif', icon: 'paperclip', icontype: 'fas' },{
        url: '/sei_gerar_arquivo_processo.gif', icon: 'file-pdf', icontype: 'far' },{
        url: '/sei_gerar_zip_processo.png', icon: 'file-archive', icontype: 'far' },{
        url: '/sei_controle_processos.gif', icon: 'table', icontype: 'fas' },{
        url: '/sei_pesquisa.png', icon: 'search', icontype: 'fas' },{
        url: '/sei_editar_conteudo.gif', icon: 'pencil-alt', icontype: 'fas' },{
        url: '/sei_assinar.gif', icon: 'pen-nib', icontype: 'fas' },{
        url: '/sei_gerenciar_assinatura_externa.gif', icon: 'user-edit', icontype: 'fas' },{
        url: '/sei_documento_modelo.gif', icon: 'star', icontype: 'fas' },{
        url: '/sei_documento_versoes.gif', icon: 'copy', icontype: 'fas' },{
        url: '/sei_documento_gerar_circular.gif', icon: 'undo-alt', icontype: 'fas' },{
        url: '/sei_imprimir_web.gif', icon: 'print', icontype: 'fas' },{
        url: '/sei_lixeira.png', icon: 'trash-alt', icontype: 'far' },{
        url: '/sei_mover_documento.gif', icon: 'sign-in-alt', icontype: 'fas' },{
        url: '/sei_reabrir_processo.gif', icon: 'folder-open', icontype: 'far' },{
        url: '/remover.gif', icon: 'times', icontype: 'fas' },{
        url: '/lupa.gif', icon: 'search', icontype: 'fas' },{
        url: '/seta_acima_select.gif', icon: 'arrow-circle-up', icontype: 'fas' },{
        url: '/seta_abaixo_select.gif', icon: 'arrow-circle-down', icontype: 'fas' },{
        url: '/alterar.gif', icon: 'edit', icontype: 'fas' },{
        url: '/grupo.gif', icon: 'users', icontype: 'fas' },{
        url: '/calendario.gif', icon: 'calendar-alt', icontype: 'fas' },{
        url: '/sei_marcador.png', icon: 'tags', icontype: 'fas' },{
        url: '/sei_situacao.png', icon: 'flag', icontype: 'far' },{
        url: '/sei_documento_gerar_multiplo.gif', icon: 'file-invoice', icontype: 'fas' },{
        url: '/sei_anotacao.gif', icon: 'sticky-note', icontype: 'far' },{
        url: '/sei_anotacao_prioridade_pequeno.gif', icon: 'sticky-note', color: 'vermelho', icontype: 'fas' },{
        url: '/sei_anotacao_pequeno.gif', icon: 'sticky-note', icontype: 'fas' },{
        url: '/sei_concluir_processo.gif', icon: 'folder-minus', icontype: 'fas' },{
        url: '/sei_sobrestar_processo.gif', icon: 'pause-circle', icontype: 'far' },{
        url: '/sei_incluir_em_bloco.gif', icon: 'book', icontype: 'fas' },{
        url: '/sei_atribuir_processo.gif', icon: 'user-tag', icontype: 'fas' },{
        url: '/sei_atualizar_andamento.gif', icon: 'globe-americas', icontype: 'fas' },{
        url: '/retorno_programado.gif', icon: 'exchange-alt', icontype: 'fas' },{
        url: '/sei_situacao_pequeno.png', icon: 'flag', icontype: 'fas' },{
        url: '/exclamacao.png', icon: 'exclamation-triangle', icontype: 'fas' },{
        url: '/marcador_preto.png', icon: 'tag', color: 'preto', icontype: 'fas' },{
        url: '/marcador_branco.png', icon: 'tag', color: 'branco', icontype: 'fas' },{
        url: '/marcador_cinza'.png, icon: 'tag', color: 'cinza', icontype: 'fas' },{
        url: '/marcador_vermelho.png', icon: 'tag', color: 'vermelho', icontype: 'fas' },{
        url: '/marcador_amarelo.png', icon: 'tag', color: 'amarelo', icontype: 'fas' },{
        url: '/marcador_verde.png', icon: 'tag', color: 'verde', icontype: 'fas' },{
        url: '/marcador_azul.png', icon: 'tag', color: 'azul', icontype: 'fas' },{
        url: '/marcador_rosa.png', icon: 'tag', color: 'rosa', icontype: 'fas' },{
        url: '/marcador_roxo.png', icon: 'tag', color: 'roxo', icontype: 'fas' },{
        url: '/marcador_ciano.png', icon: 'tag', color: 'ciano', icontype: 'fas' },{
        url: '/check.gif', icon: 'check-square', icontype: 'fas' },{
        url: '/sei_enviar_processo.gif', icon: 'share-square', icontype: 'fas'
}];
function descricaoTooltip(objLink) {
    var titleTooltip =  objLink.attr('onmouseover');
	if (titleTooltip != "" && typeof titleTooltip != 'undefined') {
		titleTooltip = titleTooltip.replace("return infraTooltipMostrar('","").replace("');","");
		titleTooltip = titleTooltip.split("','");
		titleTooltip = titleTooltip[1];
		titleTooltip = (titleTooltip != "" && typeof titleTooltip != 'undefined') ? titleTooltip : '';
	} else {
	    titleTooltip = '';
	}
	return titleTooltip;
}

function iconsTable(selectBtn, arrayIconsUrl) {
    var objBtn = $(selectBtn);
    if ( objBtn ) {
        objBtn.find('img').each(function( index ) {
            var _this = $( this );
            var src = _this.attr('src');
            var titleImg = ( _this.attr('title') ) ? 'title="'+_this.attr('title')+'" ' : '';
            var altImg = ( _this.attr('alt') ) ? 'alt="'+_this.attr('alt')+'" ' : '';
            var idImg = ( _this.attr('id') ) ? 'id="'+_this.attr('id')+'" ' : '';

            $.each(arrayIconsUrl, function( key, value ) {
                if ( src.indexOf(value.url) !== -1 ) {
                    var altLink = ( src.indexOf('imagens/marcador_') !== -1 ) ? 
                                    descricaoTooltip(_this.closest('a')) : '';
                    _this.closest('a').addClass('newLink').attr('alt',altLink).html('<i '+idImg+titleImg+altImg+' class="fas fa-'+value.icon+' '+value.color+'Color"></i>');
                }
            });
        });
    }
}
iconsTable('#tblProcessosRecebidos', arrayIconsUrl);
iconsTable('#tblProcessosGerados', arrayIconsUrl);
iconsTable('#tblProcessosDetalhado', arrayIconsUrl);

function insertIconToButton(arrayIconsName, iframeObj) {
    $('button', iframeObj).each(function( index ) {
    var _this = $(this);
    var attrName = _this.attr('value');
    var textName = _this.text();

    var nameBtn = (typeof attrName !== typeof undefined && attrName !== false) ? 
        attrName : 
        textName;

        $.each(arrayIconsName, function( key, value ) {
            if ( replaceStr(nameBtn) == replaceStr(value.text) ) {
                _this.attr('style','').addClass('newButton').prepend('<i class="fas fa-'+value.icon+'"></i>');
            }
        });
    });
}
var arrayIconsName = [{
        text: 'Salvar', icon: 'save' },{
        text: 'Confirmar Dados', icon: 'save' },{
        text: 'Cancelar', icon: 'angle-left' },{
        text: 'Voltar', icon: 'angle-left' },{
        text: 'Fechar', icon: 'times' },{
        text: 'Imprimir', icon: 'print' },{
        text: 'Excluir', icon: 'trash-alt' },{
        text: 'Grupo', icon: 'users' },{
        text: 'Novo', icon: 'plus' },{
        text: 'Nova', icon: 'plus' },{
        text: 'RemoverSobrestamento', icon: 'play-circle' },{
        text: 'Remover Sobrestamento', icon: 'play-circle' },{
        text: 'Gerar Grafico', icon: 'chart-line' },{
        text: 'Limpar', icon: 'eraser' },{
        text: 'Retirar Sobrestamento', icon: 'folder-open'  },{
        text: 'Pesquisar', icon: 'search' },{
        text: 'Etiquetas', icon: 'tags' },{
        text: 'Gerar Gráficos', icon: 'chart-line' },{
        text: 'Concluir', icon: 'check' },{
        text: 'Assinar', icon: 'pen-nib' },{
        text: 'Minha Base', icon: 'atlas' },{
        text: 'Selecionar nos Favoritos', icon: 'star' },{
        text: 'Enviar', icon: 'share' },{
        text: 'Transportar', icon: 'sync-alt' },{
        text: 'Duplicar', icon: 'copy' },{
        text: 'Reabrir', icon: 'folder-open' },{
        text: 'Acessar', icon: 'sign-in-alt' },{
        text: 'Controle de Processos', icon: 'columns' },{
        text: 'Iniciar Processo', icon: 'file-alt' },{
        text: 'Retorno Programado', icon: 'retweet' },{
        text: 'Pesquisa', icon: 'search' },{
        text: 'Base de Conhecimento', icon: 'atlas' },{
        text: 'Textos Padrão', icon: 'file-invoice' },{
        text: 'Modelos Favoritos', icon: 'star' },{
        text: 'Blocos de Assinatura', icon: 'file-signature' },{
        text: 'Blocos de Reunião', icon: 'user-friends' },{
        text: 'Blocos Internos', icon: 'book' },{
        text: 'Contatos', icon: 'address-book' },{
        text: 'Processos Sobrestados', icon: 'pause-circle' },{
        text: 'Acompanhamento Especial', icon: 'eye' },{
        text: 'Marcadores', icon: 'tags' },{
        text: 'Pontos de Controle', icon: 'flag' },{
        text: 'Estatísticas', icon: 'chart-line' },{
        text: 'Grupos', icon: 'users" alt="Grupos' },{
        text: 'Unidade', icon: 'university' },{
        text: 'Desempenho de Processos', icon: 'chart-pie' },{
        text: 'E-Mail', icon: 'envelope' },{
        text: 'Envio', icon: 'share' },{
        text: 'Gerar', icon: 'play'
    }];
insertIconToButton(arrayIconsName);

$('#lnkAjuda').remove();
$('.divDiamante').remove();
$('#tblProcessosDetalhado th:nth-child(5)').attr('width','');
$( "#tblProcessosDetalhado" ).find('tr').each(function( index ) {
	var descricaoProcesso = $( this ).find('.processoVisualizado').attr('onmouseover');
	if (descricaoProcesso != "" && typeof descricaoProcesso != 'undefined') {
		descricaoProcesso = descricaoProcesso.replace("return infraTooltipMostrar('","").replace("');","");
		descricaoProcesso = descricaoProcesso.split("','");
		descricaoProcesso = '<strong class="trTitles">' + descricaoProcesso[0] + '</strong><br>' + descricaoProcesso[1];
		$( this ).find('td:nth-child(5)').html(descricaoProcesso);
	}
});

$( ".botaoSEI" ).each(function( index ) {
    var _this = $( this );
	var title = _this.find('img').attr('alt');
	var src = _this.find('img').attr('src');

    $.each(arrayIconsUrl, function( key, value ) {
        if ( src.indexOf(value.url) !== -1 ) {
		    _this.closest('a').addClass('newLink newTippy').attr('data-tippy-content',title).html('<i class="fas fa-'+value.icon+'" alt="'+title+'"></i>');
        }
    });
});

$('#frmProcedimentoControlar').find('#divComandos').hide();
$('.infraCheckbox').on('click', function(){
	if ( $('#hdnRecebidosItensSelecionados').val() != '' 
	    || $('#hdnGeradosItensSelecionados').val() != '' ) {
	    if ( $('#divComandos').is(':hidden') ) {
	        $('#divComandos').slideDown();
	    }
	} else {
	    if ( $('#divComandos').is(':visible') ) {
	        $('#divComandos').slideUp();
	    }
	}
})
 
$('#ancVisualizacao1').addClass('newLink').prepend('<i class="fas fa-user-tie"></i>');
$('#ancVisualizacao2').addClass('newLink').prepend('<i class="fas fa-tag"></i>');
$('#ancTipoVisualizacao').addClass('newLink').prepend('<i class="fas fa-table"></i>');

$('#lnkControleProcessos').attr('data-tippy-content','Controle de Processos').addClass('newLink newTippy').html('<i class="fas fa-columns"></i>');
$('#lnkNovidades').attr('data-tippy-content','Novidades').addClass('newLink newTippy').html('<i class="fas fa-newspaper"></i>');
$('#lnkUsuarioSistema').attr('data-tippy-content', $('#lnkUsuarioSistema').attr('title') ).addClass('newLink newTippy').html('<i class="fas fa-user-circle"></i>'); 
$('#lnkConfiguracaoSistema').attr('data-tippy-content', 'Configura&ccedil;&otilde;es do Sistema' ).addClass('newLink newTippy').html('<i class="fas fa-cog"></i>');
$('#lnkSairSistema').attr('data-tippy-content', $('#lnkSairSistema').attr('title') ).addClass('newLink newTippy').html('<i class="fas fa-sign-out-alt"></i>');
$('.infraTituloLogoSistema').html(' ').addClass('infraTituloLogoSistemaNew');

$('<a href="#" id="newMenu" class="newLink"><i class="fas fa-ellipsis-v"></i></a>')
.click(function (e) {
    e.stopPropagation();
    if ( $('#divInfraAreaTelaE').hasClass('seipp-menu') ) {
		$('#divInfraBarraSistemaE').find('img').first().trigger('click');
	} else {
		infraMenuSistemaEsquema();
	}
})
.prependTo('.infraTituloLogoSistema');

if ( $('#btnLiberarMarcador') ) {
	$('#btnLiberarMarcador').find('sup').html('<i class="fas fa-times" alt="X"></i>');
}

setTimeout(function(){
	tippy('.newTippy', {
	  arrow: true,
	  arrowType: 'round'
	});
	
	var nomeOrgao = $('#divInfraBarraSuperior label').text();
	$('#seipp').text(nomeOrgao);
},500);

$( "#main-menu" ).find('a').each(function( index ) {
    var _this = $( this );
	var title = _this.text();
	
    $.each(arrayIconsName, function( key, value ) {
        if ( replaceStr(title) == replaceStr(value.text) ) {
            _this.prepend('<i class="fas fa-'+value.icon+'" alt="'+value.text+'"></i>');
        }
    });
});