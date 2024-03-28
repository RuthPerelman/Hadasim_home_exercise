package twiter_towers;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);

		System.out.println("choose:\n1.rectangle\n2.triangular");
		int option = in.nextInt();

		while (option != 3) {
			System.out.println("Enter height:");
			int height = in.nextInt();
			System.out.println("Insert width:");
			int width = in.nextInt();
			if (option==1) {
				Rectangle r = new Rectangle(height, width);
			}
			else {
				Triangular t = new Triangular(height, width);
			}
			
			System.out.println("choose:\n1.rectangle\n2.triangular");
			option = in.nextInt();
		}
		System.out.println("out");
	}

}
