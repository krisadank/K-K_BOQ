# K&K BOQ Web App

## Project Overview

The K&K BOQ Web App will help manage construction projects and prepare Bills of Quantities (BOQs). It will organize reusable construction items, quantities, unit prices, and total costs for each project.

## Project Goals

- **Manage construction projects:** Create and organize projects, each with its own BOQ.
- **Maintain a master BOQ item library:** Store reusable construction items with descriptions, units of measurement, and unit prices.
- **Add existing items to projects:** Select items from the master library to build each project's BOQ.
- **Create project-specific custom items:** Add items unique to an individual project without requiring them to become part of the master library.
- **Calculate project costs:** Record quantities and unit prices, calculate each item's total cost, and sum item costs to determine the project's BOQ total.

## Cost Calculations

- **Item total cost = Quantity × Unit price**
- **Project BOQ total = Sum of all item total costs**

Quantities use the unit of measurement defined for each item, and unit prices represent the cost per unit.

## Intended Workflow

1. Create a construction project.
2. Add existing BOQ items from the master library.
3. Create custom items for project-specific requirements.
4. Enter quantities and review unit prices for each item.
5. Review calculated item costs and the overall project BOQ total.

## Current Scope

This document defines the project's initial goals only. Application development, technical architecture, database design, and user interface implementation are outside the scope of this task.
