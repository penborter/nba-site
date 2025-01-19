document.addEventListener('DOMContentLoaded', () => {
  const teamFilter = document.getElementById('team-filter');
  let currentFilter = '';
  const table = document.querySelector('.full-table');
  const headers = table.querySelectorAll('th');
  let currentSort = { column: null, ascending: true };

  const compareFunction = (a, b, columnIndex, type) => {
      const aVal = a.children[columnIndex].textContent.trim();
      const bVal = b.children[columnIndex].textContent.trim();
      
      if (type === 'number') {
          return (parseFloat(aVal) || 0) - (parseFloat(bVal) || 0);
      }
      return aVal.localeCompare(bVal);
  };

  const filterRows = () => {
      const rows = Array.from(table.querySelectorAll('tr')).slice(1);
      rows.forEach(row => {
          const teamCell = row.querySelector('.team-col');
          const display = !currentFilter || teamCell.textContent.trim() === currentFilter;
          row.style.display = display ? '' : 'none';
      });
  };

  const updateRanks = () => {
      let rank = 1;
      const rows = Array.from(table.querySelectorAll('tr')).slice(1);
      rows.forEach(row => {
          if (row.style.display !== 'none') {
              row.querySelector('.table-rank').textContent = rank++;
          }
      });
  };

  teamFilter.addEventListener('change', (e) => {
      currentFilter = e.target.value;
      filterRows();
      if (currentSort.column !== null) {
          sortTable(currentSort.column, headers[currentSort.column].classList.contains('right') ? 'number' : 'text');
      }
  });

  const sortTable = (columnIndex, type) => {
      const tbody = table.querySelector('tbody') || table;
      const rows = Array.from(tbody.querySelectorAll('tr')).slice(1); // skip header
      
      let sortedRows = rows.sort((a, b) => {
          const comparison = compareFunction(a, b, columnIndex, type);
          return currentSort.ascending ? comparison : -comparison;
      });

      // clear existing rows
      rows.forEach(row => tbody.removeChild(row));
      
      // insert sorted rows
      sortedRows.forEach(row => {
          tbody.appendChild(row);
      });
  };

  headers.forEach((header, index) => {
      // skip team column and make non-sortable
      if (header.classList.contains('center')) {
          return;
      }
      
      // determine sort type based on column class
      const type = header.classList.contains('right') ? 'number' : 'text';
      
      header.addEventListener('click', () => {
          // toggle sort direction if same column
          if (currentSort.column === index) {
              currentSort.ascending = !currentSort.ascending;
          } else {
              currentSort = { column: index, ascending: true };
          }

          // remove existing sort indicators
          headers.forEach(h => h.classList.remove('sort-asc', 'sort-desc'));
          
          // add new sort indicator
          header.classList.add(currentSort.ascending ? 'sort-asc' : 'sort-desc');
          
          sortTable(index, type);
      });

      // add sort cursor style
      header.style.cursor = 'pointer';
  });
});