import Link from "next/link";
import UserData from "../components/organisms/Onboarding/UserData";

const onboarding = () => (
  <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
    <div className="container mx-auto">
      <form action="">
        <div className="form-input d-md-block d-flex flex-column">
          <UserData avatar="true" name="User Dummy" email="userdummy@gmail.com" />
          <div className="pt-50 pb-50">
            <label
              htmlFor="category"
              className="form-label text-lg fw-medium color-palette-1 mb-10"
            >
              Game Favorit
            </label>
            <select
              id="category"
              name="category"
              className="form-select d-block w-100 rounded-pill text-lg"
              aria-label="Favorite Game"
            >
              <option value="" disabled selected>
                Pilih Kategori
              </option>
              <option value="fps">First Person Shoter</option>
              <option value="rpg">Role Play Game</option>
              <option value="arcade">Arcade</option>
              <option value="sport">Olahraga</option>
            </select>
          </div>

          <div className="button-group d-flex flex-column mx-auto">
            <Link href="/onboarding-finish">
              <a
                className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                role="button"
              >
                Buat Akun Saya
              </a>
            </Link>

            <Link href="/">
              <a
                className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                role="button"
              >
                Syarat & Ketentuan
              </a>
            </Link>
          </div>
        </div>
      </form>
    </div>
  </section>
);

export default onboarding;
