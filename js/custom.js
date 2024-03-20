
      jQuery('#stocktable').DataTable({
            "lengthChange": false,
            searching: false,
            info: true,
            paging: true,
            rowReorder: true,
            fixedHeader: {
                  header: false,
                  footer: true
              },
            language: {
      'paginate': {
      'previous': '<span class="prev-text">Prev</span>',
      'next': '<span class="next-text">Next</span>'
      }
      }
      
         });
