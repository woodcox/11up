---
templateEngine: liquid,md
section_type: "about"
---

{% svg "github" %}

{%- for section in collections[section_type] -%}
{{ section.templateContent }}
{% endfor %}

{% render "partials/talking.php" %}
