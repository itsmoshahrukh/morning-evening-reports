# Sales Report Studio

Live sales reports, forecasting and Excel / PDF exports from Transact Cloud POS exports.
Open it at **https://itsmoshahrukh.github.io/morning-evening-reports/** and install it as an app from the browser.

**Live report** – drop any number of exports at once, as Excel or PDF: Item Sales Detail, Item Sales Summary and
Item Sales Summary with Cost (any shift, day or week, any location – Blue Wall, Harvest, cafes, Mullins), plus your own
cost list (.xlsx, .xls or .csv). PDFs are read character by character and reconciled like Excel exports; any export can be
downloaded as a clean Excel table. Revenue centers come from the register names and get their own filter and grouping.
Filter by day/shift, location and venue; switch between sales, units, average price, add-ons, cost, profit and margin;
search any item and open its deep dive (trend, locations, add-ons ordered with it). Download Excel or a PDF summary.

**Forecast** – every day you load is remembered in your browser. Once 10 trading days over 2 weeks are stored,
click *Generate forecast* for the next 5 or 10 trading days by location and shift, with a prep list for the next day.
The method is picked by testing each one on your own past days, and the typical error is shown.

**Excel reports** – the standard Blue Wall Morning/Evening, Harvest weekly and Sales & Margin workbooks.

**History** – see, remove or exclude stored days; save and import backups.

Every export is reconciled to the register totals, and anything that doesn't tie out is flagged.
Everything runs in your browser (Python via Pyodide). Sales files and history are never uploaded or stored in this repository.
