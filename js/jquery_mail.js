 $(document).ready(function(){
	$("#invia").click(function(){
	
	//Recuperiamo tutte le variabili
		var valid = '';
		var isr = ' is required.</p>';
		var name = $("#nome").val();
		var mail = $("#email").val();
		var subject = $("#oggetto").val();
		var text = $("#messaggio").val();
		
	//Eseguiamo una serie di controlli
		if (name.length<1) {
			valid += '<p>A valid name'+isr;
		}
		if (!mail.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
			valid += '<p>A valid e-mail address'+isr;
		}
		if (subject.length<1) {
			valid += '<p>A valid subject'+isr;
		}
		if (text.length<1) {
			valid += '<p>Message'+isr;
		}
	//Se i controlli non vengono superati, appare il messaggio di errore.
		if (valid!='') {
			$("#risposta").fadeIn("slow");
			$("#risposta").html("<p><b>Error:</b></p>"+valid);
			$("#risposta").css("padding","20px");
			$("#risposta").css("height","auto");
			$("#risposta").css("border","1px solid #c98b18");
		}
		//Se i controlli vengono superati, compare un messaggio di invio in corso
		else {
			var datastr ='name=' + name + '&mail=' + mail + '&subject=' + subject + '&text=' + text;
			$("#risposta").css("display", "block");
			$("#risposta").css("padding","20px");
			$("#risposta").css("height","auto");
			$("#risposta").css("border","1px solid #c98b18");
			$("#risposta").html("<p>Sending..</p>");
			$("#risposta").fadeIn("slow");
			setTimeout("send('"+datastr+"')",2000);
		}
		return false;
	});
});
//Creazione della funzione di invio. Si baserà sul nostro file php "mail.php".
function send(datastr){
	$.ajax({	
		type: "POST",
		url: "http://marviljoyfiles.net46.net/mail.php",
		data: datastr,
		cache: false,
		success: function(html){
		$("#risposta").fadeIn("slow");
		$("#risposta").css("padding","20px");
		$("#risposta").css("height","auto");
		$("#risposta").css("border","1px solid #c98b18");
		$("#risposta").html(html);
		setTimeout('$("#risposta").fadeOut("slow")',2000);
	}
	});
}
