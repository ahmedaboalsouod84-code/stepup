# Image Optimization - Execution Instructions

## Quick Start Guide

Follow these steps to automatically optimize all images in your project.

---

## Step 1: Install Python (If Not Already Installed)

### Check if Python is installed:
```powershell
python --version
```

If Python is not installed:
- Download from: https://www.python.org/downloads/
- During installation, check "Add Python to PATH"

---

## Step 2: Install Pillow Library

Open your terminal/PowerShell in the project root directory (`d:\stopup\stepup`) and run:

```powershell
pip install Pillow
```

**Alternative if you have multiple Python versions:**
```powershell
python -m pip install Pillow
```

**Or using pip3:**
```powershell
pip3 install Pillow
```

### Verify Installation:
```powershell
python -c "from PIL import Image; print('Pillow installed successfully!')"
```

---

## Step 3: Run the Optimization Script

### Navigate to Project Root:
```powershell
cd d:\stopup\stepup
```

### Run the Script:
```powershell
python optimize_assets.py
```

**Alternative commands (if above doesn't work):**
```powershell
python3 optimize_assets.py
```

```powershell
py optimize_assets.py
```

---

## Step 4: Review Results

The script will:
1. ✅ Create a backup folder: `backup/original_images/YYYYMMDD_HHMMSS/`
2. ✅ Process all PNG and JPG files in `assets/img/`
3. ✅ Show compression progress for each file
4. ✅ Display a summary of space saved

### Example Output:
```
======================================================================
StepUp Project - Image Optimization Script
======================================================================

Creating backup folder...
✅ Backup location: backup/original_images/20251129_143022

Found 109 image file(s) to optimize:
----------------------------------------------------------------------

Processing: hero_img_1.png (2.45 MB) ... ✅ 2.45 MB → 1.80 MB (saved 650.00 KB, 26.5%)
Processing: about_img.png (1.23 MB) ... ✅ 1.23 MB → 890.00 KB (saved 340.00 KB, 27.6%)
...

======================================================================
OPTIMIZATION SUMMARY
======================================================================
Total files processed: 109
  ✅ Successful: 109
  ❌ Failed: 0

Total original size: 45.23 MB
Total new size:      32.15 MB
Total space saved:   13.08 MB (28.9%)

💾 Original files backed up to: backup/original_images/20251129_143022
======================================================================

✅ Optimization complete!
```

---

## Important Notes

### ⚠️ Backup Safety
- **Original files are automatically backed up** before optimization
- Backup location: `backup/original_images/[timestamp]/`
- You can restore files from backup if needed

### 📁 What Gets Optimized
- **PNG files:** Optimized (lossless compression)
- **JPG/JPEG files:** Compressed to 80% quality (adjustable in script)

### 🔄 Restoring Original Files
If you need to restore original files:
```powershell
# Copy files back from backup
Copy-Item "backup/original_images/20251129_143022/*" "assets/img/" -Force
```

### ⚙️ Adjusting Compression Quality
To change JPEG quality, edit `optimize_assets.py`:
```python
QUALITY_JPEG = 80  # Change this value (0-100, higher = better quality)
```

---

## Troubleshooting

### Error: "Pillow is not installed"
**Solution:** Run `pip install Pillow` again

### Error: "Image directory not found"
**Solution:** Make sure you're running the script from the project root directory (`d:\stopup\stepup`)

### Error: "Permission denied"
**Solution:** 
- Close any image viewers/editors that might have files open
- Run PowerShell as Administrator (if needed)

### Script Runs But No Files Processed
**Solution:** 
- Check that images are in `assets/img/` folder
- Verify file extensions are `.png`, `.jpg`, or `.jpeg` (case-sensitive)

---

## After Optimization

### 1. Test Your Website
- ✅ Check that all images display correctly
- ✅ Verify image quality is acceptable
- ✅ Test on mobile devices
- ✅ Check page load times

### 2. Check File Sizes
Compare original vs. optimized:
- Original files: `backup/original_images/[timestamp]/`
- Optimized files: `assets/img/`

### 3. Video Optimization (Separate Step)
See `VIDEO_OPTIMIZATION_GUIDE.md` for video compression instructions.

---

## Optional: Batch Processing Different Folders

If you want to optimize images in other folders, you can modify the script:

1. Edit `optimize_assets.py`
2. Change the `IMAGE_DIR` variable:
   ```python
   IMAGE_DIR = "assets/img"  # Change this path
   ```

---

## Summary

**Quick Command Summary:**
```powershell
# 1. Install Pillow
pip install Pillow

# 2. Run optimization
python optimize_assets.py

# 3. Done! Check the summary output
```

---

**Script Location:** `d:\stopup\stepup\optimize_assets.py`  
**Backup Location:** `d:\stopup\stepup\backup\original_images\`  
**Last Updated:** November 29, 2025
