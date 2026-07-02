const DOM = {
  tables: document.getElementById('tables'),
  links: document.getElementById('links'),
}

function urlSlug(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-');
}

async function fetchFile(filename, type='json') {
  try {
    const response = await fetch(`${filename}?v=${Date.now()}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch ${filename}: ${response.statusText}`);
    }

    if (type === 'json') return await response.json();
    if (type === 'text') return await response.text();

    throw new Error(`Invalid type ${type}`);
  } catch (error) {
    console.error('Error fetching file:', error);
    throw error;
  }
}

async function render() {
  const readmeText = await fetchFile('README.md', 'text');
  // console.log(readmeText);
  const readmeArr = parseMarkdown(readmeText);
  // console.log(readmeArr);
  DOM.tables.innerHTML = '';
  let color = 0;
  readmeArr.forEach(item => {
    const article = document.createElement('article');
    const link = document.createElement('li');
    const slug = urlSlug(item.title);
    link.innerHTML = `<a href="#${slug}">${item.title}</a>`;
    article.id = slug;
    const header = document.createElement('header');
    const body = document.createElement('body');
    header.innerHTML = `<h5 class="color-${color}">${item.title}</h5>`;
    article.appendChild(header);
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    item.commands.forEach(command => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="key monospace color-15">${command.key}</td>
        <td class="description">${command.description}</td>
      `;
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    article.appendChild(table);
    DOM.tables.appendChild(article);
    DOM.links.appendChild(link);
    color += 1;
  });
}

function parseMarkdown(markdownText) {
  const lines = markdownText.split('\n');
  const result = [];
  let currentSection = null;
  let inTable = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Skip empty lines and header 1/2
    if (!line || line.startsWith('# ') || line.startsWith('## ')) {
      continue;
    }

    // Check for header 3 (new section)
    if (line.startsWith('### ')) {
      // Save previous section if it exists
      if (currentSection) {
        result.push(currentSection);
      }
      // Create new section
      currentSection = {
        title: line.replace(/^### /, '').trim(),
        commands: []
      };
      inTable = false;
      continue;
    }

    // Detect table separator to mark start of table
    if (line.match(/^\|[\s\-|:]+\|$/)) {
      inTable = true;
      continue;
    }

    // Parse table rows
    if (line.startsWith('|') && inTable && currentSection) {
      // Extract cell contents
      const cells = line
        .split('|')
        .slice(1, -1) // Remove first and last empty elements
        .map(cell => cell.trim());

      if (cells.length >= 2) {
        // This is a data row
        const command = {
          key: cells[0],
          description: cells[1]
        };
        currentSection.commands.push(command);
      }
    }
  }

  // Don't forget to push the last section
  if (currentSection) {
    result.push(currentSection);
  }

  return result;
}

render();
