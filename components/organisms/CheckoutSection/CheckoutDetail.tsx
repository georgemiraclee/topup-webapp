import React from "react";

const CheckoutDetail = () => {
  return (
    <>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Detail Pembelian
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          ID Game Anda<span className="purchase-details">masayoshizero</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          ID Pesanan<span className="purchase-details">#GG001</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Item <span className="purchase-details">250 Diamonds</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Harga <span className="purchase-details">Rp 42.280.500</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Pajak (10%) <span className="purchase-details">Rp 4.228.000</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Total{" "}
          <span className="purchase-details color-palette-4">
            Rp 55.000.600
          </span>
        </p>
      </div>
      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Informasi Pembayaran
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Nama Akun Anda{" "}
          <span className="purchase-details">Masayoshi Angga Zero</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Tipe <span className="payment-details">Transfer Luar Negara</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Nama Bank <span className="payment-details">Mandiri</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Nama Akun Bank{" "}
          <span className="payment-details">PT Store GG Indonesia</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Nomor Bank{" "}
          <span className="payment-details">1800 - 9090 - 2021</span>
        </p>
      </div>
    </>
  );
};

export default CheckoutDetail;
