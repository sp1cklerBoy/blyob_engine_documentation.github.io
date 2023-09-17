var available_languages = ["be", "de", "en", "es", "fr", "it", "lv", "lt", "pl", "pt", "uk", "ru"];

var lang = navigator.language || navigator.userLanguage;

var is_user_browser_language_available = false;

for(var i = 0; i < available_languages.length; i++)
{
	if(lang.substr(0,2) == available_languages[i])
	{
		is_user_browser_language_available = true;		
	}
}


if(is_user_browser_language_available == false)
{
	window.location.href = "../doc/pages/current_browser_language_is_not_available.html";
}
else
{
	window.location.href = "../doc/pages/".concat(lang.substr(0,2), "/welcome.html");
}
