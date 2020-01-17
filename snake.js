function Snake() {
	this.x = 0;
	this.y = 0;

	this.draw =function() {
		ctx.fillstyle = "#FFFFF";
		ctx.fillRect(this.x, this.y, scale, scale);
	}

	this.update = fucntion() {
		this.x += this.xSpeed;
		this.y += this.ySpeed;
	}
}