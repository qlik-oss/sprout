# Changelog

## 6.45.2

### Patch Changes

- 409b9ef: fix(DLS-73/List): update to use selected tokens and classNames
- Updated dependencies [f2ab6ff]
- Updated dependencies [7bf7d34]
  - @qlik/sprout-css-modules@6.43.6
  - @qlik/design-tokens@1.1.2
  - @qlik/sprout-react-hooks@1.2.8

## 6.45.1

### Patch Changes

- Updated dependencies [a7b35cc]
  - @qlik/sprout-css-modules@6.43.5
  - @qlik/sprout-react-hooks@1.2.7

## 6.45.0

### Minor Changes

- 85b0373: feat(DLS-663/Message): allow larger illustration
- 5fa5d02: feat(DLS-36/Message): add layout prop
- de5663b: feat(DLS-677/Message): add details

### Patch Changes

- fa3b311: fix: upgrade dependencies
- 78763cf: fix(listitem): do not add tabindex 0 to disabled buttons
- Updated dependencies [fa3b311]
- Updated dependencies [8167c00]
  - @qlik/sprout-css-modules@6.43.4
  - @qlik/sprout-react-hooks@1.2.6
  - @qlik/design-tokens@1.1.1
  - @qlik/sprout-icons@0.2.2

## 6.44.0

### Minor Changes

- 1824fb7: feat(DLS-797/Button): add leading icon

### Patch Changes

- d015ed2: fix(DLS-786/useI18n): add fallback for non supported lang
- c038242: chore: use oxfmt and format all the files
- 91a07fe: chore: update dependencies
- a681d8b: fix(Tag/DLS-792): enforce icon size
- 9b59efb: Updated font size of table header
- Updated dependencies [1f1bed6]
- Updated dependencies [c038242]
- Updated dependencies [a58aa4e]
- Updated dependencies [91a07fe]
- Updated dependencies [230d83c]
- Updated dependencies [190407f]
  - @qlik/sprout-icons@0.2.1
  - @qlik/sprout-css-modules@6.43.3
  - @qlik/sprout-react-hooks@1.2.5
  - @qlik/design-tokens@1.1.0

## [6.43.2](https://github.com/qlik-trial/sprout-css/compare/v6.43.1...v6.43.2) (2026-03-18)

### Bug Fixes

