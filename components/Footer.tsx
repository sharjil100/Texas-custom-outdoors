export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1725] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-300 text-sm">
          Copyright © Texas Custom Outdoors {year}, All rights Reserved.
        </p>
      </div>
    </footer>
  );
}
