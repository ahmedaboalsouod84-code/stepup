import os

img_dir = 'assets/img'
files = []

for f in os.listdir(img_dir):
    filepath = os.path.join(img_dir, f)
    if os.path.isfile(filepath) and f.lower().endswith(('.png', '.jpg', '.jpeg', '.svg', '.mp4', '.gif')):
        size = os.path.getsize(filepath)
        files.append((f, size))

files.sort(key=lambda x: x[1], reverse=True)

print("Top 10 Largest Image Files:\n")
print(f"{'#':<4} {'Filename':<50} {'Size (KB)':<15} {'Size (MB)':<15}")
print("-" * 85)

for i, (name, size) in enumerate(files[:10], 1):
    size_kb = size / 1024
    size_mb = size / (1024 * 1024)
    print(f"{i:<4} {name:<50} {size_kb:>12.2f} KB  {size_mb:>12.2f} MB")

if len(files) > 10:
    print(f"\n... and {len(files) - 10} more files")
