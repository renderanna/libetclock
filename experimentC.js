//
// experiment.js
//   global configuration of the experiment
//

var experiment = experiment || {};

experiment.C = {
  code: 'binding-C',
  password: '99',
  randomDelayMin: 1000,
  randomDelayMax: 3000,
    stimulusDelay: 500,
    //AK: image array
    imagesArray: ["bild_1.png", "bild_2.png", "bild_3.png", "bild_4.png", "bild_5.png", "bild_6.png", "bild_7.png", "bild_8.png", "bild_9.png", "bild_10.png", "bild_11.png", "bild_12.png", "bild_13.png", "bild_14.png", "bild_15.png", "bild_16.png", "bild_17.png", "bild_18.png", "bild_19.png", "bild_20.png"],
  postResultsURL: 'datasent.asp',
  generateCSV: true,
  responseKey: '',
  sounds: {
    demo: [
      { file: 'media/250-440Hz_44100Hz_16bit_1000ms.wav' }
    ],
    getReady: [
      { file: 'media/250-440Hz_44100Hz_16bit_1000ms.wav' },
      { file: 'media/500-880Hz_44100Hz_16bit_1000ms.wav' }
    ],
    feedback: [
      { duration: 200 /*in msec*/, pitch: 1000 /*in Hz*/ },
      { duration: 100 /*in msec*/, pitch: 250 /*in Hz*/ }
    ]
  },
 messages: {
    commandPrevious: 'Previous',
    commandOK: 'OK',
    commandNext: 'Next',
    selectGroup: 'Select group',
    wrongPassword: 'Wrong code',
    trialReady: '',
    trialSelecting: '',
    trialSelectingText: 'Zu welchem Zeitpunkt hast du den <strong>Ton</strong> gehört?<br><br/>Bitte gib die entsprechende Zahl zwischen 0 und 60 an und klicke OK.<br><br/>',
    errorCSSAnimations: 'Your browser do not support CSS Animations.',
    errorResolution: 'Deine Bildschirmaufl\ösung ist zu klein.</p><br/><p>Bitte dr\ücke F11 um zum Vollbild zu wechseln und dr\ücke dann F5 um neu zu laden.',
    errorAudio: 'Your browser do not support Web Audio API and therefore it will not be possible to play experiment\'s sounds.',
    recommendBrowser: 'Please <a href="http://google.com/chrome">download the latests version of Google Chrome</a> and try again.',
    errorAJAX: 'Unfortunately there has been an error while sending your results. Please contact us to solve the problem.',
    downloadTitle: 'Daten downloaden',
    downloadData: 'Klicke hier, um die Daten des Experiments herunterzuladen.',
    end: 'Hast du die Daten heruntergeladen? Dann kannst Du das Browserfenster jetzt schliessen.'
  },
  preScreens: [
    {
      title: 'Willkommen',
      content: '</p><br/><p><p><strong>LabClock 1.4.5</strong><br/><a href="http://www.labpsico.deusto.es/">Labpsico</a>, 2018<br/><br/>Developed by Pablo Garaizar<br/>used by Anna Render<br/>Universit\ät Regensburg</p><br/><p>Bevor du beginnst, kontrolliere bitte, ob die <strong>Lautspecher eingeschaltet</strong> sind und w\ähle die <strong>angemessene Lautstärke</strong>.</p><br/><button id="demosound" onclick="labclock.playDemo()">Play demo sound</button><br/><br/><p>Klicke \'Next\' um fortzusetzen...</p>'
    },
    {
      title: 'Danke',
      content: '</p><br/><p><p>Vielen Dank, dass du an diesen Experiment teilnimmst. Ohne Hilfe von Menschen wie dir, w\äre unsere Forschung nicht m\öglich :).</p><br/><p>Bei dieser Aufgabe gibt es keine guten oder schlechten Antworten. Wir möchten untersuchen, ob grundlegende psychologische Prozesse bei allen Individien in gleicher Form auftreten.</p><br/><p>Wenn du teilnehmen möchtest, ist es wichtig, dass du es aus wirklichem Interesse tust. Die Untersuchung ist <em>anonym</em> und <em>freiwillig</em>. Deine Daten werden nur innerhalb eines größeren Datensatzes analysiert, sodass kein Rückschluss auf deine Person möglich ist.</p><br/><p>Wenn du teilnehmen möchtest, klicke \'Next\'.</p>'
    },
    {
      title: 'Instruktionen',
      content: '<p></p><br/><p>Jeder Durchgang beginnt mit einer kurzen Instruktion. Der Zeiger der Uhr wird 2 Umrundungen durchlaufen, bevor die Uhr stoppt.<br/>Es gibt vier Bedingungen. In drei der vier Bedingungen, ist es deine Aufgabe, zu einem beliebigen Zeitpunkt in der <em>zweiten</em> Umrundung des Uhrzeigers, die <strong><em>Leertaste</em></strong> zu drücken.<br/>Bitte drücke nicht systematisch, wie z.B. immer zur gleichen Zeit. In einigen Durchgängen folgt ein Ton.<br/>In zwei Bedingungen wirst du am Ende jedes Durchgangs gefragt, zu welchem Zeitpunkt du <strong><em>entschieden</em></strong> hast, die <strong><em>Taste</em></strong> zu drücken, in den anderen beiden Bedingungen sollst du angeben, wann du den <strong><em>Ton</em></strong> gehört hast. Den Zeitpunkt kannst du dann durch einen Klick im Ziffernblatt der Uhr markieren.<br/>In einer Bedingung brauchst du die <strong><em>Leertaste nicht</em></strong> zu drücken. Es wird ein <strong><em>Ton</em></strong> gespielt und deine Aufgabe ist es anzugeben, wann der <strong><em>Ton</em></strong> gespielt wurde. Nachdem du den Zeitpunkt angegeben hast, beginnt der nächste Durchgang.<br/>Die Bedingungen erscheinen in zufälliger Reihenfolge, bitte achte deswegen genau auf die Instruktionen.</p><br/><p></p><br/><p></p>'
    },
    {
      title: 'Instruktionen',
      content: '<p></p><br/><p>In manchen Durchgängen wird ein Ton gespielt. Bitte setze dafür die Kopfhörer auf und stelle die Lautstärke richtig ein.</p><br/><p>Falls du, wenn es in der jeweiligen Bedingung gefordert war, vergisst die Leertaste in der zweite Umrundung zu drücken, beginnt der nächste Durchgang ohne dass du eine Zeitangabe machen musst.</p><br/><p>Bitte fokussiere deinen Blick auf den Mittelpunkt der Uhr.</p><br/><br/><p>Gleich erscheint eine Uhr im Demo-Modus zur Eingewöhnung.</p>'
    },
    {
      title: 'Demo',
      content: '<p>Uhr im  Demo-Modus. Klicke \'Next\' wenn du verstanden hast, wie es funktioniert.</p><div id="demo_clock"><div id="demo_marks"><img src="img/dot.png" width="510" height="510"  id="demo_dot"/></div></div>'
    }
  ],
  passwordScreen: {
    title: 'Gleich geht\'s los',
    content: '</p><br/><p><p>Bitte gib den Code ein, der dir vom Versuchsleiter gegeben wurde.<br/> Es folgt zunächst eine Übung.<br/><div id="pre_password"><input type="password" id="pre_password_text" size="10" /></div><br/><p>Die Übung beginnt, sobald der richtige Code eingegeben wurde.</p><br/><br/><br/><br/><p>Klicke \'OK\' um zu beginnen...</p>'
  },
  phases: [
    {
      messagezeiteingabe:'Zu welchem Zeitpunkt hast du die <strong>Leertaste</strong> gedrückt? Wähle den Zeitpunkt auf dem Ziffernblatt.',
	  messageinstruction: 'Bitte denke daran, die <strong>Leertaste</strong> in der <strong>zweiten</strong> Umrundung zu drücken.',
	  description: 'Übung',  
	  taste: ' ',
      progress: false,
      scramble: false,
      trials: [
        { cycle: 2560, tone: 500 },
		{ cycle: 2560			 },
        { cycle: 2560, tone: 1 }
	
	
      ],
      screen: {
        title: 'Ende der Übung',
        content: '<p>Klicke \'OK\' um das Experiment zu beginnen.</p>'
      }
    },
   
 {
	  messagezeiteingabe:'Zu welchem Zeitpunkt hast du den <strong>Ton</strong> gehört? Wähle den Zeitpunkt auf dem Ziffernblatt.',
	  messageinstruction: 'Du brauchst die Leertaste <strong>nicht</strong> drücken. Du hörst einen Ton.',
	  taste: '',
	  description: 'B_3',
      progress: true,
      scramble: true,
      trials: [
          { cycle: 2560, nopress: true, tone: Math.random() * (5120 - 2560) + 2560, response: 'text'},
		  { cycle: 2560, nopress: true, tone: Math.random() * (5120 - 2560) + 2560, response: 'text'},
	 
      ],

		  
  screen: {
        title: 'Ende der ersten Bedingung',
        content: '<p>Klicke \'OK\' um die nächste Bedingung zu beginnen.</p>'
      }
    },
  {

	 messagezeiteingabe:'Zu welchem Zeitpunkt hast du die <strong>Leertaste</strong> gedrückt? Wähle den Zeitpunkt auf dem Ziffernblatt.',
	  messageinstruction: 'Bitte denke daran, die <strong>Leertaste</strong> in der <strong>zweiten</strong> Umrundung zu drücken.',
	  taste: ' ',
      description: 'B_1',
      progress: true,
      scramble: false,
      trials: [
        { cycle: 2560 },
        { cycle: 2560 },
		
      ],

  screen: {
        title: 'Ende der zweiten Bedingung',
        content: '<p>Klicke \'OK\' um die nächste Bedingung zu beginnen.</p>'
      }
    },
  {
	 	 messagezeiteingabe:'Zu welchem Zeitpunkt hast du den <strong>Ton</strong> gehört? Wähle den Zeitpunkt auf dem Ziffernblatt.',
	  messageinstruction: 'Bitte denke daran, die <strong>Leertaste</strong> in der <strong>zweiten</strong> Umrundung zu drücken.',
	  taste: ' ',
	  description: 'B_4',
      progress: true,
      scramble: true,
      trials: [
        { cycle: 2560, tone: 250 },
        { cycle: 2560, tone: 250 },

      ],


	 screen: {
        title: 'Ende der dritten Bedingung',
        content: '<p>Klicke \'OK\' um die nächste Bedingung zu beginnen.</p>'
      }
    },
  {
	 
	 messagezeiteingabe:'Zu welchem Zeitpunkt hast du die <strong>Leertaste</strong> gedrückt? Wähle den Zeitpunkt auf dem Ziffernblatt.',
	  messageinstruction: 'Bitte denke daran, die <strong>Leertaste</strong> in der <strong>zweiten</strong> Umrundung zu drücken.',
	  taste: ' ',
	  description: 'B_2',
      progress: true,
      scramble: false,
      trials: [
        { cycle: 2560, tone: 250 },
        { cycle: 2560, tone: 250 },

      ],
      screen: {
        title: 'Ende der vierten Bedingung',
        content: '<p>Klicke \'OK\' um die Daten herunterzuladen.</p>'
      }
    }
  ],
  postScreens: [
    {
      title: 'So gehts weiter...',
      content: '<p> Bitte lade auf der nächsten Seite die Daten herunter, danach kannst du dir jetzt das Video anschauen.</p><br/><p></p><br/><p></p>'
    },
  ]
};

