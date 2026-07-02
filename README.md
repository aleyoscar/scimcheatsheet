# sc-im Cheatsheet

## Commands

### General

| Key        | Description                           |
|------------|---------------------------------------|
| :help / :h | Show help                             |
| :w         | Save file                             |
| :w {file}  | Save current spreadsheet as {file}    |
| :w!        | Force save file if exists (Overwrite) |
| :wq / :x   | Save file and quit                    |
| :q         | Quit sc-im                            |
| :q!        | Force quit, Discard changes           |
| :set       | Show set options                      |
| :showmaps  | Show user defined mapped keys         |
| .          | Repeat previous action                |
| u          | Undo                                  |
| Ctrl+r     | Redo                                  |

### Navigation

| Key      | Description                                      |
|----------|--------------------------------------------------|
| h j k l  | "← ↓ ↑ →"                                        |
| ^        | Move to first row                                |
| #        | Move to last valid row                           |
| 0        | Move to first column                             |
| $        | Move to last column                              |
| g0       | Go to leftmost visible column                    |
| g$       | Go to rightmost visible column                   |
| go{cell} | Go to {cell}                                     |
| gg       | Go to first cell in the sheet                    |
| G        | Go to last valid cell in the sheet               |
| Ctrl+e   | Scroll a row down (Maintain cursor position)     |
| Ctrl+y   | Scroll a row up (Maintain cursor position)       |
| zl       | Scroll a column right (Maintain cursor position) |
| zh       | Scroll a column left (Maintain cursor position)  |
| Ctrl+f   | Scroll a page down                               |
| Ctrl+b   | Scroll a page up                                 |

### Formatting

| Key      | Description                              |
|----------|------------------------------------------|
| {        | Align Left                               |
| 'Pipe'   | Align Center                             |
| }        | Align Right                              |
| f{+/-}   | Increase/Decrease decimal precision      |
| {+/-}    | Increase/Decrease numerical value        |
| {n}{+/-} | Increase/Decrease numerical value by {n} |
| f< / fh  | Decrease column width                    |
| f> / fl  | Increase column width                    |
| f↓ / fj  | Increase row height                      |
| f↑ / fk  | Decrease row height                      |
| aa       | Auto-resize cell to fit contents         |

### Row/Column Manipulation

| Key        | Description                         |
|------------|-------------------------------------|
| ir         | Insert row above                    |
| or         | Insert row below                    |
| ic         | Insert column left                  |
| oc         | Insert column right                 |
| dr         | Delete/yank row                     |
| dc         | Delete/yank column                  |
| yr         | Yank row                            |
| yc         | Yank column                         |
| p          | Paste row below, paste column left  |
| t          | Paste row above, paste column right |

### Numeric Functions

| Key                     | Description                        |
|-------------------------|------------------------------------|
| =@sum({range})          | Sum a {range}                      |
| =@prod({range})         | Product of a {range}               |
| =@max({range})          | Find max of a {range}              |
| =@min({range})          | Find min of a {range}              |
| =@avg({range})          | Average of a {range}               |
| =@count({range})        | Count items in a {range}           |
| =@floor({expr})         | Floor (int) of {expr}              |
| =@ceil({expr})          | Ceiling (int) of {expr}            |
| =@rnd({expr}, [n])      | Round {expr} to [n] decimal places |
| =@pi                    | Pi constant                        |
| =@pow({expr1}, {expr2}) | Power of {expr1} to {expr2}        |
