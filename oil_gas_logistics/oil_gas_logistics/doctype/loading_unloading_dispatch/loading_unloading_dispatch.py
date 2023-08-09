# Copyright (c) 2023, botan.b.abdullah@gmail.com and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class LoadingUnloadingDispatch(Document):
    def autoname(self):
        if self.transaction_type == 'IN':
            self.name = f"IN-{self.wb_id}-{self.loading_location}"
        elif self.transaction_type == 'OUT':
            self.name = f"OUT-{self.wb_id}-{self.unloading_location}"
        elif self.transaction_type == 'TRANSFER':
            self.name = f"Transfer-{self.wb_id}-{self.loading_location}-{self.unloading_location}"
        else:
            frappe.throw('Invalid transaction type selected.')

    @frappe.whitelist()
    def get_attached_images(docname):
        return frappe.get_all("File", filters={"attached_to_name": docname, "attached_to_doctype": "Loading Unloading Dispatch", "is_private": 0})
