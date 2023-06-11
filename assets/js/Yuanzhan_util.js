
$(document).ready(function() {
			  // Initial language state
			  var currentLanguage = localStorage.getItem("lanVar");

			  // change display language depends on the stored language variable
			  if (currentLanguage === 'en') {
			    $('[lang="zh"]').toggle();
			    $('#lang-switch').text("中文版");

			  } else {
			    $('[lang="en"]').toggle();
			    $('#lang-switch').text("English Version");

			  }



			  // Language toggle function
			  function toggleLanguage() {
				if (currentLanguage === 'en') {
				  $('[lang="en"]').toggle();
				  $('[lang="zh"]').toggle();
				  currentLanguage = 'zh';
				  localStorage.setItem("lanVar", "zh");
				  $('#lang-switch').text("English Version");
				} else {
				  $('[lang="zh"]').toggle();
				  $('[lang="en"]').toggle();
				  currentLanguage = 'en';
				  localStorage.setItem("lanVar", "en");
				  $('#lang-switch').text("中文版");
				}
				  }

			  $('#lang-switch').click(toggleLanguage);

});
