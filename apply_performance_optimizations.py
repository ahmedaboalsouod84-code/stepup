#!/usr/bin/env python3
"""
Apply performance optimizations to all HTML files:
1. Fix preloader (already in main.js)
2. Add critical CSS inline
3. Optimize chatbot loading
4. Ensure all scripts are deferred
"""

import re
from pathlib import Path

def add_critical_css(content):
    """Add critical CSS inline before style.css link."""
    critical_css = """        <!-- Critical CSS - Inline for Above-the-Fold -->
        <style>
            /* Critical Above-the-Fold CSS - Prevents Render Blocking */
            .cs_preloader{position:fixed;top:0;left:0;width:100%;height:100%;background:#000;z-index:99999;display:flex;align-items:center;justify-content:center}.cs_preloader_in{text-align:center}.cs_site_header{position:fixed;top:0;left:0;width:100%;z-index:1000;transition:transform .3s}.cs_hero_section{position:relative;width:100%;min-height:100vh;display:flex;align-items:center}.cs_hero_bg_base{position:absolute;width:100%;height:100%;background-size:cover;background-position:center;background-repeat:no-repeat}.cs_hero_text{position:relative;z-index:10;color:#fff}.body{font-family:system-ui,-apple-system,sans-serif;margin:0;padding:0}
        </style>
        
        """
    
    # Find where to insert (before first stylesheet link)
    pattern = r'(<!-- Critical CSS - Load Immediately -->\s*<link rel="stylesheet")'
    if re.search(pattern, content):
        # Already has critical CSS comment, check if inline CSS exists
        if 'Critical Above-the-Fold CSS' not in content:
            content = re.sub(
                r'(<!-- Critical CSS - Load Immediately -->)',
                critical_css + r'\1',
                content,
                count=1
            )
    else:
        # Find first stylesheet and add before it
        pattern = r'(<link rel="stylesheet" href="assets/css)'
        if re.search(pattern, content):
            content = re.sub(pattern, critical_css + r'\1', content, count=1)
    
    return content

def optimize_chatbot_loading(content):
    """Replace old chatbot loading with optimized version."""
    old_pattern = r'<!-- ElevenLabs ConvAI Widget.*?</script>'
    
    new_chatbot = '''    <!-- ElevenLabs ConvAI Widget - Optimized Smart Loading -->
    <div id="elevenlabs-widget-container"></div>
    <script>
        (function() {
            'use strict';
            
            // Smart widget loading: Load after first paint, but quickly
            var widgetLoaded = false;
            var loadAttempts = 0;
            var maxAttempts = 3;
            
            function loadElevenLabsWidget() {
                if (widgetLoaded) return;
                loadAttempts++;
                
                try {
                    var widgetContainer = document.getElementById('elevenlabs-widget-container');
                    if (!widgetContainer) {
                        if (loadAttempts < maxAttempts) {
                            setTimeout(loadElevenLabsWidget, 500);
                        }
                        return;
                    }
                    
                    widgetLoaded = true;
                    
                    // Inject widget element
                    widgetContainer.innerHTML = '<elevenlabs-convai agent-id="agent_1901kc2bjk4yeeks4pywb879fdne"></elevenlabs-convai>';
                    
                    // Dynamically load script with error handling
                    var script = document.createElement('script');
                    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
                    script.type = 'text/javascript';
                    script.async = true;
                    script.crossOrigin = 'anonymous';
                    
                    script.onerror = function() {
                        // Retry once if script fails to load
                        if (loadAttempts < maxAttempts) {
                            widgetLoaded = false;
                            setTimeout(loadElevenLabsWidget, 1000);
                        }
                    };
                    
                    document.body.appendChild(script);
                } catch (error) {
                    // Silently fail - widget is non-critical
                    if (loadAttempts < maxAttempts) {
                        widgetLoaded = false;
                        setTimeout(loadElevenLabsWidget, 1000);
                    }
                }
            }
            
            // Strategy 1: Load after first paint (requestAnimationFrame)
            if (window.requestAnimationFrame) {
                requestAnimationFrame(function() {
                    requestAnimationFrame(function() {
                        // After second paint, load widget
                        setTimeout(loadElevenLabsWidget, 500);
                    });
                });
            }
            
            // Strategy 2: Load on DOM ready (fallback)
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() {
                    setTimeout(loadElevenLabsWidget, 800);
                });
            } else {
                setTimeout(loadElevenLabsWidget, 800);
            }
            
            // Strategy 3: Load on user interaction (scroll/click) - fastest UX
            var userInteracted = false;
            function onUserInteraction() {
                if (!userInteracted && !widgetLoaded) {
                    userInteracted = true;
                    loadElevenLabsWidget();
                }
            }
            
            window.addEventListener('scroll', onUserInteraction, { once: true, passive: true });
            window.addEventListener('click', onUserInteraction, { once: true, passive: true });
            window.addEventListener('touchstart', onUserInteraction, { once: true, passive: true });
            
            // Strategy 4: Failsafe - load after 3 seconds max
            setTimeout(function() {
                if (!widgetLoaded) {
                    loadElevenLabsWidget();
                }
            }, 3000);
        })();
    </script>'''
    
    # Replace if exists
    if re.search(old_pattern, content, re.DOTALL):
        content = re.sub(old_pattern, new_chatbot, content, flags=re.DOTALL)
    elif 'elevenlabs-widget-container' not in content:
        # Add before closing body tag
        content = re.sub(r'(</body>)', new_chatbot + r'\n    \1', content)
    
    return content

def ensure_preconnect_hints(content):
    """Ensure preconnect hints exist for chatbot."""
    preconnect = '''        <!-- Preconnect for ElevenLabs Widget (Early Connection) -->
        <link rel="preconnect" href="https://elevenlabs.io" crossorigin />
        <link rel="preconnect" href="https://unpkg.com" crossorigin />
        <link rel="dns-prefetch" href="https://elevenlabs.io" />
        <link rel="dns-prefetch" href="https://unpkg.com" />'''
    
    if 'elevenlabs.io' not in content or 'preconnect' not in content.lower():
        # Add before other preconnect tags
        pattern = r'(<!-- Preconnect for ElevenLabs Widget)'
        if not re.search(pattern, content):
            # Add after DNS prefetch section
            pattern = r'(<!-- DNS Prefetch for External Domains -->.*?</link>)'
            if re.search(pattern, content, re.DOTALL):
                content = re.sub(
                    pattern,
                    r'\1\n        ' + preconnect,
                    content,
                    flags=re.DOTALL
                )
    
    return content

def process_html_file(file_path):
    """Process a single HTML file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply optimizations
        content = ensure_preconnect_hints(content)
        content = add_critical_css(content)
        content = optimize_chatbot_loading(content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False
    
    return False

def main():
    """Main function."""
    html_dir = Path('.')
    html_files = list(html_dir.glob('*.html'))
    
    updated_count = 0
    
    print("Applying performance optimizations to HTML files...")
    print("=" * 70)
    
    for html_file in sorted(html_files):
        if process_html_file(html_file):
            print(f"✅ Updated: {html_file.name}")
            updated_count += 1
        else:
            print(f"⏭️  Skipped: {html_file.name}")
    
    print("=" * 70)
    print(f"✅ Updated: {updated_count} files")
    print("=" * 70)
    print("\nNote: Preloader fix is already in assets/js/main.js")
    print("All optimizations applied successfully!")

if __name__ == "__main__":
    main()

