class Stopwatch extends React.Component {
    constructor() {
    	super();
    	this.running = false;
		this.reset();
		
		this.state = {
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			}
		}	
    }

    reset() {
        this.setState({
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        });
    }  

	format() {
		return `${pad0(this.state.times.minutes)}:${pad0(this.state.times.seconds)}:${pad0(Math.floor(this.state.times.miliseconds))}`;
	}

	start() {
		if (!this.state.running) {
		    this.running = true;
		    this.watch = setInterval(() => this.step(), 10);
		}
	}

	step() {
	    if (!this.running) return;
	    this.calculate();	    
	}

	calculate() {    // ???
		this.setState(
		/*
		this.times.miliseconds += 1;
	    if (this.times.miliseconds >= 100) {
	        this.times.seconds += 1;
	        this.times.miliseconds = 0;
	    }
	    if (this.times.seconds >= 60) {
	        this.times.minutes += 1;
	        this.times.seconds = 0;
	    }
		*/
		)
	}

	stop() {
	    this.setState ({
            running: false
        });
	    clearInterval(this.watch);
	}

    render() {
	    return (
	    	<div className="container">
	    		<nav className='controls'>
					<a href='#' className='button' onClick={() => this.start()}>Start</a>   
					<a href='#' className='button' onClick={() => this.stop()}>Stop</a>
					/*
					<button onClick={this.start.bind(this)}>Start</button>
					<button onClick={this.stop.bind(this)}>Stop</button>
					*/
				</nav>
				<div className="stopwatch">
					{this.format()}
				</div>
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

let stopwatch = React.createElement(Stopwatch);
ReactDOM.render(stopwatch, document.getElementById('app'));