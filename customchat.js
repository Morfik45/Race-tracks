let style = document.createElement('style');
style.appendChild(document.createTextNode(`.color-0{color: #ffffff;}
.color-1{color: #ff4444;}
.color-2{color: #99cc00;}
.color-3{color: #ffbb33;}
.color-4{color: #0099cc;}
.color-5{color: #33b5e5;}
.color-6{color: #aa66cc;}
.color-8{color: #cc0000;}
.color-9{color: #cc0068;}
.color-d{}

* {
  font-family: 'Lato', sans-serif;
  margin: 0;
  padding: 0;
}

.no-grow {
  flex-grow: 0;
}

em {
  font-style: normal;
}

#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

.chat-window {
  position: absolute;
  top: 15px;
  left: 15px;
  width: 38%;
  height: 22%;
  max-height: 360px;
  max-width: 1095px;

  background-color: rgba(52, 73, 94, 0.7);
  -webkit-animation-duration: 2s;
}


.chat-messages {
  position: relative;
  height: 95%;
  font-size: 1.2rem;
  margin: 10px;

  overflow-x: hidden;
  overflow-y: hidden;
}


.chat-input {
  font-size: 1.2rem;
  position: absolute;

  top: min(calc(22% + 31px), 391px);
  left: 15px;
  width: 38%;
  max-width: 1095px;
  background-color: rgba(44, 62, 80, 1.0);

  box-sizing: border-box;
}

.prefix {
  position: absolute;
  margin-top: 2px;
  left: 4px;
}

textarea {
  font-size: 1.1rem;
  display: block;
  box-sizing: border-box;
  padding: 5px;
  padding-left: 27px;
  color: white;
  background-color: rgba(44, 62, 80, 1.0);
  width: 100%;
  border-width: 0;
  height: 34px;
  overflow: hidden;
  resize: vertical;
}

textarea:focus, input:focus {
    outline: none;
}

.msg {
  margin-bottom: 3px;
}

.multiline {
  margin-left: 1.5rem;
  text-indent: -1.5rem;
  white-space: pre-line;
}

.suggestions {
  list-style-type: none;
  padding: 5px;
  padding-left: 27px;
  font-size: 1.1rem;
  box-sizing: border-box;
  color: white;
  background-color: rgba(44, 62, 80, 1.0);
  width: 100%;
}

.help {
  color: #b0bbbd;
}

.disabled {
  color: #b0bbbd;
}

.suggestion {
  margin-bottom: 5px;
}

.chat-btn-wrapper {
    display: table;
    table-layout: fixed;

    width:100%;
    margin: 0px;
    padding: 0px;
}
.chat-window-wrapper {
    display: table;
    table-layout: fixed;

    width: 100%;
    margin: 0px;
    margin-top: -8px;
    padding: 0px;
}

.chat-btn {
    background-color: rgba(44, 62, 80, 1.0);
    color: white;
    border: none;
    width: 25%;
    padding-left: 10px;
    padding-right: 10px;
    letter-spacing: 2px;
}
.chat-btn:hover {
    background-color: rgba(64, 82, 100, 1.0);
}
.chat-btn.on {
}
.chat-btn.off {
    color: red;
    font-weight: 900;
    letter-spacing: 4px;
}

.iconChat {
    width: 1.5em;
    margin: -3px 0;
}

.channelHidden {
    display: none;
}
.channelSelected {
    font-weight: bolder;
    color: yellow;
}

.anim-h {
  animation: color-h 7s infinite;
}

/* Standar Syntax */
@keyframes color-h{
    0%{color: red;}
    14%{color: orange;}
    29%{color: yellow;}
    43%{color: green;}
    57%{color: blue;}
    71%{color: indigo;}
    86%{color: violet;}
    100%{color: red;}
}

.anim-e {
    /** font-family: sans-serif; **/
    background: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet,red);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: e_move 6000s linear infinite;
}

@keyframes e_move{
    to {
        background-position: 25000vh;
    }
}

.anim-p {
  animation: color-p 1s infinite;
}

@keyframes color-p{
    0%{color: red;}
    20%{color: red;}
    30%{color: blue;}
    70%{color: blue;}
	80%{color: red;}
	100%{color: red;}
}
.color-0{color: #ffffff;}
.color-1{color: #ff4444;}
.color-2{color: #99cc00;}
.color-3{color: #ffbb33;}
.color-4{color: #0099cc;}
.color-5{color: #33b5e5;}
.color-6{color: #aa66cc;}
.color-8{color: #cc0000;}
.color-9{color: #cc0068;}
.color-d{}

* {
  font-family: 'Lato', sans-serif;
  margin: 0;
  padding: 0;
}

.no-grow {
  flex-grow: 0;
}

em {
  font-style: normal;
}

#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

.chat-window {
  position: absolute;
  top: 15px;
  left: 15px;
  width: 38%;
  height: 22%;
  max-height: 360px;
  max-width: 1095px;

  background-color: rgba(52, 73, 94, 0.7);
  -webkit-animation-duration: 2s;
}


.chat-messages {
  position: relative;
  height: 95%;
  font-size: 1.2rem;
  margin: 10px;

  overflow-x: hidden;
  overflow-y: hidden;
}


.chat-input {
  font-size: 1.2rem;
  position: absolute;

  top: min(calc(22% + 31px), 391px);
  left: 15px;
  width: 38%;
  max-width: 1095px;
  background-color: rgba(44, 62, 80, 1.0);

  box-sizing: border-box;
}

.prefix {
  position: absolute;
  margin-top: 2px;
  left: 4px;
}

textarea {
  font-size: 1.1rem;
  display: block;
  box-sizing: border-box;
  padding: 5px;
  padding-left: 27px;
  color: white;
  background-color: rgba(44, 62, 80, 1.0);
  width: 100%;
  border-width: 0;
  height: 34px;
  overflow: hidden;
  resize: vertical;
}

textarea:focus, input:focus {
    outline: none;
}

.msg {
  margin-bottom: 3px;
}

.multiline {
  margin-left: 1.5rem;
  text-indent: -1.5rem;
  white-space: pre-line;
}

.suggestions {
  list-style-type: none;
  padding: 5px;
  padding-left: 27px;
  font-size: 1.1rem;
  box-sizing: border-box;
  color: white;
  background-color: rgba(44, 62, 80, 1.0);
  width: 100%;
}

.help {
  color: #b0bbbd;
}

.disabled {
  color: #b0bbbd;
}

.suggestion {
  margin-bottom: 5px;
}

.chat-btn-wrapper {
    display: table;
    table-layout: fixed;

    width:100%;
    margin: 0px;
    padding: 0px;
}
.chat-window-wrapper {
    display: table;
    table-layout: fixed;

    width: 100%;
    margin: 0px;
    margin-top: -8px;
    padding: 0px;
}

.chat-btn {
    background-color: rgba(44, 62, 80, 1.0);
    color: white;
    border: none;
    width: 25%;
    padding-left: 10px;
    padding-right: 10px;
    letter-spacing: 2px;
}
.chat-btn:hover {
    background-color: rgba(64, 82, 100, 1.0);
}
.chat-btn.on {
}
.chat-btn.off {
    color: red;
    font-weight: 900;
    letter-spacing: 4px;
}

.iconChat {
    width: 1.5em;
    margin: -3px 0;
}

.channelHidden {
    display: none;
}
.channelSelected {
    font-weight: bolder;
    color: yellow;
}

.anim-h {
  animation: color-h 7s infinite;
}

/* Standar Syntax */
@keyframes color-h{
    0%{color: red;}
    14%{color: orange;}
    29%{color: yellow;}
    43%{color: green;}
    57%{color: blue;}
    71%{color: indigo;}
    86%{color: violet;}
    100%{color: red;}
}

.anim-e {
    /** font-family: sans-serif; **/
    background: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet,red);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: e_move 6000s linear infinite;
}

@keyframes e_move{
    to {
        background-position: 25000vh;
    }
}

.anim-p {
  animation: color-p 1s infinite;
}

@keyframes color-p{
    0%{color: red;}
    20%{color: red;}
    30%{color: blue;}
    70%{color: blue;}
	80%{color: red;}
	100%{color: red;}
}
.color-0{color: #ffffff;}
.color-1{color: #ff4444;}
.color-2{color: #99cc00;}
.color-3{color: #ffbb33;}
.color-4{color: #0099cc;}
.color-5{color: #33b5e5;}
.color-6{color: #aa66cc;}
.color-8{color: #cc0000;}
.color-9{color: #cc0068;}

* {
  font-family: 'Lato', sans-serif;
  margin: 0;
  padding: 0;
}

.no-grow {
  flex-grow: 0;
}

em {
  font-style: normal;
}

#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

.chat-window {
  position: absolute;
  top: 15px;
  left: 10px !important;
  width: 38%;
  height: 22%;
  max-height: 360px;
  max-width: 1095px;

  background-color: rgba(52, 73, 94, 0.7);
  -webkit-animation-duration: 2s;
}


.chat-messages {
  position: relative;
  height: 95%;
  font-size: 1.2rem;
  margin: 10px;

  overflow-x: hidden;
  overflow-y: hidden;
}


.chat-input {
  font-size: 1.2rem;
  position: absolute;

  top: min(calc(22% + 31px), 391px);
  left: -15px !important;
  width: 38%;
  max-width: 1095px;
  background-color: rgba(44, 62, 80, 1.0);

  box-sizing: border-box;
}

.prefix {
  position: absolute;
  margin-top: 2px;
  left: 4px;
}

textarea {
  font-size: 1.1rem;
  display: block;
  box-sizing: border-box;
  padding: 5px;
  padding-left: 27px;
  color: white;
  background-color: rgba(44, 62, 80, 1.0);
  width: 100%;
  border-width: 0;
  height: 34px;
  overflow: hidden;
  resize: vertical;
}

textarea:focus, input:focus {
    outline: none;
}

.msg {
  margin-bottom: 3px;
}

.multiline {
  margin-left: 1.5rem;
  text-indent: -1.5rem;
  white-space: pre-line;
}

.suggestions {
  list-style-type: none;
  padding: 5px;
  padding-left: 27px;
  font-size: 1.1rem;
  box-sizing: border-box;
  color: white;
  background-color: rgba(44, 62, 80, 1.0);
  width: 100%;
}

.help {
  color: #b0bbbd;
}

.disabled {
  color: #b0bbbd;
}

.suggestion {
  margin-bottom: 5px;
}

.chat-btn-wrapper {
    display: table;
    table-layout: fixed;
    width:100%;
    margin: 0px;
    padding: 0px;
}
.chat-window-wrapper {
    display: table;
    table-layout: fixed;

    width: 100%;
    margin: 0px;
    margin-top: -8px;
    padding: 0px;
}

.chat-btn {
    background-color: rgba(44, 62, 80, 1.0);
    color: white;
    border: none;
    width: 25%;
    padding-left: 10px;
    padding-right: 10px;
    letter-spacing: 2px;
}
.chat-btn:hover {
    background-color: rgba(64, 82, 100, 1.0);
}
.chat-btn.on {
}
.chat-btn.off {
    color: red;
    font-weight: 900;
    letter-spacing: 4px;
}

.iconChat {
    width: 1.5em;
    margin: -3px 0;
}

.channelHidden {
    display: none;
}
.channelSelected {
    font-weight: bolder;
    color: yellow;
}

.color-0{color: #ffffff;}
.color-1{color: #ff4444;}
.color-2{color: #99cc00;}
.color-3{color: #ffbb33;}
.color-4{color: #0099cc;}
.color-5{color: #33b5e5;}
.color-6{color: #aa66cc;}
.color-8{color: #cc0000;}
.color-9{color: #cc0068;}

* {
  font-family: "arial black";
  margin: 0;
  padding: 0;
}

.no-grow {
  flex-grow: 0;
}

em {
  font-style: normal;
}

#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:transparent;
} 


.chat-window {
 /* background-image: url("https://cdn.discordapp.com/attachments/484324411693072394/857211375218458634/wallet_bank_job.png") !important;
  background-size: 670px 35px!important;
  background-position: bottom !important;
  background-repeat:no-repeat !important;*/
  background-color:transparent !important;
  padding-left:40px;
  position: absolute;
  top: 4%;
  left: 20px !important;
  width: 38%;
  height: 22%;
  max-height: 360px;
  max-width: 1095px;
  color: white;
  margin-top: -244px;
}


.chat-messages {
  background-image: url("https://cdn.discordapp.com/attachments/484324411693072394/853584202214015007/109-1096986_glass-background-shi-beige.png");
  background-color: rgba(52, 73, 94, 0.4) !important;
  background-size: 1020px 590px;
  background-position: center 0.5% !important;
  position: relative;
  height: 100%;
  font-size: 1.1rem;
  margin-bottom: 11px;
  width: 100%;
  left: -60px !important;
  margin-top: 275px;
  opacity:1;
  background-color: rgba(44, 62, 80, 0.0);
  box-sizing: border-box;
  border: 3px gray solid;
  border-style:outset;
  overflow-x: hidden;
  overflow-y: hidden;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

.chat-input {
  font-size: 1.1rem;
  position: absolute;
  top: 337px;
  margin:auto;
  left: -12px !important;
  width: 40%;
  max-width: 1095px;
  background-color: rgba(44, 62, 80, 0.0);
  box-sizing: border-box;
}

.prefix {
  position: absolute;
  margin-top: 2px;
  left: 4px;
}

textarea {
  font-size: 1.6rem;
    font-family:opineheavy;
    line-height:25px;
  display: block;
  box-sizing: border-box;
  padding: 5px;
  padding-left: 27px;
  color:#70b8ff;
  background-color: rgb(12 121 230 / 0%);
  width: 98%;
  border-width: 0px;
  height: 50px;
  overflow: hidden;
  resize: vertical;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

textarea:focus, input:focus {
    outline: none;
}

.msg {
  margin-bottom: 3px;
  
}

.multiline {
  margin-left: 1.5rem;
  text-indent: -1.5rem;
  white-space: pre-line;
}

.suggestions {
  list-style-type: none;
  padding: 5px;
  padding-left: 27px;
  font-size: 1.1rem;
  box-sizing: border-box;
  color: white;
  background-color: rgba(44, 62, 80, 0.0);
  width: 100%;
}

.help {
  color: #b0bbbd;
}

.disabled {
  color:green;
}

.suggestion {
  margin-bottom: 5px;
}

.chat-btn-wrapper {
    display: table;
    table-layout: fixed;
    width:100%;
    margin: 0px;
    padding: 0px;
}
.chat-window-wrapper {
    display: table;
    table-layout: fixed;
    width: 100%;
    margin-left: -50px;
    margin-top: -10px;
    padding: 0px;
}

.chat-btn {
  font-family:terminator two;
  font-size:17px;
  font-weight:bold;
    background-image: url("https://cdn.discordapp.com/attachments/484324411693072394/853584202214015007/109-1096986_glass-background-shi-beige.png");
  background-color: rgba(52, 73, 94, 0.4) !important;
    color: #00b1ff;
	border: 2px gray solid;
    border-style:outset;
    height: 25px;
    width: 31.7%;
    padding-left: 10px;
    padding-right: 10px;
    letter-spacing: 2px;
    text-shadow: -1px 0 #00000033, 0 1px black, 1px 0 black, 0 -1px black;
}
.chat-btn:hover {
    background-color: #606060;
}
.chat-btn.on {
}
.chat-btn.off {
    animation: block 2.0s infinite;
    background-color: #3366cc;
    font-weight: 900;
    letter-spacing: 4px;
}

.iconChat {
    width: 1.5em;
    margin: -3px 0;
}

.channelHidden {
    display: none;
}
.channelSelected {
    top:100px;
    font-weight: bolder;
    animation: rainbow 5s infinite;
    color: #14ff00;
    
}
@keyframes rainbow{
    0%{color: orange;}
  10%{color: purple;}
    20%{color: #3fff00;}
  30%{color: CadetBlue;}
    40%{color: yellow;}
  50%{color: coral;}
    60%{color: #af0b0b;}
  70%{color: cyan;}
  80%{color: DeepPink;}
  90%{color: DodgerBlue;}
    100%{color: #00ffe3;}
}

@keyframes block {
  0%{color: #eeeeee}
  50%{color: red}
 100%{color: #eeeeee}
}
`));
document.querySelector('iframe[name=chat]').contentDocument.body.appendChild(style);