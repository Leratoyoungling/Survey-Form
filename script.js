
var question001 = ["What color are apples?"];
var choices001 = ["<input onclick=correct001() name=button001 type=radio />Red/Green<br /><input onclick=incorrect001() name=button001 type=radio />Purple<br /><input onclick=incorrect001() name=button001 type=radio />Orange<br />"];

var question002 = ["What color are Bananas?"];
var choices002 = ["<input onclick=incorrect002() name=button002 type=radio />lime<br /><input onclick=incorrect002() name=button002 type=radio />Magenta<br /><input onclick=correct002() name=button002 type=radio />Yellow<br />"];

var question003 = ["What color are strawberries?"];
var choices003 = ["<input onclick=incorrect003() name=button003 type=radio />Yellow<br /><input onclick=incorrect003() name=button003 type=radio />Red<br /><input onclick=correct003() name=button003 type=radio />Blue<br />"];

windows.onload = function () {
      message001.innerHTML = question001;
      options001.innerHTML = choices001;
      click001.innerHTML = "<button onclick=set002()>Submit</button"/>
