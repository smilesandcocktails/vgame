var keyboardIntro = {
  one: "Enter any key on your keyboard for an audio guide. Or use your mouse to click anywhere on the site to go back to your contents page.",
  // one: "You are now at your keyboard audio page. Press on any key on your keyboard and it will tell you which key you have entered."
}

var keyCodes = {
  3 : "break",
  8 : "delete",
  9 : "tab",
  12 : "clear",
  13 : "enter",
  16 : "shift",
  17 : "control",
  18 : "option",
  19 : "break",
  20 : "caps lock",
  27 : "escape",
  32 : "spacebar",
  33 : "page up",
  34 : "page down",
  35 : "end",
  36 : "home ",
  37 : "left arrow ",
  38 : "up arrow ",
  39 : "right arrow",
  40 : "down arrow ",
  41 : "select",
  42 : "print",
  43 : "execute",
  44 : "Print Screen",
  45 : "insert",
  46 : "delete",
  48 : "0",
  49 : "1",
  50 : "2",
  51 : "3",
  52 : "4",
  53 : "5",
  54 : "6",
  55 : "7",
  56 : "8",
  57 : "9",
  58 : ":",
  59 : "semicolon",
  60 : "<",
  61 : "equals (firefox)",
  63 : "ß",
  64 : "@ (firefox)",
  65 : "a",
  66 : "b",
  67 : "c",
  68 : "d",
  69 : "e",
  70 : "f",
  71 : "g",
  72 : "h",
  73 : "i",
  74 : "j",
  75 : "k",
  76 : "l",
  77 : "m",
  78 : "n",
  79 : "o",
  80 : "p",
  81 : "q",
  82 : "r",
  83 : "s",
  84 : "t",
  85 : "u",
  86 : "v",
  87 : "w",
  88 : "x",
  89 : "y",
  90 : "z",
  91 : "Windows Key or Left Command",
  92 : "right window key ",
  93 : "Windows Menu or Right Command",
  96 : "numpad 0 ",
  97 : "numpad 1 ",
  98 : "numpad 2 ",
  99 : "numpad 3 ",
  100 : "numpad 4 ",
  101 : "numpad 5 ",
  102 : "numpad 6 ",
  103 : "numpad 7 ",
  104 : "numpad 8 ",
  105 : "numpad 9 ",
  106 : "multiply ",
  107 : "add",
  108 : "numpad period",
  109 : "subtract ",
  110 : "decimal point",
  111 : "divide ",
  112 : "f1 ",
  113 : "f2 ",
  114 : "f3 ",
  115 : "f4 ",
  116 : "f5 ",
  117 : "f6 ",
  118 : "f7 ",
  119 : "f8 ",
  120 : "f9 ",
  121 : "f10",
  122 : "f11",
  123 : "f12",
  124 : "f13",
  125 : "f14",
  126 : "f15",
  127 : "f16",
  128 : "f17",
  129 : "f18",
  130 : "f19",
  131 : "f20",
  132 : "f21",
  133 : "f22",
  134 : "f23",
  135 : "f24",
  144 : "num lock ",
  145 : "scroll lock",
  160 : "^",
  161: '!',
  163 : "#",
  164: '$',
  165: 'ù',
  166 : "page backward",
  167 : "page forward",
  169 : "closing paren (AZERTY)",
  170: '*',
  171 : "~ + * key",
  173 : "minus (firefox), mute/unmute",
  174 : "decrease volume level",
  175 : "increase volume level",
  176 : "next",
  177 : "previous",
  178 : "stop",
  179 : "play/pause",
  180 : "e-mail",
  181 : "mute/unmute (firefox)",
  182 : "decrease volume level (firefox)",
  183 : "increase volume level (firefox)",
  186 : ";",
  187 : "=",
  188 : ",",
  189 : "-",
  190 : ".",
  191 : "/",
  192 : "grave accent",
  193 : "?, / or °",
  194 : "numpad period (chrome)",
  219 : "[",
  220 : "back slash",
  221 : "]",
  222 : "'",
  223 : "`",
  224 : "left or right ⌘ key (firefox)",
  225 : "altgr",
  226 : "< /git >",
  230 : "GNOME Compose Key",
  231 : "Rç",
  233 : "XF86Forward",
  234 : "XF86Back",
  255 : "toggle touchpad"
}

