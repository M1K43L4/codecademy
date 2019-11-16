// Print loops will show some iterations through different loops

// This is a console application. When creating new projects, start a 
// console application to allow visual studios easy access to command prompt

// switch to x64 (next to the debugger)
// click build tab, build solution before running
// click debug, run without debugging to start

//location: C:\Users\Mikaela\source\repos\Print_Loops\Print_Loops

#include <iostream>
using namespace std;

int main()
{
    cout << "Hello World!\n";
	cout << "Here are some fun looops!\n";

	int i;
	int count = 0;
	for (i = 0; i < 10;) { //how many times will this loop run?
		cout << "Iterations is: ";
		cout << i;
		cout << "\n";

		count++;
		cout << "count is: ";
		cout << count;
		cout << "\n";

		i++;
		cout << "Now Iterations is: ";
		cout << i;
		cout << "\n";


	}
}

