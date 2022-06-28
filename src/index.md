---
templateEngine: liquid,md
section_type: about
---

# {{ title }}
 
 ## {{ collection_type }}
 
 <div class="justify-center items-center">
    <div>
      <span class="text-change">Good design</span><br/>
      <span class="change">is<br/>as little design<br/>as possible</span><br/>
      <span x-data="{message:'🤖 Hello World 🤓'}" x-text="message"></span>
    </div>
  </div>
  
<ul>
  {%- for section in collections.about -%}
  <li>{{ section.data.title }}</li>
  <li>{{ section.templateContent }}</li>
  <li>{{ section.data.tags }}</li>
  <li>{{ section.inputPath | split: "/" }}</li>

  {%- assign crumbs = section.inputPath | split: '/' %}
  {%- assign current_page = crumbs.last %}
  {%- assign previous = section.inputPath | remove: current_page | split: '/' %}
  <li>{{ current_page }}</li>
  <li>{{ previous.last }}</li>
  {%- endfor %}
</ul>


{% svg "facebook" %}

{% for collection in collections.all %}
{%- assign crumbs = collection.inputPath | split: '/' %}
  {%- assign current_page = crumbs.last %}
  {%- assign previous = collection.inputPath | remove: current_page | split: '/' %}
  {% capture ctype %}{{ previous.last }}{% endcapture %}
<p>{{ collection.inputPath }}</p>
{%- endfor %}

{% svg "github" %}

{%- for page in collections.sections -%}
{%- assign crumbs = page.inputPath | split: '/' %}
  {%- assign current_url = crumbs.last %}
  {%- assign previous = page.inputPath | remove: current_url | split: '/' %}
  {%- assign content_type = previous.last %}
{% assign sectioned_page = collections.sections | where: "page.data.type", "about" %}
{{ sectioned_page.templateContent }}
{{ page.templateContent | where: page.data.type, "about" }}
{{ page.data.type }}
{{ content_type }}
{% endfor %}

{% svg "instagram" %}

{% if section_type == "home" %}{%- for section in collections.home -%}{% endif %}
{% if section_type == "about" %}{%- for section in collections.about -%}{% endif %}
{{ section.templateContent }}
{% endfor %}

{% svg "twitter" %}

{%- for section in collections.home -%}
{{ section.templateContent }}
{% endfor %}
