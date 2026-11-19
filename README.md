# Shift Report Builder

Builds sales reports from Transact Cloud POS "Item Sales Detail – modifier count detailed" exports (.xls or .xlsx).

**Shift reports** – Blue Wall Morning / Evening reports and the Harvest weekly report, as Excel files.

**Explore sales & costs**
- Add any number of exports (days, shifts, locations) and an optional item cost list (.xlsx, .xls or .csv).
- Pick locations (searchable, works with any number of locations), days and shifts.
- Show sales, units, average price, add-on sales, cost, gross profit or margin, grouped by location, item, category, menu group or day.
- Search any item by name or item number.
- Download the current view as a formatted Excel workbook with live formulas.
- Data checks flag anything that doesn't tie out: register reconciliation, duplicate files, overlapping exports,
  refunds, $0 items, price changes, missing or conflicting costs, and items costing more than they sell for.

Everything runs in your browser (Python via Pyodide). Sales and cost files are never uploaded or stored in this repository.
