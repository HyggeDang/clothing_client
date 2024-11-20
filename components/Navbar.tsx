"use client";

import useCart from "@/lib/hooks/useCart";
import { UserButton, useUser } from "@clerk/nextjs";
import { Camera, CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useLayoutEffect } from "react";
import Modal from "react-modal";
import ImageSearch from "./ImageSearch"; // Import component ImageSearch
import ImageUpload from './ImageUpload';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Sử dụng useState để quản lý trạng thái mở/đóng modal

  // Sử dụng useLayoutEffect để gọi setAppElement sau khi DOM đã được render hoàn toàn
  // Mở modal
  const openModal = () => setIsModalOpen(true);

  // Đóng modal
  const closeModal = () => setIsModalOpen(false);

  const handleHomeClick = () => {
    window.location.href = "/"; // Reload trang khi nhấn Home
  };

  return (
    <div className="sticky top-0 z-10 py-2 px-10 flex gap-2 justify-between items-center bg-white max-sm:px-2">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={130} height={100} />
      </Link>

      <div className="flex gap-4 text-base-bold max-lg:hidden">
        <button
          onClick={handleHomeClick}
          className={`hover:text-red-1 ${pathname === "/" && "text-red-1"}`}
        >
          Home
        </button>
        <Link
          href={user ? "/wishlist" : "/sign-in"}
          className={`hover:text-red-1 ${pathname === "/wishlist" && "text-red-1"}`}
        >
          Wishlist
        </Link>
        <Link
          href={user ? "/orders" : "/sign-in"}
          className={`hover:text-red-1 ${pathname === "/orders" && "text-red-1"}`}
        >
          Orders
        </Link>
      </div>

      <div className="flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg">
        <input
          className="outline-none max-sm:max-w-[120px]"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          disabled={query === ""}
          onClick={() => router.push(`/search/${query}`)}
        >
          <Search className="cursor-pointer h-4 w-4 hover:text-red-1" />
        </button>
      </div>

      <div className="relative flex gap-3 items-center">
        {/* Thêm icon Camera */}
        <button
          onClick={() => setIsModalOpen(true)} // Mở modal khi nhấn vào icon camera
          className="cursor-pointer"
        >
          <Camera className="h-5 w-5 hover:text-red-1" />
        </button>

        {/* Modal cho ImageSearch */}
        <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
          <h2>Tải ảnh lên để tìm kiếm sản phẩm</h2>
          <ImageUpload /> {/* Hiển thị component ImageSearch trong modal */}
          <button onClick={closeModal}>Đóng</button> {/* Nút đóng modal */}
        </Modal>

        <Link
          href="/cart"
          className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white max-md:hidden"
        >
          <ShoppingCart />
          <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
        </Link>

        <Menu
          className="cursor-pointer lg:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />

        {dropdownMenu && (
          <div className="absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold lg:hidden">
            <button onClick={handleHomeClick} className="hover:text-red-1">
              Home
            </button>
            <Link
              href={user ? "/wishlist" : "/sign-in"}
              className="hover:text-red-1"
            >
              Wishlist
            </Link>
            <Link
              href={user ? "/orders" : "/sign-in"}
              className="hover:text-red-1"
            >
              Orders
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"
            >
              <ShoppingCart />
              <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
            </Link>
          </div>
        )}

        {user ? (
          <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <Link href="/sign-in">
            <CircleUserRound />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
