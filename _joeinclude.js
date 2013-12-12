/* JavaScript include for: Json Object Editor
last updated: CH December 2013
*/

var includes = "",
web_dir = "",
projectName = 'JsonObjectEditor';
switch(location.hostname){
	case 'webapps-cdn-stg.esri.com':
		web_dir = "http://webapps-cdn-stg.esri.com/tools/"+projectName+"/";
	break;
	case 'webapps-cdn.esri.com':
		web_dir = "http://webapps-cdn.esri.com/tools/"+projectName+"/";
	break;
	
	case 'localhost':
	case 'localhost:81':
		web_dir ='http://'+location.hostname+':'+location.port+"/"+projectName+'/';
	break;
	case 'coreyh.esri.com':
		web_dir = 'http://coreyh.esri.com:81/'+projectName+'/';
	break;
}
var
scripts_dir = web_dir+"js/",
scripts = [];
if (typeof jQuery == 'undefined') {  
   scripts.push("jquery-1.10.2.min.js");
}
if (typeof Craydent == 'undefined') {  
   scripts.push("craydent-1.7.18.js");
}
scripts.push(
	"JsonObjectEditor.jquery.craydent.js"
);

var
styles_dir = web_dir+"css/",
styles =[
   "joe-styles.css"
],
script,style,sc,st,
sc_len = scripts.length,st_len = styles.length;

//scripts
for(sc = 0; sc < sc_len; sc++){
	script = scripts[sc];
	includes+='<script type="text/javascript" src="'+scripts_dir+script+'"></script>';
}
//styles
for(st = 0; st < st_len; st++){
	style = styles[st];
	includes+='<link href="'+styles_dir+style+'" rel="stylesheet" type="text/css">';
}

includes+='';


document.write(includes);