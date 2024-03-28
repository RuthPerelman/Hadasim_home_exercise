package twiter_towers;

public class Rectangle extends Shape {

	public Rectangle(int height, int width) {
		super(height, width);
		if (TheDifferenceBetweenTheLengthsOfTheSides(5)) {
			System.out.println(area());
		} else {
			System.out.println(perimeter());
		}
	}

	public boolean TheDifferenceBetweenTheLengthsOfTheSides(int difference) {
		int diff = this.height - this.width;
		if (diff > difference || diff < difference * -1) {
			return true;
		}
		return false;
	}

	public double perimeter() {
		return this.height * 2 + this.width * 2;
	}

	public int area() {
		return this.height * this.width;
	}

}
