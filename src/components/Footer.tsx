export default function Footer() {
  return (
    <footer className="py-8 bg-gray-800 text-gray-400 text-center px-4">
      <p>© {new Date().getFullYear()} PassengerOS. All rights reserved.</p>
      <div className="mt-4 space-x-4">
        <a href="/privacy" className="hover:text-white">Privacy</a>
        <a href="/terms"   className="hover:text-white">Terms</a>
        <a href="mailto:press@passengeros.com" className="hover:text-white">press@passengeros.com</a>
      </div>
    </footer>
  );
}
