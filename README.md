# Project Overview

This project involves the development and implementation of a website using Sitecore. The following steps outline the process undertaken from initial coding to final verification. For detail documentation refer to Sitecore Assessment documentation pdf included in the repository.

## 1. Initial Analysis

The first stage after raw coding the website was to analyze the website and individual components/renderings to determine the base data templates that can be reused across various site components/renderings, as well as the renderings (View/Controller) that will be used in Sitecore.

### 1.1 Component Analysis
- Created an Excel file with a list of all the components to be developed.
  
### 1.2 Field Breakdown
- Divided the components into individual fields and analyzed them to identify the base data templates for reuse.

## 2. Template Creation

With a clear understanding of the overall structure of the website components, I began creating the necessary templates, which included:
- Branch templates (renderings/components)
- Base data templates
- Data templates inheriting from the base data template
- Page templates organized in a structured folder, with standard values assigned to the base and data templates.

### 2.1 Base Data Templates
- Created base data templates for reuse across various website components/renderings, ensuring appropriate field names and standard values.

### 2.2 Data Templates
- Generated data templates using the appropriate base data templates, field names, and standard values.

### 2.3 Page Template
- Created the page template for utilization.

## 3. Layout Construction

The next step was to construct a layout in the layouts folder that is linked with the website's raw code and to add it to the page template.

### 3.1 Layout Creation
- Developed a layout and specified the source for it.

### 3.2 Presentation Details
- Added the layout to the presentation details of the produced page template.

## 4. Item Creation for Testing

Created an item inheriting the page base template in the `sitecore/content` to construct the assignment item and examine the raw HTML/CSS/JavaScript functionality of the site, confirming that the layout is working properly.

## 5. Data Template Organization

Established a folder and inherited the branch template to create the appropriate data templates corresponding to the components folder.

## 6. Data Source Configuration

Inherited the necessary data templates and populated them with the required data and data sources.

## 7. Rendering Development

After completing the data sources, the raw HTML/CSS was separated into renderings, and the appropriate placeholders were added to the main code.

### 7.1 View/Controller Renderings
- Created View/Controller renderings by attaching the various views, assigning the corresponding raw HTML/CSS, and modifying the main website HTML to include the required placeholders.

### 7.2 Integration into Content Tree
- Added the renderings to the main content tree site item along with the previously created data sources and verified that the site is functioning correctly with the renderings.

## 8. Dynamic Content Integration

Replaced the raw HTML/CSS/JavaScript data with the applicable Sitecore fields from the data source, applying the necessary logic based on the renderings utilized.

## 9. Final Verification

The final step was to confirm that the website was functioning correctly after replacing the static content with dynamic content from Sitecore, making any necessary adjustments as needed.
