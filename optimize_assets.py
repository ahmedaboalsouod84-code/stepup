#!/usr/bin/env python3
"""
StepUp Project - Image Optimization Script
Automatically compresses PNG and JPG images in assets/img/ folder
and converts them to WebP format for better performance
"""

import os
import shutil
from pathlib import Path
from PIL import Image
from datetime import datetime

# Configuration
IMAGE_DIR = "assets/img"
BACKUP_DIR = "backup/original_images"
QUALITY_JPEG = 80  # Quality for JPEG compression (0-100)
QUALITY_WEBP = 80  # Quality for WebP conversion (0-100)

def format_size(size_bytes):
    """Convert bytes to human-readable format."""
    for unit in ['B', 'KB', 'MB', 'GB']:
        if size_bytes < 1024.0:
            return f"{size_bytes:.2f} {unit}"
        size_bytes /= 1024.0
    return f"{size_bytes:.2f} TB"

def create_backup_folder():
    """Create backup directory with timestamp."""
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_path = Path(BACKUP_DIR) / timestamp
    backup_path.mkdir(parents=True, exist_ok=True)
    return backup_path

def get_original_size(file_path):
    """Get original file size."""
    return os.path.getsize(file_path)

def compress_jpeg(input_path, output_path, quality=QUALITY_JPEG):
    """Compress JPEG image."""
    try:
        with Image.open(input_path) as img:
            # Convert RGBA to RGB if necessary (JPEG doesn't support transparency)
            if img.mode in ('RGBA', 'LA', 'P'):
                # Create white background
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = background
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Save with compression
            img.save(output_path, 'JPEG', quality=quality, optimize=True)
            return True
    except Exception as e:
        print(f"  ❌ Error compressing {input_path.name}: {e}")
        return False

def compress_png(input_path, output_path):
    """Compress PNG image."""
    try:
        with Image.open(input_path) as img:
            # Save with optimization
            img.save(output_path, 'PNG', optimize=True)
            return True
    except Exception as e:
        print(f"  ❌ Error compressing {input_path.name}: {e}")
        return False

def convert_to_webp(input_path, output_path, quality=QUALITY_WEBP):
    """Convert image to WebP format."""
    try:
        with Image.open(input_path) as img:
            # Convert RGBA to RGB if necessary (WebP supports transparency, but we'll handle it)
            if img.mode in ('RGBA', 'LA'):
                # Keep transparency for WebP
                img.save(output_path, 'WEBP', quality=quality, method=6, lossless=False)
            elif img.mode == 'P':
                # Convert palette mode to RGBA to preserve transparency
                img = img.convert('RGBA')
                img.save(output_path, 'WEBP', quality=quality, method=6, lossless=False)
            elif img.mode != 'RGB':
                img = img.convert('RGB')
                img.save(output_path, 'WEBP', quality=quality, method=6, lossless=False)
            else:
                img.save(output_path, 'WEBP', quality=quality, method=6, lossless=False)
            return True
    except Exception as e:
        print(f"  ❌ Error converting {input_path.name} to WebP: {e}")
        return False

def optimize_image(image_path, backup_path):
    """Optimize a single image file and create WebP version."""
    original_size = get_original_size(image_path)
    file_ext = image_path.suffix.lower()
    
    print(f"Processing: {image_path.name} ({format_size(original_size)})", end=" ... ")
    
    # Copy to backup first
    backup_file = backup_path / image_path.name
    shutil.copy2(image_path, backup_file)
    
    # Compress original based on file type
    success = False
    if file_ext in ['.jpg', '.jpeg']:
        success = compress_jpeg(image_path, image_path)
    elif file_ext == '.png':
        success = compress_png(image_path, image_path)
    
    # Calculate compression savings
    compression_saved = 0
    if success:
        new_size = get_original_size(image_path)
        compression_saved = original_size - new_size
        saved_percent = (compression_saved / original_size * 100) if original_size > 0 else 0
        print(f"✅ {format_size(original_size)} → {format_size(new_size)} "
              f"(saved {format_size(compression_saved)}, {saved_percent:.1f}%)", end="")
    else:
        # Restore from backup if compression failed
        shutil.copy2(backup_file, image_path)
        print(f"❌ Compression failed - restored from backup")
        return 0, False
    
    # Create WebP version
    webp_path = image_path.with_suffix('.webp')
    webp_saved = 0
    if file_ext in ['.jpg', '.jpeg', '.png']:
        if convert_to_webp(image_path, webp_path, QUALITY_WEBP):
            webp_size = get_original_size(webp_path)
            original_for_webp = get_original_size(backup_file)  # Compare to original
            webp_saved = original_for_webp - webp_size
            webp_percent = (webp_saved / original_for_webp * 100) if original_for_webp > 0 else 0
            print(f" | WebP: {format_size(webp_size)} (saved {format_size(webp_saved)}, {webp_percent:.1f}%)")
        else:
            print(f" | WebP conversion failed")
    
    total_saved = compression_saved + webp_saved
    return total_saved, True

