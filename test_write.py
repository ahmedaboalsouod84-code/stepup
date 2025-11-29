import sys
with open('index.html', 'r', encoding='utf-8') as f:
    first_line = f.readline()
    print(f"First line: {first_line[:50]}", file=sys.stdout)
    sys.stdout.flush()

# Test write
with open('test_output.txt', 'w', encoding='utf-8') as f:
    f.write("test")
    print("Write test successful", file=sys.stdout)
    sys.stdout.flush()
