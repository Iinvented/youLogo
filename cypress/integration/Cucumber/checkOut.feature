Feature: Checkout feature

    Scenario:
        Given user is logged into the youLogo
        And cart is empty
        And a sample product is inserted into the youLogo
        And the product is found on youLogo
        When adding this product to the cart
        Then user should be able to check out successfully



