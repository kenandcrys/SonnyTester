### Testing Cleanup

-Login to the App with a super admin account.

#### Buyers

- Remove all Buyers created for testing.
  - Verify that all created Buyers, Carts, and Reviews does not show up on their respective tables.

#### Analytics

- Remove all analytics and feedback created for testing.
  - Verify that all created Reviews, Competitors, and other Analytic data does not show up on their respective tables.

#### Products

- Remove all Products created for testing.
  - Verify that all created Products do not show up on the product table.

#### Sellers

- Remove all Sellers created for testing.
  - Verify that all new Sellers do not show up on the user table.

#### Admin

- Click on the Admin link.
- Delete all admins created for testing (do NOT delete the account being used for cleanup).
  - Verify that the user is no longer on the super admin table and not in Authentication.
- Delete all product types created for testing.
- Click on the profile page.
- Logout from the app.
- _(Optional)_
  - If the super admin account is no longer needed, go to Authentication and delete the super admin account used for testing.