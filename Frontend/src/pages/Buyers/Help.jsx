import Footer from "../../components/Footer/Footer";

const Help = () => {
  return (
    <div>
      <div>
        <div>
          <a href="/account">My account</a>
        </div>
        <div>
          <a href="">Orders</a>
        </div>
        <div>
          <a href="">Payments</a>
        </div>
        <div>
          <a href="">Pending Reviews</a>
        </div>
        <div>
          <a href="">Voucher</a>
        </div>
        <div>
          <a href="">Recently Viewed</a>
        </div>
        <div>
          <a href="">Notifications</a>
        </div>
        <div>
          <a href="">Account Management</a>
        </div>
        <div>
          <a href="">Edit Shipping address</a>
        </div>
        <div>
          <a href="">Digital service and device Support</a>
        </div>
        <div>
          <a href="">Customer Service</a>
        </div>
        <button>LOGOUT</button>
      </div>

      <div>
        <p>Need help let us help you!</p>

        <p>Give us a call: 1-800-123-4567</p>
        <p>Email us: nyshopping@shopping.com</p>
        <p>Monday - Friday 6am - 5pm PST</p>
        <p>Saturday - Sunday 8am - 2pm PST</p>
      </div>

      <div>
        <p>See frequently asked question on popular Topics</p>
      </div>

      <button>
        <a href="/feedback">Give us feedback</a>
      </button>
      <Footer />
    </div>
  );
};

export default Help;
