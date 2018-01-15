class JackpotBonus {
	constructor(jElement, bElement, initValues = {jValue: 2000, bValue: 1000}) {
		if (!jElement || !bElement) {
			console.error('Jackpot or bonus element is not defined in constructor');

			return;
		}

		this.jNode = jElement;
		this.bNode = bElement;

		this.jValue = initValues.jValue;
		this.bValue = initValues.bValue;

		this.setJackpot(this.jValue);
		this.setBonus(this.bValue);

		this.intervalId;
	}

	run() {
		this.intervalId = setInterval(() => this.tick(), 100);
	}

	stop() {
		clearInterval(this.intervalId);
	}

	tick() {
		this.jValue += 0.04;
		this.bValue += 0.03;

		this.updateFields();
	}

	updateFields() {
		this.setJackpot(this.jValue);
		this.setBonus(this.bValue);
	}

	setJackpot(value) {
		this.jNode.innerText = value.toFixed(2);
	}
	setBonus(value) {
		this.bNode.innerText = value.toFixed(2);
	}
}

export default JackpotBonus;
