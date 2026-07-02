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

### Cell Manipulation

| Key        | Description                    |
|------------|--------------------------------|
| yy         | Yank cell content              |
| dd         | Delete/yank cell content       |
| p / t      | Paste cell content             |
| Pv / Tv    | Paste cell value (not formula) |
| s{j/k/l/h} | Shift cell down/up/right/left  |

### Edit mode

| Key               | Description                                          |
|-------------------|------------------------------------------------------|
| e                 | Enter numerical EDIT mode                            |
| E                 | Enter text EDIT mode                                 |
| i/=               | Insert mode before cursor                            |
| a                 | Insert mode after cursor                             |
| I                 | Insert at the beginning of the cell                  |
| A                 | Insert at the end of the cell                        |
| w                 | Move to the beginning of the next word               |
| e                 | Move to the end of the current/next word             |
| b                 | Move to the beginning of the current/previous word   |
| 0                 | Move to the beginning of the line                    |
| $                 | Move to the end of the line                          |
| f{char} / F{char} | Move to the next/previous occurence of {char}        |
| r{char}           | Replace character under cursor with {char}           |
| d{e/w/$/0}        | Delete until word end/beginning / line end/beginning |
| x                 | Delete the character under the cursor                |

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