var shiftKeyCodes = {
  3 : "break",
  8 : "delete",
  9 : "tab",
  12 : "clear",
  13 : "enter",
  16 : "shift",
  17 : "control",
  18 : "alt",
  19 : "break",
  20 : "caps lock",
  27 : "escape",
  32 : "spacebar",
  33 : "page up",
  34 : "page down",
  35 : "end",
  36 : "home ",
  37 : "left arrow ",
  38 : "up arrow ",
  39 : "right arrow",
  40 : "down arrow ",
  41 : "select",
  42 : "print",
  43 : "execute",
  44 : "Print Screen",
  45 : "insert",
  46 : "delete",
  48 : ")",
  49 : "!",
  50 : "@",
  51 : "#",
  52 : "$",
  53 : "%",
  54 : "^",
  55 : "&",
  56 : "*",
  57 : "(",
  58 : ")",
  59 : "colon",
  60 : "<",
  61 : "equals (firefox)",
  63 : "ß",
  64 : "@ (firefox)",
  65 : "Capital A",
  66 : "Capital B",
  67 : "Capital C",
  68 : "Capital D",
  69 : "Capital E",
  70 : "Capital F",
  71 : "Capital G",
  72 : "Capital H",
  73 : "Capital I",
  74 : "Capital J",
  75 : "Capital K",
  76 : "Capital L",
  77 : "Capital M",
  78 : "Capital N",
  79 : "Capital O",
  80 : "Capital P",
  81 : "Capital Q",
  82 : "Capital R",
  83 : "Capital S",
  84 : "Capital T",
  85 : "Capital U",
  86 : "Capital V",
  87 : "Capital W",
  88 : "Capital X",
  89 : "Capital Y",
  90 : "Capital Z",
  160 : "^",
  161: '!',
  163 : "#",
  164: '$',
  165: 'ù',
  166 : "page backward",
  167 : "page forward",
  169 : "closing paren (AZERTY)",
  170: '*',
  171 : "~ + * key",
  173 : "minus (firefox), mute/unmute",
  174 : "decrease volume level",
  175 : "increase volume level",
  176 : "next",
  177 : "previous",
  178 : "stop",
  179 : "play/pause",
  180 : "e-mail",
  181 : "mute/unmute (firefox)",
  182 : "decrease volume level (firefox)",
  183 : "increase volume level (firefox)",
  186 : ":",
  187 : "+",
  188 : "<",
  189 : "-",
  190 : ">",
  191 : "?",
  192 : "curly wurly",
  193 : "?, / or °",
  194 : "numpad period (chrome)",
  219 : "{",
  220 : "pipe",
  221 : "}",
  222 : "Double Quote",
  223 : "`",
  224 : "left or right ⌘ key (firefox)",
  225 : "altgr",
  226 : "< /git >",
  230 : "GNOME Compose Key",
  231 : "Rç",
  233 : "XF86Forward",
  234 : "XF86Back",
  255 : "toggle touchpad"
}

$(document).ready(function() {
  var msg = document.querySelector('.text-display')
  if(responsiveVoice.voiceSupport()) {
    msg.textContent = keyboardIntro.one
    console.log(msg)
    responsiveVoice.speak(msg.textContent, "US English Female")
  }
  var body = document.querySelector('body');

    body.onkeydown = function (e) {
      console.log(e.key + " is the key that was keyed down")
      console.log(e.keyCode + " is the code")

      // console.log(e.metaKey + " IS E.METAKEY")
      if ( !e.metaKey ) {
        e.preventDefault();
      }

      if (e.shiftKey) {
        document.querySelector('.keycode-display').textContent = shiftKeyCodes[e.keyCode] + " and " + e.keyCode
        responsiveVoice.speak(shiftKeyCodes[e.keyCode], "US English Female")
        array.push(shiftKeyCodes[e.keyCode])
      } else {
      document.querySelector('.keycode-display').textContent = keyCodes[e.keyCode] + " and " + e.keyCode
      responsiveVoice.speak(keyCodes[e.keyCode], "US English Female")
      array.push(keyCodes[e.keyCode])
      }
    }

    $(window).on('click', function() {
      url = $('.contentsLink').attr('href')
      window.location.href = "http://localhost:8000"+url
    })

})