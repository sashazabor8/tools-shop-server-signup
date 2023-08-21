import { ReactComponent as IconUser } from "svgImage/icon-user.svg";
import { ReactComponent as IconCart } from "svgImage/icon-cart.svg";

import s from "./HeaderUserMenu.module.css";

function HeaderUserMenu() {
  return (
    <div className={s.container}>
      <button type="button" className={s.buttonUser}>
        <IconUser width={32} height={30} />
      </button>
      <button type="button" className={s.buttonCart}>
        <IconCart width={27} height={30} />
      </button>
    </div>
  );
}

export default HeaderUserMenu;
