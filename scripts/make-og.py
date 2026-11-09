# Builds public/og.jpg (1200x630, under 200 KB) from a real VYRA photo, the VYRA mark and the site headline.
# Usage: python3 scripts/make-og.py   (needs Pillow; fonts are Anton and Instrument Serif, both OFL)
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
W, H = 1200, 630
VOID, BONE, RED, GOLD = (10, 10, 11), (244, 241, 234), (200, 16, 46), (198, 161, 91)

img = Image.new("RGB", (W, H), VOID)
photo = Image.open(ROOT / "public/images/red-room-recap.jpg").convert("RGB")
pw = 470
ph = int(photo.height * pw / photo.width)
photo = photo.resize((pw, ph), Image.LANCZOS).crop((0, int(ph * 0.12), pw, int(ph * 0.12) + H))
img.paste(photo, (W - pw, 0))
# Fade the photo into the black on its left edge.
fade = Image.new("L", (pw, H))
fd = ImageDraw.Draw(fade)
for x in range(200):
    fd.line([(x, 0), (x, H)], fill=int(255 * (1 - x / 200)))
img.paste(Image.new("RGB", (pw, H), VOID), (W - pw, 0), fade)

d = ImageDraw.Draw(img)
anton = lambda s: ImageFont.truetype(str(ROOT / "scripts/og/Anton.ttf"), s)
serif = ImageFont.truetype(str(ROOT / "scripts/og/InstrumentSerif-Italic.ttf"), 120)

mark = Image.open(ROOT / "public/vyra-mark.png").convert("RGBA")
mark.thumbnail((190, 100))
img.paste(mark, (64, 56), mark)

d.ellipse((66, 214, 80, 228), fill=(227, 23, 58))
d.text((94, 210), "TORONTO EXPERIENCES", font=anton(26), fill=(163, 159, 151))
d.text((60, 250), "ENTER THE NEXT", font=anton(118), fill=BONE)
d.text((62, 385), "frame.", font=serif, fill=GOLD)
d.rectangle((0, H - 58, W, H), fill=RED)
x = 64
for i, word in enumerate(["THE RED ROOM", "NAZAR", "COFFEE YACHT PARTY", "ÁUREA"]):
    if i:
        d.ellipse((x + 14, H - 33, x + 22, H - 25), fill=VOID)
        x += 36
    d.text((x, H - 47), word, font=anton(30), fill=BONE)
    x += int(d.textlength(word, font=anton(30)))

out = ROOT / "public/og.jpg"
q = 84
while True:
    img.save(out, "JPEG", quality=q, optimize=True, progressive=True)
    if out.stat().st_size < 195_000 or q <= 50:
        break
    q -= 6
print(f"og.jpg {out.stat().st_size // 1024} KB")
