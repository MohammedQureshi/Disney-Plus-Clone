import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from './theme-toggler';
import SearchInput from './search-input';
import GenreDropdown from './genre-dropdown';

function Header() {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/" className="mr-10 ">
        <Image
          src="https://links.papareact.com/a943ae"
          alt="Disney Logo"
          width={120}
          height={100}
          className="cursor-pointer invert-0 dark:invert"
        />
      </Link>
      <div className="flex space-x-2">
        <GenreDropdown />
        <SearchInput />
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
