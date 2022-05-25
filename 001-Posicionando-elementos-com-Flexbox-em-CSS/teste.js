a, b, c = input().split()
a = int(a)
b = int(b)
c = int(c)
if ((a - b == 0) || (a - c == 0) || (b - c == 0)) {
    print('S');
    { else if ((a + b - c == 0) || (b - a + c == 0) || (c - a + b == 0)) {
        print('S');
    } else if ((a - b - c == 0) || (b - a - c == 0) || (c - a - b == 0)) {
        print('S');
    } else
        print('N');
    }
}

