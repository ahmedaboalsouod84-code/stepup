# Video Optimization Guide

## Overview
This guide explains how to optimize the `video_block.mp4` file in your project to reduce file size and improve page load times.

---

## Why Optimize Video Files?

Video files are typically the largest assets on a website and can significantly impact:
- Page load time
- Mobile data usage
- User experience (especially on slower connections)
- Server bandwidth costs

---

## Step 1: Locate Your Video File

The video file is located at:
```
assets/img/video_block.mp4
```

---

## Step 2: Choose an Optimization Tool

### Option A: Online Tools (Easiest - No Installation)

#### 1. **CloudConvert** (Recommended)
- **URL:** https://cloudconvert.com/mp4-compressor
- **Steps:**
  1. Upload your `video_block.mp4` file
  2. Choose compression settings (lower quality = smaller file)
  3. Click "Convert"
  4. Download the compressed file
  5. Replace the original file in `assets/img/`

#### 2. **FreeConvert**
- **URL:** https://www.freeconvert.com/video-compressor
- Similar workflow to CloudConvert

#### 3. **Clipchamp** (Microsoft)
- **URL:** https://clipchamp.com/
- Free video compression tool

### Option B: Desktop Software (More Control)

#### 1. **HandBrake** (Free, Open Source)
- **Download:** https://handbrake.fr/
- **Installation:** Download and install for Windows
- **Steps:**
  1. Open HandBrake
  2. Click "Open Source" and select `video_block.mp4`
  3. Choose preset: **"Fast 1080p30"** or **"Fast 720p30"** (for web)
  4. Adjust settings:
     - **Video Codec:** H.264 (x264)
     - **Quality:** RF 23-28 (lower = higher quality, larger file)
     - **Frame Rate:** 30 fps
  5. Click "Start Encode"
  6. Replace original file with the compressed version

#### 2. **VLC Media Player** (Free)
- **Steps:**
  1. Open VLC → Media → Convert/Save
  2. Add your video file
  3. Choose "Convert" button
  4. Profile: "Video - H.264 + MP3 (MP4)"
  5. Click "Start"

---

## Step 3: Recommended Compression Settings

### For Web Use:
- **Format:** MP4 (H.264 codec)
- **Resolution:** 
  - 1920x1080 (1080p) - if original is HD
  - 1280x720 (720p) - good balance for web
  - Lower if the video doesn't need to be high quality
- **Bitrate:** 2-5 Mbps (lower = smaller file)
- **Frame Rate:** 24-30 fps
- **Audio:** 128 kbps AAC

### Target File Size:
- **Goal:** Under 5-10 MB for web
- **Current size:** Check file size first
- **Acceptable quality loss:** 10-20% compression is usually unnoticeable

---

## Step 4: Alternative Formats (Better Compression)

### WebM Format (Recommended for Modern Browsers)
WebM provides better compression than MP4:

**Using HandBrake:**
1. Change output format to **WebM**
2. Use **VP9** codec
3. Similar quality settings

**Using Online Tool:**
- CloudConvert supports WebM conversion

**Note:** Add fallback to MP4 in your HTML:
```html
<video controls>
  <source src="assets/img/video_block.webm" type="video/webm">
  <source src="assets/img/video_block.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

---

## Step 5: Backup Original File

**⚠️ IMPORTANT:** Before replacing the original file:

1. Create a backup folder:
   ```
   backup/original_videos/
   ```

2. Copy your original file:
   ```
   backup/original_videos/video_block_original.mp4
   ```

This way, you can restore it if the compression quality is not acceptable.

---

## Step 6: Test the Compressed Video

After compressing:

1. ✅ Test video playback on your website
2. ✅ Check video quality (ensure it's acceptable)
3. ✅ Test on mobile devices
4. ✅ Verify file size reduction

---

## Step 7: Lazy Loading (Already Implemented)

Your website likely already has lazy loading for videos. Make sure:
- Video is not autoplaying (saves bandwidth)
- Video loads only when user scrolls to it
- Consider using a poster image instead of autoplay

---

## Quick Reference: File Size Recommendations

| Use Case | Recommended Size |
|----------|-----------------|
| Hero/Background Video | < 5 MB |
| Content Video | < 10 MB |
| Full-Length Video | < 50 MB (consider hosting on YouTube/Vimeo) |

---

## Troubleshooting

### Video Quality Too Low?
- Increase bitrate or quality setting
- Try different compression tool
- Keep higher resolution

### File Still Too Large?
- Lower resolution (e.g., 720p instead of 1080p)
- Reduce bitrate further
- Consider splitting into multiple shorter clips
- Use WebM format instead of MP4

### Compression Failed?
- Try a different tool
- Check if video codec is supported
- Ensure file is not corrupted

---

## Additional Optimization Tips

1. **Poster Image:** Use a poster image instead of loading video immediately
   ```html
   <video poster="assets/img/video_poster.jpg" ...>
   ```

2. **Preload:** Set `preload="none"` to prevent auto-download
   ```html
   <video preload="none" ...>
   ```

3. **External Hosting:** For large videos, consider:
   - YouTube (embed)
   - Vimeo
   - Cloudflare Stream
   - AWS S3 + CloudFront

---

## Need Help?

If you encounter issues:
1. Check file format compatibility
2. Try a different compression tool
3. Review compression settings
4. Test on multiple browsers

---

**Last Updated:** November 29, 2025  
**Tool Recommendations:** Based on current best practices for web video optimization
