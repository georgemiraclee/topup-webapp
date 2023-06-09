import ReachItem from "./ReachItem";

const ReachSection = () => {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachItem title="290M+" subtitle="Transaksi Top Up" />

          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />

          <ReachItem title="12.500" subtitle="Game Tersedia" />

          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />

          <ReachItem title="99,9%" subtitle="Pemain Puas" />

          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />

          <ReachItem title="4.7" subtitle="Rekomendasi Berbagai Negara" />
        </div>
      </div>
    </section>
  );
};

export default ReachSection;
