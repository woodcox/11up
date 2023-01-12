---
title: hints
permalink: hints/
tags: hint
---

# liquid url filter = pathPrefix

Deploy to https://woodcox.github.io/11up/ on GitHub pages without modifying your config. This allows you to use the same code-base to deploy to either GitHub pages or Netlify

Alter the package.json 'build:eleventy' script with npx @11ty/eleventy --pathprefix=11up. For example:

~~~json
{
  "scripts": {
    "build:eleventy": "ELEVENTY_ENV=dev npx @11ty/eleventy --pathprefix=11up",
    "minify:eleventy": "ELEVENTY_ENV=prod npx @11ty/eleventy --pathprefix=11up"
  },
}
~~~

# Using front matter element in a liquid for loop

First add some front matter 

~~~yaml
---
section_type: "about"
---
~~~

Use the [] syntax, for example collections[section_type]. See this [11ty GitHub discussion](https://github.com/11ty/eleventy/discussions/2028) about dynamically accessing the properties.

~~~liquid
{% raw %}
{%- for section in collections[section_type] -%}
{{ section.templateContent }}
{% endfor %}
{% endraw %}
~~~