def main():
    """Main optimization function."""
    print("=" * 70)
    print("StepUp Project - Image Optimization Script")
    print("=" * 70)
    print()
    
    # Check if Pillow is installed
    try:
        from PIL import Image
    except ImportError:
        print("❌ ERROR: Pillow (PIL) is not installed!")
        print("Please install it by running: pip install Pillow")
        return
    
    # Check if image directory exists
    image_dir = Path(IMAGE_DIR)
    if not image_dir.exists():
        print(f"❌ ERROR: Image directory '{IMAGE_DIR}' not found!")
        return
    
    # Create backup folder
    print("Creating backup folder...")
    backup_path = create_backup_folder()
    print(f"✅ Backup location: {backup_path}")
    print()
    
    # Find all image files
    image_extensions = ['.png', '.jpg', '.jpeg']
    image_files = []
    for ext in image_extensions:
        image_files.extend(image_dir.glob(f"*{ext}"))
        image_files.extend(image_dir.glob(f"*{ext.upper()}"))
    
    if not image_files:
        print(f"❌ No image files found in '{IMAGE_DIR}'")
        return
    
    print(f"Found {len(image_files)} image file(s) to optimize:")
    print("-" * 70)
    print()
    
    # Process each image
    total_original_size = 0
    total_new_size = 0
    total_webp_size = 0
    total_saved = 0
    success_count = 0
    failed_count = 0
    webp_count = 0
    
    for img_file in sorted(image_files):
        original_size = get_original_size(img_file)
        total_original_size += original_size
        
        saved, success = optimize_image(img_file, backup_path)
        
        if success:
            total_new_size += get_original_size(img_file)
            total_saved += saved
            success_count += 1
            
            # Count WebP files created
            webp_path = img_file.with_suffix('.webp')
            if webp_path.exists():
                total_webp_size += get_original_size(webp_path)
                webp_count += 1
        else:
            total_new_size += original_size
            failed_count += 1
    
    # Print summary
    print()
    print("=" * 70)
    print("OPTIMIZATION SUMMARY")
    print("=" * 70)
    print(f"Total files processed: {len(image_files)}")
    print(f"  ✅ Successful: {success_count}")
    print(f"  ❌ Failed: {failed_count}")
    print(f"  🖼️  WebP files created: {webp_count}")
    print()
    print(f"Total original size: {format_size(total_original_size)}")
    print(f"Total optimized size: {format_size(total_new_size)}")
    if webp_count > 0:
        print(f"Total WebP size:     {format_size(total_webp_size)}")
    print(f"Total space saved:   {format_size(total_saved)} "
          f"({(total_saved/total_original_size*100) if total_original_size > 0 else 0:.1f}%)")
    print()
    print(f"💾 Original files backed up to: {backup_path}")
    print()
    print("📝 Note: Original files are kept. WebP versions are available for use.")
    print("=" * 70)
    print()
    
    if failed_count > 0:
        print("⚠️  Some files failed to optimize. Original files have been restored.")
        print()
    
    print("✅ Optimization complete!")

if __name__ == "__main__":
    main()
