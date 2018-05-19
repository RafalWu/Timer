
class Stopwatch extends React.createClass {
    constructor(props) {
		super(props);
		this.state = {
			running: false,
//			display: display,
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			}
 //       this.reset(),
 //       this.print(this.times);
		}
	}
		reset() {
			
			this.setState = {
				times: {
					minutes: 0,
					seconds: 0,
					miliseconds: 0
				}
			};
		}
	
//	print() {
//        this.display.innerText = this.format(this.times);
//	}
	
	format() {
        return `${pad0(this.state.times.minutes)}:${pad0(this.state.times.seconds)}:${pad0(Math.floor(this.state.times.miliseconds))}`;
	}
	
	start() {
		if (!this.state.times.running) {
			this.state.times.running = true;
			this.watch = setInterval(() => this.step(), 10);
		}
	}
	
	step() {
		if (!this.state.times.running) return;
		this.calculate();
//		this.print();
	}
	
	calculate() {
		let miliseconds = this.state.times.miliseconds,
			seconds = this.state.times.seconds,
			minutes = this.state.times.minutes;
			miliseconds += 1;
		if (miliseconds >= 100) {
			seconds += 1;
			miliseconds = 0;
		}
		if (seconds >= 60) {
			minutes += 1;
			seconds = 0;
		}
		 this.setState ({
        	miliseconds: miliseconds,
        	seconds: seconds,
        	minutes: minutes
        });
	}
	
	stop() {
		this.state.times.running = false;
		clearInterval(this.watch);
	}
	render() {
		return (
			<div>
				<div className={'stopwatch'}>{this.format(this.state.times)}</div>
				<button className={'startButton'} onClick={this.start.bind(this)}>Start</button>
				<button className={'stopButton'} onClick={this.stop.bind(this)}>Stop</button>
			</div>
		);
	}
}

function pad0(value) {
		let result = value.toString();
		if (result.length < 2) {
			result = '0' + result;
		}
		return result;
	}
/*
let startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

const stopwatch = new Stopwatch(
document.querySelector('.stopwatch'));*/
ReactDOM.render(<Stopwatch />, document.getElementById('stopwatch'));