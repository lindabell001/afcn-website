Read trump_endorsed and america_first from the Supabase people table on every page load.
Do not hard-code any person names.

Keep the red Trump endorsed pill and the blue Rated AF pill.

Add a column between Office and America First? titled Trump Endorsed.
If trump_endorsed is T, show Yes and show the red pill.
If trump_endorsed is blank, show blank and do not show the red pill.
Never show No in the Trump Endorsed column.

In the America First? column, show america_first exactly as stored.
That will be a number or the word Insufficient.
Show the blue Rated AF pill only when america_first is a number of 20 or more.

When those two fields change in Supabase, the website must change with no name list.
