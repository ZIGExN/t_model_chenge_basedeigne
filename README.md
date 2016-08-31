# ディレクトリ構造

.
├── Gemfile
├── README.md
├── code_example_templates
│   ├── js_example_template.html.erb
│   ├── jsx_example_template.html.erb
│   ├── markup_example_template.html.erb
│   └── markup_table_template.html.erb
├── doc_assets
│   ├── _footer.html
│   ├── _header.html
│   └── stylesheets
│       └── style.css
├── docs
│   ├── basics.html
│   ├── index.html
│   ├── stylesheets
│   │   └── style.css
│   └── z_layout.html
├── gulpfile.js
├── hologram_config.yml
├── images
│   ├── privacy.png
│   └── zigexnLogo.png
├── index.html
├── index_pc.html
├── package.json
└── stylesheets
    ├── global                          //z_template
    │   ├── _normalize.scss
    │   ├── _z_breadcrumb.scss
    │   ├── _z_button.scss
    │   ├── _z_color.scss
    │   ├── _z_common.scss
    │   ├── _z_forms.scss
    │   ├── _z_helper.scss
    │   ├── _z_layout.scss
    │   ├── _z_list.scss
    │   ├── _z_skin.scss
    │   ├── _z_table.scss
    │   └── _z_typography.scss
    └── theme
        ├── common                     //PC and SP common style
        │   ├── _button.scss
        │   ├── _color.scss
        │   ├── _helper.scss
        │   ├── _table.scss
        │   ├── _typography.scss
        │   └── valiable.scss
        ├── pc
        │   ├── _main.scss
        │   ├── _valiable.scss
        │   └── master.scss
        └── sp
            ├── _main.scss
            ├── _valiable.scss
            └── master.scss                     //PC and SP common style

## CSSの設計

### common

commonディレクトリに入っているSCSSはPCとSP、共通で使うモジュールスタイルを定義するSCSSのファイル群。  
themeの中に履いているので、転職EX（サイト名変更の可能性あるけど）固有のCSSです。なのでz_templateとは違う設定内容になる。
