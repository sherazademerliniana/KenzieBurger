import Logo from "./Logo/Index";
import Search from "./Search";
import { Head } from "./style";

function Header({ search }) {
  return (
    <Head>
      <Logo className="logo" />
      <Search search={search} />
    </Head>
  );
}

export default Header;
