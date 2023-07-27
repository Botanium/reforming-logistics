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


# custom_app.custom_app.doctype.loading_unloading_dispatch.loading_unloading_dispatch.py

    # def calculate_product_net_weight(self):
    #     truck_weight = self.truck_weight or 0
    #     total_weight_of_truck_and_product = self.total_weight_of_truck_and_product or 0
    #     self.product_net_weight = total_weight_of_truck_and_product - truck_weight

    # def calculate_difference_in_weight(self):
    #     product_net_weight = self.product_net_weight or 0
    #     kirkuk_net_weight = self.kirkuk_net_weight or 0
    #     self.difference_in_weight = product_net_weight - kirkuk_net_weight

    # def calculate_net_weight_in_tonne(self):
    #     product_net_weight = self.product_net_weight or 0
    #     self.net_weight_in_tonne = product_net_weight / 1000

    # def calculate_destination_weight_in_tonne(self):
    #     kirkuk_net_weight = self.kirkuk_net_weight or 0
    #     self.destination_weight_in_tonne = kirkuk_net_weight / 1000

    # def calculate_destination_weight_in_meters(self):
    #     kirkuk_net_weight = self.kirkuk_net_weight or 0
    #     kirkuk_standard_density = self.kirkuk_standard_density or 1
    #     self.destination_weight_in_meters = (kirkuk_net_weight / 1000) / kirkuk_standard_density

    # def calculate_weight_in_meters(self):
    #     product_net_weight = self.product_net_weight or 0
    #     suli_standard_density = self.suli_standard_density or 1
    #     self.weight_in_meters = (product_net_weight / 1000) / suli_standard_density

    # def calculate_normal_weight_in_meters(self):
    #     product_net_weight = self.product_net_weight or 0
    #     density = self.density or 1
    #     self.normal_weight_in_meters = (product_net_weight / 1000) / density
