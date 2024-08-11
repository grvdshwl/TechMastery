/*
System Design Overview - Vending Machine
//* https://www.youtube.com/watch?v=D0kDMUgo27c

Components:

    Product:
        - Represents the items available in the vending machine.
        - Attributes: id, name, price, quantity.

    Inventory:
        - Manages the collection of products.
        - Responsible for adding, removing, and updating product information.

    Payment System:
        - Handles the payment process.
        - Supports different payment methods (cash, card).
        - Verifies if the payment is successful.

    Display:
        - Shows available products, prices, and other messages (e.g., "Thank you", "Insufficient funds").
        - User interacts with this to select products and initiate purchases.

    Controller:
        - Manages the overall workflow of the vending machine.
        - Communicates with the inventory and payment system.

    Vending Mechanism:
        - Dispenses the selected product if the payment is successful.

Interactions:

    Product Selection:
        - User selects a product.
        - The system checks if the product is available in the inventory.

    Payment:
        - User pays using cash or card.
        - The system verifies the payment.

    Dispense Product:
        - If payment is successful, the product is dispensed.
        - Inventory is updated.
*/
