#include <iostream>

using namespace std;
int main()
{
    int row;
    cout << " enter row : ";
    cin >> row;

    for (int i = 1; i <= row; i++)
    {
        // for front triangle
        for (int j = 1; j <= row - i + 1; j++){
            cout << j;
        }
        // for front space
        for (int k = 1; k < i; k++){
            cout << " ";
        }
        // for back space
        for (int k = 1; k < i - 1; k++)
        {
            cout << " ";
        }
        // if i = 1 then 1 number should miss
        if (i == 1)
        {
            for (int l = row - i; l > 0; l--)
            {
                cout << l;
            }
        }
        // if i != 1 then ->
        else
        {
            for (int l = row - i + 1; l > 0; l--)
            {
                cout << l;
            }
        }

        // for next line...
        cout << endl;
    }
}