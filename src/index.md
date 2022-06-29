---
templateEngine: liquid,md
section_type: about
collection_type: collections.about
---

{% if section_type == "home" %}{%- for section in collections.home -%}
{{ section.templateContent }}
{% endfor %}
{% elsif section_type == "about" %}{%- for section in collections.about -%}
{{ section.templateContent }}
{% endfor %}
{% elsif section_type == "media" %}{%- for section in collections.media -%}
{{ section.templateContent }}
{% endfor %}
{% endif %}

{% svg "github" %}

{%- for section in collection_type -%}
{{ section.templateContent }}
{% endfor %}
