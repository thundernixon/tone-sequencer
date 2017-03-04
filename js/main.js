// var button = document.querySelector("#chord");

// button.addEventListener("click", function() {
//   element.classList.toggle("yay");
// });

//bpm slider
document.querySelector('#bpm').addEventListener('input', function(e){
	Tone.Transport.bpm.value = parseInt(e.target.value)
})

var synth = new Tone.Synth().toMaster()

//pass in an array of events
var part = new Tone.Part(function(time, event){
	//the events will be given to the callback with the time they occur
	synth.triggerAttackRelease(event.note, event.dur, time)
}, [{ time : 0, note : 'C4', dur : '4n'},
	{ time : '4n + 8n', note : 'E4', dur : '8n'},
	{ time : '2n', note : 'G4', dur : '16n'},
	{ time : '2n + 8t', note : 'B4', dur : '4n'}])

//start the part at the beginning of the Transport's timeline
part.start(0)

//loop the part 3 times
part.loop = Infinity
part.loopEnd = '1m'

//pass in an array of events
var part2 = new Tone.Part(function(time, event){
	//the events will be given to the callback with the time they occur
	synth.triggerAttackRelease(event.note, event.dur, time)
}, [{ time : 0, note : 'E4', dur : '4n'},
	{ time : '4n + 8n', note : 'G4', dur : '8n'},
	{ time : '2n', note : 'B4', dur : '16n'},
	{ time : '2n + 8t', note : 'D4', dur : '4n'}])

//start the part at the beginning of the Transport's timeline
part2.start(0.2)

//loop the part 3 times
part2.loop = Infinity
part2.loopEnd = '1m'

document.querySelector('#chord').addEventListener('change', function(e){
	if (e.target.checked){
		Tone.Transport.start('+0.1')
	} else {
		Tone.Transport.stop()
	}
})

document.querySelector('#chord2').addEventListener('change', function(e){
	if (e.target.checked){
		Tone.Transport.start('+0.1')
	} else {
		Tone.Transport.stop()
	}
})