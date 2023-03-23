import Link from "next/link";

const CheckoutConfirmation = () => {
  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
      Saya sudah melakukan transaksi tranfer
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <Link href="/checkout-complete">
          <a
            className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
            role="button"
          >
            Konfirmasi Pembayaran
          </a>
        </Link>
      </div>
    </>
  );
};

export default CheckoutConfirmation;
