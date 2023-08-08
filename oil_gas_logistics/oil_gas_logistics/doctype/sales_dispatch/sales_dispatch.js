frappe.ui.form.on('Sales Dispatch', {
    onload: function(frm) {
        frm.fields_dict['sales_dispatch_details'].grid.get_field('loading_unloading_dispatch').get_query = function(doc, cdt, cdn) {
            return {
                filters: {
                    'transaction_type': 'OUT',
                    'docstatus': 1
                }
            };
        };
    },
    //... rest of your code
});







//     qty: function(frm, cdt, cdn) {
//         calculate_quantity_and_amount(frm, cdt, cdn);
//     },
//     density: function(frm, cdt, cdn) {
//         calculate_quantity_and_amount(frm, cdt, cdn);
//     },
//     price: function(frm, cdt, cdn) {
//         calculate_quantity_and_amount(frm, cdt, cdn);
//     },
//     sales_dispatch_details_remove: function(frm, cdt, cdn) {
//         calculate_total(frm);
//     }
// });

// function calculate_quantity_and_amount(frm, cdt, cdn) {
//     var row = locals[cdt][cdn];
//     row.qty_in_liters = (row.qty * 1000) / row.density;
//     row.amount = row.qty_in_liters * row.price;

//     refresh_field("qty_in_liters", cdn, "sales_dispatch_details");
//     refresh_field("amount", cdn, "sales_dispatch_details");

//     calculate_total(frm);
// }

// function calculate_total(frm) {
    
//     let total_qty = 0;
//     let total_sales_price = 0;

//     frm.doc.sales_dispatch_details.forEach((d) => {
        
//         total_qty += parseFloat(d.quantity_in_liters);
//         total_sales_price += parseFloat(d.amount);
//     });
    
//     frm.set_value('total_qty', total_qty);
//     //frm.set_value('total_sales_price',total_sales_price);
    
//     frm.refresh_field('total_qty');
//     //frm.refresh_field('total_sales_price');
// }
