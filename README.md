# WorldMemArena Project Page

Static project website for **WorldMemArena: Evaluating Multimodal Agent Memory Through Action-World Interaction**.

## Local Preview

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Structure

```text
website/
├── index.html                 # Paper project page
├── data.html                  # Interactive data explorer
├── static/js/data.js          # Domain visualizations and interactions
└── static/images/paper/       # Images copied from the arXiv manuscript assets
```

## Pages

- `index.html`: concise paper landing page with benchmark summary, figures, findings, and links.
- `data.html`: interactive domain page with filters, metric toggles, charts, capability matrix, and representative visualizations.
