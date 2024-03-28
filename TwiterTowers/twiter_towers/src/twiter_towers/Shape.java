package twiter_towers;

public abstract class Shape {
	protected int height;
	protected int width;

	public Shape(int height, int width) {
		this.height = height;
		this.width = width;
	}
	
	public int getHeight() {
		return this.height;
	}
	
	public int getWidth() {
		return this.width;
	}
	
	abstract public double perimeter();
	abstract public int area();
	
}
