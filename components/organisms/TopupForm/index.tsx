import Link from "next/link";
import RadioButton from "./RadioButton";

const TopupForm = () => {
  return (
    <form action="./checkout.html" method="POST">
      <div className="pt-md-50 pt-30">
        <div className="">
          <label
            htmlFor="ID"
            className="form-label text-lg fw-medium color-palette-1 mb-10"
          >
            ID Verifikasi
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            id="ID"
            name="ID"
            aria-describedby="verifyID"
            placeholder="Enter your ID"
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-between">
          <RadioButton
            type="topup"
            id="topup1"
            title="125"
            desc="Rp 3.250.000"
          />
          <RadioButton
            type="topup"
            id="topup2"
            title="225"
            desc="Rp 3.250.000"
          />
          <RadioButton
            type="topup"
            id="topup3"
            title="350"
            desc="Rp 3.250.000"
          />
          <RadioButton
            type="topup"
            id="topup4"
            title="550"
            desc="Rp 3.250.000"
          />
          <RadioButton
            type="topup"
            id="topup5"
            title="750"
            desc="Rp 3.250.000"
          />
          <div className="col-lg-4 col-sm-6" />
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
         Metode Pembayaran
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            <RadioButton
              type="payment"
              id="transfer"
              title="Transfer"
              desc="Worldwide Available"
            />
            <RadioButton
              type="payment"
              id="visa"
              title="VISA"
              desc="Credit Card"
            />
            <div className="col-lg-4 col-sm-6" />
          </div>
        </fieldset>
      </div>
      <div className="pb-50">
        <label
          htmlFor="bankAccount"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Nama Akun Bank
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="bankAccount"
          name="bankAccount"
          aria-describedby="bankAccount"
          placeholder="Masukan Nama Akun Bank Anda"
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <Link href="/checkout">
          <a
            type="submit"
            className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
          > 
            Selanjutnya
          </a>
        </Link>
      </div>
    </form>
  );
};

export default TopupForm;