- **Floating/DLS-817:** invert order but not ref ([#1024](https://github.com/qlik-trial/sprout-css/issues/1024)) ([bb39ff3](https://github.com/qlik-trial/sprout-css/commit/bb39ff3e7556e5dcb27e932a95238f31fb4ba08f))

## [6.43.1](https://github.com/qlik-trial/sprout-css/compare/v6.43.0...v6.43.1) (2026-03-17)

### Bug Fixes

- **ContextualMenu/DLS-817:** call onOpenChange once ([#1021](https://github.com/qlik-trial/sprout-css/issues/1021)) ([919ed52](https://github.com/qlik-trial/sprout-css/commit/919ed522daf0c444b1638f932ab5ede9edbf782b))
- **DLS-788/InlineEdit:** focus management on Tab ([#1023](https://github.com/qlik-trial/sprout-css/issues/1023)) ([20b9137](https://github.com/qlik-trial/sprout-css/commit/20b9137023ca6a85e818c3a7d08deef9651ff79b))
- **JSDoc:** manage deprecated ([#1017](https://github.com/qlik-trial/sprout-css/issues/1017)) ([7f3726d](https://github.com/qlik-trial/sprout-css/commit/7f3726dadfc6188eb50ce66d3040dbcf965c2db7))
- **ThemeProvider/DLS-817:** move asDiv up in useEffect ([#1020](https://github.com/qlik-trial/sprout-css/issues/1020)) ([3751eb4](https://github.com/qlik-trial/sprout-css/commit/3751eb4832286ff20793ce8e5decf57397c18896))

### Chore Work

- **script:** update sync ([ee9d12b](https://github.com/qlik-trial/sprout-css/commit/ee9d12b7d74088dd6004c5a115ffe6bf11457e63))

## [6.43.0](https://github.com/qlik-trial/sprout-css/compare/v6.42.4...v6.43.0) (2026-03-16)

### Features

- **CSS:** add selected colors classNames + bg-floating ([#1015](https://github.com/qlik-trial/sprout-css/issues/1015)) ([3eaa0c1](https://github.com/qlik-trial/sprout-css/commit/3eaa0c170717ee598b593315a0504b66af8e8bab))

### Bug Fixes

- **CI:** update script path ([532fa87](https://github.com/qlik-trial/sprout-css/commit/532fa87463b7d6865ce4225929bbb165b3216b2d))
- **Grid:** import of classnames ([#1001](https://github.com/qlik-trial/sprout-css/issues/1001)) ([435a746](https://github.com/qlik-trial/sprout-css/commit/435a7464c0b8527bb1a9c59931298cd112284c72))
- **Link:** update icon used ([#1005](https://github.com/qlik-trial/sprout-css/issues/1005)) ([d56c8b3](https://github.com/qlik-trial/sprout-css/commit/d56c8b3959221b49b30b9bf6961f5ade58bec322))
- **react:** use sprout-icons ([#975](https://github.com/qlik-trial/sprout-css/issues/975)) ([4fb07a5](https://github.com/qlik-trial/sprout-css/commit/4fb07a5a5968650f5fff505dbb77ca96db2fbc57))
- **safari:** remove all overflow-block from css ([#1011](https://github.com/qlik-trial/sprout-css/issues/1011)) ([1459ff5](https://github.com/qlik-trial/sprout-css/commit/1459ff5eb1b5536234f7e0fa47eb991b1b894a2d))
- update prettier, stylelint config and icons ([#1002](https://github.com/qlik-trial/sprout-css/issues/1002)) ([07cff01](https://github.com/qlik-trial/sprout-css/commit/07cff01679f72e5e43922040fd1f40d057495a15))

### Chore Work

- **CI:** fix typo ([f14aaef](https://github.com/qlik-trial/sprout-css/commit/f14aaef559b535d307304c6657dc30c482e6a0be))
- **CI:** remove duplicated publish ([57c9122](https://github.com/qlik-trial/sprout-css/commit/57c9122a738c75c9b6c88bcf18d6922a4412a659))
- **CI:** update deploy ([4588b69](https://github.com/qlik-trial/sprout-css/commit/4588b695749acec0f2076adfad0e3e99b717b2a8))
- **CI:** update deploy-npm ([21c4273](https://github.com/qlik-trial/sprout-css/commit/21c4273217d39f928572729e19056dd054461e5b))
- update dependencies ([#1006](https://github.com/qlik-trial/sprout-css/issues/1006)) ([a52ce0a](https://github.com/qlik-trial/sprout-css/commit/a52ce0a8dfb8fad22972c100b919f4af4fc61fc4))
- update dependencies ([#1014](https://github.com/qlik-trial/sprout-css/issues/1014)) ([2dd3b6d](https://github.com/qlik-trial/sprout-css/commit/2dd3b6d04a611af703585511287e2fe7ca2623be))
- update icons ([#1010](https://github.com/qlik-trial/sprout-css/issues/1010)) ([bb0aacf](https://github.com/qlik-trial/sprout-css/commit/bb0aacf6829b17255c8cb212f7659c4aa6b406cb))

## [6.42.4](https://github.com/qlik-trial/sprout-css/compare/v6.42.3...v6.42.4) (2026-03-03)

### Bug Fixes

- **Button:** icons size enforcement ([#999](https://github.com/qlik-trial/sprout-css/issues/999)) ([7324bef](https://github.com/qlik-trial/sprout-css/commit/7324bef6230be6dd21b6bf44d1d05b9d3ec47e36))
- **css/HUB-1791:** read breakpoint tokens using setInterval ([#990](https://github.com/qlik-trial/sprout-css/issues/990)) ([c8ee881](https://github.com/qlik-trial/sprout-css/commit/c8ee88185b786f2eccfd7b7c606dda9babbb91d7))
- **DLS-206:** drop native theme-provider deps ([#995](https://github.com/qlik-trial/sprout-css/issues/995)) ([33c3043](https://github.com/qlik-trial/sprout-css/commit/33c3043ab79368f78a6723ccc64ba662650f8d32))
- **DLS-766/InlineEdit:** scroll into view when editing ([#982](https://github.com/qlik-trial/sprout-css/issues/982)) ([62dee2f](https://github.com/qlik-trial/sprout-css/commit/62dee2f24ade160a7b5de9e74024d4bbed93b02e))
- **Stepper/DLS-644:** update token used on the Line ([#997](https://github.com/qlik-trial/sprout-css/issues/997)) ([94aa3d8](https://github.com/qlik-trial/sprout-css/commit/94aa3d844287969047bf110239ca11aaa27f785b))

### Chore Work

- update dependencies ([#996](https://github.com/qlik-trial/sprout-css/issues/996)) ([01d22e7](https://github.com/qlik-trial/sprout-css/commit/01d22e702e09c3dd4a99ff2ba65bacafd0d4e269))

## [6.42.3](https://github.com/qlik-trial/sprout-css/compare/v6.42.2...v6.42.3) (2026-02-26)

### Bug Fixes

- **DLS-777/InlineEdit:** prevent focus loss when editing ([#983](https://github.com/qlik-trial/sprout-css/issues/983)) ([0da7104](https://github.com/qlik-trial/sprout-css/commit/0da7104d9960a1f0e3711e1ac5e21d634a25138d))
- **DLS-787/classNames:** add types for whitespace ([#993](https://github.com/qlik-trial/sprout-css/issues/993)) ([e45d4f1](https://github.com/qlik-trial/sprout-css/commit/e45d4f19b9fe2a07bb6aa0219a8de6643d51ad73))
- **MultiSelect:** Infinite render when using onFilterChange ([#948](https://github.com/qlik-trial/sprout-css/issues/948)) ([f70884b](https://github.com/qlik-trial/sprout-css/commit/f70884b991b7f3b765887d942cf6b8b26dda3111))

### Chore Work

- **CI:** add devbuild command ([#992](https://github.com/qlik-trial/sprout-css/issues/992)) ([821854c](https://github.com/qlik-trial/sprout-css/commit/821854cb9ecd10e692fb6e0f4a247069f96ce6fa))
- **CI:** switch back to [#deploy](https://github.com/qlik-trial/sprout-css/issues/deploy)-npm comment ([#994](https://github.com/qlik-trial/sprout-css/issues/994)) ([fb509c4](https://github.com/qlik-trial/sprout-css/commit/fb509c4c43f10b4f29aa406af1609281578fe100)), closes [#deploy-npm](https://github.com/qlik-trial/sprout-css/issues/deploy-npm)

## [6.42.2](https://github.com/qlik-trial/sprout-css/compare/v6.42.1...v6.42.2) (2026-02-25)

### Bug Fixes

- **CSS:** overflow on safari last three major ([#988](https://github.com/qlik-trial/sprout-css/issues/988)) ([1e94b9e](https://github.com/qlik-trial/sprout-css/commit/1e94b9e87cdceb362bc22c665e1ce893cb579b77))

## [6.42.1](https://github.com/qlik-trial/sprout-css/compare/v6.42.0...v6.42.1) (2026-02-23)

### Chore Work

- realign deps, remove overrides ([#973](https://github.com/qlik-trial/sprout-css/issues/973)) ([4775a97](https://github.com/qlik-trial/sprout-css/commit/4775a977c40eae303086f9c388df1c039077c094))
- sync script ([#974](https://github.com/qlik-trial/sprout-css/issues/974)) ([af00f6b](https://github.com/qlik-trial/sprout-css/commit/af00f6b48c5b7efbf65360aab3d60c0a6c5cc399))
- **translations:** UI bus - 2026-02-13 - plural ([#978](https://github.com/qlik-trial/sprout-css/issues/978)) ([7e6bc16](https://github.com/qlik-trial/sprout-css/commit/7e6bc162652690cfdc08513c0775f4c1449ccd8c))
- update dependencies ([#976](https://github.com/qlik-trial/sprout-css/issues/976)) ([9e64995](https://github.com/qlik-trial/sprout-css/commit/9e649956eea761889d1efe28db7ab2e192afc363))
- update dependencies ([#984](https://github.com/qlik-trial/sprout-css/issues/984)) ([ca323f8](https://github.com/qlik-trial/sprout-css/commit/ca323f8431d5333cb2b4fb1e15cd13a96768f26c))

## [6.42.0](https://github.com/qlik-trial/sprout-css/compare/v6.41.0...v6.42.0) (2026-02-12)

### Features

- **DLS-738:** update design-tokens adapt ThemeProvider ([#970](https://github.com/qlik-trial/sprout-css/issues/970)) ([3da11a4](https://github.com/qlik-trial/sprout-css/commit/3da11a491a870115d3810ae6ec0fd2904523b5f4))

### Bug Fixes

- **CSS:** move deprecated code in a folder ([#963](https://github.com/qlik-trial/sprout-css/issues/963)) ([4d4145d](https://github.com/qlik-trial/sprout-css/commit/4d4145d91e9c28469753a0ab45db7b70e58fd33a))
- **DLS-721/InlineEdit:** close on scroll ([#950](https://github.com/qlik-trial/sprout-css/issues/950)) ([03835d3](https://github.com/qlik-trial/sprout-css/commit/03835d33b2558645ef708f3fec140db50a36b0f2))
- **DLS-733/Menu:** update background token ([#965](https://github.com/qlik-trial/sprout-css/issues/965)) ([4861967](https://github.com/qlik-trial/sprout-css/commit/4861967a46e45549bebac539c1563f766191e686))
- **DLS-733/Popover:** update background color and remove border ([#964](https://github.com/qlik-trial/sprout-css/issues/964)) ([7daefcc](https://github.com/qlik-trial/sprout-css/commit/7daefcc49a6d8477b67b21ba40aa6953c988eb73))
- **Menu:** option to override max-width ([#959](https://github.com/qlik-trial/sprout-css/issues/959)) ([9457d0c](https://github.com/qlik-trial/sprout-css/commit/9457d0ceffe2b95e56d1498ed430dd2c9dda95a5))
- **Select/DLS-735:** increase minimal dropdown list height ([#971](https://github.com/qlik-trial/sprout-css/issues/971)) ([8d13c8e](https://github.com/qlik-trial/sprout-css/commit/8d13c8e365198f0b6003e142584ae11629cde1b4))

### Chore Work

- cleanup ([#960](https://github.com/qlik-trial/sprout-css/issues/960)) ([db1689c](https://github.com/qlik-trial/sprout-css/commit/db1689c34abf4cfa5f1d8669f4c7af4f0cb1ced3))
- update dependencies ([#962](https://github.com/qlik-trial/sprout-css/issues/962)) ([0d987ac](https://github.com/qlik-trial/sprout-css/commit/0d987ac4b4c4b15151ef12f9db0ca9181c2720e0))
- update dependencies ([#967](https://github.com/qlik-trial/sprout-css/issues/967)) ([f34782c](https://github.com/qlik-trial/sprout-css/commit/f34782c53c2499fa3cab11164adfccf3abd6af24))

## [6.41.0](https://github.com/qlik-trial/sprout-css/compare/v6.40.0...v6.41.0) (2026-02-05)

### Features

- **DLS-730/classNames:** add white-space ([#961](https://github.com/qlik-trial/sprout-css/issues/961)) ([2da3aa4](https://github.com/qlik-trial/sprout-css/commit/2da3aa410463a43536ebbe25e56056dbb737ab58))
- **IconButton:** add tooltipPlacement prop ([#954](https://github.com/qlik-trial/sprout-css/issues/954)) ([dd1423c](https://github.com/qlik-trial/sprout-css/commit/dd1423c016289607f720396d16f1db34da9ac171))

### Bug Fixes

- **DLS-728/Modal:** height responsiveness ([#958](https://github.com/qlik-trial/sprout-css/issues/958)) ([e11636a](https://github.com/qlik-trial/sprout-css/commit/e11636a7624e7596610e0f1e05acc9a4175db789))

## [6.40.0](https://github.com/qlik-trial/sprout-css/compare/v6.39.3...v6.40.0) (2026-02-03)

### Features

- **DLS-699/Select:** option to hide selected description ([#944](https://github.com/qlik-trial/sprout-css/issues/944)) ([a4a2b63](https://github.com/qlik-trial/sprout-css/commit/a4a2b63f3e113a4f911d37285e7c12af5f4d5abe))
- **DLS-718/Slider.Range:** Combined label for overlapping values ([#953](https://github.com/qlik-trial/sprout-css/issues/953)) ([7c1671a](https://github.com/qlik-trial/sprout-css/commit/7c1671a58debf0a828a10b7a4a9e6b19f4a3e552))

### Bug Fixes

- **DLS-716/Select:** escape key propagation ([#951](https://github.com/qlik-trial/sprout-css/issues/951)) ([bcd9773](https://github.com/qlik-trial/sprout-css/commit/bcd9773c69da940178dea84ad882fadaf960f65c))

## [6.39.3](https://github.com/qlik-trial/sprout-css/compare/v6.39.2...v6.39.3) (2026-02-02)

### Bug Fixes

- **DLS-723/MultiSelect:** Handle RHF default values for MultiSelect ([#949](https://github.com/qlik-trial/sprout-css/issues/949)) ([e115360](https://github.com/qlik-trial/sprout-css/commit/e1153605ab9253e7b3c0bea658b0d2f593c29a19))

### Chore Work

- **translations:** UI bus - 2026-01-27 ([#947](https://github.com/qlik-trial/sprout-css/issues/947)) ([3a4fa16](https://github.com/qlik-trial/sprout-css/commit/3a4fa16c5ab0695002c1c9bfdaa0345d90e29fc1))
- update dependencies ([#952](https://github.com/qlik-trial/sprout-css/issues/952)) ([3f046fd](https://github.com/qlik-trial/sprout-css/commit/3f046fd85ea8433370d870093be2ee9f1615bb88))

## [6.39.2](https://github.com/qlik-trial/sprout-css/compare/v6.39.1...v6.39.2) (2026-01-28)

### Bug Fixes

- **Badge/DLS-713:** remove border and use outline instead ([#943](https://github.com/qlik-trial/sprout-css/issues/943)) ([45159e4](https://github.com/qlik-trial/sprout-css/commit/45159e45c4e915addfaf3e2977c2baf3c41cb591))
- **Select:** Fix infinite rendering when using watch and default value from RHF ([#945](https://github.com/qlik-trial/sprout-css/issues/945)) ([3ea7be1](https://github.com/qlik-trial/sprout-css/commit/3ea7be1b91a701ae5a16cc22ab78c9384542ce2b))

### Chore Work

- **CI:** run chromatic only on draft false ([#940](https://github.com/qlik-trial/sprout-css/issues/940)) ([818df14](https://github.com/qlik-trial/sprout-css/commit/818df145b109044eb038ea40d782c933b21113ab))

## [6.39.1](https://github.com/qlik-trial/sprout-css/compare/v6.39.0...v6.39.1) (2026-01-27)

### Bug Fixes

- **Badge/DLS-713:** text alignement again ([#938](https://github.com/qlik-trial/sprout-css/issues/938)) ([e5be934](https://github.com/qlik-trial/sprout-css/commit/e5be934d42008687ed7dc8d2c309f6dcaa020eca))

### Chore Work

- update dependencies ([#939](https://github.com/qlik-trial/sprout-css/issues/939)) ([0472ebe](https://github.com/qlik-trial/sprout-css/commit/0472ebed013267294ec9a997274fca950b844f40))

## [6.39.0](https://github.com/qlik-trial/sprout-css/compare/v6.38.1...v6.39.0) (2026-01-23)

### Features

- **DLS-390/Select:** searching functionality in select ([#873](https://github.com/qlik-trial/sprout-css/issues/873)) ([723efa8](https://github.com/qlik-trial/sprout-css/commit/723efa8888ee7fb7e4472c984ec1018f4dcf14e0))

### Bug Fixes

- **DLS-713:** badge overflow ([#937](https://github.com/qlik-trial/sprout-css/issues/937)) ([655f579](https://github.com/qlik-trial/sprout-css/commit/655f579c438c302a7c2dab8f4617c4982eafa472))
- **react:** update and apply new eslint sprout rules ([#936](https://github.com/qlik-trial/sprout-css/issues/936)) ([157350c](https://github.com/qlik-trial/sprout-css/commit/157350cb7ee484423ae17081b4183531f11aefad))

## [6.38.1](https://github.com/qlik-trial/sprout-css/compare/v6.38.0...v6.38.1) (2026-01-19)

### Bug Fixes

- **DLS-199/AlertModal:** update to new design [Don't merge yet!] ([#839](https://github.com/qlik-trial/sprout-css/issues/839)) ([e6e6f8e](https://github.com/qlik-trial/sprout-css/commit/e6e6f8edae55bab707fbb3a1f422779ad144cb28))

## [6.38.0](https://github.com/qlik-trial/sprout-css/compare/v6.37.1...v6.38.0) (2026-01-19)

### Features

- **DLS-693/Slider:** Add buttons for marks and new styling ([#928](https://github.com/qlik-trial/sprout-css/issues/928)) ([b92870f](https://github.com/qlik-trial/sprout-css/commit/b92870f98b0263eb7f8f37f1db66bfd254aed63b))

### Bug Fixes

- **ThemeProvider:** observe body attribute ([#925](https://github.com/qlik-trial/sprout-css/issues/925)) ([b92abf8](https://github.com/qlik-trial/sprout-css/commit/b92abf88ca1c0a92129f60999a61f75a12295a33))

## [6.37.1](https://github.com/qlik-trial/sprout-css/compare/v6.37.0...v6.37.1) (2026-01-14)

### Bug Fixes

- **css:** add missing classnames ([#927](https://github.com/qlik-trial/sprout-css/issues/927)) ([1544355](https://github.com/qlik-trial/sprout-css/commit/1544355c7b0d51542251eae9823124022a8a1dce))
- **DLS-701/Modal:** layout shift in footer ([#930](https://github.com/qlik-trial/sprout-css/issues/930)) ([6228b70](https://github.com/qlik-trial/sprout-css/commit/6228b701f43d8d140f7ac0aa0b3f9e8d007df26b))

### Chore Work

- update dependencies ([#926](https://github.com/qlik-trial/sprout-css/issues/926)) ([a41e34e](https://github.com/qlik-trial/sprout-css/commit/a41e34e75b3310c06b5de79c1a89a839cf33dc0a))
- update linter ([af54224](https://github.com/qlik-trial/sprout-css/commit/af5422408d1101bab052e92818d881cf2db47c16))

## [6.37.0](https://github.com/qlik-trial/sprout-css/compare/v6.36.0...v6.37.0) (2026-01-13)

### Features

- **CSS:** add kebab case API ([#917](https://github.com/qlik-trial/sprout-css/issues/917)) ([d56fca6](https://github.com/qlik-trial/sprout-css/commit/d56fca67374374ebe9a54a70b0d6b4688053f051))
- **CSS:** add progressive-_ and focusable-_ patterns ([#845](https://github.com/qlik-trial/sprout-css/issues/845)) ([4ab3265](https://github.com/qlik-trial/sprout-css/commit/4ab3265b464d9c5a9b0f17d14b18aba4a9a942f8))

### Bug Fixes

- **Accordion:** remove key index already managed by Children.map ([#921](https://github.com/qlik-trial/sprout-css/issues/921)) ([e2c34b1](https://github.com/qlik-trial/sprout-css/commit/e2c34b1a26050204b80035b133b3c22a40cb253e))
- **Alert:** set Modal dialog ([#920](https://github.com/qlik-trial/sprout-css/issues/920)) ([e1d5fa3](https://github.com/qlik-trial/sprout-css/commit/e1d5fa3130e4c9a5e42216bb3e2d93225f18c34f))
- **Modal:** create a new element on each render ([#923](https://github.com/qlik-trial/sprout-css/issues/923)) ([a62fe1f](https://github.com/qlik-trial/sprout-css/commit/a62fe1f8638480190da962afc1cc25b6a259c6d3))
- **react:** all lint errors ([#919](https://github.com/qlik-trial/sprout-css/issues/919)) ([3e37bfe](https://github.com/qlik-trial/sprout-css/commit/3e37bfea4289f08405c39f82abcfe3586edcb9e8))

### Chore Work

- bump actions/setup-node from 4 to 6 ([#875](https://github.com/qlik-trial/sprout-css/issues/875)) ([7ec07ba](https://github.com/qlik-trial/sprout-css/commit/7ec07ba6dca8ab051ee60a5feb393cfbddb01fa0))
- **CI:** fix update-deps.yaml ([ca306d0](https://github.com/qlik-trial/sprout-css/commit/ca306d075e9da49827e9883d6d0b452a80be6c61))
- **CI:** lint storybook ([#924](https://github.com/qlik-trial/sprout-css/issues/924)) ([d0b7dd1](https://github.com/qlik-trial/sprout-css/commit/d0b7dd1241b51e75e9a9a2e4d80005263766c9fd))
- downgrade types/node ([2424343](https://github.com/qlik-trial/sprout-css/commit/2424343397a54546e13c2c870247f59cc3e9d5f7))
- **react:** use design-tokens js API ([#881](https://github.com/qlik-trial/sprout-css/issues/881)) ([3a80dc4](https://github.com/qlik-trial/sprout-css/commit/3a80dc47e6077d6c783014cc397a57be1b6812be))
- update dependencies ([#918](https://github.com/qlik-trial/sprout-css/issues/918)) ([51a3f1b](https://github.com/qlik-trial/sprout-css/commit/51a3f1b426457c5deef80c38d4bd456f93592f8e))
- update dependencies ([#922](https://github.com/qlik-trial/sprout-css/issues/922)) ([8279e63](https://github.com/qlik-trial/sprout-css/commit/8279e63bb8110b70a45f5ef8f12fd2d29d676baf))

## [6.36.0](///compare/v6.35.0...v6.36.0) (2026-01-05)

### Features

- **css:** add status colors on background / border / text ([#908](undefined/undefined/undefined/issues/908)) c9daa3b

### Bug Fixes

- **CSS:** remove cursor_hand as hand is not a valid css pointer ([#907](undefined/undefined/undefined/issues/907)) 77fe01d
- **Modal/DLS-199/DLS-661:** max-height of variant dialog ([#903](undefined/undefined/undefined/issues/903)) 264b39d
- **Modal:** support StrictMode ([#901](undefined/undefined/undefined/issues/901)) 854331a
- **Modal:** wrap with ThemeProvider ([#913](undefined/undefined/undefined/issues/913)) 6261635
- **React:** design-tokens pkg is a dependency ([#915](undefined/undefined/undefined/issues/915)) af7ade3
- **react:** refactor to move away from Box ([#905](undefined/undefined/undefined/issues/905)) 11915ab
- **Tabs/Tracker:** split in two ResizeObserver ([#912](undefined/undefined/undefined/issues/912)) b907903

## [6.35.0](///compare/v6.34.0...v6.35.0) (2025-12-19)

### Features

- **CSS:** add extension point to classNames ([#891](undefined/undefined/undefined/issues/891)) 2252aa1
- **DLS-199/Modal:** add variant and height. Deprecate width. ([#892](undefined/undefined/undefined/issues/892)) 34d6820
- **DLS-624/Slider:** Adding marks to slider ([#876](undefined/undefined/undefined/issues/876)) e5c9d5b
- **DLS-638/Checkbox:** add info icon tooltip ([#886](undefined/undefined/undefined/issues/886)) d0b7be4
- **DLS-638/Radio:** add info icon tooltip ([#885](undefined/undefined/undefined/issues/885)) 6ccf466
- **DLS-679/Radio:** clickable help text ([#895](undefined/undefined/undefined/issues/895)) 790a9b5

### Bug Fixes

- **checkbox/DLS-670:** remove display:block and update tokens ([#883](undefined/undefined/undefined/issues/883)) 8999d37
- **DLS-656/Menu:** close on tab key ([#872](undefined/undefined/undefined/issues/872)) 7251f81
- **DLS-674/Menu:** Menu.Item description disabled style ([#889](undefined/undefined/undefined/issues/889)) 956a714
- **Field/TextField:** background readonly ([#896](undefined/undefined/undefined/issues/896)) 1437986
- **Select/DLS-645:** use background-pressed token ([#894](undefined/undefined/undefined/issues/894)) dfdb171
- **Stepper/DLS-572:** increase the size of the circular progress ([#882](undefined/undefined/undefined/issues/882)) 80c7b51
- **TextField:** set background moderate for readonly in affixes ([#893](undefined/undefined/undefined/issues/893)) cf32fea
- update design-tokens ([#890](undefined/undefined/undefined/issues/890)) a3e663f

## [6.34.0](///compare/v6.33.0...v6.34.0) (2025-12-08)

### Features

- **CSS:** add margin auto ([#867](undefined/undefined/undefined/issues/867)) ccd6eb8

### Bug Fixes

- **DLS-654/Menu:** make sure right click outside works on windows ([#870](undefined/undefined/undefined/issues/870)) d171e2d

## [6.33.0](///compare/v6.32.2...v6.33.0) (2025-12-04)

### Features

- **CSS:** add min-height helper classes ([#861](undefined/undefined/undefined/issues/861)) 220e080

### Bug Fixes

- **Menu:** max-width=xs ([#862](undefined/undefined/undefined/issues/862)) 834a279
- **Select:** open only if mounted ([#865](undefined/undefined/undefined/issues/865)) 0fc2870

## [6.32.2](///compare/v6.32.1...v6.32.2) (2025-11-28)

### Bug Fixes

- **CSS:** add dist folder ([#860](undefined/undefined/undefined/issues/860)) cfa9066

## [6.32.1](///compare/v6.32.0...v6.32.1) (2025-11-28)

### Bug Fixes

- **DLS-643/Menu:** no stacked submenus on click ([#853](undefined/undefined/undefined/issues/853)) 70c8f8c
- **DLS-647/Tooltip:** closes when unhover ([#857](undefined/undefined/undefined/issues/857)) 917ab7c

## [6.32.0](///compare/v6.31.1...v6.32.0) (2025-11-27)

### Features

- **CSS:** add italic ([#855](undefined/undefined/undefined/issues/855)) 1eefb86
- **DLS-623/Slider:** add vertical variant ([#834](undefined/undefined/undefined/issues/834)) e508490

### Bug Fixes

- **CSS:** `with` -> `width` typo for border classes ([#836](undefined/undefined/undefined/issues/836)) 4abe5d5
- **CSS:** typo in deprecated message ([#840](undefined/undefined/undefined/issues/840)) b1744d0
- **DLS-646/InlineEdit:** support JSX.Element for edit and view ([#854](undefined/undefined/undefined/issues/854)) 0eb912f
- **ToggleIconButton:** add `id` to the button, fix ref ([#843](undefined/undefined/undefined/issues/843)) 7fe8783

## [6.31.1](https://github.com/qlik-trial/sprout-css/compare/v6.31.0...v6.31.1) (2025-11-19)

### Bug Fixes

- **react:** update sprout-react-hooks to support node 20 ([#835](https://github.com/qlik-trial/sprout-css/issues/835)) ([2c7fca7](https://github.com/qlik-trial/sprout-css/commit/2c7fca742edb6e92a8fd2d5c431b9c0753adaf74))

## [6.31.0](https://github.com/qlik-trial/sprout-css/compare/v6.30.0...v6.31.0) (2025-11-18)

### Features

- (DLS-326) Text highlight component ([#797](https://github.com/qlik-trial/sprout-css/issues/797)) ([7f8b479](https://github.com/qlik-trial/sprout-css/commit/7f8b4799cfdbbc2502a60f90eebf3fcc1c1bb721))
- **DLS-475:** add Grid component ([#826](https://github.com/qlik-trial/sprout-css/issues/826)) ([4902a9a](https://github.com/qlik-trial/sprout-css/commit/4902a9af7a1972f70d17d87241eb59403c54faa4))

### Bug Fixes

- **DLS-199/Modal:** deprecate padding ([#813](https://github.com/qlik-trial/sprout-css/issues/813)) ([0c66374](https://github.com/qlik-trial/sprout-css/commit/0c66374e462a113c5df8ad0d737c090f26c54c5a))
- **DLS-613/Checkbox:** prevent word breaks in label ([#830](https://github.com/qlik-trial/sprout-css/issues/830)) ([2b473ed](https://github.com/qlik-trial/sprout-css/commit/2b473ede55ff0d802f5e67f29f5da4fd2071e14e))
- **DLS-632/Menu:** close contextual menu on right-click outside ([#824](https://github.com/qlik-trial/sprout-css/issues/824)) ([afeebc8](https://github.com/qlik-trial/sprout-css/commit/afeebc82dd4bbe92521bdf65642f611c7795219e))
- **DLS-634/MultiSelect:** add left padding ([#832](https://github.com/qlik-trial/sprout-css/issues/832)) ([8dca8fd](https://github.com/qlik-trial/sprout-css/commit/8dca8fd719d0d4cb15adbf80bc62aee418cc7657))
- **InputButton:** Pass event to onClick ([#828](https://github.com/qlik-trial/sprout-css/issues/828)) ([7a6a839](https://github.com/qlik-trial/sprout-css/commit/7a6a8394b86d6b04cd1f0f0680cd661b9faa9538))
- refactor to use the new pkg sprout-react-hooks ([#831](https://github.com/qlik-trial/sprout-css/issues/831)) ([be9eece](https://github.com/qlik-trial/sprout-css/commit/be9eece4935fa81c22c9fd43622d979ec3c399ca))

## [6.30.0](https://github.com/qlik-trial/sprout-css/compare/v6.29.0...v6.30.0) (2025-11-18)

### Features

- **CSS/DLS-475:** add sprout.media APIs ([#739](https://github.com/qlik-trial/sprout-css/issues/739)) ([757c922](https://github.com/qlik-trial/sprout-css/commit/757c922d5cb1462fcb9c4c0f1b80359defb63f5d))
- **DLS-199/Modal:** new api ([#822](https://github.com/qlik-trial/sprout-css/issues/822)) ([601f82b](https://github.com/qlik-trial/sprout-css/commit/601f82bc5de4b339ad2f283f758f14f6b7a801fd))
- **Stepper/DLS-572:** add stateLess property ([#821](https://github.com/qlik-trial/sprout-css/issues/821)) ([fad8e00](https://github.com/qlik-trial/sprout-css/commit/fad8e001b9977b60978e213cffcd0c12aa9fd634))

### Bug Fixes

- **DLS-629/Modal:** display dividers on resize ([#820](https://github.com/qlik-trial/sprout-css/issues/820)) ([26d072d](https://github.com/qlik-trial/sprout-css/commit/26d072dec568bfcf0aad1f5aae6eaeb07d2c176b))
- **ToggleIconButton:** add ref support ([#818](https://github.com/qlik-trial/sprout-css/issues/818)) ([9a355b8](https://github.com/qlik-trial/sprout-css/commit/9a355b81f91109b7557caaf47bd5e627a252780b))

### Chore Work

- **CI:** add --continue to lint everything ([#823](https://github.com/qlik-trial/sprout-css/issues/823)) ([7077efb](https://github.com/qlik-trial/sprout-css/commit/7077efb1420568d4a9824612e9dec7babad387a8))
- replace logo ([#819](https://github.com/qlik-trial/sprout-css/issues/819)) ([93e7228](https://github.com/qlik-trial/sprout-css/commit/93e7228a6c330a28e03c7a56d1ccaa118484ff5e))
- update npm dependencies ([#825](https://github.com/qlik-trial/sprout-css/issues/825)) ([af2d011](https://github.com/qlik-trial/sprout-css/commit/af2d0110080ec2088153096a2c3d8fee40e8410d))

## [6.29.0](https://github.com/qlik-trial/sprout-css/compare/v6.28.0...v6.29.0) (2025-11-13)

### Features

- add ref support for `<ToggleButton />` ([#809](https://github.com/qlik-trial/sprout-css/issues/809)) ([097f5ba](https://github.com/qlik-trial/sprout-css/commit/097f5ba4031291f274121a97edb83eeb2597c339))
- **CSS:** add rtl_rotate_180 ([#801](https://github.com/qlik-trial/sprout-css/issues/801)) ([b9ea1c9](https://github.com/qlik-trial/sprout-css/commit/b9ea1c9f8950778835b64cd4a77c089660d9d227))
- **DLS-199/Modal:** update header ([#799](https://github.com/qlik-trial/sprout-css/issues/799)) ([ab04ee8](https://github.com/qlik-trial/sprout-css/commit/ab04ee882264719718ebe3eff7050639504bf715))
- **DLS-454:** changing selected badge to have border ([#795](https://github.com/qlik-trial/sprout-css/issues/795)) ([a7c7cac](https://github.com/qlik-trial/sprout-css/commit/a7c7cacd1b3eca24b8e29a6f0627eb0bbe395d6e))
- **DLS-601:** Theme creator example in storybook ([#785](https://github.com/qlik-trial/sprout-css/issues/785)) ([ace2a02](https://github.com/qlik-trial/sprout-css/commit/ace2a027d985ddf54f4c0d75e766bc2cb4d2a6fc))
- **DLS-605/Menu:** remove gap on cascading menu ([#798](https://github.com/qlik-trial/sprout-css/issues/798)) ([d92c6f1](https://github.com/qlik-trial/sprout-css/commit/d92c6f1be87e5e02bf7f3e941ede298259e0f812))
- **Stepper/DLS-572:** support new design ([#814](https://github.com/qlik-trial/sprout-css/issues/814)) ([2c68520](https://github.com/qlik-trial/sprout-css/commit/2c68520134e305979dc8a0364a9e355a36d2a57c))

### Bug Fixes

- **Button:** icon wrapper is a span ([#802](https://github.com/qlik-trial/sprout-css/issues/802)) ([6a41077](https://github.com/qlik-trial/sprout-css/commit/6a4107706929677db80c737067713c2cd4a29b04))
- **DLS-199/Modal:** add missing gap in Actions ([#808](https://github.com/qlik-trial/sprout-css/issues/808)) ([6fddd3e](https://github.com/qlik-trial/sprout-css/commit/6fddd3ea0e1a551c7359be77dcb1bb63a62e4e1f))
- **DLS-612/Menu:** update keyboard navigation ([#804](https://github.com/qlik-trial/sprout-css/issues/804)) ([785c6f3](https://github.com/qlik-trial/sprout-css/commit/785c6f30f762802e078d1c92836b2b2ea05a881b))
- **DLS-621:** remove hidden recommendation on typography html element ([#812](https://github.com/qlik-trial/sprout-css/issues/812)) ([24e88e9](https://github.com/qlik-trial/sprout-css/commit/24e88e99cdfc8d2214e1a266d7b9f9fa80b87394))
- React key warnings in FloatingPrimitive ([#815](https://github.com/qlik-trial/sprout-css/issues/815)) ([67b0640](https://github.com/qlik-trial/sprout-css/commit/67b064028851eefb6ee7ffa92285874510cc3b3e))

### Chore Work

- **translations:** UI bus - 2025-11-07 ([#810](https://github.com/qlik-trial/sprout-css/issues/810)) ([ffd7114](https://github.com/qlik-trial/sprout-css/commit/ffd71142bc84fea0c68e29f2fe1a7e232109b75a))
- update npm dependencies ([#807](https://github.com/qlik-trial/sprout-css/issues/807)) ([fd5a59f](https://github.com/qlik-trial/sprout-css/commit/fd5a59f8f54f172a56850f88554374a6d247fa66))

## [6.28.0](https://github.com/qlik-trial/sprout-css/compare/v6.27.3...v6.28.0) (2025-11-04)

### Features

- **DLS-541/ Checkbox:** extend hit area ([#793](https://github.com/qlik-trial/sprout-css/issues/793)) ([272880b](https://github.com/qlik-trial/sprout-css/commit/272880bfbab63567acbcc7431546152a5bf62afb))

### Bug Fixes

- **CSS:** remove useless ../src/ from import path ([#792](https://github.com/qlik-trial/sprout-css/issues/792)) ([c455084](https://github.com/qlik-trial/sprout-css/commit/c45508442c45e92640980fb1823797c78f8c4d52))
- **ThemeProvider/DLS-607:** add toLowercase ([#789](https://github.com/qlik-trial/sprout-css/issues/789)) ([10b1166](https://github.com/qlik-trial/sprout-css/commit/10b1166c0fa71804c19b1c7a00f2e9a844722ac1))

### Chore Work

- make prettier run on all the code ([#796](https://github.com/qlik-trial/sprout-css/issues/796)) ([343c69f](https://github.com/qlik-trial/sprout-css/commit/343c69f6139a2e799feb3ce403273c87abeef021))
- update npm dependencies ([#791](https://github.com/qlik-trial/sprout-css/issues/791)) ([1ba3540](https://github.com/qlik-trial/sprout-css/commit/1ba354073b0ea05b0d0cbdcb882563c7d18d1da0))

## [6.27.3](https://github.com/qlik-trial/sprout-css/compare/v6.27.2...v6.27.3) (2025-11-03)

### Bug Fixes

- **build:** downgrade @swc/core lib ([#790](https://github.com/qlik-trial/sprout-css/issues/790)) ([8ac8de7](https://github.com/qlik-trial/sprout-css/commit/8ac8de7ccdbeb076e3fa6d64544e4a27f27bb296))
- **DLS-603/FloatingPrimitive:** Control order of `flip()` and `shift()` ([#784](https://github.com/qlik-trial/sprout-css/issues/784)) ([2a8a509](https://github.com/qlik-trial/sprout-css/commit/2a8a509e1127505404932d823ec87cf94a2267d5))
- **DLS-606/Tab:** unobserve parentEl ([#775](https://github.com/qlik-trial/sprout-css/issues/775)) ([71fa6ce](https://github.com/qlik-trial/sprout-css/commit/71fa6ce8cb58864226db253a2cf72086da99cad9))

## [6.27.2](https://github.com/qlik-trial/sprout-css/compare/v6.27.1...v6.27.2) (2025-10-31)

### Bug Fixes

- **Box:** deprecate box in favor of classNames ([#786](https://github.com/qlik-trial/sprout-css/issues/786)) ([a86c684](https://github.com/qlik-trial/sprout-css/commit/a86c6842db0db0c95831b68546378390724f2548))
- **DLS-597/Menu:** Trapped keyboard navigation in SubMenu ([#782](https://github.com/qlik-trial/sprout-css/issues/782)) ([a60d28c](https://github.com/qlik-trial/sprout-css/commit/a60d28c8c8dec44ef407cdb310e2f02802d37b8d))
- **DLS-602/Menu:** close only on clickable items ([#783](https://github.com/qlik-trial/sprout-css/issues/783)) ([86f4fa2](https://github.com/qlik-trial/sprout-css/commit/86f4fa249151932b36804c8b699ce85e3acc98c0))
- **TreeItem:** deprecate displayFolderIcon ([#780](https://github.com/qlik-trial/sprout-css/issues/780)) ([05fa834](https://github.com/qlik-trial/sprout-css/commit/05fa8345fc448e08089888d4f21d932002403457))

## [6.27.1](https://github.com/qlik-trial/sprout-css/compare/v6.27.0...v6.27.1) (2025-10-29)

### Bug Fixes

- **DLS-265/Dialog:** actions layout ([#776](https://github.com/qlik-trial/sprout-css/issues/776)) ([17ebda0](https://github.com/qlik-trial/sprout-css/commit/17ebda0ebeeca9303a8f150332368588f9f32e01))
- **MenuSub:** add data-testid-submenu ([#781](https://github.com/qlik-trial/sprout-css/issues/781)) ([627957c](https://github.com/qlik-trial/sprout-css/commit/627957c53e723f22174b2d13483a9b54db4d0398))

### Chore Work

- update npm dependencies ([#779](https://github.com/qlik-trial/sprout-css/issues/779)) ([fcaee2b](https://github.com/qlik-trial/sprout-css/commit/fcaee2b812cba498e6bc8f19ad72d6b5b44b6cc6))

## [6.27.0](https://github.com/qlik-trial/sprout-css/compare/v6.26.0...v6.27.0) (2025-10-27)

### Features

- **CSS/DLS-475:** add createContainer and widthObserver apis ([#741](https://github.com/qlik-trial/sprout-css/issues/741)) ([a15ed9f](https://github.com/qlik-trial/sprout-css/commit/a15ed9fb23cba291e329e41969055497229e58f8))
- **DLS-593:** add isTouch into sprout ThemeProvider ([#755](https://github.com/qlik-trial/sprout-css/issues/755)) ([93723f8](https://github.com/qlik-trial/sprout-css/commit/93723f8733a2bb7fe444958fffb119e88143883b))

### Bug Fixes

- **DLS-598/Menu:** Hovering stop working ([#774](https://github.com/qlik-trial/sprout-css/issues/774)) ([a9da265](https://github.com/qlik-trial/sprout-css/commit/a9da2651bdfe4afc5feda3b966b046e4e2922a9e))
- **react:** lint batch 2 ([#759](https://github.com/qlik-trial/sprout-css/issues/759)) ([2ca555a](https://github.com/qlik-trial/sprout-css/commit/2ca555a503a17fa957c0c5c216fddcab978ac743))
- **react:** update eslint and apply --fix ([#773](https://github.com/qlik-trial/sprout-css/issues/773)) ([83f40a2](https://github.com/qlik-trial/sprout-css/commit/83f40a2cdffbb916cc4886e561572bfe70169e53))

### Chore Work

- bump actions/setup-node from 5 to 6 ([#770](https://github.com/qlik-trial/sprout-css/issues/770)) ([3828adb](https://github.com/qlik-trial/sprout-css/commit/3828adba89529d0bccd12093565d1bad77d2320a))

## [6.26.0](https://github.com/qlik-trial/sprout-css/compare/v6.25.0...v6.26.0) (2025-10-23)

### Features

- **DLS-466/TextField:** Ellipsis long text when not focused ([#760](https://github.com/qlik-trial/sprout-css/issues/760)) ([b99e140](https://github.com/qlik-trial/sprout-css/commit/b99e140b51d1d6fa42b1fd37d3f8ba108909de43))
- **DLS-592/Menu:** show backdrop ([#769](https://github.com/qlik-trial/sprout-css/issues/769)) ([9b312a5](https://github.com/qlik-trial/sprout-css/commit/9b312a57e7bcd3f0871c86c834ac9ebfa10e7661))

### Bug Fixes

- **CSS:** logical properties ([#756](https://github.com/qlik-trial/sprout-css/issues/756)) ([766ce31](https://github.com/qlik-trial/sprout-css/commit/766ce3152574c3ec0708bc01072e3bbfcc30d6f3))
- **DLS-588/Menu.Sub:** Should open on hover ([#762](https://github.com/qlik-trial/sprout-css/issues/762)) ([f5345cf](https://github.com/qlik-trial/sprout-css/commit/f5345cfa0b58e8edf69bbbc43097178e85179099))
- **DLS-590:** add infoIconPopover support for TextField ([#763](https://github.com/qlik-trial/sprout-css/issues/763)) ([cf25b7e](https://github.com/qlik-trial/sprout-css/commit/cf25b7e37f158331c2a7a39dfc302a6f8e9ee580))
- **DLS-594:** respect newlines in Tooltip ([#771](https://github.com/qlik-trial/sprout-css/issues/771)) ([419d97e](https://github.com/qlik-trial/sprout-css/commit/419d97ebbd4083e23e010a94f6085d0417a4916b))

### Chore Work

- **translations:** UI bus - 2025-10-14 ([#764](https://github.com/qlik-trial/sprout-css/issues/764)) ([93728a0](https://github.com/qlik-trial/sprout-css/commit/93728a04c603714df655463e11153a3b88feb075))
- update npm dependencies ([#768](https://github.com/qlik-trial/sprout-css/issues/768)) ([5582a07](https://github.com/qlik-trial/sprout-css/commit/5582a07ae6a98caa760363b5d58d0690cd3d7ef6))

## [6.25.0](https://github.com/qlik-trial/sprout-css/compare/v6.24.0...v6.25.0) (2025-10-15)

### Features

- add `inset_` classes ([#747](https://github.com/qlik-trial/sprout-css/issues/747)) ([fe038b3](https://github.com/qlik-trial/sprout-css/commit/fe038b3feb93362dfa7c8fffa7306c39d6a80d1f))
- **DLS-491:** add minus positioning ([#751](https://github.com/qlik-trial/sprout-css/issues/751)) ([8dfd085](https://github.com/qlik-trial/sprout-css/commit/8dfd085f60ecfcf34f864fab13d79f3366af9cb9))
- **Table/DLS-348:** add load more i18n ([#752](https://github.com/qlik-trial/sprout-css/issues/752)) ([c936af6](https://github.com/qlik-trial/sprout-css/commit/c936af67e13454f38224d7e6b05ac5ad20d5bbf6))

### Bug Fixes

- **DLS-562:** cursor on disabled checkbox and radio button ([#753](https://github.com/qlik-trial/sprout-css/issues/753)) ([24db218](https://github.com/qlik-trial/sprout-css/commit/24db21871451cac16b6f21980130ffc7adfec7e9))
- menu trigger missing focus fn on trigger element ([#754](https://github.com/qlik-trial/sprout-css/issues/754)) ([5f0d692](https://github.com/qlik-trial/sprout-css/commit/5f0d692ff0b1be4368df06c0fb4bd5abcac3c076))
- **Menu:** omit base `menu` type from `MenuSubProps` type ([#749](https://github.com/qlik-trial/sprout-css/issues/749)) ([514faf8](https://github.com/qlik-trial/sprout-css/commit/514faf866704a4de731defa451a97f6ff69cdccd))
- **React:** eslint errors ([#758](https://github.com/qlik-trial/sprout-css/issues/758)) ([acd9b63](https://github.com/qlik-trial/sprout-css/commit/acd9b6304907dfdc9db2368aefc4531c19c149aa))

### Chore Work

- update npm dependencies ([#748](https://github.com/qlik-trial/sprout-css/issues/748)) ([5d22f48](https://github.com/qlik-trial/sprout-css/commit/5d22f484c27275043cfb3b499bdf3ef797cadcd5))
- update npm dependencies ([#757](https://github.com/qlik-trial/sprout-css/issues/757)) ([e99862d](https://github.com/qlik-trial/sprout-css/commit/e99862d53cbccecd9b4de5e5d62f6fea651e0199))

## [6.24.0](https://github.com/qlik-trial/sprout-css/compare/v6.23.0...v6.24.0) (2025-10-06)

### Features

- **Accordion/DLS-340:** add affix and chevronPosition properties ([#738](https://github.com/qlik-trial/sprout-css/issues/738)) ([1eac4da](https://github.com/qlik-trial/sprout-css/commit/1eac4da6bb89f7096c122e763c2be82bc862b6c2))
- **DLS-542:** checkbox/radio/switch, helper text updates ([#746](https://github.com/qlik-trial/sprout-css/issues/746)) ([8ff7a2a](https://github.com/qlik-trial/sprout-css/commit/8ff7a2aafbac8f7e1f6920bf328218c433eb1aa5))
- **Modal/DLS-196:** add padding property ([#589](https://github.com/qlik-trial/sprout-css/issues/589)) ([f5a810c](https://github.com/qlik-trial/sprout-css/commit/f5a810c63ec71e815d1e04e3bd0ecf46861fc4eb))

### Bug Fixes

- add Germany language to storybook ([#744](https://github.com/qlik-trial/sprout-css/issues/744)) ([6add62d](https://github.com/qlik-trial/sprout-css/commit/6add62d544e49e75c0016b15fa69ad2d7643a3c8))
- **AlertModal:** add max_w_full and overflow_auto to details container ([#743](https://github.com/qlik-trial/sprout-css/issues/743)) ([cda5274](https://github.com/qlik-trial/sprout-css/commit/cda527443873f9a204e96a02b45df4fd5063d059))
- **css/grid/DLS-475:** add missing types ([#742](https://github.com/qlik-trial/sprout-css/issues/742)) ([ceaa5bc](https://github.com/qlik-trial/sprout-css/commit/ceaa5bc50ed06406c0c57fe8ab10bff10d4ad080))
- **DLS-553/Tooltip:** delay on first ([#740](https://github.com/qlik-trial/sprout-css/issues/740)) ([150062c](https://github.com/qlik-trial/sprout-css/commit/150062c48627bae5530ef477216f6dde7c1b6179))
- small variant of ToggleIconButton ([#745](https://github.com/qlik-trial/sprout-css/issues/745)) ([07c6703](https://github.com/qlik-trial/sprout-css/commit/07c6703e542b4f6047867f22ad9a687c133a6ca4))

## [6.23.0](https://github.com/qlik-trial/sprout-css/compare/v6.22.0...v6.23.0) (2025-09-30)

### Features

- **Button/DLS-395:** add destructive props ([#699](https://github.com/qlik-trial/sprout-css/issues/699)) ([51d6eda](https://github.com/qlik-trial/sprout-css/commit/51d6edaa77cb8a5f26c4bbeccc8eb55c0474df42))
- **DLS-491:** add missing tailwind classNames ([#638](https://github.com/qlik-trial/sprout-css/issues/638)) ([c95efd8](https://github.com/qlik-trial/sprout-css/commit/c95efd83f35704516aef5031b1a729878f136895))
- **DLS-514/Select/MultiSelect:** add overlay ([#731](https://github.com/qlik-trial/sprout-css/issues/731)) ([1acf9a6](https://github.com/qlik-trial/sprout-css/commit/1acf9a643d7199ae857e1518b9a707a60e75f8e2))
- **ProgressCircular/DLS-527:** add destructive variant ([#734](https://github.com/qlik-trial/sprout-css/issues/734)) ([30be343](https://github.com/qlik-trial/sprout-css/commit/30be343c1e1d4b97a6f1ecfb9c9c7c5a45b04a94))

### Bug Fixes

- **DLS-508:** eslint rule errors ([#720](https://github.com/qlik-trial/sprout-css/issues/720)) ([1244ccd](https://github.com/qlik-trial/sprout-css/commit/1244ccdbe3823fc542286cbabddc01a06a1c4998))
- **DLS-509:** logical properties in JS ([#730](https://github.com/qlik-trial/sprout-css/issues/730)) ([74fe51b](https://github.com/qlik-trial/sprout-css/commit/74fe51bc9ba99fe557747fb8ee772ad3f0ee733a))
- **DLS-509:** stylelint errors & warnings ([#729](https://github.com/qlik-trial/sprout-css/issues/729)) ([629ffa6](https://github.com/qlik-trial/sprout-css/commit/629ffa66fc7011515fcc596dbbb587a523629ff9))
- **DSL-554:** allow ellipsis in alert modal content ([#735](https://github.com/qlik-trial/sprout-css/issues/735)) ([65f5f96](https://github.com/qlik-trial/sprout-css/commit/65f5f96107c4ab5d7cfaf180238ea247872a0ab8))
- **Menu:** circular deps ([#717](https://github.com/qlik-trial/sprout-css/issues/717)) ([b99fee4](https://github.com/qlik-trial/sprout-css/commit/b99fee4fe3fba2a055334d6ff38240493e427ce5))

### Chore Work

- bump actions/cache from 4.2.3 to 4.2.4 ([#724](https://github.com/qlik-trial/sprout-css/issues/724)) ([1b37af7](https://github.com/qlik-trial/sprout-css/commit/1b37af7f61aca0df1db9dc34c980763156c5438e))
- bump actions/checkout from 4 to 5 ([#723](https://github.com/qlik-trial/sprout-css/issues/723)) ([45f6508](https://github.com/qlik-trial/sprout-css/commit/45f6508d882a930e62edd88f6c620a2b54cb5064))
- bump actions/setup-node from 4 to 5 ([#726](https://github.com/qlik-trial/sprout-css/issues/726)) ([ae9c074](https://github.com/qlik-trial/sprout-css/commit/ae9c0746b3f6dcfc5ac33b89e927aaf4b9682adc))
- bump qlik-trial/qmfe-workflows from 2 to 4 ([#725](https://github.com/qlik-trial/sprout-css/issues/725)) ([4899c9d](https://github.com/qlik-trial/sprout-css/commit/4899c9ded6a2a3556a6882c60923f7104f0eea94))
- **CI:** add missing tokens to gh-pages ([2b24b95](https://github.com/qlik-trial/sprout-css/commit/2b24b958dc66fd6ac7247dbef27c3e635d21fcaf))
- **CI:** add stylelint to react package ([#715](https://github.com/qlik-trial/sprout-css/issues/715)) ([ffa7cd2](https://github.com/qlik-trial/sprout-css/commit/ffa7cd29cb59dcbea690d95cd3b2eeeff84a7609))
- **CI:** lint only files in the diff ([#719](https://github.com/qlik-trial/sprout-css/issues/719)) ([3e7fee0](https://github.com/qlik-trial/sprout-css/commit/3e7fee0492ee4927c79db70bb198fe95eab20e1c))
- **CI:** update and use asdf ([#727](https://github.com/qlik-trial/sprout-css/issues/727)) ([8ec9648](https://github.com/qlik-trial/sprout-css/commit/8ec96483f15996d7ca4dd8db021f6e9cc8d6387a))
- **DLS-508:** add new eslint package ([#722](https://github.com/qlik-trial/sprout-css/issues/722)) ([fe5a5be](https://github.com/qlik-trial/sprout-css/commit/fe5a5bee062578c801e680d853797de58f0513e3))
- remove duplicate deps ([#733](https://github.com/qlik-trial/sprout-css/issues/733)) ([5a5be9c](https://github.com/qlik-trial/sprout-css/commit/5a5be9c382463f6217b781a3f8f0f3f1855fafa6))
- **translations:** UI bus - 2025-09-19 ([#732](https://github.com/qlik-trial/sprout-css/issues/732)) ([68d7496](https://github.com/qlik-trial/sprout-css/commit/68d74968f679dda6d9868f5664e994995afc3764))
- update npm dependencies ([#736](https://github.com/qlik-trial/sprout-css/issues/736)) ([e581c3b](https://github.com/qlik-trial/sprout-css/commit/e581c3bdda819d62b7d1129fa05da88f25e8153e))

## [6.22.0](https://github.com/qlik-trial/sprout-css/compare/v6.21.0...v6.22.0) (2025-09-22)

### Features

- **DLS-531/Field:** add missing infoPopover property ([#712](https://github.com/qlik-trial/sprout-css/issues/712)) ([2df6770](https://github.com/qlik-trial/sprout-css/commit/2df6770cb87cfeb87b9943c1629854dca1959398))
- **Popover/DLS-528:** add maxWidth="screen" and make it default ([#711](https://github.com/qlik-trial/sprout-css/issues/711)) ([0f15913](https://github.com/qlik-trial/sprout-css/commit/0f159138478707f78b954d0e79c63ee56b1bf38c))

### Chore Work

- update npm dependencies ([#716](https://github.com/qlik-trial/sprout-css/issues/716)) ([98f820f](https://github.com/qlik-trial/sprout-css/commit/98f820f9e32e76222c448c31fecf74885b28de19))

## [6.21.0](https://github.com/qlik-trial/sprout-css/compare/v6.20.0...v6.21.0) (2025-09-18)

### Features

- add `asDropdown` to `<ToggleButton />` ([#700](https://github.com/qlik-trial/sprout-css/issues/700)) ([0067652](https://github.com/qlik-trial/sprout-css/commit/00676526657330532b5627197e85cfc0d70355af))
- **DLS-232:** add secondary menu action ([#708](https://github.com/qlik-trial/sprout-css/issues/708)) ([8ad96cf](https://github.com/qlik-trial/sprout-css/commit/8ad96cfa5213013a2e8ec90d572ff77b48a91f42))
- **DLS-470/SegmentedControl:** add field label prop ([#710](https://github.com/qlik-trial/sprout-css/issues/710)) ([0abf1e7](https://github.com/qlik-trial/sprout-css/commit/0abf1e7b49e3ca612b4fd505225bc19dd8f6294d))

### Bug Fixes

- **Accordion:** isolated let the item defaultopen property + divider ([#709](https://github.com/qlik-trial/sprout-css/issues/709)) ([47e942e](https://github.com/qlik-trial/sprout-css/commit/47e942e92aadd3f64347282454bbc2c494532b2f))
- **DLS-535/Tooltip:** doesn't respect open state ([#703](https://github.com/qlik-trial/sprout-css/issues/703)) ([252a126](https://github.com/qlik-trial/sprout-css/commit/252a12601a5ff9b31421e1e20094f39e4a3ea637))
- **DLS-552/InlineEdit.TextField:** do not trim spaces ([#701](https://github.com/qlik-trial/sprout-css/issues/701)) ([d2ebf79](https://github.com/qlik-trial/sprout-css/commit/d2ebf79fa2b1d071b11d8de66ea625eb17a3e9e8))

## [6.20.0](https://github.com/qlik-trial/sprout-css/compare/v6.19.2...v6.20.0) (2025-09-15)

### Features

- **DLS-249/Avatar:** add illustration size ([#697](https://github.com/qlik-trial/sprout-css/issues/697)) ([1a5aa3a](https://github.com/qlik-trial/sprout-css/commit/1a5aa3a5b158eddb64fdbbc15884f6521b7cb6ce))

### Bug Fixes

- **Avatar:** do not shrink ([#695](https://github.com/qlik-trial/sprout-css/issues/695)) ([854fdfe](https://github.com/qlik-trial/sprout-css/commit/854fdfe5aa201ac10ea966b764fea36194245853))
- **DLS-465/Popover:** popover opens even when false ([#677](https://github.com/qlik-trial/sprout-css/issues/677)) ([1077a0c](https://github.com/qlik-trial/sprout-css/commit/1077a0cd35c4f349ad5ff1aa52701d9d592a0d33))
- **DLS-518/AlertBanner:** background color of banner ([#696](https://github.com/qlik-trial/sprout-css/issues/696)) ([6d50855](https://github.com/qlik-trial/sprout-css/commit/6d5085546d151c101685dab7736a4ea56dfd713c))
- **i18n/DLS-513:** embed translations and add observer ([#693](https://github.com/qlik-trial/sprout-css/issues/693)) ([b4462df](https://github.com/qlik-trial/sprout-css/commit/b4462df539c6588867d01040ab010ed7b2026e5c))
- **Popover/DLS-511:** support anchorPosition API ([#692](https://github.com/qlik-trial/sprout-css/issues/692)) ([e227167](https://github.com/qlik-trial/sprout-css/commit/e227167bcdf30b588437f4b2d70e8fc33aeae0d9))
- **Tabs/DLS-345:** Tabs content height ([#660](https://github.com/qlik-trial/sprout-css/issues/660)) ([7a69392](https://github.com/qlik-trial/sprout-css/commit/7a693927ff84257062f01c8a28d9c36fed4d8a9b))

### Chore Work

- update npm dependencies ([#698](https://github.com/qlik-trial/sprout-css/issues/698)) ([36e13cf](https://github.com/qlik-trial/sprout-css/commit/36e13cfaa1fbdf7e9247e7b7c483d1b0ec1c9ee5))

## [6.19.2](https://github.com/qlik-trial/sprout-css/compare/v6.19.1...v6.19.2) (2025-09-10)

### Bug Fixes

- **DLS-469/AlertBanner:** vertical spacing and overlapping content ([#681](https://github.com/qlik-trial/sprout-css/issues/681)) ([785d460](https://github.com/qlik-trial/sprout-css/commit/785d4608dcebec0c46cd9c52736fe42641fc2117))
- **DLS-495/AlertInline:** content alignment ([#683](https://github.com/qlik-trial/sprout-css/issues/683)) ([b1b437e](https://github.com/qlik-trial/sprout-css/commit/b1b437e78ce5e372ef6a9a0540db5595dee30915))
- **DLS-506/Modal:** render sync the portal ([#691](https://github.com/qlik-trial/sprout-css/issues/691)) ([cd2adb1](https://github.com/qlik-trial/sprout-css/commit/cd2adb14bf8b8f3eb7d3b9b6ecb0e1890f76ac6d))
- scrolling in combobox ([#687](https://github.com/qlik-trial/sprout-css/issues/687)) ([ad918cd](https://github.com/qlik-trial/sprout-css/commit/ad918cd812858dc7d03323ca9f1738bb39481f8e))

### Chore Work

- update npm dependencies ([#684](https://github.com/qlik-trial/sprout-css/issues/684)) ([6b4dfc6](https://github.com/qlik-trial/sprout-css/commit/6b4dfc6df668e95b2a0f97532cbbf34067c25ec2))
- update pnpm ([#685](https://github.com/qlik-trial/sprout-css/issues/685)) ([04308d4](https://github.com/qlik-trial/sprout-css/commit/04308d43a4b8be68dfeae41163125c16ee6026d3))

## [6.19.1](https://github.com/qlik-trial/sprout-css/compare/v6.19.0...v6.19.1) (2025-09-02)

### Bug Fixes

- **Badge/DLS-453:** Align props with Figma ([#665](https://github.com/qlik-trial/sprout-css/issues/665)) ([09d8a15](https://github.com/qlik-trial/sprout-css/commit/09d8a15fcc502083acaa805d2066313f163f6162))
- **DLS-468/InlineEdit:** not visible in modal ([#678](https://github.com/qlik-trial/sprout-css/issues/678)) ([6287e84](https://github.com/qlik-trial/sprout-css/commit/6287e841df14150069d7441cca0580814db50313))
- **DLS-486/TreeItem:** fix Tree custom icon alignment ([#680](https://github.com/qlik-trial/sprout-css/issues/680)) ([0029eb8](https://github.com/qlik-trial/sprout-css/commit/0029eb8bc6b21d546b6e8d7c8b94a6e32d0d6c6f))
- **Modal/DLS-456:** add data-scrollable attribute ([#670](https://github.com/qlik-trial/sprout-css/issues/670)) ([4509edc](https://github.com/qlik-trial/sprout-css/commit/4509edcbf8c631b405381eb5fcd2eff048ee8266))
- **Select/DLS-450:** Focus on alphanumeric keydown ([#669](https://github.com/qlik-trial/sprout-css/issues/669)) ([f66ad71](https://github.com/qlik-trial/sprout-css/commit/f66ad71c3b83c55520dfd1ad4845be55ce78e048))

### Chore Work

- update npm dependencies ([#674](https://github.com/qlik-trial/sprout-css/issues/674)) ([e030a11](https://github.com/qlik-trial/sprout-css/commit/e030a11fd45a2529e2b3d072acc08b66694f11d5))
- update npm dependencies ([#679](https://github.com/qlik-trial/sprout-css/issues/679)) ([a18c946](https://github.com/qlik-trial/sprout-css/commit/a18c946a014e61e24acee29dbd949687fff38fb1))
- upgrade node ([#676](https://github.com/qlik-trial/sprout-css/issues/676)) ([40fad2b](https://github.com/qlik-trial/sprout-css/commit/40fad2b6902918d1ac3e10835cfce41cba92e7ce))

## [6.19.0](https://github.com/qlik-trial/sprout-css/compare/v6.18.0...v6.19.0) (2025-08-22)

### Features

- **DLS-449/FieldLabel:** info popover in field label ([#667](https://github.com/qlik-trial/sprout-css/issues/667)) ([6203aee](https://github.com/qlik-trial/sprout-css/commit/6203aee344407487e08a73f48f49e120aaa4b500))

### Bug Fixes

- **DLS-463:** Modal escape callback triggered multiple times ([#673](https://github.com/qlik-trial/sprout-css/issues/673)) ([cb7e1b1](https://github.com/qlik-trial/sprout-css/commit/cb7e1b10be84889cecbe6a28a65d375f472edf97))
- **Input/DLS-458:** remove unused class ([#672](https://github.com/qlik-trial/sprout-css/issues/672)) ([bd77ed4](https://github.com/qlik-trial/sprout-css/commit/bd77ed4f49a00164a630d79ab473cdaa0cbdc4e6))

### Chore Work

- update npm dependencies ([#671](https://github.com/qlik-trial/sprout-css/issues/671)) ([da09bc0](https://github.com/qlik-trial/sprout-css/commit/da09bc0924575de3ca30fbd6967c093603e99e3d))

## [6.18.0](https://github.com/qlik-trial/sprout-css/compare/v6.17.1...v6.18.0) (2025-08-11)

### Features

- **Switch/DLS-411:** add info icon and tooltip ([#657](https://github.com/qlik-trial/sprout-css/issues/657)) ([49d27a1](https://github.com/qlik-trial/sprout-css/commit/49d27a1f17fb401fb70167fc9906f0c7f0953d79))

### Bug Fixes

- **Button/IconButton/DLS-439:** update border token ([#659](https://github.com/qlik-trial/sprout-css/issues/659)) ([262ac13](https://github.com/qlik-trial/sprout-css/commit/262ac1328c27a5f6b1e66504d063f67da56cf42e))
- **Divider/Accordion/DLS-16:** update divider token ([#658](https://github.com/qlik-trial/sprout-css/issues/658)) ([7ffc7a8](https://github.com/qlik-trial/sprout-css/commit/7ffc7a8bd4e0a7b782de7f8f4dc7ccad4f7536c3))
- **InfoTooltipPrimitive/DLS-443:** Setting type button ([#662](https://github.com/qlik-trial/sprout-css/issues/662)) ([085b4c8](https://github.com/qlik-trial/sprout-css/commit/085b4c8a447d792e810c47b01e8b45f65edf1c91))

### Chore Work

- **DLS-438:** update CI branch name ([#655](https://github.com/qlik-trial/sprout-css/issues/655)) ([a92e5b3](https://github.com/qlik-trial/sprout-css/commit/a92e5b302e7c528b827ab46c0d33985ce619f4c9))
- update npm dependencies ([#656](https://github.com/qlik-trial/sprout-css/issues/656)) ([cfc4a2e](https://github.com/qlik-trial/sprout-css/commit/cfc4a2e8a51b7670817c6c3cc824dd0a946c4e49))
- update npm dependencies ([#661](https://github.com/qlik-trial/sprout-css/issues/661)) ([0bfbfc3](https://github.com/qlik-trial/sprout-css/commit/0bfbfc3fec1d44bbf21291c073559bf56586e585))

## [6.17.1](https://github.com/qlik-trial/sprout-css/compare/v6.17.0...v6.17.1) (2025-08-05)

### Bug Fixes

- **AlertInline/DLS-437:** center icon wrapper ([#653](https://github.com/qlik-trial/sprout-css/issues/653)) ([9835243](https://github.com/qlik-trial/sprout-css/commit/98352438c10a95231eb539ed7810458d1801d1b7))
- **ProgressBar/DLS-435:** undetermined animation in RTL ([#652](https://github.com/qlik-trial/sprout-css/issues/652)) ([858d354](https://github.com/qlik-trial/sprout-css/commit/858d35409f7cb1d4de402bf00f039802ecbe21a6))
- **Switch/DLS-418:** checked in RTL mode ([#651](https://github.com/qlik-trial/sprout-css/issues/651)) ([c2a2170](https://github.com/qlik-trial/sprout-css/commit/c2a217027224a3a009b80da92944093826db7db3))
- **Tabs/DLS-436:** indicator in RTL ([#654](https://github.com/qlik-trial/sprout-css/issues/654)) ([d2e5adc](https://github.com/qlik-trial/sprout-css/commit/d2e5adc2a177037bbe4cabf4e4ab2ac1d190d475))

## [6.17.0](https://github.com/qlik-trial/sprout-css/compare/v6.16.0...v6.17.0) (2025-08-04)

### Features

- **Slider/DLS-176:** create component ([#647](https://github.com/qlik-trial/sprout-css/issues/647)) ([5c29543](https://github.com/qlik-trial/sprout-css/commit/5c29543f11fe967ba21d04470145c603c99c494b))

### Bug Fixes

- **HelperText/DLS-424:** helper text wrap ([#649](https://github.com/qlik-trial/sprout-css/issues/649)) ([0336228](https://github.com/qlik-trial/sprout-css/commit/0336228b85ff20d7a9d85974b2c8012cf23d3694))
- **TextField:** support dark mode of native icons ([#650](https://github.com/qlik-trial/sprout-css/issues/650)) ([057375e](https://github.com/qlik-trial/sprout-css/commit/057375e2f7dd52416fff12a47f2c9a2f77dae4fa))

### Chore Work

- **CI:** re-add gh-pages for non chromatic users ([d2e9d17](https://github.com/qlik-trial/sprout-css/commit/d2e9d17cd1f62bec387ba25d98d92375b3f96c8d))

## [6.16.0](https://github.com/qlik-trial/sprout-css/compare/v6.15.2...v6.16.0) (2025-07-28)

### Features

- **DLS-152:** add dropzone ([#475](https://github.com/qlik-trial/sprout-css/issues/475)) ([bfa62b1](https://github.com/qlik-trial/sprout-css/commit/bfa62b10b5c141588c50506a4c866a2cb6f54e69))

### Bug Fixes

- **DLS-373:** InlineEdit use floating-ui ([#635](https://github.com/qlik-trial/sprout-css/issues/635)) ([21cc717](https://github.com/qlik-trial/sprout-css/commit/21cc717c95fc8d2f75813710d66633e8a65dcfef))
- **DLS-417/Select:** support default value from react-hook-form ([#646](https://github.com/qlik-trial/sprout-css/issues/646)) ([208d3ec](https://github.com/qlik-trial/sprout-css/commit/208d3ec211d2969f7ac2bbf3a12258e5450ee40e))
- **ListItem:** remove native outline from the button in listitem ([#645](https://github.com/qlik-trial/sprout-css/issues/645)) ([b27381c](https://github.com/qlik-trial/sprout-css/commit/b27381c674752c5d2b19711dc905cf8294b82b47))
- **Tree:** handle children interaction and label size ([#643](https://github.com/qlik-trial/sprout-css/issues/643)) ([84b9594](https://github.com/qlik-trial/sprout-css/commit/84b9594d6d017a5cab22798778d0177ea1a2b422))

### Chore Work

- **CI:** speed-up ([#644](https://github.com/qlik-trial/sprout-css/issues/644)) ([440ef5b](https://github.com/qlik-trial/sprout-css/commit/440ef5b7164f2ad715a9fc1a1fa90ed0c1a7d280))

## [6.15.2](https://github.com/qlik-trial/sprout-css/compare/v6.15.1...v6.15.2) (2025-07-22)

### Bug Fixes

- **AlertInline/DLS-398:** fix alignment ([#620](https://github.com/qlik-trial/sprout-css/issues/620)) ([e9c68f4](https://github.com/qlik-trial/sprout-css/commit/e9c68f4197358bef6c9f43aacacae0fcaa009695))
- **Toast:** remove padding on structured content ([#642](https://github.com/qlik-trial/sprout-css/issues/642)) ([93bb6ad](https://github.com/qlik-trial/sprout-css/commit/93bb6ad0b4b92328922231db24f67cbe47b0adfb))

### Chore Work

- update npm dependencies ([#639](https://github.com/qlik-trial/sprout-css/issues/639)) ([41ae63d](https://github.com/qlik-trial/sprout-css/commit/41ae63dac6a4792216276cda9d7e3c886f7fd473))

## [6.15.1](https://github.com/qlik-trial/sprout-css/compare/v6.15.0...v6.15.1) (2025-07-17)

### Bug Fixes

- **DLS-407:** fix the height for FF ([#636](https://github.com/qlik-trial/sprout-css/issues/636)) ([d3e47dd](https://github.com/qlik-trial/sprout-css/commit/d3e47ddb645d6fb70b53f961ee37e9b187638d11))
- **Menu.Contextual:** add wrapperClassName props for the wrapper ([#637](https://github.com/qlik-trial/sprout-css/issues/637)) ([0e4400c](https://github.com/qlik-trial/sprout-css/commit/0e4400ca73540e289a76409c8a394c54f5d3c2ca))
- **MultiSelect/DLS-405:** height changes on different states ([#628](https://github.com/qlik-trial/sprout-css/issues/628)) ([2a027f5](https://github.com/qlik-trial/sprout-css/commit/2a027f5194402723463554701f58d79ebe3a3d0e))
- **Popover/DLS-245:** keyboard navigation ([#631](https://github.com/qlik-trial/sprout-css/issues/631)) ([73cb4f5](https://github.com/qlik-trial/sprout-css/commit/73cb4f57bc85cae4c11739664d743c271d063f5e))
- **Toast/DLS-410:** custom message layout ([#634](https://github.com/qlik-trial/sprout-css/issues/634)) ([7e0a5b3](https://github.com/qlik-trial/sprout-css/commit/7e0a5b358a37106386a7109b193452c3ae8ca812))

### Chore Work

- **translations:** UI bus - 2025-07-11 ([#633](https://github.com/qlik-trial/sprout-css/issues/633)) ([e62bfac](https://github.com/qlik-trial/sprout-css/commit/e62bfac19b77450a02ab7d3bf1569eb1a5117806))
- update npm dependencies ([#630](https://github.com/qlik-trial/sprout-css/issues/630)) ([da35d3d](https://github.com/qlik-trial/sprout-css/commit/da35d3d880ae326f1a6f0db90429aed6e51f2856))

## [6.15.0](https://github.com/qlik-trial/sprout-css/compare/v6.14.0...v6.15.0) (2025-07-11)

### Features

- expose useSproutI18n for extended OSS components ([#626](https://github.com/qlik-trial/sprout-css/issues/626)) ([d8f5b0c](https://github.com/qlik-trial/sprout-css/commit/d8f5b0c6484ded708f1611f27ad71058b0b326b9))

### Bug Fixes

- **Tabs/DLS-404:** update design ([#627](https://github.com/qlik-trial/sprout-css/issues/627)) ([3096e09](https://github.com/qlik-trial/sprout-css/commit/3096e09f10bc6e44240c3a591a4505c84cc137cc))

## [6.14.0](https://github.com/qlik-trial/sprout-css/compare/v6.13.0...v6.14.0) (2025-07-10)

### Features

- **DLS-158:** add TreeItem ([#516](https://github.com/qlik-trial/sprout-css/issues/516)) ([cf2be94](https://github.com/qlik-trial/sprout-css/commit/cf2be94f48ac558f5012304ee18acdf9e4bf370e))

### Bug Fixes

- **DLS-402/Toast:** implement new design ([#625](https://github.com/qlik-trial/sprout-css/issues/625)) ([ccd6bd3](https://github.com/qlik-trial/sprout-css/commit/ccd6bd3baf8b14c04f90bb1ce987ff77ff40b8af))
- **Select:** close on tab and shift+tab ([#623](https://github.com/qlik-trial/sprout-css/issues/623)) ([90ee82e](https://github.com/qlik-trial/sprout-css/commit/90ee82e91872e12944b5dd74d70c91bb9f224a88))

### Chore Work

- update npm dependencies ([#621](https://github.com/qlik-trial/sprout-css/issues/621)) ([92146cd](https://github.com/qlik-trial/sprout-css/commit/92146cd7b8a48505fb3923ca5a0029c736d02649))

## [6.13.0](https://github.com/qlik-trial/sprout-css/compare/v6.12.0...v6.13.0) (2025-07-04)

### Features

- **AlertInline:** add layout prop ([#618](https://github.com/qlik-trial/sprout-css/issues/618)) ([f70bc09](https://github.com/qlik-trial/sprout-css/commit/f70bc098f099c6af68e88f77f448e2ae43707fa3))

## [6.12.0](https://github.com/qlik-trial/sprout-css/compare/v6.11.1...v6.12.0) (2025-07-03)

### Features

- **DLS-50/Table:** scrollbar in table ([#606](https://github.com/qlik-trial/sprout-css/issues/606)) ([8b16c19](https://github.com/qlik-trial/sprout-css/commit/8b16c198745c93ae612ccf3fb75c9c5b8c619d1b))
- **Select:** expose context ([#616](https://github.com/qlik-trial/sprout-css/issues/616)) ([b9f4a39](https://github.com/qlik-trial/sprout-css/commit/b9f4a398941b754cb9f84406fcda3d1f04190954))
- **Switch:** add helpText ([#615](https://github.com/qlik-trial/sprout-css/issues/615)) ([614f170](https://github.com/qlik-trial/sprout-css/commit/614f1704823d9fe5ac52e5011b715888b928f956))

### Chore Work

- **translations:** UI bus - 2025-06-27 ([#612](https://github.com/qlik-trial/sprout-css/issues/612)) ([15af124](https://github.com/qlik-trial/sprout-css/commit/15af1249b7877eb04582b96fe2ff64261c5d2bcc))

## [6.11.1](https://github.com/qlik-trial/sprout-css/compare/v6.11.0...v6.11.1) (2025-07-01)

### Bug Fixes

- **DLS-379/Select:** use scrollTo instead of scrollIntoView ([#601](https://github.com/qlik-trial/sprout-css/issues/601)) ([893ac4f](https://github.com/qlik-trial/sprout-css/commit/893ac4f85e9a546f140aa1abf24f9873ecaedd9d))
- **useValueControl:** selector option ([#609](https://github.com/qlik-trial/sprout-css/issues/609)) ([e0ad62c](https://github.com/qlik-trial/sprout-css/commit/e0ad62ccd4b0871f4b744e82da0448caad7608aa))

### Chore Work

- update npm dependencies ([#607](https://github.com/qlik-trial/sprout-css/issues/607)) ([913f117](https://github.com/qlik-trial/sprout-css/commit/913f1179a8115d91f977fb181aa817b8606f7699))

## [6.11.0](https://github.com/qlik-trial/sprout-css/compare/v6.10.0...v6.11.0) (2025-06-27)

### Features

- **DLS-50/Table:** column resizing implementation ([#592](https://github.com/qlik-trial/sprout-css/issues/592)) ([c421d46](https://github.com/qlik-trial/sprout-css/commit/c421d46a0283ac1ffe3b839fbd02c559f8b5e6e4))
- **Table/DLS-355:** add a default noRows message ([#596](https://github.com/qlik-trial/sprout-css/issues/596)) ([15b1f33](https://github.com/qlik-trial/sprout-css/commit/15b1f33cc0231be01e88b8a0f42868bc85cd416d))

### Bug Fixes

- **InlineEdit:** add missing hasError property ([#597](https://github.com/qlik-trial/sprout-css/issues/597)) ([b3369c7](https://github.com/qlik-trial/sprout-css/commit/b3369c7521636df10d26b8b9afcf4d64c7deb5cd))

### Chore Work

- **translations:** UI bus - 2025-06-24 ([#600](https://github.com/qlik-trial/sprout-css/issues/600)) ([83349fa](https://github.com/qlik-trial/sprout-css/commit/83349faa41051053746b69796b40fbf4890912a6))

## [6.10.0](https://github.com/qlik-trial/sprout-css/compare/v6.9.0...v6.10.0) (2025-06-23)

### Features

- **DLS-160:** add Select.OptionCreate ([#580](https://github.com/qlik-trial/sprout-css/issues/580)) ([043a888](https://github.com/qlik-trial/sprout-css/commit/043a88882590b1e641a7f4884745d0ec7a67c2d2))
- **DLS-211/SegmentedControl:** create it ([#587](https://github.com/qlik-trial/sprout-css/issues/587)) ([ba91714](https://github.com/qlik-trial/sprout-css/commit/ba9171412471fb59ae928cee17d97df3799a050a))
- **DLS-355/Table:** add Message component support for norows state ([#583](https://github.com/qlik-trial/sprout-css/issues/583)) ([19d3017](https://github.com/qlik-trial/sprout-css/commit/19d3017784ecddb07d94e70427813fb9461f204f))

### Bug Fixes

- **Accordion/TMC-4206:** align icon in the Header ([#590](https://github.com/qlik-trial/sprout-css/issues/590)) ([88f9cd2](https://github.com/qlik-trial/sprout-css/commit/88f9cd268409e122640e39f47c8c3f7257f39c17))
- padding on label ([#588](https://github.com/qlik-trial/sprout-css/issues/588)) ([f10e6f9](https://github.com/qlik-trial/sprout-css/commit/f10e6f93f9b958d34ec6afa68cbd659cd7c4f02a))

### Chore Work

- **storybook:** fix dark mode ([#585](https://github.com/qlik-trial/sprout-css/issues/585)) ([dc4afc1](https://github.com/qlik-trial/sprout-css/commit/dc4afc184ac8632c18ac71c0fb808c750e8df44f))
- **translations:** UI bus - 2025-06-13 ([#584](https://github.com/qlik-trial/sprout-css/issues/584)) ([019adbc](https://github.com/qlik-trial/sprout-css/commit/019adbcf67a6f6ced4af4ea6f03017618531b2ab)), closes [#576](https://github.com/qlik-trial/sprout-css/issues/576)
- update npm dependencies ([#591](https://github.com/qlik-trial/sprout-css/issues/591)) ([ab17cca](https://github.com/qlik-trial/sprout-css/commit/ab17cca02b6885baf78c5ff9c30f098b91fde7d2))

## [6.9.0](https://github.com/qlik-trial/sprout-css/compare/v6.8.0...v6.9.0) (2025-06-16)

### Features

- **DLS-346/Table:** add row interactive + row selection ([#576](https://github.com/qlik-trial/sprout-css/issues/576)) ([4d70ee7](https://github.com/qlik-trial/sprout-css/commit/4d70ee7ce37a61d7bad059269986166820299cca))

### Bug Fixes

- css order in all react components ([#581](https://github.com/qlik-trial/sprout-css/issues/581)) ([93adec5](https://github.com/qlik-trial/sprout-css/commit/93adec5a7c6394bf05db2ef41b41fd352054d330))

### Chore Work

- add/update .depConfig.yaml ([#574](https://github.com/qlik-trial/sprout-css/issues/574)) ([e3267d6](https://github.com/qlik-trial/sprout-css/commit/e3267d6f5e4f629dd9cba4d32f2c5a6e92d13104))
- update npm dependencies ([#582](https://github.com/qlik-trial/sprout-css/issues/582)) ([58b0d06](https://github.com/qlik-trial/sprout-css/commit/58b0d060ea87f8b3936a8c0b24e1737c1b2d9b42))

## [6.8.0](https://github.com/qlik-trial/sprout-css/compare/v6.7.0...v6.8.0) (2025-06-09)

### Features

- **MultiSelect:** add filter control ([#568](https://github.com/qlik-trial/sprout-css/issues/568)) ([5c445e2](https://github.com/qlik-trial/sprout-css/commit/5c445e23664bb18b077ada0b08f80f98c38c0547))
- **Table/DLS-50:** add support of @tanstack/react-virtual ([#570](https://github.com/qlik-trial/sprout-css/issues/570)) ([26bdf43](https://github.com/qlik-trial/sprout-css/commit/26bdf43c87cedbd9c0527bafeecd59324e25e744))

### Chore Work

- **DLS-50/Table:** move the tanstack code ([#571](https://github.com/qlik-trial/sprout-css/issues/571)) ([61c3e53](https://github.com/qlik-trial/sprout-css/commit/61c3e53e9a04247987a2aabcb02e92d1d2a71b2d))
- **Table:** rename overflowX props ([#573](https://github.com/qlik-trial/sprout-css/issues/573)) ([dd51a6f](https://github.com/qlik-trial/sprout-css/commit/dd51a6f6247e6878209e7e33f67b6ab9fbdc9e94))
- update npm dependencies ([#572](https://github.com/qlik-trial/sprout-css/issues/572)) ([a6d95b0](https://github.com/qlik-trial/sprout-css/commit/a6d95b0c3f2f2a198535628a0973890b1e1a78e9))

## [6.7.0](https://github.com/qlik-trial/sprout-css/compare/v6.6.1...v6.7.0) (2025-06-04)

### Features

- **DLS-50/Table:** CellActionWrapper and ContextualIconButton ([#566](https://github.com/qlik-trial/sprout-css/issues/566)) ([cdd4e3a](https://github.com/qlik-trial/sprout-css/commit/cdd4e3a92010b88e10292ad93a97889d12008f52))

### Bug Fixes

- **Table:** variant is now a props only at the Table level ([#569](https://github.com/qlik-trial/sprout-css/issues/569)) ([6dd6d1f](https://github.com/qlik-trial/sprout-css/commit/6dd6d1ffc7e0a269d3ef41b4c13c730609cfd408))

### Chore Work

- **storybook:** upgrade to 9.0 ([#565](https://github.com/qlik-trial/sprout-css/issues/565)) ([06b5dea](https://github.com/qlik-trial/sprout-css/commit/06b5dea243842de9b32482047bd388b2da49e4ba))

## [6.6.1](https://github.com/qlik-trial/sprout-css/compare/v6.6.0...v6.6.1) (2025-06-03)

### Bug Fixes

- **Modal:** update z-index to align with MUI ([#567](https://github.com/qlik-trial/sprout-css/issues/567)) ([a729b58](https://github.com/qlik-trial/sprout-css/commit/a729b589896d051e4d41ceb94eaa5e79094856d0))

## [6.6.0](https://github.com/qlik-trial/sprout-css/compare/v6.5.1...v6.6.0) (2025-06-02)

### Features

- **Modal/TMC-5865:** add data-testid to the DialogHeader ([#557](https://github.com/qlik-trial/sprout-css/issues/557)) ([523fdb3](https://github.com/qlik-trial/sprout-css/commit/523fdb31f59190a22e2be181a4ec6926cfcf1b93))

### Bug Fixes

- **DLS-50/Table:** overflow width sized columns ([#553](https://github.com/qlik-trial/sprout-css/issues/553)) ([120376d](https://github.com/qlik-trial/sprout-css/commit/120376d3f755298ab2c01873e86631c60660e3f7))
- **Menu:** update displayName to follow API ([#560](https://github.com/qlik-trial/sprout-css/issues/560)) ([e8c737e](https://github.com/qlik-trial/sprout-css/commit/e8c737edde471d31010065482cd70d605956fc02))
- **Textarea/Checkbox:** support uncontrolled ([#562](https://github.com/qlik-trial/sprout-css/issues/562)) ([eccdaa2](https://github.com/qlik-trial/sprout-css/commit/eccdaa22402cbad0637a8e563b3120ffe9b5d4ad))
- **TextField:** add all missing props from Field ([#559](https://github.com/qlik-trial/sprout-css/issues/559)) ([015d2c0](https://github.com/qlik-trial/sprout-css/commit/015d2c0565d6d8c731d344191e5bf3ac70d6eac3))
- **TextField:** uncontrolled behavior ([#550](https://github.com/qlik-trial/sprout-css/issues/550)) ([33d1ba7](https://github.com/qlik-trial/sprout-css/commit/33d1ba7e8f59312dcb652acf852fa9cc2170add8))

### Chore Work

- update deployment environments - see https://github.com/qlik-trial/qlik-releaser/blob/master/deployment-environments.md ([#555](https://github.com/qlik-trial/sprout-css/issues/555)) ([9902d0e](https://github.com/qlik-trial/sprout-css/commit/9902d0e180d3eed4f9562d37cc65e2134f9b0ea4))
- update npm dependencies ([#554](https://github.com/qlik-trial/sprout-css/issues/554)) ([6f73fff](https://github.com/qlik-trial/sprout-css/commit/6f73fffea47b296d15f1848fde98b9356733fc1f))
- update npm dependencies ([#561](https://github.com/qlik-trial/sprout-css/issues/561)) ([e2d09ce](https://github.com/qlik-trial/sprout-css/commit/e2d09ce50b4b5ce9f3d795ed8b5ebf0fd563e7bf))

## [6.5.1](https://github.com/qlik-trial/sprout-css/compare/v6.5.0...v6.5.1) (2025-05-23)

### Bug Fixes

- **DLS-260/Select:** Wait before scroll and add viewportPadding ([#552](https://github.com/qlik-trial/sprout-css/issues/552)) ([e1bd3d7](https://github.com/qlik-trial/sprout-css/commit/e1bd3d7fdc02d3340a38e00f6400cc0dc1274dc8))
- **DLS-325/IconButton:** asDropdown ([#548](https://github.com/qlik-trial/sprout-css/issues/548)) ([b11be55](https://github.com/qlik-trial/sprout-css/commit/b11be557ec4cafc7025df3fb5ed833a446974557))
- **Modal:** disable background scroll on Safari ([#544](https://github.com/qlik-trial/sprout-css/issues/544)) ([f8520a5](https://github.com/qlik-trial/sprout-css/commit/f8520a535cf3d547e08c8751d142e5df1ec48902))
- **MultiSelect:** add comma after title in visual test ([#547](https://github.com/qlik-trial/sprout-css/issues/547)) ([507915c](https://github.com/qlik-trial/sprout-css/commit/507915c380209d1530b0278037f4b616f5010c06))
- update frontend-tools ([#543](https://github.com/qlik-trial/sprout-css/issues/543)) ([0f5bbfe](https://github.com/qlik-trial/sprout-css/commit/0f5bbfe2e3092bb88eaa6a11db1adfd7a4df51ac))

### Chore Work

- bump asdf-vm/actions from 3.0.2 to 4.0.0 ([#542](https://github.com/qlik-trial/sprout-css/issues/542)) ([02635ac](https://github.com/qlik-trial/sprout-css/commit/02635ac151bb4942253035b671567ef0acd1c001))
- **component.yaml:** use sprout-ci slack channel ([#545](https://github.com/qlik-trial/sprout-css/issues/545)) ([8602c1b](https://github.com/qlik-trial/sprout-css/commit/8602c1bc7e67ef6fcfa659dba02783af4a6868b1))
- update docs for textfield ([#546](https://github.com/qlik-trial/sprout-css/issues/546)) ([e9db8ae](https://github.com/qlik-trial/sprout-css/commit/e9db8aeea6ae11230710c193756a8f3100c1073b))
- update npm dependencies ([#509](https://github.com/qlik-trial/sprout-css/issues/509)) ([da605ef](https://github.com/qlik-trial/sprout-css/commit/da605ef97117730c2843b525018396e5b5fea270))

## [6.5.0](https://github.com/qlik-trial/sprout-css/compare/v6.4.0...v6.5.0) (2025-05-19)

### Features

- **react:** add classNames named export ([#523](https://github.com/qlik-trial/sprout-css/issues/523)) ([ab122e2](https://github.com/qlik-trial/sprout-css/commit/ab122e221f8cfd3b84f9c23e5394813721aea5e7))

### Bug Fixes

- **AlertBanner:** allow rich content and add link prop ([#539](https://github.com/qlik-trial/sprout-css/issues/539)) ([cdc7bd6](https://github.com/qlik-trial/sprout-css/commit/cdc7bd6aa6079c9e12da977759821cfa0e3f1938))
- **DLS-260/Select:** update placement when at the bottom ([#511](https://github.com/qlik-trial/sprout-css/issues/511)) ([af0169a](https://github.com/qlik-trial/sprout-css/commit/af0169a366e1d4023460e03a6108c23f86b67afe))
- **DLS-310/typography:** deprecate getTypographyClassName ([#528](https://github.com/qlik-trial/sprout-css/issues/528)) ([407a656](https://github.com/qlik-trial/sprout-css/commit/407a6562078701a28022638949545e4186f67e38))
- **DLS-310:** deprecate getBoxProps ([#529](https://github.com/qlik-trial/sprout-css/issues/529)) ([c3586b4](https://github.com/qlik-trial/sprout-css/commit/c3586b4f9a6ca2c76591cd6f1d689b2cd97ed4b8))
- **DLS-313/TextOverflow:** aria-label on truncated text ([#532](https://github.com/qlik-trial/sprout-css/issues/532)) ([5912d64](https://github.com/qlik-trial/sprout-css/commit/5912d64fd3424a533125ae12a6c3f00a55a7a2f4))
- **FloatingPrimitive:** call getTokenInt ([#540](https://github.com/qlik-trial/sprout-css/issues/540)) ([79a512f](https://github.com/qlik-trial/sprout-css/commit/79a512ff847c38360700774b4f2ece189b5b394c))
- **FloatingPrimitive:** close if ancestor is scrolled ([#538](https://github.com/qlik-trial/sprout-css/issues/538)) ([94cbaec](https://github.com/qlik-trial/sprout-css/commit/94cbaec7641fec6a2d15349a670ea089661c95fc))
- **Modal/AlertModal:** disable background scroll when open ([#537](https://github.com/qlik-trial/sprout-css/issues/537)) ([0d8a6fb](https://github.com/qlik-trial/sprout-css/commit/0d8a6fbc4b009bbf5c10df0d53727f7be8dde11b))
- **MultiSelect/TextOverflow:** tooltip when hovering tag ([#531](https://github.com/qlik-trial/sprout-css/issues/531)) ([6525efc](https://github.com/qlik-trial/sprout-css/commit/6525efc595cb611c6dacc534fd2563abc005c874))

### Chore Work

- **CI:** udpate owning team ([#525](https://github.com/qlik-trial/sprout-css/issues/525)) ([5a8a66c](https://github.com/qlik-trial/sprout-css/commit/5a8a66cc62ec93b047ec31f5da16b421f45d5a27))

## [6.4.0](https://github.com/qlik-trial/sprout-css/compare/v6.3.0...v6.4.0) (2025-05-13)

### Features

- **DLS-50/Table:** add focus state to header ([#507](https://github.com/qlik-trial/sprout-css/issues/507)) ([43247ee](https://github.com/qlik-trial/sprout-css/commit/43247ee187a8f3d09786337fcfc8adb165a2e684))
- **TextField/Textarea:** add character count ([#520](https://github.com/qlik-trial/sprout-css/issues/520)) ([43bac36](https://github.com/qlik-trial/sprout-css/commit/43bac367ba27cd29403e2dd0f356f7a7ecf1252f))
- **Toast/TMC-5956:** add data-testid ([#521](https://github.com/qlik-trial/sprout-css/issues/521)) ([3919c54](https://github.com/qlik-trial/sprout-css/commit/3919c54886469f507d66c7eaf6b89070fcc30638))

### Bug Fixes

- **Divider/DLS-268:** allow 100% height and auto width ([#526](https://github.com/qlik-trial/sprout-css/issues/526)) ([469f54a](https://github.com/qlik-trial/sprout-css/commit/469f54aa4fce383ce10572302e3fa5b9a8d6cac5))
- **Modal:** ensure title and description do not get cut off ([#517](https://github.com/qlik-trial/sprout-css/issues/517)) ([f638bf5](https://github.com/qlik-trial/sprout-css/commit/f638bf521974b3db7f6bfbf02d49e7c44f9efdcb))
- **TMC-5956/Toast:** Toast spacing ([#522](https://github.com/qlik-trial/sprout-css/issues/522)) ([fd04708](https://github.com/qlik-trial/sprout-css/commit/fd04708225b31db4a5646434fbe0f747ecc3aa6d))

### Chore Work

- update owning team in component.yaml ([d8e6bd0](https://github.com/qlik-trial/sprout-css/commit/d8e6bd08e87190ca531ffe35259da1cd1db820b8))

## [6.3.0](https://github.com/qlik-trial/sprout-css/compare/v6.2.0...v6.3.0) (2025-05-07)

### Features

- **InputButton:** expose as it's own component ([#510](https://github.com/qlik-trial/sprout-css/issues/510)) ([77ed74e](https://github.com/qlik-trial/sprout-css/commit/77ed74ea78be509f693e36b71f645ac6bfe2d385))

### Bug Fixes

- **DLS-261/Accordion:** activate gesture only when header is focused ([#514](https://github.com/qlik-trial/sprout-css/issues/514)) ([d51f158](https://github.com/qlik-trial/sprout-css/commit/d51f158e841216775b95fa61414759cd5c805edd))
- **DLS-262:** fix Tag's maximum width ([#519](https://github.com/qlik-trial/sprout-css/issues/519)) ([72d0914](https://github.com/qlik-trial/sprout-css/commit/72d0914c496f0cf84f26f933b96d68fbb9511b4e))
- **Modal:** add grow_1 to the body ([#508](https://github.com/qlik-trial/sprout-css/issues/508)) ([81f0f1f](https://github.com/qlik-trial/sprout-css/commit/81f0f1f45aa0adfe2df1049ae9688d13e98131fa))

### Chore Work

- update owners ([#515](https://github.com/qlik-trial/sprout-css/issues/515)) ([3651da4](https://github.com/qlik-trial/sprout-css/commit/3651da4be6cbc24564af5896dcca5e13b85bd2a2))

## [6.2.0](https://github.com/qlik-trial/sprout-css/compare/v6.1.0...v6.2.0) (2025-05-02)

### Features

- add gap between buttons ([#504](https://github.com/qlik-trial/sprout-css/issues/504)) ([aa87543](https://github.com/qlik-trial/sprout-css/commit/aa87543be609364e3854c73e67df719624ea7534))
- adding variant to MenuItem to support destructive appearance ([#506](https://github.com/qlik-trial/sprout-css/issues/506)) ([8845118](https://github.com/qlik-trial/sprout-css/commit/884511824a9efb4275fd0ea39fb77363277c76d7))

### Bug Fixes

- **DLS-250/Tag:** remove button border radius ([#503](https://github.com/qlik-trial/sprout-css/issues/503)) ([b6e1408](https://github.com/qlik-trial/sprout-css/commit/b6e1408d60bfff116c114261dd2e77af6c19bc50))
- **DLS-50/Table:** fixed height ([#501](https://github.com/qlik-trial/sprout-css/issues/501)) ([2a079b9](https://github.com/qlik-trial/sprout-css/commit/2a079b98b17e52104692e63c90955c7cf6c2ba74))

### Chore Work

- **translations:** UI bus - 2025-04-29 ([#505](https://github.com/qlik-trial/sprout-css/issues/505)) ([52cc202](https://github.com/qlik-trial/sprout-css/commit/52cc2028575107446c0f52cb619c0bc293d799eb)), closes [#491](https://github.com/qlik-trial/sprout-css/issues/491)

## [6.1.0](https://github.com/qlik-trial/sprout-css/compare/v6.0.0...v6.1.0) (2025-04-29)

### Features

- **Tabs:** align composition API and update the doc ([#482](https://github.com/qlik-trial/sprout-css/issues/482)) ([7053437](https://github.com/qlik-trial/sprout-css/commit/705343782372495c231d59580690cda2517e0631))

### Bug Fixes

- **Modal:** align close button ([#498](https://github.com/qlik-trial/sprout-css/issues/498)) ([a183cc3](https://github.com/qlik-trial/sprout-css/commit/a183cc31be8f850d23e87d9f89b487af8e275d0f))
- **react:** update all icons ([#500](https://github.com/qlik-trial/sprout-css/issues/500)) ([4be0988](https://github.com/qlik-trial/sprout-css/commit/4be09887288b40a4003c992579b6c1b493bed025))
- **TMC-5324/Table:** manage cell overflow([#446](https://github.com/qlik-trial/sprout-css/issues/446)) ([92d4e1c](https://github.com/qlik-trial/sprout-css/commit/92d4e1cd83a0563d1ddcaaf846da622297297646))

### Chore Work

- update component.yaml ([#497](https://github.com/qlik-trial/sprout-css/issues/497)) ([49b91fc](https://github.com/qlik-trial/sprout-css/commit/49b91fc1c398a03b91e2005b5efad538cc46c53b))
- update npm dependencies ([#496](https://github.com/qlik-trial/sprout-css/issues/496)) ([11f074b](https://github.com/qlik-trial/sprout-css/commit/11f074bfcbdd03771065d75c7a51963d425c966f))

## [6.0.0](https://github.com/qlik-trial/sprout-css/compare/v5.5.3...v6.0.0) (2025-04-28)

### ⚠ BREAKING CHANGES

- **css:** `@qlik/sprout-css-modules` do not uses css @layer anymore.

You may experience side effects due to this change with your own styles. This is due to change in the priority of the css rules. But we will have not suffer from issue when it is used with some reset/normalize css stylesheets.

### Bug Fixes

- **css:** remove [@layer](https://github.com/layer) sprout ([#492](https://github.com/qlik-trial/sprout-css/issues/492)), closes [#435](https://github.com/qlik-trial/sprout-css/issues/435)

### Chore Work

- **DLS-208/CSS:** add https start support in start ([#495](https://github.com/qlik-trial/sprout-css/issues/495)) ([f27b3c9](https://github.com/qlik-trial/sprout-css/commit/f27b3c993535da4986eed9caad4c79889727d882))

## [5.5.3](https://github.com/qlik-trial/sprout-css/compare/v5.5.2...v5.5.3) (2025-04-25)

### Bug Fixes

- **AlertModal:** add data-testid + i18n ([#491](https://github.com/qlik-trial/sprout-css/issues/491)) ([a9420a6](https://github.com/qlik-trial/sprout-css/commit/a9420a69fbd836b0ba83617d01ec0f70f691bbb6))
- **DLS-244/Textarea:** resize ([#489](https://github.com/qlik-trial/sprout-css/issues/489)) ([f2a3d07](https://github.com/qlik-trial/sprout-css/commit/f2a3d07ea409d517f39c65498073459b4ca32f23))
- **MultiSelect:** enforce space after label to avoid recursion ([#494](https://github.com/qlik-trial/sprout-css/issues/494)) ([3ca37fd](https://github.com/qlik-trial/sprout-css/commit/3ca37fdf53b3303fc84bc38ccf35066a3364b9d2))

### Chore Work

- upload sprout-css-modules as a runtime lib ([#493](https://github.com/qlik-trial/sprout-css/issues/493)) ([0e3c047](https://github.com/qlik-trial/sprout-css/commit/0e3c0477e946a545961df7135218bb0daa197cc5))

## [5.5.2](https://github.com/qlik-trial/sprout-css/compare/v5.5.1...v5.5.2) (2025-04-24)

### Bug Fixes

- **Button/DLS-79:** justified button full width + font ([#490](https://github.com/qlik-trial/sprout-css/issues/490)) ([5d56156](https://github.com/qlik-trial/sprout-css/commit/5d56156734350ee99f68f3a2fc12ae004b105cb6))
- **DLS-243/Select:** MenuItem use ellipsis in combobox ([#486](https://github.com/qlik-trial/sprout-css/issues/486)) ([18a8efc](https://github.com/qlik-trial/sprout-css/commit/18a8efcd43523804fc05a97f34066b625191f670))

## [5.5.1](https://github.com/qlik-trial/sprout-css/compare/v5.5.0...v5.5.1) (2025-04-23)

### Bug Fixes

- **DLS-169/Sidenav:** add isExternal support in compact mode ([#476](https://github.com/qlik-trial/sprout-css/issues/476)) ([32b7d7e](https://github.com/qlik-trial/sprout-css/commit/32b7d7e7a71e8d3ba201aa6cec886e2f4a5bce58))
- **FloatingPrimitive:** autoPlacement use default crossAxis ([#479](https://github.com/qlik-trial/sprout-css/issues/479)) ([a27fc8f](https://github.com/qlik-trial/sprout-css/commit/a27fc8fa6023219b96482f3ceabeaf173262f2ca))
- **MultiSelect:** allow search within display text ([#481](https://github.com/qlik-trial/sprout-css/issues/481)) ([dd23ac9](https://github.com/qlik-trial/sprout-css/commit/dd23ac9d6b23871b77f399c4c35f8f4ef339e057))
- **Select:** add missing font_label_s class ([#485](https://github.com/qlik-trial/sprout-css/issues/485)) ([1bf8877](https://github.com/qlik-trial/sprout-css/commit/1bf887748a03950da75289880a0023062e66b832))
- **TMC-4500:** package script build works on windows ([#487](https://github.com/qlik-trial/sprout-css/issues/487)) ([2b9e781](https://github.com/qlik-trial/sprout-css/commit/2b9e781f032208e93b18a34e536e5da3babaaf17))

### Chore Work

- bump actions/cache from 4.2.2 to 4.2.3 ([#453](https://github.com/qlik-trial/sprout-css/issues/453)) ([a0ef6bc](https://github.com/qlik-trial/sprout-css/commit/a0ef6bc3f6047172ac8364e52cd4d561165db506))
- bump qlik-trial/qmfe-workflows from 3 to 4 ([#462](https://github.com/qlik-trial/sprout-css/issues/462)) ([e3b4242](https://github.com/qlik-trial/sprout-css/commit/e3b42422a837f541dac24842888cabd5f5802556))
- remove gh-pages workflow ([#484](https://github.com/qlik-trial/sprout-css/issues/484)) ([7b8e64b](https://github.com/qlik-trial/sprout-css/commit/7b8e64bd1fdc0d9cdaf19c5d2d1f0b252faff12e))
- **translations:** UI bus - 2025-04-11 ([#480](https://github.com/qlik-trial/sprout-css/issues/480)) ([07a74db](https://github.com/qlik-trial/sprout-css/commit/07a74db2f5822b6d7724777b396537bc73a3f022)), closes [#430](https://github.com/qlik-trial/sprout-css/issues/430)
- update npm dependencies ([#474](https://github.com/qlik-trial/sprout-css/issues/474)) ([0483d77](https://github.com/qlik-trial/sprout-css/commit/0483d77fdda076830366afd4c989179dcef9817a))

## [5.5.0](https://github.com/qlik-trial/sprout-css/compare/v5.4.0...v5.5.0) (2025-04-10)

### Features

- **DLS-204:** add InlineEdit.Select and InlineEdit.MultiSelect ([#430](https://github.com/qlik-trial/sprout-css/issues/430)) ([7db9732](https://github.com/qlik-trial/sprout-css/commit/7db9732aa353f672e63caa4f85b7ae2343a4c5ba))

## [5.4.0](https://github.com/qlik-trial/sprout-css/compare/v5.3.0...v5.4.0) (2025-04-07)

### Features

- **DLS-208:** add UMD output of sprout-css-modules ([#456](https://github.com/qlik-trial/sprout-css/issues/456)) ([cce3f6d](https://github.com/qlik-trial/sprout-css/commit/cce3f6d45b9d5d3354e4f3164ffe87af6b6c9374))

### Bug Fixes

- **DLS-210:** Select and Multi rework ([#445](https://github.com/qlik-trial/sprout-css/issues/445)) ([bfdb8ec](https://github.com/qlik-trial/sprout-css/commit/bfdb8ec6288d6bc943b7241b8887c65abe0fa358))

### Chore Work

- add/update .depConfig.yaml ([#471](https://github.com/qlik-trial/sprout-css/issues/471)) ([eb7326a](https://github.com/qlik-trial/sprout-css/commit/eb7326a97843f6e003481544dc5a83e32fa74f76))

## [5.3.0](https://github.com/qlik-trial/sprout-css/compare/v5.2.0...v5.3.0) (2025-04-03)

### Features

- **CSS:** add fill\_\* classnames ([#465](https://github.com/qlik-trial/sprout-css/issues/465)) ([9f566f2](https://github.com/qlik-trial/sprout-css/commit/9f566f24656f37712e7cd7f3ebf8fc029ea85ca8))

### Bug Fixes

- **Accordion:** overflow + text_start on header label and description ([#460](https://github.com/qlik-trial/sprout-css/issues/460)) ([2472ecc](https://github.com/qlik-trial/sprout-css/commit/2472ecc2cc35f178946788403101c7bd1722e8f0))
- **CSS:** add missing layers ([#466](https://github.com/qlik-trial/sprout-css/issues/466)) ([8434c1f](https://github.com/qlik-trial/sprout-css/commit/8434c1fe3e5562b7a41164df33a4d88a47f745d5))
- **DLS-208:** remove complex selectors for jsdom ([#464](https://github.com/qlik-trial/sprout-css/issues/464)) ([3f097d5](https://github.com/qlik-trial/sprout-css/commit/3f097d53dce55e6a3ded30f0c7e108fb2b1cdeb2))
- **Modal:** add types of container on the root ([#470](https://github.com/qlik-trial/sprout-css/issues/470)) ([a51abe0](https://github.com/qlik-trial/sprout-css/commit/a51abe03923fdf8aa40cac3261c919e9fe667c8a))

### Chore Work

- add/update .depConfig.yaml ([#469](https://github.com/qlik-trial/sprout-css/issues/469)) ([1e0f013](https://github.com/qlik-trial/sprout-css/commit/1e0f0135bc955a7c3c3378642d0e2570c2ac8957))
- **translations:** UI bus - 2025-03-28 ([#463](https://github.com/qlik-trial/sprout-css/issues/463)) ([6f710d8](https://github.com/qlik-trial/sprout-css/commit/6f710d86ca86bd4a7cc99074275553195682760b)), closes [#443](https://github.com/qlik-trial/sprout-css/issues/443)
- update npm dependencies ([#447](https://github.com/qlik-trial/sprout-css/issues/447)) ([df7eed4](https://github.com/qlik-trial/sprout-css/commit/df7eed41ba40732d39a457b80d6d26a962789a14))

## [5.2.0](https://github.com/qlik-trial/sprout-css/compare/v5.1.0...v5.2.0) (2025-03-31)

### Features

- **CSS:** add outlines ([#458](https://github.com/qlik-trial/sprout-css/issues/458)) ([72828a9](https://github.com/qlik-trial/sprout-css/commit/72828a937d96820c0578d3a2486db860a4919890))
- **DLS-23/FieldLabel:** add info and optional props ([#443](https://github.com/qlik-trial/sprout-css/issues/443)) ([12acb0f](https://github.com/qlik-trial/sprout-css/commit/12acb0fae8001a73c39828ccc1a634a1cdf3d87b))
- **DLS-52/AlertModal:** add the component ([#164](https://github.com/qlik-trial/sprout-css/issues/164)) ([525eb3c](https://github.com/qlik-trial/sprout-css/commit/525eb3c54d6954c1a6c37d5bdebfe77a1fe5f780))

### Bug Fixes

- **AlertBanner:** remove native paragraph margin ([#459](https://github.com/qlik-trial/sprout-css/issues/459)) ([9ed453c](https://github.com/qlik-trial/sprout-css/commit/9ed453ce2c7a1b8d2471f7d5c6e43f4df76df7ca))
- **DLS-200:** Toast update ([#428](https://github.com/qlik-trial/sprout-css/issues/428)) ([e6c6b3f](https://github.com/qlik-trial/sprout-css/commit/e6c6b3f4576d74843fd16465e12e5de174073f7b))
- **Panel:** resize callback and initial width ([#457](https://github.com/qlik-trial/sprout-css/issues/457)) ([773f82b](https://github.com/qlik-trial/sprout-css/commit/773f82b6fd1a69e1ea26914bbd437abfd758c410))
- **TextField:** readOnly background ([#461](https://github.com/qlik-trial/sprout-css/issues/461)) ([3a52787](https://github.com/qlik-trial/sprout-css/commit/3a52787ce9311faba70755743457413290c9e516))

### Chore Work

- **CI:** use inherit secrets to avoid issues ([da6155b](https://github.com/qlik-trial/sprout-css/commit/da6155bd0ff0bfc7ce2f399c9f6ab557b97b70e4))

## [5.1.0](https://github.com/qlik-trial/sprout-css/compare/v5.0.1...v5.1.0) (2025-03-24)

### Features

- **InlineEdit:** Add customizable data-testid property ([#450](https://github.com/qlik-trial/sprout-css/issues/450)) ([aedd0ac](https://github.com/qlik-trial/sprout-css/commit/aedd0ace73437604d5c42e83785bfbdeaa78ea27))

### Bug Fixes

- **Box:** col class conflict ([#449](https://github.com/qlik-trial/sprout-css/issues/449)) ([61f6b10](https://github.com/qlik-trial/sprout-css/commit/61f6b10c7da440b263cdb37b089fae4db4262f2e))
- **FloatingWrapper:** Add default background to avoid alpha issues ([#452](https://github.com/qlik-trial/sprout-css/issues/452)) ([c03333e](https://github.com/qlik-trial/sprout-css/commit/c03333ee7134071b41b98f50598f3f09fee46bdd))
- **TMC-5552:** update displayName of SideNav.linkItem ([#451](https://github.com/qlik-trial/sprout-css/issues/451)) ([d74de4c](https://github.com/qlik-trial/sprout-css/commit/d74de4c7943d8158998f201a580946a8d547aced))

## [5.0.1](https://github.com/qlik-trial/sprout-css/compare/v5.0.0...v5.0.1) (2025-03-21)

### Bug Fixes

- **CSS:** replace dash with underscores ([#444](https://github.com/qlik-trial/sprout-css/issues/444)) ([55e8ad4](https://github.com/qlik-trial/sprout-css/commit/55e8ad4511c452d78a2f7542603a870fe5a4b0c3))

### Chore Work

- add missing commits thanks to automerge ([55a6925](https://github.com/qlik-trial/sprout-css/commit/55a692558e0a273df2428087d2e1175f0eb8a53e))

## [5.0.0](https://github.com/qlik-trial/sprout-css/compare/v4.9.0...v5.0.0) (2025-03-20)

### ⚠ BREAKING CHANGES

- **DLS-208/css-modules:** `@qlik/sprout-css-modules/src` is not available anymore.

The following imports wont works
import buttonStyle from "@qlik/sprout-css-modules/src/Button.module.css"; // considered internal for DLS only
import "@qlik/sprout-css-modules/src/tokens.css"; // covered by sprout-theme-provider
import "@qlik/sprout-css-modules/src/storybook-preview.css"; // covered by sprout-css-storybook pkg

### Features

- **CSS:** add flex_noreset className ([#440](https://github.com/qlik-trial/sprout-css/issues/440)) ([94a43fe](https://github.com/qlik-trial/sprout-css/commit/94a43fe6023ed0b325eff337169d2083cb119eab))
- **DLS-209/Panel:** add width and height bounding properties ([#439](https://github.com/qlik-trial/sprout-css/issues/439)) ([624d5d2](https://github.com/qlik-trial/sprout-css/commit/624d5d2bf9766af6787243576c6ba7a8c1af3f8b))

### Bug Fixes

- **Checkbox:** overflow label ([#438](https://github.com/qlik-trial/sprout-css/issues/438)) ([fbf046b](https://github.com/qlik-trial/sprout-css/commit/fbf046b3e41b830660f6271ce06009ba9a75ed33))
- **DLS-208/css-modules:** add layer and remove src exported path ([#435](https://github.com/qlik-trial/sprout-css/issues/435)) ([f2b584e](https://github.com/qlik-trial/sprout-css/commit/f2b584ef29205af2954720ef1a7beab4aa8f323c))

### Chore Work

- **CI:** ignore react 19 update ([fefa4c9](https://github.com/qlik-trial/sprout-css/commit/fefa4c98ba5e2ab0d854ee5dd5026593df40a4e4))
- Enforce proper PR template (append 'ways of working' text to PR template) ([#437](https://github.com/qlik-trial/sprout-css/issues/437)) ([d4e95a7](https://github.com/qlik-trial/sprout-css/commit/d4e95a7cea6e3dc93a3a8c1bff6c3929942d13e9))
- update npm dependencies ([#441](https://github.com/qlik-trial/sprout-css/issues/441)) ([811034b](https://github.com/qlik-trial/sprout-css/commit/811034b630ed9cf57112c2ef4f3e7ffab691c92b))

## [4.9.0](https://github.com/qlik-trial/sprout-css/compare/v4.8.1...v4.9.0) (2025-03-19)

### Features

- **DLS-192/InlineEdit:** add a font and view property ([#429](https://github.com/qlik-trial/sprout-css/issues/429)) ([324e49e](https://github.com/qlik-trial/sprout-css/commit/324e49e3f4450a1efd7e43c2966832a014e67a62))

### Bug Fixes

- **DLS-74:** detect dark mode from @storybook/addon-themes ([#436](https://github.com/qlik-trial/sprout-css/issues/436)) ([816bfd0](https://github.com/qlik-trial/sprout-css/commit/816bfd08a4b749fdebe158919f89e4326576edf0))

### Chore Work

- **CI:** update release to ensure we are releasing all packages ([311ff8c](https://github.com/qlik-trial/sprout-css/commit/311ff8cd25e864ba1e248dfc78257a42854c4b80))

## [4.8.1](https://github.com/qlik-trial/sprout-css/compare/v4.8.0...v4.8.1) (2025-03-17)

### Bug Fixes

- **DLS-74/storybook:** assign if defined data attributes ([#434](https://github.com/qlik-trial/sprout-css/issues/434)) ([19b6b9b](https://github.com/qlik-trial/sprout-css/commit/19b6b9b15ffe00fdb3d51e06b762767d0fbfa1fe))

### Chore Work

- **CI:** add missing release step for @qlik/sprout-storybook ([d2d5126](https://github.com/qlik-trial/sprout-css/commit/d2d5126b2324292513e8284fb08e1211b4a44f56))

## [4.8.0](https://github.com/qlik-trial/sprout-css/compare/v4.7.0...v4.8.0) (2025-03-17)

### Features

- **DLS-74:** add storybook plugin and use it ([#426](https://github.com/qlik-trial/sprout-css/issues/426)) ([ad3fbca](https://github.com/qlik-trial/sprout-css/commit/ad3fbcaa13ce333dd29aee3c1449fdc7099d2c85))
- **DLS-74:** use sprout-theme-provider ([#425](https://github.com/qlik-trial/sprout-css/issues/425)) ([b7102ec](https://github.com/qlik-trial/sprout-css/commit/b7102ec680cfdecc7ce5dd8e255e5328f50f2f31))

### Chore Work

- add/update .depConfig.yaml ([#432](https://github.com/qlik-trial/sprout-css/issues/432)) ([ef58be1](https://github.com/qlik-trial/sprout-css/commit/ef58be1a583df13dcf3ee231b152b74fffe28d15))
- **CI:** add missing build step ([1f49a2f](https://github.com/qlik-trial/sprout-css/commit/1f49a2f3eee7763ff0307b6d86df1a02273dd0cb))
- update ([#431](https://github.com/qlik-trial/sprout-css/issues/431)) ([eebf1dd](https://github.com/qlik-trial/sprout-css/commit/eebf1ddfe32b43811cdfb812c56ec4d7d885902c))

## [4.7.0](https://github.com/qlik-trial/sprout-css/compare/v4.6.0...v4.7.0) (2025-03-13)

### Features

- **CSS:** add position classNames ([#424](https://github.com/qlik-trial/sprout-css/issues/424)) ([3fc7ed1](https://github.com/qlik-trial/sprout-css/commit/3fc7ed1c079b4e28e8d090290d176602b0f7f884))

### Bug Fixes

- **DLS-197:** fix icons shrinking with button text overflows ([#417](https://github.com/qlik-trial/sprout-css/issues/417)) ([950b920](https://github.com/qlik-trial/sprout-css/commit/950b920ecee4eef7dc98e7b35730212cbb3d5225))
- **DLS-198/Textarea:** error with scrollbar thin ([#423](https://github.com/qlik-trial/sprout-css/issues/423)) ([163571d](https://github.com/qlik-trial/sprout-css/commit/163571d3318fa4c69884699ccc16c5d9dab179df))
- **DLS-200/Toast:** make it responsive ([#419](https://github.com/qlik-trial/sprout-css/issues/419)) ([307395f](https://github.com/qlik-trial/sprout-css/commit/307395f76b8107f5bb9b7cf08765099e8ffb541e))
- **Modal:** responsive min-width ([#418](https://github.com/qlik-trial/sprout-css/issues/418)) ([7ad26d4](https://github.com/qlik-trial/sprout-css/commit/7ad26d48af0f15dbc4ab6ee812d30222ab992c70))

### Chore Work

- update npm dependencies ([#386](https://github.com/qlik-trial/sprout-css/issues/386)) ([1f1c23d](https://github.com/qlik-trial/sprout-css/commit/1f1c23dc743d71f8ba89a17259abfe2908af3221))

## [4.6.0](https://github.com/qlik-trial/sprout-css/compare/v4.5.1...v4.6.0) (2025-03-07)

### Features

- **DLS-50/Table:** Add TanStackTable column visibility ([#405](https://github.com/qlik-trial/sprout-css/issues/405)) ([b734e42](https://github.com/qlik-trial/sprout-css/commit/b734e427074b42bf516b97e93d410414e84d9f49))

### Bug Fixes

- **Toast:** add max-height and overflow ([#416](https://github.com/qlik-trial/sprout-css/issues/416)) ([bc67b4a](https://github.com/qlik-trial/sprout-css/commit/bc67b4a98670740ccd7e274dfd46bf4f3efc4937))

### Chore Work

- bump actions/cache from 4.2.1 to 4.2.2 ([#412](https://github.com/qlik-trial/sprout-css/issues/412)) ([ea9d6bb](https://github.com/qlik-trial/sprout-css/commit/ea9d6bb538acffa4b501a62ce6af3eae579b12d6))

## [4.5.1](https://github.com/qlik-trial/sprout-css/compare/v4.5.0...v4.5.1) (2025-03-03)

### Bug Fixes

- add `width` prop to modal base props ([#411](https://github.com/qlik-trial/sprout-css/issues/411)) ([1b5cd13](https://github.com/qlik-trial/sprout-css/commit/1b5cd1356f844131a5f5ff473c601845168a24d5))

### Chore Work

- bump actions/cache from 4.2.0 to 4.2.1 ([#401](https://github.com/qlik-trial/sprout-css/issues/401)) ([cf98958](https://github.com/qlik-trial/sprout-css/commit/cf98958491091402f5df61813148c8cdb6e9a544))

## [4.5.0](https://github.com/qlik-trial/sprout-css/compare/v4.4.1...v4.5.0) (2025-02-28)

### Features

- **CSS:** add classNames utility + w_0 h0 grow and shrink ([#407](https://github.com/qlik-trial/sprout-css/issues/407)) ([fc2cd75](https://github.com/qlik-trial/sprout-css/commit/fc2cd751aa60a834558788cc4a902c9574d6a764))
- **CSS:** add display css classes sr_only, hidden, etc... ([#409](https://github.com/qlik-trial/sprout-css/issues/409)) ([58b2ce2](https://github.com/qlik-trial/sprout-css/commit/58b2ce208af723cd07c2ead4ff99ccf43cf44e18))

### Bug Fixes

- **translations:** UI bus - 2025-02-21 ([#404](https://github.com/qlik-trial/sprout-css/issues/404)) ([fd9cd7d](https://github.com/qlik-trial/sprout-css/commit/fd9cd7d8c3f55ccfa81d25912ac1be08685e56fd)), closes [#305](https://github.com/qlik-trial/sprout-css/issues/305) [#395](https://github.com/qlik-trial/sprout-css/issues/395)
- **translations:** UI bus - 2025-02-25 ([#408](https://github.com/qlik-trial/sprout-css/issues/408)) ([e3b1cc2](https://github.com/qlik-trial/sprout-css/commit/e3b1cc296ca7a5094d9c0a1e31a9ff2b1cff8bd5)), closes [#352](https://github.com/qlik-trial/sprout-css/issues/352)

## [4.4.1](https://github.com/qlik-trial/sprout-css/compare/v4.4.0...v4.4.1) (2025-02-25)

### Bug Fixes

- **AlertInline:** support overflow on title and message ([#402](https://github.com/qlik-trial/sprout-css/issues/402)) ([e753cc7](https://github.com/qlik-trial/sprout-css/commit/e753cc7040e839a7ca8c82a2af0647ab383b57ea))
- **DLS-184:** External Link has always the same line height ([#400](https://github.com/qlik-trial/sprout-css/issues/400)) ([041d6f7](https://github.com/qlik-trial/sprout-css/commit/041d6f717441c5145d89b9e6024a49a4e019b7e1))
- **radio:** align with spec ([#399](https://github.com/qlik-trial/sprout-css/issues/399)) ([2af8056](https://github.com/qlik-trial/sprout-css/commit/2af805642eccca6cdeeb69e50136cea44b00603d))

## [4.4.0](https://github.com/qlik-trial/sprout-css/compare/v4.3.0...v4.4.0) (2025-02-24)

### Features

- update major icons ([#398](https://github.com/qlik-trial/sprout-css/issues/398)) ([037f9bd](https://github.com/qlik-trial/sprout-css/commit/037f9bd5e3ee2fcfa358c0458a2b212a16bfab2c))

### Bug Fixes

- **breadcrumb:** updated divider color to be more prominent ([#396](https://github.com/qlik-trial/sprout-css/issues/396)) ([98727d0](https://github.com/qlik-trial/sprout-css/commit/98727d0feb9f1dff1ca32e89dcfd95c520c34534))
- **select/DLS-183:** padding for Select / Multiselect ([#397](https://github.com/qlik-trial/sprout-css/issues/397)) ([dba9c85](https://github.com/qlik-trial/sprout-css/commit/dba9c8587e652c35ccd66dfa0141999970b5889e))

## [4.3.0](https://github.com/qlik-trial/sprout-css/compare/v4.2.2...v4.3.0) (2025-02-21)

### Features

- **DLS-50/typography:** add script_s + emphasized ([#392](https://github.com/qlik-trial/sprout-css/issues/392)) ([96ba9ce](https://github.com/qlik-trial/sprout-css/commit/96ba9ce82a61a40a749967bcf9bfd247fe6ed552))
- **DLS-50:** add i18n plural + interpolation ([#395](https://github.com/qlik-trial/sprout-css/issues/395)) ([93b5ecc](https://github.com/qlik-trial/sprout-css/commit/93b5ecc0aca92254246e2e04d7283bda3827ccf9))
- **DLS-50:** create pure HTML table ([#352](https://github.com/qlik-trial/sprout-css/issues/352)) ([83b89c6](https://github.com/qlik-trial/sprout-css/commit/83b89c6bd1324b6406473d779b534d59193d5506))
- **DLS-50:** make radio and checkbox works with aria-label ([#394](https://github.com/qlik-trial/sprout-css/issues/394)) ([ec1853b](https://github.com/qlik-trial/sprout-css/commit/ec1853b78c804f07de33415890d002f802626bb2))

### Bug Fixes

- **DLS-2/Tag:** bg token is default ([#388](https://github.com/qlik-trial/sprout-css/issues/388)) ([08406ea](https://github.com/qlik-trial/sprout-css/commit/08406eaef2f873651db9c4f75f187df87fb18619))
- **translations:** UI bus - 2025-02-14 ([#389](https://github.com/qlik-trial/sprout-css/issues/389)) ([767f513](https://github.com/qlik-trial/sprout-css/commit/767f5137c3884f766cae02400a5e61477e1fc027)), closes [#318](https://github.com/qlik-trial/sprout-css/issues/318)

### Chore Work

- bump xt0rted/pull-request-comment-branch from 2 to 3 ([#387](https://github.com/qlik-trial/sprout-css/issues/387)) ([81c1568](https://github.com/qlik-trial/sprout-css/commit/81c1568a6c8a47c4987e8c32b1ecbd4f0e3dd367))
- **CI:** adjust acces to env variable ([2ec583a](https://github.com/qlik-trial/sprout-css/commit/2ec583a0961648c805f2c257c1e9a431a6bcea64))
- **CI:** adjust acces to env variable ([3664760](https://github.com/qlik-trial/sprout-css/commit/36647606fcf4bf249544516a1798fe22db31651b))
- **CI:** iterate on deploy-npm script ([4001ae4](https://github.com/qlik-trial/sprout-css/commit/4001ae4ee45607486859461c6279d338b4d234c4))
- **CI:** iterate on deploy-npm script ([df52eee](https://github.com/qlik-trial/sprout-css/commit/df52eee6749b6f1c0acfa06990a8ff04cf6cf092))
- **CI:** iterate on deploy-npm script ([3e0f78f](https://github.com/qlik-trial/sprout-css/commit/3e0f78f625e7d268e3f7f66edf01cc7e1affdac7))
- **CI:** iterate on deploy-npm script ([60dbf4d](https://github.com/qlik-trial/sprout-css/commit/60dbf4d1c3cc7ffde620dbf3e815628c25b7b775))
- **CI:** make the release work in PR ([#391](https://github.com/qlik-trial/sprout-css/issues/391)) ([bdabe6a](https://github.com/qlik-trial/sprout-css/commit/bdabe6a890c1ad975027028db0b4cac1efcfcad3))
- **CI:** pin asdf 0.15 ([#393](https://github.com/qlik-trial/sprout-css/issues/393)) ([af63690](https://github.com/qlik-trial/sprout-css/commit/af636900e8253adcb835a7e39754a9561aea54e2))
- renaming release-it.json to .release-it.json ([fa93b31](https://github.com/qlik-trial/sprout-css/commit/fa93b318c9c43ae8772b676efdd09d1fdc63fa66))

## [4.2.1](https://github.com/qlik-trial/sprout-css/compare/v4.2.0...v4.2.1) (2025-02-17)

### Bug Fixes

- add missing export of Thumbnail ([a839b9e](https://github.com/qlik-trial/sprout-css/commit/a839b9e5fdda75a995e033e702fdf10423c569b7))
- **DLS-173:** switch should not shrink in a small container ([#379](https://github.com/qlik-trial/sprout-css/issues/379)) ([06c35a0](https://github.com/qlik-trial/sprout-css/commit/06c35a0db3f79dd5d6cd396aed9a525cb317f4b5))
- remove type=module still not ESM ([#382](https://github.com/qlik-trial/sprout-css/issues/382)) ([55f16e8](https://github.com/qlik-trial/sprout-css/commit/55f16e80a62ceacac9a3aca19f1dcd7d55e398e5))
- **TMC-5032/Message:** title text align is centered ([#376](https://github.com/qlik-trial/sprout-css/issues/376)) ([579ad1e](https://github.com/qlik-trial/sprout-css/commit/579ad1e7ed5014a8a3940c18b8b6fb1497ad7338))
- **TMC-5032/Message:** font-size ([#377](https://github.com/qlik-trial/sprout-css/issues/377)) ([46cdd32](https://github.com/qlik-trial/sprout-css/commit/46cdd327996b67547242788c77095ca9bcd7a1a7))
- **translations:** UI bus - 2025-02-11 ([#380](https://github.com/qlik-trial/sprout-css/issues/380)) ([3594704](https://github.com/qlik-trial/sprout-css/commit/3594704ae60d88db4970548c75e5bb606b5b426d)), closes [#371](https://github.com/qlik-trial/sprout-css/issues/371)

### Chore Work

- **CI:** add deploy-npm script ([#385](https://github.com/qlik-trial/sprout-css/issues/385)) ([07788b2](https://github.com/qlik-trial/sprout-css/commit/07788b2b5a300d1b3e7f472962aa5e14456a3254))
- **CI:** remove enforce types ([a9ca65e](https://github.com/qlik-trial/sprout-css/commit/a9ca65efebc63917737a4e63f5ad6a249781a1ef))
- Update CODEOWNERS ([#378](https://github.com/qlik-trial/sprout-css/issues/378)) ([016316e](https://github.com/qlik-trial/sprout-css/commit/016316efbc18ae270e1d0b3cbdb620774477914b))

## [4.2.0](https://github.com/qlik-trial/sprout-css/compare/v4.1.0...v4.2.0) (2025-02-12)

### Features

- **DLS-21:** add Panel ([#318](https://github.com/qlik-trial/sprout-css/issues/318)) ([01161c2](https://github.com/qlik-trial/sprout-css/commit/01161c262186e785f8392b24b30def696b6921f4))
- **DLS-46:** add SideNav ([#273](https://github.com/qlik-trial/sprout-css/issues/273)) ([1e888f8](https://github.com/qlik-trial/sprout-css/commit/1e888f8f52f55a5e0ca1c929ac48f9548008d9e6))

### Bug Fixes

- **DLS-170/AlertInline:** accept children for structured text ([#373](https://github.com/qlik-trial/sprout-css/issues/373)) ([86d71be](https://github.com/qlik-trial/sprout-css/commit/86d71be18cfae50a3183f447c49a8802cf8f8f91))
- panel lint ([#375](https://github.com/qlik-trial/sprout-css/issues/375)) ([2373a57](https://github.com/qlik-trial/sprout-css/commit/2373a57dbbbcb0252172aa93064a7fdff1dcc498))
- use logical props in sprout ([#374](https://github.com/qlik-trial/sprout-css/issues/374)) ([c51ec0b](https://github.com/qlik-trial/sprout-css/commit/c51ec0b3cfcd64e486d6a130d9a882a65b6b855c))

## [4.1.0](https://github.com/qlik-trial/sprout-css/compare/v4.0.0...v4.1.0) (2025-02-10)

### Features

- **DLS-57:** add i18n support ([#342](https://github.com/qlik-trial/sprout-css/issues/342)) ([48f7316](https://github.com/qlik-trial/sprout-css/commit/48f7316aeda65e538a1d64e5a6a773fa6f3174ba))

### Bug Fixes

- add type and main field in package.json for webpack ([#371](https://github.com/qlik-trial/sprout-css/issues/371)) ([f6a1f61](https://github.com/qlik-trial/sprout-css/commit/f6a1f611a51ad530abe147ddf820bd4c6aedc239))

## [4.0.0](https://github.com/qlik-trial/sprout-css/compare/v3.16.0...v4.0.0) (2025-02-07)

### ⚠ BREAKING CHANGES

- if you use tool that require CJS like jest you must transpile this module.

### Features

- **DLS-4:** add sizing tokens ([#360](https://github.com/qlik-trial/sprout-css/issues/360)) ([a2d2cdd](https://github.com/qlik-trial/sprout-css/commit/a2d2cdd40d9df9b00ac434162a9ae189a3d64bb0))
- **DLS-87:** add InlineEdit ([#277](https://github.com/qlik-trial/sprout-css/issues/277)) ([38aafc8](https://github.com/qlik-trial/sprout-css/commit/38aafc810f0a78f2b0368c2e91d3dcf4ad02c9fb))

### Bug Fixes

- **DLS-164/Popover:** shift+tab kept in focustrap ([#367](https://github.com/qlik-trial/sprout-css/issues/367)) ([9a1b1cf](https://github.com/qlik-trial/sprout-css/commit/9a1b1cf470de9c790eadf14a107d3b3bfea14b2f))
- drop CJS support BREAKING ([#365](https://github.com/qlik-trial/sprout-css/issues/365)) ([5b3cdc8](https://github.com/qlik-trial/sprout-css/commit/5b3cdc830f8bafdfb6b3ef66c5fe97a9ab964da7))
- **Tooltip:** omit title from native attributes before specify it ([#366](https://github.com/qlik-trial/sprout-css/issues/366)) ([f112513](https://github.com/qlik-trial/sprout-css/commit/f1125133ec50e5cafc39cfd0e66dca36f059f572))

### Chore Work

- add/update .depConfig.yaml ([#363](https://github.com/qlik-trial/sprout-css/issues/363)) ([d419809](https://github.com/qlik-trial/sprout-css/commit/d419809be11e5cdac96fa5048d1e97cdfb9443f2))

## [3.16.0](https://github.com/qlik-trial/sprout-css/compare/v3.15.0...v3.16.0) (2025-01-30)

### Features

- **css:** logical props for RTL ([#361](https://github.com/qlik-trial/sprout-css/issues/361)) ([c4d90a3](https://github.com/qlik-trial/sprout-css/commit/c4d90a3edc0077191150d47b664cfbc95b5e084b))

### Bug Fixes

- **Typography:** avoid usage of [@import](https://github.com/import) url at the moment ([#362](https://github.com/qlik-trial/sprout-css/issues/362)) ([7bc98f0](https://github.com/qlik-trial/sprout-css/commit/7bc98f0aadf2f980700ef54befaa7aac53060cd4))

### Chore Work

- update npm dependencies ([#351](https://github.com/qlik-trial/sprout-css/issues/351)) ([d2a2e45](https://github.com/qlik-trial/sprout-css/commit/d2a2e45b377ade2f5c91a77062dfb98ebbc042e7))

## [3.15.0](https://github.com/qlik-trial/sprout-css/compare/v3.14.1...v3.15.0) (2025-01-29)

### Features

- add reason to onChange ([#355](https://github.com/qlik-trial/sprout-css/issues/355)) ([10f3bad](https://github.com/qlik-trial/sprout-css/commit/10f3badb6787060e59c3bcaa1d6f121e4be34a99))
- **Box:** support `direction="row-reverse"` and `direction="col-reverse"` ([#356](https://github.com/qlik-trial/sprout-css/issues/356)) ([fee85f0](https://github.com/qlik-trial/sprout-css/commit/fee85f05d70f3a98e7931ef7ea3c59e60b6eacba))
- **DLS-18/stylelint:** add z-index lint rule ([#340](https://github.com/qlik-trial/sprout-css/issues/340)) ([973412e](https://github.com/qlik-trial/sprout-css/commit/973412e9ba54fd8714071cf98381325cddcd5db5))
- **DLS-4:** create a css utility ala tailwind ([#327](https://github.com/qlik-trial/sprout-css/issues/327)) ([856ee3e](https://github.com/qlik-trial/sprout-css/commit/856ee3e97b0c780a2414f1470cb260078b230c99))

### Bug Fixes

- element.ref warning for deprecated api ([#354](https://github.com/qlik-trial/sprout-css/issues/354)) ([79c6865](https://github.com/qlik-trial/sprout-css/commit/79c68656d8ef0696b2bc4539aba9e66556904676))

## [3.14.1](https://github.com/qlik-trial/sprout-css/compare/v3.14.0...v3.14.1) (2025-01-27)

### Bug Fixes

- **AlertBanner:** Set wrapper align items to center ([#353](https://github.com/qlik-trial/sprout-css/issues/353)) ([67cd9e2](https://github.com/qlik-trial/sprout-css/commit/67cd9e2cb7b2b5ce3b7a21672889bfb94554e01c))
- **DLS-134:** move the dismiss as absolute so the content is really centered ([#350](https://github.com/qlik-trial/sprout-css/issues/350)) ([8bd9819](https://github.com/qlik-trial/sprout-css/commit/8bd9819c835908d393009b37539c77fc550f514e))

## [3.14.0](https://github.com/qlik-trial/sprout-css/compare/v3.13.0...v3.14.0) (2025-01-24)

### Features

- **DLS-100:** add Badge in Tabs ([#345](https://github.com/qlik-trial/sprout-css/issues/345)) ([261669c](https://github.com/qlik-trial/sprout-css/commit/261669c5bb0870e3f35f1c99e3765ff3499300ee))
- **DLS-134/AlertBanner:** add justify=center option ([#346](https://github.com/qlik-trial/sprout-css/issues/346)) ([bd2995f](https://github.com/qlik-trial/sprout-css/commit/bd2995f1cc17573e8479ba2d2053cadbc5783a5b))
- **DLS-138/Link:** add font property ([#328](https://github.com/qlik-trial/sprout-css/issues/328)) ([02f18db](https://github.com/qlik-trial/sprout-css/commit/02f18dbef8392deee008ec7a509dcf55eb1d6eee))
- **DLS-99:** Add ToggleButton Badge composition ([#344](https://github.com/qlik-trial/sprout-css/issues/344)) ([5e028be](https://github.com/qlik-trial/sprout-css/commit/5e028be7e2e1cdef78d86d7d132901e0e422a7a4))

## [3.13.0](https://github.com/qlik-trial/sprout-css/compare/v3.12.2...v3.13.0) (2025-01-22)

### Features

- **DLS-144/Popover:** FloatingPrimitive trap focus if role="dialog" ([#321](https://github.com/qlik-trial/sprout-css/issues/321)) ([38288ee](https://github.com/qlik-trial/sprout-css/commit/38288eee09248038433473cc7c912351c9578951))
- **DLS-147:** add FloatingWrapper ([#338](https://github.com/qlik-trial/sprout-css/issues/338)) ([850e2a6](https://github.com/qlik-trial/sprout-css/commit/850e2a6ccda8748682df6eaeaef226e5e5511b57))
- **DLS-151/TextField:** add useField props ([#339](https://github.com/qlik-trial/sprout-css/issues/339)) ([a3dd61b](https://github.com/qlik-trial/sprout-css/commit/a3dd61b2d0bb22687770ae635d5aa62c729da7bf))
- **ListItem:** selected decoration is based on the ListItem height ([#337](https://github.com/qlik-trial/sprout-css/issues/337)) ([6b83927](https://github.com/qlik-trial/sprout-css/commit/6b8392721015aef0068e2f6e68c9e8ea38db0ccd))

### Bug Fixes

- **prettier:** prettier usage on Windows ([#335](https://github.com/qlik-trial/sprout-css/issues/335)) ([0613201](https://github.com/qlik-trial/sprout-css/commit/0613201646a4b267cf2dc1e7531e1a8901ca412e))
- update npm dependencies and fix FloatingPrimitive issue ([#336](https://github.com/qlik-trial/sprout-css/issues/336)) ([32e9a89](https://github.com/qlik-trial/sprout-css/commit/32e9a89c6ad3424aed0836e870599d8687857306))

## [3.12.2](https://github.com/qlik-trial/sprout-css/compare/v3.12.1...v3.12.2) (2025-01-17)

### Bug Fixes

- **Menu/Trigger:** Remove maxWidth and minWidth props ([#334](https://github.com/qlik-trial/sprout-css/issues/334)) ([4b10bae](https://github.com/qlik-trial/sprout-css/commit/4b10bae1536fa9b0d45d06e14bb96d350664b2ce))
- **TMC-4499:** Link overflow ([#333](https://github.com/qlik-trial/sprout-css/issues/333)) ([87078e4](https://github.com/qlik-trial/sprout-css/commit/87078e427c45a036faf631ec980cba4f6f76a4a7))

## [3.12.1](https://github.com/qlik-trial/sprout-css/compare/v3.12.0...v3.12.1) (2025-01-16)

### Bug Fixes

- **Link:** add test cases ([#330](https://github.com/qlik-trial/sprout-css/issues/330)) ([95d1a1e](https://github.com/qlik-trial/sprout-css/commit/95d1a1e358797f738f85e17ad9d7eb3eb0558f8f))
- **Menu/Select:** add support for png ([#331](https://github.com/qlik-trial/sprout-css/issues/331)) ([51738f3](https://github.com/qlik-trial/sprout-css/commit/51738f3237098d713139613125ce0d31bbed9e69))
- **Select:** overflow ([#329](https://github.com/qlik-trial/sprout-css/issues/329)) ([266fa74](https://github.com/qlik-trial/sprout-css/commit/266fa7465aa1187e300dc91a21eb949f872a069d))

### Chore Work

- update frontend-tools / storybook / vite ([#332](https://github.com/qlik-trial/sprout-css/issues/332)) ([9cb8857](https://github.com/qlik-trial/sprout-css/commit/9cb885706879cc2e58cb01248290903407ef00b2))

## [3.12.0](https://github.com/qlik-trial/sprout-css/compare/v3.11.2...v3.12.0) (2025-01-15)

### Features

- **Box:** add zIndex props ([#326](https://github.com/qlik-trial/sprout-css/issues/326)) ([d06aa58](https://github.com/qlik-trial/sprout-css/commit/d06aa588194b4243bbe9eef5f5dbea3034390224))

### Bug Fixes

- **Tag:** improve overflow ([#325](https://github.com/qlik-trial/sprout-css/issues/325)) ([ef91a5a](https://github.com/qlik-trial/sprout-css/commit/ef91a5aa64987e3ae0e0bf2b8278ce9117732e24))

## [3.11.2](https://github.com/qlik-trial/sprout-css/compare/v3.11.1...v3.11.2) (2025-01-14)

### Bug Fixes

- **Menu:** Use image as menu entry icon ([#322](https://github.com/qlik-trial/sprout-css/issues/322)) ([4442892](https://github.com/qlik-trial/sprout-css/commit/4442892fd0555683b97aca73ed66b399f672f1c2))
- **ThemeProvider:** should work with previous manual setup ([#324](https://github.com/qlik-trial/sprout-css/issues/324)) ([f301a36](https://github.com/qlik-trial/sprout-css/commit/f301a36b197831e65ec7411305aa71b0d70f9de5))

## [3.11.1](https://github.com/qlik-trial/sprout-css/compare/v3.11.0...v3.11.1) (2025-01-13)

### Bug Fixes

- **DLS-139:** affix as props in textfield ([#320](https://github.com/qlik-trial/sprout-css/issues/320)) ([f8930de](https://github.com/qlik-trial/sprout-css/commit/f8930deb25ff29eae79a47011c5ed6faa3382596))

## [3.11.0](https://github.com/qlik-trial/sprout-css/compare/v3.10.0...v3.11.0) (2025-01-13)

### Features

- **DLS-74:** create a ThemeProvider ([#317](https://github.com/qlik-trial/sprout-css/issues/317)) ([fc30dfc](https://github.com/qlik-trial/sprout-css/commit/fc30dfc795d251bb2fafac8b9a10370696850c97))

### Bug Fixes

- **ThemeProvider:** props || context || global || default ([#319](https://github.com/qlik-trial/sprout-css/issues/319)) ([5a06e44](https://github.com/qlik-trial/sprout-css/commit/5a06e44e9e3010867865b16aa912a03d42eb1103))

## [3.10.0](https://github.com/qlik-trial/sprout-css/compare/v3.9.2...v3.10.0) (2025-01-10)

### Features

- **DLS-24:** update affixes API ([#302](https://github.com/qlik-trial/sprout-css/issues/302)) ([b8214f6](https://github.com/qlik-trial/sprout-css/commit/b8214f62f29966ca0362504b6310e913834da235))

### Bug Fixes

- **Tooltip:** should not be displayed if not title are passed ([#316](https://github.com/qlik-trial/sprout-css/issues/316)) ([8b3dabe](https://github.com/qlik-trial/sprout-css/commit/8b3dabe75c09908e3b310cb57f192c036b3bef1f))

## [3.9.2](https://github.com/qlik-trial/sprout-css/compare/v3.9.1...v3.9.2) (2025-01-07)

### Bug Fixes

- **z-index:** add default value ([#314](https://github.com/qlik-trial/sprout-css/issues/314)) ([8462b18](https://github.com/qlik-trial/sprout-css/commit/8462b182666f5536d20e9111598abc80769a78c1))

## [3.9.1](https://github.com/qlik-trial/sprout-css/compare/v3.9.0...v3.9.1) (2025-01-06)

### Bug Fixes

- **Alert\*:** cleanup icons ([#310](https://github.com/qlik-trial/sprout-css/issues/310)) ([d7ed8da](https://github.com/qlik-trial/sprout-css/commit/d7ed8da6047c63a42cce7da74661059d179d960f))
- **Box:** improve performance ([#311](https://github.com/qlik-trial/sprout-css/issues/311)) ([ada7cb9](https://github.com/qlik-trial/sprout-css/commit/ada7cb93a50efd8746382ddb7b7110a3476e5bc7))
- **DLS-133/FloatingPrimitive:** use capture phase for escape ([#313](https://github.com/qlik-trial/sprout-css/issues/313)) ([7116bd8](https://github.com/qlik-trial/sprout-css/commit/7116bd8de44bf7c10b97be3ea6b6405fa571de4c))

## [3.9.0](https://github.com/qlik-trial/sprout-css/compare/v3.8.0...v3.9.0) (2025-01-02)

### Features

- **DLS-5/Box:** add bgColor and boxShadow and width uses container tokens ([#303](https://github.com/qlik-trial/sprout-css/issues/303)) ([b46d578](https://github.com/qlik-trial/sprout-css/commit/b46d5783bd85fa3ef49754107ea067597ebbd9a5))

### Bug Fixes

- **Accordion:** header bg color reset ([#301](https://github.com/qlik-trial/sprout-css/issues/301)) ([354ada0](https://github.com/qlik-trial/sprout-css/commit/354ada09ce72f4cdaa95faecb7f95a32f442081c))
- **AlertBanner/AlertInline/Textfield/Modal/Menu/MultiSelect:** apply common color token ([#304](https://github.com/qlik-trial/sprout-css/issues/304)) ([a0bd5c1](https://github.com/qlik-trial/sprout-css/commit/a0bd5c1528b093a63536fcb18b4500ebec78bd67))

### Chore Work

- **CI:** unplug code-connect:publish on release ([#307](https://github.com/qlik-trial/sprout-css/issues/307)) ([869964d](https://github.com/qlik-trial/sprout-css/commit/869964d99057cfd9be89744b84ba42b97236d8f3))

## [3.8.0](https://github.com/qlik-trial/sprout-css/compare/v3.7.1...v3.8.0) (2024-12-18)

### Features

- **DLS-22:** add Toast ([#280](https://github.com/qlik-trial/sprout-css/issues/280)) ([6fb897a](https://github.com/qlik-trial/sprout-css/commit/6fb897a5e023dd4e3c7a647fd3436c4e3cf4ffc3))
- **DLS-56:** add Thumbnail ([#299](https://github.com/qlik-trial/sprout-css/issues/299)) ([73a1e5e](https://github.com/qlik-trial/sprout-css/commit/73a1e5ef3820c7ef2f81f75001c28c98d5ff0ec8))

### Chore Work

- **CI:** add code-connect:check ([#300](https://github.com/qlik-trial/sprout-css/issues/300)) ([a42e744](https://github.com/qlik-trial/sprout-css/commit/a42e7441d59801405900b04444ab5d0396e213f0))

## [3.7.1](https://github.com/qlik-trial/sprout-css/compare/v3.7.0...v3.7.1) (2024-12-17)

### Bug Fixes

- **Modal:** take care of the role aria-modal ([#297](https://github.com/qlik-trial/sprout-css/issues/297)) ([d55cb5a](https://github.com/qlik-trial/sprout-css/commit/d55cb5a4a92fbf3f1a2a1d65a95303c127481110))

## [3.7.0](https://github.com/qlik-trial/sprout-css/compare/v3.6.0...v3.7.0) (2024-12-16)

### Features

- **Select:** add maxWidth and placementUpdate props ([#292](https://github.com/qlik-trial/sprout-css/issues/292)) ([45ef31e](https://github.com/qlik-trial/sprout-css/commit/45ef31ec0e8e41ae16cd9627f8c291538b60942a))

### Bug Fixes

- **DLS-107/Modal:** return focus to initiator ([#293](https://github.com/qlik-trial/sprout-css/issues/293)) ([3a683eb](https://github.com/qlik-trial/sprout-css/commit/3a683ebde3b1a94df8ca310cde11ba2657e6c50f))
- **IconButton:** use aria-label in priority ([#295](https://github.com/qlik-trial/sprout-css/issues/295)) ([707e98f](https://github.com/qlik-trial/sprout-css/commit/707e98fd459233f853b69cf26133e81377c34628))
- **ListItem:** use font label s and color foreground default ([#294](https://github.com/qlik-trial/sprout-css/issues/294)) ([6da4cea](https://github.com/qlik-trial/sprout-css/commit/6da4ceaa8bb3e84728391c04a64658ec521b3795))

## [3.6.0](https://github.com/qlik-trial/sprout-css/compare/v3.5.1...v3.6.0) (2024-12-12)

### Features

- **DLS-99/DLS-96/Badge:** add selected variant and integrate it ([#288](https://github.com/qlik-trial/sprout-css/issues/288)) ([031f2ef](https://github.com/qlik-trial/sprout-css/commit/031f2ef480e729f8dc24b46591584d2c7b74e37f))

### Bug Fixes

- **DLS-48/Button/secondary:** update token used ([#278](https://github.com/qlik-trial/sprout-css/issues/278)) ([b13eac6](https://github.com/qlik-trial/sprout-css/commit/b13eac64cfc8d4df622426854a48af2dbcc22d55))
- **Modal:** Fix focus when modal is shown from another modal ([#290](https://github.com/qlik-trial/sprout-css/issues/290)) ([a98e088](https://github.com/qlik-trial/sprout-css/commit/a98e088657dea3450e77650b690714e20b4a3560))
- **Modal:** pass preventEscaping to ModalHeader ([#291](https://github.com/qlik-trial/sprout-css/issues/291)) ([66631de](https://github.com/qlik-trial/sprout-css/commit/66631de00248cc59a3b69a62d7133144067d9c48))

## [3.5.1](https://github.com/qlik-trial/sprout-css/compare/v3.5.0...v3.5.1) (2024-12-10)

### Bug Fixes

- **Badge:** code connect ([7c252a9](https://github.com/qlik-trial/sprout-css/commit/7c252a9bd5d12ff4554e1cd99a6862f6d76a629f))

## [3.5.0](https://github.com/qlik-trial/sprout-css/compare/v3.4.0...v3.5.0) (2024-12-10)

### Features

- **Message:** message accept ReactNode ([#285](https://github.com/qlik-trial/sprout-css/issues/285)) ([258a845](https://github.com/qlik-trial/sprout-css/commit/258a8452ea8b390252021c64110472ce1a14c325))

### Bug Fixes

- **Modal:** add tabIndex=0 to modal container and prevent Tab outside ([#284](https://github.com/qlik-trial/sprout-css/issues/284)) ([be62b94](https://github.com/qlik-trial/sprout-css/commit/be62b94181982c0a7f969eec6a4d8b3b01a373d9))
- **Modal:** Move footer actions at the bottom when setting width as f… ([#283](https://github.com/qlik-trial/sprout-css/issues/283)) ([5adadd2](https://github.com/qlik-trial/sprout-css/commit/5adadd2b16fa841bee61fdabcba30da1107c4a5a))
- **Stepper:** Export the component ([#286](https://github.com/qlik-trial/sprout-css/issues/286)) ([2485704](https://github.com/qlik-trial/sprout-css/commit/2485704f28f45cc0752a83672be71dd2ff2b5168))
- **Stepper:** Prevent scrollbar to be always displayed ([#287](https://github.com/qlik-trial/sprout-css/issues/287)) ([fa23ef5](https://github.com/qlik-trial/sprout-css/commit/fa23ef50719e5e39aa6217dee3d1bf811b165e0b))
- **Stepper:** Remove default margins ([#289](https://github.com/qlik-trial/sprout-css/issues/289)) ([0c31980](https://github.com/qlik-trial/sprout-css/commit/0c3198076903402a91094eb3fd805c0ea850ee9d))

## [3.4.0](https://github.com/qlik-trial/sprout-css/compare/v3.3.2...v3.4.0) (2024-12-10)

### Features

- **DLS-46/Box:** add borderRadius and density tokens ([#274](https://github.com/qlik-trial/sprout-css/issues/274)) ([47d366c](https://github.com/qlik-trial/sprout-css/commit/47d366cb840e67d25c5b9a538248e8caf31a0bb9))
- **Typography:** add ellipsis option ([#279](https://github.com/qlik-trial/sprout-css/issues/279)) ([6998c24](https://github.com/qlik-trial/sprout-css/commit/6998c24fb353856da8864570b262ed11301034ba))

### Bug Fixes

- **Tag:** add forwardref so tooltip is working ([#275](https://github.com/qlik-trial/sprout-css/issues/275)) ([a7628f2](https://github.com/qlik-trial/sprout-css/commit/a7628f284d74c299471f818dad41800228f74630))

### Chore Work

- bump actions/cache from 4.1.2 to 4.2.0 ([#281](https://github.com/qlik-trial/sprout-css/issues/281)) ([fc37027](https://github.com/qlik-trial/sprout-css/commit/fc37027b8ef4d93ef75df28301228fadd6347a2c))

## [3.3.2](https://github.com/qlik-trial/sprout-css/compare/v3.3.1...v3.3.2) (2024-12-04)

### Bug Fixes

- **List:** code connect ([0e3f33c](https://github.com/qlik-trial/sprout-css/commit/0e3f33c2abc8f00a3d9c5ac5b38986d862cf4d70))

## [3.3.1](https://github.com/qlik-trial/sprout-css/compare/v3.3.0...v3.3.1) (2024-12-04)

### Bug Fixes

- **Button/DLS-10:** secondary text color ([#270](https://github.com/qlik-trial/sprout-css/issues/270)) ([19e0503](https://github.com/qlik-trial/sprout-css/commit/19e0503d3ee4a4937afaa9a65bd13a42578711c9))
- **Button/IconButton:** remove label constraint ([#272](https://github.com/qlik-trial/sprout-css/issues/272)) ([e740bca](https://github.com/qlik-trial/sprout-css/commit/e740bcaa83ea5ea1af39c600f41f74db9d415c75))
- **DLS-80/List:** let the content control the padding ([#271](https://github.com/qlik-trial/sprout-css/issues/271)) ([f2bf205](https://github.com/qlik-trial/sprout-css/commit/f2bf2057a715859460b3bbfd19f7493d22d33fe0))

## [3.3.0](https://github.com/qlik-trial/sprout-css/compare/v3.2.1...v3.3.0) (2024-12-03)

### Features

- **DLS-70/ButtonGroup:** refactor to support SplitButton ([#269](https://github.com/qlik-trial/sprout-css/issues/269)) ([23b6396](https://github.com/qlik-trial/sprout-css/commit/23b63968ad2f4ebde3adbb57efdcf551c311d67c))
- **Modal/DLS-72:** add new modal sizes ([#265](https://github.com/qlik-trial/sprout-css/issues/265)) ([dc6fc85](https://github.com/qlik-trial/sprout-css/commit/dc6fc8537593251585d340f87a0b643da86d8d9e))

### Bug Fixes

- **linter/css:** use the package design-tokens ([#266](https://github.com/qlik-trial/sprout-css/issues/266)) ([95fd65d](https://github.com/qlik-trial/sprout-css/commit/95fd65daa4261d0248725b7f62cece622072f184))
- **Menu:** add placementUpdate props ([#262](https://github.com/qlik-trial/sprout-css/issues/262)) ([3a4405b](https://github.com/qlik-trial/sprout-css/commit/3a4405b4c0b5d63db5f1324a5b14d278b1bea544))
- **Select/Menu:** break words when overflow ([#263](https://github.com/qlik-trial/sprout-css/issues/263)) ([79667c8](https://github.com/qlik-trial/sprout-css/commit/79667c8ceea73f5d2e20f60c89683fbddf48e3b1))
- **Tooltip:** refactor to use FloatingPrimitive ([#259](https://github.com/qlik-trial/sprout-css/issues/259)) ([157c6e4](https://github.com/qlik-trial/sprout-css/commit/157c6e4e1f9e854e83ab7c7d383c5eb3db81c587))

### Chore Work

- update npm dependencies ([#267](https://github.com/qlik-trial/sprout-css/issues/267)) ([020770e](https://github.com/qlik-trial/sprout-css/commit/020770e748791ab7905c17a55c17213150fb0225))

## [3.2.1](https://github.com/qlik-trial/sprout-css/compare/v3.2.0...v3.2.1) (2024-11-28)

### Bug Fixes

- **DLS-75/MultiSelect:** update reference by calling setReference ([#254](https://github.com/qlik-trial/sprout-css/issues/254)) ([41b917d](https://github.com/qlik-trial/sprout-css/commit/41b917dceb942bc817fd119739852f97579f7793))
- **Multiselect:** update missing tag labels once options are rendered ([#258](https://github.com/qlik-trial/sprout-css/issues/258)) ([d2709ba](https://github.com/qlik-trial/sprout-css/commit/d2709bab9362869d6ced987cbaf7cd1cec64d743))

### Chore Work

- update tokens copy ([#257](https://github.com/qlik-trial/sprout-css/issues/257)) ([894d45c](https://github.com/qlik-trial/sprout-css/commit/894d45c7ccbfdfe380c45cf6e18cb61ad9792715))

## [3.2.0](https://github.com/qlik-trial/sprout-css/compare/v3.1.0...v3.2.0) (2024-11-26)

### Features

- **Modal/DLS-72:** add full screen with margin ([#253](https://github.com/qlik-trial/sprout-css/issues/253)) ([b6d76dd](https://github.com/qlik-trial/sprout-css/commit/b6d76dd0e144e9ba97f38e01d48b3f40a4be44d6))

### Bug Fixes

- **DLS-76/Switch:** remove empty span if label is not passed on switch component ([#255](https://github.com/qlik-trial/sprout-css/issues/255)) ([85f0fa4](https://github.com/qlik-trial/sprout-css/commit/85f0fa46d32df038639869b443a011ad1914587f))
- **Tooltip:** use word-wrap to break words ([#256](https://github.com/qlik-trial/sprout-css/issues/256)) ([4029be2](https://github.com/qlik-trial/sprout-css/commit/4029be22b826ebb9e475f214a13b8658e2e11efe))

## [3.1.0](https://github.com/qlik-trial/sprout-css/compare/v3.0.1...v3.1.0) (2024-11-25)

### Features

- **DLS-50/Table:** init agGrid theme based on tokens ([#176](https://github.com/qlik-trial/sprout-css/issues/176)) ([dc465e9](https://github.com/qlik-trial/sprout-css/commit/dc465e9e9c26bb6eae3eeffda23c956747742303))

### Bug Fixes

- make it work ([d956b8f](https://github.com/qlik-trial/sprout-css/commit/d956b8fc6b92343980e45f5aaa66b9351e812077))
- renderOrClone merge props and ref and MultiSelect overflow ([#252](https://github.com/qlik-trial/sprout-css/issues/252)) ([85e1a41](https://github.com/qlik-trial/sprout-css/commit/85e1a410def37480d5103cf316d11dd81f27ab9b))
- **Typography:** typo in deprecated property name ([#251](https://github.com/qlik-trial/sprout-css/issues/251)) ([59a381a](https://github.com/qlik-trial/sprout-css/commit/59a381a1744a90903504492ca3e53994e255dd55))

## [3.0.1](https://github.com/qlik-trial/sprout-css/compare/v3.0.0...v3.0.1) (2024-11-21)

### Bug Fixes

- **Box:** add OverflowProps missing types ([#243](https://github.com/qlik-trial/sprout-css/issues/243)) ([776230d](https://github.com/qlik-trial/sprout-css/commit/776230d0000092551334a6130bd103e894818212))
- **DLS-64:** field inuput error icons ([#240](https://github.com/qlik-trial/sprout-css/issues/240)) ([317d881](https://github.com/qlik-trial/sprout-css/commit/317d8818a1bc0dd8a49e250b4621580304c26107))
- **Menu.Contextual:** add controlled version for open ([#246](https://github.com/qlik-trial/sprout-css/issues/246)) ([19f8d6f](https://github.com/qlik-trial/sprout-css/commit/19f8d6f4b4110778528075803ef00d967a8b5115))
- **Menu:** Trigger ref is passed Contextual close onClick ([#245](https://github.com/qlik-trial/sprout-css/issues/245)) ([bf0a012](https://github.com/qlik-trial/sprout-css/commit/bf0a0122f918d392ebe43709c89f6373c0c078e4))
- **Multiselect:** Remove typescript error in storybook ([#242](https://github.com/qlik-trial/sprout-css/issues/242)) ([59800b9](https://github.com/qlik-trial/sprout-css/commit/59800b9178e3d8aa4b14fa835fb0740025a5cff7))
- **SelectOption:** Add description ([#247](https://github.com/qlik-trial/sprout-css/issues/247)) ([e706a9f](https://github.com/qlik-trial/sprout-css/commit/e706a9fe80f00d81a0e17eed8cdb461bd15fdde4))
- **TextArea:** have the default width at 100% when resizable ([#244](https://github.com/qlik-trial/sprout-css/issues/244)) ([f981b7b](https://github.com/qlik-trial/sprout-css/commit/f981b7b2da907cb09604acc53466f230c7899274))

## [3.0.0](https://github.com/qlik-trial/sprout-css/compare/v2.10.1...v3.0.0) (2024-11-20)

### ⚠ BREAKING CHANGES

```diff
-      <Popover content={content}>
+      <Popover content={content} p="xl" pb="m">
```

### docs

- update ([f0679b2](https://github.com/qlik-trial/sprout-css/commit/f0679b264bb4cdc996f1b84437b7c16b35d8a6a3))

### Features

- **DLS-7/Multiselect:** add the component ([#190](https://github.com/qlik-trial/sprout-css/issues/190)) ([6537d33](https://github.com/qlik-trial/sprout-css/commit/6537d33e6df65f63b830b4049d2ceea9408dd4b3))
- **Menu and Popover:** make them accessible ([#227](https://github.com/qlik-trial/sprout-css/issues/227)) ([fa3e62a](https://github.com/qlik-trial/sprout-css/commit/fa3e62a11376f9fc93edcbfe0cc1d8785d2409bb))

### Chore Work

- update npm dependencies ([#234](https://github.com/qlik-trial/sprout-css/issues/234)) ([ee3bd0b](https://github.com/qlik-trial/sprout-css/commit/ee3bd0b542b07ac6214b7f4e7801e2a310e054e2))

## [2.10.1](https://github.com/qlik-trial/sprout-css/compare/v2.10.0...v2.10.1) (2024-11-20)

### Bug Fixes

- **Button/DLS-62:** add title when label is too long ([#238](https://github.com/qlik-trial/sprout-css/issues/238)) ([294faae](https://github.com/qlik-trial/sprout-css/commit/294faae75baa6504a4c30b7548ae77dec9fa76fe))

## [2.10.0](https://github.com/qlik-trial/sprout-css/compare/v2.9.1...v2.10.0) (2024-11-19)

### Features

- **DLS-7/DLS-31/Select:** update the context provider structure ([#229](https://github.com/qlik-trial/sprout-css/issues/229)) ([78bba2c](https://github.com/qlik-trial/sprout-css/commit/78bba2c51201a1ea0b75cb357342ba2ad1145e60))

### Bug Fixes

- **Button/DLS-62:** label overflow ([#237](https://github.com/qlik-trial/sprout-css/issues/237)) ([2c5aba6](https://github.com/qlik-trial/sprout-css/commit/2c5aba6ef9223e43cc56c12a240f6948323b582e))
- **Input:** Prevent pointer events on clear IconButton ([#230](https://github.com/qlik-trial/sprout-css/issues/230)) ([0bd830e](https://github.com/qlik-trial/sprout-css/commit/0bd830ec6818266ca4acf3196d403e1130bed341))
- **List:** remove console.log ([#235](https://github.com/qlik-trial/sprout-css/issues/235)) ([7d50685](https://github.com/qlik-trial/sprout-css/commit/7d50685fcae98be5aad78512e920777ec19a6be0))
- **Select:** remove dd icon transform ([#232](https://github.com/qlik-trial/sprout-css/issues/232)) ([fcdc6fd](https://github.com/qlik-trial/sprout-css/commit/fcdc6fdb496874238c524018b306085bfbdbcc5c))

### Chore Work

- add eslint no-console ([#236](https://github.com/qlik-trial/sprout-css/issues/236)) ([7259999](https://github.com/qlik-trial/sprout-css/commit/7259999e9ce98d0277cb0b384624e2f5bcaf6163))

## [2.9.1](https://github.com/qlik-trial/sprout-css/compare/v2.9.0...v2.9.1) (2024-11-14)

### Bug Fixes

- **List:** make every interactive sub element on top of the side button ([#228](https://github.com/qlik-trial/sprout-css/issues/228)) ([8f02822](https://github.com/qlik-trial/sprout-css/commit/8f02822bb46f248c3e8e10305a2d5517ef116d55))

## [2.9.0](https://github.com/qlik-trial/sprout-css/compare/v2.8.0...v2.9.0) (2024-11-14)

### Features

- **DLS-40/Select:** add readOnly state ([#222](https://github.com/qlik-trial/sprout-css/issues/222)) ([909fa99](https://github.com/qlik-trial/sprout-css/commit/909fa99e7cf811d83dab03e567fd1253f3a65b7c))
- **List:** make interactive compatible with button inside + a11y ([#225](https://github.com/qlik-trial/sprout-css/issues/225)) ([afe1b45](https://github.com/qlik-trial/sprout-css/commit/afe1b453be1e0efba8fd76d985f0f8c5ce3fc697))

### Bug Fixes

- a11y of AlertBanner and AlertInline ([#214](https://github.com/qlik-trial/sprout-css/issues/214)) ([edf5c03](https://github.com/qlik-trial/sprout-css/commit/edf5c03e2b8b3d4565f13a010ddbcc07f76c8376))
- **Avatar:** a11y and documentation ([#217](https://github.com/qlik-trial/sprout-css/issues/217)) ([2581c98](https://github.com/qlik-trial/sprout-css/commit/2581c985d6d8c264dda4b21cc3dd46552e0c0adb))
- **Menu:** controlled props open onOpenChange ([#224](https://github.com/qlik-trial/sprout-css/issues/224)) ([aedea1c](https://github.com/qlik-trial/sprout-css/commit/aedea1ccb4c8255ea24b49116711b8cd40b15af9))
- **Menu:** update gap from L to M ([#213](https://github.com/qlik-trial/sprout-css/issues/213)) ([26363d2](https://github.com/qlik-trial/sprout-css/commit/26363d2dcf001ac03c0d4dff331d2617147988a3))
- **Message:** add a11y documentation and fix props override order ([#215](https://github.com/qlik-trial/sprout-css/issues/215)) ([b91a84b](https://github.com/qlik-trial/sprout-css/commit/b91a84ba0c6734f6b99f0728634d16bec7bb2669))
- **Modal:** add missing data-testid + review a11y ([#216](https://github.com/qlik-trial/sprout-css/issues/216)) ([29fd734](https://github.com/qlik-trial/sprout-css/commit/29fd734ab3e97b24eb8526455ada85f7ab8ac29b))
- **Tabs:** a11y review ([#223](https://github.com/qlik-trial/sprout-css/issues/223)) ([77aa3f7](https://github.com/qlik-trial/sprout-css/commit/77aa3f767cd7d7a2bd245c1849f62ab8d0613735))
- **TextField & Textarea:** review a11y ([#219](https://github.com/qlik-trial/sprout-css/issues/219)) ([04b5de1](https://github.com/qlik-trial/sprout-css/commit/04b5de1b2b88d7637b3b9f6a2ab6e33c7c93499d))

### Chore Work

- update npm dependencies ([#226](https://github.com/qlik-trial/sprout-css/issues/226)) ([5832880](https://github.com/qlik-trial/sprout-css/commit/5832880d68d3d2cf005552b81ac6427bc15e6c00))

## [2.8.0](https://github.com/qlik-trial/sprout-css/compare/v2.7.0...v2.8.0) (2024-11-04)

### Features

- **Tag:** add Link and Button ([#204](https://github.com/qlik-trial/sprout-css/issues/204)) ([0dbf4f0](https://github.com/qlik-trial/sprout-css/commit/0dbf4f0e7e9ed87ebdd4c6bc01f09c23e769e35e))

### Bug Fixes

- **Switch:** dense and a11y and animation ([#209](https://github.com/qlik-trial/sprout-css/issues/209)) ([9a670e2](https://github.com/qlik-trial/sprout-css/commit/9a670e288c2df5109fae06a4f6d78308abee014b))
- Tag small and IconButton small (from Input) ([#211](https://github.com/qlik-trial/sprout-css/issues/211)) ([ee3e6d7](https://github.com/qlik-trial/sprout-css/commit/ee3e6d77c053acdbe1c9ca5c802111c28a300139))
- **ToggleButton:** add aria-pressed ([#206](https://github.com/qlik-trial/sprout-css/issues/206)) ([27f22c0](https://github.com/qlik-trial/sprout-css/commit/27f22c0661e452cef5d1c5db4d9fb6edfd939a36))

### Chore Work

- bump actions/cache from 4.1.1 to 4.1.2 ([#205](https://github.com/qlik-trial/sprout-css/issues/205)) ([9a1b7d4](https://github.com/qlik-trial/sprout-css/commit/9a1b7d4ab797dcde6560e428eef307492090b3ea))
- update npm dependencies ([#210](https://github.com/qlik-trial/sprout-css/issues/210)) ([1ba0c76](https://github.com/qlik-trial/sprout-css/commit/1ba0c76e404de8176c54d813772bec5434f2030c))

## [2.7.0](https://github.com/qlik-trial/sprout-css/compare/v2.6.5...v2.7.0) (2024-10-30)

### Features

- **ProgressBar:** add label + a11y ([#197](https://github.com/qlik-trial/sprout-css/issues/197)) ([5d559b6](https://github.com/qlik-trial/sprout-css/commit/5d559b6f0cafb82a346f826a62be2691cd9e90fa))
- **Stepper:** add component ([#196](https://github.com/qlik-trial/sprout-css/issues/196)) ([fe81cb9](https://github.com/qlik-trial/sprout-css/commit/fe81cb9e51e579251e95c06b7b4d08cc7967d543))

### Bug Fixes

- **ButtonGroup:** add role=group ([#207](https://github.com/qlik-trial/sprout-css/issues/207)) ([91b40ab](https://github.com/qlik-trial/sprout-css/commit/91b40ab4955a0480e0f081c7cd59328f66633682))
- **ProgressCircular:** accessibility review ([#208](https://github.com/qlik-trial/sprout-css/issues/208)) ([4eb3153](https://github.com/qlik-trial/sprout-css/commit/4eb3153f179fd60f76312f1b54ac0fed9a4892ce))

## [2.6.5](https://github.com/qlik-trial/sprout-css/compare/v2.6.4...v2.6.5) (2024-10-29)

### Bug Fixes

- remove console.logs ([#200](https://github.com/qlik-trial/sprout-css/issues/200)) ([41488e7](https://github.com/qlik-trial/sprout-css/commit/41488e7c67a801a2164e2b03425b71d317a67790))
- **Tooltip:** do not mount content based on id ([#203](https://github.com/qlik-trial/sprout-css/issues/203)) ([0ae6a9d](https://github.com/qlik-trial/sprout-css/commit/0ae6a9d3e4adfbdefa1f6ab0fc073b8e3f0f8bb0))
- use correct token in button:enabled ([#198](https://github.com/qlik-trial/sprout-css/issues/198)) ([f6bdcbd](https://github.com/qlik-trial/sprout-css/commit/f6bdcbd3ac4aa7c91be7aa105698ead71f71ccb6))

### Chore Work

- update npm dependencies ([#199](https://github.com/qlik-trial/sprout-css/issues/199)) ([e6b1fb5](https://github.com/qlik-trial/sprout-css/commit/e6b1fb5e8b61f937df7ab237da246082a9947b6b))

## [2.6.4](https://github.com/qlik-trial/sprout-css/compare/v2.6.3...v2.6.4) (2024-10-25)

### Bug Fixes

- **RadioGroup:** add a11y docs and tests ([#185](https://github.com/qlik-trial/sprout-css/issues/185)) ([6e0f960](https://github.com/qlik-trial/sprout-css/commit/6e0f960f1e41ae72259bce82aa8e97639a5d0a5a))

## [2.6.3](https://github.com/qlik-trial/sprout-css/compare/v2.6.2...v2.6.3) (2024-10-25)

### Bug Fixes

- **Button:** add content wrapper ([#192](https://github.com/qlik-trial/sprout-css/issues/192)) ([ce62282](https://github.com/qlik-trial/sprout-css/commit/ce62282421f4dd87f03dbdd222bd852f47974f98))
- **Select:** refactor Select to keep focus on the combobox ([#191](https://github.com/qlik-trial/sprout-css/issues/191)) ([9647780](https://github.com/qlik-trial/sprout-css/commit/9647780a32bc96fbc8499ecc679ad425edfadfd7))

### Chore Work

- update npm dependencies ([#187](https://github.com/qlik-trial/sprout-css/issues/187)) ([89598f3](https://github.com/qlik-trial/sprout-css/commit/89598f30829edf2af1b77ac2936208ffb1fd68d2))

## [2.6.2](https://github.com/qlik-trial/sprout-css/compare/v2.6.1...v2.6.2) (2024-10-23)

### Chore Work

- **Message:** Add data-testid and set max width on container ([#195](https://github.com/qlik-trial/sprout-css/issues/195)) ([b8c2d70](https://github.com/qlik-trial/sprout-css/commit/b8c2d701b34e76852ba20bd9fcb98dd01f809c40))
- update the copy of our tokens ([#194](https://github.com/qlik-trial/sprout-css/issues/194)) ([d73745b](https://github.com/qlik-trial/sprout-css/commit/d73745b377c9741971bdd5bc4171be74ce6ba106))

## [2.6.1](https://github.com/qlik-trial/sprout-css/compare/v2.6.0...v2.6.1) (2024-10-23)

### Bug Fixes

- **Message:** Set maximum width for the message and center text ([#193](https://github.com/qlik-trial/sprout-css/issues/193)) ([c6b9c2f](https://github.com/qlik-trial/sprout-css/commit/c6b9c2f46e9290b8f67a70107b4e218af7d8aeb5))

## [2.6.0](https://github.com/qlik-trial/sprout-css/compare/v2.5.0...v2.6.0) (2024-10-22)

### Features

- **Checkbox:** add helpText ([#182](https://github.com/qlik-trial/sprout-css/issues/182)) ([84f0cfc](https://github.com/qlik-trial/sprout-css/commit/84f0cfc225d2ef9ed3ea6a5443a4f42b31c35b2b))

### Bug Fixes

- **Message:** Make message property optional ([#189](https://github.com/qlik-trial/sprout-css/issues/189)) ([c304392](https://github.com/qlik-trial/sprout-css/commit/c3043922bb2271c358b9c8825f5e8332d1c8ed59))
- **RadioGroup:** use ReactNode as label property type ([#183](https://github.com/qlik-trial/sprout-css/issues/183)) ([28638c5](https://github.com/qlik-trial/sprout-css/commit/28638c528fac1e96b5b98520c0e23c16f20d6b19))
- **Select/DLS-25:** a11y and error borders ([#172](https://github.com/qlik-trial/sprout-css/issues/172)) ([0287b32](https://github.com/qlik-trial/sprout-css/commit/0287b32bf5a0b99002050642f882a6de28d8f809))

### Chore Work

- bump actions/cache from 4.1.0 to 4.1.1 ([#177](https://github.com/qlik-trial/sprout-css/issues/177)) ([9074a1b](https://github.com/qlik-trial/sprout-css/commit/9074a1bd5e5cf01546f7c1196e9013d2ab9badb2))
- revert breaking changes ([#186](https://github.com/qlik-trial/sprout-css/issues/186)) ([e4aca2e](https://github.com/qlik-trial/sprout-css/commit/e4aca2edd9807355c99c7668ed6771e2424339b3))

## [2.5.0](https://github.com/qlik-trial/sprout-css/compare/v2.4.1...v2.5.0) (2024-10-16)

### Features

- **Breadcrumb:** add composition and fix a11y ([#171](https://github.com/qlik-trial/sprout-css/issues/171)) ([324f30a](https://github.com/qlik-trial/sprout-css/commit/324f30a1ba5022b70d79ba6e472d73be301ee75a))
- **Tabs:** add code connect ([#179](https://github.com/qlik-trial/sprout-css/issues/179)) ([4c63678](https://github.com/qlik-trial/sprout-css/commit/4c63678905ebb3a1cb7c1b3caad7566765b5a5f4))

### Bug Fixes

- **Link:** Fix lint error on selector order ([#178](https://github.com/qlik-trial/sprout-css/issues/178)) ([de92cf9](https://github.com/qlik-trial/sprout-css/commit/de92cf9eb81a8818fcb4998f8f0c7b43e3b4f127))
- **List:** align with the spec ([#155](https://github.com/qlik-trial/sprout-css/issues/155)) ([886e1fe](https://github.com/qlik-trial/sprout-css/commit/886e1fef64dee37aa441530db55ab8e7a8a0c166))
- **Tooltip:** merge refs ([#180](https://github.com/qlik-trial/sprout-css/issues/180)) ([9b3815a](https://github.com/qlik-trial/sprout-css/commit/9b3815a8e545d0fbc4f8e9863aa8fc7b8fdc8bb2))

## [2.4.1](https://github.com/qlik-trial/sprout-css/compare/v2.4.0...v2.4.1) (2024-10-15)

### Bug Fixes

- **Modal:** accept floating-ui element focus ([#175](https://github.com/qlik-trial/sprout-css/issues/175)) ([d04640a](https://github.com/qlik-trial/sprout-css/commit/d04640a4fff9df8e310e48aa6a3c48fa3b23725f))

### Chore Work

- update npm dependencies ([#174](https://github.com/qlik-trial/sprout-css/issues/174)) ([af86dbd](https://github.com/qlik-trial/sprout-css/commit/af86dbd01851bd8cd6dc72ebeb7e41d4e207b762))

## [2.4.0](https://github.com/qlik-trial/sprout-css/compare/v2.3.0...v2.4.0) (2024-10-12)

### Features

- **Button:** add asDropdown, ButtonFloating, justified ([#168](https://github.com/qlik-trial/sprout-css/issues/168)) ([f7c9eb8](https://github.com/qlik-trial/sprout-css/commit/f7c9eb8ebaef0e2ae00d92ad63a9c923868f2a37))

### Bug Fixes

- **Message:** update gaps according to specs ([#173](https://github.com/qlik-trial/sprout-css/issues/173)) ([2709997](https://github.com/qlik-trial/sprout-css/commit/2709997803d94f6619755518337de9b47fe76f2b))

## [2.3.0](https://github.com/qlik-trial/sprout-css/compare/v2.2.4...v2.3.0) (2024-10-09)

### Features

- **Accordion:** add level to use semantic tag / a11y review ([#159](https://github.com/qlik-trial/sprout-css/issues/159)) ([a34450f](https://github.com/qlik-trial/sprout-css/commit/a34450feeab25568f76e96e3fb3af351bd952807))
- **Badge:** improve badge props ([#139](https://github.com/qlik-trial/sprout-css/issues/139)) ([ce9a034](https://github.com/qlik-trial/sprout-css/commit/ce9a034f91182893d68552c3d8f2d5945634d60b))
- **Typography:** Add color and font option to getTypographyClassName helper ([#167](https://github.com/qlik-trial/sprout-css/issues/167)) ([124de79](https://github.com/qlik-trial/sprout-css/commit/124de793076f630a06f66373624b735c58e36d41))

### Bug Fixes

- **Menu:** returnFocus but not restoreFocus ([#162](https://github.com/qlik-trial/sprout-css/issues/162)) ([2e8f1cf](https://github.com/qlik-trial/sprout-css/commit/2e8f1cfa60e5c85bd83947f5f4b559a95c201f2a))
- **Switch:** change padding to margin ([#169](https://github.com/qlik-trial/sprout-css/issues/169)) ([cdb3f56](https://github.com/qlik-trial/sprout-css/commit/cdb3f56a7dc27cd52468a0a50fade4957919d7e3))
- update placeholder color according to specs ([#163](https://github.com/qlik-trial/sprout-css/issues/163)) ([341969a](https://github.com/qlik-trial/sprout-css/commit/341969ace0cdabc7eaa9ee102658a1b7c61385a3))
- use input background color ([#161](https://github.com/qlik-trial/sprout-css/issues/161)) ([cb92a88](https://github.com/qlik-trial/sprout-css/commit/cb92a88c96dad5072e661ac31617738553aaa30b))

### Chore Work

- bump actions/cache from 4.0.2 to 4.1.0 ([#165](https://github.com/qlik-trial/sprout-css/issues/165)) ([7c4d59e](https://github.com/qlik-trial/sprout-css/commit/7c4d59e79f2d5ac4a60aac65d8d4720075eb3b47))
- update npm dependencies ([#160](https://github.com/qlik-trial/sprout-css/issues/160)) ([e8801c2](https://github.com/qlik-trial/sprout-css/commit/e8801c22fae2693dde53c4ac74b6c96f331f65b4))

## [2.2.4](https://github.com/qlik-trial/sprout-css/compare/v2.2.3...v2.2.4) (2024-10-04)

### Bug Fixes

- **Input:** Align HTML structure with figma ([#158](https://github.com/qlik-trial/sprout-css/issues/158)) ([ed25c75](https://github.com/qlik-trial/sprout-css/commit/ed25c75e4eef23802e409657f445398c7f175096))

## [2.2.3](https://github.com/qlik-trial/sprout-css/compare/v2.2.2...v2.2.3) (2024-10-04)

### Bug Fixes

- **hook:** useControl do not accept opts.defaultValue ([#154](https://github.com/qlik-trial/sprout-css/issues/154)) ([291c7bb](https://github.com/qlik-trial/sprout-css/commit/291c7bb059a8bc85d9e0ded7d99d398344976a8d))
- **Radio:** Add zindex to allow radio button to be clicked correctly ([#157](https://github.com/qlik-trial/sprout-css/issues/157)) ([ed870d2](https://github.com/qlik-trial/sprout-css/commit/ed870d2a6190b313e0ac5e6e39eb940cdadf5b9e))

## [2.2.2](https://github.com/qlik-trial/sprout-css/compare/v2.2.1...v2.2.2) (2024-10-02)

### Bug Fixes

- **Modal:** Restore customizable data-testid for modal ([#156](https://github.com/qlik-trial/sprout-css/issues/156)) ([f46bae6](https://github.com/qlik-trial/sprout-css/commit/f46bae62e93c5b351adf484c67598864d36f9684))

### Chore Work

- improve clean script ([#142](https://github.com/qlik-trial/sprout-css/issues/142)) ([dc1c456](https://github.com/qlik-trial/sprout-css/commit/dc1c456e2f3a5fe87e39d3f95bc6da3f111e9b32))
- update npm dependencies ([#152](https://github.com/qlik-trial/sprout-css/issues/152)) ([7ef5b36](https://github.com/qlik-trial/sprout-css/commit/7ef5b3665d4281f6ba60cc27086a0a651d74534e))

## [2.2.1](https://github.com/qlik-trial/sprout-css/compare/v2.2.0...v2.2.1) (2024-10-01)

### Bug Fixes

- **Modal, Select:** Fix modal focus navigation issue with rhf formState dirtyFields, add forwardRef to Select ([#153](https://github.com/qlik-trial/sprout-css/issues/153)) ([cd81bf9](https://github.com/qlik-trial/sprout-css/commit/cd81bf9c92cfb77616fb42fb0ceaea384415f21b))

## [2.2.0](https://github.com/qlik-trial/sprout-css/compare/v2.1.2...v2.2.0) (2024-09-30)

### Features

- **Box:** add grow, shrink, basis props ([#145](https://github.com/qlik-trial/sprout-css/issues/145)) ([c57714f](https://github.com/qlik-trial/sprout-css/commit/c57714fe176d05fe9aeee7c6e5c2abcc779e5e3f))

### Bug Fixes

- **Modal:** Use forwardRef ([#151](https://github.com/qlik-trial/sprout-css/issues/151)) ([1ce6e61](https://github.com/qlik-trial/sprout-css/commit/1ce6e611b98645251a40e55512783e36e5e83764))

## [2.1.2](https://github.com/qlik-trial/sprout-css/compare/v2.1.1...v2.1.2) (2024-09-26)

### Bug Fixes

- **Popover:** Fix zindex and overflow issues ([#148](https://github.com/qlik-trial/sprout-css/issues/148)) ([fc8402d](https://github.com/qlik-trial/sprout-css/commit/fc8402d83f16f63ee716fd4ad44061f4139a9332))

## [2.1.1](https://github.com/qlik-trial/sprout-css/compare/v2.1.0...v2.1.1) (2024-09-26)

### Bug Fixes

- **AlertInline:** add missing bg ([#146](https://github.com/qlik-trial/sprout-css/issues/146)) ([25564a6](https://github.com/qlik-trial/sprout-css/commit/25564a6ff132a65019eac9daf240dc67906d5f23))

## [2.1.0](https://github.com/qlik-trial/sprout-css/compare/v2.0.0...v2.1.0) (2024-09-25)

### Features

- **Popover:** export popover component ([#140](https://github.com/qlik-trial/sprout-css/issues/140)) ([180f339](https://github.com/qlik-trial/sprout-css/commit/180f339b37a1d3f5a21b1c7d6146cab6b7ceb1fe))

### Chore Work

- add/update .depConfig.yaml ([#138](https://github.com/qlik-trial/sprout-css/issues/138)) ([24965ce](https://github.com/qlik-trial/sprout-css/commit/24965cee08458aead70eb376f2cc7d7f7dc49498))
- bump peter-evans/create-pull-request from 6 to 7 ([#113](https://github.com/qlik-trial/sprout-css/issues/113)) ([f5d7995](https://github.com/qlik-trial/sprout-css/commit/f5d79954c3b84f315e9457d1d28e7818e9bbb34d))

## [2.0.0](https://github.com/qlik-trial/sprout-css/compare/v1.11.3...v2.0.0) (2024-09-25)

### ⚠ BREAKING CHANGES

- **DLS-205/Menu:** Import of the Menu component has changed

In the discussion of wanted API on more advanced components we have decided to go with a composition and renderer approach.
To simplify usage here is the biggest change:

```diff
- import { ContextMenu, MenuTrigger, MenuItem, Menu, MenuDivider, MenuGroupLabel } from "@qlik/sprout-react";
+ import { Menu } from "@qlik/sprout-react";


- <MenuContent
+ <Menu.Content
- <ContextMenu
+ <Menu.Contextual
- <MenuTrigger
+ <Menu.Trigger
- <MenuItem
+ <Menu.Item
- <MenuDivider
+ <Menu.Divider
- <MenuGroupLabel
+ <Menu.GroupLabel
- <Menu
+ <Menu.Sub
```

### Features

- add sprout stylelint rules ([#101](https://github.com/qlik-trial/sprout-css/issues/101)) ([2f92ee0](https://github.com/qlik-trial/sprout-css/commit/2f92ee0883edffeb83f868942d48bfb10a2def65))
- **DLS-204/Accordion:** update from coral ([#136](https://github.com/qlik-trial/sprout-css/issues/136)) ([af175eb](https://github.com/qlik-trial/sprout-css/commit/af175eb5ef815b6c00869503ee0937715339c4a2))
- **DLS-205/Menu:** add JSX and props API ([#122](https://github.com/qlik-trial/sprout-css/issues/122)) ([2814c3d](https://github.com/qlik-trial/sprout-css/commit/2814c3d367faa54a455f1401f2e787ae3136ca00))
- **DLS-205/Modal:** add composition api ([#123](https://github.com/qlik-trial/sprout-css/issues/123)) ([260388c](https://github.com/qlik-trial/sprout-css/commit/260388c7f79e1f3709f20f5864a2384408e62829))
- init popover in WIP ([#129](https://github.com/qlik-trial/sprout-css/issues/129)) ([2c362b0](https://github.com/qlik-trial/sprout-css/commit/2c362b0184d961abcc94c0fe46220fee394d9710))

### Bug Fixes

- **Tooltip:** reproduce a testcase and fix it ([#134](https://github.com/qlik-trial/sprout-css/issues/134)) ([dd31364](https://github.com/qlik-trial/sprout-css/commit/dd31364976fb895f24742f7a3113e407860ad73a))

### Chore Work

- update npm dependencies ([#137](https://github.com/qlik-trial/sprout-css/issues/137)) ([d1f11b7](https://github.com/qlik-trial/sprout-css/commit/d1f11b76c58a455506a35d943451f9faee545773))

## [1.11.3](https://github.com/qlik-trial/sprout-css/compare/v1.11.2...v1.11.3) (2024-09-18)

### Bug Fixes

- **Modal:** remove outline on it ([#133](https://github.com/qlik-trial/sprout-css/issues/133)) ([0b664e5](https://github.com/qlik-trial/sprout-css/commit/0b664e5baafd84a85b01402fa1fa6084802e02a7))

## [1.11.2](https://github.com/qlik-trial/sprout-css/compare/v1.11.1...v1.11.2) (2024-09-18)

### Bug Fixes

- **Modal:** add padding on modal body ([#132](https://github.com/qlik-trial/sprout-css/issues/132)) ([dbe5b72](https://github.com/qlik-trial/sprout-css/commit/dbe5b725de6d6c3b66a7a993183f85c53fe29711))

### Chore Work

- format ([391d407](https://github.com/qlik-trial/sprout-css/commit/391d407c7a29005abb24b59505b8626520b29b9c))

## [1.11.1](https://github.com/qlik-trial/sprout-css/compare/v1.11.0...v1.11.1) (2024-09-18)

### Bug Fixes

- **Tag:** set default foreground and background colors ([#131](https://github.com/qlik-trial/sprout-css/issues/131)) ([336feda](https://github.com/qlik-trial/sprout-css/commit/336fedaa167097a3c74894795f480c8098acb5b6))

## [1.11.0](https://github.com/qlik-trial/sprout-css/compare/v1.10.0...v1.11.0) (2024-09-18)

### Features

- **Box:** add denstity tokens on gap ([#124](https://github.com/qlik-trial/sprout-css/issues/124)) ([2cd87ef](https://github.com/qlik-trial/sprout-css/commit/2cd87efab033e3e6ca2e7eade674135fb507df13))
- **DLS-189:** add ToggleIconButton ([#117](https://github.com/qlik-trial/sprout-css/issues/117)) ([880c3a3](https://github.com/qlik-trial/sprout-css/commit/880c3a3d6a8bb6f5d13a0067ddd4439c5c790cd6))

### Bug Fixes

- add bg to Menu Item focused and use density token on List item ([#116](https://github.com/qlik-trial/sprout-css/issues/116)) ([29b4537](https://github.com/qlik-trial/sprout-css/commit/29b4537c2924a6df253ec015173a5822a59ad998))
- remove all usage of HTMLAttributes and HTMLProps ([#126](https://github.com/qlik-trial/sprout-css/issues/126)) ([82e9dbd](https://github.com/qlik-trial/sprout-css/commit/82e9dbd2bdbc1e1b8d7a8ca6734da43e35be7686))

### Chore Work

- update npm dependencies ([#127](https://github.com/qlik-trial/sprout-css/issues/127)) ([90f4032](https://github.com/qlik-trial/sprout-css/commit/90f4032ab4eb9697c9c1ca6e32ccbbf246e8d6b9))

## [1.10.0](https://github.com/qlik-trial/sprout-css/compare/v1.9.2...v1.10.0) (2024-09-11)

### Features

- **Modal:** Add customizable data test id ([#121](https://github.com/qlik-trial/sprout-css/issues/121)) ([c401562](https://github.com/qlik-trial/sprout-css/commit/c40156252279fb9229e97206d10546ea5d1edc25))
- **Modal:** add description and detect overflow ([#119](https://github.com/qlik-trial/sprout-css/issues/119)) ([816888f](https://github.com/qlik-trial/sprout-css/commit/816888fde9f384be2e17c4280c150916535af62f))

## [1.9.2](https://github.com/qlik-trial/sprout-css/compare/v1.9.1...v1.9.2) (2024-09-11)

### Bug Fixes

- **Input:** center adornments and fix font-size for small variant ([#118](https://github.com/qlik-trial/sprout-css/issues/118)) ([b615a5b](https://github.com/qlik-trial/sprout-css/commit/b615a5b186b0e88bd39b9324b5b28dc8116117f4))

### Chore Work

- rename ButtonIcon to IconButton ([#115](https://github.com/qlik-trial/sprout-css/issues/115)) ([eeefbd3](https://github.com/qlik-trial/sprout-css/commit/eeefbd379e50a0890fb9e9e40d1a19c803250f01))
- update npm dependencies ([#106](https://github.com/qlik-trial/sprout-css/issues/106)) ([3803cf8](https://github.com/qlik-trial/sprout-css/commit/3803cf88aee7bd3bc280f0cb6ddeee6fdc2f73cc))

## [1.9.1](https://github.com/qlik-trial/sprout-css/compare/v1.9.0...v1.9.1) (2024-09-04)

### Bug Fixes

- **DLS-68:** text field adjustments ([#103](https://github.com/qlik-trial/sprout-css/issues/103)) ([b6b142d](https://github.com/qlik-trial/sprout-css/commit/b6b142dbdeb02a1347a71f0e0d22b9676a51014c))
- **Typography:** Fix typo in size enum ([#111](https://github.com/qlik-trial/sprout-css/issues/111)) ([4e7c3c8](https://github.com/qlik-trial/sprout-css/commit/4e7c3c8865092b03f20ca0efbb700ec80b01db8c))

## [1.9.0](https://github.com/qlik-trial/sprout-css/compare/v1.8.3...v1.9.0) (2024-09-02)

### Features

- **Tabs:** Added z-index on tabs tracker ([#107](https://github.com/qlik-trial/sprout-css/issues/107)) ([615ece5](https://github.com/qlik-trial/sprout-css/commit/615ece5bbe139d75957b9617786074a65d705cd9))

### Bug Fixes

- **DLS-61:** adjustments for Select component ([#102](https://github.com/qlik-trial/sprout-css/issues/102)) ([3a0344f](https://github.com/qlik-trial/sprout-css/commit/3a0344f54c1006642eeb36cf2d8bde38695e02ba))

## [1.8.3](https://github.com/qlik-trial/sprout-css/compare/v1.8.2...v1.8.3) (2024-08-29)

### Bug Fixes

- **DLS-197:** remove private icons from dependencies ([#94](https://github.com/qlik-trial/sprout-css/issues/94)) ([881cb05](https://github.com/qlik-trial/sprout-css/commit/881cb05ccb7ab3ea6d55db0ab6c30f6d439e055d))
- **Menu/Select:** FocusManager should not return focus ([#104](https://github.com/qlik-trial/sprout-css/issues/104)) ([f790513](https://github.com/qlik-trial/sprout-css/commit/f790513d8c42e227b0e1949e5e50478652015b78))
- remove wrong css variable from the style ([#100](https://github.com/qlik-trial/sprout-css/issues/100)) ([3c47df8](https://github.com/qlik-trial/sprout-css/commit/3c47df8a51aeaf177a923ab873fba517347f3bfc))
- **Switch:** manage controlled props ([#105](https://github.com/qlik-trial/sprout-css/issues/105)) ([8a4f95d](https://github.com/qlik-trial/sprout-css/commit/8a4f95d498b2e7b48d8683f5b28643f8df7a371e))

### Chore Work

- **DLS-197:** remove frontend tools from packages ([#96](https://github.com/qlik-trial/sprout-css/issues/96)) ([e1935ab](https://github.com/qlik-trial/sprout-css/commit/e1935ab45ab48532ae0b95cc5fd7da368dcf2d9c))
- update npm dependencies ([#98](https://github.com/qlik-trial/sprout-css/issues/98)) ([b69215b](https://github.com/qlik-trial/sprout-css/commit/b69215bc03151e892a3867a9edccb78c85c725a3))

## [1.8.2](https://github.com/qlik-trial/sprout-css/compare/v1.8.1...v1.8.2) (2024-08-23)

### Bug Fixes

- **Button:** focus visible is center aligned ([#90](https://github.com/qlik-trial/sprout-css/issues/90)) ([fb1a736](https://github.com/qlik-trial/sprout-css/commit/fb1a73694a0bb9108aab1f1b77006620b7fdfa95))
- **CI:** add chromatic on the main branch ([19d9eb1](https://github.com/qlik-trial/sprout-css/commit/19d9eb120db8de59c0371804b74de4f77e47afcf))
- **CI:** configure main branch to be the one ([054011f](https://github.com/qlik-trial/sprout-css/commit/054011f703334645fbb1e978020f0b859a87b9fb))
- **CI:** use test command and update snapshots by reusing label ([#86](https://github.com/qlik-trial/sprout-css/issues/86)) ([e6137ce](https://github.com/qlik-trial/sprout-css/commit/e6137ce479f27ec1166be3cfd273ce9fa5c17161))
- **Menu/DLS-65:** few alignments ([#89](https://github.com/qlik-trial/sprout-css/issues/89)) ([8596be8](https://github.com/qlik-trial/sprout-css/commit/8596be8df50628dabbaf995e8c10fb3013ac4a25))
- **MenuItem:** background is transparent ([#93](https://github.com/qlik-trial/sprout-css/issues/93)) ([1ef653a](https://github.com/qlik-trial/sprout-css/commit/1ef653a4821e6671438fa592c9883993906414d0))
- **Radio/DLS-74:** focused state ([#85](https://github.com/qlik-trial/sprout-css/issues/85)) ([87bd3bd](https://github.com/qlik-trial/sprout-css/commit/87bd3bd4bc1fdd8ef5d0939b2705feefebd55832))
- **Tag/DLS-182:** update to fit with figma ([#87](https://github.com/qlik-trial/sprout-css/issues/87)) ([5fbcd29](https://github.com/qlik-trial/sprout-css/commit/5fbcd2928d47f1a73031eab98e504bc03a490c3e)), closes [#84](https://github.com/qlik-trial/sprout-css/issues/84)

### Chore Work

- **CI:** remove cancelation of ci by test:update ([d11fe6f](https://github.com/qlik-trial/sprout-css/commit/d11fe6fee319b9a3ddebb14acafe656744c7dc6d))
- **DLS-197/CI:** setup chromatic and remove git-lfs ([#91](https://github.com/qlik-trial/sprout-css/issues/91)) ([16ebe7e](https://github.com/qlik-trial/sprout-css/commit/16ebe7ebc7eb847b686d57605a01279e478fe3e8))

## [1.8.1](https://github.com/qlik-trial/sprout-css/compare/v1.8.0...v1.8.1) (2024-08-01)

### Bug Fixes

- **Tabs:** omit onSelect to have the proper typing ([#82](https://github.com/qlik-trial/sprout-css/issues/82)) ([43a72c2](https://github.com/qlik-trial/sprout-css/commit/43a72c2de6641c7c0ec593c036234254613bdd82))

## [1.8.0](https://github.com/qlik-trial/sprout-css/compare/v1.7.1...v1.8.0) (2024-08-01)

### Features

- **tabs:** add data-feature property ([#79](https://github.com/qlik-trial/sprout-css/issues/79)) ([8213348](https://github.com/qlik-trial/sprout-css/commit/821334806e55ce9d3bfaff2087803ad9f25aac30))

### Bug Fixes

- **Radio:** width is 16 and remove the use of before/after ([#72](https://github.com/qlik-trial/sprout-css/issues/72)) ([6cec341](https://github.com/qlik-trial/sprout-css/commit/6cec341d68245c4904a4a99c9ebc1096448bd029))
- **Tabs:** tracker uses the parent element as a reference ([#81](https://github.com/qlik-trial/sprout-css/issues/81)) ([84ee511](https://github.com/qlik-trial/sprout-css/commit/84ee5115f41e56a2a5d613732213e340f572559b))
- **Tabs:** use ResizeObserver + tracker width ([#71](https://github.com/qlik-trial/sprout-css/issues/71)) ([414bcbd](https://github.com/qlik-trial/sprout-css/commit/414bcbdbe443bbc59cbd1380ad78baa5a1174958))

### Chore Work

- **CI:** use asdf ([#76](https://github.com/qlik-trial/sprout-css/issues/76)) ([5f2165a](https://github.com/qlik-trial/sprout-css/commit/5f2165a851d799d6a166e1fa746a3c139dd9fc9d))
- update npm dependencies ([#78](https://github.com/qlik-trial/sprout-css/issues/78)) ([b00aae0](https://github.com/qlik-trial/sprout-css/commit/b00aae0efba100fc78c4661a318e086a03ba86eb))

## [1.7.1](https://github.com/qlik-trial/sprout-css/compare/v1.7.0...v1.7.1) (2024-07-23)

### Bug Fixes

- **List:** Add missing export ([#70](https://github.com/qlik-trial/sprout-css/issues/70)) ([11b6fd9](https://github.com/qlik-trial/sprout-css/commit/11b6fd9d1f2d0304da74fcfbe692a0e69f64fb73))
- ProgressBar and add missing mdx update for homogeneity ([#68](https://github.com/qlik-trial/sprout-css/issues/68)) ([ef2c75c](https://github.com/qlik-trial/sprout-css/commit/ef2c75c7849b6d0d7681fabe1480e13a12448688))
- set the button max-width to 256px ([#69](https://github.com/qlik-trial/sprout-css/issues/69)) ([a81b60c](https://github.com/qlik-trial/sprout-css/commit/a81b60c83e5e47fed20b460d3db1077e8c491bfd))

## [1.7.0](https://github.com/qlik-trial/sprout-css/compare/v1.6.1...v1.7.0) (2024-07-23)

### Features

- add CheckboxGroup ([#64](https://github.com/qlik-trial/sprout-css/issues/64)) ([d2a6709](https://github.com/qlik-trial/sprout-css/commit/d2a6709eae4b632ff012440177238d8c3e4566a9))

### Bug Fixes

- **css:** add stylelint and fix all isues ([#66](https://github.com/qlik-trial/sprout-css/issues/66)) ([0fab030](https://github.com/qlik-trial/sprout-css/commit/0fab030cd18a084b9b4a65362181eed70c006e07))
- **Input:** pass type and use it ([#65](https://github.com/qlik-trial/sprout-css/issues/65)) ([456e744](https://github.com/qlik-trial/sprout-css/commit/456e7442d8589a301f2185d5fe8c0e97d1130fc4))

### Chore Work

- bump qlik-trial/qmfe-workflows from 1 to 2 ([#1](https://github.com/qlik-trial/sprout-css/issues/1)) ([64dff1d](https://github.com/qlik-trial/sprout-css/commit/64dff1d8e798f507f06af5b8e8f6083a2e31a4c1))
- **CI:** use git lfs only on the CI side ([#63](https://github.com/qlik-trial/sprout-css/issues/63)) ([66fff6e](https://github.com/qlik-trial/sprout-css/commit/66fff6e0863a4add5db9f534419ab8217eeccb66))
- update npm dependencies ([#67](https://github.com/qlik-trial/sprout-css/issues/67)) ([191895f](https://github.com/qlik-trial/sprout-css/commit/191895f172a5e1854c50721d637b2b9782131a1b))

## [1.6.1](https://github.com/qlik-trial/sprout-css/compare/v1.6.0...v1.6.1) (2024-07-18)

### Bug Fixes

- **Button:** font xs-emphasized on small size ([#62](https://github.com/qlik-trial/sprout-css/issues/62)) ([c772870](https://github.com/qlik-trial/sprout-css/commit/c7728700ae7f74f2a77e0b6eb7ed31cd7d144141))
- **ToggleButton/DLS-189:** size when toggled and quiet ([#61](https://github.com/qlik-trial/sprout-css/issues/61)) ([dc1c3ef](https://github.com/qlik-trial/sprout-css/commit/dc1c3ef53a06ec4893a4b06d2cf3f8e6c393c99d))
- **Tooltip:** remove useRole ([#60](https://github.com/qlik-trial/sprout-css/issues/60)) ([0deb3a6](https://github.com/qlik-trial/sprout-css/commit/0deb3a680f41e4e566c04ff3d88907fb3410b8f8))

## [1.6.0](https://github.com/qlik-trial/sprout-css/compare/v1.5.0...v1.6.0) (2024-07-17)

### Features

- **hooks:** add useId and use it ([#58](https://github.com/qlik-trial/sprout-css/issues/58)) ([ab4376b](https://github.com/qlik-trial/sprout-css/commit/ab4376b69d1829298660b712d0ca730c7f094d73))

### Bug Fixes

- **Tooltip:** delay + fade + mount only on hover ([#57](https://github.com/qlik-trial/sprout-css/issues/57)) ([45eecc3](https://github.com/qlik-trial/sprout-css/commit/45eecc33f6d3daf8cd2daa98ad1bfd5ce4771714))

## [1.5.0](https://github.com/qlik-trial/sprout-css/compare/v1.4.2...v1.5.0) (2024-07-16)

### Features

- **Form:** add react-hook-form story and fixes a11y ([#54](https://github.com/qlik-trial/sprout-css/issues/54)) ([3ca962a](https://github.com/qlik-trial/sprout-css/commit/3ca962afbddb1d64f3254ef6e250df7ee7324ae0))

### Chore Work

- update storybook and remove addon-interaction ([3f3d0f0](https://github.com/qlik-trial/sprout-css/commit/3f3d0f0817ccf34a3d492ff65be0a6c11bdeaddf))

## [1.4.2](https://github.com/qlik-trial/sprout-css/compare/v1.4.1...v1.4.2) (2024-07-16)

### Bug Fixes

- **Tooltip:** font use the correct token ([#53](https://github.com/qlik-trial/sprout-css/issues/53)) ([8a5975f](https://github.com/qlik-trial/sprout-css/commit/8a5975f7affe24258e13373a80e57909eeb99382))

### Chore Work

- update dependencies ([#51](https://github.com/qlik-trial/sprout-css/issues/51)) ([c60d689](https://github.com/qlik-trial/sprout-css/commit/c60d689639e6f413df982d45332f7a816129d3d1))

## [1.4.1](https://github.com/qlik-trial/sprout-css/compare/v1.4.0...v1.4.1) (2024-07-15)

### Bug Fixes

- **AlertBanner:** export component ([#50](https://github.com/qlik-trial/sprout-css/issues/50)) ([26b199b](https://github.com/qlik-trial/sprout-css/commit/26b199b9b3aca70e44a025157a976d1f58fa23fe))

## [1.4.0](https://github.com/qlik-trial/sprout-css/compare/v1.3.2...v1.4.0) (2024-07-12)

### Features

- **List:** add the component ([#37](https://github.com/qlik-trial/sprout-css/issues/37)) ([15abe86](https://github.com/qlik-trial/sprout-css/commit/15abe866b7ae844f2f09086b452a9da335e55413))

### Bug Fixes

- **Modal:** binary files from lfs ([#47](https://github.com/qlik-trial/sprout-css/issues/47)) ([a33e5b3](https://github.com/qlik-trial/sprout-css/commit/a33e5b30fb075a4a9bfca88187c88079e8818b9f))
- **Modal:** full height + remove opacity ([#46](https://github.com/qlik-trial/sprout-css/issues/46)) ([0502d49](https://github.com/qlik-trial/sprout-css/commit/0502d497db7a1d341357d28d87d674c55c1fae20)), closes [#44](https://github.com/qlik-trial/sprout-css/issues/44)
- Remove focus trap on modal, fix issue on controled input keydown ([#43](https://github.com/qlik-trial/sprout-css/issues/43)) ([8ff6088](https://github.com/qlik-trial/sprout-css/commit/8ff60886d11234a798049ec45aa45b705d36c3d5))
- rhf support for radio group ([#48](https://github.com/qlik-trial/sprout-css/issues/48)) ([9eceb13](https://github.com/qlik-trial/sprout-css/commit/9eceb130be4212e2fae617c6fbffb780e8c8722d))
- **Select:** make it work with rhf ([#49](https://github.com/qlik-trial/sprout-css/issues/49)) ([664cf3f](https://github.com/qlik-trial/sprout-css/commit/664cf3fe46173e5a879cef991df35ac3b9709288))
- textfield and textarea compatibility with RHF ([#45](https://github.com/qlik-trial/sprout-css/issues/45)) ([4faed7f](https://github.com/qlik-trial/sprout-css/commit/4faed7f4e13ac6f12e757bb95b101bca5d8f65e7))

## [1.3.2](https://github.com/qlik-trial/sprout-css/compare/v1.3.1...v1.3.2) (2024-07-12)

### Bug Fixes

- **Skeleton:** use the correct token ([#44](https://github.com/qlik-trial/sprout-css/issues/44)) ([1956cc5](https://github.com/qlik-trial/sprout-css/commit/1956cc58a7f625850172489b4c57d5e0e37e41a8))

## [1.3.1](https://github.com/qlik-trial/sprout-css/compare/v1.3.0...v1.3.1) (2024-07-11)

### Bug Fixes

- update following latest changes in figma ([#42](https://github.com/qlik-trial/sprout-css/issues/42)) ([3018e60](https://github.com/qlik-trial/sprout-css/commit/3018e606c165369739481d23edbeccc56ecce166))

## [1.3.0](https://github.com/qlik-trial/sprout-css/compare/v1.2.1...v1.3.0) (2024-07-10)

### Features

- add AlertBanner ([#39](https://github.com/qlik-trial/sprout-css/issues/39)) ([8762c38](https://github.com/qlik-trial/sprout-css/commit/8762c38b187954b3574e289ced57a43028b7f90e))
- Add TextAreaField ([#32](https://github.com/qlik-trial/sprout-css/issues/32)) ([3652f65](https://github.com/qlik-trial/sprout-css/commit/3652f65728d56b6b4e9b45bd3167958647805df3))
- **checkbox:** fix focus and sizing and add optional label and ([#38](https://github.com/qlik-trial/sprout-css/issues/38)) ([2fed7a8](https://github.com/qlik-trial/sprout-css/commit/2fed7a8dc31bd9f009de1f4cbd99d3d9a3d09316))
- **RadioGroup:** add the component ([#36](https://github.com/qlik-trial/sprout-css/issues/36)) ([cb9cab1](https://github.com/qlik-trial/sprout-css/commit/cb9cab1b3e1691ff3804c326617e421616a18e94))
- **Switch:** add component ([#33](https://github.com/qlik-trial/sprout-css/issues/33)) ([400fa45](https://github.com/qlik-trial/sprout-css/commit/400fa456529f0f9e2eda9aaa5d316ab64e096f6f))

### Bug Fixes

- **Message:** rename the component ([#31](https://github.com/qlik-trial/sprout-css/issues/31)) ([e0bd640](https://github.com/qlik-trial/sprout-css/commit/e0bd6401b1d6aa36ac058a44309ef65c70fe28de))

## [1.2.1](https://github.com/qlik-trial/sprout-css/compare/v1.2.0...v1.2.1) (2024-07-09)

## [1.2.0](https://github.com/qlik-trial/sprout-css/compare/v1.1.1...v1.2.0) (2024-07-08)

### Features

- add AlertInline ([#23](https://github.com/qlik-trial/sprout-css/issues/23)) ([50cd940](https://github.com/qlik-trial/sprout-css/commit/50cd940b1c26cf6fe879206e6f1627b68d9b091b))
- add Select component ([#24](https://github.com/qlik-trial/sprout-css/issues/24)) ([75d1692](https://github.com/qlik-trial/sprout-css/commit/75d1692522f6a63948e25feba98dcb716c9bb453))
- **Modal:** add footerMetaLabel and footerLeft optional props ([#28](https://github.com/qlik-trial/sprout-css/issues/28)) ([d59cb7e](https://github.com/qlik-trial/sprout-css/commit/d59cb7e835e81790750c2ff817fbc9c13c3a0473))

### Bug Fixes

- completion in vscode + root exports ([#22](https://github.com/qlik-trial/sprout-css/issues/22)) ([632ddbf](https://github.com/qlik-trial/sprout-css/commit/632ddbf9e73ce4c57b6b5331b8c0d1a31e96d167))
- Place truncation on the label instead of the button ([#30](https://github.com/qlik-trial/sprout-css/issues/30)) ([32ef246](https://github.com/qlik-trial/sprout-css/commit/32ef2469a63998234f87c9b0e9f9eb20dfc61b74))
- **Skeleton:** width and height are number or string and are optional ([#29](https://github.com/qlik-trial/sprout-css/issues/29)) ([7786089](https://github.com/qlik-trial/sprout-css/commit/7786089fa488f31b401b1acd625bcc82ad250465))

## [1.1.1](https://github.com/qlik-trial/sprout-css/compare/v1.1.0...v1.1.1) (2024-07-02)

### Bug Fixes

- exports for Skeleton component ([#25](https://github.com/qlik-trial/sprout-css/issues/25)) ([a732b6f](https://github.com/qlik-trial/sprout-css/commit/a732b6fba2a60c369d89ca609e2a9c41ca81417a))

## [1.1.0](https://github.com/qlik-trial/sprout-css/compare/v1.0.0...v1.1.0) (2024-06-27)

### Features

- **Menu:** add the component ([#18](https://github.com/qlik-trial/sprout-css/issues/18)) ([ed67a31](https://github.com/qlik-trial/sprout-css/commit/ed67a314d44d24744d9f97c49ad1fa5c05741029))

## [1.0.0](https://github.com/qlik-trial/sprout-css/compare/v0.11.6...v1.0.0) (2024-06-21)

### ⚠ BREAKING CHANGES

- remove the /lib from your import.

### Features

- add Modal ([#3](https://github.com/qlik-trial/sprout-css/issues/3)) ([1670c52](https://github.com/qlik-trial/sprout-css/commit/1670c52f509896c0e0d920e7ab983961a93d7479))
- import Tabs from Coral ([#14](https://github.com/qlik-trial/sprout-css/issues/14)) ([abc8c67](https://github.com/qlik-trial/sprout-css/commit/abc8c67c72dc5787a849a2e4793f4a649e222102))
- remove /lib from import ([#11](https://github.com/qlik-trial/sprout-css/issues/11)) ([150f361](https://github.com/qlik-trial/sprout-css/commit/150f361d56a0facd9c8cb2b07fe5d42e00cbf226))

### Bug Fixes

- **Box:** use border-box by default ([#15](https://github.com/qlik-trial/sprout-css/issues/15)) ([568c521](https://github.com/qlik-trial/sprout-css/commit/568c521725427b90f0a301ee7b9a00e57a658c60))
- build of gh-pages ([4df8a69](https://github.com/qlik-trial/sprout-css/commit/4df8a69a8a56c9db4d809ada2f6972765c8098a7))
- **Button:** enforce a11y ([#12](https://github.com/qlik-trial/sprout-css/issues/12)) ([8a49790](https://github.com/qlik-trial/sprout-css/commit/8a497906f22cbd363149faae2d7ffa2fb45eb294))
- CI for publish sb ([83c6fa2](https://github.com/qlik-trial/sprout-css/commit/83c6fa296e934f7d25ececd234521348e6906404))
- Rename FieldLabel.module.css ([690c26f](https://github.com/qlik-trial/sprout-css/commit/690c26f6e7aa80fa272c298a07e8916af5b4c8a3))
- **TextField:** update paddings and responsivness ([#20](https://github.com/qlik-trial/sprout-css/issues/20)) ([62c8a1e](https://github.com/qlik-trial/sprout-css/commit/62c8a1e30a241d80818138f9513b0ac292fb7a96))
- update inverse tokens ([#5](https://github.com/qlik-trial/sprout-css/issues/5)) ([883d806](https://github.com/qlik-trial/sprout-css/commit/883d806d31ba408b1995a5f6612d98d3b47d3e5e))
- update tokens and add tests ([#21](https://github.com/qlik-trial/sprout-css/issues/21)) ([a138e52](https://github.com/qlik-trial/sprout-css/commit/a138e5201251132b02d768183ef4db7aafe7479a))

### Chore Work

- **CI:** add concurrency, split out update-snapshots ([#9](https://github.com/qlik-trial/sprout-css/issues/9)) ([39073b7](https://github.com/qlik-trial/sprout-css/commit/39073b7f12a5690f14baada1f2240719dd69fcc9))
- **CI:** remove git lfs pull from gh-pages ([0211fc1](https://github.com/qlik-trial/sprout-css/commit/0211fc127d887f0832c586ab62c8933fdc3460f7))
- prepare publish storybook ([8357161](https://github.com/qlik-trial/sprout-css/commit/835716112ce746804d5b394639766bf5b4b996e8))
- update docs ([6dc3dac](https://github.com/qlik-trial/sprout-css/commit/6dc3dac1a5f2f5381fea94be9ee471df3315601d))

## [0.11.6](https://github.com/qlik-trial/sprout-css/compare/v0.11.5...v0.11.6) (2024-06-11)

### Chore Work

- cleanup ([960c097](https://github.com/qlik-trial/sprout-css/commit/960c097d03dba2162aa35407a21c5b4c2ce50ac8))

## [0.11.5](https://github.com/qlik-trial/sprout-css/compare/v0.11.4...v0.11.5) (2024-06-11)

### Chore Work

- update CI from Sprout ([fa4bac5](https://github.com/qlik-trial/sprout-css/commit/fa4bac5ba1e1773b74187de1a0a95c9d91be6ab6))

## [0.11.4](https://github.com/qlik-trial/sprout-css/compare/v0.11.3...v0.11.4) (2024-06-11)

### Chore Work

- **release:** v0.11.3 ([5f9774b](https://github.com/qlik-trial/sprout-css/commit/5f9774bac099f4862f680a644afd46090f027e37))

## [0.11.2](https://github.com/qlik-trial/sprout-css/compare/v0.11.1...v0.11.2) (2024-06-11)

## [0.11.1](https://github.com/qlik-trial/sprout-css/compare/v0.11.0...v0.11.1) (2024-06-11)

### Chore Work

- **CI:** remove upload aws ([37216ce](https://github.com/qlik-trial/sprout-css/commit/37216ceb6160f23f86e18b60d9cfb1dc0d6c2398))

## 0.11.0 (2024-06-11)

### Features

- init repository from old ui-kit branch ([c9ffcae](https://github.com/qlik-trial/sprout-css/commit/c9ffcaef415dfe552d16fad381b97932d412061d))

### Bug Fixes

- CI release ([f9bf438](https://github.com/qlik-trial/sprout-css/commit/f9bf4389696c5a49f9494ef17e3b11f1b8098f19))
- **CI:** build ([fe2278b](https://github.com/qlik-trial/sprout-css/commit/fe2278b3bd7317f44cd3dad1ab062e162352c8b5))
- **CI:** start storybook ([8220c2e](https://github.com/qlik-trial/sprout-css/commit/8220c2e5d552ae053e807ce72c9023e386fc3e51))

### Chore Work

- add CI ([3a64ace](https://github.com/qlik-trial/sprout-css/commit/3a64ace09321bbb19f02a911f60e853f286fe5f1))
- prepare a release ([5f8e922](https://github.com/qlik-trial/sprout-css/commit/5f8e922b4cf2513f7cdf61485f7f5ba76e88570e))
- rename package ([fe873c0](https://github.com/qlik-trial/sprout-css/commit/fe873c0f7ced205618e52e367976143d475ec16b))
- rename the pacakge ([83f13ce](https://github.com/qlik-trial/sprout-css/commit/83f13ce7caff0985e8824af03a82b099cf07e017))

## [0.10.0](https://github.com/qlik-trial/ui-kit/compare/v0.9.3...v0.10.0) (2024-05-27)

### Features

- add Avatar ([#136](https://github.com/qlik-trial/ui-kit/issues/136)) ([0eef62f](https://github.com/qlik-trial/ui-kit/commit/0eef62fe3ffc400fbe5040702d0e0ba7a7272181))
- **box:** use design tokens ([#131](https://github.com/qlik-trial/ui-kit/issues/131)) ([b79d9ea](https://github.com/qlik-trial/ui-kit/commit/b79d9eafe4d5eefd0b6dceec872f683123bd7714))

### Chore Work

- add/update .depConfig.yaml ([#133](https://github.com/qlik-trial/ui-kit/issues/133)) ([4683321](https://github.com/qlik-trial/ui-kit/commit/46833216964f82826edebf56ef618fdd2ee4226c))
- remove css implem of sprout ([#130](https://github.com/qlik-trial/ui-kit/issues/130)) ([602b086](https://github.com/qlik-trial/ui-kit/commit/602b0864ad8b2e0fc20e83a8a3a6c057434248ae))
- **storybook:** remove onboarding addon ([#135](https://github.com/qlik-trial/ui-kit/issues/135)) ([992664e](https://github.com/qlik-trial/ui-kit/commit/992664ea0dd17a59bdc6ca6ee03f22507fde4603))
- update npm dependencies ([#137](https://github.com/qlik-trial/ui-kit/issues/137)) ([104a2ba](https://github.com/qlik-trial/ui-kit/commit/104a2baf6ececbe2c62747cd2c8f67b48a31efe5))

## [0.9.3](https://github.com/qlik-trial/ui-kit/compare/v0.9.2...v0.9.3) (2024-05-22)

### Bug Fixes

- list item selected state for tools ([#127](https://github.com/qlik-trial/ui-kit/issues/127)) ([8af117a](https://github.com/qlik-trial/ui-kit/commit/8af117ac8cfdd48d63e21844fce712116e20d2f2))

## [0.9.2](https://github.com/qlik-trial/ui-kit/compare/v0.9.1...v0.9.2) (2024-05-20)

### Bug Fixes

- chip tools surface ([#123](https://github.com/qlik-trial/ui-kit/issues/123)) ([a7c7a6b](https://github.com/qlik-trial/ui-kit/commit/a7c7a6bb72419c364ae078d5c3a440ac94b33493))

### Chore Work

- update deployment environments - see https://github.com/qlik-trial/qlik-releaser/blob/master/deployment-environments.md ([#125](https://github.com/qlik-trial/ui-kit/issues/125)) ([3f2b725](https://github.com/qlik-trial/ui-kit/commit/3f2b72557ec99e8fb48dd15ef8c26440968ae04c))
- update npm dependencies ([#124](https://github.com/qlik-trial/ui-kit/issues/124)) ([ac5b334](https://github.com/qlik-trial/ui-kit/commit/ac5b334eaed2772f501b94fd6caca38e6beead2b))

## [0.9.1](https://github.com/qlik-trial/ui-kit/compare/v0.9.0...v0.9.1) (2024-05-17)

### Bug Fixes

- make default button have white background ([fcac133](https://github.com/qlik-trial/ui-kit/commit/fcac1336882f1df30ac2386538fc32323320b63b))
- move border-widths next to border-color in all cases ([#121](https://github.com/qlik-trial/ui-kit/issues/121)) ([2904e57](https://github.com/qlik-trial/ui-kit/commit/2904e5777713fdc15b5471242d0f25c921f504eb))

## [0.9.0](https://github.com/qlik-trial/ui-kit/compare/v0.8.4...v0.9.0) (2024-05-17)

### Features

- add chip surface ([#120](https://github.com/qlik-trial/ui-kit/issues/120)) ([a41e603](https://github.com/qlik-trial/ui-kit/commit/a41e603ad835b04931f72cdedf4b9a284d9907c3))
- add storybook to sprout-css-modules ([#119](https://github.com/qlik-trial/ui-kit/issues/119)) ([af4cb7b](https://github.com/qlik-trial/ui-kit/commit/af4cb7bd2c246cd821d8bb6903d76afc016af1bf))
- Menu buttons! (No right click yet) ([#113](https://github.com/qlik-trial/ui-kit/issues/113)) ([2111fcd](https://github.com/qlik-trial/ui-kit/commit/2111fcdc05616274f5107ae45b684cd7a6e979c2))

### Bug Fixes

- **alert:** border width ([629824e](https://github.com/qlik-trial/ui-kit/commit/629824efa6f4ab6dbc133efc31b1c12627e1fac6))

### Chore Work

- **react-css:** rename and refactor stack into flex ([#116](https://github.com/qlik-trial/ui-kit/issues/116)) ([7e63fcf](https://github.com/qlik-trial/ui-kit/commit/7e63fcfc7c1b04f745d7a71b6be22d58a01990b2))

## [0.8.4](https://github.com/qlik-trial/ui-kit/compare/v0.8.3...v0.8.4) (2024-05-16)

### Bug Fixes

- add focus effects to tabs and lists ([#118](https://github.com/qlik-trial/ui-kit/issues/118)) ([2ae7869](https://github.com/qlik-trial/ui-kit/commit/2ae7869cdbd27b8fc51338033bc4c9416a31b31d))
- badge font sizes ([#114](https://github.com/qlik-trial/ui-kit/issues/114)) ([9542b45](https://github.com/qlik-trial/ui-kit/commit/9542b45068ce5e0bd41658c19d58b29a527c5ab6))
- fix jumping boxes when different border size in different states ([#117](https://github.com/qlik-trial/ui-kit/issues/117)) ([68bf4b4](https://github.com/qlik-trial/ui-kit/commit/68bf4b4ce3d295b6dee3e830a0e6adca14962cb2))
- remove white background on clickable items ([#115](https://github.com/qlik-trial/ui-kit/issues/115)) ([c7d7dde](https://github.com/qlik-trial/ui-kit/commit/c7d7dde0ed00bcfb2e72c3a8511ac4f4566abf67))

## [0.8.3](https://github.com/qlik-trial/ui-kit/compare/v0.8.2...v0.8.3) (2024-05-15)

### Bug Fixes

- add overflow hidden on the test div ([0107466](https://github.com/qlik-trial/ui-kit/commit/010746666ff17c24490dadc7eb68e09b6dcf4348))

## [0.8.2](https://github.com/qlik-trial/ui-kit/compare/v0.8.1...v0.8.2) (2024-05-15)

### Bug Fixes

- put measuring divs in their own scoped div ([#112](https://github.com/qlik-trial/ui-kit/issues/112)) ([9766133](https://github.com/qlik-trial/ui-kit/commit/9766133b73e309c2a6dacb98759ebf811b92c20e))

## [0.8.1](https://github.com/qlik-trial/ui-kit/compare/v0.8.0...v0.8.1) (2024-05-14)

### Chore Work

- fixups for qlik-releaser ([#110](https://github.com/qlik-trial/ui-kit/issues/110)) ([7cc4059](https://github.com/qlik-trial/ui-kit/commit/7cc4059ff85b66a7d6b5a3f5cd5fc4cb12a2f058))

## [0.8.0](https://github.com/qlik-trial/ui-kit/compare/v0.7.0...v0.8.0) (2024-05-14)

### Features

- add `<Alert />` component ([#95](https://github.com/qlik-trial/ui-kit/issues/95)) ([27d38d4](https://github.com/qlik-trial/ui-kit/commit/27d38d4714c2c156c68fa8f729c8a5f30d1dab7f))
- add forward ref to box ([#109](https://github.com/qlik-trial/ui-kit/issues/109)) ([cddf005](https://github.com/qlik-trial/ui-kit/commit/cddf0059ee19dafe7b7c3db2ff1833da74c14d7d))
- **DLS-103:** add components using react and css modules ([#73](https://github.com/qlik-trial/ui-kit/issues/73)) ([e841c3d](https://github.com/qlik-trial/ui-kit/commit/e841c3d27a692b27195435254ef6ff474e360c2b))
- improved border width measurements ([#104](https://github.com/qlik-trial/ui-kit/issues/104)) ([e95c63e](https://github.com/qlik-trial/ui-kit/commit/e95c63ecf78381ac987a992d699e02b4adc6f44a))
- precise floating ([#94](https://github.com/qlik-trial/ui-kit/issues/94)) ([98915f0](https://github.com/qlik-trial/ui-kit/commit/98915f0b0e0b8cc7af7f2ba798ebd11d641e1a1a))

### Bug Fixes

- add click handler to toggle button ([#108](https://github.com/qlik-trial/ui-kit/issues/108)) ([c43d439](https://github.com/qlik-trial/ui-kit/commit/c43d4390b134cbed06eee87af9c868e1e367696b))
- introduce layers to get css rule ordering right ([#105](https://github.com/qlik-trial/ui-kit/issues/105)) ([5c9d7a6](https://github.com/qlik-trial/ui-kit/commit/5c9d7a6b878feb4489162636bb013be07f7176d9))
- place tokens in the right place ([#106](https://github.com/qlik-trial/ui-kit/issues/106)) ([8f1750d](https://github.com/qlik-trial/ui-kit/commit/8f1750d2ae161534e84e379965763f0261411992))

### Chore Work

- add/update .depConfig.yaml ([#97](https://github.com/qlik-trial/ui-kit/issues/97)) ([1be0b17](https://github.com/qlik-trial/ui-kit/commit/1be0b175c10ad4c865bf1a33120bb603b4815616))
- bump actions-js/push from 1.4 to 1.5 ([#103](https://github.com/qlik-trial/ui-kit/issues/103)) ([decda8a](https://github.com/qlik-trial/ui-kit/commit/decda8a7cbe18387525170412ce543dd4e5eb432))
- bump pnpm/action-setup from 3 to 4 ([#102](https://github.com/qlik-trial/ui-kit/issues/102)) ([443b02d](https://github.com/qlik-trial/ui-kit/commit/443b02dc3f82bebcf4fb19832a24065a7290efed))
- update deployment environments - see https://github.com/qlik-trial/qlik-releaser/blob/master/deployment-environments.md ([#101](https://github.com/qlik-trial/ui-kit/issues/101)) ([e4e27b3](https://github.com/qlik-trial/ui-kit/commit/e4e27b35a62bf98d54d325119061931f7c86e382))
- update npm dependencies ([#98](https://github.com/qlik-trial/ui-kit/issues/98)) ([8d1ba61](https://github.com/qlik-trial/ui-kit/commit/8d1ba614be6324c12adbaf2066f4667a0553b641))

## [0.7.0](https://github.com/qlik-trial/ui-kit/compare/v0.6.1...v0.7.0) (2024-05-07)

### Features

- **design-tokens:** new border width and dark mode fixes ([#78](https://github.com/qlik-trial/ui-kit/issues/78)) ([f174b7c](https://github.com/qlik-trial/ui-kit/commit/f174b7c3f50bf3fbc1c413aa7f1e6a233e359765))
- helix tooltips ([#88](https://github.com/qlik-trial/ui-kit/issues/88)) ([2591fbc](https://github.com/qlik-trial/ui-kit/commit/2591fbc269aebc9ae0317fc0a277f8862eedb1b2))
- panel variants, tab font, list item roundness ([#89](https://github.com/qlik-trial/ui-kit/issues/89)) ([25620e3](https://github.com/qlik-trial/ui-kit/commit/25620e357d6b31c4ba10f4a5f03733a1a5caa82e))

### Chore Work

- update npm dependencies ([#90](https://github.com/qlik-trial/ui-kit/issues/90)) ([93dddf3](https://github.com/qlik-trial/ui-kit/commit/93dddf3d377b1f0c46c14c9c63e1b187d5ba9f9c))

## [0.6.1](https://github.com/qlik-trial/ui-kit/compare/v0.6.0...v0.6.1) (2024-04-30)

### Bug Fixes

- forwardref inferred types ([#82](https://github.com/qlik-trial/ui-kit/issues/82)) ([71eb548](https://github.com/qlik-trial/ui-kit/commit/71eb548cd107288fae2dc056b4a360489ff92758))

## [0.6.0](https://github.com/qlik-trial/ui-kit/compare/v0.5.0...v0.6.0) (2024-04-30)

### Features

- add banner surface ([#76](https://github.com/qlik-trial/ui-kit/issues/76)) ([949e914](https://github.com/qlik-trial/ui-kit/commit/949e91417698cee947994d2c2a2e9cbc6b5d9b2d))

### Bug Fixes

- use 16px bold for modal headers ([#74](https://github.com/qlik-trial/ui-kit/issues/74)) ([9897d70](https://github.com/qlik-trial/ui-kit/commit/9897d70dfa1248b2c9e59260529d96a3a320af89))

### Chore Work

- bump qlik-trial/qmfe-workflows from 1 to 2 ([#79](https://github.com/qlik-trial/ui-kit/issues/79)) ([07bdb89](https://github.com/qlik-trial/ui-kit/commit/07bdb894e4192f1373d7017a89167a0a53a55861))
- update npm dependencies ([#77](https://github.com/qlik-trial/ui-kit/issues/77)) ([9aab4cd](https://github.com/qlik-trial/ui-kit/commit/9aab4cd11f0881fb53e805f631ec33bca6f7076c))

## [0.5.0](https://github.com/qlik-trial/ui-kit/compare/v0.4.0...v0.5.0) (2024-04-23)

### Features

- add underline low level token and fixed fg.weak contrast ([#58](https://github.com/qlik-trial/ui-kit/issues/58)) ([ebbcbdc](https://github.com/qlik-trial/ui-kit/commit/ebbcbdc26bd903de1f7821548cc05232122ff516))
- mui to adobe ([#71](https://github.com/qlik-trial/ui-kit/issues/71)) ([1c6067e](https://github.com/qlik-trial/ui-kit/commit/1c6067eab3d464956ac9785551a914a4d85fbbbb))

### Chore Work

- update npm dependencies ([#70](https://github.com/qlik-trial/ui-kit/issues/70)) ([672af48](https://github.com/qlik-trial/ui-kit/commit/672af48626772c6413b117984763abadd43ca07a))

## [0.4.0](https://github.com/qlik-trial/ui-kit/compare/v0.3.0...v0.4.0) (2024-03-25)

### Features

- **design-tokens:** design tokens beta v0.2 ([#54](https://github.com/qlik-trial/ui-kit/issues/54)) ([3ad1917](https://github.com/qlik-trial/ui-kit/commit/3ad1917367b3203e7c75111aa2fd4676a73eb2f2))

### Bug Fixes

- denylist some attributes for prefixing, fix list states ([#64](https://github.com/qlik-trial/ui-kit/issues/64)) ([7ea1bc8](https://github.com/qlik-trial/ui-kit/commit/7ea1bc88312f514670acc7b53670c68fd96aa812))
- set not-allowed cursor on disabled selectables ([#65](https://github.com/qlik-trial/ui-kit/issues/65)) ([8b8e81e](https://github.com/qlik-trial/ui-kit/commit/8b8e81e6c1a2564927cf1f0dd8b3f8e570d1f682))

### Chore Work

- update npm dependencies ([#52](https://github.com/qlik-trial/ui-kit/issues/52)) ([70dbf4b](https://github.com/qlik-trial/ui-kit/commit/70dbf4b3c5a2d4f54a1d6da111708ccadb34bed5))
- update npm dependencies ([#59](https://github.com/qlik-trial/ui-kit/issues/59)) ([2f3be64](https://github.com/qlik-trial/ui-kit/commit/2f3be64008afb6360b59b46b36899a74cfd64ba3))
- update npm dependencies ([#63](https://github.com/qlik-trial/ui-kit/issues/63)) ([004e613](https://github.com/qlik-trial/ui-kit/commit/004e613515db35545e03918a85cef66a788054e5))

## [0.3.0](https://github.com/qlik-trial/ui-kit/compare/v0.2.1...v0.3.0) (2024-03-04)

### Features

- default line heights, button typography, fix text overflowing ([#53](https://github.com/qlik-trial/ui-kit/issues/53)) ([e3ba208](https://github.com/qlik-trial/ui-kit/commit/e3ba208b80b1e0cbcd6e875bb5f48847cca67d0c))
- dialog element ([#55](https://github.com/qlik-trial/ui-kit/issues/55)) ([1912bc0](https://github.com/qlik-trial/ui-kit/commit/1912bc03b973a1ab026a3aa4358ca39cc749929a))

### Chore Work

- add dependabot for actions ([ba1a843](https://github.com/qlik-trial/ui-kit/commit/ba1a843b3f60660e947a62bc33b14d0838177da5))
- bump actions/checkout from 3 to 4 ([#48](https://github.com/qlik-trial/ui-kit/issues/48)) ([ab85f4f](https://github.com/qlik-trial/ui-kit/commit/ab85f4fca244bf9b00792b2249fbdda46688530b))
- bump actions/setup-node from 3 to 4 ([#47](https://github.com/qlik-trial/ui-kit/issues/47)) ([40f69cb](https://github.com/qlik-trial/ui-kit/commit/40f69cb8c935ee15a24cc8c33e893b428c459bcd))
- bump peter-evans/create-pull-request from 4 to 6 ([#46](https://github.com/qlik-trial/ui-kit/issues/46)) ([0ed89ad](https://github.com/qlik-trial/ui-kit/commit/0ed89ad03e7ceb6648d95187af3b23971e4a6ed5))
- bump pnpm/action-setup from 2 to 3 ([#49](https://github.com/qlik-trial/ui-kit/issues/49)) ([26337ec](https://github.com/qlik-trial/ui-kit/commit/26337ecd53bf334f69ced5135684abc007b44422))
- fix references to typescript types ([#45](https://github.com/qlik-trial/ui-kit/issues/45)) ([4269108](https://github.com/qlik-trial/ui-kit/commit/42691082d394c02b66608467762338a8dfcd2280))
- update deployment environments - see https://github.com/qlik-trial/qlik-releaser/blob/master/deployment-environments.md ([#56](https://github.com/qlik-trial/ui-kit/issues/56)) ([50dc1b7](https://github.com/qlik-trial/ui-kit/commit/50dc1b78a8ddb5096e4e1be11e22d72eac88d738))

## [0.2.1](https://github.com/qlik-trial/ui-kit/compare/v0.2.0...v0.2.1) (2024-02-27)

### Chore Work

- allow major versions of svelte 4 ([#44](https://github.com/qlik-trial/ui-kit/issues/44)) ([fd17069](https://github.com/qlik-trial/ui-kit/commit/fd17069c2cedfe355999d7a70ca2550cfec1e181))
- update component.yaml ([10c6ec7](https://github.com/qlik-trial/ui-kit/commit/10c6ec7bef47180cd95530ef79315997d25951b2))

## [0.2.0](https://github.com/qlik-trial/ui-kit/compare/v0.1.2...v0.2.0) (2024-02-27)

### Features

- added focus box shadow style token ([#37](https://github.com/qlik-trial/ui-kit/issues/37)) ([bce8e34](https://github.com/qlik-trial/ui-kit/commit/bce8e34744ec387a200f735cd8c96bdcfee21871))
- example of tabs component plus surfaces ([#41](https://github.com/qlik-trial/ui-kit/issues/41)) ([08659e4](https://github.com/qlik-trial/ui-kit/commit/08659e41715d6d8e015659e5e506a2a504110145))
- generate design-tokens ([#34](https://github.com/qlik-trial/ui-kit/issues/34)) ([f6f5b24](https://github.com/qlik-trial/ui-kit/commit/f6f5b24d89d5305a1e812fc540d74d14651c547a))
- helix and stories etc ([#32](https://github.com/qlik-trial/ui-kit/issues/32)) ([49f0542](https://github.com/qlik-trial/ui-kit/commit/49f0542515d802c10d9a32e32d8166364532b15a))
- more story work ([#38](https://github.com/qlik-trial/ui-kit/issues/38)) ([df878dd](https://github.com/qlik-trial/ui-kit/commit/df878ddc80570ae213584cf9684282b34a4536b1))
- storybook of some helix components and lots of fixes ([#35](https://github.com/qlik-trial/ui-kit/issues/35)) ([bc10926](https://github.com/qlik-trial/ui-kit/commit/bc10926f01487d8c01de027b04b8bd70c19ee272))

### Chore Work

- fix package.json files ([9fcb6f6](https://github.com/qlik-trial/ui-kit/commit/9fcb6f6aff4a36fe5508f70a192727f21ffba594))
- **qmfe-helix-themes:** set correct eslint config ([cb93739](https://github.com/qlik-trial/ui-kit/commit/cb93739c89527b7189a0c817016048ec9209568c))
- update config settings ([9256fad](https://github.com/qlik-trial/ui-kit/commit/9256fad581da260668699473a45c677c0f8f4113))
- update deployment environments - see https://github.com/qlik-trial/qlik-releaser/blob/master/deployment-environments.md ([#29](https://github.com/qlik-trial/ui-kit/issues/29)) ([66e7e38](https://github.com/qlik-trial/ui-kit/commit/66e7e381c5322f4ed9724fe991fa31a3a71eb528))
- update npm dependencies ([#28](https://github.com/qlik-trial/ui-kit/issues/28)) ([a966d3e](https://github.com/qlik-trial/ui-kit/commit/a966d3e32ea1cc6466a9fa010fd4a37756c5e865))
- update npm dependencies ([#33](https://github.com/qlik-trial/ui-kit/issues/33)) ([64629f3](https://github.com/qlik-trial/ui-kit/commit/64629f348f0f62480e8ce395500e1d3bcd0a9f39))
- update npm dependencies ([#36](https://github.com/qlik-trial/ui-kit/issues/36)) ([6913d9b](https://github.com/qlik-trial/ui-kit/commit/6913d9b798c8fd2514151edf1972e2edc5053f36))
- update npm dependencies ([#40](https://github.com/qlik-trial/ui-kit/issues/40)) ([6baf841](https://github.com/qlik-trial/ui-kit/commit/6baf8414a4c36ebde1fdd39e968159aa5b5dd51f))
- update npm dependencies ([#43](https://github.com/qlik-trial/ui-kit/issues/43)) ([6652b18](https://github.com/qlik-trial/ui-kit/commit/6652b184b9028cc9e1fd8f7399f5091a0af6269e))
- use codeCoverageExclusionReason instead of isUIOnly ([#30](https://github.com/qlik-trial/ui-kit/issues/30)) ([b031ca8](https://github.com/qlik-trial/ui-kit/commit/b031ca82b5967ce83ee45e6b83e7fba840e7a9e8))

## [0.1.2](https://github.com/qlik-trial/ui-kit/compare/v0.1.1...v0.1.2) (2024-01-26)

### Chore Work

- revert changes in component.yaml ([5942f15](https://github.com/qlik-trial/ui-kit/commit/5942f15372f653fe6461e98e13b11298031247c2))
- use multipackage approach for runtime modules ([b73be35](https://github.com/qlik-trial/ui-kit/commit/b73be35bde29fedb2cd3f69b43458fda1d476c6a))

## [0.1.1](https://github.com/qlik-trial/ui-kit/compare/v0.1.0...v0.1.1) (2024-01-26)

### Chore Work

- put runtime modules in separate folders in dist folder ([589477c](https://github.com/qlik-trial/ui-kit/commit/589477cdc81bca6b751c75879a25e288ea98fb3f))
- update component.yaml ([5e7289e](https://github.com/qlik-trial/ui-kit/commit/5e7289e74582bdd5b43626acd66347f39499c5b0))

## 0.1.0 (2024-01-25)

### Features

- **helix:** add `loadTheme` to entrypoint ([e446a7b](https://github.com/qlik-trial/ui-kit/commit/e446a7b9f4eb6e4beb490ce033a7531baed11c39))
- moving latest helix code over from episodeiv ([d4fecd8](https://github.com/qlik-trial/ui-kit/commit/d4fecd8595d76a8907e4b24b962ca738377056b9))

### Bug Fixes

- build npm ([7d60653](https://github.com/qlik-trial/ui-kit/commit/7d60653338e0fed4a7feab6f09e0ae12d4c7b795))

### Chore Work

- add/update .depConfig.yaml ([#24](https://github.com/qlik-trial/ui-kit/issues/24)) ([f5ef68c](https://github.com/qlik-trial/ui-kit/commit/f5ef68c1473c80c4b58d07b462fd943783cbca81))
- add/update .depConfig.yaml ([#26](https://github.com/qlik-trial/ui-kit/issues/26)) ([736f4ab](https://github.com/qlik-trial/ui-kit/commit/736f4abef4d16b7a8a3aca2d93bce4577dad3590))
- downgrade [@mui-lab](https://github.com/mui-lab) ([765d5bf](https://github.com/qlik-trial/ui-kit/commit/765d5bf02fcbd934fdfd9cd1b541c69c2c2d0f6e))
- fix ci ([20c5e30](https://github.com/qlik-trial/ui-kit/commit/20c5e30c8aedde41b0ccbd4e010106770a12ddd2))
- make it releasable ([#25](https://github.com/qlik-trial/ui-kit/issues/25)) ([1502784](https://github.com/qlik-trial/ui-kit/commit/15027847bc92284883578a10d3d0f55b82eff9b0))
- **release:** qr workflows v42.0.0 ([#22](https://github.com/qlik-trial/ui-kit/issues/22)) ([381b3e9](https://github.com/qlik-trial/ui-kit/commit/381b3e960add9d84ee38f48228640b4d18cc562e))
- **release:** version packages ([45bc049](https://github.com/qlik-trial/ui-kit/commit/45bc04964f6943e2121004487eb1a22ff0fee1db))
- **release:** version packages ([#7](https://github.com/qlik-trial/ui-kit/issues/7)) ([80313d7](https://github.com/qlik-trial/ui-kit/commit/80313d74e720294cf44203fcbeb76f4a1b524c4e))
- remove build folder from git ([fab0e35](https://github.com/qlik-trial/ui-kit/commit/fab0e350d4b2eb6e97d4d674278c425a84c2b984))
- rename helix to qmfe-helix ([eb5ba5f](https://github.com/qlik-trial/ui-kit/commit/eb5ba5fe2cc3780a0016848da71e7caec425b457))
- restructure packages ([f8d7321](https://github.com/qlik-trial/ui-kit/commit/f8d73213b6f42ff3df6de0fb7c34fc812f186fac))
- update all dependencies ([#10](https://github.com/qlik-trial/ui-kit/issues/10)) ([bf5ffad](https://github.com/qlik-trial/ui-kit/commit/bf5ffad4e23cebdd6354d71611efa415911c79e6))
- update all dependencies ([#11](https://github.com/qlik-trial/ui-kit/issues/11)) ([81ee348](https://github.com/qlik-trial/ui-kit/commit/81ee348a0c4e3a5da4260890690021d6f101bbf8))
- update all dependencies ([#12](https://github.com/qlik-trial/ui-kit/issues/12)) ([f8b72c8](https://github.com/qlik-trial/ui-kit/commit/f8b72c8462cc65903a063eb42a0463fb809c616d))
- update all dependencies ([#9](https://github.com/qlik-trial/ui-kit/issues/9)) ([a6b8328](https://github.com/qlik-trial/ui-kit/commit/a6b8328c46cc3a1648fcf6039660b48b1a9798fc))
- update component.yaml(s) ([7189881](https://github.com/qlik-trial/ui-kit/commit/718988162bf89c3bb44a3c686d9bc66d6c155b46))
- update deployment environments - see https://github.com/qlik-trial/qlik-releaser/blob/master/deployment-environments.md ([#23](https://github.com/qlik-trial/ui-kit/issues/23)) ([d16abb5](https://github.com/qlik-trial/ui-kit/commit/d16abb516f61cd6fd76b8eea50677f44ebd2c010))
- update npm dependencies ([3322960](https://github.com/qlik-trial/ui-kit/commit/3322960e8cd4a431088737ad5f6860facb55118c))
- update npm dependencies ([7b3c1b5](https://github.com/qlik-trial/ui-kit/commit/7b3c1b546a735bfc09b6839a85c099a7054c5d18))
- update npm dependencies ([8d2788d](https://github.com/qlik-trial/ui-kit/commit/8d2788d17f5071992dd7871a0082b3ef16fd9aad))
- update npm dependencies ([6b51f5e](https://github.com/qlik-trial/ui-kit/commit/6b51f5ea910fe453bd8815046abd016214845265))
- update npm dependencies ([#13](https://github.com/qlik-trial/ui-kit/issues/13)) ([9a25280](https://github.com/qlik-trial/ui-kit/commit/9a2528070bb9d4dad7c995d2b88ce8f80fd36229))
- update npm dependencies ([#21](https://github.com/qlik-trial/ui-kit/issues/21)) ([3d5e1e9](https://github.com/qlik-trial/ui-kit/commit/3d5e1e9714cedd6ec0f449606ed10242fc5b7224))
