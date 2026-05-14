# HarnessAudit Project Page

Source code for the [HarnessAudit project page](https://harnessaudit.github.io/).

**Paper:** *Auditing Agent Harness Safety*

HarnessAudit is a trajectory-level framework that audits LLM agent harnesses along
**boundary compliance**, **execution fidelity**, and **system stability**, paired with
**HarnessAudit-Bench**: 210 tasks across 8 real-world domains, instantiated in both
single- and multi-agent configurations.

## Local preview

The site is fully static. Just open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Layout

```
website/
├── index.html                       # Main page
├── assets/icons/                    # arXiv, GitHub icons
└── static/
    ├── css/                         # Bulma + index.css (legacy assets, kept for reference)
    └── images/
        ├── figures/                 # PNGs converted from paper PDFs (title, intro, pipline, bar, fig5/6/7/8)
        └── logos/                   # Affiliation logos
```

## Citation

```bibtex
@article{liu2026harnessaudit,
  title   = {Auditing Agent Harness Safety},
  author  = {Liu, Chengzhi and Guo, Yichen and Liu, Yepeng and Yang, Yuzhe
             and Yan, Qianqi and Zhao, Xuandong and Hua, Wenyue and Liu, Sheng
             and Li, Sharon and Bu, Yuheng and Wang, Xin Eric},
  journal = {arXiv preprint},
  year    = {2026}
}
```

## License

This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).
