# Download Icons Action

This action script fetches icons from Figma and produces two icon output folders:

- `auto-generated-icons/`: raw SVGs exported from Figma.
- `auto-generated-optimized-icons/`: optimized SVGs after SVGO processing.

When the script finishes, it also writes:

- `icon-output.md`: a generated report containing source/optimized counts and the list of optimized icon filenames.

## Notes

- The script verifies optimized SVGs against source SVG rendering to catch unexpected visual differences.
