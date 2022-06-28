---
templateEngine: liquid,md
section_type: about
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
