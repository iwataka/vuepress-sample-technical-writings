# Home

## Why [VuePress](https://v1.vuepress.vuejs.org/) ?

* extensible markdown syntax (by using [markdown-it](https://github.com/markdown-it/markdown-it) [plugins](https://www.npmjs.com/search?q=keywords:markdown-it-plugin))
* built-in text search
* beautiful theme
* faster than other static site generators

## Markdown-it plugins

[VuePress](https://v1.vuepress.vuejs.org/) uses [markdown-it](https://github.com/markdown-it/markdown-it) as a markdown processor and
you can use [plugins](https://www.npmjs.com/search?q=keywords:markdown-it-plugin) to extend [markdown-it](https://github.com/markdown-it/markdown-it) features.

These below things are just some examples of the plugins.

### Feature: PlantUML embedding

@startuml
start

if (foo) then (true)
    :bar;
else (false)
endif

stop
@enduml

### Feature: Multi-markdown table

First header | Second header
-------------|---------------
List:        | More  \
- over       | data  \
- several    |       \
- lines      |
rowspan      | cell1
^^           | cell2
colspan ||

### Feature: Including other file

The following block includes [uml.md](uml.md)

!!!include(docs/uml.md)!!!

::: warning
Currently this plugin can't resolve paths relative to a parent file.\
I created an [issue](https://github.com/camelaissani/markdown-it-include/issues/9) about that.
:::

## Downsides of [VuePress](https://v1.vuepress.vuejs.org/)

* [node.js](https://nodejs.org/ja/) is required (a little difficult to use for non-technical people)
