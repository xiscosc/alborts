#!/bin/bash
# Resizes all images in src/original to 50% or max 1024px (whichever is smaller)
# Output goes to src/lib/assets, preserving folder structure

MAX=1024
SRC="src/original"
DEST="src/lib/assets"

rm -rf "$DEST"
mkdir -p "$DEST"

resize() {
  local file="$1" outfile="$2" rel="$3"

  w=$(sips -g pixelWidth "$file" | tail -1 | awk '{print $2}')
  h=$(sips -g pixelHeight "$file" | tail -1 | awk '{print $2}')

  # 50% dimensions
  half_w=$((w / 2))
  half_h=$((h / 2))

  # Scale to fit within MAX on the longest side
  if [ "$w" -ge "$h" ]; then
    max_w=$MAX
    max_h=$((h * MAX / w))
  else
    max_h=$MAX
    max_w=$((w * MAX / h))
  fi

  # Pick the smaller result
  if [ "$half_w" -le "$max_w" ]; then
    new_w=$half_w
    new_h=$half_h
  else
    new_w=$max_w
    new_h=$max_h
  fi

  sips --resampleHeightWidth "$new_h" "$new_w" "$outfile" >/dev/null 2>&1
  echo "✓ $rel  ${w}x${h} → ${new_w}x${new_h}"
}

find "$SRC" -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.webp' \) | while read -r file; do
  rel="${file#$SRC/}"
  outdir="$DEST/$(dirname "$rel")"
  mkdir -p "$outdir"
  cp "$file" "$DEST/$rel"
  resize "$file" "$DEST/$rel" "$rel"
done

echo ""
echo "Done! Optimized images are in $DEST/"
