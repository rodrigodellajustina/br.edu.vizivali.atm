function dimensoes()
{
	var alturaJanela	= $(window).height();
	var margemTopo		= $('#principal').css('margin-top');
	var alturaFinal		= parseInt(alturaJanela) - parseInt(margemTopo);	

	$('#principal').css('height', alturaFinal);
	$('#scroll').css('height', alturaFinal);
	
	var numeroPerfis 		= $('#scroll ul li').length;
	var larguraCaixaPerfil	= $('#scroll ul li').width();
	var larguraFinal		= parseInt(numeroPerfis) * (parseInt(larguraCaixaPerfil) + 11);
	$('#scroll').css('width', larguraFinal);
}
	
$(function()
{
	$('.proximo').on('click', function()
	{
		
	});

	setTimeout(function()
	{
		$('.modal').fadeOut('slow');
	}, 10);

	$('#scroll').css('display','block');

	dimensoes();
	$('#principal').niceScroll(
	{
		zindex:120000,
		cursoropacitymin:0.2,
		cursorcolor:'#333',
		mousescrollstep: $('#enquetes li').width() / 3 + 4,
		touchbehavior: true
	});

	$('input').on('change', function()
	{
		if($(this).attr('type') == 'radio')
		{
			$(this).parent().parent().find('label').removeClass('selecionado');
			$(this).parent().addClass('selecionado');
		}
		else
		{
			if($(this).parent().hasClass('selecionado'))
			{
				$(this).prop('checked', false);
				$(this).parent().removeClass('selecionado')
			}
			else
			{
				$(this).prop('checked', true);
				$(this).parent().addClass('selecionado');
			}
		}
	});
});

$(window).resize(function()
{
	dimensoes();
	$('#principal').getNiceScroll().resize();
});