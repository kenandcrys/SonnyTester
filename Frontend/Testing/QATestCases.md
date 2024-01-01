## QA Test Cases

The following section provides a comprehensive list of tests that should be performed to ensure that all functions of the application are working as intended. It is split apart into the different app user types and the aspects of the apps that they use.

**QA prerequisites:**

- TBA (The authentication and environment variables of the application have not yet been implemented)

- _Notes_
  - The app was built for use on a desktop and responsive design for mobile/tablet.

---

### Super Administrator

A super admin user is for SONNY administrators to perform all CRUD functions within the app.

- Login to the app with a super admin account.
  - Verify that app is forwarded to the Home page.
  - Verify that "Shop Online New York Admin" appears in the header.

#### User admin - Buyers

- Click on the Register page link.
- Fill out form and click on the create account button to create a new buyer account.
- Verify that the new buyer is added to the table on the buyers page.
- Verify that the new buyer is directed to the home page.

#### User admin - Sellers

- Click on the Register page link.
- Fill out form and click on the create account button to create a new seller account.
- Verify that the new seller is added to the table on the sellers page.
- Verify that the new seller is directed to the seller dashboard.

#### User profile

- Click on the profile link.
- Update the user name.
  - Verify that the new name appears in the app.
- Logout from the app.

---
#### Products admin - Sellers

- Verify that the products table is empty and the page section loaded without issue.
- Click on the Add Product button to create a new product.
  - Verify that the new product was added to the list.
- Create two more products (to be used for later testing).

#### Products - Seller

- Login to the app with a verified seller account.
  - Verify that app is forwarded to the seller dashboard.
  - Verify that the seller name appears in the header.
  - Verify that the analytics and order stats are visible for the user.
- Click on the List of Products link.
    - Verify that app is forwarded to the list of products.
  - Verify that the products appear on the table.
- Click on the products links.
  - Verify that the app is forwarded to the product details page.
  - Verify that total sales, type, ratings, inventory, revenue, and gross profit appears in the product details page.
  - Verify that the published status appears within the button in the upper right of the product details page.
- Click on the carousel arrows under product photo.
  - Verify that the product photo changes to selected photo.
- Click on the See 230 Ratings link.
  - Verify that the links open in a new tab/window in the browser to see full ratings and reviews.
- Click on the Go Back to data table link.
  - Verify that the app is forward to the list of products page.
- Click on the Delete Product button.
  - Verify that the app is forward to the list of products page.
  - Verify that an alert saying "{product name} deleted" appears at the top of the page.

#### User profile

- Click on the profile link.
- Update the user email address.
- Logout from the app.

---

### Buyer User Flow

- Login to the app with a buyer account.
  - Verify that app is forwarded to the home page.
  - Verify that the buyer name appears in the header.
  - Verify that the featured products are visible for the user.
- Click on a product link.
  - Verify that app is forwarded to the products details page.
  - Verify that the product details are available.
- Click on reviews.
  - Verify that the reviews show in an abbreviated manner.
  - Verify that the links open in a new tab/window in the browser to see full reviews.
- Click on the add to cart button.
  - Verify that the cart shows a "1" on the cart icon.
  - Verify that the cart table shows the product object.
- Click on the cart icon.
  - Verify that app is forwarded to the cart page.
  - Verify that the cart shows the product added.
- Click on the checkout button.
  - Verify that app is forwarded to the checkout page.
  - Verify that payment details and shipping address details can be filled out and saved.
- Click on the place order button with incorrect payment details.
  - Verify that app shows the error alert saying "payment failed".
  - Verify that payment details shows errors where needed.
- Click on the place order button with correct payment details.
  - Verify that app is forwarded to the order details page.
  - Verify that app shows the confirmation alert saying "payment successful".
  - Verify that app shows tracking information.
- Logout of the app with a buyer account.
  - Verify that app is forwarded to the login page.

  ### Seller User Flow

- Login to the app with a seller account.
  - Verify that app is forwarded to the unverified home page.
  - Verify that the seller name appears in the header.
  - Verify that the 3 verification steps are visible for the user.
- Login to the app with a verified seller account.
  - Verify that app is forwarded to the verified home page.
  - Verify that the seller name appears in the header.
  - Verify that the Add your items button are enabled for the user.
- Click on Payments link.
  - Verify that the app is forwarded to the payments page.
- Click on Activity Feed link.
  - Verify that app is forwarded to the list of products page and activity is highlighted.
  - Verify that the links forward the app to the product details page with activity highlighted.
- Click on Ratings & Reviews link.
  - Verify that the app is forwarded to the Ratings & Reviews page.
  - Verify that the links open in a new tab/window in the browser to see full reviews.
- Click on Order List link.
  - Verify that app is forwarded to the list of orders page.
- Click on Returns & Refunds link.
  - Verify that app is forwarded to the list of returns & refunds page.
- Click on Disputes link.
  - Verify that app is forwarded to the disputes page.
- Logout of the app with a seller account.
  - Verify that app is forwarded to the login page.

#### User profile

- Click on the profile link.
- Update the user email address.
  - Verify that the new email address appears on screen in the app.
- Logout from the app.