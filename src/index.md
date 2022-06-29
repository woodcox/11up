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

{% svg "github" %}

{% capture collection_type %}
{% case section_type %}
  {% when "about" %}
     {%- for section in collections.about -%}
  {% when "home" %}
     {%- for section in collections.home -%}
  {% else %}
     {%- for section in collections.all -%}
{% endcase %}
{% endcapture %}

{% echo collection_type %}
{{ section.templateContent }}
{% endfor %}
