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

{% case section_type %}
  {% when "about" %}
     {%- for section in collections.about -%}
  {% when "home" %}
     {%- for section in collections.home -%}
  {% else %}
     {%- for section in collections.all -%}
{% endcase %}

{{ section.templateContent }}
{% endfor %}
